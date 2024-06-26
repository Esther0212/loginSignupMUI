import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_BASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log("supabaseUrl:", supabaseUrl);
console.log("supabaseAnonKey:", supabaseAnonKey);

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("supabaseUrl and supabaseAnonKey are required.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
