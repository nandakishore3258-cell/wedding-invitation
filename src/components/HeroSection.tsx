import React from 'react';
import type { Language } from '../types/wedding';
import { weddingConfig } from '../config/weddingData';
import { translations } from '../config/translations';
import {
  GaneshaArt,
  BalajiTilak,
  FloralToran,
  OrnamentalDivider,
  CornerFlourish
} from './TraditionalMotifs';
import { Calendar, MapPin, Heart } from 'lucide-react';

interface HeroSectionProps {
  language: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ language }) => {
  const t = translations[language];
  const { couple, venue } = weddingConfig;

  return (
    <section id="top" className="relative pt-2 pb-8 px-3 sm:px-6 text-center overflow-hidden">
      {/* Traditional Floral Toran across top of invitation */}
      <FloralToran className="mb-3" />

      {/* Main Traditional Card Container */}
      <div className="relative max-w-2xl mx-auto bg-[#fffdf9] rounded-2xl border-2 sm:border-3 border-[#d4af37] p-5 sm:p-8 shadow-xl">
        {/* Corner Flourishes */}
        <CornerFlourish position="top-left" size={34} />
        <CornerFlourish position="top-right" size={34} />
        <CornerFlourish position="bottom-left" size={34} />
        <CornerFlourish position="bottom-right" size={34} />

        {/* Sacred Invocations */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-center items-center gap-2">
            <BalajiTilak size={54} />
          </div>

          <h3 className="font-serif text-[#981249] text-base sm:text-lg font-bold tracking-widest uppercase">
            {t.ganeshaInvocation}
          </h3>

          <div className="max-w-md mx-auto py-1 px-3 bg-[#faf3e8] rounded-md border border-[#e2cca4]/60">
            <p className="text-xs sm:text-sm font-serif italic text-[#634832] leading-relaxed">
              {t.traditionalShloka}
            </p>
          </div>
        </div>

        {/* Center Deity Artwork */}
        <div className="my-4 flex justify-center">
          <div className="relative p-2.5 bg-gradient-to-b from-[#fffbf2] to-[#fff6e5] rounded-full border-2 border-[#d4af37] shadow-md">
            <GaneshaArt size={110} />
          </div>
        </div>

        {/* Ornamental Divider */}
        <OrnamentalDivider />

        {/* Card Title */}
        <div className="space-y-1 my-3">
          <span className="text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold text-[#b8860b]">
            || శుభమస్తు ||
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-[#981249] tracking-tight">
            {t.invitationTitle}
          </h2>
          <p className="text-xs sm:text-sm text-[#4a3525] max-w-md mx-auto font-medium">
            {t.invitationSubtitle}
          </p>
        </div>

        {/* The Couple Names Feature */}
        <div className="my-6 py-4 px-3 sm:px-6 bg-gradient-to-b from-[#fdfbf7] via-[#fff8ef] to-[#fdfbf7] rounded-xl border border-[#d4af37]/40">
          {/* Groom */}
          <div className="space-y-0.5">
            <span className="text-xs font-serif text-[#800c3b] font-medium tracking-wide">
              {couple.groom.salutation[language]}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold text-[#981249] tracking-normal">
              {couple.groom.name[language]}
            </h1>
            <span className="inline-block text-xs sm:text-sm font-sans font-semibold text-[#333333] bg-[#fff] border border-[#d4af37]/50 px-2.5 py-0.5 rounded-full shadow-2xs">
              {couple.groom.qualification}
            </span>
          </div>

          {/* Sacred Weds Badge */}
          <div className="my-3 flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#b8860b]" />
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#981249] to-[#b80f55] text-white flex items-center justify-center shadow-md border-2 border-[#ffd166]">
              <Heart className="w-4 h-4 fill-current text-[#ffd166]" />
            </div>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#b8860b]" />
          </div>

          {/* Bride */}
          <div className="space-y-0.5">
            <span className="text-xs font-serif text-[#800c3b] font-medium tracking-wide">
              {couple.bride.salutation[language]}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold text-[#981249] tracking-normal">
              {couple.bride.name[language]}
            </h1>
            <span className="inline-block text-xs sm:text-sm font-sans font-semibold text-[#333333] bg-[#fff] border border-[#d4af37]/50 px-2.5 py-0.5 rounded-full shadow-2xs">
              {couple.bride.qualification}
            </span>
          </div>
        </div>

        {/* Date & Location Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left mt-4">
          <div className="flex items-center gap-3 p-3 bg-[#fdfbf7] rounded-xl border border-[#d4af37]/40 shadow-2xs">
            <div className="p-2.5 rounded-lg bg-[#981249]/10 text-[#981249]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase text-[#b8860b]">
                {language === 'en' ? 'Dates of Celebration' : language === 'te' ? 'శుభ తేదీలు' : 'ಶುಭ ದಿನಾಂಕಗಳು'}
              </p>
              <p className="text-sm font-bold text-[#1f1f1f]">
                28 & 29 November 2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-[#fdfbf7] rounded-xl border border-[#d4af37]/40 shadow-2xs">
            <div className="p-2.5 rounded-lg bg-[#981249]/10 text-[#981249]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase text-[#b8860b]">
                {language === 'en' ? 'Kalyana Mantapa' : language === 'te' ? 'కల్యాణ వేదిక' : 'ಕಲ್ಯಾಣ ಮಂಟಪ'}
              </p>
              <p className="text-sm font-bold text-[#1f1f1f] line-clamp-1">
                {venue.name[language]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
