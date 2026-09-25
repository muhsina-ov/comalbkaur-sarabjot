import { Reveal } from "@/components/wedding/Section";
import { events } from "@/lib/wedding";

/**
 * "Save our date" — Add to Calendar section.
 * Generates a .ics file for all events when clicked.
 */
export function AddToCalendar() {
  function generateICS() {
    const lines: string[] = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//ComalSarabjot//Wedding//EN",
      "CALSCALE:GREGORIAN",
    ];

    for (const ev of events) {
      // Parse the dateLabel e.g. "11 DECEMBER 2026"
      const dateStr = ev.dateLabel;
      const parts = dateStr.split(" ");
      const day = parts[0].padStart(2, "0");
      const monthNames: Record<string, string> = {
        JANUARY: "01", FEBRUARY: "02", MARCH: "03", APRIL: "04",
        MAY: "05", JUNE: "06", JULY: "07", AUGUST: "08",
        SEPTEMBER: "09", OCTOBER: "10", NOVEMBER: "11", DECEMBER: "12",
      };
      const month = monthNames[parts[1]] ?? "12";
      const year = parts[2];
      const dateCompact = `${year}${month}${day}`;

      // Parse time loosely: "8:30 PM onwards" → 20:30
      const timeMatch = ev.time.match(/(\d{1,2}):?(\d{2})?\s*(AM|PM)/i);
      let hour = 18;
      let min = 0;
      if (timeMatch) {
        hour = parseInt(timeMatch[1], 10);
        min = parseInt(timeMatch[2] ?? "0", 10);
        if (timeMatch[3].toUpperCase() === "PM" && hour !== 12) hour += 12;
        if (timeMatch[3].toUpperCase() === "AM" && hour === 12) hour = 0;
      }

      const startTime = `${String(hour).padStart(2, "0")}${String(min).padStart(2, "0")}00`;
      const endHour = hour + 2;
      const endTime = `${String(endHour).padStart(2, "0")}${String(min).padStart(2, "0")}00`;

      lines.push(
        "BEGIN:VEVENT",
        `DTSTART;TZID=Asia/Kolkata:${dateCompact}T${startTime}`,
        `DTEND;TZID=Asia/Kolkata:${dateCompact}T${endTime}`,
        `SUMMARY:${ev.name} — Comal & Sarabjot Wedding`,
        `LOCATION:${(ev.venue ?? "Nagpur").replace(/\n/g, ", ")}`,
        `DESCRIPTION:${ev.name} at ${ev.time}. ${ev.venue ?? ""}`,
        "END:VEVENT",
      );
    }
    lines.push("END:VCALENDAR");

    const blob = new Blob([lines.join("\r\n")], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "comal-sarabjot-wedding.ics";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  return (
    <section className="px-6 pb-20">
      <Reveal>
        <div className="card-soft p-6 text-center">
          <p className="script text-lg text-primary">Save our date</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Add every ceremony to your calendar in one tap.
          </p>
          <button
            type="button"
            onClick={generateICS}
            className="press mt-5 flex min-h-[52px] w-full items-center justify-center rounded-sm border border-primary/45 bg-secondary text-[0.68rem] uppercase tracking-airy text-foreground"
          >
            Add to Calendar
          </button>
        </div>
      </Reveal>
    </section>
  );
}
