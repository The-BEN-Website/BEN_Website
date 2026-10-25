import { getSupabase } from "../lib/supabase";

// Whether an admin has opened birthday messages for the Pastor.
export async function getBirthdayMessagesOpen() {
  const { data, error } = await getSupabase()
    .from("birthday_settings")
    .select("messages_open")
    .single();

  if (error) throw error;
  return data.messages_open;
}

// Messages are private: the public can only send one through this function
// (see ben-app migration `birthday_messages`); admins read them in the dashboard.
export async function submitBirthdayMessage(id, { fullName, phone, message }) {
  const { error } = await getSupabase().rpc("submit_birthday_message", {
    p_id: id,
    p_full_name: fullName.trim(),
    p_phone: phone.trim(),
    p_message: message.trim(),
  });

  if (error) throw error;
}

// The database refuses messages once an admin closes them.
export const isBirthdayMessagesClosedError = (error) =>
  /Birthday messages are closed/.test(error?.message ?? "");
