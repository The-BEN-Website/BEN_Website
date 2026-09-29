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

// Supabase Storage serves a public object as an attachment when `download` is set.
export function songDownloadUrl(song) {
  const extension = song.audio_url.split(".").pop();
  const url = new URL(song.audio_url);
  url.searchParams.set("download", `${song.title}.${extension}`);
  return url.toString();
}
