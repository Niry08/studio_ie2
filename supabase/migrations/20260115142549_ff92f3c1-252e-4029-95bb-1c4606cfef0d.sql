-- Add new nullable columns for Clash Royale and chess info
ALTER TABLE public.registrations
ADD COLUMN clash_royal_tag text,
ADD COLUMN clash_royal_username text,
ADD COLUMN elo_officiel integer,
ADD COLUMN elo integer;