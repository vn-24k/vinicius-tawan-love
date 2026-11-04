import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { ChaptersSection } from './components/ChaptersSection';
import { CulinaryShowcase } from './components/CulinaryShowcase';
import { CulturalAlchemy } from './components/CulturalAlchemy';
import { VowsAndGuestbook } from './components/VowsAndGuestbook';
import { Footer } from './components/Footer';
import { ConnectionDrawer } from './components/ConnectionDrawer';
import { StarfieldCanvas } from './components/StarfieldCanvas';
import { FloatingHeartsCanvas } from './components/FloatingHeartsCanvas';
import { MagneticMarquee } from './components/MagneticMarquee';
import { soundEngine } from './audio/CinematicAudio';

export function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [audioActive, setAudioActive] = useState(false);

  const handleToggleAudio = async () => {
    const newState = await soundEngine.toggle();
    setAudioActive(newState);
  };

  return (
    <div className="relative min-h-screen bg-[#08080A] text-slate-100 selection:bg-[#E5B869] selection:text-black">
      {/* Dynamic Starfield Canvas Background from Arsenal */}
      <StarfieldCanvas intensity={1.2} />

      {/* Romantic Ambient Floating Hearts & Mouse Trail Canvas */}
      <FloatingHeartsCanvas />

      {/* Main Content Sections */}
      <div className="relative z-10 flex flex-col">
        {/* Hero Section (Cream top fading into Dark Luxury, with Clocks & Live Weather) */}
        <HeroSection
          onOpenDrawer={() => setDrawerOpen(true)}
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

      {/* Retractable Drawer Housing the 22 Uiverse Instruments */}
      <ConnectionDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </div>
  );
}

export default App;
