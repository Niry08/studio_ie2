import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface RegistrationRequest {
  eventName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  clashRoyalTag?: string;
  clashRoyalUsername?: string;
  eloOfficiel?: number;
  elo?: number;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { eventName, firstName, lastName, email, phone, clashRoyalTag, clashRoyalUsername, eloOfficiel, elo }: RegistrationRequest = await req.json();

    console.log('Processing registration:', { eventName, firstName, lastName, email, clashRoyalTag, clashRoyalUsername, eloOfficiel, elo });

    // Validate required fields
    if (!eventName || !firstName || !lastName || !email || !phone) {
      console.error('Missing required fields');
      return new Response(
        JSON.stringify({ error: 'Tous les champs sont obligatoires' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Insert registration into database
    const { data, error } = await supabase
      .from('registrations')
      .insert({
        event_name: eventName,
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        clash_royal_tag: clashRoyalTag || null,
        clash_royal_username: clashRoyalUsername || null,
        elo_officiel: eloOfficiel || null,
        elo: elo || null,
      })
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      return new Response(
        JSON.stringify({ error: 'Erreur lors de l\'enregistrement' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    console.log('Registration successful:', data);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Inscription enregistrée avec succès',
        data 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('Error in submit-registration function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
};

serve(handler);
