import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DEFAULT_DESCRIPTION, DEFAULT_IMAGE, SITE_NAME, SITE_URL } from "../config/site";

// Keeps a <meta>/<link> element in <head>, creating it if index.html lacks it.
function upsert(selector, create, attribute, value) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = create();
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
}

const meta = (key, value, keyAttribute = "name") =>
  upsert(
    `meta[${keyAttribute}="${key}"]`,
    () => {
      const element = document.createElement("meta");
      element.setAttribute(keyAttribute, key);
      return element;
    },
    "content",
    value,
  );

function applyMeta({ title, description, image, url, noindex }) {
  document.title = title;
  meta("description", description);
  meta("robots", noindex ? "noindex, follow" : "index, follow");
  upsert(
    'link[rel="canonical"]',
    () => {
      const link = document.createElement("link");
      link.rel = "canonical";
      return link;
    },
    "href",
    url,
  );

  meta("og:title", title, "property");
  meta("og:description", description, "property");
  meta("og:url", url, "property");
  meta("og:image", image, "property");
  meta("twitter:title", title);
  meta("twitter:description", description);
  meta("twitter:image", image);
}

// Sets the page's title, description, canonical URL and link-preview tags.
// `title` is the page name ("About Us"); the site name is appended. Omit it on
// the home page. Crawlers that run JavaScript (Google) read these; for link
// previews on WhatsApp/Facebook, index.html holds the site-wide defaults.
function usePageMeta({ title, description = DEFAULT_DESCRIPTION, image = DEFAULT_IMAGE, noindex = false } = {}) {
  const { pathname } = useLocation();
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Raising Godly Seeds`;
  const url = `${SITE_URL}${pathname === "/" ? "/" : pathname.replace(/\/$/, "")}`;

  useEffect(() => {
    applyMeta({ title: fullTitle, description, image, url, noindex });
    // Reset on leaving, so pages that don't set their own tags don't inherit these.
    return () =>
      applyMeta({
        title: SITE_NAME,
        description: DEFAULT_DESCRIPTION,
        image: DEFAULT_IMAGE,
        url: SITE_URL + window.location.pathname,
        noindex: false,
      });
  }, [fullTitle, description, image, url, noindex]);
}

export default usePageMeta;
