// Gallery images are hosted on Cloudinary. Inserting a transformation after
// `/upload/` returns a resized, auto-format, auto-quality variant instead of the
// original upload. Non-Cloudinary URLs are returned unchanged.
export function cloudinaryResize(url, { width, height }) {
  if (!url || !url.includes("res.cloudinary.com") || !url.includes("/upload/")) return url;

  const transform = [
    height ? "c_fill,g_auto" : "c_limit",
    `w_${width}`,
    height && `h_${height}`,
    "q_auto",
    "f_auto",
  ]
    .filter(Boolean)
    .join(",");

  return url.replace("/upload/", `/upload/${transform}/`);
}

// Link that makes Cloudinary serve the original file as a download
// (Content-Disposition: attachment) rather than displaying it.
export function cloudinaryDownload(url) {
  if (!url || !url.includes("res.cloudinary.com") || !url.includes("/upload/")) return url;
  return url.replace("/upload/", "/upload/fl_attachment/");
}
