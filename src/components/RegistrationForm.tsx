import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface RegistrationFormProps {
  eventName: string;
  showClashRoyalFields?: boolean;
  showChessFields?: boolean;
}

const RegistrationForm = ({ eventName, showClashRoyalFields = false, showChessFields = false }: RegistrationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    clashRoyalTag: "",
    clashRoyalUsername: "",
    eloOfficiel: "",
    elo: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('submit-registration', {
        body: {
          eventName,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          clashRoyalTag: formData.clashRoyalTag || null,
          clashRoyalUsername: formData.clashRoyalUsername || null,
          eloOfficiel: formData.eloOfficiel ? parseInt(formData.eloOfficiel) : null,
          elo: formData.elo ? parseInt(formData.elo) : null,
        },
      });

      if (error) throw error;

      toast.success("Inscription réussie !", {
        description: `Vous êtes inscrit(e) pour ${eventName}. Un email de confirmation vous sera envoyé.`,
      });
      
      setFormData({ firstName: "", lastName: "", email: "", phone: "", clashRoyalTag: "", clashRoyalUsername: "", eloOfficiel: "", elo: "" });
    } catch (error) {
      console.error('Registration error:', error);
      toast.error("Erreur lors de l'inscription", {
        description: "Une erreur s'est produite. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle>Formulaire d'inscription</CardTitle>
        <CardDescription>Remplissez vos informations pour participer à {eventName}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Prénom *</Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Votre prénom"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Nom *</Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Votre nom"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="votre.email@exemple.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Téléphone *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+41 78 123 45 67"
            />
          </div>

          {showClashRoyalFields && (
            <>
              <div className="space-y-2">
                <Label htmlFor="clashRoyalTag">Tag Clash Royale</Label>
                <Input
                  id="clashRoyalTag"
                  name="clashRoyalTag"
                  type="text"
                  value={formData.clashRoyalTag}
                  onChange={handleChange}
                  placeholder="#ABC123XYZ"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="clashRoyalUsername">Pseudo Clash Royale</Label>
                <Input
                  id="clashRoyalUsername"
                  name="clashRoyalUsername"
                  type="text"
                  value={formData.clashRoyalUsername}
                  onChange={handleChange}
                  placeholder="Votre pseudo en jeu"
                />
              </div>
            </>
          )}

          {showChessFields && (
            <>
              <div className="space-y-2">
                <Label htmlFor="eloOfficiel">Elo officiel (FIDE/FSE)</Label>
                <Input
                  id="eloOfficiel"
                  name="eloOfficiel"
                  type="number"
                  value={formData.eloOfficiel}
                  onChange={handleChange}
                  placeholder="1500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="elo">Elo estimé (Chess.com/Lichess)</Label>
                <Input
                  id="elo"
                  name="elo"
                  type="number"
                  value={formData.elo}
                  onChange={handleChange}
                  placeholder="1200"
                />
              </div>
            </>
          )}

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Inscription en cours..." : "S'inscrire maintenant"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegistrationForm;
