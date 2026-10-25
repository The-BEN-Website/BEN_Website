/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Design tokens
        primary: "#FF3333",
        ink: "#1A1A1A",
        "ink-soft": "#333333",
        subheading: "#383838",
        "ink-muted": "#464646",
        icon: "#414141",
        "detail-title": "#343434",
        "form-label": "#2E2E2E",
        secondary: "#666666",
        label: "#646464",
        subtle: "#717171",
        muted: "#909090",
        caption: "#959595",
        subtitle: "#8F8F8F",
        line: "#EEEEEE",
        "line-strong": "#E5E5E5",
        "input-line": "#E8E8E8",
        "input-hint": "#C8C8C8",
        "icon-line": "#E7E7E7",
        surface: "#F6F6F7",
        placeholder: "#E6E6E6",
        card: "#FDFDFD",
        "card-line": "#F2F2F2",
        tile: "#FCFCFC",
        "tile-line": "#EDEDED",
        // Media category colours
        "media-line": "#EBEBEB",
        "media-red": "#FF3333",
        "media-red-soft": "#FFEAEA",
        "media-green": "#12B76A",
        "media-green-soft": "#12B76A1A",
        "media-blue": "#005EEB",
        "media-blue-soft": "#005EEB1A",
        "media-pink": "#E0218A",
        "media-pink-soft": "#FFEAFC",
        "media-violet": "#7C4DFF",
        "media-violet-soft": "#EDE7FF",
        // Birthday page: balloons and photos, picked from the photoshoot
        "festive-maroon": "#9E1B32",
        "festive-cream": "#F4EBCB",
        "festive-gold": "#F5B83D",
        "festive-blush": "#FFB8B8",
      },
      fontSize: {
        // UI rework type scale
        small: ["15px", { lineHeight: "22.5px" }],
        body: ["18px", { lineHeight: "27px" }],
        display: ["50px", { lineHeight: "1" }],
        heading: ["40px", { lineHeight: "1" }],
        quote: ["114.75px", { lineHeight: "172.13px" }],
      },
      keyframes: {
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "rise-in": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "balloon-rise": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-150vh)" },
        },
        "balloon-sway": {
          "0%, 100%": { transform: "rotate(-8deg)" },
          "50%": { transform: "rotate(8deg)" },
        },
      },
      animation: {
        "fade-in": "fade-in 300ms ease-out",
        "rise-in": "rise-in 700ms cubic-bezier(0.2, 0.7, 0.2, 1) both",
        // Duration and delay come from each balloon's --rise-duration and --rise-delay.
        "balloon-rise":
          "balloon-rise var(--rise-duration) cubic-bezier(0.35, 0.1, 0.6, 1) var(--rise-delay) both",
        "balloon-sway": "balloon-sway 3s ease-in-out infinite",
      },
      boxShadow: {
        glow: "0 0 4px 0 #FF333317",
        polaroid: "0 18px 40px -12px rgb(0 0 0 / 0.35)",
      },
      fontFamily: {
        sans: ["Geist", "ui-sans-serif", "system-ui", "sans-serif"],
        hand: ["Caveat", "cursive"],
      },
    },
  },
  plugins: [],
};
