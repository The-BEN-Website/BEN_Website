import { getSupabase } from "../lib/supabase";

// Sends a message from the Contact page. The table is insert-only for the
// public (see ben-app migration `contact_messages`); admins read it in the dashboard.
export async function submitContactMessage({ name, email, message }) {
  const { error } = await getSupabase()
    .from("contact_messages")
    .insert({ name: name.trim(), email: email.trim(), message: message.trim() });

  if (error) throw error;
}
