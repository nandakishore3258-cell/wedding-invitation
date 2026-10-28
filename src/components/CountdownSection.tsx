import React, { useState, useEffect } from 'react';
import type { Language } from '../types/wedding';
import { weddingConfig } from '../config/weddingData';
import { translations } from '../config/translations';
import { CornerFlourish } from './TraditionalMotifs';
import { Clock, Sparkles } from 'lucide-react';

interface CountdownSectionProps {
  language: Language;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

function calculateTimeLeft(targetIso: string): TimeLeft {
  const targetTime = new Date(targetIso).getTime();
  const now = Date.now();
  const difference = targetTime - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    isComplete: false
  };
}

export const CountdownSection: React.FC<CountdownSectionProps> = ({ language }) => {
  const t = translations[language];
  const targetIso = weddingConfig.countdownTargetIso;

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(targetIso));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetIso));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetIso]);

  const units = [
    { label: t.days, value: timeLeft.days },
    { label: t.hours, value: timeLeft.hours },
    { label: t.minutes, value: timeLeft.minutes },
    { label: t.seconds, value: timeLeft.seconds }
  ];

  return (
    <section className="py-6 px-3 sm:px-6">
      <div className="relative max-w-xl mx-auto bg-gradient-to-b from-[#fffdf9] to-[#fcf7ee] rounded-2xl border-2 border-[#d4af37] p-5 sm:p-7 shadow-xl text-center">
        <CornerFlourish position="top-left" size={28} />
        <CornerFlourish position="top-right" size={28} />
        <CornerFlourish position="bottom-left" size={28} />
        <CornerFlourish position="bottom-right" size={28} />

        {/* Header */}
        <div className="flex items-center justify-center gap-2 text-[#981249] mb-1">
          <Clock className="w-5 h-5 animate-pulse text-[#b8860b]" />
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#981249]">
            {t.countdownHeading}
          </h3>
        </div>

        <p className="text-xs text-[#5f442f] max-w-md mx-auto mb-4">
          {t.countdownSubtitle}
        </p>

        {timeLeft.isComplete ? (
          <div className="p-4 bg-[#fdf5f5] rounded-xl border border-[#981249]/40 my-3">
            <Sparkles className="w-8 h-8 text-[#ffd166] mx-auto mb-2 animate-bounce" />
            <p className="font-serif text-base sm:text-lg font-bold text-[#981249]">
              {t.countdownFinished}
            </p>
          </div>
        ) : (
          /* Live Countdown Boxes */
          <div className="grid grid-cols-4 gap-2 sm:gap-3 my-4">
            {units.map((unit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border-2 border-[#d4af37]/70 p-2 sm:p-3 shadow-md flex flex-col items-center justify-center hover:scale-105 transition-transform"
                style={{
                  boxShadow: '0 4px 12px rgba(184, 134, 11, 0.15)'
                }}
              >
                <span className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#981249] leading-none">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-[#6e4e37] uppercase tracking-wider mt-1.5 line-clamp-1">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-3 inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-[#f6ebdc] border border-[#d4af37]/50 text-xs font-medium text-[#4a3525]">
          <span>🌟</span>
          <span>
            {language === 'en'
              ? 'Sunday, 29 Nov 2026 • 9:00 AM IST (Thula Lagnam)'
              : language === 'te'
              ? 'ఆదివారం, 29 నవంబర్ 2026 • ఉదయం 9:00 (తులా లగ్నం)'
              : 'ಭಾನುವಾರ, 29 ನವೆಂಬರ್ 2026 • ಬೆಳಗ್ಗೆ 9:00 (ತುಲಾ ಲಗ್ನ)'}
          </span>
        </div>
      </div>
    </section>
  );
};
