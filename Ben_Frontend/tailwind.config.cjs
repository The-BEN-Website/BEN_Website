/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-red": "#F74946",
        "my-black": "#272727",
        "grey-background": "#D9D9D9",
        "black-background": "#323232",
        "footer-background": "#979797",
        "community-blue": "#6083FF",
        "bg-red": "#FFF8F8",
        "contact-text": "#8A8A8A",
        "background-red": "#FF5046",
        "bg-red": "#FFF4F3",
        // UI rework design tokens
        primary: "#FF3333",
        ink: "#1A1A1A",
        "ink-soft": "#333333",
        subheading: "#383838",
        "detail-title": "#343434",
        "form-label": "#2E2E2E",
        secondary: "#666666",
        label: "#646464",
        subtle: "#717171",
        muted: "#909090",
        caption: "#959595",
        line: "#EEEEEE",
        "line-strong": "#E5E5E5",
        "input-line": "#E8E8E8",
        "input-hint": "#C8C8C8",
        "icon-line": "#E7E7E7",
        surface: "#F6F6F7",
        placeholder: "#E6E6E6",
        card: "#FDFDFD",
        "card-line": "#F2F2F2",
      },
      fontSize: {
        // UI rework type scale
        small: ["15px", { lineHeight: "22.5px" }],
        body: ["18px", { lineHeight: "27px" }],
        display: ["50px", { lineHeight: "1" }],
        heading: ["40px", { lineHeight: "1" }],
        quote: ["114.75px", { lineHeight: "172.13px" }],
      },
      boxShadow: {
        glow: "0 0 4px 0 #FF333317",
      },
      bottom: {
        "1/5": "-15%",
      },
      fontFamily: {
        sans: ["Geist", "ui-sans-serif", "system-ui", "sans-serif"],
        my_font: ["Geist", "sans-serif"],
      },
      backgroundPosition: {
        "l-10-c": "left 10px center",
      },
    },
  },
  plugins: [],
};
