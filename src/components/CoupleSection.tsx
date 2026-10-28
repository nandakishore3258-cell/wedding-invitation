import React, { useState } from 'react';
import type { Language } from '../types/wedding';
import { weddingConfig } from '../config/weddingData';
import { translations } from '../config/translations';
import { CoupleArt, OrnamentalDivider, CornerFlourish } from './TraditionalMotifs';
import { Camera, X } from 'lucide-react';

interface CoupleSectionProps {
  language: Language;
}

export const CoupleSection: React.FC<CoupleSectionProps> = ({ language }) => {
  const t = translations[language];
  const { couple } = weddingConfig;
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCustomPhotoUrl(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearPhoto = () => {
    setCustomPhotoUrl(null);
  };

  return (
    <section className="py-6 px-3 sm:px-6">
      <div className="max-w-2xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-6">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#b8860b]">
            || కళ్యాణ ప్రాప్తిరస్తు ||
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#981249]">
            {t.coupleHeading}
          </h2>
          <OrnamentalDivider />
        </div>

        {/* Optional Custom Couple Photo Preview Frame */}
        {customPhotoUrl && (
          <div className="mb-6 relative max-w-md mx-auto bg-[#fffdf9] p-3 rounded-2xl border-2 border-[#d4af37] shadow-lg text-center animate-fadeIn">
            <div className="relative rounded-xl overflow-hidden border border-[#d4af37]/60 aspect-4/3 max-h-72 flex items-center justify-center bg-black/5">
              <img
                src={customPhotoUrl}
                alt="Ganesh Reddy & Anusha Reddy"
                className="w-full h-full object-cover"
              />
              <button
                onClick={clearPhoto}
                title="Remove photo"
                className="absolute top-2 right-2 p-1.5 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="mt-2 text-xs text-[#981249] font-serif font-semibold">
              Chi. Ganesh Reddy & Chi. Sou. Anusha Reddy
            </p>
          </div>
        )}

        {/* The Bride & Groom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Groom Profile Card */}
          <div className="relative bg-[#fffdf9] rounded-2xl border-2 border-[#d4af37] p-5 sm:p-6 shadow-md flex flex-col justify-between text-center hover:shadow-xl transition-shadow">
            <CornerFlourish position="top-left" size={26} />
            <CornerFlourish position="top-right" size={26} />

            <div>
              {/* Badge */}
              <span className="inline-block px-3 py-1 bg-[#faf2e4] text-[#981249] text-xs font-serif font-bold rounded-full border border-[#d4af37]/60 mb-3">
                {t.groomTitle}
              </span>

              {/* Groom Illustration */}
              <div className="flex justify-center my-2">
                <div className="p-2 rounded-full bg-[#fdfbf7] border-2 border-[#d4af37]/50 shadow-inner">
                  <CoupleArt type="groom" size={120} />
                </div>
              </div>

              {/* Name & Qualification */}
              <div className="my-2">
                <span className="text-xs font-serif text-[#800c3b] font-medium block">
                  {couple.groom.salutation[language]}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#981249]">
                  {couple.groom.name[language]}
                </h3>
                <span className="inline-block mt-1 text-xs font-sans font-bold text-[#1f1f1f] bg-amber-50/80 border border-[#d4af37] px-2.5 py-0.5 rounded-full">
                  {couple.groom.qualification}
                </span>
              </div>

              {/* Parents Details */}
              <div className="mt-4 pt-3 border-t border-[#d4af37]/30 text-xs sm:text-sm text-[#2d2d2d] space-y-1">
                <p className="text-[11px] uppercase tracking-wider text-[#b8860b] font-semibold">
                  {t.sonOf}
                </p>
                <p className="font-semibold text-[#1a1a1a]">
                  {couple.groom.mother[language]}
                </p>
                <p className="font-semibold text-[#1a1a1a]">
                  & {couple.groom.father[language]}
                </p>
              </div>

              {/* Native Village */}
              <div className="mt-3 text-xs text-[#523d2b] bg-[#fbf6ee] p-2 rounded-lg border border-[#e8d5b5]">
                <span className="font-semibold">{t.nativePlace}: </span>
                <span>
                  {couple.groom.village[language]}, {couple.groom.mandal[language]},{' '}
                  {couple.groom.district[language]}
                </span>
              </div>
            </div>
          </div>

          {/* Bride Profile Card */}
          <div className="relative bg-[#fffdf9] rounded-2xl border-2 border-[#d4af37] p-5 sm:p-6 shadow-md flex flex-col justify-between text-center hover:shadow-xl transition-shadow">
            <CornerFlourish position="top-left" size={26} />
            <CornerFlourish position="top-right" size={26} />

            <div>
              {/* Badge */}
              <span className="inline-block px-3 py-1 bg-[#faf2e4] text-[#981249] text-xs font-serif font-bold rounded-full border border-[#d4af37]/60 mb-3">
                {t.brideTitle}
              </span>

              {/* Bride Illustration */}
              <div className="flex justify-center my-2">
                <div className="p-2 rounded-full bg-[#fdfbf7] border-2 border-[#d4af37]/50 shadow-inner">
                  <CoupleArt type="bride" size={120} />
                </div>
              </div>

              {/* Name & Qualification */}
              <div className="my-2">
                <span className="text-xs font-serif text-[#800c3b] font-medium block">
                  {couple.bride.salutation[language]}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#981249]">
                  {couple.bride.name[language]}
                </h3>
                <span className="inline-block mt-1 text-xs font-sans font-bold text-[#1f1f1f] bg-amber-50/80 border border-[#d4af37] px-2.5 py-0.5 rounded-full">
                  {couple.bride.qualification}
                </span>
              </div>

              {/* Parents Details */}
              <div className="mt-4 pt-3 border-t border-[#d4af37]/30 text-xs sm:text-sm text-[#2d2d2d] space-y-1">
                <p className="text-[11px] uppercase tracking-wider text-[#b8860b] font-semibold">
                  {t.daughterOf}
                </p>
                <p className="font-semibold text-[#1a1a1a]">
                  {couple.bride.mother[language]}
                </p>
                <p className="font-semibold text-[#1a1a1a]">
                  & {couple.bride.father[language]}
                </p>
              </div>

              {/* Native Village */}
              <div className="mt-3 text-xs text-[#523d2b] bg-[#fbf6ee] p-2 rounded-lg border border-[#e8d5b5]">
                <span className="font-semibold">{t.nativePlace}: </span>
                <span>
                  {couple.bride.village[language]}, {couple.bride.taluk[language]},{' '}
                  {couple.bride.district[language]}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Optional Couple Photo Upload Control */}
        <div className="mt-4 text-center">
          <label className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#fffdf9] hover:bg-[#faf3e8] border border-[#d4af37]/70 text-[#704d2e] rounded-full text-xs font-medium cursor-pointer transition-colors shadow-2xs">
            <Camera className="w-3.5 h-3.5 text-[#981249]" />
            <span>
              {customPhotoUrl
                ? (language === 'en' ? 'Change Couple Photo' : language === 'te' ? 'ఫోటో మార్చండి' : 'ಫೋಟೋ ಬದಲಿಸಿ')
                : (language === 'en' ? 'Optional: Preview Real Couple Photo' : language === 'te' ? 'వధూవరుల ఫోటో జతచేయండి' : 'ಫೋಟೋ ಸೇರಿಸಿ ನೋಡಿ')}
            </span>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="hidden"
            />
          </label>
        </div>
      </div>
    </section>
  );
};
