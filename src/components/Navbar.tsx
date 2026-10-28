import React from 'react';
import type { Language } from '../types/wedding';
import { translations } from '../config/translations';
import { Volume2, VolumeX, Sparkles, HeartHandshake, Globe } from 'lucide-react';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
  petalsEnabled: boolean;
  onTogglePetals: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  isMusicPlaying,
  onToggleMusic,
  petalsEnabled,
  onTogglePetals
}) => {
  const t = translations[language];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'te', label: 'తెలుగు' },
    { code: 'kn', label: 'ಕನ್ನಡ' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#fffdf9]/95 backdrop-blur-md border-b border-[#d4af37]/40 shadow-xs transition-all">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 py-2 flex items-center justify-between gap-2">
        {/* Left: Auspicious Mini Brand */}
        <a
          href="#top"
          className="flex items-center gap-1.5 text-[#981249] hover:opacity-90 transition-opacity"
        >
          <span className="text-base sm:text-lg">🕉️</span>
          <span className="font-serif font-bold text-sm sm:text-base tracking-wide hidden xs:inline">
            Ganesh & Anusha
          </span>
          <span className="font-serif font-bold text-xs xs:hidden">G & A</span>
        </a>

        {/* Center: Language Switcher */}
        <div className="flex items-center bg-[#f7eee2] rounded-full p-0.5 border border-[#d4af37]/60 shadow-inner">
          <Globe className="w-3 h-3 text-[#981249] ml-1.5 mr-0.5 hidden sm:inline" />
          {languages.map(({ code, label }) => {
            const isActive = language === code;
            return (
              <button
                key={code}
                onClick={() => onLanguageChange(code)}
                aria-pressed={isActive}
                className={`px-2 sm:px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-[#981249] text-white shadow-xs'
                    : 'text-[#4a3525] hover:text-[#981249]'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Right: Controls (Music, Petals, RSVP quick link) */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Music Toggle */}
          <button
            onClick={onToggleMusic}
            title={isMusicPlaying ? t.soundOn : t.soundOff}
            aria-label={isMusicPlaying ? t.soundOn : t.soundOff}
            className={`p-2 rounded-full border transition-all ${
              isMusicPlaying
                ? 'bg-[#981249] text-[#ffd166] border-[#981249] shadow-sm animate-pulse'
                : 'bg-white text-[#715438] border-[#d4af37]/60 hover:text-[#981249]'
            }`}
          >
            {isMusicPlaying ? (
              <Volume2 className="w-4 h-4" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>

          {/* Petals Toggle */}
          <button
            onClick={onTogglePetals}
            title={petalsEnabled ? t.petalsOn : t.petalsOff}
            aria-label={petalsEnabled ? t.petalsOn : t.petalsOff}
            className={`p-2 rounded-full border transition-all ${
              petalsEnabled
                ? 'bg-[#fff5f5] text-[#e63946] border-[#ffccd5]'
                : 'bg-white text-[#8d8d8d] border-gray-200'
            }`}
          >
            <Sparkles className="w-4 h-4" />
          </button>

          {/* Jump to RSVP */}
          <a
            href="#rsvp"
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#981249] to-[#b80f55] text-white text-xs font-serif font-semibold shadow-xs hover:shadow-md hover:scale-105 transition-all"
          >
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>RSVP</span>
          </a>
        </div>
      </div>
    </header>
  );
};
