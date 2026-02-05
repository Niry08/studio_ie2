-- Add internet connection and operator fields for Clash Royale tournament
ALTER TABLE public.registrations
ADD COLUMN has_internet_connection boolean DEFAULT NULL,
ADD COLUMN mobile_operator text DEFAULT NULL;