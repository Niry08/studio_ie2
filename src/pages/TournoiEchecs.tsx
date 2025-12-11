import Navigation from "@/components/Navigation";
import RegistrationForm from "@/components/RegistrationForm";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Calendar, MapPin, Users, Award, Trophy } from "lucide-react";

const TournoiEchecs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              <Target className="w-4 h-4" />
              Stratégie
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Championnat d'Échecs
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Démontrez votre maîtrise stratégique lors de notre championnat d'échecs. 
              Tous niveaux acceptés, de l'amateur au grand maître !
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
                        <p className="text-muted-foreground">Mois de mai</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Lieu</p>
                        <p className="text-muted-foreground">-</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Participants</p>
                        <p className="text-muted-foreground">64 places disponibles</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Prix</p>
                        <p className="text-muted-foreground">Produits locaux</p>
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
                      <Trophy className="w-5 h-5 text-secondary mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Phase de pool</p>
                        <p>BO1 - 10min</p>

                        <p className="font-semibold text-foreground">Phase éliminative</p>
                        <p>BO3 - 15min</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-secondary mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Catégories</p>
                        <p>-1000 élos & +1000 élos</p>
                      </div>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg mt-4">
                      <p className="font-semibold text-foreground mb-2">Informations pratiques</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Inscription sur place possible (sous réserve)</li>
                        <li>Restauration et boissons sur place - à voir</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Registration Form */}
            <div>
              <RegistrationForm eventName="le Championnat d'Échecs" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournoiEchecs;
