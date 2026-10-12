import React from 'react';

export default function Footer() {
  const handleEmailClick = (e) => {
    if (typeof window !== 'undefined' && window.openContactModal) {
      window.openContactModal('inquiry', e);
    }
  };

  return (
    <footer className="site-footer">
      <div className="foot-left">
        <div className="foot-brand" aria-label="EIP Hub">
          <img src="/Assets/images/eip-wordmark-white.png" alt="EIP" className="brand-text-img foot-brand-text" />
          <img src="/Assets/images/eiphub-white.png" alt="EIP Hub Emblem" className="brand-emblem foot-brand-emblem" />
          <img src="/Assets/images/hub-wordmark-white.png" alt="Hub" className="brand-text-img foot-brand-text" />
        </div>
        <span className="foot-tagline">Devcon 8 India Collaborative Space · Mumbai</span>
      </div>
      <div className="foot-right">
        <a href="https://x.com/eiphub" target="_blank" rel="noopener noreferrer" className="foot-x-link" title="Follow @eiphub on X (Twitter)">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          <span>@eiphub</span>
        </a>
        <a href="https://www.linkedin.com/company/eip-hub/" target="_blank" rel="noopener noreferrer" className="foot-linkedin-link" title="Follow EIP Hub on LinkedIn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z"/>
          </svg>
          <span>LinkedIn</span>
        </a>
        <a href="mailto:team@eiphub.xyz" onClick={handleEmailClick} className="foot-mail-link" title="Contact EIP Hub: team@eiphub.xyz">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
          <span>team@eiphub.xyz</span>
        </a>
      </div>
    </footer>
  );
}
