import React from 'react';
import PageHero from '../components/PageHero.jsx';
import Speakers from '../components/Speakers.jsx';

export default function SpeakersPage() {
  return (
    <div className="page-standalone page-speakers">
      {/* Creative Page Hero */}
      <PageHero
        badgeText="Keynote Authors & Editors"
        eyebrow="Speakers & Contributors · Devcon 8"
        theme="cyan"
        title={
          <>
            Protocol Leaders{' '}
            <span className="text-gradient-cyan">Shaping Ethereum</span>
          </>
        }
        subtitle="Explore the core researchers, EIP editors, client implementers, and application innovators taking the stage across all four days at Jio World Centre, Mumbai."
      />

      <Speakers />
    </div>
  );
}
