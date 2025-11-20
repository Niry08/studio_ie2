-- Create registrations table for event sign-ups
CREATE TABLE public.registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_name TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert registrations (public form submissions)
CREATE POLICY "Anyone can insert registrations"
ON public.registrations
FOR INSERT
WITH CHECK (true);

-- Only allow reading registrations for authenticated admins (future feature)
CREATE POLICY "Only authenticated users can view registrations"
ON public.registrations
FOR SELECT
USING (auth.role() = 'authenticated');

-- Create index for faster queries
CREATE INDEX idx_registrations_event ON public.registrations(event_name);
CREATE INDEX idx_registrations_created_at ON public.registrations(created_at DESC);