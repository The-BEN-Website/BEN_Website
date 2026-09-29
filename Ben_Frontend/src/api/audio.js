import { getSupabase } from "../lib/supabase";

// Audio recordings of teachings, newest first (the app's "Audio Recordings" screen).
export async function listAudioTeachings() {
  const { data, error } = await getSupabase()
    .from("audio_sermons")
    .select("id, title, category, audio_url, duration_seconds, published_at")
    .order("published_at", { ascending: false });

  if (error) throw error;
  return data ?? [];
}
