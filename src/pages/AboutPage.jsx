import React, { useState } from 'react';
import PageHero from '../components/PageHero.jsx';
import About from '../components/About.jsx';
import SummitArchive from '../components/SummitArchive.jsx';
import Community from '../components/Community.jsx';

export default function AboutPage() {
  const [eventView, setEventView] = useState('all'); // 'all' | 'current' | 'past'

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectTab = (view, targetId) => {
    setEventView(view);
    if (targetId) {
      setTimeout(() => scrollToSection(targetId), 50);
    }
  };

  return (
    <div className="page-standalone page-about">
      {/* Creative Page Hero */}
      <PageHero
        badgeText="Devcon 8 Community Hub"
        eyebrow="Jio World Centre · Mumbai"
        theme="amber"
        title={
          <>
            From Research to Reality:{' '}
            <span className="text-gradient-amber">Open Ethereum Standards</span>
          </>
        }
        subtitle="The premier 4-day collaborative space at Devcon 8 India uniting protocol researchers, client implementers, EIP editors, and application authors to shape the future of decentralized infrastructure."
      />

      {/* EVENT NAVIGATION & CURRENT VS PAST EVENT CLARITY CONTROLLER */}
      <section className="about-events-section wrap" aria-label="Event Comparison & Navigation">
        <div className="about-events-header text-center">
          <div className="sec-eyebrow">
            <span className="sec-eyebrow-dot" style={{ background: '#f59e0b', boxShadow: '0 0 8px #f59e0b' }}></span>
            <span>Origins to Expansion · Understanding Our Events</span>
          </div>
          <h2 className="sec-title" style={{ marginTop: '14px', marginBottom: '14px' }}>
            Current Event vs. Past Event Archive
          </h2>
          <p className="sec-body" style={{ maxWidth: '780px', margin: '0 auto 26px' }}>
            Explore how our community journey evolved from the inaugural 2025 EIP Summit in Buenos Aires to our active flagship 4-day collaborative EIP Hub inside Devcon 8 India.
          </p>

          <div className="about-events-tabs" role="tablist" aria-label="Event Filter">
            <button
              type="button"
              className={`about-tab-btn ${eventView === 'all' ? 'active' : ''}`}
              onClick={() => setEventView('all')}
              role="tab"
              aria-selected={eventView === 'all'}
            >
              <span>⚡ All Events</span>
            </button>
            <button
              type="button"
              className={`about-tab-btn tab-current ${eventView === 'current' ? 'active' : ''}`}
              onClick={() => handleSelectTab('current', 'current-event')}
              role="tab"
              aria-selected={eventView === 'current'}
            >
              <span className="phase-dot dot-live"></span>
              <span>Current Event (2026)</span>
            </button>
            <button
              type="button"
              className={`about-tab-btn tab-past ${eventView === 'past' ? 'active' : ''}`}
              onClick={() => handleSelectTab('past', 'past-event')}
              role="tab"
              aria-selected={eventView === 'past'}
            >
              <span className="phase-dot dot-archive"></span>
              <span>Past Event: EIP Summit (2025)</span>
            </button>
          </div>
        </div>

        {/* DUAL COMPARISON CARDS */}
        <div className="about-comparison-grid">
          {/* Card 1: Past Event (EIP Summit 2025) */}
          <div
            className={`event-comp-card card-past ${eventView === 'current' ? 'opacity-muted' : ''}`}
            style={eventView === 'current' ? { opacity: 0.45, filter: 'grayscale(0.5)' } : {}}
          >
            <div className="event-comp-header">
              <span className="event-phase-badge badge-past">
                <span className="phase-dot dot-archive"></span>
                <span>Inaugural Past Event · 2025</span>
              </span>
              <span className="event-year-tag">Devconnect Argentina</span>
            </div>

            <h3 className="event-comp-title">Inaugural EIP Summit (Buenos Aires)</h3>

            <div className="event-comp-meta">
              <span className="meta-pill">📍 Buenos Aires, Argentina</span>
              <span className="meta-pill">📅 November 2025</span>
              <span className="meta-pill">🎙️ 10 Video Sessions</span>
            </div>

            <p className="event-comp-desc">
              The <strong>EIP Summit</strong> is our inaugural past event — founded by ECH Institute as the first standalone gathering dedicated to accelerating the Ethereum standards pipeline by connecting researchers, EIP editors, and authors in person.
            </p>

            <div className="event-comp-points">
              <div className="event-comp-point">
                <span className="event-comp-point-icon">🏛️</span>
                <span><strong>The Origin Story:</strong> Replaced months of slow GitHub PR discussion with high-bandwidth, face-to-face consensus.</span>
              </div>
              <div className="event-comp-point">
                <span className="event-comp-point-icon">📼</span>
                <span><strong>Recorded Archive:</strong> 10 technical deep-dives and keynotes recorded live, available in full below.</span>
              </div>
            </div>

            <div className="event-comp-actions">
              <button
                type="button"
                className="btn-event-jump btn-event-jump-past"
                onClick={() => handleSelectTab('past', 'past-event')}
              >
                <span>Watch Past Summit Archive</span>
                <span className="btn-arr">↓</span>
              </button>
            </div>
          </div>

          {/* Card 2: Current Event (EIP Hub Devcon 8 2026) */}
          <div
            className={`event-comp-card card-current ${eventView === 'past' ? 'opacity-muted' : ''}`}
            style={eventView === 'past' ? { opacity: 0.45, filter: 'grayscale(0.5)' } : {}}
          >
            <div className="event-comp-header">
              <span className="event-phase-badge badge-current">
                <span className="phase-dot dot-live"></span>
                <span>Current Event · 2026</span>
              </span>
              <span className="event-year-tag tag-devcon" style={{ color: '#6ee7b7', background: 'rgba(16,185,129,0.1)' }}>Devcon 8 India</span>
            </div>

            <h3 className="event-comp-title">EIP Hub @ Devcon 8 India (Mumbai)</h3>

            <div className="event-comp-meta">
              <span className="meta-pill">📍 Jio World Centre, Mumbai</span>
              <span className="meta-pill">📅 Nov 3–6, 2026</span>
              <span className="meta-pill">⚡ 4 Full Days · 6 Spaces</span>
            </div>

            <p className="event-comp-desc">
              The <strong>EIP Hub</strong> is our active, flagship upcoming event — expanding the proven collaborative model of the 2025 EIP Summit into an official 4-day interactive community space inside Devcon 8 India.
            </p>

            <div className="event-comp-points">
              <div className="event-comp-point">
                <span className="event-comp-point-icon">🚀</span>
                <span><strong>Scale &amp; Expansion:</strong> 6 dedicated spaces, live 1-on-1 EIP editor triage, and client interop labs.</span>
              </div>
              <div className="event-comp-point">
                <span className="event-comp-point-icon">🤝</span>
                <span><strong>Community Booth #29:</strong> Walk-in headquarters on the main Devcon floor for all ticket holders.</span>
              </div>
            </div>

            <div className="event-comp-actions">
              <button
                type="button"
                className="btn-event-jump btn-event-jump-current"
                onClick={() => handleSelectTab('current', 'current-event')}
              >
                <span>Explore Current Event Details</span>
                <span className="btn-arr">↓</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Notice Banner */}
        {eventView !== 'all' && (
          <div className={`event-filter-notice ${eventView === 'current' ? 'notice-current' : ''}`}>
            <span>
              {eventView === 'current'
                ? 'Currently viewing: Current Event (EIP Hub @ Devcon 8 Mumbai 2026)'
                : 'Currently viewing: Past Event Archive (Inaugural EIP Summit Argentina 2025)'}
            </span>
            <button
              type="button"
              className="btn-show-all-events"
              onClick={() => setEventView('all')}
            >
              Show Both Events
            </button>
          </div>
        )}
      </section>

      {/* 1. CURRENT EVENT: EIP Hub @ Devcon 8 India (Mumbai) */}
      {(eventView === 'all' || eventView === 'current') && (
        <section id="current-event" aria-label="Current Event: EIP Hub at Devcon 8 India">
          <About />
          {/* Current Event Official Announcements & Discussion */}
          <Community />
        </section>
      )}

      {/* 2. PAST EVENT: Inaugural EIP Summit Origins & Video Archive */}
      {(eventView === 'all' || eventView === 'past') && (
        <section id="past-event" aria-label="Past Event Archive: Inaugural EIP Summit 2025">
          <SummitArchive />
        </section>
      )}
    </div>
  );
}

