import Navigation from "@/components/Navigation";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Trophy, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            <Trophy className="w-4 h-4" />
            Organisation d'événements sportifs
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Vivez des événements inoubliables
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Dans le cadre de notre TPI, nous avons créer notre entriprise d'événementiel. Nous organisons différents événements tels qu'un tournoi Clash Royale, un tournoi d'échecs et une course à pied.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/tournoi-clash">
              <Button size="lg" className="shadow-elegant">
                Découvrir nos événements
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      {/* <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Notre expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Spécialistes de l'organisation d'événements sportifs et e-sportifs depuis plus de 5 ans
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-hero rounded-2xl flex items-center justify-center">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100+ Événements</h3>
              <p className="text-muted-foreground">Organisés avec succès chaque année</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-hero rounded-2xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">5000+ Participants</h3>
              <p className="text-muted-foreground">Rejoignent nos compétitions</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-hero rounded-2xl flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground">Une expérience mémorable garantie</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Events Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Événements à venir</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos prochains tournois et inscrivez-vous dès maintenant
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <EventCard
              title="Tournoi Clash Royale"
              description="Affrontez les meilleurs joueurs dans un tournoi épique de Clash Royale du Ceff"
              date="Vendredi avant les vacances de Pâques"
              location="Ceff Industrie"
              participants="128 places disponibles"
              link="/tournoi-clash"
              icon={<Trophy className="w-6 h-6" />}
            />
            <EventCard
              title="Tournoi d'Échecs"
              description="Démontrez votre stratégie dans notre championnat d'échecs"
              date="Mois de mai"
              location="-"
              participants="2x32 places disponibles"
              link="/tournoi-echecs"
              icon={<Target className="w-6 h-6" />}
            />
            <EventCard
              title="Course à Pied"
              description="Course de 6km dans un cadre exceptionnel"
              date="09.05.2025"
              location="Aegerten"
              participants="200 places disponibles"
              link="/course-a-pied"
              icon={<Award className="w-6 h-6" />}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-muted/30 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Studio-ie^2. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
