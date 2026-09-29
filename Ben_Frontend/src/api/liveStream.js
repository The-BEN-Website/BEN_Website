import { getSupabase } from "../lib/supabase";

// The single live-stream status row the admin dashboard's Live Stream page
// manages (same row the mobile app reads).
export async function getLiveStreamStatus() {
  const { data, error } = await getSupabase()
    .from("live_stream_status")
    .select("is_live, title, youtube_video_id, meeting_url, next_service_at")
    .eq("id", 1)
    .maybeSingle();

  if (error) throw error;
  return data;
}
