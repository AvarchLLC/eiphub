import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import StudentPass from '../components/StudentPass.jsx';

const STUDENT_FAQS = [
  {
    icon: '🎓',
    q: 'Who is eligible for the Devcon 8 Student Initiative?',
    a: (
      <>
        <p>
          Any currently enrolled <strong>undergraduate, graduate, or doctoral student</strong> at an accredited university or college worldwide with an active interest in Ethereum, blockchain technology, cryptography, or open standards.
        </p>
        <p>
          Whether you are writing your first smart contract, conducting academic research in consensus protocols, or leading a campus Web3 club, this initiative is crafted to give you a direct seat at the table.
        </p>
      </>
    ),
    pills: [
      { text: 'Apply for Support ↗', href: 'https://cryptpad.fr/form/#/2/form/view/MHixuaRrC7r9WLlXaNU6V2A+cxZrrcYKnyQ7nZeXt+A/', primary: true },
      { text: 'View 4 Daily Tracks ↓', href: '#student-pass' }
    ]
  },
  {
    icon: '🎟️',
    q: 'What does the student support pass provide?',
    a: (
      <>
        <p>
          Selected students receive <strong>conference access assistance to attend Devcon 8</strong> at Jio World Centre, Mumbai, along with complete 4-day access to all EIP Hub technical tracks, author clinics, workshops, and editor 1-on-1 sessions.
        </p>
        <p>
          You’ll also receive official student delegate recognition, community welcome kit items, and direct invitations to peer-author roundtables.
        </p>
      </>
    ),
    pills: [
      { text: 'Devcon 8 Conference ↗', href: 'https://devcon.org' },
      { text: 'Explore Track Highlights ↓', href: '#student-pass' }
    ]
  },
  {
    icon: '⏳',
    q: 'How does the review and selection process work?',
    a: (
      <>
        <p>
          Applications are reviewed on a <strong>rolling basis</strong> by the EIP Hub coordination team. Slots are limited across each day to guarantee high-touch, small-group mentorship quality.
        </p>
        <p>
          After submitting your short form, you will receive a follow-up confirmation email once your student enrollment and track interest are verified.
        </p>
      </>
    ),
    pills: [
      { text: 'Submit Application Now ↗', href: 'https://cryptpad.fr/form/#/2/form/view/MHixuaRrC7r9WLlXaNU6V2A+cxZrrcYKnyQ7nZeXt+A/', primary: true },
      { text: 'Email Coordination Team ↗', href: 'mailto:team@eiphub.xyz?subject=Student%20Application%20Inquiry' }
    ]
  },
  {
    icon: '💡',
    q: 'Can I participate in author clinics as a student?',
    a: (
      <>
        <p>
          <strong>Yes, absolutely!</strong> One of the core missions of the Student Initiative is pairing aspiring student researchers and developers directly with active <strong>EIP Editors</strong>.
        </p>
        <p>
          You can bring rough ideas, work-in-progress draft PRs, or conceptual designs to review EIP-1 requirements, formatting guidelines, and architectural feasibility with experienced standard authors.
        </p>
      </>
    ),
    pills: [
      { text: 'Read EIP-1 Guide ↗', href: 'https://eips.ethereum.org/EIPS/eip-1' },
      { text: 'ethereum/EIPs GitHub ↗', href: 'https://github.com/ethereum/EIPs' }
    ]
  },
  {
    icon: '📑',
    q: 'What verification is required to confirm student status?',
    a: (
      <>
        <p>
          A valid <strong>university student email address</strong> (e.g., ending in <code>.edu</code>, <code>.ac.in</code>, or your accredited university domain), OR proof of active enrollment (a digital copy of your valid student ID card, official letter of enrollment, or current semester transcript).
        </p>
        <p>
          Verification documents can be uploaded securely directly via the encrypted CryptPad application form.
        </p>
      </>
    ),
    pills: [
      { text: 'Open CryptPad Form ↗', href: 'https://cryptpad.fr/form/#/2/form/view/MHixuaRrC7r9WLlXaNU6V2A+cxZrrcYKnyQ7nZeXt+A/', primary: true }
    ]
  },
  {
    icon: '🌏',
    q: 'Are international students eligible to apply?',
    a: (
      <>
        <p>
          <strong>Yes!</strong> Students enrolled in colleges and universities worldwide are fully eligible to apply. Ethereum standards are global, and we celebrate international student perspectives.
        </p>
        <p>
          <em>Please note:</em> The student support initiative provides venue and conference access support; attendees are responsible for securing their own international flights, accommodation, and Indian entry visa arrangements.
        </p>
      </>
    ),
    pills: [
      { text: 'India Visa Portal ↗', href: 'https://indianvisaonline.gov.in/' },
      { text: 'Devcon Attendee Guide ↗', href: 'https://devcon.org' }
    ]
  }
];

export default function StudentInitiativePage() {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleToggle = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="page-standalone page-student-initiative">
      {/* Creative Page Hero */}
      <PageHero
        badgeText="Devcon 8 Student Initiative"
        eyebrow="Mumbai · Nov 3–6, 2026"
        theme="emerald"
        breadcrumb={
          <Link to="/" className="page-hero-back" title="Return to EIP Hub Home">
            <span>←</span>
            <span>Back to Home</span>
          </Link>
        }
        title={
          <>
            Empowering the Next Generation of{' '}
            <span className="text-gradient-emerald">Ethereum Authors</span>
          </>
        }
        subtitle="Are you an enrolled college or university student eager to explore open Ethereum standards? Apply for dedicated Devcon 8 conference attendance assistance, 1-on-1 EIP editor mentorship, and 4 days of interactive tracks."
      />

      {/* Main Student Initiative Pass Component (Clean & Frameless) */}
      <div className="wrap">
        <StudentPass isStandalonePage={true} />
      </div>

      {/* Extended Student FAQ Section Styled Like Home Page FAQ */}
      <section className="faq-section-bg" id="student-faq" style={{ padding: '70px 0 85px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="wrap">
          <div className="sec-eyebrow">
            <span className="sec-eyebrow-dot"></span>
            <span>STUDENT GUIDELINES &amp; FAQS</span>
          </div>
          <div className="about-title">
            <span className="eip-word"><span className="eip-cap cap-e">F</span><span className="eip-rest">requently</span></span>
            <span className="eip-dot">·</span>
            <span className="eip-word"><span className="eip-cap cap-i">A</span><span className="eip-rest">sked</span></span>
            <span className="eip-dot">·</span>
            <span className="eip-word"><span className="eip-cap cap-p">Q</span><span className="eip-rest">uestions</span></span>
          </div>
          <p className="sec-body" style={{ marginBottom: '24px' }}>
            Everything you need to know about eligibility, pass coverage, verification credentials, author clinic mentorship, and international attendance for the Devcon 8 Student Initiative.
          </p>

          {/* Enriched Category Badges */}
          <div className="faq-audience-strip">
            <span className="faq-audience-badge"><span className="aud-dot dot-amber"></span> Eligibility Criteria</span>
            <span className="faq-audience-badge"><span className="aud-dot dot-cyan"></span> Pass Coverage</span>
            <span className="faq-audience-badge"><span className="aud-dot dot-emerald"></span> Rolling Selection</span>
            <span className="faq-audience-badge"><span className="aud-dot dot-indigo"></span> Editor Mentorship</span>
            <span className="faq-audience-badge"><span className="aud-dot dot-purple"></span> International Students</span>
          </div>

          {/* Authentic Interactive FAQ Accordion */}
          <div className="faq-list">
            {STUDENT_FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="faq-q-btn"
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                  >
                    <div className="faq-q-left">
                      <span className="faq-q-badge">{faq.icon}</span>
                      <span className="faq-q-text">{faq.q}</span>
                    </div>
                    <span className="faq-arr">+</span>
                  </button>
                  <div className="faq-body">
                    <div className="faq-ans-header">
                      <span className="faq-ans-badge">
                        <span className="ans-pulse-dot"></span> ANSWER
                      </span>
                    </div>
                    {faq.a}
                    {faq.pills && (
                      <div className="faq-pills">
                        {faq.pills.map((pill, pIdx) => (
                          <a
                            key={pIdx}
                            href={pill.href}
                            target={pill.href.startsWith('http') || pill.href.startsWith('mailto') ? '_blank' : undefined}
                            rel={pill.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className={`faq-pill-link ${pill.primary ? 'faq-pill-link-primary' : ''}`}
                          >
                            {pill.text}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>


        </div>
      </section>
    </div>
  );
}
