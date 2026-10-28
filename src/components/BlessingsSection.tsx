import React from 'react';
import type { Language } from '../types/wedding';
import { weddingConfig } from '../config/weddingData';
import { translations } from '../config/translations';
import { OrnamentalDivider, CornerFlourish, KalashArt } from './TraditionalMotifs';

interface BlessingsSectionProps {
  language: Language;
}

export const BlessingsSection: React.FC<BlessingsSectionProps> = ({ language }) => {
  const t = translations[language];
  const { couple, invitationFrom } = weddingConfig;

  return (
    <section className="py-6 px-3 sm:px-6">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Card 1: Blessings of Elders & Ancestors */}
        <div className="relative bg-[#fffdf9] rounded-2xl border-2 border-[#d4af37]/70 p-5 sm:p-7 shadow-lg text-center">
          <CornerFlourish position="top-left" size={28} />
          <CornerFlourish position="top-right" size={28} />
          <CornerFlourish position="bottom-left" size={28} />
          <CornerFlourish position="bottom-right" size={28} />

          <span className="text-xs uppercase tracking-widest font-semibold text-[#b8860b]">
            {t.blessingsHeading}
          </span>

          <div className="my-3 py-3 px-4 bg-[#faf2e6] rounded-xl border border-[#d4af37]/40 max-w-lg mx-auto">
            <p className="font-serif text-sm sm:text-base font-bold text-[#800c3b] leading-relaxed">
              {couple.groom.grandParentsBlessings[language]}
            </p>
          </div>

          <p className="text-xs text-[#6e4e37] italic font-serif">
            {language === 'en'
              ? 'Seeking eternal blessings from our beloved elders on this auspicious journey.'
              : language === 'te'
              ? 'మా ప్రియతమ పెద్దల దివ్యాశీస్సులు నూతన దంపతులకు సదా శ్రీరామరక్ష.'
              : 'ನಮ್ಮ ಹಿರಿಯರ ಪಾವನ ಆಶೀರ್ವಾದಗಳು ನವಜೋಡಿಗೆ ಸದಾ ರಕ್ಷೆಯಾಗಿರಲಿ.'}
          </p>
        </div>

        {/* Card 2: Cordial Invitation from Groom's Parents */}
        <div className="relative bg-[#fffdf9] rounded-2xl border-2 border-[#981249]/40 p-5 sm:p-8 shadow-xl text-center">
          <CornerFlourish position="top-left" size={32} />
          <CornerFlourish position="top-right" size={32} />
          <CornerFlourish position="bottom-left" size={32} />
          <CornerFlourish position="bottom-right" size={32} />

          <div className="flex justify-center mb-2">
            <KalashArt size={48} />
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-[#981249] tracking-tight">
            {t.invitationLetterHeading}
          </h3>

          <OrnamentalDivider />

          {/* Invitation Text Exactly As Required */}
          <div className="my-4 space-y-3 text-[#1f1f1f] leading-relaxed font-sans text-sm sm:text-base max-w-xl mx-auto">
            <p className="font-serif text-base sm:text-lg font-bold text-[#981249]">
              {invitationFrom[language]}
            </p>

            <p className="text-[#2b2b2b] text-sm sm:text-base leading-relaxed">
              {t.invitationLetterBody}
            </p>

            <div className="p-3 bg-[#fbf5eb] rounded-xl border border-[#d4af37]/50 mt-4">
              <p className="text-xs sm:text-sm font-serif italic text-[#704d2e]">
                {language === 'en'
                  ? 'Kindly grace this auspicious occasion with your esteemed presence and bless the newly wedded couple with happiness, health, and prosperity.'
                  : language === 'te'
                  ? 'తమరు సకుటుంబ సమేతంగా విచ్చేసి, నూతన వధూవరులను మనసారా ఆశీర్వదించి మా ఆతిథ్యాన్ని స్వీకరించవలసిందిగా ప్రార్థన.'
                  : 'ತಾವು ಸಕುಟುಂಬ ಸಮೇತರಾಗಿ ಆಗಮಿಸಿ, ನವ ವಧೂ-ವರರಿಗೆ ಹಾರೈಸಿ ಆಶೀರ್ವದಿಸಬೇಕಾಗಿ ವಿನಮ್ರ ಪ್ರಾರ್ಥನೆ.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
