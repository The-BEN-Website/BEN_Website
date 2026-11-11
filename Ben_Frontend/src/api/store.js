import { getSupabase } from "../lib/supabase";
export const checkoutConfigured = true;
export async function loadCampCatalogue() {
  const db = getSupabase();
  const [products, settings] = await Promise.all([
    db
      .from("store_products")
      .select("id,name,tagline,description,price_kobo,options,updated_at")
      .eq("active", true)
      .order("sort_order")
      .order("name"),
    db
      .from("store_settings")
      .select("checkout_open,collection_note")
      .eq("id", true)
      .single(),
  ]);
  if (products.error || settings.error)
    throw Error(
      "The store is temporarily unavailable. Please try again shortly.",
    );
  return { products: products.data, settings: settings.data };
}
export async function campStoreRequest(action, data) {
  const base = "https://benappadmin.vercel.app/api/store";
  if (!base)
    throw Error("Checkout is not available yet. Please check back soon.");
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000);
  try {
    const response = await fetch(
      `${base.replace(/\/$/, "")}?action=${encodeURIComponent(action)}`,
      {
        method: data ? "POST" : "GET",
        headers: data ? { "Content-Type": "application/json" } : {},
        body: data ? JSON.stringify(data) : undefined,
        signal: controller.signal,
      },
    );
    const result = await response.json().catch(() => null);
    if (!response.ok || !result)
      throw Error(
        result?.error ||
          "The store is temporarily unavailable. Please try again.",
      );
    return result;
  } catch (error) {
    if (error.name === "AbortError")
      throw Error(
        "The request timed out. Retry with the same order; do not start another payment.",
      );
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}
