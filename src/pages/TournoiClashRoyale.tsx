import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Calendar, MapPin, Users, Award, ListCheck, Medal } from "lucide-react";

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
              Participez au tournoi Clash Royale du Ceff Industrie. Relevez le défi, affrontez les autres étudiants et devenez le maître incontesté !
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Event Details */}
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-3">Détails de l'événement</h2>
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
                        <p className="text-muted-foreground">Ceff Industrie, Baptiste-Savoye 26, 2610 St-Imier</p>
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
                    <div className="flex items-start gap-3">
                      <ListCheck className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Requis</p>
                        <p className="text-muted-foreground">Compte Discord</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Medal className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Prix</p>
                        <p className="text-muted-foreground">Pass Royal + Cash Prize</p>
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
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-sm font-bold text-primary">1</span>
                        </div>
                        <h3 className="font-bold text-lg">Phase de groupes</h3>
                      </div>
                      <p className="text-muted-foreground ml-11">
                        32 groupes de 4 joueurs. Les deux premiers de chaque groupe se qualifient pour la phase éliminatoire.
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
                        Tableau à élimination directe pour les 64 joueurs qualifiés.
                      </p>
                      <div className="ml-11 space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                          <span className="text-sm text-muted-foreground">Quarts de finale : Best of 3</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                          <span className="text-sm text-muted-foreground">Finale : Best of 5</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Registration Form */}
            <div>
              <RegistrationForm eventName="Clash Royale" showClashRoyalFields />
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
                { name: "Ceff Industrie", logo: "/sponsors_images/clash_royale/ceff_industrie.png", url: "https://www.ceff.ch" },
                { name: "Pr. Düscher", logo: "/sponsors_images/clash_royale/duscher.png", url: "mailto:Ismael.Duescher@ceff.ch" }
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