import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cjssyuotmkypsaszwyui.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqc3N5dW90bWt5cHNhc3p3eXVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkyNTI0NTMsImV4cCI6MTk5NDgyODQ1M30.UrMnEX1VHBBwzf3ND1f_e44C7mbWiIjJFlVG6mgWSdM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
