import { getSupabase } from "../lib/supabase";

// Weekly services managed on the admin dashboard's Service Times page that are
// open to everyone (`is_public`); meetings for a select group, like the Workers
// Meeting, are left out. Includes services not currently running (`is_active`
// false) so the "Join Us" cards can still list them; callers that need what's
// actually happening (the hero's upcoming services) filter on `is_active`.
export async function listServiceTimes() {
  const { data, error } = await getSupabase()
    .from("service_times")
    .select("id, day, name, time, image_url, is_active")
    .eq("is_public", true)
    .order("sort_order", { ascending: true });

  if (error) throw error;
  return data ?? [];
}
