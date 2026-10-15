import React, { useState } from 'react';

export default function StudentPass({ isStandalonePage }) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const url = 'https://cryptpad.fr/form/#/2/form/view/MHixuaRrC7r9WLlXaNU6V2A+cxZrrcYKnyQ7nZeXt+A/';
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2400);
      }).catch(() => {
        if (typeof window !== 'undefined' && window.copyStudentFormLink) {
          window.copyStudentFormLink(e);
        }
      });
    } else if (typeof window !== 'undefined' && window.copyStudentFormLink) {
      window.copyStudentFormLink(e);
    }
  };

  return (
    <div className={`student-pass-section ${isStandalonePage ? 'student-pass-standalone-section' : ''}`} id="student-pass-section">
      <div className={isStandalonePage ? 'student-pass-open' : 'student-pass-card'} id="student-pass">
        {!isStandalonePage && (
          <>
            <div className="student-pass-top-beam" aria-hidden="true"></div>
            <div className="student-pass-radial-glow" aria-hidden="true"></div>

            <div className="student-pass-header">
              <div className="student-provider-pill">
                <span className="student-beacon-dot"></span>
                <span>Organized by EIP Hub · Devcon 8 India (Mumbai)</span>
              </div>
              <h2 className="student-pass-title">Devcon 8 Student Initiative</h2>
              <p className="student-pass-subtitle">Are you a student eager to learn and participate in Ethereum standards at Devcon 8 India?</p>
            </div>
          </>
        )}

        <p className="student-pass-desc">
          <strong>EIP Hub</strong> is running a dedicated <strong>Devcon 8 Student Support Initiative</strong> to help active students and first-time learners attend the conference in Mumbai (Nov 3–6, 2026) and participate in our 4-day interactive tracks!
        </p>

        {/* Track Eligibility: Who Can Apply */}
        <div className="student-sub-block">
          <div className="student-sub-title">
            <div className="student-sub-title-left">
              <span>Who Can Apply? (Based on Our 4 Daily Tracks)</span>
            </div>
            <span className="sub-tag">Open Eligibility</span>
          </div>
          <div className="student-who-grid">
            <div className="student-who-card track-1-card">
              <div className="student-who-icon-pod">📚</div>
              <div className="student-who-body">
                <div className="student-who-head">
                  <div className="student-who-title">Standards &amp; Governance</div>
                  <span className="student-track-chip track-chip-1">Track 1 · Nov 3</span>
                </div>
                <div className="student-who-desc">Students curious about how Ethereum evolves, wanting to understand EIP-1 and learn how proposals move from Idea to Final standard.</div>
              </div>
            </div>

            <div className="student-who-card track-2-card">
              <div className="student-who-icon-pod">⚡</div>
              <div className="student-who-body">
                <div className="student-who-head">
                  <div className="student-who-title">Core Protocol &amp; Scaling</div>
                  <span className="student-track-chip track-chip-2">Track 2 · Nov 4</span>
                </div>
                <div className="student-who-desc">Students interested in consensus, execution clients, Layer 2 rollups, and the technical Ethereum protocol roadmap.</div>
              </div>
            </div>

            <div className="student-who-card track-3-card">
              <div className="student-who-icon-pod">💻</div>
              <div className="student-who-body">
                <div className="student-who-head">
                  <div className="student-who-title">Smart Contracts &amp; ERCs</div>
                  <span className="student-track-chip track-chip-3">Track 3 · Nov 5</span>
                </div>
                <div className="student-who-desc">Students building dApps, exploring ERC standards (like ERC-20, 721, 4337 Account Abstraction), or active in campus Web3 clubs.</div>
              </div>
            </div>

            <div className="student-who-card track-4-card">
              <div className="student-who-icon-pod">🌐</div>
              <div className="student-who-body">
                <div className="student-who-head">
                  <div className="student-who-title">Ecosystem &amp; Real-World Use</div>
                  <span className="student-track-chip track-chip-4">Track 4 · Nov 6</span>
                </div>
                <div className="student-who-desc">Students exploring real-world Ethereum applications, security, cryptography research, or open-source community development.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Base Information: What You Get */}
        <div className="student-sub-block">
          <div className="student-sub-title">
            <div className="student-sub-title-left">
              <span>What You Get</span>
            </div>
            <span className="sub-tag">Program Highlights</span>
          </div>
          <div className="student-benefits-grid">
            <div className="student-benefit-card">
              <span className="student-benefit-icon">🎓</span>
              <div className="student-benefit-title">Conference Attendance Support</div>
              <div className="student-benefit-desc">Direct assistance and community support to attend the 4-day Devcon event at Jio World Centre, Mumbai.</div>
            </div>
            <div className="student-benefit-card">
              <span className="student-benefit-icon">🏛️</span>
              <div className="student-benefit-title">4-Day Hub Access</div>
              <div className="student-benefit-desc">Full access to all EIP Hub workshops, keynotes, panels, and author clinics throughout the conference.</div>
            </div>
            <div className="student-benefit-card">
              <span className="student-benefit-icon">⚡</span>
              <div className="student-benefit-title">Meet EIP Editors</div>
              <div className="student-benefit-desc">1-on-1 author clinic access with editors and experienced authors for feedback, drafting tips, and guidance.</div>
            </div>
            <div className="student-benefit-card">
              <span className="student-benefit-icon">🤝</span>
              <div className="student-benefit-title">Community Networking</div>
              <div className="student-benefit-desc">Connect directly with fellow student builders, mentors, core developers, and researchers worldwide.</div>
            </div>
          </div>
        </div>

        {/* Simple 4-Step How to Apply */}
        <div className="student-sub-block">
          <div className="student-sub-title">
            <div className="student-sub-title-left">
              <span>Simple 4-Step Application</span>
            </div>
            <span className="sub-tag">Easy Process</span>
          </div>
          <div className="student-pipeline-row">
            <div className="student-pipe-step">
              <span className="student-pipe-num">1</span>
              <div className="student-pipe-info">
                <span className="student-pipe-text">Fill Simple Form</span>
                <span className="student-pipe-sub">2-min CryptPad form</span>
              </div>
            </div>
            <div className="student-pipe-step">
              <span className="student-pipe-num">2</span>
              <div className="student-pipe-info">
                <span className="student-pipe-text">Student Verification</span>
                <span className="student-pipe-sub">Quick interest review</span>
              </div>
            </div>
            <div className="student-pipe-step">
              <span className="student-pipe-num">3</span>
              <div className="student-pipe-info">
                <span className="student-pipe-text">Rolling Confirmation</span>
                <span className="student-pipe-sub">Email invitation &amp; pass</span>
              </div>
            </div>
            <div className="student-pipe-step">
              <span className="student-pipe-num">4</span>
              <div className="student-pipe-info">
                <span className="student-pipe-text">Join in Mumbai!</span>
                <span className="student-pipe-sub">Nov 3–6 at Jio World</span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions Row */}
        <div className="student-pass-actions">
          <a
            href="https://cryptpad.fr/form/#/2/form/view/MHixuaRrC7r9WLlXaNU6V2A+cxZrrcYKnyQ7nZeXt+A/"
            target="_blank"
            rel="noopener noreferrer"
            className="student-pass-btn-primary"
            id="student-form-btn"
          >
            <span className="sp-btn-icon">📋</span>
            <span>Apply for Student Support</span>
            <span className="sp-btn-arr">↗</span>
          </a>

          <a
            href="mailto:team@eiphub.xyz?subject=Student%20Support%20Inquiry%20-%20Devcon%208%20Mumbai"
            className="student-pass-btn-secondary"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            <span>Email team@eiphub.xyz</span>
          </a>

          <button
            type="button"
            className={`student-pass-copy-btn ${copied ? 'copied' : ''}`}
            id="copy-student-link-btn"
            onClick={handleCopyLink}
            title="Copy application form link"
            aria-label="Copy student form link"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span id="student-copy-label">{copied ? 'Link Copied! ✓' : 'Copy form link'}</span>
          </button>
        </div>

        <div className="student-pass-footer-meta">
          <span>⚡ Rolling review</span>
          <span className="meta-sep">•</span>
          <span>Open to all active college &amp; university students worldwide</span>
          <span className="meta-sep">•</span>
          <span>Encrypted CryptPad submission</span>
        </div>
      </div>
    </div>
  );
}
