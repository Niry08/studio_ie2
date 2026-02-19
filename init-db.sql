-- Initialize Studio-ie² Database
-- This script creates the tables for events and registrations

-- Create registrations table for Clash Royale
CREATE TABLE IF NOT EXISTS registrations_clash_royale (
    id SERIAL PRIMARY KEY,
    prenom VARCHAR(100) NOT NULL,
    nom VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telephone VARCHAR(20),
    player_tag VARCHAR(50) NOT NULL,
    classe VARCHAR(50),
    niveau INTEGER CHECK (niveau >= 1 AND niveau <= 15),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(email, player_tag)
);

-- Create registrations table for Chess
CREATE TABLE IF NOT EXISTS registrations_echecs (
    id SERIAL PRIMARY KEY,
    prenom VARCHAR(100) NOT NULL,
    nom VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    telephone VARCHAR(20),
    date_naissance DATE,
    niveau_echecs VARCHAR(50),
    club_affiliation VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create registrations table for Running
CREATE TABLE IF NOT EXISTS registrations_course (
    id SERIAL PRIMARY KEY,
    prenom VARCHAR(100) NOT NULL,
    nom VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    telephone VARCHAR(20),
    date_naissance DATE,
    sexe VARCHAR(10) CHECK (sexe IN ('homme', 'femme', 'autre')),
    categorie_age VARCHAR(50),
    taille_tshirt VARCHAR(10),
    urgence_contact VARCHAR(100),
    urgence_telephone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_clash_email ON registrations_clash_royale(email);
CREATE INDEX IF NOT EXISTS idx_clash_created ON registrations_clash_royale(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_echecs_email ON registrations_echecs(email);
CREATE INDEX IF NOT EXISTS idx_echecs_created ON registrations_echecs(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_course_email ON registrations_course(email);
CREATE INDEX IF NOT EXISTS idx_course_created ON registrations_course(created_at DESC);

-- Insert some test data (optional, remove in production)
-- INSERT INTO registrations_clash_royale (prenom, nom, email, telephone, player_tag, classe, niveau)
-- VALUES ('Test', 'User', 'test@example.com', '+41791234567', '#TEST123', 'Informaticien', 14);

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO postgres;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO postgres;
