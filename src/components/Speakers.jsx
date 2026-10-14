import React from 'react';

export default function Speakers() {
  return (
    <>
<div className="speakers-bg" id="speakers">
  <div className="wrap" style={{ textAlign: 'center', paddingBottom: '52px' }}>
    <div className="sec-eyebrow">Speakers &amp; Contributors</div>
    <div className="sec-title">Meet Our Speakers</div>
    <div className="speakers-box">
      <div className="speakers-console-top">
        <div className="speakers-console-status">
          <span className="speakers-beacon" id="spk-console-beacon" style={{ background: '#818cf8', boxShadow: '0 0 12px #818cf8' }}></span>
          <span id="spk-console-status-text" style={{ color: '#c7d2fe' }}>All 4 Summit Days · 16 Unique Technical Leaders (18 Confirmed Sessions) · Devcon 8 India (Nov 3–6, 2026)</span>
        </div>
        <span className="speakers-console-badge" id="spk-console-badge">Devcon 8 India · Nov 3–6, 2026</span>
      </div>

      {/* 4-STAT HIGH-IMPACT METRICS STRIP */}
      <div className="spk-metrics-strip">
        <div className="spk-metric-card">
          <div className="spk-metric-icon">🎙️</div>
          <div>
            <div className="spk-metric-num">16 Leaders</div>
            <div className="spk-metric-label">Keynote Authors &amp; Editors</div>
          </div>
        </div>
        <div className="spk-metric-card">
          <div className="spk-metric-icon">⚡</div>
          <div>
            <div className="spk-metric-num">18 Sessions</div>
            <div className="spk-metric-label">Keynotes, Clinics &amp; Panels</div>
          </div>
        </div>
        <div className="spk-metric-card">
          <div className="spk-metric-icon">📅</div>
          <div>
            <div className="spk-metric-num">4 Summit Days</div>
            <div className="spk-metric-label">Nov 3–6 · Dedicated Tracks</div>
          </div>
        </div>
        <div className="spk-metric-card">
          <div className="spk-metric-icon">🇮🇳</div>
          <div>
            <div className="spk-metric-num">Devcon 8</div>
            <div className="spk-metric-label">Jio World Centre, Mumbai</div>
          </div>
        </div>
      </div>

      <div className="speakers-intro-wrap">
        <h3 className="speakers-featured-title">Technical Leaders &amp; Protocol Authors</h3>
        <p className="speakers-tba">
          The EIP Hub stage gathers the core minds driving Ethereum’s protocol specification and standardization engine. Confirmed speakers across all 4 days are showcased below. Filter by day to view specific daily tracks, or view all unique speakers with combined multi-day schedules. Click any speaker card to explore full talk details, agenda timings, and biographies.
        </p>
      </div>

      {/* 4-DAY FILTER SWITCHER & LIVE SEARCH BAR */}
      <div className="spk-filter-toolbar">
        <div className="spk-day-filter-wrap" role="tablist" aria-label="Summit Speaker Days Filter">
          <button type="button" className="spk-day-tab-btn active" data-spk-day="all" onClick={() => window.filterSpeakerDay && window.filterSpeakerDay('all')} role="tab" aria-selected="true">
            <span>All Days (Nov 3–6)</span>
            <span className="spk-count-pill">16 Speakers</span>
          </button>
          <button type="button" className="spk-day-tab-btn" data-spk-day="1" onClick={() => window.filterSpeakerDay && window.filterSpeakerDay(1)} role="tab" aria-selected="false">
            <span className="spk-tab-dot" style={{ color: '#fbbf24' }}></span>
            <span>Day 1 · Nov 3 (EIP Process &amp; General Overview)</span>
            <span className="spk-count-pill">4 Speakers</span>
          </button>
          <button type="button" className="spk-day-tab-btn" data-spk-day="2" onClick={() => window.filterSpeakerDay && window.filterSpeakerDay(2)} role="tab" aria-selected="false">
            <span className="spk-tab-dot" style={{ color: '#818cf8' }}></span>
            <span>Day 2 · Nov 4 (Protocol EIPs &amp; Network Upgrades)</span>
            <span className="spk-count-pill">5 Speakers</span>
          </button>
          <button type="button" className="spk-day-tab-btn" data-spk-day="3" onClick={() => window.filterSpeakerDay && window.filterSpeakerDay(3)} role="tab" aria-selected="false">
            <span className="spk-tab-dot" style={{ color: '#38bdf8' }}></span>
            <span>Day 3 · Nov 5 (Application EIPs &amp; Ecosystem Support)</span>
            <span className="spk-count-pill">3 Speakers</span>
          </button>
          <button type="button" className="spk-day-tab-btn" data-spk-day="4" onClick={() => window.filterSpeakerDay && window.filterSpeakerDay(4)} role="tab" aria-selected="false">
            <span className="spk-tab-dot" style={{ color: '#6ee7b7' }}></span>
            <span>Day 4 · Nov 6 (Enterprise Readiness &amp; EIPs for Consideration)</span>
            <span className="spk-count-pill">5 Speakers</span>
          </button>
        </div>

        {/* Live Instant Search Bar */}
        <div className="spk-search-bar-wrap">
          <div className="spk-search-box">
            <span className="spk-search-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </span>
            <input type="text" id="spk-search-input" className="spk-search-input" placeholder="Search speakers, talks, topics, or organizations (e.g. Pooja, Besu, ENS, Privacy, EVVM)..." oninput="handleSpeakerSearch(this.value)" autocomplete="off" />
            <button type="button" id="spk-search-clear" className="spk-search-clear" onClick={() => window.clearSpeakerSearch && window.clearSpeakerSearch()} title="Clear search">✕</button>
          </div>
        </div>
      </div>

      {/* SPEAKERS GRID (ALL 4 DAYS ARCHITECTURE) */}
      <div className="speakers-grid-3" id="speakers-grid-container">
        {/* =================================================================== */}
        {/* DAY 1 SPEAKERS (COLOR: YELLOW / GOLD - EIP PROCESS & GENERAL OVERVIEW) */}
        {/* =================================================================== */}

        {/* Day 1 Speaker 1: Pooja Ranjan */}
        <div className="speaker-card spk-day-1" data-spk-day="1" data-popular-rank="1" id="speaker-card-pooja" onClick={() => window.openSpeakerModal && window.openSpeakerModal('pooja')} role="button" tabIndex={0} title="Click to view Pooja Ranjan's talk and bio">
          <div className="speaker-card-top-bar"></div>
          <div className="speaker-photo-wrap">
            <span className="spk-photo-track-badge" style={{ background: 'rgba(245,158,11,0.25)', color: '#fbbf24', border: '1px solid rgba(245,158,11,0.45)' }}>Day 1 · EIP Process</span>
            <span className="spk-photo-verified">✓ Confirmed</span>
            <img src="Assets/speakers/pooja-ranjan.jpg" alt="Pooja Ranjan" className="speaker-photo-img" loading="lazy" />
          </div>
          <div className="speaker-info">
            <div className="speaker-name-row">
              <h4 className="speaker-name">Pooja Ranjan</h4>
              <a href="https://x.com/poojaranjan19" target="_blank" rel="noopener noreferrer" className="spk-card-x-pill" title="Pooja Ranjan on X (@poojaranjan19)" onClick={(e) => e.stopPropagation()}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                <span>@poojaranjan19</span>
              </a>
            </div>
            <div className="speaker-meta-row">
              <div className="speaker-org-tag">ECH Institute</div>
            </div>
            <p className="speaker-designation">Founder, ECH Institute &amp; EIP Editor / Devcon EIP Hub Lead</p>
          </div>
          <div className="speaker-talk-snip">
            <div className="talk-format-badge" style={{ background: 'rgba(245,158,11,0.18)', color: '#fbbf24' }}>🎙️ Keynote &amp; Governance</div>
            <div className="talk-title-text">EIP Process &amp; Overview: The Journey of Ethereum Standards</div>
            <div className="talk-time-text">⏱️ Session Time: TBA · Day 1 Track</div>
          </div>
          <div className="speaker-card-actions" onClick={(e) => e.stopPropagation()}>
            <div className="speaker-social-icons">
              <a href="https://www.linkedin.com/in/poojaranjan/" target="_blank" rel="noopener noreferrer" className="spk-social-link" title="Pooja Ranjan on LinkedIn" aria-label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://x.com/poojaranjan19" target="_blank" rel="noopener noreferrer" className="spk-social-link" title="Pooja Ranjan on X" aria-label="X">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
            <button type="button" className="btn-speaker-card-view" onClick={() => window.openSpeakerModal && window.openSpeakerModal('pooja')}>
              <span>View Talk &amp; Bio</span>
              <span>➔</span>
            </button>
          </div>
        </div>

        {/* Day 1 Speaker 2: Stefan */}
        <div className="speaker-card spk-day-1" data-spk-day="1" data-popular-rank="6" id="speaker-card-stefan" onClick={() => window.openSpeakerModal && window.openSpeakerModal('stefan')} role="button" tabIndex={0} title="Click to view Stefan's talk and bio">
          <div className="speaker-card-top-bar"></div>
          <div className="speaker-photo-wrap">
            <span className="spk-photo-track-badge" style={{ background: 'rgba(245,158,11,0.25)', color: '#fbbf24', border: '1px solid rgba(245,158,11,0.45)' }}>Day 1 · EIP Process</span>
            <span className="spk-photo-verified">✓ Confirmed</span>
            <img src="Assets/speakers/stefan.jpg" alt="Stefan (@stefan_star)" className="speaker-photo-img" loading="lazy" />
          </div>
          <div className="speaker-info">
            <div className="speaker-name-row">
              <h4 className="speaker-name">Stefan</h4>
              <a href="https://x.com/stefan_star" target="_blank" rel="noopener noreferrer" className="spk-card-x-pill" title="Stefan on X (@stefan_star)" onClick={(e) => e.stopPropagation()}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                <span>@stefan_star</span>
              </a>
            </div>
            <div className="speaker-meta-row">
              <div className="speaker-org-tag">ethPandaOps · EF</div>
            </div>
            <p className="speaker-designation">DevOps &amp; Devnet Operations Engineer, ethPandaOps</p>
          </div>
          <div className="speaker-talk-snip">
            <div className="talk-format-badge" style={{ background: 'rgba(245,158,11,0.18)', color: '#fbbf24' }}>🎙️ 30m Talk + 15m Q&amp;A</div>
            <div className="talk-title-text">Testing Ethereum Upgrades: Devnets, Shadow Forks &amp; EIP Validation</div>
            <div className="talk-time-text">⏱️ Session Time: TBA · Day 1 Track</div>
          </div>
          <div className="speaker-card-actions" onClick={(e) => e.stopPropagation()}>
            <div className="speaker-social-icons">
              <a href="https://x.com/stefan_star" target="_blank" rel="noopener noreferrer" className="spk-social-link" title="Stefan on X" aria-label="X">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
            <button type="button" className="btn-speaker-card-view" onClick={() => window.openSpeakerModal && window.openSpeakerModal('stefan')}>
              <span>View Talk &amp; Bio</span>
              <span>➔</span>
            </button>
          </div>
        </div>

        {/* Day 1 Speaker 3: Rafael Matias */}
        <div className="speaker-card spk-day-1" data-spk-day="1" data-popular-rank="7" id="speaker-card-rafael" onClick={() => window.openSpeakerModal && window.openSpeakerModal('rafael')} role="button" tabIndex={0} title="Click to view Rafael Matias's talk and bio">
          <div className="speaker-card-top-bar"></div>
          <div className="speaker-photo-wrap">
            <span className="spk-photo-track-badge" style={{ background: 'rgba(245,158,11,0.25)', color: '#fbbf24', border: '1px solid rgba(245,158,11,0.45)' }}>Day 1 · EIP Process</span>
            <span className="spk-photo-verified">✓ Confirmed</span>
            <img src="Assets/speakers/rafael.jpg" alt="Rafael Matias (@skylenet)" className="speaker-photo-img" loading="lazy" />
          </div>
          <div className="speaker-info">
            <div className="speaker-name-row">
              <h4 className="speaker-name">Rafael Matias</h4>
              <a href="https://x.com/skylenet" target="_blank" rel="noopener noreferrer" className="spk-card-x-pill" title="Rafael Matias on X (@skylenet)" onClick={(e) => e.stopPropagation()}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                <span>@skylenet</span>
              </a>
            </div>
            <div className="speaker-meta-row">
              <div className="speaker-org-tag">ethPandaOps · EF</div>
            </div>
            <p className="speaker-designation">DevOps Engineer, ethPandaOps · Core Protocol Contributor</p>
          </div>
          <div className="speaker-talk-snip">
            <div className="talk-format-badge" style={{ background: 'rgba(245,158,11,0.18)', color: '#fbbf24' }}>🎙️ 30m Talk + 15m Q&amp;A</div>
            <div className="talk-title-text">Devnet Operations: Kurtosis Packaging &amp; Multi-Client EIP Testing</div>
            <div className="talk-time-text">⏱️ Session Time: TBA · Day 1 Track</div>
          </div>
          <div className="speaker-card-actions" onClick={(e) => e.stopPropagation()}>
            <div className="speaker-social-icons">
              <a href="https://x.com/skylenet" target="_blank" rel="noopener noreferrer" className="spk-social-link" title="Rafael Matias on X" aria-label="X">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://github.com/skylenet" target="_blank" rel="noopener noreferrer" className="spk-social-link" title="Rafael Matias on GitHub" aria-label="GitHub">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
            <button type="button" className="btn-speaker-card-view" onClick={() => window.openSpeakerModal && window.openSpeakerModal('rafael')}>
              <span>View Talk &amp; Bio</span>
              <span>➔</span>
            </button>
          </div>
        </div>

        {/* Day 1 & 4 Combined Speaker: German Abal (Visible on All Days) */}
        <div className="speaker-card spk-combined spk-multi-day" data-spk-day="all" data-popular-rank="5" id="speaker-card-german-combined" onClick={() => window.openSpeakerModal && window.openSpeakerModal('german-combined')} role="button" tabIndex={0} title="Click to view German Abal's dual sessions and bio">
          <div className="speaker-card-top-bar" style={{ background: 'linear-gradient(90deg, #fbbf24 0%, #10b981 100%)' }}></div>
          <div className="speaker-photo-wrap">
            <span className="spk-photo-track-badge" style={{ background: 'linear-gradient(90deg, rgba(245,158,11,0.3) 0%, rgba(16,185,129,0.3) 100%)', color: '#fde68a', border: '1px solid rgba(245,158,11,0.5)' }}>Day 1 &amp; Day 4 · Dual Track</span>
            <span className="spk-photo-verified" style={{ color: '#fde68a', background: 'rgba(245,158,11,0.22)', borderColor: 'rgba(245,158,11,0.45)' }}>⚡ 2 Tracks</span>
            <img src="Assets/speakers/german-abal.jpg" alt="German Abal" className="speaker-photo-img" loading="lazy" />
          </div>
          <div className="speaker-info">
            <div className="speaker-name-row">
              <h4 className="speaker-name">German Abal</h4>
              <a href="https://x.com/ariutokintumi" target="_blank" rel="noopener noreferrer" className="spk-card-x-pill" title="German Abal on X (@ariutokintumi)" onClick={(e) => e.stopPropagation()}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                <span>@ariutokintumi</span>
              </a>
            </div>
            <div className="speaker-meta-row">
              <div className="speaker-org-tag" style={{ background: 'rgba(245,158,11,0.12)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.3)' }}>EVVM (@RollAMate) · ETH Cinco De Mayo</div>
            </div>
            <p className="speaker-designation">Co-Founder &amp; CTO, EVVM · Standards Tooling Contributor</p>
          </div>
          <div className="speaker-talk-snip">
            <div className="talk-format-badge" style={{ background: 'linear-gradient(90deg, rgba(245,158,11,0.2) 0%, rgba(16,185,129,0.2) 100%)', color: '#fde68a', border: '1px solid rgba(245,158,11,0.35)' }}>⚡ 2 Confirmed Sessions (Day 1 &amp; Day 4)</div>
            <div className="talk-title-text" style={{ fontSize: '12.5px', lineHeight: '1.45' }}>
              <div style={{ marginBottom: '4px' }}><span style={{ color: '#fbbf24', fontWeight: '700' }}>Day 1:</span> EIP Process &amp; Standards Tooling Workflows</div>
              <div><span style={{ color: '#6ee7b7', fontWeight: '700' }}>Day 4:</span> EVVM: Virtual Machine Architecture &amp; State Scaling</div>
            </div>
          </div>
          <div className="speaker-card-actions" onClick={(e) => e.stopPropagation()}>
            <div className="speaker-social-icons">
              <a href="https://www.linkedin.com/in/germanabal/" target="_blank" rel="noopener noreferrer" className="spk-social-link" title="German Abal on LinkedIn" aria-label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://x.com/ariutokintumi" target="_blank" rel="noopener noreferrer" className="spk-social-link" title="German Abal (@ariutokintumi) on X" aria-label="X">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
            <button type="button" className="btn-speaker-card-view" onClick={() => window.openSpeakerModal && window.openSpeakerModal('german-combined')}>
              <span>View Both Talks</span>
              <span>➔</span>
            </button>
          </div>
        </div>

        {/* Day 1 Speaker 3: German Abal (EIP Labs - Visible on Day 1 Filter Only) */}
        <div className="speaker-card spk-day-1 spk-single-day spk-hidden" data-spk-day="1" data-popular-rank="5" id="speaker-card-german-eiplabs" onClick={() => window.openSpeakerModal && window.openSpeakerModal('german-eiplabs')} role="button" tabIndex={0} title="Click to view German Abal's talk and bio">
          <div className="speaker-card-top-bar"></div>
          <div className="speaker-photo-wrap">
            <span className="spk-photo-track-badge" style={{ background: 'rgba(245,158,11,0.25)', color: '#fbbf24', border: '1px solid rgba(245,158,11,0.45)' }}>Day 1 · EIP Process</span>
            <span className="spk-photo-verified">✓ Confirmed</span>
            <img src="Assets/speakers/german-abal.jpg" alt="German Abal (EIP Labs)" className="speaker-photo-img" loading="lazy" />
          </div>
          <div className="speaker-info">
            <div className="speaker-name-row">
              <h4 className="speaker-name">German Abal</h4>
              <a href="https://x.com/ariutokintumi" target="_blank" rel="noopener noreferrer" className="spk-card-x-pill" title="German Abal on X (@ariutokintumi)" onClick={(e) => e.stopPropagation()}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                <span>@ariutokintumi</span>
              </a>
            </div>
            <div className="speaker-meta-row">
              <div className="speaker-org-tag">EVVM · EIP Labs</div>
            </div>
            <p className="speaker-designation">Co-Founder &amp; CTO, EVVM · Standards Contributor</p>
          </div>
          <div className="speaker-talk-snip">
            <div className="talk-format-badge" style={{ background: 'rgba(245,158,11,0.18)', color: '#fbbf24' }}>⚡ Tooling &amp; Standards Talk</div>
            <div className="talk-title-text">EIP Process &amp; Standards Tooling: Accelerating Proposal Workflows</div>
            <div className="talk-time-text">⏱️ Session Time: TBA · Day 1 Track</div>
          </div>
          <div className="speaker-card-actions" onClick={(e) => e.stopPropagation()}>
            <div className="speaker-social-icons">
              <a href="https://www.linkedin.com/in/germanabal/" target="_blank" rel="noopener noreferrer" className="spk-social-link" title="German Abal on LinkedIn" aria-label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://x.com/ariutokintumi" target="_blank" rel="noopener noreferrer" className="spk-social-link" title="German Abal (@ariutokintumi) on X" aria-label="X">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
            <button type="button" className="btn-speaker-card-view" onClick={() => window.openSpeakerModal && window.openSpeakerModal('german-eiplabs')}>
              <span>View Talk &amp; Bio</span>
              <span>➔</span>
            </button>
          </div>
        </div>

        {/* Day 1 Speaker: Jochem Brouwer */}
        <div className="speaker-card spk-day-1" data-spk-day="1" data-popular-rank="2" id="speaker-card-jochem" onClick={() => window.openSpeakerModal && window.openSpeakerModal('jochem')} role="button" tabIndex={0} title="Click to view Jochem Brouwer's talk and bio">
          <div className="speaker-card-top-bar"></div>
          <div className="speaker-photo-wrap">
            <span className="spk-photo-track-badge" style={{ background: 'rgba(245,158,11,0.25)', color: '#fbbf24', border: '1px solid rgba(245,158,11,0.45)' }}>Day 1 · EIP Process</span>
            <span className="spk-photo-verified">✓ Confirmed</span>
            <img src="Assets/photos/speaker-jochem-brouwer.jpg" alt="Jochem Brouwer" className="speaker-photo-img" loading="lazy" />
          </div>
          <div className="speaker-info">
            <div className="speaker-name-row">
              <h4 className="speaker-name">Jochem Brouwer</h4>
              <a href="https://x.com/JochemBrouwer96" target="_blank" rel="noopener noreferrer" className="spk-card-x-pill" title="Jochem Brouwer on X (@JochemBrouwer96)" onClick={(e) => e.stopPropagation()}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                <span>@JochemBrouwer96</span>
              </a>
            </div>
            <div className="speaker-meta-row">
              <div className="speaker-org-tag">Ethereum Foundation · EIP Editor</div>
            </div>
            <p className="speaker-designation">EIP Editor &amp; Core Standards Contributor</p>
          </div>
          <div className="speaker-talk-snip">
            <div className="talk-format-badge" style={{ background: 'rgba(245,158,11,0.18)', color: '#fbbf24' }}>🎙️ 30m Talk + 15m Q&amp;A</div>
            <div className="talk-title-text">Navigating the EIP Process: An Editor's Perspective on Standards</div>
            <div className="talk-time-text">⏱️ Session Time: TBA · Day 1 Track</div>
          </div>
          <div className="speaker-card-actions" onClick={(e) => e.stopPropagation()}>
            <div className="speaker-social-icons">
              <a href="https://github.com/jochem-brouwer" target="_blank" rel="noopener noreferrer" className="spk-social-link" title="Jochem Brouwer on GitHub" aria-label="GitHub">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://x.com/JochemBrouwer96" target="_blank" rel="noopener noreferrer" className="spk-social-link" title="Jochem Brouwer on X" aria-label="X">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
            <button type="button" className="btn-speaker-card-view" onClick={() => window.openSpeakerModal && window.openSpeakerModal('jochem')}>
              <span>View Talk &amp; Bio</span>
              <span>➔</span>
            </button>
          </div>
        </div>

        {/* =================================================================== */}
        {/* DAY 2 SPEAKERS (COLOR: PURPLE / INDIGO - PROTOCOL EIPS & NETWORK UPGRADES) */}
        {/* =================================================================== */}

        {/* Day 2 Speaker 1: Justin Florentine */}
        <div className="speaker-card spk-day-2" data-spk-day="2" data-popular-rank="3" id="speaker-card-justin" onClick={() => window.openSpeakerModal && window.openSpeakerModal('justin')} role="button" tabIndex={0} title="Click to view Justin Florentine's talk and bio">
          <div className="speaker-card-top-bar"></div>
          <div className="speaker-photo-wrap">
            <span className="spk-photo-track-badge" style={{ background: 'rgba(129,140,248,0.25)', color: '#c7d2fe', border: '1px solid rgba(129,140,248,0.45)' }}>Day 2 · Protocol EIPs</span>
            <span className="spk-photo-verified">✓ Confirmed</span>
            <img src="Assets/speakers/justin-florentine.jpg" alt="Justin Florentine" className="speaker-photo-img" loading="lazy" />
          </div>
          <div className="speaker-info">
            <div className="speaker-name-row">
              <h4 className="speaker-name">Justin Florentine</h4>
            </div>
            <div className="speaker-meta-row">
              <div className="speaker-org-tag">Hyperledger Besu (Consensys)</div>
            </div>
            <p className="speaker-designation">Engineering Manager, Hyperledger Besu</p>
          </div>
          <div className="speaker-talk-snip">
            <div className="talk-format-badge" style={{ background: 'rgba(129,140,248,0.18)', color: '#c7d2fe' }}>🎙️ 30m Talk + 15m Q&amp;A</div>
            <div className="talk-title-text">EIP-8184: LUCID Encrypted Mempool</div>
            <div className="talk-time-text">⏱️ Session Time: TBA · Day 2 Track</div>
          </div>
          <div className="speaker-card-actions" onClick={(e) => e.stopPropagation()}>
            <div className="speaker-social-icons">
              <a href="https://www.linkedin.com/in/justinflorentine/" target="_blank" rel="noopener noreferrer" className="spk-social-link" title="Justin Florentine on LinkedIn" aria-label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
            <button type="button" className="btn-speaker-card-view" onClick={() => window.openSpeakerModal && window.openSpeakerModal('justin')}>
              <span>View Talk &amp; Bio</span>
              <span>➔</span>
            </button>
          </div>
        </div>

        {/* Day 2 Speaker 2: Abhimanyu Nag */}
        <div className="speaker-card spk-day-2" data-spk-day="2" data-popular-rank="9" id="speaker-card-abhimanyu" onClick={() => window.openSpeakerModal && window.openSpeakerModal('abhimanyu')} role="button" tabIndex={0} title="Click to view Abhimanyu Nag's talk and bio">
          <div className="speaker-card-top-bar"></div>
          <div className="speaker-photo-wrap">
            <span className="spk-photo-track-badge" style={{ background: 'rgba(129,140,248,0.25)', color: '#c7d2fe', border: '1px solid rgba(129,140,248,0.45)' }}>Day 2 · Protocol EIPs</span>
            <span className="spk-photo-verified">✓ Confirmed</span>
            <img src="Assets/speakers/abhimanyu-nag.png" alt="Abhimanyu Nag" className="speaker-photo-img" loading="lazy" />
          </div>
          <div className="speaker-info">
            <div className="speaker-name-row">
              <h4 className="speaker-name">Abhimanyu Nag</h4>
              <a href="https://x.com/AbhiMan1601" target="_blank" rel="noopener noreferrer" className="spk-card-x-pill" title="Abhimanyu Nag on X (@AbhiMan1601)" onClick={(e) => e.stopPropagation()}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                <span>@AbhiMan1601</span>
              </a>
            </div>
            <div className="speaker-meta-row">
              <div className="speaker-org-tag">University of Alberta</div>
            </div>
            <p className="speaker-designation">MITACS Fellow, University of Alberta / Engineering Manager, Canvas</p>
          </div>
          <div className="speaker-talk-snip">
            <div className="talk-format-badge" style={{ background: 'rgba(129,140,248,0.18)', color: '#c7d2fe' }}>⚡ 30m Talk + 15m Q&amp;A</div>
            <div className="talk-title-text">Limits to Single Slot Finality</div>
            <div className="talk-time-text">⏱️ Session Time: TBA · Day 2 Track</div>
          </div>
          <div className="speaker-card-actions" onClick={(e) => e.stopPropagation()}>
            <div className="speaker-social-icons">
              <a href="https://www.linkedin.com/in/abhimanyu-nag-682747201" target="_blank" rel="noopener noreferrer" className="spk-social-link" title="Abhimanyu Nag on LinkedIn" aria-label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://x.com/AbhiMan1601" target="_blank" rel="noopener noreferrer" className="spk-social-link" title="Abhimanyu Nag on X" aria-label="X">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
            <button type="button" className="btn-speaker-card-view" onClick={() => window.openSpeakerModal && window.openSpeakerModal('abhimanyu')}>
              <span>View Talk &amp; Bio</span>
              <span>➔</span>
            </button>
          </div>
        </div>

        {/* Day 2 Speaker 3: Rachit Anand Srivastava */}
        <div className="speaker-card spk-day-2" data-spk-day="2" data-popular-rank="11" id="speaker-card-rachit" onClick={() => window.openSpeakerModal && window.openSpeakerModal('rachit')} role="button" tabIndex={0} title="Click to view Rachit Anand Srivastava's talk and bio">
          <div className="speaker-card-top-bar"></div>
          <div className="speaker-photo-wrap">
            <span className="spk-photo-track-badge" style={{ background: 'rgba(129,140,248,0.25)', color: '#c7d2fe', border: '1px solid rgba(129,140,248,0.45)' }}>Day 2 · Protocol EIPs</span>
            <span className="spk-photo-verified">✓ Confirmed</span>
            <img src="Assets/speakers/rachit-anand-srivastava.png" alt="Rachit Anand Srivastava" className="speaker-photo-img" loading="lazy" />
          </div>
          <div className="speaker-info">
            <div className="speaker-name-row">
              <h4 className="speaker-name">Rachit Anand Srivastava</h4>
              <a href="https://x.com/privacy_prophet" target="_blank" rel="noopener noreferrer" className="spk-card-x-pill" title="Rachit Anand Srivastava on X (@privacy_prophet)" onClick={(e) => e.stopPropagation()}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                <span>@privacy_prophet</span>
              </a>
            </div>
            <div className="speaker-meta-row">
              <div className="speaker-org-tag">Avail Project</div>
            </div>
            <p className="speaker-designation">Senior Research and Development Engineer</p>
          </div>
          <div className="speaker-talk-snip">
            <div className="talk-format-badge" style={{ background: 'rgba(129,140,248,0.18)', color: '#c7d2fe' }}>⚡ Tech Deep-Dive</div>
            <div className="talk-title-text">Ethereum in the Age of Proofs</div>
            <div className="talk-time-text">⏱️ Session Time: TBA · Day 2 Track</div>
          </div>
          <div className="speaker-card-actions" onClick={(e) => e.stopPropagation()}>
            <div className="speaker-social-icons">
              <a href="https://www.linkedin.com/in/rachit-anand-srivastava/" target="_blank" rel="noopener noreferrer" className="spk-social-link" title="Rachit Anand Srivastava on LinkedIn" aria-label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://x.com/privacy_prophet" target="_blank" rel="noopener noreferrer" className="spk-social-link" title="Rachit Anand Srivastava on X" aria-label="X">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
            <button type="button" className="btn-speaker-card-view" onClick={() => window.openSpeakerModal && window.openSpeakerModal('rachit')}>
              <span>View Talk &amp; Bio</span>
              <span>➔</span>
            </button>
          </div>
        </div>

        {/* Day 2 Speaker 4: Maria Silva */}
        <div className="speaker-card spk-day-2" data-spk-day="2" data-popular-rank="4" id="speaker-card-maria" onClick={() => window.openSpeakerModal && window.openSpeakerModal('maria')} role="button" tabIndex={0} title="Click to view Maria Silva's talk and bio">
          <div className="speaker-card-top-bar"></div>
          <div className="speaker-photo-wrap">
            <span className="spk-photo-track-badge" style={{ background: 'rgba(129,140,248,0.25)', color: '#c7d2fe', border: '1px solid rgba(129,140,248,0.45)' }}>Day 2 · Protocol EIPs</span>
            <span className="spk-photo-verified">✓ Confirmed</span>
            <img src="Assets/speakers/maria-silva.jpg" alt="Maria Silva" className="speaker-photo-img" loading="lazy" />
          </div>
          <div className="speaker-info">
            <div className="speaker-name-row">
              <h4 className="speaker-name">Maria Inês Silva</h4>
              <a href="https://x.com/misilva73" target="_blank" rel="noopener noreferrer" className="spk-card-x-pill" title="Maria Inês Silva on X (@misilva73)" onClick={(e) => e.stopPropagation()}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                <span>@misilva73</span>
              </a>
            </div>
            <div className="speaker-meta-row">
              <div className="speaker-org-tag">Ethereum Foundation</div>
            </div>
            <p className="speaker-designation">Research Data Scientist · Ethereum Foundation</p>
          </div>
          <div className="speaker-talk-snip">
            <div className="talk-format-badge" style={{ background: 'rgba(129,140,248,0.18)', color: '#c7d2fe' }}>⚡ 30m Talk + 15m Q&amp;A</div>
            <div className="talk-title-text">Glamsterdam Repricing Efforts: Gas Economics &amp; Protocol Calibration</div>
            <div className="talk-time-text">⏱️ Session Time: TBA · Day 2 Track</div>
          </div>
          <div className="speaker-card-actions" onClick={(e) => e.stopPropagation()}>
            <div className="speaker-social-icons">
              <a href="https://x.com/misilva73" target="_blank" rel="noopener noreferrer" className="spk-social-link" title="Maria Inês Silva (@misilva73) on X" aria-label="X">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
            <button type="button" className="btn-speaker-card-view" onClick={() => window.openSpeakerModal && window.openSpeakerModal('maria')}>
              <span>View Talk &amp; Bio</span>
              <span>➔</span>
            </button>
          </div>
        </div>



        {/* =================================================================== */}
        {/* DAY 3 SPEAKERS (COLOR: CYAN / BLUE - APPLICATION EIPS & ECOSYSTEM SUPPORT) */}
        {/* =================================================================== */}



        {/* Day 3 Speaker 2: Dhruvang Choudhari */}
        <div className="speaker-card spk-day-3" data-spk-day="3" data-popular-rank="12" id="speaker-card-dhruvang" onClick={() => window.openSpeakerModal && window.openSpeakerModal('dhruvang')} role="button" tabIndex={0} title="Click to view Dhruvang Choudhari's talk and bio">
          <div className="speaker-card-top-bar"></div>
          <div className="speaker-photo-wrap">
            <span className="spk-photo-track-badge" style={{ background: 'rgba(6,182,212,0.25)', color: '#7dd3fc', border: '1px solid rgba(6,182,212,0.45)' }}>Day 3 · Application EIPs</span>
            <span className="spk-photo-verified">✓ Confirmed</span>
            <img src="Assets/speakers/dhruvang-choudhari.jpg" alt="Dhruvang Choudhari" className="speaker-photo-img" loading="lazy" />
          </div>
          <div className="speaker-info">
            <div className="speaker-name-row">
              <h4 className="speaker-name">Dhruvang Choudhari</h4>
              <a href="https://x.com/0xDhruvang" target="_blank" rel="noopener noreferrer" className="spk-card-x-pill" title="Dhruvang Choudhari on X (@0xDhruvang)" onClick={(e) => e.stopPropagation()}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                <span>@0xDhruvang</span>
              </a>
            </div>
            <div className="speaker-meta-row">
              <div className="speaker-org-tag">AMINA Bank</div>
            </div>
            <p className="speaker-designation">Crypto Research Analyst, AMINA Bank / Web3 Developer</p>
          </div>
          <div className="speaker-talk-snip">
            <div className="talk-format-badge" style={{ background: 'rgba(6,182,212,0.18)', color: '#7dd3fc' }}>🎙️ 30m Talk + 15m Q&amp;A</div>
            <div className="talk-title-text">The Token Is Standardised. The Institution Isn't: Where Should Ethereum Standards Stop? [ERC-7943, ERC-3643]</div>
            <div className="talk-time-text">⏱️ Session Time: TBA · Day 3 Track</div>
          </div>
          <div className="speaker-card-actions" onClick={(e) => e.stopPropagation()}>
            <div className="speaker-social-icons">
              <a href="https://x.com/0xDhruvang" target="_blank" rel="noopener noreferrer" className="spk-social-link" title="Dhruvang Choudhari on X" aria-label="X">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://github.com/0xDhruvang" target="_blank" rel="noopener noreferrer" className="spk-social-link" title="Dhruvang Choudhari on GitHub" aria-label="GitHub">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
            <button type="button" className="btn-speaker-card-view" onClick={() => window.openSpeakerModal && window.openSpeakerModal('dhruvang')}>
              <span>View Talk &amp; Bio</span>
              <span>➔</span>
            </button>
          </div>
        </div>

        {/* =================================================================== */}
        {/* DAY 4 SPEAKERS (COLOR: GREEN / EMERALD - ENTERPRISE READINESS & EIPS) */}
        {/* =================================================================== */}

        {/* Day 4 Speaker 1: German Abal (EVVM - Visible on Day 4 Filter Only) */}
        <div className="speaker-card spk-day-4 spk-single-day spk-hidden" data-spk-day="4" data-popular-rank="5" id="speaker-card-german-evvm" onClick={() => window.openSpeakerModal && window.openSpeakerModal('german-evvm')} role="button" tabIndex={0} title="Click to view German Abal (EVVM)'s talk and bio">
          <div className="speaker-card-top-bar"></div>
          <div className="speaker-photo-wrap">
            <span className="spk-photo-track-badge" style={{ background: 'rgba(16,185,129,0.25)', color: '#6ee7b7', border: '1px solid rgba(16,185,129,0.45)' }}>Day 4 · Enterprise EIPs</span>
            <span className="spk-photo-verified">✓ Confirmed</span>
            <img src="Assets/speakers/german-abal.jpg" alt="German Abal (EVVM)" className="speaker-photo-img" loading="lazy" />
          </div>
          <div className="speaker-info">
            <div className="speaker-name-row">
              <h4 className="speaker-name">German Abal</h4>
              <a href="https://x.com/ariutokintumi" target="_blank" rel="noopener noreferrer" className="spk-card-x-pill" title="German Abal on X (@ariutokintumi)" onClick={(e) => e.stopPropagation()}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                <span>@ariutokintumi</span>
              </a>
            </div>
            <div className="speaker-meta-row">
              <div className="speaker-org-tag">EVVM (@RollAMate)</div>
            </div>
            <p className="speaker-designation">Co-Founder &amp; CTO, EVVM · ETH Cinco De Mayo</p>
          </div>
          <div className="speaker-talk-snip">
            <div className="talk-format-badge" style={{ background: 'rgba(16,185,129,0.18)', color: '#6ee7b7' }}>👥 Scalability Architecture</div>
            <div className="talk-title-text">EVVM: Ethereum Virtual Virtual Machine Architecture &amp; State Scaling</div>
            <div className="talk-time-text">⏱️ 11:00 AM · Day 4 (Confirmed)</div>
          </div>
          <div className="speaker-card-actions" onClick={(e) => e.stopPropagation()}>
            <div className="speaker-social-icons">
              <a href="https://www.linkedin.com/in/germanabal/" target="_blank" rel="noopener noreferrer" className="spk-social-link" title="German Abal on LinkedIn" aria-label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://x.com/ariutokintumi" target="_blank" rel="noopener noreferrer" className="spk-social-link" title="German Abal (@ariutokintumi) on X" aria-label="X">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
            <button type="button" className="btn-speaker-card-view" onClick={() => window.openSpeakerModal && window.openSpeakerModal('german-evvm')}>
              <span>View Talk &amp; Bio</span>
              <span>➔</span>
            </button>
          </div>
        </div>

        {/* Day 4 Speaker 2: Charchit Kumawat */}
        <div className="speaker-card spk-day-4" data-spk-day="4" data-popular-rank="13" id="speaker-card-charchit" onClick={() => window.openSpeakerModal && window.openSpeakerModal('charchit')} role="button" tabIndex={0} title="Click to view Charchit Kumawat's talk and bio">
          <div className="speaker-card-top-bar"></div>
          <div className="speaker-photo-wrap">
            <span className="spk-photo-track-badge" style={{ background: 'rgba(16,185,129,0.25)', color: '#6ee7b7', border: '1px solid rgba(16,185,129,0.45)' }}>Day 4 · Enterprise EIPs</span>
            <span className="spk-photo-verified">✓ Confirmed</span>
            <img src="Assets/speakers/charchit-kumawat.jpg" alt="Charchit Kumawat" className="speaker-photo-img" loading="lazy" />
          </div>
          <div className="speaker-info">
            <div className="speaker-name-row">
              <h4 className="speaker-name">Charchit Kumawat</h4>
              <a href="https://x.com/Charchit_web3" target="_blank" rel="noopener noreferrer" className="spk-card-x-pill" title="Charchit Kumawat on X (@Charchit_web3)" onClick={(e) => e.stopPropagation()}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                <span>@Charchit_web3</span>
              </a>
            </div>
            <div className="speaker-meta-row">
              <div className="speaker-org-tag">GeSIM.xyz</div>
            </div>
            <p className="speaker-designation">Founder &amp; Builder, GeSIM.xyz</p>
          </div>
          <div className="speaker-talk-snip">
            <div className="talk-format-badge" style={{ background: 'rgba(16,185,129,0.18)', color: '#6ee7b7' }}>🎙️ 30m Talk + 15m Q&amp;A</div>
            <div className="talk-title-text">Privacy &amp; Human Connectivity: Decentralized Identity &amp; SIM Infrastructure</div>
            <div className="talk-time-text">⏱️ Session Time: TBA · Day 4 Track</div>
          </div>
          <div className="speaker-card-actions" onClick={(e) => e.stopPropagation()}>
            <div className="speaker-social-icons">
              <a href="https://x.com/Charchit_web3" target="_blank" rel="noopener noreferrer" className="spk-social-link" title="Charchit Kumawat on X" aria-label="X">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
            <button type="button" className="btn-speaker-card-view" onClick={() => window.openSpeakerModal && window.openSpeakerModal('charchit')}>
              <span>View Talk &amp; Bio</span>
              <span>➔</span>
            </button>
          </div>
        </div>

        {/* Day 4 Speaker 3: Loring Harkness */}
        <div className="speaker-card spk-day-4" data-spk-day="4" data-popular-rank="8" id="speaker-card-loring" onClick={() => window.openSpeakerModal && window.openSpeakerModal('loring')} role="button" tabIndex={0} title="Click to view Loring Harkness's talk and bio">
          <div className="speaker-card-top-bar"></div>
          <div className="speaker-photo-wrap">
            <span className="spk-photo-track-badge" style={{ background: 'rgba(16,185,129,0.25)', color: '#6ee7b7', border: '1px solid rgba(16,185,129,0.45)' }}>Day 4 · Enterprise EIPs</span>
            <span className="spk-photo-verified">✓ Confirmed</span>
            <img src="Assets/speakers/loring-harkness.jpg" alt="Loring Harkness" className="speaker-photo-img" loading="lazy" />
          </div>
          <div className="speaker-info">
            <div className="speaker-name-row">
              <h4 className="speaker-name">Loring Harkness</h4>
              <a href="https://x.com/LoringHarkness" target="_blank" rel="noopener noreferrer" className="spk-card-x-pill" title="Loring Harkness on X (@LoringHarkness)" onClick={(e) => e.stopPropagation()}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                <span>@LoringHarkness</span>
              </a>
            </div>
            <div className="speaker-meta-row">
              <div className="speaker-org-tag">Shutter Network</div>
            </div>
            <p className="speaker-designation">Head of Commercial, brainbot GmbH · Core Contributor, Shutter Network</p>
          </div>
          <div className="speaker-talk-snip">
            <div className="talk-format-badge" style={{ background: 'rgba(16,185,129,0.18)', color: '#6ee7b7' }}>🎙️ 30m Talk + 15m Q&amp;A</div>
            <div className="talk-title-text">Encrypted Mempools &amp; Threshold Encryption: Privacy and Fairness for Enterprise</div>
            <div className="talk-time-text">⏱️ Session Time: TBA · Day 4 Track</div>
          </div>
          <div className="speaker-card-actions" onClick={(e) => e.stopPropagation()}>
            <div className="speaker-social-icons">
              <a href="https://www.linkedin.com/in/loringharkness" target="_blank" rel="noopener noreferrer" className="spk-social-link" title="Loring Harkness on LinkedIn" aria-label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://x.com/LoringHarkness" target="_blank" rel="noopener noreferrer" className="spk-social-link" title="Loring Harkness on X" aria-label="X">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>

            </div>
            <button type="button" className="btn-speaker-card-view" onClick={() => window.openSpeakerModal && window.openSpeakerModal('loring')}>
              <span>View Talk &amp; Bio</span>
              <span>➔</span>
            </button>
          </div>
        </div>

        {/* Day 4 Speaker 4: Yudhishthra */}
        <div className="speaker-card spk-day-4" data-spk-day="4" data-popular-rank="14" id="speaker-card-yudhishthra" onClick={() => window.openSpeakerModal && window.openSpeakerModal('yudhishthra')} role="button" tabIndex={0} title="Click to view Yudhishthra's talk and bio">
          <div className="speaker-card-top-bar"></div>
          <div className="speaker-photo-wrap">
            <span className="spk-photo-track-badge" style={{ background: 'rgba(16,185,129,0.25)', color: '#6ee7b7', border: '1px solid rgba(16,185,129,0.45)' }}>Day 4 · Enterprise EIPs</span>
            <span className="spk-photo-verified">✓ Confirmed</span>
            <img src="Assets/speakers/yudhishthra.jpg" alt="Yudhishthra" className="speaker-photo-img" loading="lazy" />
          </div>
          <div className="speaker-info">
            <div className="speaker-name-row">
              <h4 className="speaker-name">Yudhishthra</h4>
              <a href="https://x.com/0xYudhishthra" target="_blank" rel="noopener noreferrer" className="spk-card-x-pill" title="Yudhishthra on X (@0xYudhishthra)" onClick={(e) => e.stopPropagation()}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                <span>@0xYudhishthra</span>
              </a>
            </div>
            <div className="speaker-meta-row">
              <div className="speaker-org-tag">Aqua0</div>
            </div>
            <p className="speaker-designation">Co-Founder &amp; CTO, Aqua0</p>
          </div>
          <div className="speaker-talk-snip">
            <div className="talk-format-badge" style={{ background: 'rgba(16,185,129,0.18)', color: '#6ee7b7' }}>🎙️ 30m Talk + 15m Q&amp;A</div>
            <div className="talk-title-text">Why Your Local-Currency Stablecoin Has No Market</div>
            <div className="talk-time-text">⏱️ Session Time: TBA · Day 4 Track</div>
          </div>
          <div className="speaker-card-actions" onClick={(e) => e.stopPropagation()}>
            <div className="speaker-social-icons">
              <a href="https://www.linkedin.com/in/yudhishthra/" target="_blank" rel="noopener noreferrer" className="spk-social-link" title="Yudhishthra on LinkedIn" aria-label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://x.com/0xYudhishthra" target="_blank" rel="noopener noreferrer" className="spk-social-link" title="Yudhishthra on X" aria-label="X">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>

            </div>
            <button type="button" className="btn-speaker-card-view" onClick={() => window.openSpeakerModal && window.openSpeakerModal('yudhishthra')}>
              <span>View Talk &amp; Bio</span>
              <span>➔</span>
            </button>
          </div>
        </div>

        {/* Day 4 Speaker 5: Dhruv Gera */}
        <div className="speaker-card spk-day-4" data-spk-day="4" data-popular-rank="10" id="speaker-card-dhruv" onClick={() => window.openSpeakerModal && window.openSpeakerModal('dhruv')} role="button" tabIndex={0} title="Click to view Dhruv Gera's talk and bio">
          <div className="speaker-card-top-bar"></div>
          <div className="speaker-photo-wrap">
            <span className="spk-photo-track-badge" style={{ background: 'rgba(16,185,129,0.25)', color: '#6ee7b7', border: '1px solid rgba(16,185,129,0.45)' }}>Day 4 · Enterprise EIPs</span>
            <span className="spk-photo-verified">✓ Confirmed</span>
            <img src="Assets/speakers/dhruv-gera.jpg" alt="Dhruv Gera" className="speaker-photo-img" loading="lazy" />
          </div>
          <div className="speaker-info">
            <div className="speaker-name-row">
              <h4 className="speaker-name">Dhruv Gera</h4>
              <a href="https://x.com/dhruvgera_" target="_blank" rel="noopener noreferrer" className="spk-card-x-pill" title="Dhruv Gera on X (@dhruvgera_)" onClick={(e) => e.stopPropagation()}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                <span>@dhruvgera_</span>
              </a>
            </div>
            <div className="speaker-meta-row">
              <div className="speaker-org-tag">DashX</div>
            </div>
            <p className="speaker-designation">Founder &amp; CEO, DashX</p>
          </div>
          <div className="speaker-talk-snip">
            <div className="talk-format-badge" style={{ background: 'rgba(16,185,129,0.18)', color: '#6ee7b7' }}>🎙️ 30m Talk + 15m Q&amp;A</div>
            <div className="talk-title-text">ERC-7984: Are Confidential Tokens Ready for Enterprise Payments?</div>
            <div className="talk-time-text">⏱️ Session Time: TBA · Day 4 Track</div>
          </div>
          <div className="speaker-card-actions" onClick={(e) => e.stopPropagation()}>
            <div className="speaker-social-icons">
              <a href="https://www.linkedin.com/in/dhruv-gera/" target="_blank" rel="noopener noreferrer" className="spk-social-link" title="Dhruv Gera on LinkedIn" aria-label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://x.com/dhruvgera_" target="_blank" rel="noopener noreferrer" className="spk-social-link" title="Dhruv Gera on X" aria-label="X">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>

            </div>
            <button type="button" className="btn-speaker-card-view" onClick={() => window.openSpeakerModal && window.openSpeakerModal('dhruv')}>
              <span>View Talk &amp; Bio</span>
              <span>➔</span>
            </button>
          </div>
        </div>


      </div>

      {/* Live Search No-Results State */}
      <div id="spk-no-results" className="spk-no-results" style={{ display: 'none' }}>
        <div className="spk-no-results-icon">🔍</div>
        <h5>No speakers found</h5>
        <p>No confirmed speakers match your search query. Try searching for a different name, track keyword, or organization (e.g. Pooja, Besu, ENS, EVVM, Privacy).</p>
        <button type="button" className="btn-clear-search-pill" onClick={() => window.clearSpeakerSearch && window.clearSpeakerSearch()}>Clear Search Filter</button>
      </div>

      {/* Cohorts Divider & Heading */}
      <div className="speaker-cohorts-section-title">
        <div className="speaker-cohorts-pill">
          <span className="pill-dot"></span>
          <span>4 Foundational Tracks · Devcon 8 Mumbai</span>
        </div>
        <h4>Technical Contributor Cohorts</h4>
        <p className="speaker-cohorts-sub">Connecting the core pillars of Ethereum’s open engineering ecosystem: from proposal governance and core consensus to client interoperability and application ERCs.</p>
      </div>

      <div className="speaker-cohorts-grid">
        {/* Cohort 1: EIP Editors & Authors (Day 1) */}
        <div className="speaker-cohort-card cohort-1">
          <div className="cohort-accent-bar"></div>
          <div className="cohort-card-top">
            <div className="cohort-icon-pod">🖋️</div>
            <span className="cohort-track-tag">Day 1 Focus</span>
          </div>
          <h4 className="cohort-title">EIP Editors &amp; Authors</h4>
          <span className="cohort-sub">Governance &amp; Consensus</span>
          <p className="cohort-desc">Stewards of EIP-1 and the standards process providing direct review, author office hours, and peer feedback on drafts.</p>
          <div className="cohort-chips">
            <span className="cohort-chip">#EIP1</span>
            <span className="cohort-chip">#ProposalClinics</span>
            <span className="cohort-chip">#StatusVsStage</span>
            <span className="cohort-chip">#PRTriage</span>
          </div>
          <div className="cohort-activity-footer">
            <span className="cohort-act-dot"></span>
            <span>Live PR Clinics &amp; Office Hours</span>
          </div>
        </div>

        {/* Cohort 2: Core Protocol Devs (Day 2) */}
        <div className="speaker-cohort-card cohort-2">
          <div className="cohort-accent-bar"></div>
          <div className="cohort-card-top">
            <div className="cohort-icon-pod">⚙️</div>
            <span className="cohort-track-tag">Day 2 Focus</span>
          </div>
          <h4 className="cohort-title">Core Protocol Devs</h4>
          <span className="cohort-sub">Consensus &amp; Execution</span>
          <p className="cohort-desc">Researchers and engineers working on upcoming Ethereum hard forks, state transition changes, and Prague/Electra upgrades.</p>
          <div className="cohort-chips">
            <span className="cohort-chip">#PragueElectra</span>
            <span className="cohort-chip">#Glamsterdam</span>
            <span className="cohort-chip">#HardForks</span>
            <span className="cohort-chip">#Mempool</span>
          </div>
          <div className="cohort-activity-footer">
            <span className="cohort-act-dot"></span>
            <span>Protocol Upgrades Working Room</span>
          </div>
        </div>

        {/* Cohort 3: Client Implementers (Days 2 & 3) */}
        <div className="speaker-cohort-card cohort-3">
          <div className="cohort-accent-bar"></div>
          <div className="cohort-card-top">
            <div className="cohort-icon-pod">💻</div>
            <span className="cohort-track-tag">Days 2 &amp; 3</span>
          </div>
          <h4 className="cohort-title">Client Implementers</h4>
          <span className="cohort-sub">Interop &amp; Performance</span>
          <p className="cohort-desc">Engineers from Geth, Nethermind, Besu, Erigon, Lighthouse, and Prysm testing interop and engine API specifications.</p>
          <div className="cohort-chips">
            <span className="cohort-chip">#Besu</span>
            <span className="cohort-chip">#Geth</span>
            <span className="cohort-chip">#Nethermind</span>
            <span className="cohort-chip">#EngineAPI</span>
          </div>
          <div className="cohort-activity-footer">
            <span className="cohort-act-dot"></span>
            <span>Client Interoperability Testing Lab</span>
          </div>
        </div>

        {/* Cohort 4: ERC & App Architects (Days 3 & 4) */}
        <div className="speaker-cohort-card cohort-4">
          <div className="cohort-accent-bar"></div>
          <div className="cohort-card-top">
            <div className="cohort-icon-pod">🏗️</div>
            <span className="cohort-track-tag">Days 3 &amp; 4</span>
          </div>
          <h4 className="cohort-title">ERC &amp; App Architects</h4>
          <span className="cohort-sub">Application Standards</span>
          <p className="cohort-desc">Authors behind ERC-4337 smart accounts, token extensions, wallet interoperability, and verifiable computing primitives.</p>
          <div className="cohort-chips">
            <span className="cohort-chip">#ERC4337</span>
            <span className="cohort-chip">#SmartAccounts</span>
            <span className="cohort-chip">#DePIN</span>
            <span className="cohort-chip">#RWA</span>
          </div>
          <div className="cohort-activity-footer">
            <span className="cohort-act-dot"></span>
            <span>Application Standards &amp; Demos</span>
          </div>
        </div>
      </div>

      <div className="speakers-box-actions">
        <a href="https://lu.ma/czi58jpe" target="_blank" rel="noopener noreferrer" className="btn-speaker-updates">
          <span>Get Speaker Updates on Luma</span>
          <span>↗</span>
        </a>
        <a href="#speak" className="btn-speaker-apply-alt">
          <span>Apply to Speak at EIP Hub</span>
          <span>↓</span>
        </a>
      </div>
    </div>
  </div>

  {/* CALL FOR SPEAKERS & PROPOSALS (Best Location) */}
  <div className="speak-section" id="speak">
    <div className="speak-card">
      <div className="speak-badge"><span className="speak-badge-dot"></span> Call for Speakers · Devcon 8 India</div>
      <h2 className="speak-title">Want to Speak or Present at the EIP Hub?</h2>
      <p className="speak-sub">Are you authoring an EIP, building around ERC standards, or conducting protocol research? We welcome presentations, workshops, and lightning talks across all four days at Jio World Centre, Mumbai.</p>

      {/* 4 Session Formats */}
      <div className="speak-formats">
        <div className="speak-format-item format-item-lightning">
          <div className="speak-format-top-bar"></div>
          <div className="format-icon-pod">⚡</div>
          <div className="format-title">Lightning Talk</div>
          <span className="format-time">15–20 Minutes</span>
          <div className="format-desc">Quick standard walkthroughs, tool launches &amp; concise problem statements.</div>
        </div>
        <div className="speak-format-item format-item-deepdive">
          <div className="speak-format-top-bar"></div>
          <div className="format-icon-pod">🎙️</div>
          <div className="format-title">Tech Deep-Dive</div>
          <span className="format-time">30–45 Minutes</span>
          <div className="format-desc">Protocol architecture, meta EIP upgrades &amp; in-depth technical analysis.</div>
        </div>
        <div className="speak-format-item format-item-clinic">
          <div className="speak-format-top-bar"></div>
          <div className="format-icon-pod">🛠️</div>
          <div className="format-title">Hands-On Clinic</div>
          <span className="format-time">45 Minutes</span>
          <div className="format-desc">Live ERC design review, smart contract feedback &amp; code walkthroughs.</div>
        </div>
        <div className="speak-format-item format-item-panel">
          <div className="speak-format-top-bar"></div>
          <div className="format-icon-pod">👥</div>
          <div className="format-title">Panel Discussion</div>
          <span className="format-time">45 Minutes</span>
          <div className="format-desc">Multi-author debate, governance processes &amp; ecosystem roadmaps.</div>
        </div>
      </div>

      {/* Connect on Email Action Box */}
      <div className="speak-action-box">
        <div className="speak-action-topbar">
          <div className="speak-channel-status">
            <span className="speak-status-dot"></span>
            <span className="speak-status-text">Direct Speaker Proposal Channel</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <a href="https://x.com/eiphub" target="_blank" rel="noopener noreferrer" className="speak-email-chip" style={{ textDecoration: 'none' }} title="Follow @eiphub on X (Twitter)">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: '0' }}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              <span className="speak-chip-label">𝕏 Handle:</span>
              <span className="speak-email-val">@eiphub</span>
            </a>
            <a href="https://www.linkedin.com/company/eip-hub/" target="_blank" rel="noopener noreferrer" className="speak-email-chip" style={{ textDecoration: 'none' }} title="Follow EIP Hub on LinkedIn">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: '0' }}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z"/></svg>
              <span className="speak-chip-label">LinkedIn:</span>
              <span className="speak-email-val">eip-hub</span>
            </a>
            <div className="speak-email-chip">
              <span className="speak-chip-label">Official Inbox:</span>
              <span className="speak-email-val">team@eiphub.xyz</span>
            </div>
          </div>
        </div>

        <div className="speak-btn-group">
          <a href="https://cryptpad.fr/form/#/2/form/view/q78P0VZ-28JejEzFYDH0fpddP7GtGERN8goafecPcN8/" target="_blank" rel="noopener noreferrer" className="btn-speak-form">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: '0' }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            <span>Speaker Application Form</span>
            <span className="btn-arr">↗</span>
          </a>
          <button type="button" className="btn-copy-mail" id="copy-speak-mail-btn" onClick={() => window.copySpeakerEmail && window.copySpeakerEmail()}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: '0' }}>
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
            <span id="copy-btn-text">Copy Email</span>
          </button>
          <a href="mailto:team@eiphub.xyz?subject=Speaker%20Proposal%20-%20EIP%20Hub%20Devcon%208&body=Hi%20EIP%20Hub%20Team%2C%0A%0AI%20would%20like%20to%20propose%20a%20talk%2Fsession%20at%20the%20EIP%20Hub%20at%20Devcon%208%20India%20(Nov%203-6%2C%202026%2C%20Mumbai).%0A%0A-%20Speaker%20Name%3A%0A-%20Talk%20Title%3A%0A-%20Preferred%20Format%20(Lightning%20%2F%20Deep-Dive%20%2F%20Workshop%20%2F%20Panel)%3A%0A-%20Target%20Day%20(Day%201%20to%20Day%204)%3A%0A-%20Brief%20Abstract%20(100-150%20words)%3A%0A-%20Relevant%20EIP%2FERC%20or%20Project%20Link%3A%0A-%20Bio%20%26%20Twitter%2FX%20Handle%3A%0A%0AThank%20you!" className="btn-speak-mail">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: '0' }}>
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            <span>Email Proposal</span>
            <span className="btn-arr">↗</span>
          </a>
        </div>

        <div className="speak-meta-hint">
          <div className="speak-hint-inner">
            <span className="speak-hint-icon" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="16" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>
            </span>
            <span className="speak-hint-lead">Please include your:</span>
            <span className="speak-hint-tag">Session Title</span>
            <span className="speak-hint-tag">150-Word Abstract</span>
            <span className="speak-hint-tag">Speaker Bio</span>
            <span className="speak-hint-divider" aria-hidden="true">·</span>
            <span className="speak-hint-rolling"><span className="rolling-dot"></span>Submissions reviewed on rolling basis</span>
          </div>
        </div>

        <div style={{ marginTop: '14px', fontSize: '12px', color: 'rgba(255,255,255,0.6)', textAlign: 'center', lineHeight: '1.6' }}>
          <span style={{ color: '#f59e0b', fontWeight: '700' }}>⚠️ Important Notice:</span> The EIP Hub is a community hub stage and does not provide Devcon conference passes, tickets, or travel stipends. All presenters and attendees must hold an active Devcon 8 ticket for venue admission.
        </div>
      </div>
    </div>
  </div>

  {/* HOW TO APPLY AS A SPEAKER (Step-by-Step Guide & Criteria) */}
  <div className="speaker-guide-wrap" id="apply-as-speaker">
    <div className="speaker-guide-header">
      <div className="sec-eyebrow">Speaker Onboarding</div>
      <h3 className="speaker-guide-title">How to Apply as a Speaker</h3>
      <p className="speaker-guide-sub">
        We welcome presentations, workshops, and lightning talks from all Ethereum standards contributors. Follow this 4-step process to submit your proposal.
      </p>
    </div>

    {/* 4-Step Process */}
    <div className="speaker-steps-grid">
      {/* Step: Alignment */}
      <div className="step-card step-card-1">
        <div className="step-card-top-bar"></div>
        <div className="step-card-body">
          <div className="step-card-header">
            <span className="step-badge"><span className="step-badge-dot"></span>Step: Alignment</span>
            <div className="step-icon-pod" title="Programming Alignment">🗓️</div>
          </div>
          <h4>Align with a Programming Day</h4>
          <p className="step-desc">Match your research or proposal to one of the four curated Devcon 8 summit days:</p>
          <div className="step-chips-list">
            <div className="step-chip" data-tooltip="EIP Process &amp; General Overview (Nov 3)" title="EIP Process &amp; General Overview (Nov 3)">
              <span className="step-chip-tag">Day 1</span>
              <span className="step-chip-text">EIP Process &amp; General Overview (Nov 3)</span>
            </div>
            <div className="step-chip" data-tooltip="Protocol EIPs &amp; Network Upgrades (Nov 4)" title="Protocol EIPs &amp; Network Upgrades (Nov 4)">
              <span className="step-chip-tag">Day 2</span>
              <span className="step-chip-text">Protocol EIPs &amp; Network Upgrades (Nov 4)</span>
            </div>
            <div className="step-chip" data-tooltip="Application EIPs &amp; Ecosystem Support (Nov 5)" title="Application EIPs &amp; Ecosystem Support (Nov 5)">
              <span className="step-chip-tag">Day 3</span>
              <span className="step-chip-text">Application EIPs &amp; Ecosystem Support (Nov 5)</span>
            </div>
            <div className="step-chip" data-tooltip="Enterprise Readiness &amp; EIPs for Consideration (Nov 6)" title="Enterprise Readiness &amp; EIPs for Consideration (Nov 6)">
              <span className="step-chip-tag">Day 4</span>
              <span className="step-chip-text">Enterprise Readiness &amp; EIPs for Consideration (Nov 6)</span>
            </div>
          </div>
        </div>
        <div className="step-card-footer">
          <span className="step-phase">Alignment Stage</span>
          <span className="step-footer-action">Alignment ➔</span>
        </div>
      </div>

      {/* Step 02 */}
      <div className="step-card step-card-2">
        <div className="step-card-top-bar"></div>
        <div className="step-card-body">
          <div className="step-card-header">
            <span className="step-badge"><span className="step-badge-dot"></span>Step: Format</span>
            <div className="step-icon-pod" title="Session Format">🎙️</div>
          </div>
          <h4>Select Your Session Format</h4>
          <p className="step-desc">Pick the ideal stage format suited to your technical depth and presentation style:</p>
          <div className="step-chips-list">
            <div className="step-chip" data-tooltip="Lightning Talk &amp; Concise Demo (15–20m)" title="Lightning Talk &amp; Concise Demo (15–20m)">
              <span className="step-chip-tag">⚡ 15–20m</span>
              <span className="step-chip-text">Lightning Talk &amp; Concise Demo</span>
            </div>
            <div className="step-chip" data-tooltip="Tech Deep-Dive &amp; Architecture (30–45m)" title="Tech Deep-Dive &amp; Architecture (30–45m)">
              <span className="step-chip-tag">🔬 30–45m</span>
              <span className="step-chip-text">Tech Deep-Dive &amp; Architecture</span>
            </div>
            <div className="step-chip" data-tooltip="Hands-On Clinic &amp; Code Review (45m)" title="Hands-On Clinic &amp; Code Review (45m)">
              <span className="step-chip-tag">🛠️ 45m</span>
              <span className="step-chip-text">Hands-On Clinic &amp; Code Review</span>
            </div>
            <div className="step-chip" data-tooltip="Panel Discussion &amp; Debate (45m)" title="Panel Discussion &amp; Debate (45m)">
              <span className="step-chip-tag">💬 45m</span>
              <span className="step-chip-text">Panel Discussion &amp; Debate</span>
            </div>
          </div>
        </div>
        <div className="step-card-footer">
          <span className="step-phase">Format Stage</span>
          <span className="step-footer-action">Format ➔</span>
        </div>
      </div>

      {/* Step 03 */}
      <div className="step-card step-card-3">
        <div className="step-card-top-bar"></div>
        <div className="step-card-body">
          <div className="step-card-header">
            <span className="step-badge"><span className="step-badge-dot"></span>Step: Intake</span>
            <div className="step-icon-pod" title="Proposal Intake">📝</div>
          </div>
          <h4>Submit Proposal Form</h4>
          <p className="step-desc">Fill out the official speaker intake form with your technical materials and credentials:</p>
          <div className="step-chips-list">
            <div className="step-chip" data-tooltip="150-Word Talk Summary &amp; Takeaways" title="150-Word Talk Summary &amp; Takeaways">
              <span className="step-chip-tag">Abstract</span>
              <span className="step-chip-text">150-Word Talk Summary &amp; Takeaways</span>
            </div>
            <div className="step-chip" data-tooltip="EIP / ERC Draft or GitHub Repository" title="EIP / ERC Draft or GitHub Repository">
              <span className="step-chip-tag">Specs</span>
              <span className="step-chip-text">EIP / ERC Draft or GitHub Repository</span>
            </div>
            <div className="step-chip" data-tooltip="Author Profile &amp; Protocol Track Record" title="Author Profile &amp; Protocol Track Record">
              <span className="step-chip-tag">Bio</span>
              <span className="step-chip-text">Author Profile &amp; Protocol Track Record</span>
            </div>
            <div className="step-chip" data-tooltip="Audience Level &amp; Prerequisites" title="Audience Level &amp; Prerequisites">
              <span className="step-chip-tag">Target</span>
              <span className="step-chip-text">Audience Level &amp; Prerequisites</span>
            </div>
          </div>
        </div>
        <div className="step-card-footer">
          <span className="step-phase">Intake Stage</span>
          <span className="step-footer-action">Submission ➔</span>
        </div>
      </div>

      {/* Step 04 */}
      <div className="step-card step-card-4">
        <div className="step-card-top-bar"></div>
        <div className="step-card-body">
          <div className="step-card-header">
            <span className="step-badge"><span className="step-badge-dot"></span>Step: Review</span>
            <div className="step-icon-pod" title="Committee Review">🛡️</div>
          </div>
          <h4>Rolling Committee Review</h4>
          <p className="step-desc">The EIP Hub Review Committee evaluates proposals on a continuous rolling schedule:</p>
          <div className="step-chips-list">
            <div className="step-chip" data-tooltip="Peer Assessment by EIP Editors &amp; Curators" title="Peer Assessment by EIP Editors &amp; Curators">
              <span className="step-chip-tag">Review</span>
              <span className="step-chip-text">Peer Assessment by EIP Editors &amp; Curators</span>
            </div>
            <div className="step-chip" data-tooltip="Jio World Stage, Slot &amp; Room Notice" title="Jio World Stage, Slot &amp; Room Notice">
              <span className="step-chip-tag">Stage</span>
              <span className="step-chip-text">Jio World Stage, Slot &amp; Room Notice</span>
            </div>
            <div className="step-chip" data-tooltip="Slide Guidelines &amp; Tech Check-In" title="Slide Guidelines &amp; Tech Check-In">
              <span className="step-chip-tag">Deck AV</span>
              <span className="step-chip-text">Slide Guidelines &amp; Tech Check-In</span>
            </div>
            <div className="step-chip" data-tooltip="Confirmed Session Schedule &amp; Speaker Onboarding" title="Confirmed Session Schedule &amp; Speaker Onboarding">
              <span className="step-chip-tag">Schedule</span>
              <span className="step-chip-text">Confirmed Schedule &amp; Stage Onboarding</span>
            </div>
          </div>
        </div>
        <div className="step-card-footer">
          <span className="step-phase">Review Stage</span>
          <span className="step-footer-action">Confirmation ✓</span>
        </div>
      </div>
    </div>

    {/* Speaker Rules & Guidelines Panel */}
    <div className="speaker-rules-panel">
      <div className="speaker-rules-top-bar"></div>
      <div className="speaker-rules-panel-header">
        <div className="speaker-rules-title-pod">
          <div className="speaker-rules-badge-icon" aria-hidden="true">📋</div>
          <div>
            <h4>Speaker Guidelines &amp; Evaluation Criteria</h4>
            <p className="speaker-rules-subtitle">All submissions are evaluated against three core Ethereum community standards for credible neutrality and technical merit</p>
          </div>
        </div>
        <span className="speaker-rules-badge-pill"><span className="speak-status-dot" style={{ background: '#38bdf8', boxShadow: '0 0 8px #38bdf8', width: '6px', height: '6px', display: 'inline-block', borderRadius: '50%' }}></span>Standards-First · Neutral</span>
      </div>

      <div className="speaker-rules-pillars">
        <div className="speaker-pillar-card pillar-1">
          <span className="pillar-tag pillar-tag-cyan">Credible Neutrality</span>
          <div className="pillar-top">
            <div className="pillar-icon" aria-hidden="true">⚖️</div>
            <h5>Strictly Project-Neutral</h5>
          </div>
          <p>No token promotion, commercial sales pitches, or speculative price talk. Proposals must center on <strong>open technical standards</strong>, community projects, client implementations, or EIP governance.</p>
        </div>

        <div className="speaker-pillar-card pillar-2">
          <span className="pillar-tag pillar-tag-indigo">Technical Depth</span>
          <div className="pillar-top">
            <div className="pillar-icon" aria-hidden="true">🛠️</div>
            <h5>Value for Ethereum Builders</h5>
          </div>
          <p>Every session must teach, demonstrate live code, or address <strong>real technical challenges</strong> across protocol engineering, developer tooling, or standards interoperability.</p>
        </div>

        <div className="speaker-pillar-card pillar-3">
          <span className="pillar-tag pillar-tag-emerald">Inclusion &amp; Mentorship</span>
          <div className="pillar-top">
            <div className="pillar-icon" aria-hidden="true">🌍</div>
            <h5>First-Time &amp; Diverse Voices</h5>
          </div>
          <p>We actively champion and mentor <strong>first-time EIP authors</strong> and underrepresented researchers from India and the global Ethereum decentralized ecosystem.</p>
        </div>
      </div>
    </div>
  </div>
</div>

{/* 4-DAY CURATED PROGRAM & TRACKS */}
    </>
  );
}
