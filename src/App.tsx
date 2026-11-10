import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { ChaptersSection } from './components/ChaptersSection';
import { CulinaryShowcase } from './components/CulinaryShowcase';
import { CulturalAlchemy } from './components/CulturalAlchemy';
import { VowsAndGuestbook } from './components/VowsAndGuestbook';
import { Footer } from './components/Footer';
import { StarfieldCanvas } from './components/StarfieldCanvas';
import { FloatingHeartsCanvas } from './components/FloatingHeartsCanvas';
import { TranscontinentalAtmosphere } from './components/TranscontinentalAtmosphere';
import { MagneticMarquee } from './components/MagneticMarquee';
import { LanguageProvider } from './context/LanguageContext';
import { soundEngine } from './audio/CinematicAudio';

function MainApp() {
  const [audioActive, setAudioActive] = useState(false);

  const handleToggleAudio = async () => {
    const newState = await soundEngine.toggle();
    setAudioActive(newState);
  };

  return (
    <div className="relative min-h-screen bg-[#07050a] text-[#FAF8F5] selection:bg-[#d4a359] selection:text-black">
      {/* 8K Living Transcontinental Atmosphere (Rio de Janeiro, Bangkok Wat Arun, Yi Peng Lanterns, Amazonia) */}
      <TranscontinentalAtmosphere />

      {/* Dynamic Starfield Canvas Background from Arsenal */}
      <StarfieldCanvas intensity={0.7} />

      {/* Romantic Ambient Floating Hearts & Mouse Trail Canvas */}
      <FloatingHeartsCanvas />

      {/* Main Content Sections */}
      <div className="relative z-10 flex flex-col">
        {/* Hero Section (Cream top fading into Dark Luxury, with Clocks & Live Weather, Language Switcher) */}
        <HeroSection
          audioActive={audioActive}
          onToggleAudio={handleToggleAudio}
        />

        {/* Kinetic Magnetic Marquee Ticker */}
        <MagneticMarquee speed={1.2} direction="left" />

        {/* Section 02: Story & Asymmetric Visual with Heartbeat Sync */}
        <StorySection />

        {/* Section 03: Chapters & 3D Interactive Timeline Cards */}
        <ChaptersSection />

        {/* Section 03.5: Culinary Showcase (Cards de Rolagem de Comidas do Brasil & Tailândia) */}
        <CulinaryShowcase />

        {/* Second Kinetic Marquee Ribbon */}
        <MagneticMarquee speed={0.9} direction="right" />

        {/* Section 04: Cultural Alchemy & Flight Path Simulation */}
        <CulturalAlchemy />

        {/* Section 05: Vows & Interactive Guestbook with Confetti */}
        <VowsAndGuestbook />

        {/* Section 06: Editorial Luxury Footer */}
        <Footer />
      </div>
    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}

export default App;
