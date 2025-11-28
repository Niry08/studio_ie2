import Navigation from "@/components/Navigation";
import RegistrationForm from "@/components/RegistrationForm";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Calendar, MapPin, Users, Award, Target } from "lucide-react";

const TournoiClash = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              <Trophy className="w-4 h-4" />
              E-sport
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Tournoi Clash Royale
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Participez à un tournoi Clash Royale en interne au Ceff. Relevez le défi, affrontez les autres étudiants et devenez le maître incontesté !
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
                        <p className="text-muted-foreground">15 Janvier 2025, 14h00 - 20h00</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Lieu</p>
                        <p className="text-muted-foreground">Au Ceff Industrie</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Participants</p>
                        <p className="text-muted-foreground">128 places disponibles</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Frais inscription</p>
                        <p className="text-muted-foreground">Gratuit</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-6">Format du tournoi</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-secondary mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Phase de groupes</p>
                        <p>8 groupes de 16 joueurs, format Swiss</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Trophy className="w-5 h-5 text-secondary mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Phase finale</p>
                        <p>Les 32 meilleurs joueurs en élimination directe</p>
                      </div>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg mt-4">
                      <p className="font-semibold text-foreground mb-2">Conditions de participation</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Niveau HDV 13 minimum</li>
                        <li>Compte actif depuis au moins 3 mois</li>
                        <li>Connexion Discord obligatoire</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Registration Form */}
            <div>
              <RegistrationForm eventName="le Tournoi Clash of Royale" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournoiClash;
