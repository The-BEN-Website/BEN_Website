// Supabase Storage serves a public object as an attachment (named `filename`)
// when the `download` query parameter is set.
export function storageDownloadUrl(fileUrl, name) {
  const extension = new URL(fileUrl).pathname.split(".").pop();
  const url = new URL(fileUrl);
  url.searchParams.set("download", `${name}.${extension}`);
  return url.toString();
}
