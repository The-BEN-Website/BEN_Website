import React, { useEffect, useState } from "react";

// Spread across the screen and staggered so they rise as a loose flock, not a wall.
const balloons = [
  { left: 3, size: 58, color: "text-primary", delay: 0.2, duration: 7.2 },
  { left: 11, size: 44, color: "text-festive-gold", delay: 1.4, duration: 8.4 },
  { left: 18, size: 66, color: "text-festive-cream", delay: 0.6, duration: 6.8 },
  { left: 26, size: 48, color: "text-festive-maroon", delay: 2.1, duration: 7.9 },
  { left: 33, size: 56, color: "text-festive-blush", delay: 0, duration: 7.5 },
  { left: 41, size: 42, color: "text-primary", delay: 1.1, duration: 8.8 },
  { left: 48, size: 62, color: "text-festive-gold", delay: 2.6, duration: 7.1 },
  { left: 55, size: 50, color: "text-festive-cream", delay: 0.4, duration: 8.1 },
  { left: 62, size: 68, color: "text-festive-maroon", delay: 1.8, duration: 6.9 },
  { left: 69, size: 46, color: "text-festive-blush", delay: 0.9, duration: 8.6 },
  { left: 76, size: 60, color: "text-primary", delay: 2.3, duration: 7.4 },
  { left: 83, size: 44, color: "text-festive-cream", delay: 0.1, duration: 8.2 },
  { left: 89, size: 64, color: "text-festive-gold", delay: 1.6, duration: 7 },
  { left: 94, size: 50, color: "text-festive-maroon", delay: 0.7, duration: 8.9 },
];

// When the last balloon has left the top of the screen, with a little slack.
const FLIGHT_MS =
  Math.max(...balloons.map((b) => b.delay + b.duration)) * 1000 + 500;

function Balloon({ size, color }) {
  return (
    <svg
      viewBox="0 0 60 120"
      width={size}
      height={size * 2}
      className={`${color} drop-shadow-md`}
    >
      <path
        d="M30 2C14 2 3 15 3 31c0 19 15 36 25 41h4c10-5 25-22 25-41C57 15 46 2 30 2z"
        fill="currentColor"
      />
      <ellipse cx="19" cy="22" rx="5" ry="10" fill="white" opacity="0.4" transform="rotate(-20 19 22)" />
      <path d="M26 72h8l-4 6z" fill="currentColor" />
      <path
        d="M30 78c-6 10 6 18 0 28s4 10 0 14"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.6"
        strokeWidth="1.2"
      />
    </svg>
  );
}

// Balloons that float up the screen when the page opens, and again each time
// `launch` changes (after a message is sent). Purely decorative: hidden from
// screen readers and never in the way of clicks. With reduced motion they
// never move, so they stay out of sight below the screen.
function Balloons({ launch }) {
  const [flying, setFlying] = useState(true);

  useEffect(() => {
    setFlying(true);
    const timer = setTimeout(() => setFlying(false), FLIGHT_MS);
    return () => clearTimeout(timer);
  }, [launch]);

  if (!flying) return null;

  return (
    <div key={launch} aria-hidden="true" className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {balloons.map((b) => (
        <div
          key={b.left}
          className="absolute top-full motion-safe:animate-balloon-rise"
          style={{
            left: `${b.left}%`,
            "--rise-delay": `${b.delay}s`,
            "--rise-duration": `${b.duration}s`,
          }}
        >
          <div
            className="origin-bottom motion-safe:animate-balloon-sway"
            style={{ animationDelay: `-${b.delay * 1.7}s` }}
          >
            <Balloon size={b.size} color={b.color} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Balloons;
