import React from "react";
import { Instagram, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo et nom */}
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <img 
              src="/favicon.ico" 
              alt="Logo Studio ie^2" 
              className="w-24 h-24"
            />
            <div>
              <h3 className="text-xl font-bold text-foreground">Studio ie²</h3>
              <p className="text-sm text-muted-foreground">Événements sportifs</p>
            </div>
          </div>

          {/* Liens de navigation */}
          <nav className="flex flex-col md:flex-row gap-4 items-center justify-center" aria-label="Liens du pied de page">
            <a 
              href="/" 
              className="text-foreground hover:text-primary transition-colors"
            >
              Accueil
            </a>
            <a 
              href="/tournoi-clash-royale" 
              className="text-foreground hover:text-primary transition-colors"
            >
              Clash Royale
            </a>
            <a 
              href="/tournoi-echecs" 
              className="text-foreground hover:text-primary transition-colors"
            >
              Échecs
            </a>
            <a 
              href="/course-a-pied" 
              className="text-foreground hover:text-primary transition-colors"
            >
              Course à pied
            </a>
          </nav>

          {/* Réseaux sociaux et copyright */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4" aria-label="Réseaux sociaux">
              <a 
                href="https://www.instagram.com/lakerun_biel/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@studio-ie2.ch"
                aria-label="Email"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {year} Studio ie². Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;