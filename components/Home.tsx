import React from 'react';
import { Hero } from './Hero';
import { Services } from './Services';
import { Contact } from './Contact';
import { SplineBackground } from './SplineBackground';

export const Home: React.FC = () => {
  return (
    <>
      <SplineBackground />
      <Hero />
      <Services />
      <Contact />
    </>
  );
};