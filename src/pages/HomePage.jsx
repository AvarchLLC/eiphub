import React from 'react';
import Hero from '../components/Hero.jsx';
import HomeAbout from '../components/HomeAbout.jsx';
import DaysProgram from '../components/DaysProgram.jsx';
import SpeakersMandala from '../components/SpeakersMandala.jsx';
import HomePartners from '../components/HomePartners.jsx';
import FAQ from '../components/FAQ.jsx';
import ClosingCta from '../components/ClosingCta.jsx';

export default function HomePage() {
  return (
    <div className="page-home">
      <Hero />
      <HomeAbout />
      <SpeakersMandala />
      <DaysProgram showMatrix={false} />
      <HomePartners />
      <FAQ />
      <ClosingCta />
    </div>
  );
}
