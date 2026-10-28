import React, { useState } from 'react';
import type { Language, FamilyAddress } from '../types/wedding';
import { weddingConfig } from '../config/weddingData';
import { translations } from '../config/translations';
import { OrnamentalDivider, CornerFlourish } from './TraditionalMotifs';
import { Home, Copy, Check, MapPin } from 'lucide-react';

interface AddressesSectionProps {
  language: Language;
}

export const AddressesSection: React.FC<AddressesSectionProps> = ({ language }) => {
  const t = translations[language];
  const { addresses } = weddingConfig;
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopyAddress = (key: 'groom' | 'bride', address: FamilyAddress) => {
    const textToCopy = `${address.familyTitle[language]}: ${address.name[language]}\n${address.addressLines[language].join(', ')}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2500);
  };

  const renderAddressCard = (key: 'groom' | 'bride', address: FamilyAddress) => {
    const isCopied = copiedKey === key;

    return (
      <div
        key={key}
        className="relative bg-[#fffdf9] rounded-2xl border-2 border-[#d4af37] p-5 sm:p-6 shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow"
      >
        <CornerFlourish position="top-left" size={24} />
        <CornerFlourish position="top-right" size={24} />

        <div>
          {/* Residence Label */}
          <div className="flex items-center gap-2 mb-2 text-[#981249]">
            <Home className="w-4 h-4 text-[#b8860b]" />
            <span className="font-serif font-bold text-sm sm:text-base">
              {address.familyTitle[language]}
            </span>
          </div>

          {/* Family Head Name */}
          <h4 className="text-base sm:text-lg font-serif font-bold text-[#1f1f1f] mb-3">
            {address.name[language]}
          </h4>

          {/* Address Lines */}
          <div className="space-y-1 text-xs sm:text-sm text-[#382a1e] bg-[#fcf8f0] p-3 rounded-xl border border-[#e8d7bb] leading-relaxed">
            {address.addressLines[language].map((line, idx) => (
              <p key={idx} className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#981249] shrink-0 mt-0.5" />
                <span>{line}</span>
              </p>
            ))}
          </div>
        </div>

        {/* Copy Address Button */}
        <div className="mt-4 pt-3 border-t border-[#d4af37]/30">
          <button
            onClick={() => handleCopyAddress(key, address)}
            className={`w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold transition-all duration-200 ${
              isCopied
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'bg-white hover:bg-[#faf2e4] text-[#704d2e] border border-[#d4af37]'
            }`}
          >
            {isCopied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>{t.addressCopied}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#981249]" />
                <span>{t.copyAddress}</span>
              </>
            )}
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="py-6 px-3 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#b8860b]">
            || నివాస స్థలాలు ||
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#981249]">
            {t.addressesHeading}
          </h2>
          <p className="text-xs sm:text-sm text-[#5f442f] max-w-md mx-auto mt-1">
            {t.addressesSubtitle}
          </p>
          <OrnamentalDivider />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {renderAddressCard('groom', addresses.groom)}
          {renderAddressCard('bride', addresses.bride)}
        </div>
      </div>
    </section>
  );
};
