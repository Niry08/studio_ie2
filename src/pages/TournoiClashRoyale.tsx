import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Calendar, MapPin, Users, Award, Target } from "lucide-react";

const TournoiClashRoyale = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              <Trophy className="w-4 h-4" />
              E-sport
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
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
                        <p className="text-muted-foreground">Mai 2026</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Lieu</p>
                        <p className="text-muted-foreground">Ceff Industrie</p>
                        <p className="text-muted-foreground">Baptiste-Savoye 26, 2610 St-Imier</p>
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
                        <p>32 groupes de 4 joueurs - les 2 premiers de chaque groupe en phase éliminatoire</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Trophy className="w-5 h-5 text-secondary mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Phase éliminatoire</p>
                        <p>Les 64 joueurs restants en élimination directe</p>
                        <p>BO3 depuis les quarts</p>
                        <p>BO5 pour la finale</p>
                      </div>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg mt-4">
                      <p className="font-semibold text-foreground mb-2">Conditions de participation</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Connexion Discord obligatoire</li>
                        <li>Compte Clash Royale requis</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Registration Form */}
            <div>
              <RegistrationForm eventName="Clash Royale" showClashRoyalFields />
            </div>
          </div>

          {/* Sponsors Section */}
          <div className="mt-12 md:mt-20 mb-12 md:mb-16">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3">Notre Sponsor</h2>
              <p className="text-muted-foreground text-sm md:text-base">Merci à notre partenaire qui rend cet événement possible</p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:gap-8 items-center max-w-md mx-auto">
              {[
                { name: "CEFF Industrie", logo: "/sponsors_images/clash_royale/ceff_industrie.png", url: "https://www.ceff.ch" }
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

export default TournoiClashRoyale;