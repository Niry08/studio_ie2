import { NavLink } from "@/components/NavLink";
import { Trophy, Menu, X } from "lucide-react";
import { useState } from "react";

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
            Studio ie²
          </NavLink>

          <button 
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="hidden md:flex items-center gap-6">
            <NavLink 
              to="/" 
              className="relative px-4 py-2 text-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
            >
              Accueil
            </NavLink>
            <NavLink 
              to="/tournoi-clash" 
              className="relative px-4 py-2 text-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
            >
              Clash Royale
            </NavLink>
            <NavLink 
              to="/tournoi-echecs" 
              className="relative px-4 py-2 text-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
            >
              Échecs
            </NavLink>
            <NavLink 
              to="/course-a-pied" 
              className="relative px-4 py-2 text-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
            >
              Course à pied
            </NavLink>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border">
            <div className="px-4 py-4 space-y-2">
              <NavLink 
                to="/" 
                className="relative block px-4 py-3 text-foreground hover:text-primary transition-colors"
                activeClassName="text-primary font-semibold after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-primary"
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </NavLink>
              <NavLink 
                to="/tournoi-clash" 
                className="relative block px-4 py-3 text-foreground hover:text-primary transition-colors"
                activeClassName="text-primary font-semibold after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-primary"
                onClick={() => setIsOpen(false)}
              >
                Clash Royale
              </NavLink>
              <NavLink 
                to="/tournoi-echecs" 
                className="relative block px-4 py-3 text-foreground hover:text-primary transition-colors"
                activeClassName="text-primary font-semibold after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-primary"
                onClick={() => setIsOpen(false)}
              >
                Échecs
              </NavLink>
              <NavLink 
                to="/course-a-pied" 
                className="relative block px-4 py-3 text-foreground hover:text-primary transition-colors"
                activeClassName="text-primary font-semibold after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-primary"
                onClick={() => setIsOpen(false)}
              >
                Course à pied
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
