import React from 'react';
import PageHero from '../components/PageHero.jsx';
import ScheduleMatrix from '../components/ScheduleMatrix.jsx';
import DaysProgram from '../components/DaysProgram.jsx';

export default function AgendaPage() {
  return (
    <div className="page-standalone page-agenda">
      {/* Creative Page Hero */}
      <PageHero
        badgeText="Official Master Schedule"
        eyebrow="4-Day Summit Tracks · Devcon 8 · Jio World Centre"
        theme="purple"
        title={
          <>
            Complete 4-Day{' '}
            <span className="text-gradient-purple">Summit Schedule</span>
          </>
        }
        subtitle="Search, filter, and explore all 40+ sessions across all four summit days. From core protocol breakthroughs and client benchmarking to ERC application standards and enterprise adoption."
      />

      {/* Interactive Master Schedule Matrix with Search & Filter */}
      <ScheduleMatrix />

      {/* Detailed Track Architecture & Thematic Breakdown */}
      <DaysProgram showMatrix={true} />
    </div>
  );
}

