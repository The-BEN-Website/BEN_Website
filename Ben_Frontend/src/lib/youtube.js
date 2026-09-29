// URL helpers for YouTube videos referenced by ID.

export function youtubeThumbnail(videoId) {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

// Privacy-enhanced embed (no cookies until the viewer presses play).
export function youtubeEmbed(videoId) {
  return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`;
}

export function youtubeWatch(videoId) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}
