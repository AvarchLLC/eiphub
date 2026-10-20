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
        <button type="button" className="view-mode-btn" id="btn-view-explorer" onClick={() => window.switchDayViewMode && window.switchDayViewMode('explorer')}>
          <span>🎛️ Detailed Explorer</span>
        </button>
        <button type="button" className="view-mode-btn active" id="btn-view-grid" onClick={() => window.switchDayViewMode && window.switchDayViewMode('grid')}>
          <span>▦ 4-Day Grid</span>
        </button>
      </div>
    </div>

    {/* Interactive Day Showcase Panel */}
    <div className="day-showcase-panel showcase-day-1" id="day-showcase-panel" style={{ display: 'none' }}>
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
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('pooja')} title="View Pooja Ranjan's session &amp; bio">
                  <img src="Assets/speakers/pooja-ranjan.jpg" alt="Pooja Ranjan" />
                  <span>Pooja Ranjan</span>
                </button>
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('stefan')} title="View Stefan's session &amp; bio">
                  <img src="Assets/speakers/stefan.jpg" alt="Stefan (@stefan_star)" />
                  <span>Stefan</span>
                </button>
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('rafael')} title="View Rafael Matias's session &amp; bio">
                  <img src="Assets/speakers/rafael.jpg" alt="Rafael Matias (@skylenet)" />
                  <span>Rafael Matias</span>
                </button>
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('german-combined')} title="View German Abal's session &amp; bio">
                  <img src="Assets/speakers/german-abal.jpg" alt="German Abal (EVVM)" />
                  <span>German Abal (EVVM)</span>
                </button>
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('jochem')} title="View Jochem Brouwer's session &amp; bio">
                  <img src="Assets/photos/speaker-jochem-brouwer.jpg" alt="Jochem Brouwer" />
                  <span>Jochem Brouwer</span>
                </button>
              </div>
            </div>
          </div>

          <div className="showcase-right">
            <div>
              <div className="showcase-timeline-header">
                <h4><span>📜</span> Day 1 Stage Highlights</h4>
                <span className="showcase-timeline-sub">Jio World Centre · Mumbai</span>
              </div>

              <div className="showcase-timeline-list">
                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">09:30 – 11:00</span>
                  <div className="timeline-item-body">
                    <h5>Intro to EIPs &amp; Author Lifecycle</h5>
                    <p>Foundations of open Ethereum specifications, categories, and EIP-1 structure.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">11:30 – 13:30</span>
                  <div className="timeline-item-body">
                    <h5>Live Proposal Review Clinics</h5>
                    <p>1-on-1 walk-throughs with official EIP Editors on draft formatting and resolving PR feedback.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">14:30 – 16:30</span>
                  <div className="timeline-item-body">
                    <h5>GitHub Workflows &amp; Editor Tooling</h5>
                    <p>Bot automation, markdown linters, and consensus tracking across Ethereum repos.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">17:00 – 18:30</span>
                  <div className="timeline-item-body">
                    <h5>Mentorship Circle &amp; First-Time Authors</h5>
                    <p>Hands-on guidance for new Indian and global developers joining Ethereum protocol governance.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="showcase-action-footer">
              <a href="https://lu.ma/czi58jpe" target="_blank" rel="noopener noreferrer" className="btn-showcase-primary">
                <span>Join on Luma</span>
                <span>↗</span>
              </a>
              <a href="#apply-as-speaker" className="btn-showcase-secondary">Propose a Talk ➔</a>
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
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('abhimanyu')} title="View Abhimanyu Nag's session & bio">
                  <img src="Assets/speakers/abhimanyu-nag.png" alt="Abhimanyu Nag" />
                  <span>Abhimanyu Nag</span>
                </button>
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('justin')} title="View Justin Florentine's session & bio">
                  <img src="Assets/speakers/justin-florentine.jpg" alt="Justin Florentine" />
                  <span>Justin Florentine</span>
                </button>
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('rachit')} title="View Rachit Anand Srivastava's session &amp; bio">
                  <img src="Assets/speakers/rachit-anand-srivastava.png" alt="Rachit Anand Srivastava" />
                  <span>Rachit Anand Srivastava</span>
                </button>
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('gavin')} title="View Gavin Birch's session &amp; bio">
                  <img src="Assets/speakers/gavin-birch.jpg" alt="Gavin Birch" />
                  <span>Gavin Birch</span>
                </button>
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('maria')} title="View Maria Silva's session &amp; bio">
                  <img src="Assets/speakers/maria-silva.jpg" alt="Maria Silva" />
                  <span>Maria Silva</span>
                </button>
              </div>
            </div>
          </div>

          <div className="showcase-right">
            <div>
              <div className="showcase-timeline-header">
                <h4><span>⚡</span> Day 2 Stage Highlights</h4>
                <span className="showcase-timeline-sub">Jio World Centre · Mumbai</span>
              </div>

              <div className="showcase-timeline-list">
                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">10:00 – 10:45</span>
                  <div className="timeline-item-body">
                    <h5>EIP-8184: LUCID Encrypted Mempool</h5>
                    <p>Keynote &amp; Q&amp;A by Justin Florentine (Besu) on encrypted mempools and $600M+ MEV defense.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">11:00 – 11:45</span>
                  <div className="timeline-item-body">
                    <h5>Protocol EIPs &amp; Fork Lifecycle</h5>
                    <p>From Idea to Meta-EIP, CFI, testnet deployment, and mainnet hard fork activation.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">11:30 – 13:30</span>
                  <div className="timeline-item-body">
                    <h5>AllCoreDevs Consensus Roundtable</h5>
                    <p>Client implementations review with Geth, Nethermind, Besu, Prysm &amp; Lighthouse.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">14:30 – 16:30</span>
                  <div className="timeline-item-body">
                    <h5>Testing, Fuzzing &amp; Devnet Interop</h5>
                    <p>Live testing harnesses, devnet shadow forks, and cross-client interoperability clinics.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">17:00 – 18:30</span>
                  <div className="timeline-item-body">
                    <h5>Future Protocol Roadmap Discussion</h5>
                    <p>Open debate on long-term scaling, verkle trees, state expiry, and cryptographic security.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="showcase-action-footer">
              <a href="https://lu.ma/czi58jpe" target="_blank" rel="noopener noreferrer" className="btn-showcase-primary">
                <span>Join on Luma</span>
                <span>↗</span>
              </a>
              <a href="#apply-as-speaker" className="btn-showcase-secondary">Propose a Talk ➔</a>
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
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('daniel')} title="View Dr. Daniel Nagy's session &amp; bio">
                  <img src="Assets/speakers/daniel-nagy.png" alt="Dr. Daniel Nagy" />
                  <span>Dr. Daniel Nagy</span>
                </button>
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('dhruvang')} title="View Dhruvang Choudhari's session &amp; bio">
                  <img src="Assets/speakers/dhruvang-choudhari.jpg" alt="Dhruvang Choudhari" />
                  <span>Dhruvang Choudhari</span>
                </button>
              </div>
            </div>
          </div>

          <div className="showcase-right">
            <div>
              <div className="showcase-timeline-header">
                <h4><span>💎</span> Day 3 Stage Highlights</h4>
                <span className="showcase-timeline-sub">Jio World Centre · Mumbai</span>
              </div>

              <div className="showcase-timeline-list">
                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">09:30 – 11:00</span>
                  <div className="timeline-item-body">
                    <h5>Next-Gen ERC Standards &amp; Account Abstraction</h5>
                    <p>Exploring modern token standards, session keys, and smart contract account interoperability.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">11:30 – 13:30</span>
                  <div className="timeline-item-body">
                    <h5>Live Interactive ERC Review Clinics</h5>
                    <p>Smart contract security feedback, interface audits, and live author consultations.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">14:30 – 16:30</span>
                  <div className="timeline-item-body">
                    <h5>Tooling Showcase &amp; Developer Experience</h5>
                    <p>Live demos of SDKs, linters, test harnesses, and smart contract verification tools.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">17:00 – 18:30</span>
                  <div className="timeline-item-body">
                    <h5>Real-World Standards Adoption Panel</h5>
                    <p>dApp builders and wallet teams discussing production deployment challenges.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="showcase-action-footer">
              <a href="https://lu.ma/czi58jpe" target="_blank" rel="noopener noreferrer" className="btn-showcase-primary">
                <span>Join on Luma</span>
                <span>↗</span>
              </a>
              <a href="#apply-as-speaker" className="btn-showcase-secondary">Propose a Talk ➔</a>
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
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('german-evvm')} title="View German Abal (EVVM)'s session &amp; bio">
                  <img src="Assets/speakers/german-abal.jpg" alt="German Abal (EVVM)" />
                  <span>German Abal (EVVM)</span>
                </button>
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('charchit')} title="View Charchit Kumawat's session &amp; bio">
                  <img src="Assets/speakers/charchit-kumawat.jpg" alt="Charchit Kumawat" />
                  <span>Charchit Kumawat</span>
                </button>
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('abhay')} title="View Abhay Singh's session &amp; bio">
                  <img src="Assets/speakers/abhay-singh.jpg" alt="Abhay Singh" />
                  <span>Abhay Singh</span>
                </button>
                {/* <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('loring')} title="View Loring Harkness's session &amp; bio">
                  <img src="Assets/speakers/loring-harkness.jpg" alt="Loring Harkness" />
                  <span>Loring Harkness</span>
                </button> */}
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('yudhishthra')} title="View Yudhishthra's session &amp; bio">
                  <img src="Assets/speakers/yudhishthra.jpg" alt="Yudhishthra" />
                  <span>Yudhishthra</span>
                </button>
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('dhruv')} title="View Dhruv Gera's session &amp; bio">
                  <img src="Assets/speakers/dhruv-gera.jpg" alt="Dhruv Gera" />
                  <span>Dhruv Gera</span>
                </button>
                <button type="button" className="spk-day-chip" onClick={() => window.openSpeakerModal && window.openSpeakerModal('simona')} title="View Simona Serban's session &amp; bio">
                  <img src="Assets/speakers/simona-serban.jpeg" alt="Simona Serban" />
                  <span>Simona Serban</span>
                </button>
              </div>
            </div>
          </div>

          <div className="showcase-right">
            <div>
              <div className="showcase-timeline-header">
                <h4><span>🏢</span> Day 4 Stage Highlights</h4>
                <span className="showcase-timeline-sub">Jio World Centre · Mumbai</span>
              </div>

              <div className="showcase-timeline-list">
                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">09:30 – 11:00</span>
                  <div className="timeline-item-body">
                    <h5>Enterprise Standards &amp; Regulatory Fit</h5>
                    <p>Bridging open Ethereum specifications with corporate auditability, security, and compliance.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">11:30 – 13:30</span>
                  <div className="timeline-item-body">
                    <h5>From Proposal to Production Adoption</h5>
                    <p>Lessons learned scaling standards into high-throughput enterprise infrastructure.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">14:30 – 16:30</span>
                  <div className="timeline-item-body">
                    <h5>Institutional Layer 2 &amp; Privacy Architectures</h5>
                    <p>Privacy-preserving standards, rollup interoperability, and consortium testnets.</p>
                  </div>
                </div>

                <div className="showcase-timeline-item">
                  <span className="timeline-time-badge">17:00 – 18:30</span>
                  <div className="timeline-item-body">
                    <h5>EIP Hub Devcon 8 Closing Roundtable</h5>
                    <p>Community retrospective, working group mandates, and next steps for Ethereum standards.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="showcase-action-footer">
              <a href="https://lu.ma/czi58jpe" target="_blank" rel="noopener noreferrer" className="btn-showcase-primary">
                <span>Join on Luma</span>
                <span>↗</span>
              </a>
              <a href="#apply-as-speaker" className="btn-showcase-secondary">Propose a Talk ➔</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* 4-Day Comparative Grid (Balanced 2x2 Layout - Default View) */}
    <div className="days-grid" id="days-grid-container">
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
              <span className="day-meta-val" style={{ color: '#fbbf24', fontWeight: '600' }}>Pooja Ranjan · Stefan · Rafael Matias · German Abal · Jochem Brouwer</span>
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
              <span className="day-meta-val" style={{ color: '#c7d2fe', fontWeight: '600' }}>Justin Florentine · Abhimanyu Nag · Rachit Anand Srivastava · Gavin Birch · Maria Silva</span>
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
              <span className="day-meta-val" style={{ color: '#38bdf8', fontWeight: '600' }}>Dr. Daniel Nagy · Dhruvang Choudhari · Application ERC Authors</span>
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
              <span className="day-meta-val" style={{ color: '#6ee7b7', fontWeight: '600' }}>German Abal (EVVM) · Charchit Kumawat · Abhay Singh · Yudhishthra · Dhruv Gera · Simona Serban</span>
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
