import Navigation from "@/components/Navigation";
import RegistrationForm from "@/components/RegistrationForm";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Calendar, MapPin, Users, Trophy, Target } from "lucide-react";

const CourseAPied = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              <Award className="w-4 h-4" />
              Sport
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Course à Pied 10km
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Participez à notre course de 10km dans un cadre exceptionnel. 
              Que vous soyez débutant ou coureur confirmé, relevez le défi !
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Event Details */}
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-6">Détails de l'événement</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Date</p>
                        <p className="text-muted-foreground">5 Février 2025, 9h00 - 13h00</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Lieu</p>
                        <p className="text-muted-foreground">Départ: Parc de la Ville, Avenue du Sport</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Participants</p>
                        <p className="text-muted-foreground">200 places disponibles</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Prix</p>
                        <p className="text-muted-foreground">Médailles pour tous + prix pour les 3 premiers</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-6">Parcours et catégories</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <Trophy className="w-5 h-5 text-secondary mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Parcours</p>
                        <p>10km en boucle dans le parc, parcours homologué FFA</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-secondary mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Catégories</p>
                        <p>Hommes, Femmes, Jeunes (16-18 ans), Vétérans (+50 ans)</p>
                      </div>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg mt-4">
                      <p className="font-semibold text-foreground mb-2">Informations pratiques</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Certificat médical obligatoire</li>
                        <li>Dossards à retirer 1h avant la course</li>
                        <li>Ravitaillements tous les 2,5km</li>
                        <li>Vestiaires et douches disponibles</li>
                        <li>Remise des prix à 12h30</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Registration Form */}
            <div>
              <RegistrationForm eventName="la Course à Pied 10km" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseAPied;
