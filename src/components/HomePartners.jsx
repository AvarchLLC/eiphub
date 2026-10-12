import React from 'react';
import { Link } from 'react-router-dom';

const PARTNER_LOGOS = [
  {
    name: 'Ethereum Foundation',
    logo: 'Assets/partners/ef-logo.svg',
    category: 'Core Protocol',
    tagline: 'Protocol Research & Public Goods',
    url: 'https://ethereum.foundation'
  },
  {
    name: 'Devcon 8',
    logo: 'Assets/partners/devcon-logo.svg',
    category: 'Flagship Event',
    tagline: 'Ethereum Developer Conference',
    url: 'https://devcon.org'
  },
  {
    name: 'ECH Institute',
    logo: 'Assets/partners/ech-institute-logo.png',
    category: 'Ecosystem Lead',
    tagline: 'Ecosystem Lead · Public Goods',
    url: 'https://echinstitute.org'
  },
  {
    name: 'Ethlabs',
    logo: 'Assets/partners/ethlabs-logo.svg',
    category: 'Protocol R&D',
    tagline: 'Core Protocol R&D · Scaling',
    url: 'https://ethlabs.org'
  },
  {
    name: 'EIPsInsight',
    logo: 'Assets/partners/eipsinsight-logo.gif',
    category: 'Analytics',
    tagline: 'Protocol Analytics & Standards Tracker',
    url: 'https://eipsinsight.com'
  },
  {
    name: 'EtherWorld',
    logo: 'Assets/partners/etherworld-logo.png',
    category: 'Media',
    tagline: 'Decentralized Protocol Media',
    url: 'https://etherworld.co'
  },
  {
    name: 'ETHShala',
    logo: 'Assets/partners/ethshala-logo.svg',
    category: 'Education',
    tagline: 'Builder Education · India',
    url: 'https://ethshala.com'
  },
  {
    name: 'ETHCluj',
    logo: 'Assets/partners/ethcluj-logo.png',
    category: 'Community',
    tagline: 'Ethereum Technical Community · Europe',
    url: 'https://www.ethcluj.org/'
  },
  {
    name: 'ETH Pune',
    logo: 'Assets/partners/ethpune-white.png',
    category: 'Community',
    tagline: 'Ethereum Community · India',
    url: 'https://www.ethpune.com'
  },
  {
    name: 'ETH Cinco De Mayo',
    logo: 'Assets/partners/ethcincodemayo-icon.png',
    category: 'Incubathon',
    tagline: 'Incubathon CDMX · Mexico',
    url: 'https://x.com/ETHCincoDeMayo'
  },
  {
    name: 'EVVM (@RollAMate)',
    logo: 'Assets/partners/rollamate-logo.png',
    category: 'Execution',
    tagline: 'Modular Execution · Virtual Machine',
    url: 'https://x.com/RollAMate'
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
          <h2 className="sec-title">Backed by the Ethereum Ecosystem</h2>
          <p className="sec-body">
            Collaborating with active protocol public goods, client teams, research groups, and grassroots developer communities worldwide.
          </p>
        </div>

        {/* Auto Smooth Moving Real Full-Color Logo & Community Name Marquee */}
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
                title={`Visit ${p.name} (${p.tagline})`}
              >
                <div className="partner-brand-pod">
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="partner-brand-img"
                    loading="lazy"
                  />
                </div>
                <div className="partner-brand-content">
                  <div className="partner-brand-header">
                    <span className="partner-brand-name">{p.name}</span>
                    <span className="partner-brand-badge">{p.category}</span>
                  </div>
                  <span className="partner-brand-tagline">{p.tagline}</span>
                </div>
                <span className="partner-brand-arrow" aria-hidden="true">↗</span>
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
