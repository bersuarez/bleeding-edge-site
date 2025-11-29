import React from 'react';
import { Hero } from './Hero';
import { Services } from './Services';
import { Contact } from './Contact';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Contact />
    </>
  );
};