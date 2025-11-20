import { NavLink } from "@/components/NavLink";
import { Trophy, Users, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink 
            to="/" 
            className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            <Trophy className="w-6 h-6" />
            Studio ie^2
          </NavLink>

          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="hidden md:flex items-center gap-6">
            <NavLink 
              to="/" 
              className="text-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-semibold"
            >
              Accueil
            </NavLink>
            <NavLink 
              to="/tournoi-clash" 
              className="text-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-semibold"
            >
              Tournoi Clash Royale
            </NavLink>
            <NavLink 
              to="/tournoi-echecs" 
              className="text-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-semibold"
            >
              Tournoi Échecs
            </NavLink>
            <NavLink 
              to="/course-a-pied" 
              className="text-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-semibold"
            >
              Course à Pied
            </NavLink>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-3">
            <NavLink 
              to="/" 
              className="block text-foreground hover:text-primary transition-colors py-2"
              activeClassName="text-primary font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </NavLink>
            <NavLink 
              to="/tournoi-clash" 
              className="block text-foreground hover:text-primary transition-colors py-2"
              activeClassName="text-primary font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Tournoi Clash Royale
            </NavLink>
            <NavLink 
              to="/tournoi-echecs" 
              className="block text-foreground hover:text-primary transition-colors py-2"
              activeClassName="text-primary font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Tournoi Échecs
            </NavLink>
            <NavLink 
              to="/course-a-pied" 
              className="block text-foreground hover:text-primary transition-colors py-2"
              activeClassName="text-primary font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Course à Pied
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
