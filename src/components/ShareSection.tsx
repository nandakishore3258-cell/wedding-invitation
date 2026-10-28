import React, { useState } from 'react';
import type { Language } from '../types/wedding';
import { weddingConfig } from '../config/weddingData';
import { translations } from '../config/translations';
import { CornerFlourish } from './TraditionalMotifs';
import { Share2, MessageCircle, Copy, Check } from 'lucide-react';

interface ShareSectionProps {
  language: Language;
}

export const ShareSection: React.FC<ShareSectionProps> = ({ language }) => {
  const t = translations[language];
  const { couple, events, venue, invitationFrom } = weddingConfig;
  const [copied, setCopied] = useState(false);

  const getShareUrl = (): string => {
    return window.location.href;
  };

  const getShareMessage = (): string => {
    const url = getShareUrl();

    if (language === 'te') {
      return (
        `🌸 *శుభ వివాహ ఆహ్వాన పత్రిక* 🌸\n\n` +
        `${invitationFrom.te} దంపతులు తమ కుమారుడు ` +
        `*${couple.groom.salutation.te} ${couple.groom.name.te}* (${couple.groom.qualification}) మరియు ` +
        `*${couple.bride.salutation.te} ${couple.bride.name.te}* (${couple.bride.qualification}) ల ` +
        `పవిత్ర వివాహ మహోత్సవ వేడుకకు మిమ్మల్ని సకుటుంబ సమేతంగా సాదరంగా ఆహ్వానిస్తున్నారు.\n\n` +
        `🎉 *స్నేహ విందు (రిసెప్షన్):* ${events.reception.dateStr.te}, ${events.reception.timeStr.te}\n` +
        `✨ *శుభ ముహూర్తం:* ${events.muhurtham.dateStr.te}, ${events.muhurtham.timeStr.te} (${events.muhurtham.lagnam?.te})\n` +
        `📍 *వేదిక:* ${venue.name.te}, ${venue.city.te}, ${venue.state.te}\n\n` +
        `మా డిజిటల్ ఆహ్వాన పత్రికను వీక్షించండి:\n${url}`
      );
    }

    if (language === 'kn') {
      return (
        `🌸 *ಶುಭ ವಿವಾಹ ಆಮಂತ್ರಣ ಪತ್ರಿಕೆ* 🌸\n\n` +
        `${invitationFrom.kn} ದಂಪತಿಗಳು ತಮ್ಮ ಪ್ರೀತಿಯ ಪುತ್ರ ` +
        `*${couple.groom.salutation.kn} ${couple.groom.name.kn}* (${couple.groom.qualification}) ಹಾಗೂ ` +
        `*${couple.bride.salutation.kn} ${couple.bride.name.kn}* (${couple.bride.qualification}) ರವರ ` +
        `ಪಾವನ ಶುಭ ವಿವಾಹ ಮಹೋತ್ಸವಕ್ಕೆ ಸಕುಟುಂಬ ಸಮೇತರಾಗಿ ಆಗಮಿಸಲು ಹಾರ್ದಿಕವಾಗಿ ಆಹ್ವಾನಿಸುತ್ತಾರೆ.\n\n` +
        `🎉 *ಸ್ವಾಗತ ಸಮಾರಂಭ:* ${events.reception.dateStr.kn}, ${events.reception.timeStr.kn}\n` +
        `✨ *ಶುಭ ಮುಹೂರ್ತ:* ${events.muhurtham.dateStr.kn}, ${events.muhurtham.timeStr.kn} (${events.muhurtham.lagnam?.kn})\n` +
        `📍 *ಕಲ್ಯಾಣ ಮಂಟಪ:* ${venue.name.kn}, ${venue.city.kn}, ${venue.state.kn}\n\n` +
        `ಡಿಜಿಟಲ್ ಆಮಂತ್ರಣ ಪತ್ರಿಕೆ ವೀಕ್ಷಿಸಿ:\n${url}`
      );
    }

    // Default English
    return (
      `🌸 *Wedding Invitation* 🌸\n\n` +
      `${invitationFrom.en} cordially invite you and your family to the auspicious wedding ceremony of their son ` +
      `*${couple.groom.salutation.en} ${couple.groom.name.en}* (${couple.groom.qualification}) with ` +
      `*${couple.bride.salutation.en} ${couple.bride.name.en}* (${couple.bride.qualification}).\n\n` +
      `🎉 *Reception:* ${events.reception.dateStr.en}, ${events.reception.timeStr.en}\n` +
      `✨ *Wedding Muhurtham:* ${events.muhurtham.dateStr.en}, ${events.muhurtham.timeStr.en} (${events.muhurtham.lagnam?.en})\n` +
      `📍 *Venue:* ${venue.name.en}, ${venue.city.en}, ${venue.state.en}\n\n` +
      `Please view our digital wedding card here:\n${url}`
    );
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(getShareMessage());
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(getShareUrl());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-6 px-3 sm:px-6">
      <div className="max-w-xl mx-auto">
        <div className="relative bg-gradient-to-b from-[#fffdf9] to-[#fbf5eb] rounded-2xl border-2 border-[#d4af37] p-5 sm:p-7 shadow-xl text-center">
          <CornerFlourish position="top-left" size={26} />
          <CornerFlourish position="top-right" size={26} />
          <CornerFlourish position="bottom-left" size={26} />
          <CornerFlourish position="bottom-right" size={26} />

          <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-[#25d366]/10 text-[#25d366] flex items-center justify-center">
            <Share2 className="w-6 h-6" />
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-[#981249] mb-1">
            {t.shareHeading}
          </h3>

          <p className="text-xs sm:text-sm text-[#5f442f] max-w-md mx-auto mb-5">
            {t.shareSubtitle}
          </p>

          <div className="flex flex-col xs:flex-row gap-3 justify-center">
            <button
              onClick={handleWhatsAppShare}
              className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#25d366] hover:bg-[#20ba5c] text-white font-bold text-sm shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>{t.shareWhatsAppBtn}</span>
            </button>

            <button
              onClick={handleCopyLink}
              className={`inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full border text-xs sm:text-sm font-semibold transition-all ${
                copied
                  ? 'bg-emerald-700 text-white border-emerald-700'
                  : 'bg-white hover:bg-[#faf2e4] text-[#704d2e] border-[#d4af37]'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>{t.linkCopiedMsg}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#981249]" />
                  <span>{t.shareCopyLinkBtn}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
