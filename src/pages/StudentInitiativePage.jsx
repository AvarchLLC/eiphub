import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import StudentPass from '../components/StudentPass.jsx';

export default function StudentInitiativePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="page-student-initiative" style={{ paddingTop: '90px', minHeight: '100vh' }}>
      {/* Page Header / Breadcrumb navigation */}
      <div className="wrap" style={{ paddingTop: '20px', paddingBottom: '16px' }}>
        <div className="student-page-top-nav">
          <Link to="/" className="student-back-link">
            <span>←</span>
            <span>Back to Home</span>
          </Link>
          <div className="student-page-badge">
            <span className="student-beacon-dot"></span>
            <span>Devcon 8 India · Mumbai · Nov 3–6, 2026</span>
          </div>
        </div>
      </div>

      {/* Main Student Initiative Component */}
      <StudentPass isStandalonePage={true} />

      {/* Extended Student FAQ & Information for Standalone Page */}
      <section className="student-extended-info wrap" style={{ paddingBottom: '60px' }}>
        <div className="student-faq-box">
          <div className="sec-eyebrow text-center">Frequently Asked Questions</div>
          <h3 className="student-faq-title text-center">Student Initiative Guidelines &amp; FAQs</h3>
          
          <div className="student-faq-grid">
            <div className="student-faq-card">
              <h4 className="student-faq-q">Who is eligible for the Devcon 8 Student Initiative?</h4>
              <p className="student-faq-a">
                Any currently enrolled undergraduate, graduate, or doctoral student at an accredited university or college worldwide with an interest in Ethereum, blockchain technology, cryptography, or open standards.
              </p>
            </div>

            <div className="student-faq-card">
              <h4 className="student-faq-q">What does the support pass provide?</h4>
              <p className="student-faq-a">
                Selected students receive conference access assistance to attend Devcon 8 at Jio World Centre, Mumbai, along with complete 4-day access to all EIP Hub technical tracks, author clinics, workshops, and editor 1-on-1s.
              </p>
            </div>

            <div className="student-faq-card">
              <h4 className="student-faq-q">How does the review process work?</h4>
              <p className="student-faq-a">
                Applications are reviewed on a rolling basis by the EIP Hub team. After submitting your short form, you will receive a follow-up confirmation email once your student status and track interest are verified.
              </p>
            </div>

            <div className="student-faq-card">
              <h4 className="student-faq-q">Can I participate in author clinics as a student?</h4>
              <p className="student-faq-a">
                Yes! One of the main goals of the Student Initiative is pairing aspiring student researchers and developers directly with active EIP Editors to review draft ideas, learn EIP-1 workflows, and draft standards.
              </p>
            </div>
          </div>

          <div className="student-cta-strip text-center" style={{ marginTop: '40px' }}>
            <a
              href="https://cryptpad.fr/form/#/2/form/view/MHixuaRrC7r9WLlXaNU6V2A+cxZrrcYKnyQ7nZeXt+A/"
              target="_blank"
              rel="noopener noreferrer"
              className="student-pass-btn-primary"
              style={{ display: 'inline-flex', padding: '14px 32px', fontSize: '15px' }}
            >
              <span className="sp-btn-icon">📋</span>
              <span>Submit Student Support Application</span>
              <span className="sp-btn-arr">↗</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
