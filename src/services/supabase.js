import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hkoomqmtwbxsljhhrygc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhrb29tcW10d2J4c2xqaGhyeWdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4MDY2MTksImV4cCI6MjA2MjM4MjYxOX0.fW072zMw8iaXQ3ycYdMEZD0Ns7F1pkZtjOs4H4M5XCA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
