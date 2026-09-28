import { getSupabase } from "../lib/supabase";

// Active church branches, in the order set in the admin dashboard.
export async function listLocations() {
  const { data, error } = await getSupabase()
    .from("locations")
    .select("id, name, address, phones")
    .eq("is_active", true)
    .order("sort_order", { ascending: true })
    .order("name", { ascending: true });

  if (error) throw error;
  return data ?? [];
}
