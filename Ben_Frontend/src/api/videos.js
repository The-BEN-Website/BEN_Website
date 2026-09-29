import { getSupabase } from "../lib/supabase";

// `video_sermons` holds every video; `is_sermon` splits sermons from other videos
// (the app shows them as separate "Sermons" and "Videos" screens).
export const VIDEO_TYPES = {
  sermons: { label: "Sermons", isSermon: true },
  videos: { label: "Other Videos", isSermon: false },
};

const VIDEO_FIELDS = "id, title, description, category, youtube_video_id, published_at, is_sermon";

// A page of active videos of one type, newest first. Pass the last item's
// `published_at` as `before` for the next page.
export async function listVideos({ type, search, before, limit = 24 }) {
  let query = getSupabase()
    .from("video_sermons")
    .select(VIDEO_FIELDS)
    .eq("is_active", true)
    .eq("is_sermon", VIDEO_TYPES[type].isSermon)
    .order("published_at", { ascending: false })
    .limit(limit);

  if (search) query = query.ilike("title", `%${search}%`);
  if (before) query = query.lt("published_at", before);

  const { data, error } = await query;
  if (error) throw error;
  return data ?? [];
}

export async function getVideo(id) {
  const { data, error } = await getSupabase()
    .from("video_sermons")
    .select(VIDEO_FIELDS)
    .eq("id", id)
    .eq("is_active", true)
    .maybeSingle();

  if (error) throw error;
  return data;
}
