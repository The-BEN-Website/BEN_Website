import { getSupabase } from "../lib/supabase";

// Weekly services managed on the admin dashboard's Service Times page. Only
// running services that are open to everyone (`is_public`) are advertised here;
// meetings for a select group, like the Workers Meeting, are left out.
export async function listServiceTimes() {
  const { data, error } = await getSupabase()
    .from("service_times")
    .select("id, day, name, time")
    .eq("is_active", true)
    .eq("is_public", true)
    .order("sort_order", { ascending: true });

  if (error) throw error;
  return data ?? [];
}
