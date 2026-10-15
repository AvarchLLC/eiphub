import React from 'react';

export default function Features() {
  return (
    <>
<section className="features-section">
  <div className="features-header">
    <div className="sec-eyebrow">Core Pillars</div>
    <div className="sec-title">Built for the Ethereum Ecosystem</div>
    <p>Three foundational principles shaping four days of standards, governance, and protocol collaboration at Devcon 8 India.</p>
  </div>
  <div className="features-grid">
    <div className="feat-card feat-amber">
      <div className="feat-top">
        <span className="feat-num">HYBRID</span>
        <span className="feat-tag">In-Person & Online</span>
      </div>
      <div className="feat-title-row">
        <div className="feat-icon-pod">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9"/>
            <ellipse cx="12" cy="12" rx="4.2" ry="9"/>
            <path d="M3.5 9h17"/>
            <path d="M3.5 15h17"/>
          </svg>
        </div>
        <h3>Global · In Person</h3>
      </div>
      <p>Located right on the main Devcon 8 India floor inside Jio World Centre, Mumbai. Walk in any time across all four days, or access livestreamed sessions and archives afterward.</p>
      <div className="feat-chips">
        <span className="feat-chip"><span className="feat-chip-dot"></span> Jio World Centre, Mumbai</span>
        <span className="feat-chip"><span className="feat-chip-dot"></span> 4 Full Days (Nov 3–6)</span>
        <span className="feat-chip"><span className="feat-chip-dot"></span> Session Recordings</span>
      </div>
    </div>

    <div className="feat-card feat-indigo">
      <div className="feat-top">
        <span className="feat-num">GOVERNANCE</span>
        <span className="feat-tag">Open Standards</span>
      </div>
      <div className="feat-title-row">
        <div className="feat-icon-pod">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L3 7v9l9 6 9-6V7l-9-5z"/>
            <path d="M12 22V12"/>
            <path d="M21 7l-9 5-9-5"/>
          </svg>
        </div>
        <h3>Credibly Neutral</h3>
      </div>
      <p>An open, community-led &amp; project-neutral space dedicated entirely to protocol public goods. Open to everyone: first-time EIP authors, protocol researchers, client developers, community projects, and students.</p>
      <div className="feat-chips">
        <span className="feat-chip"><span className="feat-chip-dot"></span> Community &amp; Project-Neutral</span>
        <span className="feat-chip"><span className="feat-chip-dot"></span> First-Timers to Core Devs</span>
        <span className="feat-chip"><span className="feat-chip-dot"></span> Permissionless Dialogue</span>
      </div>
    </div>

    <div className="feat-card feat-cyan">
      <div className="feat-top">
        <span className="feat-num">HANDS-ON</span>
        <span className="feat-tag">Live Clinics</span>
      </div>
      <div className="feat-title-row">
        <div className="feat-icon-pod">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            <path d="M11 8v6M8 11h6"/>
          </svg>
        </div>
        <h3>Curiosity Led</h3>
      </div>
      <p>Interactive office hours, direct access to EIP Editors, live EIPsInsight dashboards, hands-on ERC clinics, hackathon integration, and dedicated contributor onboarding every single day.</p>
      <div className="feat-chips">
        <span className="feat-chip"><span className="feat-chip-dot"></span> Meet the EIP Editors</span>
        <span className="feat-chip"><span className="feat-chip-dot"></span> Live ERC Design Clinics</span>
        <span className="feat-chip"><span className="feat-chip-dot"></span> EIPsInsight Dashboards</span>
      </div>
    </div>
  </div>
</section>

{/* ORIGINS & SUMMIT HISTORY (DEVCONNECT ARGENTINA 2025 RETROSPECTIVE - MOVED DOWN) */}
    </>
  );
}
