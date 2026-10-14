import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const handleCopyEmail = () => {
    if (typeof window !== 'undefined' && window.copySpeakerEmail) {
      window.copySpeakerEmail('copy-partner-mail-btn', 'copy-partner-text');
    } else {
      navigator.clipboard.writeText('team@eiphub.xyz');
    }
  };

  return (
    <div className="faq-section-bg" id="faq">
      <div className="wrap">
        <div className="sec-eyebrow">
          <span className="sec-eyebrow-dot"></span>
          <span>4-Day Collaborative Hub · FAQ</span>
        </div>
        <div className="about-title">
          <span className="eip-word"><span className="eip-cap cap-e">F</span><span className="eip-rest">requently</span></span>
          <span className="eip-dot">·</span>
          <span className="eip-word"><span className="eip-cap cap-i">A</span><span className="eip-rest">sked</span></span>
          <span className="eip-dot">·</span>
          <span className="eip-word"><span className="eip-cap cap-p">Q</span><span className="eip-rest">uestions</span></span>
        </div>
        <p className="sec-body" style={{ marginBottom: '24px' }}>
          The <strong>EIP Hub</strong> is a collaborative space dedicated to <strong>Ethereum Improvement Proposals (EIPs)</strong>, <strong>ERC standards</strong>, <strong>protocol upgrades</strong>, and <strong>standards adoption</strong>. Whether you’re a first-time contributor, protocol researcher, client developer, standards author, application builder, enterprise architect, or simply curious about how Ethereum evolves, the EIP Hub is your place to learn, collaborate, and contribute.
        </p>

        {/* Enriched Audience & Focus Bar spanning full width */}
        <div className="faq-audience-strip">
          <span className="faq-audience-badge"><span className="aud-dot dot-amber"></span> EIP Authors &amp; Editors</span>
          <span className="faq-audience-badge"><span className="aud-dot dot-cyan"></span> Protocol Researchers</span>
          <span className="faq-audience-badge"><span className="aud-dot dot-emerald"></span> Client Implementers</span>
          <span className="faq-audience-badge"><span className="aud-dot dot-indigo"></span> Application &amp; ERC Builders</span>
          <span className="faq-audience-badge"><span className="aud-dot dot-purple"></span> Enterprise Architects</span>
        </div>

        <div className="faq-list">
          {/* Q1: What is the EIP Hub */}
          <div className={`faq-item ${openIndex === 0 ? 'open' : ''}`}>
            <button type="button" className="faq-q-btn" onClick={() => handleToggle(0)}>
              <div className="faq-q-left">
                <span className="faq-q-badge">Q</span>
                <span className="faq-q-text">What is the EIP Hub at Devcon 8 India?</span>
              </div>
              <span className="faq-arr">+</span>
            </button>
            <div className="faq-body">
              <div className="faq-ans-header">
                <span className="faq-ans-badge"><span className="ans-pulse-dot"></span> ANSWER</span>
              </div>
              <p>The <strong>EIP Hub</strong> is a dedicated four-day collaborative space at Devcon 8 India (3–6 November 2026, Mumbai) focused on Ethereum Improvement Proposals (EIPs), ERC standards, protocol upgrades, and standards adoption.</p>
              <p>Whether you’re a first-time contributor, protocol researcher, client developer, standards author, application builder, enterprise architect, or simply curious about how Ethereum evolves, the EIP Hub is your place to learn, collaborate, and contribute directly alongside editors, coordinators, and core protocol teams.</p>
              <div className="faq-pills">
                <a href="https://lu.ma/czi58jpe" target="_blank" rel="noopener noreferrer" className="faq-pill-link faq-pill-link-primary">RSVP on Luma ↗</a>
                <a href="https://forum.devcon.org/t/devcon-8-india-community-hub-eip-hub/8747" target="_blank" rel="noopener noreferrer" className="faq-pill-link">Devcon Forum Thread ↗</a>
                <a href="#about" className="faq-pill-link">Explore 4-Day Program ↓</a>
              </div>
            </div>
          </div>

          {/* Q2: Speaker Application */}
          <div className={`faq-item ${openIndex === 1 ? 'open' : ''}`}>
            <button type="button" className="faq-q-btn" onClick={() => handleToggle(1)}>
              <div className="faq-q-left">
                <span className="faq-q-badge">Q</span>
                <span className="faq-q-text">How can I submit a speaker proposal or present a session?</span>
              </div>
              <span className="faq-arr">+</span>
            </button>
            <div className="faq-body">
              <div className="faq-ans-header">
                <span className="faq-ans-badge"><span className="ans-pulse-dot"></span> ANSWER</span>
              </div>
              <p>We actively welcome session proposals from EIP authors, ERC builders, protocol researchers, client engineers, and ecosystem projects!</p>
              <p>You can apply directly through the official <strong>EIP Hub Speaker Information Form</strong>. We offer four flexible session formats: <strong>Lightning Talks</strong> (quick standard walkthroughs &amp; tooling demos), <strong>Tech Deep-Dives</strong> (in-depth protocol architecture &amp; client specs), <strong>Hands-On Clinics</strong> (live code &amp; draft reviews), and <strong>Panel Discussions</strong> (governance &amp; roadmaps).</p>
              <p>Submissions are reviewed on a rolling basis until all schedule slots across all four days are filled.</p>
              <p style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.72)', background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.22)', borderRadius: '10px', padding: '9px 13px', margin: '12px 0 16px' }}><strong>Please Note:</strong> The EIP Hub does not provide Devcon conference passes or admission tickets. All session speakers and attendees must hold a valid Devcon 8 ticket to access the Jio World Centre venue.</p>
              <div className="faq-pills">
                <a href="https://cryptpad.fr/form/#/2/form/view/q78P0VZ-28JejEzFYDH0fpddP7GtGERN8goafecPcN8/" target="_blank" rel="noopener noreferrer" className="faq-pill-link faq-pill-link-primary">Speaker Application Form ↗</a>
                <a href="mailto:team@eiphub.xyz?subject=Speaker%20Proposal%20-%20EIP%20Hub%20Devcon%208" className="faq-pill-link">Email Speaker Proposal ↗</a>
                <a href="#speak" className="faq-pill-link">View Session Formats ↓</a>
              </div>
            </div>
          </div>

          {/* Q3: 4 Days Focus */}
          <div className={`faq-item ${openIndex === 2 ? 'open' : ''}`}>
            <button type="button" className="faq-q-btn" onClick={() => handleToggle(2)}>
              <div className="faq-q-left">
                <span className="faq-q-badge">Q</span>
                <span className="faq-q-text">What is the focus of each day across the 4-day program?</span>
              </div>
              <span className="faq-arr">+</span>
            </button>
            <div className="faq-body">
              <div className="faq-ans-header">
                <span className="faq-ans-badge"><span className="ans-pulse-dot"></span> ANSWER</span>
              </div>
              <p>Each of the four days follows dedicated programming tracks guiding attendees through the full Ethereum standards lifecycle:</p>
              <div className="faq-day-row">
                <div className="faq-day-item">
                  <strong>Nov 3, 2026 — Day 1: EIP Process &amp; General Overview (Community):</strong> EIP fundamentals, lifecycle, authorship, editors, coordinators, how to propose and contribute.
                </div>
                <div className="faq-day-item">
                  <strong>Nov 4, 2026 — Day 2: Protocol EIPs &amp; Network Upgrades (Upgrades):</strong> Protocol EIPs, network upgrades, Core EIPs, testing, client implementation, AllCoreDevs.
                </div>
                <div className="faq-day-item">
                  <strong>Nov 5, 2026 — Day 3: Application ERCs &amp; Ecosystem Support (Adoption):</strong> Application-layer ERCs, standards, tooling, demos, developer experience, real-world adoption.
                </div>
                <div className="faq-day-item">
                  <strong>Nov 6, 2026 — Day 4: Enterprise Adoption:</strong> Enterprise readiness, institutional use cases, emerging standards, and EIPs worth watching.
                </div>
              </div>
              <div className="faq-pills">
                <a href="#days" className="faq-pill-link faq-pill-link-primary">View Day Cards &amp; Tracks ↓</a>
                <a href="https://lu.ma/czi58jpe" target="_blank" rel="noopener noreferrer" className="faq-pill-link">Full Schedule on Luma ↗</a>
              </div>
            </div>
          </div>

          {/* Q4: Who is it for */}
          <div className={`faq-item ${openIndex === 3 ? 'open' : ''}`}>
            <button type="button" className="faq-q-btn" onClick={() => handleToggle(3)}>
              <div className="faq-q-left">
                <span className="faq-q-badge">Q</span>
                <span className="faq-q-text">Who is the EIP Hub for, and are beginners welcome?</span>
              </div>
              <span className="faq-arr">+</span>
            </button>
            <div className="faq-body">
              <div className="faq-ans-header">
                <span className="faq-ans-badge"><span className="ans-pulse-dot"></span> ANSWER</span>
              </div>
              <p><strong>Yes, absolutely!</strong> The EIP Hub is designed for builders, researchers, and learners at every level:</p>
              <p>• <strong>First-Time Contributors &amp; Students:</strong> Demystifying EIP-1, understanding how proposals transition from Idea to Final, and how to get involved.<br />
              • <strong>Protocol Researchers &amp; Core Devs:</strong> Debating AllCoreDevs topics, client implementation tradeoffs, execution/consensus changes, and state management.<br />
              • <strong>Application Builders &amp; ERC Authors:</strong> Showcasing smart contract standards, account abstraction, multi-token architectures, and security best practices.<br />
              • <strong>Enterprise Architects:</strong> Assessing standards compliance, institutional interoperability, and enterprise-grade Ethereum deployments.<br />
              • <strong>Indian &amp; APAC Ecosystem:</strong> Highlighting and mentoring local builders to actively author and review standards on the world stage.</p>
              <div className="faq-pills">
                <a href="https://github.com/ethereum/EIPs" target="_blank" rel="noopener noreferrer" className="faq-pill-link">ethereum/EIPs GitHub ↗</a>
                <a href="https://github.com/ethereum/ERCs" target="_blank" rel="noopener noreferrer" className="faq-pill-link">ethereum/ERCs GitHub ↗</a>
                <a href="https://ethshala.com" target="_blank" rel="noopener noreferrer" className="faq-pill-link">ETHShala Learning ↗</a>
              </div>
            </div>
          </div>

          {/* Q5: Devcon Student Support Initiative */}
          <div className={`faq-item ${openIndex === 4 ? 'open' : ''}`}>
            <button type="button" className="faq-q-btn" onClick={() => handleToggle(4)}>
              <div className="faq-q-left">
                <span className="faq-q-badge" style={{ color: '#2dd4bf', background: 'rgba(20,184,166,0.14)', borderColor: 'rgba(20,184,166,0.35)', boxShadow: '0 0 10px rgba(20,184,166,0.12)' }}>Q</span>
                <span className="faq-q-text">Is student support available for Devcon 8 India, and who can apply?</span>
              </div>
              <span className="faq-arr">+</span>
            </button>
            <div className="faq-body">
              <div className="faq-ans-header">
                <span className="faq-ans-badge" style={{ background: 'rgba(20,184,166,0.15)', borderColor: 'rgba(20,184,166,0.4)', color: '#5eead4' }}><span className="ans-pulse-dot" style={{ background: '#2dd4bf' }}></span> ANSWER</span>
              </div>
              <p><strong>Yes!</strong> <strong>EIP Hub</strong> is running a dedicated <strong>Devcon 8 Student Support Initiative</strong> to help college and university students attend the conference at Jio World Centre in Mumbai (Nov 3–6, 2026).</p>
              <p>We welcome students across all experience levels who are interested in any of our 4 daily tracks:</p>
              <p>• <strong>Track 1 (Standards &amp; Governance):</strong> Curious to understand EIP-1 and how Ethereum proposals work.<br />
              • <strong>Track 2 (Protocol &amp; Scaling):</strong> Interested in core client development, consensus, and Layer 2s.<br />
              • <strong>Track 3 (Smart Contracts &amp; ERCs):</strong> Building dApps, experimenting with tokens, or active in campus Web3 clubs.<br />
              • <strong>Track 4 (Ecosystem &amp; Real-World Use):</strong> Exploring real-world use cases, security, and open-source public goods.</p>
              <div className="faq-pills">
                <a href="https://cryptpad.fr/form/#/2/form/view/MHixuaRrC7r9WLlXaNU6V2A+cxZrrcYKnyQ7nZeXt+A/" target="_blank" rel="noopener noreferrer" className="faq-pill-link faq-pill-link-primary" style={{ background: 'rgba(20,184,166,0.22)', borderColor: 'rgba(20,184,166,0.5)', color: '#5eead4' }}>Apply for Student Support ↗</a>
                <Link to="/student-initiative" className="faq-pill-link">View Student Initiative Page ↗</Link>
                <a href="mailto:team@eiphub.xyz?subject=Student%20Support%20Inquiry%20-%20Devcon%208" className="faq-pill-link">Email team@eiphub.xyz ↗</a>
              </div>
            </div>
          </div>

          {/* Q6: Organizers & Partnerships */}
          <div className={`faq-item ${openIndex === 5 ? 'open' : ''}`}>
            <button type="button" className="faq-q-btn" onClick={() => handleToggle(5)}>
              <div className="faq-q-left">
                <span className="faq-q-badge">Q</span>
                <span className="faq-q-text">Who organizes the EIP Hub and how can organizations partner?</span>
              </div>
              <span className="faq-arr">+</span>
            </button>
            <div className="faq-body">
              <div className="faq-ans-header">
                <span className="faq-ans-badge"><span className="ans-pulse-dot"></span> ANSWER</span>
              </div>
              <p>The EIP Hub is organized collaboratively by recognized community groups dedicated to open standards: <strong>ECH Institute</strong>, <strong>EIPs Insight</strong>, <strong>EtherWorld</strong>, <strong>ETHShala</strong>, <strong>ETHCluj</strong>, <strong>ETH Pune</strong>, and <strong>ETH Cinco De Mayo</strong>, in partnership with Devcon 8 India.</p>

              <div className="faq-partner-card">
                <div className="faq-partner-header">
                  <span className="faq-partner-badge"><span className="ans-pulse-dot"></span> Official Partnership Channel</span>
                  <span className="faq-partner-email">team@eiphub.xyz</span>
                </div>
                <p style={{ marginBottom: '12px', fontSize: '14px', color: 'rgba(255,255,255,0.78)' }}>If your protocol, ecosystem foundation, or enterprise would like to co-host a technical track, support travel grants for independent authors, or organize a workshop, connect directly with our coordination team:</p>
                <div className="faq-partner-pills">
                  <a href="https://forms.gle/dTqzAyXLdhmHtTMh8" target="_blank" rel="noopener noreferrer" className="faq-pill-link faq-pill-link-primary">Partnership Application Form (Google Form) ↗</a>
                  <a href="mailto:team@eiphub.xyz?subject=Partner%20Inquiry%20-%20EIP%20Hub%20Devcon%208" className="faq-pill-link">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: '0' }}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    <span>Email team@eiphub.xyz ↗</span>
                  </a>
                  <button type="button" className="faq-pill-link" id="copy-partner-mail-btn" onClick={handleCopyEmail} style={{ cursor: 'pointer', background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.18)', color: '#fff' }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: '0' }}><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                    <span id="copy-partner-text">Copy Email</span>
                  </button>
                  <a href="https://etherworld.co" target="_blank" rel="noopener noreferrer" className="faq-pill-link">EtherWorld ↗</a>
                  <a href="https://eipsinsight.com" target="_blank" rel="noopener noreferrer" className="faq-pill-link">EIPsInsight ↗</a>
                  <a href="https://echinstitute.org" target="_blank" rel="noopener noreferrer" className="faq-pill-link">ECH Institute ↗</a>
                  <a href="https://ethshala.com" target="_blank" rel="noopener noreferrer" className="faq-pill-link">ETHShala ↗</a>
                  <a href="https://www.ethcluj.org/" target="_blank" rel="noopener noreferrer" className="faq-pill-link">ETHCluj ↗</a>
                  <a href="https://www.ethpune.com" target="_blank" rel="noopener noreferrer" className="faq-pill-link">ETH Pune ↗</a>
                  <a href="https://ethcdm.com/" target="_blank" rel="noopener noreferrer" className="faq-pill-link">ETH Cinco De Mayo ↗</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
