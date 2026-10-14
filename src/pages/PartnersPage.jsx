import React from 'react';
import PageHero from '../components/PageHero.jsx';
import Partners from '../components/Partners.jsx';

export default function PartnersPage() {
  return (
    <div className="page-standalone page-partners">
      {/* Creative Page Hero */}
      <PageHero
        badgeText="Ecosystem Collaborations"
        eyebrow="Partners &amp; Supporters · Devcon 8"
        theme="indigo"
        title={
          <>
            Backed by the{' '}
            <span className="text-gradient-indigo">Ecosystem</span>
          </>
        }
        subtitle="Uniting active protocol public goods, core client teams, research groups, and grassroots developer communities across India and the globe."
      />

      <Partners />
    </div>
  );
}
