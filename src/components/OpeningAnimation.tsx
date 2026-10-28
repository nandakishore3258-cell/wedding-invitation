import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import type { Language } from '../types/wedding';
import { translations } from '../config/translations';
import { GaneshaArt, CornerFlourish, KalashArt } from './TraditionalMotifs';
import { weddingAudio } from '../utils/audioSynthesizer';
import { Sparkles, ArrowRight, Globe } from 'lucide-react';

interface OpeningAnimationProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpen: () => void;
  onToggleMusic: () => void;
  isMusicPlaying: boolean;
}

export const OpeningAnimation: React.FC<OpeningAnimationProps> = ({
  language,
  onLanguageChange,
  onOpen,
  onToggleMusic,
  isMusicPlaying
}) => {
  const [isOpening, setIsOpening] = useState(false);
  const t = translations[language];

  const handleOpenClick = () => {
    setIsOpening(true);

    // Start auspicious wedding music on user interaction
    if (!isMusicPlaying) {
      weddingAudio.play();
      onToggleMusic();
    }

    // Gentle celebratory rose petals and gold confetti burst
    try {
      confetti({
        particleCount: 45,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#e63946', '#ffd166', '#a0144f', '#f4d35e', '#ffffff']
      });
    } catch {
      // Ignore if canvas-confetti fails
    }

    // Complete unfolding transition
    setTimeout(() => {
      onOpen();
    }, 900);
  };

  const handleSkip = () => {
    onOpen();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 transition-all duration-700 ${
        isOpening ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{
        background: 'radial-gradient(circle at center, #fdfbf7 0%, #f7eee2 60%, #eedbc5 100%)'
      }}
    >
      {/* Decorative Traditional Toran at Very Top */}
      <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-[#981249] via-[#d4af37] to-[#981249]" />

      {/* Top Floating Controls (Language & Music preview) */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
        {/* Quick Language Selector */}
        <div className="flex items-center bg-[#fffdf9]/90 backdrop-blur-sm border border-[#d4af37]/60 rounded-full px-2 py-1 shadow-sm">
          <Globe className="w-3.5 h-3.5 text-[#981249] mr-1" />
          {(['en', 'te', 'kn'] as Language[]).map((lang) => (
            <button
              key={lang}
              onClick={() => onLanguageChange(lang)}
              className={`px-2 py-0.5 text-xs font-semibold rounded-full transition-all ${
                language === lang
                  ? 'bg-[#981249] text-white shadow-xs'
                  : 'text-[#5a3e1b] hover:text-[#981249]'
              }`}
            >
              {lang === 'en' ? 'ENG' : lang === 'te' ? 'తెలుగు' : 'ಕನ್ನಡ'}
            </button>
          ))}
        </div>
      </div>

      {/* Envelope Card Container */}
      <div
        className={`relative w-full max-w-md bg-[#fffdf9] rounded-2xl shadow-2xl border-4 border-[#d4af37] p-5 sm:p-8 text-center transition-transform duration-700 ${
          isOpening ? 'rotate-x-12 scale-90' : 'hover:shadow-3xl'
        }`}
        style={{
          boxShadow: '0 20px 40px -15px rgba(152, 18, 73, 0.25), 0 0 0 1px rgba(184, 134, 11, 0.4)'
        }}
      >
        {/* Four Corner Ornate Filigrees */}
        <CornerFlourish position="top-left" size={38} />
        <CornerFlourish position="top-right" size={38} />
        <CornerFlourish position="bottom-left" size={38} />
        <CornerFlourish position="bottom-right" size={38} />

        {/* Inner Gold Foil Line Border */}
        <div className="border border-[#b8860b]/40 rounded-xl p-4 sm:p-6 bg-gradient-to-b from-[#fffcf7] via-[#fffdf9] to-[#faf3e8]">
          {/* Top Auspicious Invocation */}
          <div className="mb-2">
            <span className="font-serif text-[#981249] text-sm sm:text-base font-bold tracking-wider inline-block">
              {t.ganeshaInvocation}
            </span>
          </div>

          {/* Deity Illustration */}
          <div className="my-2 flex justify-center transform transition-transform hover:scale-105 duration-300">
            <div className="relative p-2 bg-[#fffbf2] rounded-full border-2 border-[#d4af37]/60 shadow-inner">
              <GaneshaArt size={105} />
            </div>
          </div>

          {/* Traditional Card Subtitle */}
          <p className="text-xs uppercase tracking-widest text-[#b8860b] font-semibold mt-1">
            {t.invitationTitle}
          </p>

          {/* Couple Names in Elegant Royal Styling */}
          <div className="my-3 space-y-1">
            <h1 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#981249] tracking-tight">
              Ganesh Reddy
            </h1>
            <div className="flex items-center justify-center gap-2 text-[#b8860b]">
              <span className="h-[1px] w-8 bg-[#d4af37]" />
              <span className="text-xs italic font-serif px-1">{t.wedsBadge}</span>
              <span className="h-[1px] w-8 bg-[#d4af37]" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#981249] tracking-tight">
              Anusha Reddy
            </h1>
          </div>

          {/* Wedding Dates & City */}
          <div className="my-3 py-1.5 px-3 bg-[#fdf8f0] rounded-lg border border-[#e2cca4]/70 inline-block">
            <p className="text-xs sm:text-sm font-medium text-[#2d2d2d]">
              {t.datesBanner}
            </p>
          </div>

          {/* Kalash Auspicious Emblem */}
          <div className="flex justify-center my-1 opacity-90">
            <KalashArt size={42} />
          </div>

          {/* Action Buttons */}
          <div className="mt-4 space-y-2">
            <button
              onClick={handleOpenClick}
              className="w-full relative group overflow-hidden bg-gradient-to-r from-[#981249] via-[#b80f55] to-[#981249] text-white py-3 px-6 rounded-full font-serif text-base sm:text-lg font-bold shadow-lg shadow-[#981249]/30 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-[#ffd166] animate-pulse" />
              <span>{t.openInvitation}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </button>

            <button
              onClick={handleSkip}
              className="text-xs text-[#715438] hover:text-[#981249] underline underline-offset-4 transition-colors py-1 block w-full"
            >
              {t.skipIntro}
            </button>
          </div>

          {/* Traditional Sanskrit Shloka snippet */}
          <div className="mt-3 pt-2 border-t border-[#d4af37]/30">
            <p className="text-[10px] sm:text-xs text-[#6e4e37] italic font-serif leading-relaxed line-clamp-1">
              || వక్రతుండ మహాకాయ సూర్యకోటి సమప్రభ ||
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
