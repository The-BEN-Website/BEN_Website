import { getSupabase } from "../lib/supabase";

// Registers interest in the Discipleship Class. The table is insert-only for
// the public (see ben-app migration `discipleship_interests`), so nothing is
// read back after the insert.
export async function submitDiscipleshipInterest({ fullName, phone, email }) {
  const { error } = await getSupabase()
    .from("discipleship_interests")
    .insert({
      full_name: fullName.trim(),
      phone: phone.trim(),
      email: email.trim() || null,
    });

  if (error) throw error;
}
