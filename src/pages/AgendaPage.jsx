import React from 'react';
import PageHero from '../components/PageHero.jsx';
import DaysProgram from '../components/DaysProgram.jsx';

export default function AgendaPage() {
  return (
    <div className="page-standalone page-agenda">
      {/* Creative Page Hero */}
      <PageHero
        badgeText="Curated Programming"
        eyebrow="4-Day Summit Tracks · Devcon 8"
        theme="purple"
        title={
          <>
            Four Days of{' '}
            <span className="text-gradient-purple">Standards &amp; Innovation</span>
          </>
        }
        subtitle="Guiding attendees from proposal drafting and core protocol network upgrades to smart contract ERC standards and enterprise production deployments."
      />

      <DaysProgram showMatrix={true} />
    </div>
  );
}
