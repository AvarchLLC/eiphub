import React from 'react';
import { Link } from 'react-router-dom';

const EIP_PILLARS = [
  {
    id: 'process',
    icon: '✍️',
    variant: 'pillar-amber',
    badge: 'Governance & Editorial',
    title: 'EIP Process & Proposal Clinics',
    desc: 'Hands-on 1-on-1 author triage with official EIP Editors. Master proposal lifecycles (Draft → Last Call → Final), EIP-1 rules, abstract formatting, and live GitHub PR reviews.',
    tags: ['#MeetTheEditors', '#EIP1Rules', '#StatusVsStage', '#LivePRTriage']
  },
  {
    id: 'protocol',
    icon: '⚡',
    variant: 'pillar-purple',
    badge: 'Core Protocol & Upgrades',
    title: 'Protocol EIPs & Client Interop',
    desc: 'Direct collaboration with execution and consensus client teams (Geth, Nethermind, Besu, Prysm, Lighthouse) on Glamsterdam, Hegotá, Meta EIPs, and devnet readiness.',
    tags: ['#Glamsterdam', '#Hegotá', '#MetaEIPs', '#ClientInterop']
  },
  {
    id: 'ercs',
    icon: '🛠️',
    variant: 'pillar-cyan',
    badge: 'Application Layer',
    title: 'Application ERCs & Sandboxes',
    desc: 'Deep-dives into modern smart contract account interfaces, token standards, wallet conventions, and real-world reference implementations including ERC-7935 & ERC-8004.',
    tags: ['#ERC7935', '#ERC8004', '#SmartAccounts', '#DevSandbox']
  },
  {
    id: 'enterprise',
    icon: '🏛️',
    variant: 'pillar-emerald',
    badge: 'Enterprise & Adoption',
    title: 'Enterprise Standards & Roundtables',
    desc: 'Roundtables co-hosted with the Enterprise Ethereum Alliance (EEA): institutional Layer-2 architectures, regulatory compliance, account abstraction, and enterprise deployment.',
    tags: ['#EEA', '#EnterpriseEthereum', '#InstitutionalL2', '#Adoption']
  }
];

const HUB_SPACES = [
  { icon: '✍️', name: 'Editor Office & Proposal Clinics' },
  { icon: '⚡', name: 'Protocol Collaboration Room' },
  { icon: '🎙️', name: 'Lightning Talks & Workshops' },
  { icon: '🛠️', name: 'ERC Application Sandbox' },
  { icon: '📊', name: 'EIPsInsight Live Dashboards' },
  { icon: '🤝', name: 'Community Booth #29' }
];

export default function HomeAbout() {
  return (
    <div className="about-section-bg" id="about-intro">
      <div className="wrap">
        <div className="sec-eyebrow">About the EIP Hub · Devcon 8 Mumbai</div>
        <div className="about-title">
          <span className="eip-word"><span className="eip-cap cap-e">E</span><span className="eip-rest">xplore</span></span>
          <span className="eip-dot">·</span>
          <span className="eip-word"><span className="eip-cap cap-i">I</span><span className="eip-rest">nnovate</span></span>
          <span className="eip-dot">·</span>
          <span className="eip-word"><span className="eip-cap cap-p">P</span><span className="eip-rest">articipate</span></span>
        </div>
        <p className="sec-body">
          The <strong>EIP Hub at Devcon 8 India</strong> is the premier open-collaboration space for existing and aspiring Ethereum contributors — bridging the research-to-reality pipeline in Mumbai. Across all four days, the Hub unites researchers, client implementers, EIP editors, and application builders to shape the future of open Ethereum standards.
        </p>

        {/* 4 Foundational Pillars Grid */}
        <div className="home-about-pillars-wrap">
          <div className="home-about-pillars-header">
            <div className="home-about-pillars-eyebrow">
              <span>✦</span> Core Focus Areas · 4 Foundational Pillars
            </div>
            <h3 className="home-about-pillars-title">Everything Covered at the EIP Hub</h3>
          </div>

          <div className="home-about-pillars-grid">
            {EIP_PILLARS.map((p) => (
              <div key={p.id} className={`home-about-pillar-card ${p.variant}`}>
                <div className="home-about-pillar-top">
                  <span className="home-about-pillar-badge">{p.badge}</span>
                  <span className="home-about-pillar-icon">{p.icon}</span>
                </div>
                <h4 className="home-about-pillar-title">{p.title}</h4>
                <p className="home-about-pillar-desc">{p.desc}</p>
                <div className="home-about-pillar-tags">
                  {p.tags.map((t, idx) => (
                    <span key={idx} className="home-about-pillar-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flagship Devcon 8 India Feature Card */}
        <div className="summit-india-callout">
          <div className="summit-india-topbar">
            <div className="india-flag-pod" title="Devcon 8 India · Mumbai">
              <svg width="26" height="18" viewBox="0 0 30 20" fill="none" className="india-flag-svg" aria-label="Indian Flag">
                <rect width="30" height="20" rx="3" fill="#121626"/>
                <rect width="30" height="6.66" fill="#f59e0b"/>
                <rect y="6.66" width="30" height="6.66" fill="#ffffff"/>
                <rect y="13.33" width="30" height="6.66" fill="#10b981"/>
                <circle cx="15" cy="10" r="2.4" stroke="#1e3a8a" strokeWidth="0.8" fill="none"/>
                <circle cx="15" cy="10" r="0.6" fill="#1e3a8a"/>
              </svg>
              <span className="india-flag-label">Devcon 8 Host Nation</span>
            </div>
            <div className="india-venue-badge">
              <span className="india-venue-dot"></span>
              <span>Jio World Centre, Mumbai · Nov 3–6, 2026</span>
            </div>
          </div>

          <h3 className="summit-india-title">
            EIP Hub at Devcon 8 India <span style={{ opacity: '0.4', margin: '0 4px' }}>·</span> <span className="india-title-accent">Where Scale Meets Standards</span>
          </h3>

          <p className="summit-india-desc">
            India possesses the world’s fastest-growing open-source engineering community and leads global crypto developer onboarding. The <strong>EIP Hub at Devcon 8 India</strong> directly bridges this unstoppable builder momentum with Ethereum protocol governance — ensuring developers are not merely passive users of Ethereum, but active authors, editors, and stewards of its decentralized future.
          </p>

          {/* 6 Interactive Spaces Strip */}
          <div className="home-about-spaces-row">
            <div className="home-about-spaces-header">
              <span>Interactive Spaces Open Across All 4 Days</span>
            </div>
            <div className="home-about-spaces-pills">
              {HUB_SPACES.map((space, idx) => (
                <span key={idx} className="home-about-space-chip">
                  <span>{space.icon}</span>
                  <span>{space.name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* 3 Highlights Row */}
          <div className="india-highlights-row">
            <div className="india-highlight-chip india-chip-1">
              <div className="india-chip-icon">⚡</div>
              <div className="india-chip-info">
                <strong>#1 Globally</strong>
                <span>Crypto Developer Onboarding Hub</span>
              </div>
            </div>
            <div className="india-highlight-chip india-chip-2">
              <div className="india-chip-icon">🌐</div>
              <div className="india-chip-info">
                <strong>Direct Bridge</strong>
                <span>Research-to-Reality Pipeline</span>
              </div>
            </div>
            <div className="india-highlight-chip india-chip-3">
              <div className="india-chip-icon">🚀</div>
              <div className="india-chip-info">
                <strong>4 Dedicated Days</strong>
                <span>Open to All Devcon 8 Attendees</span>
              </div>
            </div>
          </div>

          {/* India Card Action Bar */}
          <div className="summit-india-actionbar">
            <div className="india-action-note">
              <span className="india-action-dot"></span>
              <span>Community Hub Stage &amp; Office Hours · Free for all Devcon 8 Ticket Holders</span>
            </div>
            <div className="summit-india-actions-group">
              <Link to="/about" className="btn-india-outline">
                <span>Explore Details &amp; Spaces</span>
                <span>→</span>
              </Link>
              <a href="https://lu.ma/czi58jpe" target="_blank" rel="noopener noreferrer" className="btn-india-cta">
                <span>Join on Luma</span>
                <span className="btn-arr">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
