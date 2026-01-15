import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Trophy, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-60 px-4 overflow-hidden min-h-[800px] md:min-h-[900px] flex items-center">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 via-60% to-background z-10"></div>
          <img 
            src="/3_images.png" 
            alt="Studio-ie² Team" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Contenu */}
        <div className="container mx-auto text-center relative z-20 w-full">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm text-white border border-white/20 rounded-full text-sm font-semibold">
            <Trophy className="w-4 h-4" />
            Organisation d'événements sportifs
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
            Vivez des événements inoubliables
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 drop-shadow-lg">
            Dans le cadre de notre TPI, nous avons dû créer notre entreprise d'événementiel. Nous allons organiser différents événements tels qu'un tournoi Clash Royale, un tournoi d'échecs et une course à pied.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/tournoi-clash">
              <Button size="lg" className="shadow-elegant bg-primary hover:bg-primary/90 text-white">
                Découvrir nos événements
              </Button>
            </Link>
          </div>
        </div>
      </section>

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

      {/* About us */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">À propos de nous</h2>
            <p className="text-lg text-muted-foreground">
              Projet TPI - Ceff Industrie St-Imier
            </p>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row items-start gap-6 p-8 rounded-2xl bg-card border-l-4 border-primary shadow-sm">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Notre Mission</h3>
                <p className="text-muted-foreground text-base">
                  Créer et organiser des événements sportifs et compétitifs de qualité dans le cadre de notre maturité professionnelle au Ceff Industrie.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-6 p-8 rounded-2xl bg-card border-l-4 border-primary shadow-sm">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Studio-ie²</h3>
                <p className="text-muted-foreground text-base">
                  Notre entreprise d'événementiel tire son nom de nos initiales : <span className="font-semibold text-foreground">I</span>oan Charpilloz, <span className="font-semibold text-foreground">E</span>than Hofstetter et <span className="font-semibold text-foreground">E</span>than Bracelli.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-6 p-8 rounded-2xl bg-card border-l-4 border-primary shadow-sm">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Notre Équipe</h3>
                <p className="text-muted-foreground text-base">
                  Une équipe pluridisciplinaire composée de 2 informaticiens et 1 électronicien, tous en dernière année au Ceff Industrie de St-Imier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
