import React from 'react';
import { Link } from 'react-router-dom';

export default function DaysProgram({ showMatrix = true }) {
  return (
    <>
<div className="days-section-bg" id="days">
  <div className="wrap" id="program">
    {/* 4-Day Curated Program Subheader */}
    <div style={{ marginTop: '0', width: '100%' }}>
      <div className="sec-eyebrow">4-Day Curated Programming</div>
      <div className="sec-title" style={{ marginBottom: '14px' }}>Daily Programming Tracks</div>
      <p className="sec-body" style={{ marginBottom: '36px' }}>Each of the four days follows dedicated programming tracks guiding attendees through the full Ethereum standards journey.</p>
    </div>

    {/* Interactive Day Switcher Controls & View Mode Toggle */}
    <div className="day-controls-wrapper">
      <div className="day-tab-switcher" role="tablist" aria-label="Daily Tracks Switcher">
        <button type="button" className="day-tab-btn active" data-day="1" onClick={() => window.switchDayTab && window.switchDayTab(1)} role="tab" aria-selected="true">
          <span className="day-tab-dot"></span>
          <span>Day 1 · Nov 3</span>
          <span style={{ opacity: '0.6', fontSize: '11px' }}>EIP Process</span>
        </button>
        <button type="button" className="day-tab-btn" data-day="2" onClick={() => window.switchDayTab && window.switchDayTab(2)} role="tab" aria-selected="false">
          <span className="day-tab-dot"></span>
          <span>Day 2 · Nov 4</span>
          <span style={{ opacity: '0.6', fontSize: '11px' }}>Protocol EIPs</span>
        </button>
        <button type="button" className="day-tab-btn" data-day="3" onClick={() => window.switchDayTab && window.switchDayTab(3)} role="tab" aria-selected="false">
          <span className="day-tab-dot"></span>
          <span>Day 3 · Nov 5</span>
          <span style={{ opacity: '0.6', fontSize: '11px' }}>Application ERCs</span>
        </button>
        <button type="button" className="day-tab-btn" data-day="4" onClick={() => window.switchDayTab && window.switchDayTab(4)} role="tab" aria-selected="false">
          <span className="day-tab-dot"></span>
          <span>Day 4 · Nov 6</span>
          <span style={{ opacity: '0.6', fontSize: '11px' }}>Enterprise &amp; Scale</span>
        </button>
      </div>

      <div className="day-view-mode-toggle" aria-label="View format toggle">
        <button type="button" className="view-mode-btn active" id="btn-view-explorer" onClick={() => window.switchDayViewMode && window.switchDayViewMode('explorer')}>
          <span>🎛️ Detailed Explorer</span>
        </button>
        <button type="button" className="view-mode-btn" id="btn-view-grid" onClick={() => window.switchDayViewMode && window.switchDayViewMode('grid')}>
          <span>▦ 4-Day Grid</span>
        </button>
      </div>
    </div>

    {/* Interactive Day Showcase Panel (Default View: Detailed Explorer) */}
    <div className="day-showcase-panel showcase-day-1" id="day-showcase-panel" style={{ display: 'block' }}>
      <div className="showcase-top-bar"></div>

      {/* Slide Day 1 */}
      <div className="day-showcase-slide active" data-day="1">
        <div className="day-showcase-grid">
          <div className="showcase-left">
            <div>
              <div className="showcase-header-row">
                <span className="showcase-date-pill"><span className="day-pulse-dot"></span> Day 1 · Nov 3, 2026</span>
                <span className="showcase-track-badge">Standards Lifecycle</span>
              </div>
              <h3 className="showcase-title">EIP Process &amp; General Overview</h3>
              <div className="showcase-motto">Program: EIP Process &amp; Community</div>

              <div className="showcase-focus-card">
                <div className="showcase-focus-label">🎯 Core Editorial Focus</div>
                <p className="showcase-focus-text">EIP fundamentals, lifecycle, authorship, editors, coordinators, and how to propose and contribute to open Ethereum standards.</p>
              </div>

              <div className="showcase-topics-grid">
                <div className="showcase-topic-item"><span className="showcase-topic-dot"></span><span>Intro to EIPs &amp; author lifecycle</span></div>
                <div className="showcase-topic-item"><span className="showcase-topic-dot"></span><span>GitHub workflows, editors &amp; coordinators</span></div>
                <div className="showcase-topic-item"><span className="showcase-topic-dot"></span><span>Write your first EIP: how to propose &amp; contribute</span></div>
                <div className="showcase-topic-item"><span className="showcase-topic-dot"></span><span>Hands-on PR reviews &amp; EIP-1 guidance</span></div>
                <div className="showcase-topic-item" style={{ gridColumn: '1/-1' }}><span className="showcase-topic-dot"></span><span>Contributor onboarding &amp; EIP Editor Office Hours</span></div>
              </div>
            </div>

            <div className="showcase-eco-row">
              <div className="showcase-eco-box">
                <div className="showcase-eco-title">Booth Duty</div>
                <div className="showcase-eco-val">EIP Editors, ECH Institute Coordinators &amp; Community Mentors</div>
              </div>
              <div className="showcase-eco-box">
                <div className="showcase-eco-title">Key Partners</div>
                <div className="showcase-eco-val">ECH Institute, ETHShala &amp; Developer Hubs</div>
              </div>
            </div>

            <div className="showcase-speakers-bar">
              <div className="showcase-speakers-bar-title">Scheduled Day 1 Speakers</div>
              <div className="showcase-speakers-chips">
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('jochem')} title="View Jochem Brouwer's session &amp; bio">
                  <img src="Assets/photos/speaker-jochem-brouwer.jpg" alt="Jochem Brouwer" />
                  <span>Jochem Brouwer</span>
                </button>
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('matthew')} title="View Matthew Keil's session &amp; bio">
                  <img src="Assets/speakers/matthew-keil.jpg" alt="Matthew Keil" />
                  <span>Matthew Keil</span>
                </button>
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('pooja')} title="View Pooja Ranjan's session &amp; bio">
                  <img src="Assets/speakers/pooja-ranjan.jpg" alt="Pooja Ranjan" />
                  <span>Pooja Ranjan</span>
                </button>
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('rafael')} title="View Rafael Matias's session &amp; bio">
                  <img src="Assets/speakers/rafael.jpg" alt="Rafael Matias (@skylenet)" />
                  <span>Rafael Matias</span>
                </button>
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('stefan')} title="View Stefan Starflinger's session &amp; bio">
                  <img src="Assets/speakers/stefan-starflinger.jpg" alt="Stefan Starflinger" />
                  <span>Stefan Starflinger</span>
                </button>
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('louis')} title="View Louis Tsai's session &amp; bio">
                  <img src="Assets/speakers/louis-tsai.jpg" alt="Louis Tsai" />
                  <span>Louis Tsai</span>
                </button>
                </div>
            </div>
          </div>

          <div className="showcase-right">
            <div>
              <div className="showcase-timeline-header">
                <h4><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> Day 1 Stage Highlights</h4>
                <span className="showcase-timeline-sub">Jio World Centre · Mumbai</span>
              </div>

              <div className="showcase-timeline-list">
                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">12:00 – 12:20</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-welcome"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg><span>Welcome · Community</span></span>
                    <h5>EIP Hub Opening</h5>
                    <p>Opening remarks by Pooja Ranjan inaugurating the EIP Hub at Devcon 8 Mumbai.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">12:20 – 13:00</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-talk"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span>Talk · Governance &amp; AI</span></span>
                    <h5>EIP Content in the New AI-Era: Why Specification Clarity Matters More Than Ever</h5>
                    <p>Keynote by Jochem Brouwer on why specifications must maintain rigorous clarity for both core developers and autonomous AI implementers.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">13:10 – 14:10</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-workshop"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg><span>Workshop · Onboarding</span></span>
                    <h5>Your Path Into Ethereum Ecosystem with EIP Hub</h5>
                    <p>Interactive onboarding workshop with Pooja Ranjan, Dhanush Naik, and Subhrajeet Bhattacharjee on contributing to core standards.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">14:20 – 15:00</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-talk"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span>Talk · Glamsterdam &amp; Clients</span></span>
                    <h5>How Fast Is Your Client? Benchmarking Execution Layer for Glamsterdam</h5>
                    <p>Stefan Starflinger, Rafael Matias &amp; Louis Tsai on benchmarking 60M→200M gas limits, opcode repricing, and shadow fork tests.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">15:00 – 15:30</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-talk"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span>Talk · Hard Forks</span></span>
                    <h5>EIP Selection to Support Fast Fork Cadence</h5>
                    <p>Matthew Keil (Lodestar) on adopting smaller, high-cadence hard forks and forward multi-fork roadmap planning.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">15:30 – 16:00</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-break"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg><span>Break · Networking</span></span>
                    <h5>Lunch &amp; Networking Break</h5>
                    <p>Midday community luncheon and networking at Jio World Centre.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">16:00 – 17:00</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-ama"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg><span>Fishbowl · Process</span></span>
                    <h5>EIP Process AMA (Fishbowl Q&amp;A)</h5>
                    <p>Open community AMA with Pooja Ranjan and Jochem Brouwer on PR review triage, EIP-1 guidelines, and status flows.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">17:00 – 17:30</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-quiz"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H7.5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H15c-.55 0-1-.45-1-1v-2.34c3.27-.67 6-3.73 6-7.32V4H4v3.34c0 3.59 2.73 6.65 6 7.32z"/></svg><span>Interactive Quiz Game</span></span>
                    <h5>EIP Signal Quiz Game - Understanding EIPs</h5>
                    <p>Live interactive quiz game testing standards knowledge with summit prizes.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">17:30 – 18:10</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-break"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg><span>Community Connect &amp; Wrap-Up</span></span>
                    <h5>EIP Hub Community Connect &amp; Daily Wrap-Up</h5>
                    <p>Closing mixer with editors, first-time authors, and Day 2 consensus preview.</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* Slide Day 2 */}
      <div className="day-showcase-slide" data-day="2">
        <div className="day-showcase-grid">
          <div className="showcase-left">
            <div>
              <div className="showcase-header-row">
                <span className="showcase-date-pill"><span className="day-pulse-dot"></span> Day 2 · Nov 4, 2026</span>
                <span className="showcase-track-badge">Consensus &amp; Forks</span>
              </div>
              <h3 className="showcase-title">Protocol EIPs &amp; Network Upgrades</h3>
              <div className="showcase-motto">Program: Protocol EIPs &amp; Upgrades</div>

              <div className="showcase-focus-card">
                <div className="showcase-focus-label">⚡ Core Protocol Focus</div>
                <p className="showcase-focus-text">Core EIPs, network upgrades, AllCoreDevs consensus deep-dives, testing, and client interoperability.</p>
              </div>

              <div className="showcase-topics-grid">
                <div className="showcase-topic-item"><span className="showcase-topic-dot"></span><span>Protocol EIPs &amp; network upgrades pipeline</span></div>
                <div className="showcase-topic-item"><span className="showcase-topic-dot"></span><span>Core EIPs, AllCoreDevs consensus deep-dives</span></div>
                <div className="showcase-topic-item"><span className="showcase-topic-dot"></span><span>Execution &amp; consensus client implementations</span></div>
                <div className="showcase-topic-item"><span className="showcase-topic-dot"></span><span>Testing, fuzzing, devnets &amp; network interop</span></div>
                <div className="showcase-topic-item" style={{ gridColumn: '1/-1' }}><span className="showcase-topic-dot"></span><span>Protocol roadmap &amp; upcoming fork readiness</span></div>
              </div>
            </div>

            <div className="showcase-eco-row">
              <div className="showcase-eco-box">
                <div className="showcase-eco-title">Booth Duty</div>
                <div className="showcase-eco-val">Client Engineers, Core Researchers &amp; Testnet Devs</div>
              </div>
              <div className="showcase-eco-box">
                <div className="showcase-eco-title">Key Partners</div>
                <div className="showcase-eco-val">Core Client Teams &amp; Researchers</div>
              </div>
            </div>

            <div className="showcase-speakers-bar">
              <div className="showcase-speakers-bar-title">Featured Day 2 Speakers</div>
              <div className="showcase-speakers-chips">
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('rachit')} title="View Rachit Anand Srivastava's session &amp; bio">
                  <img src="Assets/speakers/rachit-anand-srivastava.png" alt="Rachit Anand Srivastava" />
                  <span>Rachit Anand</span>
                </button>
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('maria')} title="View Maria Silva's session &amp; bio">
                  <img src="Assets/speakers/maria-silva.jpg" alt="Maria Silva" />
                  <span>Maria Silva</span>
                </button>
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('gavin')} title="View Gavin Birch's session &amp; bio">
                  <img src="Assets/speakers/gavin-birch.jpg" alt="Gavin Birch" />
                  <span>Gavin Birch</span>
                </button>
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('abhimanyu')} title="View Abhimanyu Nag's session &amp; bio">
                  <img src="Assets/speakers/abhimanyu-nag.png" alt="Abhimanyu Nag" />
                  <span>Abhimanyu Nag</span>
                </button>
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('yoon')} title="View Yoon Hyoung Lee's session &amp; bio">
                  <img src="Assets/speakers/yoon-hyoung-lee.jpg" alt="Yoon Hyoung Lee" />
                  <span>Yoon Hyoung Lee</span>
                </button>
              </div>
            </div>
          </div>

          <div className="showcase-right">
            <div>
              <div className="showcase-timeline-header">
                <h4><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> Day 2 Stage Highlights</h4>
                <span className="showcase-timeline-sub">Jio World Centre · Mumbai</span>
              </div>

              <div className="showcase-timeline-list">
                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">09:00 – 09:10</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-welcome"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg><span>Welcome · Remarks</span></span>
                    <h5>Welcome &amp; Opening Remarks</h5>
                    <p>Kicking off Day 2 on Protocol EIPs, consensus mechanisms, and client upgrades.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">09:10 – 09:30</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-talk"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span>Talk · Cryptography</span></span>
                    <h5>Ethereum in the Age of Proofs</h5>
                    <p>Rachit Anand Srivastava on PeerDAS, KZG multiproofs, zkVMs, and post-quantum proving systems.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">09:30 – 10:20</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-talk"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span>Talk · Protocol Security</span></span>
                    <h5>EIP-8184: LUCID Encrypted Mempool</h5>
                    <p>Why encrypting the mempool is hard, trade-offs around ordering and DOS resistance, and the EIP-8184 model.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">10:20 – 11:00</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-talk"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span>Talk · Gas Repricing</span></span>
                    <h5>The Price Is Right: Setting Gas Prices for Glamsterdam</h5>
                    <p>Maria Silva on synthetic block tests, cross-client measurements, EIP-8038 and EIP-2780 repricing models.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">11:00 – 11:40</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-talk"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span>Talk · EIP-8141</span></span>
                    <h5>Frame txs &amp; private payments: EIP-8141 in practice</h5>
                    <p>Gavin Birch on separating transaction validation, gas payment, and execution natively on Ethereum.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">11:40 – 12:20</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-talk"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span>⏱️ Talk · SSF Consensus</span></span>
                    <h5>Limits to Single Slot Finality</h5>
                    <p>Abhimanyu Nag exploring consensus bounds, validator set scaling, and trade-offs for Single Slot Finality.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">12:20 – 13:00</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-talk"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span>Talk · Post-Quantum</span></span>
                    <h5>Post-Quantum Ethereum on Execution Layer: EIP-7885 to EIP-8288</h5>
                    <p>Yoon Hyoung Lee on lattice-based cryptography vs hash-based signatures with proof aggregation.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">13:00 – 14:00</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-break"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg><span>Break · Networking</span></span>
                    <h5>Lunch &amp; Networking Break</h5>
                    <p>Catered lunch break with core client engineers and protocol researchers.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">14:00 – 15:00</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-ama"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg><span>AMA · AllCoreDevs</span></span>
                    <h5>EIP Process AMA (Protocol &amp; Core Focus)</h5>
                    <p>AllCoreDevs workflow AMA with Pooja Ranjan covering fork scoping and testing pipelines.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">15:00 – 16:00</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-quiz"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H7.5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H15c-.55 0-1-.45-1-1v-2.34c3.27-.67 6-3.73 6-7.32V4H4v3.34c0 3.59 2.73 6.65 6 7.32z"/></svg><span>Interactive Quiz Game</span></span>
                    <h5>EIP Signal Quiz Game - Protocol &amp; Core Ethereum</h5>
                    <p>Challenging quiz game on hard forks, EVM internals, and protocol mechanics.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">16:00 – 17:10</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-break"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg><span>Community Connect &amp; Wrap-Up</span></span>
                    <h5>EIP Hub Community Connect &amp; Daily Wrap-Up</h5>
                    <p>Client engineers mixer and summary previewing Day 3 Application ERCs.</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* Slide Day 3 */}
      <div className="day-showcase-slide" data-day="3">
        <div className="day-showcase-grid">
          <div className="showcase-left">
            <div>
              <div className="showcase-header-row">
                <span className="showcase-date-pill"><span className="day-pulse-dot"></span> Day 3 · Nov 5, 2026</span>
                <span className="showcase-track-badge">ERCs &amp; Tooling</span>
              </div>
              <h3 className="showcase-title">Application EIPs &amp; Ecosystem Support</h3>
              <div className="showcase-motto">Program: Application EIPs &amp; Ecosystem Support</div>

              <div className="showcase-focus-card">
                <div className="showcase-focus-label">🛠️ Core Application Focus</div>
                <p className="showcase-focus-text">Application-layer ERCs &amp; standards, developer tooling, account abstraction, and wallet integrations.</p>
              </div>

              <div className="showcase-topics-grid">
                <div className="showcase-topic-item"><span className="showcase-topic-dot"></span><span>Application-layer ERCs</span></div>
                <div className="showcase-topic-item"><span className="showcase-topic-dot"></span><span>Smart contract tooling &amp; developer experience</span></div>
                <div className="showcase-topic-item"><span className="showcase-topic-dot"></span><span>Live interactive demos &amp; ERC review clinics</span></div>
                <div className="showcase-topic-item"><span className="showcase-topic-dot"></span><span>Real-world standards adoption &amp; wallet integration</span></div>
                <div className="showcase-topic-item" style={{ gridColumn: '1/-1' }}><span className="showcase-topic-dot"></span><span>Account abstraction &amp; application security</span></div>
              </div>
            </div>

            <div className="showcase-eco-row">
              <div className="showcase-eco-box">
                <div className="showcase-eco-title">Booth Duty</div>
                <div className="showcase-eco-val">ERC Authors, Tooling Developers &amp; App Architects</div>
              </div>
              <div className="showcase-eco-box">
                <div className="showcase-eco-title">Key Partners</div>
                <div className="showcase-eco-val">EIPsInsight, EtherWorld &amp; Tooling Platforms</div>
              </div>
            </div>

            <div className="showcase-speakers-bar">
              <div className="showcase-speakers-bar-title">Scheduled Day 3 Speakers</div>
              <div className="showcase-speakers-chips">
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('prem')} title="View Prem Makeig's session &amp; bio">
                  <img src="Assets/speakers/prem-makeig.jpg" alt="Prem Makeig" />
                  <span>Prem Makeig</span>
                </button>
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('dhruvang')} title="View Dhruvang Choudhari's session &amp; bio">
                  <img src="Assets/speakers/dhruvang-choudhari.jpg" alt="Dhruvang Choudhari" />
                  <span>Dhruvang Choudhari</span>
                </button>
                
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('thiru')} title="View Thirumurugan Sivalingam's session &amp; bio">
                  <img src="Assets/speakers/thirumurugan-sivalingam.jpg" alt="Thirumurugan Sivalingam" />
                  <span>Thirumurugan S.</span>
                </button>
              </div>
            </div>
          </div>

          <div className="showcase-right">
            <div>
              <div className="showcase-timeline-header">
                <h4><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> Day 3 Stage Highlights</h4>
                <span className="showcase-timeline-sub">Jio World Centre · Mumbai</span>
              </div>

              <div className="showcase-timeline-list">
                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">09:00 – 09:30</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-welcome"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg><span>Welcome · Opening</span></span>
                    <h5>Welcome &amp; Opening Remarks</h5>
                    <p>Inaugurating Day 3 on Application ERC standards, smart account abstraction, and real-world adoption.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">09:30 – 10:00</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-talk"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span>🪪 Talk · Agent Standards</span></span>
                    <h5>Agent Identity Standards</h5>
                    <p>Prem Makeig on decentralized onchain agent identity, reputation systems, and ERC-8004.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">10:00 – 10:40</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-talk"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span>Talk · Institutional ERCs</span></span>
                    <h5>The Token Is Standardised. The Institution Isn't: Where Should Ethereum Standards Stop?</h5>
                    <p>Dhruvang Choudhari on regulated assets, ERC-3643, ERC-7943, and the protocol boundary.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">11:00 – 11:30</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-talk"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span>Talk · Trustless Systems</span></span>
                    <h5>Building Trustless Systems, Together</h5>
                    <p>Simona Serban on balancing human trust with code trustlessness from lessons building ETHCluj.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">11:30 – 12:10</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-talk"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span>Talk · EIP-7702</span></span>
                    <h5>EIP-7702 in Practice for Dapps</h5>
                    <p>Thirumurugan Sivalingam on safe dapp integration with ERC-5792, ERC-7715, and passkey EOAs.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">12:10 – 13:00</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-ama"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg><span>AMA · Application ERCs</span></span>
                    <h5>EIP Process AMA (Application Standards Focus)</h5>
                    <p>Pooja Ranjan &amp; Jochem Brouwer on drafting ERCs, token interfaces, and wallet RPCs.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">13:00 – 14:00</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-break"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg><span>Break · Networking</span></span>
                    <h5>Lunch &amp; Networking Break</h5>
                    <p>Midday lunch and author office hours with ERC editors.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">15:00 – 16:00</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-break"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg><span>Community Connect</span></span>
                    <h5>EIP Hub Community Connect</h5>
                    <p>Peer networking with smart contract architects, dapp founders, and auditors.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">16:00 – 17:00</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-quiz"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H7.5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H15c-.55 0-1-.45-1-1v-2.34c3.27-.67 6-3.73 6-7.32V4H4v3.34c0 3.59 2.73 6.65 6 7.32z"/></svg><span>Interactive Quiz Game</span></span>
                    <h5>EIP Signal Quiz Game - Applications &amp; ERC Standards</h5>
                    <p>Competitive quiz on ERC-20, ERC-721, ERC-4337, and modern token standards.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">17:00 – 17:10</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-closing"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg><span>Daily Wrap-Up</span></span>
                    <h5>EIP Hub Daily Wrap-Up</h5>
                    <p>Recap and preview of Day 4 Enterprise Readiness &amp; Scale.</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* Slide Day 4 */}
      <div className="day-showcase-slide" data-day="4">
        <div className="day-showcase-grid">
          <div className="showcase-left">
            <div>
              <div className="showcase-header-row">
                <span className="showcase-date-pill"><span className="day-pulse-dot"></span> Day 4 · Nov 6, 2026</span>
                <span className="showcase-track-badge">Enterprise &amp; Scale</span>
              </div>
              <h3 className="showcase-title">Enterprise Readiness &amp; EIPs for Consideration</h3>
              <div className="showcase-motto">Program: Enterprise Readiness &amp; EIPs for Consideration</div>

              <div className="showcase-focus-card">
                <div className="showcase-focus-label">🏢 Core Enterprise Focus</div>
                <p className="showcase-focus-text">Enterprise readiness, institutional use cases, emerging standards, compliance, and EIPs worth watching.</p>
              </div>

              <div className="showcase-topics-grid">
                <div className="showcase-topic-item"><span className="showcase-topic-dot"></span><span>Enterprise readiness &amp; institutional use cases</span></div>
                <div className="showcase-topic-item"><span className="showcase-topic-dot"></span><span>Emerging standards &amp; EIPs worth watching</span></div>
                <div className="showcase-topic-item"><span className="showcase-topic-dot"></span><span>EVVM &amp; institutional privacy rails</span></div>
                <div className="showcase-topic-item"><span className="showcase-topic-dot"></span><span>Enterprise L2 architectures &amp; corporate compliance</span></div>
                <div className="showcase-topic-item" style={{ gridColumn: '1/-1' }}><span className="showcase-topic-dot"></span><span>Institutional roundtables &amp; ecosystem pilots</span></div>
              </div>
            </div>

            <div className="showcase-eco-row">
              <div className="showcase-eco-box">
                <div className="showcase-eco-title">Booth Duty</div>
                <div className="showcase-eco-val">Enterprise Architects &amp; Standards Committee Chairs</div>
              </div>
              <div className="showcase-eco-box">
                <div className="showcase-eco-title">Key Partners</div>
                <div className="showcase-eco-val">Enterprise Ethereum Alliance (EEA)</div>
              </div>
            </div>

            <div className="showcase-speakers-bar">
              <div className="showcase-speakers-bar-title">Scheduled Day 4 Speakers</div>
              <div className="showcase-speakers-chips">
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('abhay')} title="View Abhay Singh's session &amp; bio">
                  <img src="Assets/speakers/abhay-singh.jpg" alt="Abhay Singh" />
                  <span>Abhay Singh</span>
                </button>
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('aditya')} title="View Aditya Kumar's session &amp; bio">
                  <img src="Assets/speakers/aditya-kumar.jpg" alt="Aditya Kumar" />
                  <span>Aditya Kumar</span>
                </button>
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('charchit')} title="View Charchit Kumawat's session &amp; bio">
                  <img src="Assets/speakers/charchit-kumawat.jpg" alt="Charchit Kumawat" />
                  <span>Charchit Kumawat</span>
                </button>
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('dhruv')} title="View Dhruv Gera's session &amp; bio">
                  <img src="Assets/speakers/dhruv-gera.jpg" alt="Dhruv Gera" />
                  <span>Dhruv Gera</span>
                </button>
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('german-evvm')} title="View German Abal (EVVM)'s session &amp; bio">
                  <img src="Assets/speakers/german-abal.jpg" alt="German Abal (EVVM)" />
                  <span>German Abal (EVVM)</span>
                </button>
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('kevin')} title="View Kevin Jones's session &amp; bio">
                  <img src="Assets/speakers/kevin-jones.jpg" alt="Kevin Jones" />
                  <span>Kevin Jones</span>
                </button>
                {/* <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('loring')} title="View Loring Harkness's session &amp; bio">
                  <img src="Assets/speakers/loring-harkness.jpg" alt="Loring Harkness" />
                  <span>Loring Harkness</span>
                </button> */}
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('simona')} title="View Simona Serban's session &amp; bio">
                  <img src="Assets/speakers/simona-serban.jpeg" alt="Simona Serban" />
                  <span>Simona Serban</span>
                </button>
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('yudhishthra')} title="View Yudhishthra's session &amp; bio">
                  <img src="Assets/speakers/yudhishthra.jpg" alt="Yudhishthra" />
                  <span>Yudhishthra</span>
                </button>
              </div>
            </div>
          </div>

          <div className="showcase-right">
            <div>
              <div className="showcase-timeline-header">
                <h4><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> Day 4 Stage Highlights</h4>
                <span className="showcase-timeline-sub">Jio World Centre · Mumbai</span>
              </div>

              <div className="showcase-timeline-list">
                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">09:00 – 09:10</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-welcome"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg><span>Welcome · Remarks</span></span>
                    <h5>Welcome &amp; Opening Remarks</h5>
                    <p>Opening the grand finale day on Enterprise Readiness, Agentic Trust, and Onchain Scaling.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">09:10 – 09:30</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-talk"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span>Talk · DePIN &amp; Telecom</span></span>
                    <h5>Privacy &amp; Human Connectivity</h5>
                    <p>Charchit Kumawat on what it actually takes to run telecom on-chain and user privacy demand.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">09:30 – 09:50</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-talk"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span>Talk · AI &amp; Crypto</span></span>
                    <h5>The Agent Economy: Why AI Needs Crypto Rails</h5>
                    <p>Abhay Singh on real-world perp trading agents, signing, permissions, and financial settlement.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">09:50 – 10:30</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-talk"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span>Talk · Confidential Tokens</span></span>
                    <h5>Are Confidential Tokens Ready for Enterprise Payments?</h5>
                    <p>Dhruv Gera on ERC-7984, encrypted balances, enterprise auditability, and fiat settlement.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">10:30 – 11:10</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-talk"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span>Talk · FX &amp; Liquidity</span></span>
                    <h5>Why Your Local-Currency Stablecoin Has No Market</h5>
                    <p>Yudhishthra on thin markets, spreads, cross-chain liquidity fragmentation, and fixing FX rails.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">11:10 – 12:00</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-talk"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span>Talk · Agent Wallets</span></span>
                    <h5>Bringing a Billion Agents On Ethereum</h5>
                    <p>Kevin Jones on MPC, TEEs, and HSM key management solving the agentic trust problem.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">12:00 – 13:00</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-talk"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span>Talk · Token Architecture</span></span>
                    <h5>Self-Sovereign Tokens: Rethinking Onchain Representation</h5>
                    <p>German Abal on Apeiron Protocol, protected state in ConsoleStorage, and modular execution.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">13:00 – 13:30</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-break"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg><span>Break · Networking</span></span>
                    <h5>Lunch &amp; Networking Break</h5>
                    <p>Catered lunch break with institutional leaders and founders.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">13:30 – 14:00</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-ama"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg><span>AMA · Enterprise EIPs</span></span>
                    <h5>EIP Process AMA (Enterprise Adoption)</h5>
                    <p>Closing AMA with Pooja Ranjan on institutional participation in Ethereum standards.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">14:00 – 15:00</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-quiz"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H7.5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H15c-.55 0-1-.45-1-1v-2.34c3.27-.67 6-3.73 6-7.32V4H4v3.34c0 3.59 2.73 6.65 6 7.32z"/></svg><span>Championship Quiz Game</span></span>
                    <h5>EIP Signal Quiz Game - Enterprise &amp; Adoption</h5>
                    <p>Grand championship quiz covering all 4 days with recognition for top contributors.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">15:00 – 15:30</span>
                  <div className="timeline-item-body">
                    <span className="timeline-format-tag tag-closing"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg><span>Closing Ceremony</span></span>
                    <h5>EIP Hub Wrap-Up &amp; Closing Ceremony</h5>
                    <p>Pooja Ranjan presenting the retrospective on 4 days of standards and future roadmap.</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>

    {/* 4-Day Comparative Grid (Hidden by default; Detailed Explorer is active) */}
    <div className="days-grid" id="days-grid-container" style={{ display: 'none' }}>
      {/* Day 1: EIP Process & General Overview */}
      <div className="day-card day-card-1" id="day-card-1">
        <div className="day-card-top-bar"></div>
        <div className="day-card-body">
          <div className="day-card-header">
            <span className="day-num"><span className="day-pulse-dot"></span> Day 1 · Nov 3, 2026</span>
            <div className="day-icon-pod">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
            </div>
          </div>
          <h3>EIP Process &amp; General Overview</h3>
          <div className="day-sub-label">Program: EIP Process &amp; Community</div>

          <div className="day-focus-box">
            <strong>Core Focus</strong>
            EIP fundamentals, lifecycle, authorship, editors, coordinators, how to propose and contribute.
          </div>

          <ul>
            <li><span className="day-bullet"></span> Intro to EIPs &amp; author lifecycle</li>
            <li><span className="day-bullet"></span> GitHub workflows, editors &amp; coordinators</li>
            <li><span className="day-bullet"></span> Write your first EIP: how to propose &amp; contribute</li>
            <li><span className="day-bullet"></span> Hands-on PR reviews &amp; EIP-1 guidance</li>
            <li><span className="day-bullet"></span> Contributor onboarding &amp; EIP Editor Office Hours</li>
          </ul>

          <div className="day-meta-tags">
            <div className="day-meta-row">
              <span className="day-meta-label">Speakers</span>
              <span className="day-meta-val" style={{ color: '#fbbf24', fontWeight: '600' }}>Jochem Brouwer · Louis Tsai · Matthew Keil · Pooja Ranjan · Rafael Matias · Stefan Starflinger</span>
            </div>
            <div className="day-meta-row">
              <span className="day-meta-label">Booth Duty</span>
              <span className="day-meta-val">EIP Editors, ECH Institute Coordinators &amp; Community Mentors</span>
            </div>
            <div className="day-meta-row">
              <span className="day-meta-label">Partners</span>
              <span className="day-meta-val">ECH Institute, ETHShala &amp; Developer Hubs</span>
            </div>
          </div>
        </div>
        <div className="day-card-footer" onClick={() => window.openDayDetail && window.openDayDetail(1)} role="button" tabIndex={0} title="Click to view detailed Day 1 schedule & timeline">
          <span>Standards Lifecycle · Explore Full Day Schedule</span>
          <span className="day-footer-arrow">➔</span>
        </div>
      </div>

      {/* Day 2: Protocol EIPs & Network Upgrades */}
      <div className="day-card day-card-2" id="day-card-2">
        <div className="day-card-top-bar"></div>
        <div className="day-card-body">
          <div className="day-card-header">
            <span className="day-num"><span className="day-pulse-dot"></span> Day 2 · Nov 4, 2026</span>
            <div className="day-icon-pod">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                <polyline points="2 17 12 22 22 17"/>
                <polyline points="2 12 12 17 22 12"/>
              </svg>
            </div>
          </div>
          <h3>Protocol EIPs &amp; Network Upgrades</h3>
          <div className="day-sub-label">Program: Protocol EIPs &amp; Upgrades</div>

          <div className="day-focus-box">
            <strong>Core Focus</strong>
            Protocol EIPs, network upgrades, Core EIPs, testing, client implementation, AllCoreDevs.
          </div>

          <ul>
            <li><span className="day-bullet"></span> Protocol EIPs &amp; network upgrades pipeline</li>
            <li><span className="day-bullet"></span> Core EIPs, AllCoreDevs consensus deep-dives</li>
            <li><span className="day-bullet"></span> Execution &amp; consensus client implementations</li>
            <li><span className="day-bullet"></span> Testing, fuzzing, devnets &amp; network interop</li>
            <li><span className="day-bullet"></span> Protocol roadmap &amp; upcoming fork readiness</li>
          </ul>

          <div className="day-meta-tags">
            <div className="day-meta-row">
              <span className="day-meta-label">Speakers</span>
              <span className="day-meta-val" style={{ color: '#c7d2fe', fontWeight: '600' }}>Abhimanyu Nag · Gavin Birch · Maria Silva · Rachit Anand Srivastava · Yoon Hyoung Lee</span>
            </div>
            <div className="day-meta-row">
              <span className="day-meta-label">Booth Duty</span>
              <span className="day-meta-val">Client Engineers, Core Researchers &amp; Testnet Devs</span>
            </div>
            <div className="day-meta-row">
              <span className="day-meta-label">Partners</span>
              <span className="day-meta-val">Core Client Teams &amp; Researchers</span>
            </div>
          </div>
        </div>
        <div className="day-card-footer" onClick={() => window.openDayDetail && window.openDayDetail(2)} role="button" tabIndex={0} title="Click to view detailed Day 2 schedule & timeline">
          <span>Consensus &amp; Forks · Explore Full Day Schedule</span>
          <span className="day-footer-arrow">➔</span>
        </div>
      </div>

      {/* Day 3: Application EIPs & Ecosystem Support */}
      <div className="day-card day-card-3" id="day-card-3">
        <div className="day-card-top-bar"></div>
        <div className="day-card-body">
          <div className="day-card-header">
            <span className="day-num"><span className="day-pulse-dot"></span> Day 3 · Nov 5, 2026</span>
            <div className="day-icon-pod">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="6 3 18 3 22 9 12 22 2 9"/>
                <line x1="12" y1="22" x2="12" y2="9"/>
                <line x1="2" y1="9" x2="22" y2="9"/>
              </svg>
            </div>
          </div>
          <h3>Application EIPs &amp; Ecosystem Support</h3>
          <div className="day-sub-label">Program: Application EIPs &amp; Ecosystem Support</div>

          <div className="day-focus-box">
            <strong>Core Focus</strong>
            Application-layer ERCs, standards, tooling, demos, developer experience, real-world adoption.
          </div>

          <ul>
            <li><span className="day-bullet"></span> Application-layer ERCs</li>
            <li><span className="day-bullet"></span> Smart contract tooling &amp; developer experience</li>
            <li><span className="day-bullet"></span> Live interactive demos &amp; ERC review clinics</li>
            <li><span className="day-bullet"></span> Real-world standards adoption &amp; wallet integration</li>
            <li><span className="day-bullet"></span> Account abstraction &amp; application security</li>
          </ul>

          <div className="day-meta-tags">
            <div className="day-meta-row">
              <span className="day-meta-label">Speakers</span>
              <span className="day-meta-val" style={{ color: '#38bdf8', fontWeight: '600' }}>Dhruvang Choudhari · Prem Makeig · Simona Serban · Thirumurugan Sivalingam</span>
            </div>
            <div className="day-meta-row">
              <span className="day-meta-label">Booth Duty</span>
              <span className="day-meta-val">ERC Authors, Tooling Developers &amp; App Architects</span>
            </div>
            <div className="day-meta-row">
              <span className="day-meta-label">Partners</span>
              <span className="day-meta-val">EIPsInsight, EtherWorld &amp; Tooling Platforms</span>
            </div>
          </div>
        </div>
        <div className="day-card-footer" onClick={() => window.openDayDetail && window.openDayDetail(3)} role="button" tabIndex={0} title="Click to view detailed Day 3 schedule & timeline">
          <span>ERCs &amp; Tooling · Explore Full Day Schedule</span>
          <span className="day-footer-arrow">➔</span>
        </div>
      </div>

      {/* Day 4: Enterprise Readiness & EIPs for Consideration */}
      <div className="day-card day-card-4" id="day-card-4">
        <div className="day-card-top-bar"></div>
        <div className="day-card-body">
          <div className="day-card-header">
            <span className="day-num"><span className="day-pulse-dot"></span> Day 4 · Nov 6, 2026</span>
            <div className="day-icon-pod">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
                <line x1="9" y1="22" x2="9" y2="2"/>
                <line x1="15" y1="22" x2="15" y2="2"/>
                <line x1="4" y1="12" x2="20" y2="12"/>
              </svg>
            </div>
          </div>
          <h3>Enterprise Readiness &amp; EIPs for Consideration</h3>
          <div className="day-sub-label">Program: Enterprise Readiness &amp; EIPs for Consideration</div>

          <div className="day-focus-box">
            <strong>Core Focus</strong>
            Enterprise readiness, institutional use cases, emerging standards, and EIPs worth watching.
          </div>

          <ul>
            <li><span className="day-bullet"></span> Enterprise readiness &amp; institutional use cases</li>
            <li><span className="day-bullet"></span> Emerging standards &amp; EIPs worth watching</li>
            <li><span className="day-bullet"></span> EVVM &amp; institutional privacy rails</li>
            <li><span className="day-bullet"></span> Enterprise L2 architectures &amp; corporate compliance</li>
            <li><span className="day-bullet"></span> Institutional roundtables &amp; ecosystem pilots</li>
          </ul>

          <div className="day-meta-tags">
            <div className="day-meta-row">
              <span className="day-meta-label">Speakers</span>
              <span className="day-meta-val" style={{ color: '#6ee7b7', fontWeight: '600' }}>Abhay Singh · Charchit Kumawat · Dhruv Gera · German Abal · Kevin Jones · Yudhishthra</span>
            </div>
            <div className="day-meta-row">
              <span className="day-meta-label">Booth Duty</span>
              <span className="day-meta-val">Enterprise Architects &amp; Standards Committee Chairs</span>
            </div>
            <div className="day-meta-row">
              <span className="day-meta-label">Partners</span>
              <span className="day-meta-val">Enterprise Ethereum Alliance (EEA)</span>
            </div>
          </div>
        </div>
        <div className="day-card-footer" onClick={() => window.openDayDetail && window.openDayDetail(4)} role="button" tabIndex={0} title="Click to view detailed Day 4 schedule & timeline">
          <span>Enterprise &amp; Scale · Explore Full Day Schedule</span>
          <span className="day-footer-arrow">➔</span>
        </div>
      </div>
    </div>

    {/* 4-Day Daily Programming Planning Matrix Table (Shown in Agenda) */}
    {showMatrix ? (
      <div className="matrix-container" id="schedule-matrix">
        <div className="matrix-header">
          <div className="matrix-title-group">
            <h3>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Daily Programming Schedule Matrix
            </h3>
            <p className="matrix-sub">Master schedule overview mapping daily programming tracks, technical focus areas, booth duty, and collaborative ecosystem partners</p>
          </div>
          <div className="matrix-badge">EIP Hub · Devcon 8 Mumbai</div>
        </div>
        <div className="matrix-table-wrap">
          <table className="matrix-table">
            <thead>
              <tr>
                <th style={{ width: '135px' }}>Date</th>
                <th style={{ width: '235px' }}>Program Track</th>
                <th>Focus</th>
                <th style={{ width: '205px' }}>Booth Duty</th>
                <th style={{ width: '195px' }}>Partners</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className="matrix-date-badge m-date-1">Nov 3, 2026</span></td>
                <td className="matrix-theme-cell">
                  <strong>EIP Process &amp; General Overview</strong>
                  <span className="matrix-theme-sub">EIP Process &amp; Community</span>
                </td>
                <td className="matrix-focus-cell">
                  EIP fundamentals, lifecycle, authorship, editors, coordinators, how to propose and contribute
                </td>
                <td className="matrix-duty-cell">
                  EIP Editors, ECH Coordinators &amp; Community Mentors
                </td>
                <td className="matrix-partners-cell">
                  ECH Institute, ETHShala &amp; Developer Hubs
                </td>
              </tr>
              <tr>
                <td><span className="matrix-date-badge m-date-2">Nov 4, 2026</span></td>
                <td className="matrix-theme-cell">
                  <strong>Protocol EIPs &amp; Network Upgrades</strong>
                  <span className="matrix-theme-sub">Protocol EIPs &amp; Upgrades</span>
                </td>
                <td className="matrix-focus-cell">
                  Protocol EIPs, network upgrades, Core EIPs, testing, client implementation, AllCoreDevs
                </td>
                <td className="matrix-duty-cell">
                  Execution &amp; Consensus Client Engineers, Protocol Researchers
                </td>
                <td className="matrix-partners-cell">
                  Core Client Teams &amp; Researchers
                </td>
              </tr>
              <tr>
                <td><span className="matrix-date-badge m-date-3">Nov 5, 2026</span></td>
                <td className="matrix-theme-cell">
                  <strong>Application EIPs &amp; Ecosystem Support</strong>
                  <span className="matrix-theme-sub">Application EIPs &amp; Ecosystem Support</span>
                </td>
                <td className="matrix-focus-cell">
                  Application-layer ERCs, standards, tooling, demos, developer experience, real-world adoption
                </td>
                <td className="matrix-duty-cell">
                  ERC Authors, Tooling Developers &amp; App Architects
                </td>
                <td className="matrix-partners-cell">
                  EIPsInsight, EtherWorld &amp; Tooling Platforms
                </td>
              </tr>
              <tr>
                <td><span className="matrix-date-badge m-date-4">Nov 6, 2026</span></td>
                <td className="matrix-theme-cell">
                  <strong>Enterprise Readiness &amp; EIPs for Consideration</strong>
                  <span className="matrix-theme-sub">Enterprise Readiness &amp; Adoption</span>
                </td>
                <td className="matrix-focus-cell">
                  Enterprise readiness, institutional use cases, emerging standards, EVVM, privacy rails, and EIPs worth watching
                </td>
                <td className="matrix-duty-cell">
                  Enterprise Architects, Institutional Advisors &amp; Standards Chairs
                </td>
                <td className="matrix-partners-cell">
                  Enterprise Ethereum Alliance (EEA)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ) : (
      <div className="home-agenda-cta-strip">
        <div className="home-agenda-cta-text">
          <span className="home-agenda-dot"></span>
          <span>Explore master schedule overview, technical focus breakdown, and community booth duties.</span>
        </div>
        <Link to="/agenda" className="btn-home-agenda-matrix">
          <span>View Master Matrix in Agenda</span>
          <span className="btn-arr">➔</span>
        </Link>
      </div>
    )}
  </div>
</div>

{/* HIGHLIGHTED SECTION: DEVCON STUDENT SUPPORT INITIATIVE */}
    </>
  );
}
