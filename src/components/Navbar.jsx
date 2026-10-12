import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const handleEmailClick = (e) => {
    if (typeof window !== 'undefined' && window.openContactModal) {
      window.openContactModal('inquiry', e);
    }
  };

  return (
    <nav>
      <Link to="/" className="nav-logo">
        <span className="nav-brand">
          <img src="/Assets/images/eip-wordmark-white.png" alt="EIP" className="brand-text-img nav-brand-text" />
          <img src="/Assets/images/eiphub-white.png" alt="EIP Hub Emblem" className="brand-emblem nav-brand-emblem" />
          <img src="/Assets/images/hub-wordmark-white.png" alt="Hub" className="brand-text-img nav-brand-text" />
        </span>
        <span className="nav-badge"><span className="nav-badge-dot"></span>Devcon 8</span>
      </Link>
      <ul className="nav-links">
        <li><NavLink to="/agenda" className={({ isActive }) => isActive ? 'active' : ''}>Agenda</NavLink></li>
        <li><NavLink to="/speakers" className={({ isActive }) => isActive ? 'active' : ''}>Speakers</NavLink></li>
        <li><NavLink to="/partners" className={({ isActive }) => isActive ? 'active' : ''}>Partners</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
      </ul>
      <div className="nav-actions">
        <a href="mailto:team@eiphub.xyz?subject=EIP%20Hub%20Devcon%208%20Inquiry" onClick={handleEmailClick} className="nav-social-mail" title="Email EIP Hub: team@eiphub.xyz" aria-label="Email team@eiphub.xyz">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
        </a>
        <a href="https://x.com/eiphub" target="_blank" rel="noopener noreferrer" className="nav-social-x" title="Follow @eiphub on X (Twitter)" aria-label="EIP Hub on X">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <a href="https://www.linkedin.com/company/eip-hub/" target="_blank" rel="noopener noreferrer" className="nav-social-li" title="Follow EIP Hub on LinkedIn" aria-label="EIP Hub on LinkedIn">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z"/></svg>
        </a>
        <a href="https://lu.ma/czi58jpe" target="_blank" rel="noopener noreferrer" className="nav-btn">Join ↗</a>
      </div>
    </nav>
  );
}
