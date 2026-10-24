import { getSupabase } from "../lib/supabase";

// Whether registration is open, for which year's camp, and the camp flyer if
// one has been uploaded (all set in the admin).
export async function getHscmSettings() {
  const { data, error } = await getSupabase()
    .from("hscm_settings")
    .select("registration_open, camp_year, flyer_url")
    .single();

  if (error) throw error;
  return { isOpen: data.registration_open, year: data.camp_year, flyerUrl: data.flyer_url };
}

// Units the admin has marked as shown on the registration form.
export async function listServiceUnits() {
  const { data, error } = await getSupabase()
    .from("service_units")
    .select("id, name")
    .order("sort_order")
    .order("name");

  if (error) throw error;
  return data;
}

// A random id for one registration. The form keeps it across retries so a
// resend after a timeout can't create a duplicate (the database ignores an id
// it has already saved). getRandomValues covers browsers without randomUUID.
export function newRegistrationId() {
  if (typeof crypto.randomUUID === "function") return crypto.randomUUID();
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

// Registrations are private: the public can only submit them through this
// function (see ben-app migration `hscm_registrations`), which files it under
// the current camp year and saves it with its service units together. Resolves
// to the registration number the person uses at accreditation.
export async function submitHscmRegistration(id, values) {
  const { data, error } = await getSupabase().rpc("submit_hscm_registration", {
    p_id: id,
    p_full_name: values.fullName.trim(),
    p_email: values.email.trim(),
    p_phone: values.phone.trim(),
    p_gender: values.gender,
    p_can_pay_fee: values.canPayFee === "yes",
    p_service_unit_ids: values.serviceUnitIds,
    p_has_allergies: values.hasAllergies === "yes",
    p_allergy_details: values.allergyDetails.trim(),
    p_has_health_notes: values.hasHealthNotes === "yes",
    p_health_details: values.healthDetails.trim(),
    p_departure_location: values.departureLocation.trim(),
    p_emergency_contact_name: values.emergencyName.trim(),
    p_emergency_contact_phone: values.emergencyPhone.trim(),
    p_emergency_contact_relationship: values.emergencyRelationship.trim(),
  });

  if (error) throw error;
  return data;
}

// The database refuses submissions once an admin closes registration.
export const isRegistrationClosedError = (error) =>
  /Registration is closed/.test(error?.message ?? "");
