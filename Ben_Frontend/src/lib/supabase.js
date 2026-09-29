import { createClient } from "@supabase/supabase-js";

// Same Supabase project as the mobile app (ben-app). The anon key is public;
// row-level security decides what it can read.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// supabase-js has no request timeout, so on a very slow or stalled connection a
// request could hang forever. Abort after this long so the UI can show an error
// with a retry instead of an endless loading state.
const REQUEST_TIMEOUT_MS = 15000;

// Built with a plain AbortController (not AbortSignal.timeout/any) so it works on
// older phone browsers too.
function fetchWithTimeout(input, init = {}) {
  const controller = new AbortController();
  const timer = setTimeout(
    () => controller.abort(new DOMException("Request timed out", "TimeoutError")),
    REQUEST_TIMEOUT_MS,
  );

  const { signal: callerSignal } = init;
  if (callerSignal) {
    if (callerSignal.aborted) controller.abort(callerSignal.reason);
    else callerSignal.addEventListener("abort", () => controller.abort(callerSignal.reason), { once: true });
  }

  return fetch(input, { ...init, signal: controller.signal }).finally(() => clearTimeout(timer));
}

// Left null when unconfigured so only data-backed sections fail, not the whole site.
// The website only reads public data, so there is no user session to persist.
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey, {
        auth: { persistSession: false, autoRefreshToken: false },
        global: { fetch: fetchWithTimeout },
      })
    : null;

export function getSupabase() {
  if (!supabase) {
    throw new Error(
      "Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env.",
    );
  }
  return supabase;
}
