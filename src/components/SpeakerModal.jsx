import React from 'react';

export default function SpeakerModal() {
  return (
    <>
<div id="speaker-detail-modal" className="cmodal-overlay" role="dialog" aria-modal="true" aria-labelledby="spk-modal-name" style={{ display: 'none' }}>
  <div className="cmodal-backdrop" onClick={() => window.closeSpeakerModal && window.closeSpeakerModal()}></div>
  <div className="cmodal-panel spk-detail-panel">
    <button type="button" className="cmodal-close-btn" onClick={() => window.closeSpeakerModal && window.closeSpeakerModal()} aria-label="Close speaker details dialog">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>

    <div className="spk-modal-scrollable">
      {/* Speaker Header */}
      <div className="spk-modal-header">
        <div className="spk-modal-avatar-pod">
          <img id="spk-modal-avatar" src="" alt="" className="spk-modal-avatar-img" />
        </div>
        <div className="spk-modal-identity">
          <div className="spk-modal-track-badge" id="spk-modal-track">Day 2 · Nov 4 · Protocol EIPs &amp; Upgrades</div>
          <h3 id="spk-modal-name" className="spk-modal-name">Speaker Name</h3>
          <div className="spk-modal-org-pill" id="spk-modal-org">Organization</div>
          <div className="spk-modal-role" id="spk-modal-role">Designation / Role</div>
          <div className="spk-modal-socials" id="spk-modal-socials">
            {/* Dynamic Social Links */}
          </div>
        </div>
      </div>

      {/* Session Talk Details Box */}
      <div className="spk-modal-talk-card">
        <div className="spk-talk-meta-row">
          <span className="spk-talk-format-badge" id="spk-modal-format">⚡ Tech Deep-Dive</span>
          <span className="spk-talk-time-status" id="spk-modal-time">⏱️ Start Time: TBA (Agenda finalization in progress)</span>
        </div>
        <h4 className="spk-talk-title" id="spk-modal-talk-title">Talk Title</h4>
        <div className="spk-talk-desc-wrap">
          <div className="spk-section-label">Session Overview</div>
          <p className="spk-talk-desc" id="spk-modal-talk-desc"></p>
        </div>

        <div className="spk-takeaways-wrap" id="spk-modal-takeaways-box" style={{ display: 'none' }}>
          <div className="spk-section-label">Key Takeaways &amp; Discussion Points</div>
          <ul className="spk-takeaways-list" id="spk-modal-takeaways-list"></ul>
        </div>

        <div className="spk-rel-eip-row" id="spk-modal-rel-eip-box" style={{ display: 'none' }}>
          <span className="spk-rel-eip-label">Related Standard:</span>
          <a href="#" target="_blank" rel="noopener noreferrer" className="spk-rel-eip-link" id="spk-modal-rel-eip-link"></a>
        </div>

        <div className="spk-audience-row" id="spk-modal-audience-box" style={{ display: 'none' }}>
          <span className="spk-audience-label">Target Audience:</span>
          <div className="spk-audience-tags" id="spk-modal-audience-tags"></div>
        </div>
      </div>

      {/* Speaker Biography Box */}
      <div className="spk-modal-bio-card">
        <div className="spk-section-label">Speaker Biography</div>
        <div className="spk-bio-text" id="spk-modal-bio"></div>
      </div>

      {/* Modal Footer */}
      <div className="spk-modal-footer">
        <a href="https://lu.ma/czi58jpe" target="_blank" rel="noopener noreferrer" className="btn-spk-modal-primary">
          <span>RSVP on Luma</span>
          <span>↗</span>
        </a>
        <button type="button" className="btn-spk-modal-secondary" onClick={() => window.closeSpeakerModal && window.closeSpeakerModal()}>Close Details</button>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
