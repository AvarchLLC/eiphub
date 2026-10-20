import React from 'react';

const TOP_PARTNERS = [
  // ── Row 1 (4 logos) ──
  {
    id: 'ef',
    name: 'Ethereum Foundation',
    category: 'Core Protocol & EF',
    tagline: 'Protocol Research · Public Goods',
    desc: 'Non-profit organization dedicated to supporting Ethereum core protocol development, open research, consensus security, and public goods.',
    logo: '/Assets/partners/ef-full-logo.svg',
    fallbackLogo: '/Assets/partners/ef-logo.svg',
    url: 'https://ethereum.foundation',
    x: 'https://x.com/ethereum',
    accent: '#627eea'
  },
  {
    id: 'devcon',
    name: 'Devcon 8',
    category: 'Host Conference',
    tagline: 'Ethereum Developer Conference · Mumbai',
    desc: 'The flagship annual conference for Ethereum developers, researchers, and community members, hosted at Jio World Centre in Mumbai.',
    logo: '/Assets/partners/devcon-full-logo.svg',
    fallbackLogo: '/Assets/partners/devcon-full-logo.svg',
    url: 'https://devcon.org',
    x: 'https://x.com/EFDevcon',
    accent: '#f43f5e'
  },
  {
    id: 'ech',
    name: 'ECH Institute',
    category: 'Ecosystem Lead',
    tagline: 'Ecosystem Lead · Public Goods',
    desc: 'Ecosystem lead driving author mentorship, open standards public goods, and community onboarding worldwide.',
    logo: '/Assets/partners/ech-institute-full-logo.svg',
    fallbackLogo: '/Assets/partners/ech-institute-full-logo.png',
    url: 'https://echinstitute.org',
    x: 'https://x.com/ECHInstitute',
    accent: '#10b981'
  },
  {
    id: 'etherworld',
    name: 'EtherWorld',
    category: 'Decentralized Media',
    tagline: 'Decentralized Media & Research · Est. 2017',
    desc: 'Independent Ethereum-focused media covering protocol upgrades, EIPs, AllCoreDevs discussions, security, and governance with 120,000+ readers.',
    logo: '/Assets/partners/etherworld-full-logo.png',
    fallbackLogo: '/Assets/partners/etherworld-logo.png',
    url: 'https://etherworld.co',
    x: 'https://x.com/ether_world',
    linkedin: 'https://www.linkedin.com/company/etherworld',
    accent: '#38bdf8'
  },

  // ── Row 2 (4 logos) ──
  {
    id: 'eipsinsight',
    name: 'EIPsInsight',
    category: 'Protocol Analytics',
    tagline: 'Standards Observability & Analytics',
    desc: 'Open-source observability tracking Ethereum standards (EIPs/ERCs/RIPs), AllCoreDevs decision ledgers, network upgrade timelines, and ERC-4337.',
    logo: '/Assets/partners/eipsinsight-full-logo.gif',
    fallbackLogo: '/Assets/partners/eipsinsight-full-logo.svg',
    url: 'https://eipsinsight.com',
    x: 'https://x.com/EIPsInsight',
    linkedin: 'https://www.linkedin.com/company/eipsinsight/',
    accent: '#818cf8'
  },
  {
    id: 'evvm',
    name: 'EVVM',
    category: 'Virtual Blockchain Infra',
    tagline: 'Virtual Blockchain Infrastructure · EVVM',
    desc: 'Infraless EVM virtualization solving scalability and chain fragmentation by deploying contract-native virtual blockchains inheriting Ethereum security.',
    logo: '/Assets/partners/evvm-logo.svg',
    fallbackLogo: '/Assets/partners/evvm-logo.png',
    url: 'https://www.evvm.info/',
    x: 'https://x.com/RollAMate',
    accent: '#ec4899'
  },
  {
    id: 'ethshala',
    name: 'ETHShala',
    category: 'Builder Education',
    tagline: 'Builder Education Across India',
    desc: 'Open education and partner program taking Ethereum directly to universities across India through campus workshops and developer onboarding.',
    logo: '/Assets/partners/ethshala-full-logo.svg',
    fallbackLogo: '/Assets/partners/ethshala-full-logo.png',
    url: 'https://ethshala.com',
    x: 'https://x.com/Its_EthShala',
    linkedin: 'https://www.linkedin.com/company/ethshala/',
    accent: '#f59e0b'
  },
  {
    id: 'ethpune',
    name: 'ETH Pune',
    category: 'Regional Community',
    tagline: 'Ethereum Community · India',
    desc: 'Vibrant regional Ethereum community empowering the next generation of Web3 builders through technical workshops and developer education in Pune.',
    logo: '/Assets/partners/ethpune-full-logo.svg',
    fallbackLogo: '/Assets/partners/ethpune-full-logo.png',
    url: 'https://www.ethpune.com',
    x: 'https://x.com/EthereumPune',
    linkedin: 'https://www.linkedin.com/in/eth-pune-b90a0336b/',
    accent: '#06b6d4'
  },

  // ── Row 3 (2 logos, centered) ──
  {
    id: 'ethcluj',
    name: 'ETHCluj',
    category: 'Technical Community',
    tagline: 'Ethereum Community · Cluj-Napoca',
    desc: 'Ethereum community based in Cluj-Napoca, Romania, uniting developers, researchers, builders, and students through workshops and meetups.',
    logo: '/Assets/partners/ethcluj-vector-logo.svg',
    fallbackLogo: '/Assets/partners/ethcluj-full-logo.png',
    url: 'https://www.ethcluj.org/',
    x: 'https://x.com/ETHCluj',
    linkedin: 'https://www.linkedin.com/company/ethereumcluj',
    accent: '#a855f7'
  },
  {
    id: 'ethcdm',
    name: 'ETH Cinco De Mayo',
    category: 'Non-Profit Community',
    tagline: 'Non-Profit Ethereum Community · LATAM',
    desc: 'Non-profit LATAM organization that has onboarded over 1,300 developers and 50 companies across incubathons, hackathons, and workshops.',
    logo: '/Assets/partners/ethcincodemayo-full-logo.svg',
    fallbackLogo: '/Assets/partners/ethcincodemayo-full-logo.png',
    url: 'https://ethcdm.com/',
    x: 'https://x.com/ETHCincoDeMayo',
    accent: '#14b8a6'
  }
];

export default function Partners() {
  return (
    <>
<div className="partners-bg" id="partners">
  <div className="full">
    <div className="full-inner" style={{ textAlign: 'center' }}>
      <div className="sec-eyebrow">Partners and Supporters</div>
      <div className="sec-title">Our Partners, Communities &amp; Collaborators</div>

      {/* ============================================================== */}
      {/* 4 + 4 + 2 LOGO ONLY PARTNER SHOWCASE GRID */}
      {/* Line 1: 4 logos | Line 2: 4 logos | Line 3: 2 logos in center */}
      {/* Cards show ONLY the logo in resting state; hover reveals info */}
      {/* ============================================================== */}
      <div className="partner-clean-grid">
        {TOP_PARTNERS.map((partner) => (
          <div
            key={partner.id}
            className={`partner-clean-card partner-clean-${partner.id}`}
            style={{ '--partner-accent': partner.accent }}
            onClick={() => window.open(partner.url, '_blank', 'noopener,noreferrer')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.open(partner.url, '_blank', 'noopener,noreferrer');
              }
            }}
            title={`Visit ${partner.name} (${partner.url}) · Hover for details`}
          >
            {/* ONLY SHOW THE LOGO (NO OTHER INFORMATION DIRECTLY ON TILE) */}
            <div className="partner-logo-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="partner-clean-img"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = partner.fallbackLogo;
                }}
                loading="lazy"
              />
            </div>

            {/* INTERACTIVE HOVER OVERLAY: REVEALS ALL INFORMATION */}
            <div className="partner-clean-hover">
              <div className="pch-top">
                <span className="pch-category">{partner.category}</span>
                <div className="pch-socials" onClick={(e) => e.stopPropagation()}>
                  {partner.x && (
                    <a
                      href={partner.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pch-social-btn"
                      title={`Follow ${partner.name} on X`}
                      aria-label="X"
                    >
                      <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  )}
                  {partner.linkedin && (
                    <a
                      href={partner.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pch-social-btn"
                      title={`Follow ${partner.name} on LinkedIn`}
                      aria-label="LinkedIn"
                    >
                      <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <div className="pch-middle">
                <h4 className="pch-title">{partner.name}</h4>
                <p className="pch-tagline">{partner.tagline}</p>
                <p className="pch-desc">{partner.desc}</p>
              </div>

              <div className="pch-bottom">
                <span className="pch-visit-btn">
                  <span>Visit website</span>
                  <span className="pch-arr">↗</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>



      {/* BECOME A PARTNER: GUIDELINES, TIERS & REGULATIONS */}
      <div className="partner-guide-wrap" id="become-a-partner">
        <div className="partner-guide-header">
          <div className="sec-eyebrow">Collaboration & Partnership</div>
          <h3 className="partner-guide-title">How to Become an EIP Hub Partner</h3>
          <p className="partner-guide-sub">
            The EIP Hub is a public-good, community-driven initiative organized by the ECH Institute, EIPs Insight, EtherWorld, ETHShala, ETHCluj, ETH Pune, ETH Cinco De Mayo, and EVVM. We invite protocols, research institutions, client teams, and ecosystem foundations to partner with us in making standards coordination accessible to all Devcon 8 India attendees.
          </p>
        </div>

        {/* GET INVOLVED */}
        <div className="get-involved-wrap">
          <div className="get-involved-header">
            <span className="get-involved-eyebrow">Get Involved</span>
            <h3 className="get-involved-title">How Would You Like to Contribute?</h3>
            <p className="get-involved-sub">Whether you want to speak, lead a session, run a workshop, or support on the ground — there's a role for you at EIP Hub.</p>
          </div>
          <div className="get-involved-grid">

            {/* Talk */}
            <div className="gi-card gi-card-talk">
              <div className="gi-card-top">
                <div className="gi-icon-pod">
                  <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
                </div>
                <span className="gi-card-label">Speaker</span>
              </div>
              <h4 className="gi-card-title">Give a Talk</h4>
              <p className="gi-card-desc">Present your research, EIP/ERC work, or protocol insights to a focused audience of Ethereum contributors and builders.</p>
              <a href="mailto:team@eiphub.xyz?subject=Talk%20Proposal%20-%20EIP%20Hub%20Devcon%208" className="gi-card-cta" onClick={() => { openContactModal('talk', event) }}>
                <span>Submit Proposal</span>
                <svg className="gi-cta-arrow" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              </a>
            </div>

            {/* Panel */}
            <div className="gi-card gi-card-panel">
              <div className="gi-card-top">
                <div className="gi-icon-pod">
                  <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8"/><path d="M8 13h5"/></svg>
                </div>
                <span className="gi-card-label">Panelist</span>
              </div>
              <h4 className="gi-card-title">Join a Panel</h4>
              <p className="gi-card-desc">Participate in structured discussions on EIP governance, protocol evolution, application standards, or enterprise adoption.</p>
              <a href="mailto:team@eiphub.xyz?subject=Panel%20Interest%20-%20EIP%20Hub%20Devcon%208" className="gi-card-cta" onClick={() => { openContactModal('panel', event) }}>
                <span>Express Interest</span>
                <svg className="gi-cta-arrow" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              </a>
            </div>

            {/* Workshop */}
            <div className="gi-card gi-card-workshop">
              <div className="gi-card-top">
                <div className="gi-icon-pod">
                  <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                </div>
                <span className="gi-card-label">Facilitator</span>
              </div>
              <h4 className="gi-card-title">Run a Workshop</h4>
              <p className="gi-card-desc">Lead a hands-on session — spec walkthroughs, live demos, author clinics, or implementation deep-dives across any of the four tracks.</p>
              <a href="mailto:team@eiphub.xyz?subject=Workshop%20Proposal%20-%20EIP%20Hub%20Devcon%208" className="gi-card-cta" onClick={() => { openContactModal('workshop', event) }}>
                <span>Propose Workshop</span>
                <svg className="gi-cta-arrow" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              </a>
            </div>

            {/* Volunteer */}
            <div className="gi-card gi-card-volunteer">
              <div className="gi-card-top">
                <div className="gi-icon-pod">
                  <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a1 1 0 0 0 1.4 0l6.6-6.6a2 2 0 0 0 0-2.8l-1.6-1.6a2 2 0 0 0-2.8 0L13 11.6"/><path d="m13 11.6-2-2a1 1 0 0 0-1.4 0L3 16.2a2 2 0 0 0 0 2.8l1.6 1.6a2 2 0 0 0 2.8 0l6.6-6.6"/><path d="M8.5 7.5 10 9"/><path d="m14 5 1.5 1.5"/></svg>
                </div>
                <span className="gi-card-label">Volunteer</span>
              </div>
              <h4 className="gi-card-title">Shift Volunteering</h4>
              <p className="gi-card-desc">Support the hub on the ground — help run sessions, assist attendees, manage the booth, or coordinate logistics across all four days.</p>
              <a href="mailto:team@eiphub.xyz?subject=Volunteer%20Signup%20-%20EIP%20Hub%20Devcon%208" className="gi-card-cta" onClick={() => { openContactModal('volunteer', event) }}>
                <span>Sign Up</span>
                <svg className="gi-cta-arrow" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              </a>
            </div>

          </div>
        </div>

        {/* 4 Partner Tracks Header & Grid */}
        <div className="partner-tracks-header">
          <span className="partner-tracks-eyebrow">Partnership Tracks</span>
          <h3 className="partner-tracks-title">Choose Your Engagement Track</h3>
          <p className="partner-tracks-sub">Tailored tracks designed for developer communities, core client engineering teams, grant foundations, and independent researchers.</p>
        </div>

        <div className="partner-tracks-grid">
          {/* Track 1: Ecosystem */}
          <div className="partner-track-card">
            <div className="track-card-top">
              <div className="track-icon-pod">
                <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <span className="track-badge">Ecosystem Track</span>
            </div>
            <h4>Ecosystem &amp; Community</h4>
            <p>For developer communities, universities, and regional DAOs looking to co-curate community sessions, host author office hours, or coordinate regional developer delegations.</p>
            <ul className="partner-perk-list">
              <li>
                <span className="perk-check-pod">
                  <svg viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                <span>Session co-curation on Day 1 or Day 3</span>
              </li>
              <li>
                <span className="perk-check-pod">
                  <svg viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                <span>Community space presence &amp; track signage</span>
              </li>
              <li>
                <span className="perk-check-pod">
                  <svg viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                <span>On-site author mentorship recognition</span>
              </li>
            </ul>
          </div>

          {/* Track 2: Protocol */}
          <div className="partner-track-card">
            <div className="track-card-top">
              <div className="track-icon-pod">
                <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>
              </div>
              <span className="track-badge">Protocol Track</span>
            </div>
            <h4>Protocol &amp; Client Implementation</h4>
            <p>For execution/consensus client engineering teams, security audit firms, and core infrastructure providers to lead technical clinics and AllCoreDevs test sessions.</p>
            <ul className="partner-perk-list">
              <li>
                <span className="perk-check-pod">
                  <svg viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                <span>Dedicated 45-min hands-on testing workshop</span>
              </li>
              <li>
                <span className="perk-check-pod">
                  <svg viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                <span>Technical clinic station for spec review</span>
              </li>
              <li>
                <span className="perk-check-pod">
                  <svg viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                <span>Feature in technical recap publications</span>
              </li>
            </ul>
          </div>

          {/* Track 3: Grants */}
          <div className="partner-track-card">
            <div className="track-card-top">
              <div className="track-icon-pod">
                <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
              </div>
              <span className="track-badge">Grants Track</span>
            </div>
            <h4>Author Grants &amp; Travel Support</h4>
            <p>For foundations and grant programs providing travel and lodging support for independent, open-source EIP authors and researchers to attend in Mumbai.</p>
            <ul className="partner-perk-list">
              <li>
                <span className="perk-check-pod">
                  <svg viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                <span>Direct impact supporting open-source authors</span>
              </li>
              <li>
                <span className="perk-check-pod">
                  <svg viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                <span>Named author grant recognition on site</span>
              </li>
              <li>
                <span className="perk-check-pod">
                  <svg viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                <span>Stage acknowledgment during keynotes</span>
              </li>
            </ul>
          </div>

          {/* Track 4: Research */}
          <div className="partner-track-card">
            <div className="track-card-top">
              <div className="track-icon-pod">
                <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              <span className="track-badge">Research Track</span>
            </div>
            <h4>Research &amp; Media Documentation</h4>
            <p>For research outlets, media organizations, and data teams producing technical explainers, live stream coverage, and analytical dashboards.</p>
            <ul className="partner-perk-list">
              <li>
                <span className="perk-check-pod">
                  <svg viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                <span>Official media recording &amp; interview access</span>
              </li>
              <li>
                <span className="perk-check-pod">
                  <svg viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                <span>Co-distribution of session proceedings</span>
              </li>
              <li>
                <span className="perk-check-pod">
                  <svg viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                <span>Branding across stream overlays &amp; archive</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Partner Rules & Regulations (Crucial requirement!) */}
        <div className="partner-rules-card">
          <div className="partner-rules-top-bar"></div>
          
          <div className="partner-rules-header">
            <div className="partner-rules-header-left">
              <div className="rules-shield-pod">🛡️</div>
              <div>
                <div className="rules-header-eyebrow">ETHOS &amp; COMPLIANCE FRAMEWORK</div>
                <h4>Rules &amp; Regulations for EIP Hub Partners</h4>
                <span className="rules-header-sub">Mandatory compliance requirements upholding Ethereum's credibly neutral, open-source ethos</span>
              </div>
            </div>
            <div className="rules-header-badge">
              <span className="rules-header-badge-dot"></span>
              Community &amp; Project-Neutral · CC0
            </div>
          </div>

          <div className="partner-rules-grid">
            {/* Rule: Credible Neutrality */}
            <div className="partner-rule-tile rule-tile-1">
              <div className="rule-tile-top">
                <div className="rule-tile-id-group">
                  <div className="rule-tile-icon">⚖️</div>
                  <span className="rule-tile-tag">Credible Neutrality</span>
                </div>
              </div>
              <h5>Strict Credible Neutrality</h5>
              <p>Zero commercial pitching, token shilling, or speculative financial promotions. Content must focus purely on open technical specifications, research, client architectures, and EIP governance.</p>
              <div className="rule-tile-verify">
                <span style={{ color: '#38bdf8' }}>✓</span> Non-commercial &amp; un-shilled
              </div>
            </div>

            {/* Rule Tile 02 */}
            <div className="partner-rule-tile rule-tile-2">
              <div className="rule-tile-top">
                <div className="rule-tile-id-group">
                  <div className="rule-tile-icon">🔓</div>
                  <span className="rule-tile-tag">Permissible Code</span>
                </div>
              </div>
              <h5>Open Source &amp; Standards Focus</h5>
              <p>All presented code, test suites, libraries, and tooling must be public and open-source under permissive licenses (MIT, Apache 2.0, or CC0 for EIP specifications).</p>
              <div className="rule-tile-verify">
                <span style={{ color: '#818cf8' }}>✓</span> Public &amp; open-source repositories
              </div>
            </div>

            {/* Rule Tile 03 */}
            <div className="partner-rule-tile rule-tile-3">
              <div className="rule-tile-top">
                <div className="rule-tile-id-group">
                  <div className="rule-tile-icon">🤝</div>
                  <span className="rule-tile-tag">Devcon CoC</span>
                </div>
              </div>
              <h5>Adherence to Code of Conduct</h5>
              <p>Partners and booth staff must strictly respect the Devcon 8 and Ethereum Community Code of Conduct, ensuring an inclusive, welcoming, and harassment-free environment for all builders.</p>
              <div className="rule-tile-verify">
                <span style={{ color: '#10b981' }}>✓</span> Inclusive &amp; harassment-free
              </div>
            </div>

            {/* Rule Tile 04 */}
            <div className="partner-rule-tile rule-tile-4">
              <div className="rule-tile-top">
                <div className="rule-tile-id-group">
                  <div className="rule-tile-icon">⚡</div>
                  <span className="rule-tile-tag">Builder-First</span>
                </div>
              </div>
              <h5>Collaborative Participation</h5>
              <p>Partners are expected to actively engage with independent authors and first-time contributors through technical feedback and office hours rather than passive booth marketing.</p>
              <div className="rule-tile-verify">
                <span style={{ color: '#f59e0b' }}>✓</span> Hands-on mentorship &amp; dialogue
              </div>
            </div>
          </div>

          <div className="partner-action-footer">
            <div className="partner-action-left">
              <a href="https://forms.gle/dTqzAyXLdhmHtTMh8" target="_blank" rel="noopener noreferrer" className="btn-partner-inquire">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: '0' }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                <span>Partnership Application Form</span>
                <span className="btn-arr">↗</span>
              </a>
              <button type="button" className="btn-partner-forum" id="copy-partner-footer-btn" onClick={() => { copySpeakerEmail('copy-partner-footer-btn', 'copy-partner-footer-txt') }} style={{ cursor: 'pointer' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: '0' }}><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                <span id="copy-partner-footer-txt">Copy Email</span>
              </button>
              <a href="mailto:team@eiphub.xyz?subject=Partner%20Inquiry%20-%20EIP%20Hub%20Devcon%208" className="btn-partner-forum">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: '0' }}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span>Email Partnership Team</span>
                <span className="btn-arr">↗</span>
              </a>
              <a href="https://forum.devcon.org/t/devcon-8-india-community-hub-eip-hub/8747" target="_blank" rel="noopener noreferrer" className="btn-partner-forum">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: '0' }}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                <span>Devcon 8 Forum</span>
                <span className="btn-arr">↗</span>
              </a>
            </div>
            <div className="partner-quick-mail">
              <span className="partner-quick-dot"></span>
              <span className="partner-quick-label">Direct partnership inquiries:</span>
              <a href="mailto:team@eiphub.xyz?subject=Partner%20Inquiry%20-%20EIP%20Hub%20Devcon%208" className="partner-mail-pill">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span>team@eiphub.xyz</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* COMMUNITY: Tweet + Forum side by side */}
    </>
  );
}
