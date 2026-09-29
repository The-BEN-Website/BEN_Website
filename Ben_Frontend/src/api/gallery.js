import { getSupabase } from "../lib/supabase";

// Albums are derived from the free-text `category` on gallery_images (there is no
// separate categories table). Images without a category are grouped under a
// synthetic album so they are still reachable.
export const UNCATEGORIZED_SLUG = "more";
export const UNCATEGORIZED_TITLE = "More Photos";

const ALBUM_SCAN_LIMIT = 2000;

export function albumSlug(category) {
  return category === null ? UNCATEGORIZED_SLUG : encodeURIComponent(category);
}

export function categoryFromSlug(slug) {
  return slug === UNCATEGORIZED_SLUG ? null : decodeURIComponent(slug);
}

// One entry per category with its newest image as the cover, newest album first;
// the uncategorized album, if any, is always last.
export async function listGalleryAlbums() {
  const { data, error } = await getSupabase()
    .from("gallery_images")
    .select("category, image_url")
    .order("created_at", { ascending: false })
    .limit(ALBUM_SCAN_LIMIT);

  if (error) throw error;

  const albums = new Map();
  for (const { category, image_url: imageUrl } of data ?? []) {
    const existing = albums.get(category);
    if (existing) existing.count += 1;
    else albums.set(category, { category, cover: imageUrl, count: 1 });
  }

  const named = [...albums.values()].filter((album) => album.category !== null);
  const uncategorized = albums.get(null);
  return uncategorized ? [...named, uncategorized] : named;
}

// A page of images in one album, newest first. Pass the last item's `created_at`
// as `before` to load the next page.
export async function listGalleryImages({ category, before, limit = 24 }) {
  let query = getSupabase()
    .from("gallery_images")
    .select("id, title, image_url, created_at")
    .order("created_at", { ascending: false })
    .limit(limit);

  query = category === null ? query.is("category", null) : query.eq("category", category);
  if (before) query = query.lt("created_at", before);

  const { data, error } = await query;
  if (error) throw error;
  return data ?? [];
}
