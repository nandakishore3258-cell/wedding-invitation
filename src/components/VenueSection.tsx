import React from 'react';
import type { Language } from '../types/wedding';
import { weddingConfig } from '../config/weddingData';
import { translations } from '../config/translations';
import { OrnamentalDivider, CornerFlourish } from './TraditionalMotifs';
import { MapPin, Navigation, Car, Building } from 'lucide-react';

interface VenueSectionProps {
  language: Language;
}

export const VenueSection: React.FC<VenueSectionProps> = ({ language }) => {
  const t = translations[language];
  const { venue } = weddingConfig;

  return (
    <section className="py-6 px-3 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#b8860b]">
            || వేదిక వివరాలు ||
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#981249]">
            {t.venueHeading}
          </h2>
          <OrnamentalDivider />
        </div>

        <div className="relative bg-[#fffdf9] rounded-2xl border-2 border-[#d4af37] p-5 sm:p-8 shadow-xl text-center">
          <CornerFlourish position="top-left" size={30} />
          <CornerFlourish position="top-right" size={30} />
          <CornerFlourish position="bottom-left" size={30} />
          <CornerFlourish position="bottom-right" size={30} />

          {/* Icon */}
          <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#faf0dc] to-[#f5dfb8] border-2 border-[#d4af37] flex items-center justify-center text-[#981249] shadow-inner">
            <Building className="w-7 h-7" />
          </div>

          {/* Venue Name */}
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#981249] mb-1">
            {venue.name[language]}
          </h3>

          <p className="text-sm sm:text-base font-semibold text-[#2b2b2b] mb-4">
            {venue.city[language]}, {venue.state[language]}
          </p>

          {/* Map & Venue Amenities Box */}
          <div className="my-4 p-4 bg-[#fbf6ee] rounded-xl border border-[#e8d5b5] text-left max-w-lg mx-auto space-y-2.5">
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#422e1b]">
              <MapPin className="w-4 h-4 text-[#981249] shrink-0 mt-0.5" />
              <span>
                <strong>{language === 'en' ? 'Address' : language === 'te' ? 'చిరునామా' : 'ವಿಳಾಸ'}: </strong>
                {venue.fullDisplay[language]}
              </span>
            </div>

            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#422e1b]">
              <Car className="w-4 h-4 text-[#b8860b] shrink-0 mt-0.5" />
              <span>
                <strong>{language === 'en' ? 'Accessibility' : language === 'te' ? 'సౌకర్యాలు' : 'ಸೌಲಭ್ಯಗಳು'}: </strong>
                {t.venueNote}
              </span>
            </div>
          </div>

          {/* Action Button: Get Directions on Google Maps */}
          <div className="mt-5">
            <a
              href={venue.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-[#981249] to-[#b80f55] hover:from-[#800c3b] hover:to-[#981249] text-white rounded-full font-serif text-sm sm:text-base font-bold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              <Navigation className="w-4 h-4 text-[#ffd166] animate-pulse" />
              <span>{t.getDirections}</span>
            </a>
          </div>

          <p className="mt-3 text-[11px] text-[#78593c] italic">
            {language === 'en'
              ? 'Tapping above opens Google Maps directly for navigation to the venue.'
              : language === 'te'
              ? 'పై బటన్ నొక్కిన వెంటనే గూగుల్ మ్యాప్స్ ద్వారా మార్గాన్ని నేరుగా తెలుసుకోవచ్చు.'
              : 'ಮೇಲಿನ ಬಟನ್ ಒತ್ತಿ ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್ ಮೂಲಕ ಕಲ್ಯಾಣ ಮಂಟಪದ ದಾರಿಯನ್ನು ಸುಲಭವಾಗಿ ಪಡೆಯಿರಿ.'}
          </p>
        </div>
      </div>
    </section>
  );
};
