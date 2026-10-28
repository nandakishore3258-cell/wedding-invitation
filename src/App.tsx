import React, { useState, useEffect } from 'react';
import type { Language } from './types/wedding';
import { weddingAudio } from './utils/audioSynthesizer';
import { PetalsCanvas } from './components/PetalsCanvas';
import { OpeningAnimation } from './components/OpeningAnimation';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BlessingsSection } from './components/BlessingsSection';
import { CoupleSection } from './components/CoupleSection';
import { CountdownSection } from './components/CountdownSection';
import { EventsSection } from './components/EventsSection';
import { VenueSection } from './components/VenueSection';
import { AddressesSection } from './components/AddressesSection';
import { RsvpSection } from './components/RsvpSection';
import { ShareSection } from './components/ShareSection';
import { Footer } from './components/Footer';

const LANG_STORAGE_KEY = 'wedding_preferred_language';

export const App: React.FC = () => {
  // Read stored language or default to 'en' (English)
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(LANG_STORAGE_KEY);
      if (saved === 'te' || saved === 'kn' || saved === 'en') {
        return saved;
      }
    } catch {
      // fallback
    }
    return 'en';
  });

  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState<boolean>(false);
  const [petalsEnabled, setPetalsEnabled] = useState<boolean>(true);

  // Update HTML lang attribute and localStorage whenever language changes
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.className = `lang-${language}`;
    try {
      localStorage.setItem(LANG_STORAGE_KEY, language);
    } catch {
      // Ignore localStorage error
    }

    // Dynamic title based on language
    if (language === 'te') {
      document.title = 'శుభ వివాహ ఆహ్వాన పత్రిక | చి. గణేష్ రెడ్డి & చి.సౌ. అనూష రెడ్డి';
    } else if (language === 'kn') {
      document.title = 'ಶುಭ ವಿವಾಹ ಆಮಂತ್ರಣ ಪತ್ರಿಕೆ | ಚಿ. ಗಣೇಶ್ ರೆಡ್ಡಿ & ಚಿ.ಸೌ. ಅನೂಷಾ ರೆಡ್ಡಿ';
    } else {
      document.title = 'Wedding Invitation | Chi. Ganesh Reddy & Chi. Sou. Anusha Reddy';
    }
  }, [language]);

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
  };

  const handleToggleMusic = () => {
    const newState = weddingAudio.toggle();
    setIsMusicPlaying(newState);
  };

  const handleTogglePetals = () => {
    setPetalsEnabled((prev) => !prev);
  };

  const handleOpenInvitation = () => {
    setIsOpened(true);
    // If music was not started yet, try starting it
    if (!isMusicPlaying) {
      weddingAudio.play();
      setIsMusicPlaying(true);
    }
  };

  return (
    <div className={`min-h-screen bg-[#fcf8f2] text-[#1f1f1f] flex flex-col font-sans lang-${language}`}>
      {/* Falling Flower Petals Canvas */}
      <PetalsCanvas enabled={petalsEnabled} />

      {/* Opening Animation Envelope Screen */}
      {!isOpened && (
        <OpeningAnimation
          language={language}
          onLanguageChange={handleLanguageChange}
          onOpen={handleOpenInvitation}
          onToggleMusic={handleToggleMusic}
          isMusicPlaying={isMusicPlaying}
        />
      )}

      {/* Main Website (Shown once opened or skipped) */}
      <div className={`transition-opacity duration-700 ${isOpened ? 'opacity-100' : 'opacity-0'}`}>
        {/* Sticky Top Bar with Language switcher & Audio controls */}
        <Navbar
          language={language}
          onLanguageChange={handleLanguageChange}
          isMusicPlaying={isMusicPlaying}
          onToggleMusic={handleToggleMusic}
          petalsEnabled={petalsEnabled}
          onTogglePetals={handleTogglePetals}
        />

        {/* Main Content Area */}
        <main className="flex-1 max-w-4xl mx-auto w-full pb-10">
          {/* Section A: Wedding Cover / Hero */}
          <HeroSection language={language} />

          {/* Section B: Elders' Blessings & Parents' Cordial Invitation */}
          <BlessingsSection language={language} />

          {/* Section C: The Bride and Groom */}
          <CoupleSection language={language} />

          {/* Section D: Live Muhurtham Countdown */}
          <CountdownSection language={language} />

          {/* Section E: Reception & Muhurtham Events */}
          <EventsSection language={language} />

          {/* Section F: Venue & Directions */}
          <VenueSection language={language} />

          {/* Section G: Family Residences & Addresses */}
          <AddressesSection language={language} />

          {/* Section H: RSVP & Guest Response */}
          <RsvpSection language={language} />

          {/* Section I: WhatsApp Sharing */}
          <ShareSection language={language} />
        </main>

        {/* Section J: Best Compliments Footer */}
        <Footer language={language} />
      </div>
    </div>
  );
};

export default App;
