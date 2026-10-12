import React from 'react';

export default function ContactModal() {
  return (
    <>
<div id="contact-modal" className="cmodal-overlay" role="dialog" aria-modal="true" aria-labelledby="cmodal-title" style={{ display: 'none' }}>
  <div className="cmodal-backdrop" onClick={() => window.closeContactModal && window.closeContactModal()}></div>
  <div className="cmodal-panel">
    <button type="button" className="cmodal-close-btn" onClick={() => window.closeContactModal && window.closeContactModal()} aria-label="Close dialog">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>

    <div className="cmodal-header">
      <div className="cmodal-badge">
        <span className="cmodal-badge-dot"></span>
        <span id="cmodal-badge-text">Connect with EIP Hub</span>
      </div>
      <h3 id="cmodal-title" className="cmodal-title">Submit Proposal</h3>
      <p id="cmodal-desc" className="cmodal-desc">Choose how you would like to connect or submit. No email software required!</p>
    </div>

    {/* Active Email Details Info Bar */}
    <div className="cmodal-info-strip">
      <div className="cmodal-info-left">
        <span className="cmodal-info-label">Recipient</span>
        <span className="cmodal-info-email">team@eiphub.xyz</span>
      </div>
      <button type="button" className="cmodal-info-copy-btn" id="cmodal-quick-copy" onClick={() => window.copyContactEmail && window.copyContactEmail('team@eiphub.xyz', this)} title="Copy email address">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        <span>Copy Email</span>
      </button>
    </div>

    {/* Options Stack */}
    <div className="cmodal-options">
      {/* Option 1: Online Form (Primary / highlighted if form exists) */}
      <a id="cmodal-form-btn" href="#" target="_blank" rel="noopener noreferrer" className="cmodal-opt-card cmodal-opt-form" style={{ display: 'none' }}>
        <div className="cmodal-opt-icon cmodal-opt-icon-form">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        </div>
        <div className="cmodal-opt-body">
          <div className="cmodal-opt-tag-row">
            <span className="cmodal-opt-pill">Recommended · Works in Browser</span>
          </div>
          <div className="cmodal-opt-name" id="cmodal-form-name">Open Online Application Form</div>
          <div className="cmodal-opt-detail" id="cmodal-form-detail">Direct submission form · No desktop email app needed</div>
        </div>
        <div className="cmodal-opt-arrow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </div>
      </a>

      {/* Option 2: Gmail (Web Browser) */}
      <a id="cmodal-gmail-btn" href="#" target="_blank" rel="noopener noreferrer" className="cmodal-opt-card cmodal-opt-gmail">
        <div className="cmodal-opt-icon cmodal-opt-icon-gmail">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </div>
        <div className="cmodal-opt-body">
          <div className="cmodal-opt-name">Compose in Gmail (Web Browser)</div>
          <div className="cmodal-opt-detail">Opens mail.google.com in a new tab with recipient &amp; subject prefilled</div>
        </div>
        <div className="cmodal-opt-arrow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </div>
      </a>

      {/* Option 3: Default Mail App (Desktop) */}
      <a id="cmodal-mailto-btn" href="#" className="cmodal-opt-card cmodal-opt-desktop">
        <div className="cmodal-opt-icon cmodal-opt-icon-desktop">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
        </div>
        <div className="cmodal-opt-body">
          <div className="cmodal-opt-name">Open in Default Mail App</div>
          <div className="cmodal-opt-detail">Launches Outlook, Apple Mail, or Thunderbird if installed on your device</div>
        </div>
        <div className="cmodal-opt-arrow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </div>
      </a>

      {/* Option 4: Copy Email */}
      <button type="button" className="cmodal-opt-card cmodal-opt-copy" id="cmodal-copy-btn" onClick={() => window.copyContactEmail && window.copyContactEmail('team@eiphub.xyz', this)}>
        <div className="cmodal-opt-icon cmodal-opt-icon-copy">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        </div>
        <div className="cmodal-opt-body">
          <div className="cmodal-opt-name" id="cmodal-copy-text">Copy Email Address</div>
          <div className="cmodal-opt-detail">team@eiphub.xyz · Paste into Yahoo, Proton, Outlook Web, etc.</div>
        </div>
        <div className="cmodal-opt-arrow">
          <span className="cmodal-copy-badge">Copy</span>
        </div>
      </button>
    </div>

    {/* Footer Note */}
    <div className="cmodal-footer-note">
      <span>💡 If you don't have desktop email software, choose <strong>Online Form</strong> or <strong>Gmail</strong>.</span>
    </div>
  </div>
</div>

{/* SPEAKER DETAIL VIEW MODAL */}
    </>
  );
}
