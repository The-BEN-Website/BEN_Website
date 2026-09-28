import { createClient } from "@supabase/supabase-js";

// Same Supabase project as the mobile app (ben-app). The anon key is public;
// row-level security decides what it can read.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Left null when unconfigured so only data-backed sections fail, not the whole site.
// The website only reads public data, so there is no user session to persist.
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey, {
        auth: { persistSession: false, autoRefreshToken: false },
      })
    : null;

export function getSupabase() {
  if (!supabase) {
    throw new Error(
      "Supabase is not configured. Copy .env.example to .env.local and set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.",
    );
  }
  return supabase;
}
