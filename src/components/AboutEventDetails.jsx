import React from 'react';

export default function AboutEventDetails() {
  return (
    <div className="about-section-bg" id="about-details">
      <div className="wrap">
        {/* What to Expect at the Event: From Idea to Open Standard */}
        <div className="summit-activities-section" id="summit-activities" style={{ marginTop: '0', paddingTop: '0' }}>
          <div className="summit-block-header">
            <div className="sec-eyebrow" style={{ marginBottom: '8px' }}>Interactive On-Site Activities · Devcon 8 Mumbai</div>
            <h2 className="sec-title" style={{ marginBottom: '14px' }}>What to Expect at the Event: From Idea to Open Standard</h2>
            <p className="sec-body" style={{ margin: '0 auto 36px', textAlign: 'left' }}>
              Verified against the official Ethereum Foundation Devcon 8 Community Hub specification: 6 dedicated collaborative spaces uniting researchers, client teams, editors, and application authors. Built on the proven collaborative model established at the inaugural <a href="https://lu.ma/5lwboseu" target="_blank" rel="noopener noreferrer" style={{ color: '#fbbf24', textDecoration: 'none', fontWeight: '700', borderBottom: '1px dashed rgba(245,158,11,0.6)' }}>EIP Summit on Luma ↗</a>.
            </p>
          </div>

          <div className="summit-act-grid">
            {/* Activity 1 */}
            <div className="summit-act-card">
              <div className="summit-act-top">
                <span className="summit-act-num">Hub Space · Editorial</span>
                <span className="summit-act-icon">✍️</span>
              </div>
              <h5 className="summit-act-title">EIP Editor Office &amp; Proposal Clinics</h5>
              <p className="summit-act-desc">
                Hands-on 1-on-1 author triage with official EIP Editors: review proposal lifecycle (Status vs. Stage), abstract formatting, EIP-1 rules, GitHub workflows, and resolve pull request comments live on laptops.
              </p>
              <div className="summit-act-tags">
                <span className="summit-act-chip">#MeetTheEditors</span>
                <span className="summit-act-chip">#EIP1</span>
                <span className="summit-act-chip">#StatusVsStage</span>
                <span className="summit-act-chip">#LivePRTriage</span>
              </div>
            </div>

            {/* Activity 2 */}
            <div className="summit-act-card">
              <div className="summit-act-top">
                <span className="summit-act-num">Hub Space · Protocol</span>
                <span className="summit-act-icon">⚡</span>
              </div>
              <h5 className="summit-act-title">Protocol Collaboration &amp; Upgrades Room</h5>
              <p className="summit-act-desc">
                Core developers, researchers, and client teams (Geth, Nethermind, Besu, Erigon, Prysm, Lighthouse, Teku) coordinate upcoming network upgrades including <strong>Glamsterdam &amp; Hegotá</strong>, Meta EIPs, devnets, and client interoperability.
              </p>
              <div className="summit-act-tags">
                <span className="summit-act-chip">#Glamsterdam</span>
                <span className="summit-act-chip">#Hegotá</span>
                <span className="summit-act-chip">#MetaEIPs</span>
                <span className="summit-act-chip">#ClientInterop</span>
              </div>
            </div>

            {/* Activity 3 */}
            <div className="summit-act-card">
              <div className="summit-act-top">
                <span className="summit-act-num">Hub Space · Sessions</span>
                <span className="summit-act-icon">🎙️</span>
              </div>
              <h5 className="summit-act-title">Talks &amp; Workshops</h5>
              <p className="summit-act-desc">
                Curated talks, hands-on workshops, and live demos spanning the <strong>EIP Process</strong>, <strong>Protocol EIPs</strong>, <strong>Application ERCs</strong>, and <strong>Enterprise adoption</strong> — with open Q&amp;A and structured collaboration time built into every session.
              </p>
              <div className="summit-act-tags">
                <span className="summit-act-chip">#Talks</span>
                <span className="summit-act-chip">#Workshops</span>
                <span className="summit-act-chip">#LiveDemos</span>
                <span className="summit-act-chip">#OpenQandA</span>
              </div>
            </div>

            {/* Activity 4 */}
            <div className="summit-act-card">
              <div className="summit-act-top">
                <span className="summit-act-num">Hub Space · Applications</span>
                <span className="summit-act-icon">🛠️</span>
              </div>
              <h5 className="summit-act-title">ERC Showcase &amp; Application Standards Sandbox</h5>
              <p className="summit-act-desc">
                Deep-dives and live review clinics for the latest application standards including <strong>ERC-7935</strong>, <strong>ERC-8004</strong>, Chain ID standards, smart contract account wallets, security audits, and reference implementations.
              </p>
              <div className="summit-act-tags">
                <span className="summit-act-chip">#ERC7935</span>
                <span className="summit-act-chip">#ERC8004</span>
                <span className="summit-act-chip">#WalletStandards</span>
                <span className="summit-act-chip">#SecurityClinics</span>
              </div>
            </div>

            {/* Activity 5 */}
            <div className="summit-act-card">
              <div className="summit-act-top">
                <span className="summit-act-num">Hub Space · Tooling &amp; Data</span>
                <span className="summit-act-icon">📊</span>
              </div>
              <h5 className="summit-act-title">EIPsInsight Live Analytics &amp; Dashboards</h5>
              <p className="summit-act-desc">
                Continuous large-display monitoring screens demonstrating live <strong>EIPsInsight</strong> governance analytics: Upgrade Dashboard, Meta EIP status, Protocol roadmap, stagnant drafts, and visual EIP lifecycle insights.
              </p>
              <div className="summit-act-tags">
                <span className="summit-act-chip">#EIPsInsight</span>
                <span className="summit-act-chip">#UpgradeDashboard</span>
                <span className="summit-act-chip">#ProtocolRoadmap</span>
                <span className="summit-act-chip">#LifecycleAnalytics</span>
              </div>
            </div>

            {/* Activity 6 */}
            <div className="summit-act-card">
              <div className="summit-act-top">
                <span className="summit-act-num">Hub Space · Enterprise</span>
                <span className="summit-act-icon">🏛️</span>
              </div>
              <h5 className="summit-act-title">Enterprise Standards Forum &amp; EEA Roundtables</h5>
              <p className="summit-act-desc">
                Collaborative sessions co-hosted with the <strong>Enterprise Ethereum Alliance (EEA)</strong> and industry leaders: real-world production implementations, regulatory compliance, institutional Layer 2 architecture, and standards adoption.
              </p>
              <div className="summit-act-tags">
                <span className="summit-act-chip">#EEA</span>
                <span className="summit-act-chip">#EnterpriseEthereum</span>
                <span className="summit-act-chip">#InstitutionalReadiness</span>
                <span className="summit-act-chip">#L2Architecture</span>
              </div>
            </div>
          </div>

          {/* Verified Proposal Citation Badge */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '28px', marginBottom: '48px' }}>
            <div className="summit-source-note">
              <span className="source-dot"></span>
              <span>Verified specification from official proposal:</span>
              <a href="https://forum.devcon.org/t/devcon-8-india-community-hub-eip-hub/8747" target="_blank" rel="noopener noreferrer">Devcon 8 India Community Hub: EIP Hub (Pooja Ranjan · forum.devcon.org) ↗</a>
            </div>
          </div>
        </div>

        {/* Community Booth: Upcoming Activities for Devcon 8 */}
        <div className="summit-gallery-section" id="community-booth" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '42px' }}>
          <div className="summit-slider-header">
            <div className="summit-slider-title-col">
              <div className="sec-eyebrow" style={{ marginBottom: '8px' }}>Interactive Space · Community Booth #29 · Devcon 8 Mumbai</div>
              <h3 className="summit-block-title community-booth-title">Community Booth: Upcoming Activities for Devcon 8</h3>
              <p className="summit-block-sub">Step inside the official EIP Hub Community Booth at Devcon 8 India (Jio World Centre, Mumbai, Nov 3–6, 2026). Experience hands-on protocol activities across all four days: 1-on-1 EIP Editor triage clinics, whiteboard drafting sessions, client interop demos, live analytics dashboards, and direct author mentorship.</p>
            </div>
            <div className="summit-slider-nav-controls">
              <div className="summit-slider-status">
                <span className="summit-slider-status-dot"></span>
                <span className="summit-slider-status-text">Upcoming Booth Activities · Devcon 8</span>
              </div>
              <div className="summit-slider-arrows">
                <button className="summit-slider-btn prev-btn" id="summit-prev-btn" aria-label="Previous Slide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button className="summit-slider-btn next-btn" id="summit-next-btn" aria-label="Next Slide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Slider Viewport & Track */}
          <div className="summit-slider-container" id="summit-slider-container">
            <div className="summit-slider-track" id="summit-slider-track">
              {/* Slide 1 */}
              <div className="summit-slide-card">
                <div className="summit-slide-img-wrap">
                  <img src="Assets/photos/summit-group-photo.webp" alt="Devcon 8 Community Booth Gathering" loading="eager" decoding="async" draggable="false" />
                  <div className="summit-slide-overlay">
                    <span className="summit-slide-tag">🤝 Community Booth Gathering</span>
                  </div>
                </div>
                <div className="summit-slide-body">
                  <h5 className="summit-slide-title">All-Ecosystem Standards Gathering</h5>
                  <p className="summit-slide-desc">EIP authors, core protocol researchers, client implementers, and first-time contributors uniting in person at the Community Booth across all four days of Devcon 8.</p>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="summit-slide-card">
                <div className="summit-slide-img-wrap">
                  <img src="Assets/photos/summit-workshop.jpg" alt="Live EIP Drafting & Whiteboard Clinics" loading="eager" decoding="async" draggable="false" />
                  <div className="summit-slide-overlay">
                    <span className="summit-slide-tag">✍️ Live Drafting Clinics</span>
                  </div>
                </div>
                <div className="summit-slide-body">
                  <h5 className="summit-slide-title">EIP Drafting &amp; Whiteboard Clinics</h5>
                  <p className="summit-slide-desc">Collaborate 1-on-1 with seasoned authors and mentors at the booth whiteboard: formulate problem statements, draft specifications, and submit pull requests live.</p>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="summit-slide-card">
                <div className="summit-slide-img-wrap">
                  <img src="Assets/photos/summit-editor-clinic.jpeg" alt="Live EIP Editor Office & PR Triage" loading="lazy" draggable="false" />
                  <div className="summit-slide-overlay">
                    <span className="summit-slide-tag">⚡ Editor Office Hours</span>
                  </div>
                </div>
                <div className="summit-slide-body">
                  <h5 className="summit-slide-title">Live EIP Editor Office &amp; PR Triage</h5>
                  <p className="summit-slide-desc">Bring your laptop to sit directly with official EIP Editors: review proposal lifecycle status, resolve pull request review comments, and get immediate feedback on EIP-1 compliance.</p>
                </div>
              </div>

              {/* Slide 4 */}
              <div className="summit-slide-card">
                <div className="summit-slide-img-wrap">
                  <img src="Assets/photos/summit-standards-booth.jpeg" alt="ECH Institute Standards & Onboarding Booth #29" loading="lazy" draggable="false" />
                  <div className="summit-slide-overlay">
                    <span className="summit-slide-tag">🏛️ Community Booth #29</span>
                  </div>
                </div>
                <div className="summit-slide-body">
                  <h5 className="summit-slide-title">ECH Institute Standards &amp; Onboarding Booth</h5>
                  <p className="summit-slide-desc">Your walk-in headquarters on the main Devcon 8 floor: pick up printed EIP cheatsheets, author onboarding roadmaps, contributor stickers, and direct guidance for developers across India and APAC.</p>
                </div>
              </div>

              {/* Slide 5 */}
              <div className="summit-slide-card">
                <div className="summit-slide-img-wrap">
                  <img src="Assets/photos/summit-client-devs.jpeg" alt="Client Implementers & Protocol Devs" loading="lazy" draggable="false" />
                  <div className="summit-slide-overlay">
                    <span className="summit-slide-tag">👥 Client Interop Room</span>
                  </div>
                </div>
                <div className="summit-slide-body">
                  <h5 className="summit-slide-title">Client Implementers &amp; Protocol Upgrades Room</h5>
                  <p className="summit-slide-desc">Direct interaction with execution and consensus layer client teams (Geth, Nethermind, Besu, Prysm, Lighthouse) discussing devnet readiness, test vectors, and network upgrades.</p>
                </div>
              </div>

              {/* Slide 6 */}
              <div className="summit-slide-card">
                <div className="summit-slide-img-wrap">
                  <img src="Assets/photos/summit-enterprise-scale.webp" alt="Enterprise Standards & Institutional Roundtables" loading="lazy" draggable="false" />
                  <div className="summit-slide-overlay">
                    <span className="summit-slide-tag">🌐 Enterprise Standards</span>
                  </div>
                </div>
                <div className="summit-slide-body">
                  <h5 className="summit-slide-title">Enterprise Standards &amp; Institutional Roundtables</h5>
                  <p className="summit-slide-desc">Collaborative roundtables co-hosted with the Enterprise Ethereum Alliance (EEA): real-world Layer-2 rollups, account abstraction, institutional compliance, and production standards.</p>
                </div>
              </div>

              {/* Slide 7 */}
              <div className="summit-slide-card">
                <div className="summit-slide-img-wrap">
                  <img src="Assets/photos/summit-mainstage-governance.webp" alt="Community Lightning Talks & Governance Panels" loading="lazy" draggable="false" />
                  <div className="summit-slide-overlay">
                    <span className="summit-slide-tag">🎙️ Lightning Talks &amp; Panels</span>
                  </div>
                </div>
                <div className="summit-slide-body">
                  <h5 className="summit-slide-title">Community Lightning Talks &amp; Governance Panels</h5>
                  <p className="summit-slide-desc">Fast-paced 15-minute presentations, author tool demos, and open protocol governance debates breaking down the latest EIPs and ERCs live at the booth stage.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Custom Glowing Pagination Dots */}
          <div className="summit-slider-pagination" id="summit-slider-pagination"></div>
        </div>
      </div>
    </div>
  );
}
