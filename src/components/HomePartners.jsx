import React from 'react';
import { Link } from 'react-router-dom';

const PARTNER_LOGOS = [
  {
    name: 'Ethereum Foundation',
    logo: '/Assets/partners/ef-full-logo.svg',
    fallback: '/Assets/partners/ef-logo.svg',
    url: 'https://ethereum.foundation'
  },
  {
    name: 'Devcon 8 India',
    logo: '/Assets/partners/devcon-full-logo.svg',
    fallback: '/Assets/partners/devcon-full-logo.svg',
    url: 'https://devcon.org'
  },
  {
    name: 'EtherWorld',
    logo: '/Assets/partners/etherworld-full-logo.png',
    fallback: '/Assets/partners/etherworld-logo.png',
    url: 'https://etherworld.co'
  },
  {
    name: 'EIPsInsight',
    logo: '/Assets/partners/eipsinsight-full-logo.gif',
    fallback: '/Assets/partners/eipsinsight-full-logo.svg',
    url: 'https://eipsinsight.com'
  },
  {
    name: 'ECH Institute',
    logo: '/Assets/partners/ech-institute-full-logo.svg',
    fallback: '/Assets/partners/ech-institute-full-logo.png',
    url: 'https://echinstitute.org'
  },
  {
    name: 'EVVM',
    logo: '/Assets/partners/evvm-logo.svg',
    fallback: '/Assets/partners/evvm-logo.png',
    url: 'https://www.evvm.info/'
  },
  {
    name: 'ETHShala',
    logo: '/Assets/partners/ethshala-full-logo.svg',
    fallback: '/Assets/partners/ethshala-full-logo.png',
    url: 'https://ethshala.com'
  },
  {
    name: 'ETH Pune',
    logo: '/Assets/partners/ethpune-full-logo.svg',
    fallback: '/Assets/partners/ethpune-full-logo.png',
    url: 'https://www.ethpune.com'
  },
  {
    name: 'ETHCluj',
    logo: '/Assets/partners/ethcluj-vector-logo.svg',
    fallback: '/Assets/partners/ethcluj-full-logo.png',
    url: 'https://www.ethcluj.org'
  },
  {
    name: 'ETH Cinco De Mayo',
    logo: '/Assets/partners/ethcincodemayo-full-logo.svg',
    fallback: '/Assets/partners/ethcincodemayo-full-logo.png',
    url: 'https://ethcdm.com/'
  }
];

export default function HomePartners() {
  return (
    <section className="home-partners-section" id="partners-preview">
      {/* Sacred geometry ambient astrolabe watermark */}
      <div className="home-partners-bg-glow" aria-hidden="true"></div>

      <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
        <div className="home-partners-header text-center">
          <div className="sec-eyebrow">Ecosystem Partners &amp; Supporters</div>
          <h2 className="sec-title">Backed by the Ecosystem</h2>
          <p className="sec-body">
            Collaborating with active protocol public goods, client teams, research groups, and grassroots developer communities worldwide.
          </p>
        </div>

        {/* Auto Smooth Moving Real Full-Color Logo Marquee (Clean Borderless Stream) */}
        <div className="partner-logo-slider-wrap" aria-label="Partner Logos Carousel">
          <div className="partner-logo-track">
            {/* Duplicated array for seamless continuous infinite marquee */}
            {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((p, index) => (
              <a
                key={index}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-brand-tile"
                title={`Visit ${p.name}`}
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="partner-brand-full-logo"
                  loading="lazy"
                  onError={(e) => {
                    if (p.fallback && e.currentTarget.src !== p.fallback) {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = p.fallback;
                    }
                  }}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Action Strip: Go to Partner Page for Full Details & Proposal Submission */}
        <div className="home-partner-cta-card">
          <div className="partner-cta-info">
            <div className="partner-cta-badge">
              <span className="partner-cta-dot"></span>
              <span>Open Collaborative Stage · Devcon 8</span>
            </div>
            <h4 className="partner-cta-title">Collaborate with the EIP Hub at Devcon 8 India</h4>
            <p className="partner-cta-desc">
              Host an author clinic, support first-time contributors, or showcase your client tooling inside Jio World Centre, Mumbai.
            </p>
          </div>
          <Link to="/partners" className="btn-partner-go">
            <span>Explore Partner Details &amp; Apply</span>
            <span className="btn-partner-arr">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
