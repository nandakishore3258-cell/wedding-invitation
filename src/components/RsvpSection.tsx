import React, { useState } from 'react';
import type { Language, RsvpEntry } from '../types/wedding';
import { translations } from '../config/translations';
import { OrnamentalDivider, CornerFlourish } from './TraditionalMotifs';
import { CheckCircle2, MessageCircle, User, Users, Phone, Heart } from 'lucide-react';

interface RsvpSectionProps {
  language: Language;
}

const STORAGE_KEY = 'wedding_guest_rsvp_v1';

export const RsvpSection: React.FC<RsvpSectionProps> = ({ language }) => {
  const t = translations[language];

  const [guestName, setGuestName] = useState('');
  const [phone, setPhone] = useState('');
  const [attending, setAttending] = useState<'both' | 'muhurtham' | 'reception' | 'cannot'>('both');
  const [guestCount, setGuestCount] = useState<number>(2);
  const [wishes, setWishes] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [savedRsvp, setSavedRsvp] = useState<RsvpEntry | null>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored) as RsvpEntry;
      }
    } catch {
      // Ignore localStorage read error
    }
    return null;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) {
      setErrorMessage(t.rsvpRequiredError);
      return;
    }

    setErrorMessage('');

    const entry: RsvpEntry = {
      id: Date.now().toString(),
      guestName: guestName.trim(),
      phone: phone.trim(),
      attending,
      guestCount,
      wishes: wishes.trim(),
      createdAt: new Date().toISOString()
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entry));
      setSavedRsvp(entry);
      setIsSubmitted(true);
    } catch {
      // Handle quota error gracefully
      setIsSubmitted(true);
    }
  };

  const handleSendViaWhatsApp = () => {
    if (!guestName.trim()) {
      setErrorMessage(t.rsvpRequiredError);
      return;
    }

    const attendanceText =
      attending === 'both'
        ? t.rsvpBoth
        : attending === 'muhurtham'
        ? t.rsvpMuhurtham
        : attending === 'reception'
        ? t.rsvpReception
        : t.rsvpCannot;

    let text = `*Wedding RSVP for Ganesh & Anusha's Wedding*\n\n`;
    text += `*Guest Name:* ${guestName.trim()}\n`;
    if (phone.trim()) text += `*Mobile:* ${phone.trim()}\n`;
    text += `*Attendance:* ${attendanceText}\n`;
    if (attending !== 'cannot') text += `*Number of Guests:* ${guestCount}\n`;
    if (wishes.trim()) text += `*Wishes/Blessings:* ${wishes.trim()}\n`;
    text += `\nSent via Wedding Invitation website.`;

    const encoded = encodeURIComponent(text);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
  };

  return (
    <section id="rsvp" className="py-6 px-3 sm:px-6">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-6">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#b8860b]">
            || ఆహ్వాన స్పందన ||
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#981249]">
            {t.rsvpHeading}
          </h2>
          <p className="text-xs sm:text-sm text-[#5f442f] max-w-md mx-auto mt-1">
            {t.rsvpSubtitle}
          </p>
          <OrnamentalDivider />
        </div>

        <div className="relative bg-[#fffdf9] rounded-2xl border-2 border-[#d4af37] p-5 sm:p-8 shadow-xl">
          <CornerFlourish position="top-left" size={28} />
          <CornerFlourish position="top-right" size={28} />
          <CornerFlourish position="bottom-left" size={28} />
          <CornerFlourish position="bottom-right" size={28} />

          {isSubmitted || savedRsvp ? (
            <div className="text-center py-4 space-y-3 animate-fadeIn">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#981249]">
                {savedRsvp?.guestName}, {t.rsvpSuccessMsg}
              </h3>

              <div className="p-3 bg-[#fcf8f0] rounded-xl border border-[#d4af37]/40 text-xs text-[#523d2b] max-w-sm mx-auto text-left space-y-1">
                <p>
                  <strong>{language === 'en' ? 'Attendance' : language === 'te' ? 'హాజరు' : 'ಭಾಗವಹಿಸುವಿಕೆ'}:</strong>{' '}
                  {savedRsvp?.attending === 'both'
                    ? t.rsvpBoth
                    : savedRsvp?.attending === 'muhurtham'
                    ? t.rsvpMuhurtham
                    : savedRsvp?.attending === 'reception'
                    ? t.rsvpReception
                    : t.rsvpCannot}
                </p>
                {savedRsvp?.attending !== 'cannot' && (
                  <p>
                    <strong>{language === 'en' ? 'Guests' : language === 'te' ? 'వ్యక్తులు' : 'ಅತಿಥಿಗಳು'}:</strong>{' '}
                    {savedRsvp?.guestCount}
                  </p>
                )}
                {savedRsvp?.wishes && (
                  <p>
                    <strong>{language === 'en' ? 'Wishes' : language === 'te' ? 'శుభాకాంక్షలు' : 'ಹಾರೈಕೆಗಳು'}:</strong>{' '}
                    {savedRsvp?.wishes}
                  </p>
                )}
              </div>

              <div className="pt-2 flex flex-col xs:flex-row gap-2 justify-center">
                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-full bg-[#25d366] hover:bg-[#20ba5c] text-white text-xs font-semibold shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.rsvpWhatsAppBtn}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setSavedRsvp(null);
                  }}
                  className="inline-flex items-center justify-center py-2 px-4 rounded-full bg-white hover:bg-[#faf2e4] text-[#704d2e] border border-[#d4af37] text-xs font-semibold transition-colors"
                >
                  {language === 'en' ? 'Update RSVP' : language === 'te' ? 'సవరించండి' : 'ಬದಲಾಯಿಸಿ'}
                </button>
              </div>

              <p className="text-[11px] text-[#78593c] italic mt-3">
                {t.rsvpSavedLocallyNotice}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {errorMessage && (
                <div className="p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
                  {errorMessage}
                </div>
              )}

              {/* Guest Name */}
              <div>
                <label className="block text-xs font-semibold text-[#3b2a1a] mb-1">
                  {t.rsvpNameLabel}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#981249] absolute left-3 top-3 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder={t.rsvpNamePlaceholder}
                    className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#d4af37]/70 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#981249] text-[#1a1a1a]"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-semibold text-[#3b2a1a] mb-1">
                  {t.rsvpPhoneLabel}
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#981249] absolute left-3 top-3 pointer-events-none" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.rsvpPhonePlaceholder}
                    className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#d4af37]/70 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#981249] text-[#1a1a1a]"
                  />
                </div>
              </div>

              {/* Attendance Radio Options */}
              <div>
                <label className="block text-xs font-semibold text-[#3b2a1a] mb-1.5">
                  {t.rsvpAttendanceLabel}
                </label>
                <div className="space-y-2">
                  {[
                    { val: 'both', label: t.rsvpBoth },
                    { val: 'muhurtham', label: t.rsvpMuhurtham },
                    { val: 'reception', label: t.rsvpReception },
                    { val: 'cannot', label: t.rsvpCannot }
                  ].map((opt) => (
                    <label
                      key={opt.val}
                      className={`flex items-start gap-2.5 p-2.5 rounded-xl border text-xs sm:text-sm cursor-pointer transition-all ${
                        attending === opt.val
                          ? 'bg-[#fcf5e9] border-[#981249] text-[#981249] font-semibold shadow-2xs'
                          : 'bg-white border-[#e6d8c3] text-[#333] hover:bg-[#faf6ee]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="attendance"
                        value={opt.val}
                        checked={attending === opt.val}
                        onChange={() => setAttending(opt.val as typeof attending)}
                        className="mt-0.5 accent-[#981249]"
                      />
                      <span>{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Guest Count */}
              {attending !== 'cannot' && (
                <div>
                  <label className="block text-xs font-semibold text-[#3b2a1a] mb-1">
                    {t.rsvpGuestsLabel}
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-[#981249] absolute left-3 top-3 pointer-events-none" />
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(Number(e.target.value))}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#d4af37]/70 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#981249] text-[#1a1a1a]"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Blessings & Wishes */}
              <div>
                <label className="block text-xs font-semibold text-[#3b2a1a] mb-1">
                  {t.rsvpWishesLabel}
                </label>
                <textarea
                  rows={2}
                  value={wishes}
                  onChange={(e) => setWishes(e.target.value)}
                  placeholder={t.rsvpWishesPlaceholder}
                  className="w-full p-2.5 text-sm bg-white border border-[#d4af37]/70 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#981249] text-[#1a1a1a] resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="submit"
                  className="flex-1 py-2.5 px-4 bg-gradient-to-r from-[#981249] to-[#b80f55] hover:from-[#800c3b] hover:to-[#981249] text-white rounded-xl text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <Heart className="w-4 h-4 fill-current text-[#ffd166]" />
                  <span>{t.rsvpSubmitBtn}</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="py-2.5 px-4 bg-[#25d366] hover:bg-[#20ba5c] text-white rounded-xl text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.rsvpWhatsAppBtn}</span>
                </button>
              </div>

              <p className="text-[11px] text-[#78593c] italic text-center mt-2">
                {t.rsvpSavedLocallyNotice}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
