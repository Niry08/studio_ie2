import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Calendar, MapPin, Users, Award, Trophy } from "lucide-react";

const TournoiEchecs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              <Target className="w-4 h-4" />
              Stratégie
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Tournoi d'Échecs
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
                        <p className="text-muted-foreground">Bâtiment communal - La Rue de la Valle 19, 2738 Court</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Participants</p>
                        <p className="text-muted-foreground">32 places - séprarées en 2 groupes (top 16 & bottom 16)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Prix</p>
                        <p className="text-muted-foreground">Produits locaux + bons cadeaux + cash prizes</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tournament Format */}
              <div>
                <Card>
                  <CardContent className="pt-4 space-y-6">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">Format du tournoi</h2>
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-sm font-bold text-primary">1</span>
                        </div>
                        <h3 className="font-bold text-lg">Ronde Suisse</h3>
                      </div>
                      <p className="text-muted-foreground ml-11">
                        3 victoires te qualifie, 3 défaites t'élimine.
                      </p>
                    </div>

                    <div className="border-t pt-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-sm font-bold text-primary">2</span>
                        </div>
                        <h3 className="font-bold text-lg">Phase éliminatoire</h3>
                      </div>
                      <p className="text-muted-foreground ml-11 mb-3">
                        Arbre à élimination directe pour les 2x 8 meilleurs joueurs de chaque groupe.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Registration Form */}
            <div>
              <RegistrationForm eventName="Chess" showChessFields />
            </div>
          </div>

          {/* Sponsors Section */}
          <div className="mt-12 md:mt-20 mb-12 md:mb-16">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3">Nos Partenaires</h2>
              <p className="text-muted-foreground text-sm md:text-base">Merci à nos partenaires qui rendent cet événement possible</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 items-center max-w-2xl mx-auto">
              {[
                { name: "Club d'Échecs Court", logo: "/sponsors_images/echecs/club_echecs_court.png", url: "https://cecourt.ch" },
                { name: "Croisitour", logo: "/sponsors_images/echecs/croisitour.png", url: "https://www.croisitour.ch" }
              ].map((sponsor) => (
                <a
                  key={sponsor.name}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-card rounded-xl p-4 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 hover:border-primary/30 cursor-pointer"
                >
                  <div className="flex flex-col items-center justify-center gap-3 md:gap-4">
                    <div className="relative w-full h-16 md:h-24 flex items-center justify-center">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="max-w-full max-h-full object-contain transition-all duration-300"
                      />
                    </div>
                    <p className="text-xs md:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {sponsor.name}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TournoiEchecs;
