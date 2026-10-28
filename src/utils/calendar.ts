import type { WeddingEvent } from '../types/wedding';

// Helper to format ISO date to Google Calendar format (YYYYMMDDTHHmmssZ)
export function formatIsoForGoogleCalendar(isoStr: string): string {
  const date = new Date(isoStr);
  return date.toISOString().replace(/-|:|\.\d\d\d/g, '');
}

export function generateGoogleCalendarUrl(event: WeddingEvent, title: string, langDescription: string): string {
  const start = formatIsoForGoogleCalendar(event.startIso);
  const end = formatIsoForGoogleCalendar(event.endIso);
  const details = encodeURIComponent(
    `${langDescription}\n\nVenue: ${event.location}\nWith Best Compliments: Gudivappagari Family & Relatives`
  );
  const loc = encodeURIComponent(event.location);
  const text = encodeURIComponent(title);

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${start}/${end}&details=${details}&location=${loc}`;
}

export function downloadIcsFile(event: WeddingEvent, title: string, langDescription: string): void {
  const start = formatIsoForGoogleCalendar(event.startIso);
  const end = formatIsoForGoogleCalendar(event.endIso);
  const now = formatIsoForGoogleCalendar(new Date().toISOString());

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Ganesh & Anusha Wedding//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:wedding-${event.id}-2026@ganesh-anusha.wedding`,
    `DTSTAMP:${now}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${langDescription.replace(/\n/g, '\\n')}`,
    `LOCATION:${event.location}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', `${event.id}-ganesh-anusha-wedding.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
