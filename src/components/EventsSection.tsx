import React from 'react';
import type { Language, WeddingEvent } from '../types/wedding';
import { weddingConfig } from '../config/weddingData';
import { translations } from '../config/translations';
import { OrnamentalDivider, CornerFlourish } from './TraditionalMotifs';
import { generateGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';
import { Calendar, Clock, MapPin, Download, ExternalLink, Sparkles } from 'lucide-react';

interface EventsSectionProps {
  language: Language;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ language }) => {
  const t = translations[language];
  const { events, venue } = weddingConfig;

  const renderEventCard = (
    event: WeddingEvent,
    isMuhurtham: boolean,
    badgeText: string
  ) => {
    const calendarTitle = isMuhurtham
      ? `Wedding Muhurtham: Chi. Ganesh Reddy & Chi. Sou. Anusha Reddy`
      : `Reception: Chi. Ganesh Reddy & Chi. Sou. Anusha Reddy`;

    const googleCalUrl = generateGoogleCalendarUrl(
      event,
      calendarTitle,
      event.description[language]
    );

    return (
      <div
        key={event.id}
        className={`relative bg-[#fffdf9] rounded-2xl border-2 ${
          isMuhurtham ? 'border-[#981249]' : 'border-[#d4af37]'
        } p-5 sm:p-6 shadow-lg flex flex-col justify-between hover:shadow-xl transition-all duration-300`}
        style={{
          boxShadow: isMuhurtham
            ? '0 10px 25px -5px rgba(152, 18, 73, 0.15)'
            : '0 10px 25px -5px rgba(184, 134, 11, 0.15)'
        }}
      >
        <CornerFlourish position="top-left" size={26} />
        <CornerFlourish position="top-right" size={26} />

        <div>
          {/* Header Badge */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-serif font-bold ${
                isMuhurtham
                  ? 'bg-[#981249] text-white shadow-xs'
                  : 'bg-[#faf2e4] text-[#981249] border border-[#d4af37]'
              }`}
            >
              {isMuhurtham && <Sparkles className="w-3.5 h-3.5 text-[#ffd166]" />}
              <span>{badgeText}</span>
            </span>

            {event.lagnam && (
              <span className="text-xs font-semibold text-[#800c3b] bg-[#fbf5eb] px-2.5 py-0.5 rounded-full border border-[#d4af37]/60">
                {event.lagnam[language]}
              </span>
            )}
          </div>

          {/* Event Title */}
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#981249] mb-3">
            {isMuhurtham ? t.muhurthamTitle : t.receptionTitle}
          </h3>

          {/* Date & Time Highlights */}
          <div className="space-y-2.5 bg-[#fcf9f3] p-3 rounded-xl border border-[#e8dcc4] text-xs sm:text-sm">
            <div className="flex items-center gap-2.5 text-[#1f1f1f]">
              <Calendar className="w-4 h-4 text-[#981249] shrink-0" />
              <span className="font-semibold">{event.dateStr[language]}</span>
            </div>

            <div className="flex items-center gap-2.5 text-[#1f1f1f]">
              <Clock className="w-4 h-4 text-[#b8860b] shrink-0" />
              <span className="font-bold text-[#981249]">{event.timeStr[language]}</span>
            </div>

            <div className="flex items-start gap-2.5 text-[#3b3b3b]">
              <MapPin className="w-4 h-4 text-[#981249] shrink-0 mt-0.5" />
              <span className="line-clamp-2">{venue.name[language]}, {venue.city[language]}</span>
            </div>
          </div>

          {/* Cultural Description */}
          <p className="mt-3 text-xs sm:text-sm text-[#4a3525] leading-relaxed italic font-serif">
            {event.description[language]}
          </p>
        </div>

        {/* Calendar Action Buttons */}
        <div className="mt-5 pt-3 border-t border-[#d4af37]/30 flex flex-col xs:flex-row gap-2">
          <a
            href={googleCalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-[#981249] hover:bg-[#800c3b] text-white rounded-lg text-xs font-medium transition-colors shadow-2xs"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#ffd166]" />
            <span>{t.addToGoogleCalendar}</span>
          </a>

          <button
            onClick={() =>
              downloadIcsFile(event, calendarTitle, event.description[language])
            }
            className="inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-white hover:bg-[#faf2e4] text-[#704d2e] border border-[#d4af37] rounded-lg text-xs font-medium transition-colors shadow-2xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>.ics</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="py-6 px-3 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#b8860b]">
            || ముహూర్త పత్రిక ||
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#981249]">
            {t.eventsHeading}
          </h2>
          <p className="text-xs sm:text-sm text-[#5f442f] max-w-md mx-auto mt-1">
            {t.eventsSubtitle}
          </p>
          <OrnamentalDivider />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Card 1: Reception */}
          {renderEventCard(
            events.reception,
            false,
            language === 'en' ? 'Saturday Celebration' : language === 'te' ? 'స్నేహ విందు' : 'ಸ್ವಾಗತ ಸಮಾರಂಭ'
          )}

          {/* Card 2: Wedding Muhurtham */}
          {renderEventCard(
            events.muhurtham,
            true,
            language === 'en' ? 'Sacred Muhurtham' : language === 'te' ? 'శుభ ముహూర్తం' : 'ಶುಭ ಮುಹೂರ್ತ'
          )}
        </div>
      </div>
    </section>
  );
};
