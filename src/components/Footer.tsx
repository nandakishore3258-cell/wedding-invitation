import React from 'react';
import type { Language } from '../types/wedding';
import { weddingConfig } from '../config/weddingData';
import { translations } from '../config/translations';
import { KalashArt, OrnamentalDivider, BalajiTilak } from './TraditionalMotifs';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = translations[language];
  const { bestCompliments } = weddingConfig;

  return (
    <footer className="pt-8 pb-12 px-3 sm:px-6 bg-[#faf2e4] border-t-2 border-[#d4af37]/60 text-center relative overflow-hidden">
      <div className="max-w-xl mx-auto space-y-4">
        {/* Tilak & Kalash */}
        <div className="flex items-center justify-center gap-2">
          <BalajiTilak size={44} />
          <KalashArt size={44} />
        </div>

        <OrnamentalDivider />

        {/* Best Compliments As Required */}
        <div className="py-2 px-4 bg-[#fffdf9] rounded-xl border border-[#d4af37]/60 shadow-sm inline-block max-w-lg">
          <p className="text-xs uppercase tracking-widest text-[#b8860b] font-semibold mb-1">
            {language === 'en' ? 'Best Compliments' : language === 'te' ? 'శుభాకాంక్షలతో' : 'ಹಾರ್ದಿಕ ಹಾರೈಕೆಗಳೊಂದಿಗೆ'}
          </p>
          <h3 className="font-serif text-base sm:text-lg font-bold text-[#981249] leading-snug">
            {bestCompliments.family[language]}
          </h3>
        </div>

        {/* Traditional Vedic Blessing Shloka */}
        <div className="pt-2 text-xs text-[#6e4e37] font-serif italic max-w-md mx-auto leading-relaxed">
          <p className="font-semibold text-[#800c3b]">
            {t.footerBlessingShloka}
          </p>
          <p className="text-[11px] mt-1 text-[#8c6b4f]">
            {language === 'en'
              ? 'May the divine presence bless Ganesh & Anusha with everlasting joy, harmony, and togetherness.'
              : language === 'te'
              ? 'నూతన వధూవరులు కలకాలం సుఖసంతోషాలతో, ఆయురారోగ్యాలతో వర్ధిల్లాలని ఆశీర్వదిస్తున్నాము.'
              : 'ನವ ವಧೂ-ವರರು ಸುಖ, ಶಾಂತಿ, ನೆಮ್ಮದಿಯಿಂದ ನೂರ್ಕಾಲ ಬಾಳಲಿ ಎಂದು ಹಾರೈಸುತ್ತೇವೆ.'}
          </p>
        </div>

        {/* Bottom Decorative Line */}
        <div className="pt-4 flex items-center justify-center gap-2 text-xs text-[#b8860b]">
          <span>✦</span>
          <span className="font-serif font-bold text-xs tracking-widest text-[#981249]">
            CHI. GANESH REDDY & CHI. SOU. ANUSHA REDDY
          </span>
          <span>✦</span>
        </div>
        <p className="text-[10px] text-[#997b5e]">
          28 & 29 November 2026 • Sri Kanakadasa Kalyana Mantapa, Hindupur
        </p>
      </div>
    </footer>
  );
};
