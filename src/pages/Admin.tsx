import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Download, Lock, RefreshCw, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface Registration {
  id: string;
  created_at: string;
  event_name: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  clash_royal_tag: string | null;
  clash_royal_username: string | null;
  elo_officiel: number | null;
  elo: number | null;
  has_internet_connection: boolean | null;
  mobile_operator: string | null;
}

const DEVICE_AUTH_KEY = "Pa$$w0rd";
const PASSWORD_DB = "fete-etudiante-admin-2024";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedAuth = localStorage.getItem(DEVICE_AUTH_KEY);
    if (savedAuth === "true") {
      setIsAuthenticated(true);
      fetchRegistrations();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === PASSWORD_DB) {
      localStorage.setItem(DEVICE_AUTH_KEY, "true");
      setIsAuthenticated(true);
      toast.success("Connexion réussie");
      fetchRegistrations();
    } else {
      toast.error("Mot de passe incorrect");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(DEVICE_AUTH_KEY);
    setIsAuthenticated(false);
    setRegistrations([]);
    toast.success("Déconnexion réussie");
  };

  const fetchRegistrations = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('get-registrations', {
        headers: {
          'x-admin-password': PASSWORD_DB
        }
      });

      if (error) throw error;

      if (data?.success) {
        setRegistrations(data.data || []);
      } else {
        throw new Error(data?.error || 'Erreur inconnue');
      }
    } catch (error) {
      console.error('Error fetching registrations:', error);
      toast.error("Erreur lors du chargement des inscriptions");
    } finally {
      setIsLoading(false);
    }
  };

  const downloadCSV = () => {
    if (registrations.length === 0) {
      toast.error("Aucune donnée à exporter");
      return;
    }

    const headers = [
      "ID",
      "Date d'inscription",
      "Événement",
      "Prénom",
      "Nom",
      "Email",
      "Téléphone",
      "Tag Clash Royale",
      "Pseudo Clash Royale",
      "Elo Officiel",
      "Elo Estimé"
    ];

    const rows = registrations.map(reg => [
      reg.id,
      new Date(reg.created_at).toLocaleString('fr-CH'),
      reg.event_name,
      reg.first_name,
      reg.last_name,
      reg.email,
      reg.phone,
      reg.clash_royal_tag || "",
      reg.clash_royal_username || "",
      reg.elo_officiel?.toString() || "",
      reg.elo?.toString() || "",
      reg.has_internet_connection.toString() || "",
      reg.mobile_operator || ""
    ]);

    const csvContent = [
      headers.join(";"),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(";"))
    ].join("\n");

    const blob = new Blob(["\uFEFF" + csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `inscriptions_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("CSV téléchargé avec succès");
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-CH', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Navigation />
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <Lock className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
            <CardTitle>Administration</CardTitle>
            <CardDescription>
              Entrez le mot de passe pour accéder à l'espace admin
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Entrez le mot de passe"
                />
              </div>
              <Button type="submit" className="w-full">
                Se connecter
              </Button>
            </form>
            <div className="mt-4 text-center">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
                <ArrowLeft className="inline h-4 w-4 mr-1" />
                Retour à l'accueil
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <Navigation />
      <div className="max-w-7xl mx-auto pt-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Administration</h1>
            <p className="text-muted-foreground">
              Gestion des inscriptions - {registrations.length} inscription(s)
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button variant="outline" onClick={fetchRegistrations} disabled={isLoading}>
              <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              Actualiser
            </Button>
            <Button onClick={downloadCSV} disabled={registrations.length === 0}>
              <Download className="h-4 w-4 mr-2" />
              Télécharger CSV
            </Button>
            <Button onClick={handleLogout}>
              Déconnexion
            </Button>
          </div>
        </div>

        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Événement</TableHead>
                    <TableHead>Nom</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Téléphone</TableHead>
                    <TableHead>Détails</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoading ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8">
                        Chargement...
                      </TableCell>
                    </TableRow>
                  ) : registrations.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                        Aucune inscription pour le moment
                      </TableCell>
                    </TableRow>
                  ) : (
                    registrations.map((reg) => (
                      <TableRow key={reg.id}>
                        <TableCell className="whitespace-nowrap">
                          {formatDate(reg.created_at)}
                        </TableCell>
                        <TableCell>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                            {reg.event_name}
                          </span>
                        </TableCell>
                        <TableCell className="font-medium">
                          {reg.first_name} {reg.last_name}
                        </TableCell>
                        <TableCell>{reg.email}</TableCell>
                        <TableCell>{reg.phone}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {reg.clash_royal_tag && (
                            <div>Tag: {reg.clash_royal_tag}</div>
                          )}
                          {reg.clash_royal_username && (
                            <div>Pseudo: {reg.clash_royal_username}</div>
                          )}
                          {reg.elo_officiel && (
                            <div>Elo officiel: {reg.elo_officiel}</div>
                          )}
                          {reg.elo && (
                            <div>Elo estimé: {reg.elo}</div>
                          )}
                          {reg.elo && (
                            <div>Elo estimé: {reg.elo}</div>
                          )}
                          {reg.has_internet_connection && (
                            <div>Connexion Internet: {reg.has_internet_connection ? "Oui" : "Non"}</div>
                          )}
                          {reg.mobile_operator && (
                            <div>Opérateur mobile: {reg.mobile_operator}</div>
                          )}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <div className="mt-4 text-center">
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="inline h-4 w-4 mr-1" />
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Admin;
