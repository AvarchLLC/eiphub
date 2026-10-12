import React, { useState } from 'react';

const SESSIONS = [
  {
    vid: "wH76j1BDZkc",
    title: "From Research to Reality: An EIP's Journey",
    speaker: "Pooja Ranjan",
    handle: "@poojaranjan19",
    twitter: "https://x.com/poojaranjan19",
    role: "Founder, ECH Institute (@ECHInstitute)",
    avatar: "Assets/speakers/pooja-ranjan.jpg",
    tag: "🎙️ Keynote Presentation",
    origin: "Devconnect Argentina",
    captionTag: "Inaugural EIP Summit Keynote",
    captionDesc: "Watch how the concept of uniting EIP editors, client developers, and authors in person transformed the Ethereum standards pipeline.",
    metaTag: "Keynote",
    tagClass: "tag-keynote"
  },
  {
    vid: "ZVHHsKS6Kxo",
    title: "Don't Just Use Ethereum: Help Shape It!",
    speaker: "Jochem Brouwer",
    handle: "@JochemBrouwer96",
    twitter: "https://x.com/JochemBrouwer96",
    role: "EIP Editor & Ethereum Protocol Contributor",
    avatar: "Assets/photos/speaker-jochem-brouwer.jpg",
    tag: "🌱 Community & Standards",
    origin: "Devconnect Argentina",
    captionTag: "Community & Standards Onboarding",
    captionDesc: "How any builder can contribute directly to core protocol specifications and make an impact on Ethereum's future.",
    metaTag: "Community",
    tagClass: "tag-community"
  },
  {
    vid: "i8HO-bAivno",
    title: "From Draft to Inclusion: A Proposal's Journey",
    speaker: "Jihoon Song",
    handle: "@jih2nn",
    twitter: "https://x.com/jih2nn",
    role: "Consensus Researcher, Ethereum Foundation (EIP-7805 FOCIL Co-Author)",
    avatar: "Assets/photos/speaker-jihoon-song.jpg",
    tag: "🔄 Lifecycle & Consensus",
    origin: "Devconnect Argentina",
    captionTag: "Proposal Lifecycle & ACD Reviews",
    captionDesc: "A deep dive into navigating the EIP lifecycle, addressing editor triage, and securing AllCoreDevs consensus.",
    metaTag: "Lifecycle",
    tagClass: "tag-process"
  },
  {
    vid: "9yTrzNCd0Gk",
    title: "From Spec to Sync: Ensuring Upgrade Readiness",
    speaker: "Parithosh Jayanthi",
    handle: "@parithosh_j",
    twitter: "https://x.com/parithosh_j",
    role: "DevOps & Testing Lead, Ethereum Foundation",
    avatar: "Assets/photos/speaker-parithosh-jayanthi.jpg",
    tag: "⚙️ Testing & DevOps",
    origin: "Devconnect Argentina",
    captionTag: "Testing & Upgrade Coordination",
    captionDesc: "How client implementers and testnet devnets coordinate to bring complex upgrades safely from spec to mainnet.",
    metaTag: "Client Sync",
    tagClass: "tag-testing"
  },
  {
    vid: "h5sUMWD9Yus",
    title: "Code is Law: Avoiding Spec-ulation for Faster Forks",
    speaker: "Danceratopz & raxhvl",
    handle: "@danceratopz & @raxhvl",
    twitter: "https://x.com/danceratopz",
    role: "Ethereum Foundation (STEEL) & Protocol Guild",
    avatar: "Assets/photos/speaker-danceratopz-raxhvl.jpg",
    tag: "🧪 Spec & Review Reform",
    origin: "Devconnect Argentina",
    captionTag: "Client Testing & Review Reform",
    captionDesc: "Revamping the EIP review workflow, test coverage standards, and avoiding speculation for faster, safer hard forks.",
    metaTag: "Spec & Sync",
    tagClass: "tag-testing"
  },
  {
    vid: "HpRNP8tc0lY",
    title: "EIP-8007: A Major Update to EVM Gas Prices",
    speaker: "Maria Inês Silva",
    handle: "@misilva73",
    twitter: "https://x.com/misilva73",
    role: "Research Data Scientist, Ethereum Foundation (Author EIP-8007)",
    avatar: "Assets/speakers/maria-silva.jpg",
    tag: "⚡ Core Protocol EIP",
    origin: "Devconnect Argentina",
    captionTag: "Protocol Architecture & Gas Pricing",
    captionDesc: "The EIP Summit at Devconnect was a deep dive into the engine room of Ethereum! In this session, Maria Inês Silva breaks down EIP-8007, an essential proposal to harmonize and rebalance EVM gas costs across operations to eliminate execution bottlenecks and optimize block throughput.",
    metaTag: "Core EIP",
    tagClass: "tag-protocol"
  },
  {
    vid: "WcGYlzUChUE",
    title: "From Idea to EIP: A First-Time Author's Journey",
    speaker: "German Abal",
    handle: "@ariutokintumi",
    twitter: "https://x.com/ariutokintumi",
    role: "Co-Founder & CTO, EVVM (@RollAMate) · Core Team, ETH Cinco De Mayo",
    avatar: "Assets/photos/speaker-german-abal.jpg",
    tag: "✍️ Author Mentorship",
    origin: "Devconnect Argentina",
    captionTag: "First-Time Author Mentorship",
    captionDesc: "Practical guidance on transforming an initial research idea into a formal EIP pull request with peer consensus.",
    metaTag: "Author Guide",
    tagClass: "tag-process"
  },
  {
    vid: "RaeBZiE0rDA",
    title: "ERC-8028: AI Assets On-Chain with DAT",
    speaker: "Thirumurugan S",
    handle: "@0xThiru",
    twitter: "https://x.com/0xThiru",
    role: "Author ERC-8028 · DevRel & Architect, LazAI / Alith",
    avatar: "Assets/photos/speaker-thirumurugan.jpg",
    tag: "🤖 ERC Standards",
    origin: "Devconnect Argentina",
    captionTag: "AI Assets & Data Anchoring Tokens",
    captionDesc: "Standardizing semi-fungible tokens for verifiable AI models, datasets, and deterministic on-chain revenue sharing.",
    metaTag: "ERC Standard",
    tagClass: "tag-community"
  },
  {
    vid: "YHZviU19di0",
    title: "Meet EIP Editor: Live Triage & Guidance",
    speaker: "Sam Wilson",
    handle: "@_SamWilsn_",
    twitter: "https://x.com/_SamWilsn_",
    role: "EIP Editor & Ethereum Core Protocol Researcher",
    avatar: "Assets/photos/speaker-sam-wilson.jpg",
    tag: "🖋️ EIP Editor Triage",
    origin: "Devconnect Argentina",
    captionTag: "EIP Editor Office Hours & Triage",
    captionDesc: "Behind the scenes of EIP editing: reviewing PRs, maintaining standards hygiene, and mentoring new contributors.",
    metaTag: "Meet Editors",
    tagClass: "tag-keynote"
  },
  {
    vid: "_szGTp49L5E",
    title: "ERC-1202: Voting Interface Standards",
    speaker: "Victor Zhou",
    handle: "@xinbenlv",
    twitter: "https://x.com/xinbenlv",
    role: "Lead Author ERC-1202 & ERC-5247 · Standards Working Group Lead",
    avatar: "Assets/photos/speaker-victor-zhou.jpg",
    tag: "🗳️ Governance Standards",
    origin: "Devconnect Argentina",
    captionTag: "On-Chain Voting & Standard Interfaces",
    captionDesc: "Universal voting contract interfaces for DAO governance, signaling, and decentralized consensus primitives.",
    metaTag: "Governance",
    tagClass: "tag-protocol"
  }
];

export default function SummitArchive() {
  const [activeVid, setActiveVid] = useState('wH76j1BDZkc');

  const activeSession = SESSIONS.find(s => s.vid === activeVid) || SESSIONS[0];

  const handleSelect = (session, event) => {
    setActiveVid(session.vid);
    if (typeof window !== 'undefined' && typeof window.selectSummitVideo === 'function') {
      try {
        window.selectSummitVideo(event.currentTarget);
      } catch (e) {}
    }
  };

  return (
    <>
      <div className="summit-archive-section-bg" id="summit-archive">
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: '38px' }}>
            <div className="sec-eyebrow" style={{ color: '#fbbf24' }}>Origins &amp; Summit History</div>
            <div className="sec-title" style={{ color: '#fff' }}>Carrying Forward the Torch: Devconnect Argentina 2025</div>
            <p className="sec-body">How the inaugural standalone EIP Summit at Devconnect Argentina (Buenos Aires) united researchers, editors, and authors face-to-face — sparking the global movement that now expands into the EIP Hub at Devcon 8 India.</p>
          </div>

          {/* EIP Summit Legacy & Context Spotlight */}
          <div className="summit-legacy-card" id="summit-spotlight">
            <div className="summit-badge">
              <span className="summit-badge-beacon"></span>
              <span>The Evolution of Standards Gathering · From EIP Summit to Devcon 8</span>
            </div>
            <h3 className="summit-heading">Carrying Forward the Torch of the EIP Summit</h3>
            
            {/* Split Story & Mission */}
            <div className="summit-story-block">
              <div className="summit-story-lead">
                <p>
                  In 2025 at Devconnect Argentina (Buenos Aires), the <strong>ECH Institute</strong> and community leaders hosted the inaugural <strong>EIP Summit</strong>—the first dedicated, standalone summit created to tackle the bottleneck in Ethereum's standardization pipeline. By gathering core developers, EIP editors, client implementers, and application authors under one roof, the EIP Summit transformed asynchronous GitHub discussions into high-velocity face-to-face breakthroughs.
                </p>
                <p>
                  Now in 2026, that spirit expands into the <strong>EIP Hub at Devcon 8 India</strong> inside the Jio World Centre, Mumbai. Spanning 4 full days, the hub serves as an active protocol laboratory, author clinic, and contributor launchpad for the global Ethereum ecosystem.
                </p>
              </div>
              <div className="summit-story-cards-row">
                {/* Card 1: Buenos Aires 2025 Origin */}
                <div className="summit-story-card">
                  <div className="summit-story-card-body">
                    <span className="summit-story-card-tag">🌱 Origin · Buenos Aires 2025</span>
                    <h4>The First Standalone EIP Summit</h4>
                    <p>Founded by ECH Institute to unite researchers, editors, and authors face-to-face, replacing months of slow GitHub comments with immediate consensus.</p>
                  </div>
                  <div className="summit-story-card-footer">
                    <a href="https://lu.ma/5lwboseu" target="_blank" rel="noopener noreferrer" className="summit-card-action-link">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      <span>View EIP Summit on Luma</span>
                      <span style={{ fontSize: '11px' }}>↗</span>
                    </a>
                  </div>
                </div>

                {/* Card 2: Mumbai 2026 Expansion */}
                <div className="summit-story-card">
                  <div className="summit-story-card-body">
                    <span className="summit-story-card-tag">🚀 Expansion · Mumbai 2026</span>
                    <h4>4 Dedicated Programming Days</h4>
                    <p>Connecting the full research-to-reality pipeline to India's thriving developer frontier with live clinics, client interop, and first-time author mentoring.</p>
                  </div>
                  <div className="summit-story-card-footer">
                    <a href="#community-booth" className="summit-card-action-link summit-card-action-link-secondary">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      <span>Devcon 8 India · Jio World Centre</span>
                      <span style={{ fontSize: '11px' }}>↓</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* EIP Summit Video Feature Theatre */}
            <div className="summit-video-section" id="summit-video">
              <div className="summit-video-header">
                <div className="summit-video-header-left">
                  <div className="summit-video-eyebrow">
                    <span className="video-live-dot"></span>
                    <span id="summit-video-eyebrow-text">Watch the Origin Story · Recorded Live at Devconnect Argentina</span>
                  </div>
                  <h4 className="summit-section-title">Inaugural EIP Summit Session Archive</h4>
                  <p className="summit-section-sub">10 recorded deep-dives, keynotes, and workshops bridging the research-to-reality pipeline for Ethereum standards.</p>
                </div>
                <div className="summit-video-header-actions">
                  <a href="https://lu.ma/5lwboseu" target="_blank" rel="noopener noreferrer" className="btn-video-channel" style={{ borderColor: 'rgba(245,158,11,0.35)', color: '#fbbf24' }} title="View Inaugural EIP Summit Event Page on Luma">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: '0' }}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    <span>EIP Summit Luma</span>
                    <span className="btn-arr">↗</span>
                  </a>
                  <a href="https://www.youtube.com/@ECHinstitute" target="_blank" rel="noopener noreferrer" className="btn-video-channel">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: '0' }}><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                    <span>ECH Institute Channel</span>
                    <span className="btn-arr">↗</span>
                  </a>
                </div>
              </div>

              {/* Video Player Frame (Top) + Session Playlist Scroller (Down Below) */}
              <div className="summit-video-theatre-grid">
                {/* Main Player & Active Session Details (Top Full Width) */}
                <div className="summit-player-wrapper">
                  <div className="summit-player-container">
                    <iframe
                      id="summit-video-iframe"
                      src={`https://www.youtube-nocookie.com/embed/${activeSession.vid}?rel=0&modestbranding=1&enablejsapi=1`}
                      title={`${activeSession.title} with ${activeSession.speaker}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy">
                    </iframe>
                  </div>

                  {/* Active Talk & Speaker Card */}
                  <div className="summit-active-card">
                    <div className="summit-active-card-top">
                      <div className="summit-active-meta-badges">
                        <span className="summit-speaker-tag" id="summit-speaker-tag">{activeSession.tag}</span>
                        <span className="summit-speaker-origin" id="summit-speaker-origin">{activeSession.origin}</span>
                        <span className="caption-tag" id="summit-caption-tag">{activeSession.captionTag}</span>
                      </div>
                      <a href={`https://www.youtube.com/watch?v=${activeSession.vid}`} target="_blank" rel="noopener noreferrer" className="btn-active-yt" id="summit-video-yt-link" title="Watch full talk on YouTube">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="#ff0000" style={{ flexShrink: '0' }}><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                        <span>Watch on YouTube ↗</span>
                      </a>
                    </div>

                    <h4 className="summit-active-title" id="summit-video-title">{activeSession.title}</h4>

                    <div className="summit-active-speaker-row" id="summit-speaker-profile">
                      <div className="summit-active-avatar-pod">
                        <img id="summit-speaker-avatar" src={activeSession.avatar} alt={activeSession.speaker} className="summit-active-avatar-img" />
                      </div>
                      <div className="summit-active-speaker-info">
                        <div className="summit-active-speaker-header-line">
                          <span className="summit-active-speaker-name" id="summit-speaker-name">{activeSession.speaker}</span>
                          {activeSession.twitter && (
                            <a id="summit-speaker-x-link" href={activeSession.twitter} target="_blank" rel="noopener noreferrer" className="summit-active-x-badge" title="Verified Profile">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                              <span id="summit-speaker-handle">{activeSession.handle}</span>
                            </a>
                          )}
                        </div>
                        <div className="summit-active-speaker-role" id="summit-speaker-role">{activeSession.role}</div>
                      </div>
                    </div>

                    <p className="summit-active-desc" id="summit-caption-desc">
                      {activeSession.captionDesc}
                    </p>
                  </div>
                </div>

                {/* Session Playlist / Talk Selector (Down Below, Full Width Scroller) */}
                <div className="summit-playlist-col">
                  <div className="summit-playlist-heading">
                    <div className="playlist-heading-left">
                      <span className="playlist-icon">📺</span>
                      <span>Summit Session Recordings</span>
                    </div>
                    <span className="playlist-badge" id="summit-playlist-badge">10 Summit Sessions</span>
                  </div>

                  <div className="summit-playlist-items" id="summit-playlist-items">
                    {SESSIONS.map((session) => {
                      const isActive = session.vid === activeVid;
                      return (
                        <button
                          key={session.vid}
                          type="button"
                          className={`summit-session-item ${isActive ? 'active' : ''}`}
                          onClick={(e) => handleSelect(session, e)}
                          data-vid={session.vid}
                          data-title={session.title}
                          data-speaker={session.speaker}
                          data-handle={session.handle}
                          data-twitter={session.twitter}
                          data-role={session.role}
                          data-avatar={session.avatar}
                          data-tag={session.tag}
                          data-origin={session.origin}
                          data-caption-tag={session.captionTag}
                          data-caption-desc={session.captionDesc}
                        >
                          <div className="session-thumb-pod">
                            <img src={session.avatar} alt={session.speaker} className="session-thumb-img" />
                          </div>
                          <div className="session-info">
                            <div className="session-meta">
                              <span className={`session-tag ${session.tagClass}`}>{session.metaTag}</span>
                              <span className="session-origin">Devconnect</span>
                            </div>
                            <div className="session-title">{session.title}</div>
                            <div className="session-speaker">
                              {session.speaker} <span className="spk-handle">{session.handle}</span>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* EIP Summit Inaugural Snapshot (3 Authentic Metrics) */}
            <div className="summit-block-header">
              <div className="summit-block-eyebrow">Inaugural Summit Snapshot</div>
              <h4 className="summit-block-title">By the Numbers</h4>
              <p className="summit-block-sub">Original milestones and metrics from the inaugural EIP Summit at Devconnect Argentina.</p>
            </div>

            <div className="summit-numbers-grid">
              {/* Card 1: 2025 */}
              <div className="summit-num-card card-year">
                <div className="summit-num-topbar">
                  <div className="summit-num-icon-pod">📅</div>
                  <span className="summit-num-pill">Milestone</span>
                </div>
                <div className="summit-num-val">2025</div>
                <div className="summit-num-title">Inaugural EIP Summit</div>
                <p className="summit-num-sub">Devconnect Argentina · Buenos Aires</p>
              </div>

              {/* Card 2: 200+ */}
              <div className="summit-num-card card-attendees">
                <div className="summit-num-topbar">
                  <div className="summit-num-icon-pod">👥</div>
                  <span className="summit-num-pill">Full House</span>
                </div>
                <div className="summit-num-val">200+</div>
                <div className="summit-num-title">Attendees at Full House</div>
                <p className="summit-num-sub">Reached Maximum Registration Capacity on Luma</p>
              </div>

              {/* Card 3: 1st */}
              <div className="summit-num-card card-edition">
                <div className="summit-num-topbar">
                  <div className="summit-num-icon-pod">🏛️</div>
                  <span className="summit-num-pill">Historic</span>
                </div>
                <div className="summit-num-val">1st</div>
                <div className="summit-num-title">Dedicated Standards Summit</div>
                <p className="summit-num-sub">First Standalone Gathering in Ethereum History for EIPs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
