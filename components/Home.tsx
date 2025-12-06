'use client';

import React from 'react';
import { Hero } from './Hero';
import { Services } from './Services';
import { Contact } from './Contact';
import { SplineBackground } from './SplineBackground';

export const Home: React.FC = () => {
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      // Calculate progress: 0 at top, 1 when scrolled one full viewport height
      const progress = Math.min(scrollY / windowHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SplineBackground />
      <Hero />

      {/* Dynamic Frosted Overlay */}
      <div
        className="fixed inset-0 z-0 bg-slate-950/80 backdrop-blur-md pointer-events-none transition-opacity duration-100 ease-out"
        style={{ opacity: Math.min(scrollProgress * 1.5, 0.85) }}
      />

      <div className="relative z-10 pt-20">
        <Services />
        <Contact />
      </div>
    </>
  );
};