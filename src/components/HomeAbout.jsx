import React from 'react';

export default function HomeAbout() {
  return (
    <div className="about-section-bg" id="about-intro">
      <div className="wrap">
        <div className="sec-eyebrow">About the EIP Hub</div>
        <div className="about-title">
          <span className="eip-word"><span className="eip-cap cap-e">E</span><span className="eip-rest">xplore</span></span>
          <span className="eip-dot">·</span>
          <span className="eip-word"><span className="eip-cap cap-i">I</span><span className="eip-rest">nnovate</span></span>
          <span className="eip-dot">·</span>
          <span className="eip-word"><span className="eip-cap cap-p">P</span><span className="eip-rest">articipate</span></span>
        </div>
        <p className="sec-body">
          The <strong>EIP Hub at Devcon 8 India</strong> is the go-to collaborative space for existing and aspiring Ethereum contributors — bringing the research-to-reality pipeline to Mumbai. Across four days, it covers the <strong>EIP Process</strong>, <strong>Protocol EIPs</strong>, <strong>Application ERCs</strong>, and <strong>Enterprise implementation</strong> for broader adoption.
        </p>

        {/* Why Devcon 8 India & Scale Callout (Flagship Devcon 8 India Feature Card) */}
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
            Why Devcon 8 India <span style={{ opacity: '0.4', margin: '0 4px' }}>·</span> <span className="india-title-accent">Where Scale Meets Standards</span>
          </h3>

          <p className="summit-india-desc">
            India possesses the world’s fastest-growing open-source engineering community and leads global crypto developer onboarding. The <strong>EIP Hub at Devcon 8 India</strong> bridges this unstoppable momentum with protocol governance ensuring Indian developers are not merely consumers of Ethereum technology, but active authors and stewards of its future.
          </p>

          {/* 3 Highlights Row */}
          <div className="india-highlights-row">
            <div className="india-highlight-chip india-chip-1">
              <div className="india-chip-icon">⚡</div>
              <div className="india-chip-info">
                <strong>#1 Globally</strong>
                <span>Crypto Developer Onboarding</span>
              </div>
            </div>
            <div className="india-highlight-chip india-chip-2">
              <div className="india-chip-icon">🌐</div>
              <div className="india-chip-info">
                <strong>Fastest Growing</strong>
                <span>Open-Source Contributor Pool</span>
              </div>
            </div>
            <div className="india-highlight-chip india-chip-3">
              <div className="india-chip-icon">🚀</div>
              <div className="india-chip-info">
                <strong>4 Dedicated Days</strong>
                <span>Direct Research-to-Reality Pipeline</span>
              </div>
            </div>
          </div>

          {/* India Card Action Bar */}
          <div className="summit-india-actionbar">
            <div className="india-action-note">
              <span className="india-action-dot"></span>
              <span>Community Hub Stage &amp; Office Hours · Open to all Devcon 8 Ticket Holders</span>
            </div>
            <a href="https://lu.ma/czi58jpe" target="_blank" rel="noopener noreferrer" className="btn-india-cta">
              <span>Join on Luma</span>
              <span className="btn-arr">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
