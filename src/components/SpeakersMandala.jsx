import React, { useState, useEffect, useRef } from 'react';

// All 18 Confirmed Protocol Leaders & Authors (Full Cosmos Orbit Presentation)
const ALL_SPEAKERS = [
  // 1. Pooja Ranjan
  {
    id: 'pooja',
    modalId: 'pooja',
    name: 'Pooja Ranjan',
    org: 'ECH Institute',
    track: 'Day 1 · Keynote & Governance',
    badgeIcon: '🎙️',
    photo: 'Assets/speakers/pooja-ranjan.jpg',
    color: '#fbbf24',
    glowColor: 'rgba(251, 191, 36, 0.75)',
    dotType: 'yellow'
  },
  // 2. Jochem Brouwer
  {
    id: 'jochem',
    modalId: 'jochem',
    name: 'Jochem Brouwer',
    org: 'Ethereum Foundation · EIP Editor',
    track: 'Day 1 · EIP Process Review',
    badgeIcon: '🖋️',
    photo: 'Assets/photos/speaker-jochem-brouwer.jpg',
    color: '#fbbf24',
    glowColor: 'rgba(251, 191, 36, 0.75)',
    dotType: 'yellow'
  },
  // 3. Justin Florentine
  {
    id: 'justin',
    modalId: 'justin',
    name: 'Justin Florentine',
    org: 'Besu',
    track: 'Day 2 · LUCID Encrypted Mempool',
    badgeIcon: '🔐',
    photo: 'Assets/speakers/justin-florentine.jpg',
    color: '#818cf8',
    glowColor: 'rgba(129, 140, 248, 0.75)',
    dotType: 'blue'
  },
  // 4. Stefan
  {
    id: 'stefan',
    modalId: 'stefan',
    name: 'Stefan',
    org: 'ethPandaOps · EF',
    track: 'Day 1 · Devnets & Upgrades',
    badgeIcon: '⚡',
    photo: 'Assets/speakers/stefan.jpg',
    color: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.75)',
    dotType: 'blue'
  },
  // 5. Rafael Matias
  {
    id: 'rafael',
    modalId: 'rafael',
    name: 'Rafael Matias',
    org: 'ethPandaOps',
    track: 'Day 1 · Kurtosis Tooling',
    badgeIcon: '🛠️',
    photo: 'Assets/speakers/rafael.jpg',
    color: '#06b6d4',
    glowColor: 'rgba(6, 182, 212, 0.75)',
    dotType: 'blue'
  },
  // 6. Maria Silva
  {
    id: 'maria',
    modalId: 'maria',
    name: 'Maria Silva',
    org: 'Ethereum Foundation',
    track: 'Day 2 · Glamsterdam Repricing',
    badgeIcon: '📊',
    photo: 'Assets/speakers/maria-silva.jpg',
    color: '#06b6d4',
    glowColor: 'rgba(6, 182, 212, 0.75)',
    dotType: 'blue'
  },
  // 7. Dr. Daniel Nagy
  {
    id: 'daniel',
    modalId: 'daniel',
    name: 'Dr. Daniel Nagy',
    org: 'ERC-8009 · Red Duck',
    track: 'Day 3 · Clear-Signing',
    badgeIcon: '🔐',
    photo: 'Assets/speakers/daniel-nagy.png',
    color: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.75)',
    dotType: 'blue'
  },
  // 8. German Abal
  {
    id: 'german',
    modalId: 'german-combined',
    name: 'German Abal',
    org: 'EVVM',
    track: 'Day 1 & Day 4 · Tooling & EVVM',
    badgeIcon: '⚡',
    photo: 'Assets/speakers/german-abal.jpg',
    color: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.75)',
    dotType: 'yellow'
  },
  // 9. Gavin Birch
  {
    id: 'gavin',
    modalId: 'gavin',
    name: 'Gavin Birch',
    org: 'Armada',
    track: 'Day 2 · Frame Txs (EIP-8141)',
    badgeIcon: '🛡️',
    photo: 'Assets/speakers/gavin-birch.jpg',
    color: '#818cf8',
    glowColor: 'rgba(129, 140, 248, 0.75)',
    dotType: 'blue'
  },
  // 10. Simona Serban
  {
    id: 'simona',
    modalId: 'simona',
    name: 'Simona Serban',
    org: 'ETHCluj',
    track: 'Day 4 · Trustless Collaboration',
    badgeIcon: '🤝',
    photo: 'Assets/speakers/simona-serban.jpeg',
    color: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.75)',
    dotType: 'yellow'
  },
  // 11. Abhimanyu Nag
  {
    id: 'abhimanyu',
    modalId: 'abhimanyu',
    name: 'Abhimanyu Nag',
    org: 'Univ. of Alberta / Canvas',
    track: 'Day 2 · Single Slot Finality',
    badgeIcon: '⏱️',
    photo: 'Assets/speakers/abhimanyu-nag.png',
    color: '#a855f7',
    glowColor: 'rgba(168, 85, 247, 0.75)',
    dotType: 'yellow'
  },
  // 12. Rachit Anand Srivastava
  {
    id: 'rachit',
    modalId: 'rachit',
    name: 'Rachit Anand Srivastava',
    org: 'Avail Project',
    track: 'Day 2 · PeerDAS & ZK',
    badgeIcon: '🔬',
    photo: 'Assets/speakers/rachit-anand-srivastava.png',
    color: '#ec4899',
    glowColor: 'rgba(236, 72, 153, 0.75)',
    dotType: 'blue'
  },
  // 13. Abhay Singh
  {
    id: 'abhay',
    modalId: 'abhay',
    name: 'Abhay Singh',
    org: 'HyprEarn',
    track: 'Day 4 · AI & Crypto Rails',
    badgeIcon: '🤖',
    photo: 'Assets/speakers/abhay-singh.jpg',
    color: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.75)',
    dotType: 'yellow'
  },
  // 14. Dhruvang Choudhari
  {
    id: 'dhruvang',
    modalId: 'dhruvang',
    name: 'Dhruvang Choudhari',
    org: 'AMINA Bank',
    track: 'Day 3 · ERC Standards',
    badgeIcon: '🏦',
    photo: 'Assets/speakers/dhruvang-choudhari.jpg',
    color: '#fbbf24',
    glowColor: 'rgba(251, 191, 36, 0.75)',
    dotType: 'yellow'
  },
  // 15. Aditya Kumar
  {
    id: 'aditya',
    modalId: 'aditya',
    name: 'Aditya Kumar',
    org: 'Vara / Gear Foundation',
    track: 'Day 4 · Privacy & Onchain Credit',
    badgeIcon: '🔐',
    photo: 'Assets/speakers/aditya-kumar.jpg',
    color: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.75)',
    dotType: 'yellow'
  },
  // 16. Dhruv Gera
  {
    id: 'dhruv',
    modalId: 'dhruv',
    name: 'Dhruv Gera',
    org: 'DashX',
    track: 'Day 4 · ERC-7984 Confidential Tokens',
    badgeIcon: '💳',
    photo: 'Assets/speakers/dhruv-gera.jpg',
    color: '#6ee7b7',
    glowColor: 'rgba(110, 231, 183, 0.75)',
    dotType: 'yellow'
  },
  // 17. Charchit Kumawat
  {
    id: 'charchit',
    modalId: 'charchit',
    name: 'Charchit Kumawat',
    org: 'GeSIM.xyz',
    track: 'Day 4 · DePIN & Privacy',
    badgeIcon: '📡',
    photo: 'Assets/speakers/charchit-kumawat.jpg',
    color: '#fbbf24',
    glowColor: 'rgba(251, 191, 36, 0.75)',
    dotType: 'yellow'
  },
  // 18. Yudhishthra
  {
    id: 'yudhishthra',
    modalId: 'yudhishthra',
    name: 'Yudhishthra',
    org: 'Aqua0',
    track: 'Day 4 · Stablecoins & FX',
    badgeIcon: '💱',
    photo: 'Assets/speakers/yudhishthra.jpg',
    color: '#34d399',
    glowColor: 'rgba(52, 211, 153, 0.75)',
    dotType: 'blue'
  }
];

// Reusable Sacred Geometry Mandala SVG Component
function SacredMandalaSvg({ id = 'main' }) {
  const gY = `dotGlowY_${id}`;
  const gB = `dotGlowB_${id}`;
  const tGold = `triGoldGrad_${id}`;
  const tCyan = `triCyanGrad_${id}`;

  return (
    <svg
      className="mandala-big-svg"
      viewBox="0 0 1000 1000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={tGold} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#ea580c" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id={tCyan} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
        </linearGradient>
        <filter id={gY} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id={gB} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Concentric Coordinate Orbit Tracks */}
      <circle cx="500" cy="500" r="490" stroke="#fbbf24" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="8 10" />
      <circle cx="500" cy="500" r="465" stroke="#818cf8" strokeWidth="1.1" strokeOpacity="0.25" />
      <circle cx="500" cy="500" r="415" stroke="rgba(251, 191, 36, 0.45)" strokeWidth="1.6" strokeDasharray="6 8" />
      <circle cx="500" cy="500" r="340" stroke="#06b6d4" strokeWidth="1.2" strokeOpacity="0.35" strokeDasharray="4 6" />
      <circle cx="500" cy="500" r="265" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="1.6" strokeDasharray="6 8" />
      <circle cx="500" cy="500" r="185" stroke="rgba(251, 191, 36, 0.4)" strokeWidth="1.2" strokeDasharray="4 4" />
      <circle cx="500" cy="500" r="105" stroke="rgba(129, 140, 248, 0.4)" strokeWidth="1.2" />

      {/* SACRED GEOMETRY TRIANGLES (SRI YANTRA / 12-POINTED SACRED STAR INTERLOCKING) */}
      {/* Primary Upward Sacred Gold Triangle with Glowing Yellow Dots */}
      <polygon
        points="500,105 845,695 155,695"
        stroke={`url(#${tGold})`}
        strokeWidth="1.8"
        strokeOpacity="0.65"
        fill="rgba(251, 191, 36, 0.02)"
      />
      <circle cx="500" cy="105" r="4.5" fill="#fbbf24" filter={`url(#${gY})`} />
      <circle cx="845" cy="695" r="4.5" fill="#fbbf24" filter={`url(#${gY})`} />
      <circle cx="155" cy="695" r="4.5" fill="#fbbf24" filter={`url(#${gY})`} />

      {/* Primary Downward Sacred Cyan Triangle with Glowing Blue Dots */}
      <polygon
        points="500,895 155,305 845,305"
        stroke={`url(#${tCyan})`}
        strokeWidth="1.8"
        strokeOpacity="0.65"
        fill="rgba(6, 182, 212, 0.02)"
      />
      <circle cx="500" cy="895" r="4.5" fill="#06b6d4" filter={`url(#${gB})`} />
      <circle cx="155" cy="305" r="4.5" fill="#06b6d4" filter={`url(#${gB})`} />
      <circle cx="845" cy="305" r="4.5" fill="#06b6d4" filter={`url(#${gB})`} />

      {/* Lateral Horizontal Sacred Gold Triangle */}
      <polygon
        points="895,500 305,845 305,155"
        stroke={`url(#${tGold})`}
        strokeWidth="1.4"
        strokeOpacity="0.45"
        fill="none"
      />
      <circle cx="895" cy="500" r="4" fill="#fbbf24" filter={`url(#${gY})`} />
      <circle cx="305" cy="845" r="4" fill="#fbbf24" filter={`url(#${gY})`} />
      <circle cx="305" cy="155" r="4" fill="#fbbf24" filter={`url(#${gY})`} />

      {/* Lateral Horizontal Sacred Cyan Triangle */}
      <polygon
        points="105,500 695,155 695,845"
        stroke={`url(#${tCyan})`}
        strokeWidth="1.4"
        strokeOpacity="0.45"
        fill="none"
      />
      <circle cx="105" cy="500" r="4" fill="#06b6d4" filter={`url(#${gB})`} />
      <circle cx="695" cy="155" r="4" fill="#06b6d4" filter={`url(#${gB})`} />
      <circle cx="695" cy="845" r="4" fill="#06b6d4" filter={`url(#${gB})`} />

      {/* Nested Secondary Sacred Triangles (Inner Sri Yantra Matrix) */}
      <polygon
        points="500,230 735,635 265,635"
        stroke="#fbbf24"
        strokeWidth="1.2"
        strokeOpacity="0.4"
        fill="none"
      />
      <polygon
        points="500,770 265,365 735,365"
        stroke="#38bdf8"
        strokeWidth="1.2"
        strokeOpacity="0.4"
        fill="none"
      />

      {/* Radiating 36 Coordinate Astrolabe Rays with Alternating Dots */}
      {[...Array(36)].map((_, i) => {
        const angle = (i * 360) / 36;
        const rad = (angle * Math.PI) / 180;
        const x1 = 500 + Math.cos(rad) * 445;
        const y1 = 500 + Math.sin(rad) * 445;
        const x2 = 500 + Math.cos(rad) * 485;
        const y2 = 500 + Math.sin(rad) * 485;
        const isMajor = i % 3 === 0;
        const isYellow = i % 2 === 0;

        return (
          <g key={`ray-${id}-${i}`}>
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={isMajor ? '#fbbf24' : '#818cf8'}
              strokeWidth={isMajor ? 1.8 : 0.8}
              strokeOpacity={isMajor ? 0.8 : 0.3}
            />
            {isMajor && (
              <circle
                cx={500 + Math.cos(rad) * 490}
                cy={500 + Math.sin(rad) * 490}
                r="3.5"
                fill={isYellow ? '#fbbf24' : '#06b6d4'}
                fillOpacity="0.95"
                filter={isYellow ? `url(#${gY})` : `url(#${gB})`}
              />
            )}
          </g>
        );
      })}

      {/* 12 Radiant Outer Sacred Diamonds with Cyan Dots */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 360) / 12;
        const rad = (angle * Math.PI) / 180;
        const tipX = 500 + Math.cos(rad) * 415;
        const tipY = 500 + Math.sin(rad) * 415;
        return (
          <circle
            key={`orb-dot-outer-${id}-${i}`}
            cx={tipX}
            cy={tipY}
            r="3.8"
            fill={i % 2 === 0 ? '#fbbf24' : '#06b6d4'}
            filter={i % 2 === 0 ? `url(#${gY})` : `url(#${gB})`}
          />
        );
      })}

      {/* 10 Inner Orbit Star Dots */}
      {[...Array(10)].map((_, i) => {
        const angle = (i * 360) / 10;
        const rad = (angle * Math.PI) / 180;
        const tipX = 500 + Math.cos(rad) * 265;
        const tipY = 500 + Math.sin(rad) * 265;
        return (
          <circle
            key={`orb-dot-inner-${id}-${i}`}
            cx={tipX}
            cy={tipY}
            r="3.4"
            fill={i % 2 === 0 ? '#06b6d4' : '#fbbf24'}
            filter={i % 2 === 0 ? `url(#${gB})` : `url(#${gY})`}
          />
        );
      })}
    </svg>
  );
}

export default function SpeakersMandala() {
  const [speakersList, setSpeakersList] = useState(ALL_SPEAKERS);
  const [isShuffling, setIsShuffling] = useState(false);
  const arenaRef = useRef(null);

  // Preload all 18 speaker avatars into browser memory so transitions are instant & zero-flicker
  useEffect(() => {
    ALL_SPEAKERS.forEach(spk => {
      const img = new Image();
      img.src = spk.photo;
    });
  }, []);

  // Set rotation speed strictly to 0.5x (slow, cinematic, readable pace)
  const applyPlaybackRate = (rate = 0.5) => {
    if (!arenaRef.current || typeof arenaRef.current.getAnimations !== 'function') return;
    try {
      const anims = arenaRef.current.getAnimations({ subtree: true });
      anims.forEach(anim => {
        if (anim.animationName && (
          anim.animationName.startsWith('orbit') ||
          anim.animationName.startsWith('spin') ||
          anim.animationName.includes('astrolabe') ||
          anim.animationName.includes('mandala')
        )) {
          anim.playbackRate = rate;
        }
      });
    } catch (e) {
      // safe fallback
    }
  };

  useEffect(() => {
    applyPlaybackRate(0.5);
    const t = setTimeout(() => applyPlaybackRate(0.5), 100);
    return () => clearTimeout(t);
  }, []);

  // Seamless Shuffle logic: graceful celestial cross-dissolve
  const shuffleOrbits = () => {
    if (isShuffling) return;
    setIsShuffling(true);

    setTimeout(() => {
      setSpeakersList(prev => {
        const arr = [...prev];
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
      });

      requestAnimationFrame(() => {
        setTimeout(() => {
          setIsShuffling(false);
        }, 50);
      });
    }, 650);
  };

  // Periodic automatic rotation (gentle 14s interval)
  useEffect(() => {
    const timer = setInterval(() => {
      shuffleOrbits();
    }, 14000);
    return () => clearInterval(timer);
  }, [isShuffling]);

  const outerSpeakers = speakersList.slice(0, 10);
  const innerSpeakers = speakersList.slice(10, 18);

  return (
    <section className="speakers-mandala-section" id="speakers-preview">
      {/* Background Wide Constellation Field Covering All Screen Space */}
      <div className="mandala-wide-space-canvas" aria-hidden="true">
        <div className="wide-space-radial-left"></div>
        <div className="wide-space-radial-right"></div>
        
        {/* GRAND EXPANSIVE BACKGROUND MANDALA (Exact Same Sacred Mandala Spanning Deep Space) */}
        <div className="grand-bg-mandala spin-clockwise-ultra-slow">
          <SacredMandalaSvg id="grand_bg" />
        </div>

        {/* SMALL MOVING MANDALAS SHOWING IN BLANK SPACE (Exact Same Sacred Mandala Satellites) */}
        {/* Top-Left Blank Space */}
        <div className="mini-mandala-orb-pod mini-pod-tl float-orbit-1">
          <div className="mini-mandala-inner spin-clockwise-slow">
            <SacredMandalaSvg id="mini_tl" />
          </div>
        </div>

        {/* Bottom-Left Blank Space */}
        <div className="mini-mandala-orb-pod mini-pod-bl float-orbit-2">
          <div className="mini-mandala-inner spin-counter-slow">
            <SacredMandalaSvg id="mini_bl" />
          </div>
        </div>

        {/* Mid-Left Blank Space */}
        <div className="mini-mandala-orb-pod mini-pod-ml float-orbit-3">
          <div className="mini-mandala-inner spin-counter-slow">
            <SacredMandalaSvg id="mini_ml" />
          </div>
        </div>

        {/* Top-Right Blank Space */}
        <div className="mini-mandala-orb-pod mini-pod-tr float-orbit-3">
          <div className="mini-mandala-inner spin-counter-slow">
            <SacredMandalaSvg id="mini_tr" />
          </div>
        </div>

        {/* Bottom-Right Blank Space */}
        <div className="mini-mandala-orb-pod mini-pod-br float-orbit-4">
          <div className="mini-mandala-inner spin-clockwise-slow">
            <SacredMandalaSvg id="mini_br" />
          </div>
        </div>

        {/* Mid-Right Blank Space */}
        <div className="mini-mandala-orb-pod mini-pod-mr float-orbit-1">
          <div className="mini-mandala-inner spin-clockwise-slow">
            <SacredMandalaSvg id="mini_mr" />
          </div>
        </div>

        <div className="wide-space-star-dots">
          <span className="cosmic-star cs-1"></span>
          <span className="cosmic-star cs-2"></span>
          <span className="cosmic-star cs-3"></span>
          <span className="cosmic-star cs-4"></span>
          <span className="cosmic-star cs-5"></span>
          <span className="cosmic-star cs-6"></span>
          <span className="cosmic-star cs-7"></span>
          <span className="cosmic-star cs-8"></span>
        </div>
      </div>

      <div className="wrap mandala-wrap-wide">
        <div className="mandala-header text-center">
          <div className="sec-eyebrow">Speakers &amp; Contributors</div>
          <h2 className="sec-title">Protocol Leaders Shaping Standards</h2>
          <p className="sec-body">
            Explore the core developers, EIP editors, and client implementers on stage at Jio World Centre, Mumbai. Click any speaker to view talk details and biography.
          </p>
        </div>

        {/* EXPANSIVE SEAMLESS DUAL-ORBIT MANDALA ARENA */}
        <div
          ref={arenaRef}
          className="mandala-arena"
        >
          {/* AMBIENT AURORA BACKDROP GLOW */}
          <div className="mandala-ambient-aurora" aria-hidden="true"></div>

          {/* MAIN SACRED GEOMETRY MANDALA WITH SACRED TRIANGLES & BLUE/YELLOW DOTS */}
          <div className="mandala-svg-layer spin-clockwise" aria-hidden="true">
            <SacredMandalaSvg id="main" />
          </div>

          {/* GLOWING CENTERPIECE: OFFICIAL EIP HUB LOGO */}
          <div className="mandala-center-emblem-core" aria-hidden="true">
            <div className="emblem-pulse-ring"></div>
            <div className="emblem-outer-astrolabe-ring"></div>
            <div className="emblem-core-pod">
              <div className="mandala-center-logo-wrap">
                <div className="mandala-center-brand">
                  <img src="Assets/images/eip-wordmark-white.png" alt="EIP" className="brand-text-img mandala-brand-text" />
                  <img src="Assets/images/eiphub-white.png" alt="EIP Hub Emblem" className="brand-emblem mandala-brand-emblem" />
                  <img src="Assets/images/hub-wordmark-white.png" alt="Hub" className="brand-text-img mandala-brand-text" />
                </div>
                <div className="mandala-center-badge">
                  <span className="mandala-center-dot"></span>
                  <span>DEVCON 8 · MUMBAI</span>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* ORBIT 1 (OUTER CIRCLE): 10 SPEAKERS MOVING CLOCKWISE */}
          {/* ============================================================== */}
          <div className="mandala-orbit-wheel wheel-outer" aria-label="Outer speakers track">
            {outerSpeakers.map((spk, idx) => (
              <div
                key={`outer-slot-${idx}`}
                className={`speaker-orbit-slot slot-outer-${idx}`}
              >
                <button
                  type="button"
                  className={`speaker-interactive-node ${isShuffling ? 'is-shuffling' : ''}`}
                  onClick={() => window.openSpeakerModal && window.openSpeakerModal(spk.modalId)}
                  aria-label={`Open talk and bio for ${spk.name}`}
                >
                  <div
                    className="speaker-photo-pod-big pod-outer"
                    style={{
                      borderColor: spk.color,
                      boxShadow: `0 0 24px ${spk.glowColor}`
                    }}
                  >
                    <img
                      src={spk.photo}
                      alt={spk.name}
                      className="speaker-photo-img-big"
                      loading="lazy"
                    />
                  </div>

                  <div className="speaker-downside-info">
                    <span className="speaker-downside-name">{spk.name}</span>
                    <span className="speaker-downside-role" style={{ color: spk.color }}>
                      {spk.org}
                    </span>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* ============================================================== */}
          {/* ORBIT 2 (INNER CIRCLE): 6 SPEAKERS MOVING COUNTER-CLOCKWISE */}
          {/* ============================================================== */}
          <div className="mandala-orbit-wheel wheel-inner" aria-label="Inner speakers track">
            {innerSpeakers.map((spk, idx) => (
              <div
                key={`inner-slot-${idx}`}
                className={`speaker-orbit-slot slot-inner-${idx}`}
              >
                <button
                  type="button"
                  className={`speaker-interactive-node ${isShuffling ? 'is-shuffling' : ''}`}
                  onClick={() => window.openSpeakerModal && window.openSpeakerModal(spk.modalId)}
                  aria-label={`Open talk and bio for ${spk.name}`}
                >
                  <div
                    className="speaker-photo-pod-big pod-inner"
                    style={{
                      borderColor: spk.color,
                      boxShadow: `0 0 20px ${spk.glowColor}`
                    }}
                  >
                    <img
                      src={spk.photo}
                      alt={spk.name}
                      className="speaker-photo-img-big"
                      loading="lazy"
                    />
                  </div>

                  <div className="speaker-downside-info">
                    <span className="speaker-downside-name">{spk.name}</span>
                    <span className="speaker-downside-role" style={{ color: spk.color }}>
                      {spk.org}
                    </span>
                  </div>
                </button>
              </div>
            ))}
          </div>


        </div>

      </div>
    </section>
  );
}
