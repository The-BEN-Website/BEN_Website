// Scheduling helpers for weekly service times. Times are the church's local
// time, so "now" is taken in the church's time zone regardless of where the
// visitor is. Mirrors ben-app/mobile/lib/serviceTime.ts.

export const CHURCH_TIME_ZONE = "Africa/Lagos";

const WEEKDAYS = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const SHORT_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MINUTES_PER_DAY = 24 * 60;

// Stored as 24-hour "HH:MM" (admin time picker) or legacy free text like "1:00 PM".
export function parseTimeToMinutes(time) {
  const time24 = time.match(/^(\d{1,2}):(\d{2})$/);
  if (time24) return Number(time24[1]) * 60 + Number(time24[2]);

  const time12 = time.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
  if (time12) {
    let hours = Number(time12[1]) % 12;
    if (time12[3].toUpperCase() === "PM") hours += 12;
    return hours * 60 + Number(time12[2]);
  }
  return null;
}

// 510 → "8:30am", 1200 → "8:00pm"
export function formatMinutes(minutes) {
  const hours24 = Math.floor(minutes / 60);
  const period = hours24 >= 12 ? "pm" : "am";
  const hours12 = hours24 % 12 || 12;
  return `${hours12}:${String(minutes % 60).padStart(2, "0")}${period}`;
}

// Recurring schedule label: "Sundays · 8:30am". Falls back to the raw values
// if the stored time can't be read.
export function weeklyLabel({ day, time }) {
  const minutes = parseTimeToMinutes(time);
  const dayName = day.trim();
  const days = dayName.endsWith("s") ? dayName : `${dayName}s`;
  return `${days} · ${minutes === null ? time : formatMinutes(minutes)}`;
}

// Current weekday (0 = Sunday) and minutes past midnight in the church's time zone.
function churchNow(now) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone: CHURCH_TIME_ZONE,
      weekday: "long",
      hour: "numeric",
      minute: "numeric",
      hourCycle: "h23",
    })
      .formatToParts(now)
      .map(({ type, value }) => [type, value]),
  );
  return {
    weekday: WEEKDAYS.indexOf(parts.weekday.toLowerCase()),
    minutes: Number(parts.hour) * 60 + Number(parts.minute),
  };
}

// The next `count` upcoming services, soonest first, each with a short
// "when" label: "Today · 8:00pm", "Tomorrow · 8:30am" or "Thu · 8:00pm".
// Services with an unreadable day or time are skipped.
export function upcomingServices(serviceTimes, count = 2, now = new Date()) {
  const current = churchNow(now);
  const nowInWeek = current.weekday * MINUTES_PER_DAY + current.minutes;
  const minutesPerWeek = 7 * MINUTES_PER_DAY;

  return serviceTimes
    .map((service) => {
      const weekday = WEEKDAYS.indexOf(service.day.trim().toLowerCase());
      const minutes = parseTimeToMinutes(service.time);
      if (weekday === -1 || minutes === null) return null;

      const startInWeek = weekday * MINUTES_PER_DAY + minutes;
      const minutesUntil = (startInWeek - nowInWeek + minutesPerWeek) % minutesPerWeek;
      const daysAhead = Math.floor((current.minutes + minutesUntil) / MINUTES_PER_DAY);

      let day = SHORT_DAYS[weekday];
      if (daysAhead === 0) day = "Today";
      else if (daysAhead === 1) day = "Tomorrow";

      return { ...service, minutesUntil, when: `${day} · ${formatMinutes(minutes)}` };
    })
    .filter(Boolean)
    .sort((a, b) => a.minutesUntil - b.minutesUntil)
    .slice(0, count);
}
