import { getSupabase } from "../lib/supabase";

// Songs from the music team, newest first (same list the app's Songs screen shows).
export async function listSongs() {
  const { data, error } = await getSupabase()
    .from("songs")
    .select("id, title, singer, audio_url, duration_seconds")
    .order("released_at", { ascending: false });

  if (error) throw error;
  return data ?? [];
}
