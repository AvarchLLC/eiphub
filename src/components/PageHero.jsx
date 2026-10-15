import React from 'react';
import { Link } from 'react-router-dom';

// Theme-driven palette mappings for dynamic vector coloring
const THEME_PALETTES = {
  amber: {
    primary: '#f59e0b',
    secondary: '#fbbf24',
    accent: '#ea580c',
    alt: '#d97706',
    glow: '#f59e0b',
    skyPrimary: '#f59e0b',
    skySecondary: '#d97706',
    bridgeAccent: '#fbbf24',
    gatewayFill: 'rgba(245,158,11,0.045)',
    palaceFill: 'rgba(251,191,36,0.05)',
    sea1: '#ea580c',
    sea2: '#f59e0b',
    sea3: '#fbbf24',
    sea4: '#6366f1',
    chakra: '#fbbf24',
    mandalaFill: 'rgba(245,158,11,0.018)'
  },
  cyan: {
    primary: '#06b6d4',
    secondary: '#38bdf8',
    accent: '#0284c7',
    alt: '#0369a1',
    glow: '#06b6d4',
    skyPrimary: '#06b6d4',
    skySecondary: '#0284c7',
    bridgeAccent: '#38bdf8',
    gatewayFill: 'rgba(6,182,212,0.045)',
    palaceFill: 'rgba(56,189,248,0.05)',
    sea1: '#0284c7',
    sea2: '#06b6d4',
    sea3: '#38bdf8',
    sea4: '#3b82f6',
    chakra: '#38bdf8',
    mandalaFill: 'rgba(6,182,212,0.018)'
  },
  purple: {
    primary: '#a855f7',
    secondary: '#c084fc',
    accent: '#7e22ce',
    alt: '#6b21a8',
    glow: '#a855f7',
    skyPrimary: '#a855f7',
    skySecondary: '#7e22ce',
    bridgeAccent: '#c084fc',
    gatewayFill: 'rgba(168,85,247,0.045)',
    palaceFill: 'rgba(192,132,252,0.05)',
    sea1: '#7e22ce',
    sea2: '#a855f7',
    sea3: '#c084fc',
    sea4: '#6366f1',
    chakra: '#c084fc',
    mandalaFill: 'rgba(168,85,247,0.018)'
  },
  emerald: {
    primary: '#10b981',
    secondary: '#34d399',
    accent: '#059669',
    alt: '#047857',
    glow: '#10b981',
    skyPrimary: '#10b981',
    skySecondary: '#059669',
    bridgeAccent: '#34d399',
    gatewayFill: 'rgba(16,185,129,0.045)',
    palaceFill: 'rgba(52,211,153,0.05)',
    sea1: '#059669',
    sea2: '#10b981',
    sea3: '#34d399',
    sea4: '#06b6d4',
    chakra: '#34d399',
    mandalaFill: 'rgba(16,185,129,0.018)'
  },
  indigo: {
    primary: '#6366f1',
    secondary: '#818cf8',
    accent: '#4f46e5',
    alt: '#3730a3',
    glow: '#6366f1',
    skyPrimary: '#6366f1',
    skySecondary: '#4f46e5',
    bridgeAccent: '#818cf8',
    gatewayFill: 'rgba(99,102,241,0.045)',
    palaceFill: 'rgba(129,140,248,0.05)',
    sea1: '#4f46e5',
    sea2: '#6366f1',
    sea3: '#818cf8',
    sea4: '#38bdf8',
    chakra: '#818cf8',
    mandalaFill: 'rgba(99,102,241,0.018)'
  }
};

/**
 * Indian Sacred Geometry Mandala (Web3 Astrolabe)
 * Matches the home page hero's sacred geometry watermark with smooth ambient rotation
 */
function PageHeroMandala({ theme = 'amber' }) {
  const p = THEME_PALETTES[theme] || THEME_PALETTES.amber;
  const gradId = `pgMandalaGrad_${theme}`;
  const secGradId = `pgMandalaSec_${theme}`;
  const glowId = `pgMandalaGlow_${theme}`;

  return (
    <svg
      className="page-hero-mandala"
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={p.primary} stopOpacity="0.7" />
          <stop offset="100%" stopColor={p.accent} stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id={secGradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={p.secondary} stopOpacity="0.6" />
          <stop offset="100%" stopColor={p.primary} stopOpacity="0.2" />
        </linearGradient>
        <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Outer Sacred Celestial Rings */}
      <circle cx="400" cy="400" r="388" stroke={p.primary} strokeWidth="1.2" strokeOpacity="0.28" strokeDasharray="6 8" />
      <circle cx="400" cy="400" r="372" stroke={p.secondary} strokeWidth="1" strokeOpacity="0.22" />
      <circle cx="400" cy="400" r="356" stroke={p.primary} strokeWidth="1.4" strokeOpacity="0.3" strokeDasharray="2 6" />

      {/* 4 Cardinal Nodes */}
      <line x1="766" y1="400" x2="778" y2="400" stroke={p.secondary} strokeWidth="1.5" strokeOpacity="0.55" />
      <circle cx="792" cy="400" r="2.5" fill={p.secondary} fillOpacity="0.8" />
      <line x1="400" y1="766" x2="400" y2="778" stroke={p.secondary} strokeWidth="1.5" strokeOpacity="0.55" />
      <circle cx="400" cy="792" r="2.5" fill={p.secondary} fillOpacity="0.8" />
      <line x1="34" y1="400" x2="22" y2="400" stroke={p.secondary} strokeWidth="1.5" strokeOpacity="0.55" />
      <circle cx="8" cy="400" r="2.5" fill={p.secondary} fillOpacity="0.8" />
      <line x1="400" y1="34" x2="400" y2="22" stroke={p.secondary} strokeWidth="1.5" strokeOpacity="0.55" />
      <circle cx="400" cy="8" r="2.5" fill={p.secondary} fillOpacity="0.8" />

      {/* Outer Diagonal Markers */}
      <line x1="658.8" y1="658.8" x2="667.3" y2="667.3" stroke={p.secondary} strokeWidth="1.5" strokeOpacity="0.55" />
      <circle cx="677.2" cy="677.2" r="2" fill={p.secondary} fillOpacity="0.8" />
      <line x1="141.2" y1="658.8" x2="132.7" y2="667.3" stroke={p.secondary} strokeWidth="1.5" strokeOpacity="0.55" />
      <circle cx="122.8" cy="677.2" r="2" fill={p.secondary} fillOpacity="0.8" />
      <line x1="141.2" y1="141.2" x2="132.7" y2="132.7" stroke={p.secondary} strokeWidth="1.5" strokeOpacity="0.55" />
      <circle cx="122.8" cy="122.8" r="2" fill={p.secondary} fillOpacity="0.8" />
      <line x1="658.8" y1="141.2" x2="667.3" y2="132.7" stroke={p.secondary} strokeWidth="1.5" strokeOpacity="0.55" />
      <circle cx="677.2" cy="122.8" r="2" fill={p.secondary} fillOpacity="0.8" />

      {/* 12 Radiant Lotus Astrolabe Petals */}
      <path d="M 650.0 400.0 Q 738.4 467.3 631.0 495.7" stroke={`url(#${gradId})`} strokeWidth="1.4" strokeOpacity="0.45" fill={p.mandalaFill} />
      <circle cx="738.4" cy="467.3" r="3" fill={p.primary} fillOpacity="0.85" filter={`url(#${glowId})`} />
      <path d="M 631.0 495.7 Q 686.9 591.7 576.8 576.8" stroke={`url(#${gradId})`} strokeWidth="1.4" strokeOpacity="0.45" fill={p.mandalaFill} />
      <circle cx="686.9" cy="591.7" r="3" fill={p.primary} fillOpacity="0.85" filter={`url(#${glowId})`} />
      <path d="M 576.8 576.8 Q 591.7 686.9 495.7 631.0" stroke={`url(#${gradId})`} strokeWidth="1.4" strokeOpacity="0.45" fill={p.mandalaFill} />
      <circle cx="591.7" cy="686.9" r="3" fill={p.primary} fillOpacity="0.85" filter={`url(#${glowId})`} />
      <path d="M 495.7 631.0 Q 467.3 738.4 400.0 650.0" stroke={`url(#${gradId})`} strokeWidth="1.4" strokeOpacity="0.45" fill={p.mandalaFill} />
      <circle cx="467.3" cy="738.4" r="3" fill={p.primary} fillOpacity="0.85" filter={`url(#${glowId})`} />
      <path d="M 400.0 650.0 Q 332.7 738.4 304.3 631.0" stroke={`url(#${gradId})`} strokeWidth="1.4" strokeOpacity="0.45" fill={p.mandalaFill} />
      <circle cx="332.7" cy="738.4" r="3" fill={p.primary} fillOpacity="0.85" filter={`url(#${glowId})`} />
      <path d="M 304.3 631.0 Q 208.3 686.9 223.2 576.8" stroke={`url(#${gradId})`} strokeWidth="1.4" strokeOpacity="0.45" fill={p.mandalaFill} />
      <circle cx="208.3" cy="686.9" r="3" fill={p.primary} fillOpacity="0.85" filter={`url(#${glowId})`} />
      <path d="M 223.2 576.8 Q 113.1 591.7 169.0 495.7" stroke={`url(#${gradId})`} strokeWidth="1.4" strokeOpacity="0.45" fill={p.mandalaFill} />
      <circle cx="113.1" cy="591.7" r="3" fill={p.primary} fillOpacity="0.85" filter={`url(#${glowId})`} />
      <path d="M 169.0 495.7 Q 61.6 467.3 150.0 400.0" stroke={`url(#${gradId})`} strokeWidth="1.4" strokeOpacity="0.45" fill={p.mandalaFill} />
      <circle cx="61.6" cy="467.3" r="3" fill={p.primary} fillOpacity="0.85" filter={`url(#${glowId})`} />
      <path d="M 150.0 400.0 Q 61.6 332.7 169.0 304.3" stroke={`url(#${gradId})`} strokeWidth="1.4" strokeOpacity="0.45" fill={p.mandalaFill} />
      <circle cx="61.6" cy="332.7" r="3" fill={p.primary} fillOpacity="0.85" filter={`url(#${glowId})`} />
      <path d="M 169.0 304.3 Q 113.1 208.3 223.2 223.2" stroke={`url(#${gradId})`} strokeWidth="1.4" strokeOpacity="0.45" fill={p.mandalaFill} />
      <circle cx="113.1" cy="208.3" r="3" fill={p.primary} fillOpacity="0.85" filter={`url(#${glowId})`} />
      <path d="M 223.2 223.2 Q 208.3 113.1 304.3 169.0" stroke={`url(#${gradId})`} strokeWidth="1.4" strokeOpacity="0.45" fill={p.mandalaFill} />
      <circle cx="208.3" cy="113.1" r="3" fill={p.primary} fillOpacity="0.85" filter={`url(#${glowId})`} />
      <path d="M 304.3 169.0 Q 332.7 61.6 400.0 150.0" stroke={`url(#${gradId})`} strokeWidth="1.4" strokeOpacity="0.45" fill={p.mandalaFill} />
      <circle cx="332.7" cy="61.6" r="3" fill={p.primary} fillOpacity="0.85" filter={`url(#${glowId})`} />
      <path d="M 400.0 150.0 Q 467.3 61.6 495.7 169.0" stroke={`url(#${gradId})`} strokeWidth="1.4" strokeOpacity="0.45" fill={p.mandalaFill} />
      <circle cx="467.3" cy="61.6" r="3" fill={p.primary} fillOpacity="0.85" filter={`url(#${glowId})`} />
      <path d="M 495.7 169.0 Q 591.7 113.1 576.8 223.2" stroke={`url(#${gradId})`} strokeWidth="1.4" strokeOpacity="0.45" fill={p.mandalaFill} />
      <circle cx="591.7" cy="113.1" r="3" fill={p.primary} fillOpacity="0.85" filter={`url(#${glowId})`} />
      <path d="M 576.8 223.2 Q 686.9 208.3 631.0 304.3" stroke={`url(#${gradId})`} strokeWidth="1.4" strokeOpacity="0.45" fill={p.mandalaFill} />
      <circle cx="686.9" cy="208.3" r="3" fill={p.primary} fillOpacity="0.85" filter={`url(#${glowId})`} />
      <path d="M 631.0 304.3 Q 738.4 332.7 650.0 400.0" stroke={`url(#${gradId})`} strokeWidth="1.4" strokeOpacity="0.45" fill={p.mandalaFill} />
      <circle cx="738.4" cy="332.7" r="3" fill={p.primary} fillOpacity="0.85" filter={`url(#${glowId})`} />

      {/* 8 Interlocking Sacred Diamond Polygons */}
      <polygon points="550,400 604.9,354.2 675,400 604.9,445.8" stroke={`url(#${secGradId})`} strokeWidth="1.3" strokeOpacity="0.5" fill="rgba(255,255,255,0.015)" />
      <line x1="550" y1="400" x2="675" y2="400" stroke={p.secondary} strokeWidth="0.9" strokeOpacity="0.35" strokeDasharray="3 3" />
      <circle cx="675" cy="400" r="3" fill={p.secondary} fillOpacity="0.9" />

      <polygon points="506.1,506.1 577.3,512.5 594.5,594.5 512.5,577.3" stroke={`url(#${secGradId})`} strokeWidth="1.3" strokeOpacity="0.5" fill="rgba(255,255,255,0.015)" />
      <line x1="506.1" y1="506.1" x2="594.5" y2="594.5" stroke={p.secondary} strokeWidth="0.9" strokeOpacity="0.35" strokeDasharray="3 3" />
      <circle cx="594.5" cy="594.5" r="3" fill={p.secondary} fillOpacity="0.9" />

      <polygon points="400,550 445.8,604.9 400,675 354.2,604.9" stroke={`url(#${secGradId})`} strokeWidth="1.3" strokeOpacity="0.5" fill="rgba(255,255,255,0.015)" />
      <line x1="400" y1="550" x2="400" y2="675" stroke={p.secondary} strokeWidth="0.9" strokeOpacity="0.35" strokeDasharray="3 3" />
      <circle cx="400" cy="675" r="3" fill={p.secondary} fillOpacity="0.9" />

      <polygon points="293.9,506.1 287.5,577.3 205.5,594.5 222.7,512.5" stroke={`url(#${secGradId})`} strokeWidth="1.3" strokeOpacity="0.5" fill="rgba(255,255,255,0.015)" />
      <line x1="293.9" y1="506.1" x2="205.5" y2="594.5" stroke={p.secondary} strokeWidth="0.9" strokeOpacity="0.35" strokeDasharray="3 3" />
      <circle cx="205.5" cy="594.5" r="3" fill={p.secondary} fillOpacity="0.9" />

      <polygon points="250,400 195.1,445.8 125,400 195.1,354.2" stroke={`url(#${secGradId})`} strokeWidth="1.3" strokeOpacity="0.5" fill="rgba(255,255,255,0.015)" />
      <line x1="250" y1="400" x2="125" y2="400" stroke={p.secondary} strokeWidth="0.9" strokeOpacity="0.35" strokeDasharray="3 3" />
      <circle cx="125" cy="400" r="3" fill={p.secondary} fillOpacity="0.9" />

      <polygon points="293.9,293.9 222.7,287.5 205.5,205.5 287.5,222.7" stroke={`url(#${secGradId})`} strokeWidth="1.3" strokeOpacity="0.5" fill="rgba(255,255,255,0.015)" />
      <line x1="293.9" y1="293.9" x2="205.5" y2="205.5" stroke={p.secondary} strokeWidth="0.9" strokeOpacity="0.35" strokeDasharray="3 3" />
      <circle cx="205.5" cy="205.5" r="3" fill={p.secondary} fillOpacity="0.9" />

      <polygon points="400,250 354.2,195.1 400,125 445.8,195.1" stroke={`url(#${secGradId})`} strokeWidth="1.3" strokeOpacity="0.5" fill="rgba(255,255,255,0.015)" />
      <line x1="400" y1="250" x2="400" y2="125" stroke={p.secondary} strokeWidth="0.9" strokeOpacity="0.35" strokeDasharray="3 3" />
      <circle cx="400" cy="125" r="3" fill={p.secondary} fillOpacity="0.9" />

      <polygon points="506.1,293.9 512.5,222.7 594.5,205.5 577.3,287.5" stroke={`url(#${secGradId})`} strokeWidth="1.3" strokeOpacity="0.5" fill="rgba(255,255,255,0.015)" />
      <line x1="506.1" y1="293.9" x2="594.5" y2="205.5" stroke={p.secondary} strokeWidth="0.9" strokeOpacity="0.35" strokeDasharray="3 3" />
      <circle cx="594.5" cy="205.5" r="3" fill={p.secondary} fillOpacity="0.9" />

      {/* 8 Theme Chakra Circles */}
      <circle cx="603.3" cy="484.2" r="7" stroke={p.chakra} strokeWidth="1" strokeOpacity="0.5" fill="none" />
      <circle cx="603.3" cy="484.2" r="2.2" fill={p.chakra} fillOpacity="0.85" />
      <circle cx="484.2" cy="603.3" r="7" stroke={p.chakra} strokeWidth="1" strokeOpacity="0.5" fill="none" />
      <circle cx="484.2" cy="603.3" r="2.2" fill={p.chakra} fillOpacity="0.85" />
      <circle cx="315.8" cy="603.3" r="7" stroke={p.chakra} strokeWidth="1" strokeOpacity="0.5" fill="none" />
      <circle cx="315.8" cy="603.3" r="2.2" fill={p.chakra} fillOpacity="0.85" />
      <circle cx="196.7" cy="484.2" r="7" stroke={p.chakra} strokeWidth="1" strokeOpacity="0.5" fill="none" />
      <circle cx="196.7" cy="484.2" r="2.2" fill={p.chakra} fillOpacity="0.85" />
      <circle cx="196.7" cy="315.8" r="7" stroke={p.chakra} strokeWidth="1" strokeOpacity="0.5" fill="none" />
      <circle cx="196.7" cy="315.8" r="2.2" fill={p.chakra} fillOpacity="0.85" />
      <circle cx="315.8" cy="196.7" r="7" stroke={p.chakra} strokeWidth="1" strokeOpacity="0.5" fill="none" />
      <circle cx="315.8" cy="196.7" r="2.2" fill={p.chakra} fillOpacity="0.85" />
      <circle cx="484.2" cy="196.7" r="7" stroke={p.chakra} strokeWidth="1" strokeOpacity="0.5" fill="none" />
      <circle cx="484.2" cy="196.7" r="2.2" fill={p.chakra} fillOpacity="0.85" />
      <circle cx="603.3" cy="315.8" r="7" stroke={p.chakra} strokeWidth="1" strokeOpacity="0.5" fill="none" />
      <circle cx="603.3" cy="315.8" r="2.2" fill={p.chakra} fillOpacity="0.85" />

      {/* Inner Concentric Core Rings */}
      <circle cx="400" cy="400" r="148" stroke={p.secondary} strokeWidth="1.4" strokeOpacity="0.4" strokeDasharray="6 6" />
      <circle cx="400" cy="400" r="122" stroke={p.primary} strokeWidth="1.2" strokeOpacity="0.45" />
      <circle cx="400" cy="400" r="92" stroke={p.secondary} strokeWidth="1" strokeOpacity="0.35" strokeDasharray="3 5" />

      {/* Center 8 Petal Lotus Heart */}
      <circle cx="445.0" cy="400.0" r="12" stroke={p.primary} strokeWidth="0.8" strokeOpacity="0.35" fill="none" />
      <circle cx="431.8" cy="431.8" r="12" stroke={p.primary} strokeWidth="0.8" strokeOpacity="0.35" fill="none" />
      <circle cx="400.0" cy="445.0" r="12" stroke={p.primary} strokeWidth="0.8" strokeOpacity="0.35" fill="none" />
      <circle cx="368.2" cy="431.8" r="12" stroke={p.primary} strokeWidth="0.8" strokeOpacity="0.35" fill="none" />
      <circle cx="355.0" cy="400.0" r="12" stroke={p.primary} strokeWidth="0.8" strokeOpacity="0.35" fill="none" />
      <circle cx="368.2" cy="368.2" r="12" stroke={p.primary} strokeWidth="0.8" strokeOpacity="0.35" fill="none" />
      <circle cx="400.0" cy="355.0" r="12" stroke={p.primary} strokeWidth="0.8" strokeOpacity="0.35" fill="none" />
      <circle cx="431.8" cy="368.2" r="12" stroke={p.primary} strokeWidth="0.8" strokeOpacity="0.35" fill="none" />
    </svg>
  );
}

/**
 * Mumbai Cyber Skyline Vector: Gateway of India, Taj Mahal Palace Hotel,
 * Bandra-Worli Sea Link & Queen's Necklace.
 * Dynamically tailored to the current page theme.
 */
function PageHeroSkyline({ theme = 'amber' }) {
  const p = THEME_PALETTES[theme] || THEME_PALETTES.amber;
  const skyThemeGradId = `pgSkyThemeGrad_${theme}`;
  const skySecGradId = `pgSkySecGrad_${theme}`;
  const seaGlowId = `pgSeaGlow_${theme}`;
  const glowFilterId = `pgSkyGlowFilter_${theme}`;

  return (
    <svg
      className="page-hero-mumbai-skyline"
      viewBox="0 0 1440 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={skyThemeGradId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={p.skyPrimary} stopOpacity="0.75" />
          <stop offset="100%" stopColor={p.skySecondary} stopOpacity="0.12" />
        </linearGradient>
        <linearGradient id={skySecGradId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={p.secondary} stopOpacity="0.8" />
          <stop offset="100%" stopColor={p.primary} stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id={seaGlowId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={p.sea1} stopOpacity="0.12" />
          <stop offset="25%" stopColor={p.sea2} stopOpacity="0.35" />
          <stop offset="70%" stopColor={p.sea3} stopOpacity="0.35" />
          <stop offset="100%" stopColor={p.sea4} stopOpacity="0.12" />
        </linearGradient>
        <filter id={glowFilterId} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Arabian Sea Water Baseline and Wave Ripples */}
      <line x1="0" y1="262" x2="1440" y2="262" stroke={`url(#${seaGlowId})`} strokeWidth="2" />
      <line x1="0" y1="267" x2="1440" y2="267" stroke={p.secondary} strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="10 16" />
      <line x1="0" y1="273" x2="1440" y2="273" stroke={p.primary} strokeWidth="0.6" strokeOpacity="0.2" strokeDasharray="4 12" />
      <line x1="0" y1="277" x2="1440" y2="277" stroke={p.secondary} strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="18 24" />

      {/* Left Modern High-Rises & Communication Antennas */}
      <path d="M 40,262 L 40,185 L 70,185 L 70,150 L 95,150 L 95,120 L 115,120 L 115,262" stroke={p.secondary} strokeWidth="1.2" strokeOpacity="0.4" fill="rgba(20,24,44,0.3)" />
      <line x1="105" y1="120" x2="105" y2="70" stroke={p.secondary} strokeWidth="1.4" strokeOpacity="0.7" />
      <circle cx="105" cy="68" r="2.5" fill={p.secondary} />
      <path d="M 125,262 L 125,135 L 155,135 L 155,90 L 175,90 L 175,262" stroke={p.primary} strokeWidth="1.2" strokeOpacity="0.4" fill="rgba(10,25,40,0.3)" />
      <line x1="165" y1="90" x2="165" y2="45" stroke={p.primary} strokeWidth="1.4" strokeOpacity="0.75" />
      <circle cx="165" cy="43" r="3" fill={p.secondary} />
      <line x1="135" y1="160" x2="150" y2="160" stroke={p.primary} strokeWidth="0.8" strokeOpacity="0.35" />
      <line x1="135" y1="180" x2="150" y2="180" stroke={p.primary} strokeWidth="0.8" strokeOpacity="0.35" />
      <line x1="135" y1="200" x2="150" y2="200" stroke={p.primary} strokeWidth="0.8" strokeOpacity="0.35" />

      {/* Taj Mahal Palace Hotel (Classical Arched Wings, Cupolas & Grand Central Dome) */}
      <path
        d="M 195,262 L 195,172 L 235,172 L 235,148 L 252,148 L 252,136 L 288,136 L 288,148 L 305,148 L 305,172 L 345,172 L 345,262"
        stroke={`url(#${skyThemeGradId})`}
        strokeWidth="1.5"
        strokeOpacity="0.65"
        fill={p.palaceFill}
      />
      {/* Taj Grand Central Dome */}
      <path d="M 254,136 Q 270,92 286,136" stroke={p.secondary} strokeWidth="1.6" strokeOpacity="0.85" fill={p.palaceFill} />
      <line x1="270" y1="92" x2="270" y2="72" stroke={p.secondary} strokeWidth="1.4" strokeOpacity="0.9" />
      <circle cx="270" cy="70" r="2.5" fill={p.secondary} filter={`url(#${glowFilterId})`} />
      {/* Flanking Side Cupolas */}
      <path d="M 215,172 Q 225,150 235,172" stroke={p.secondary} strokeWidth="1.2" strokeOpacity="0.7" fill={p.palaceFill} />
      <line x1="225" y1="150" x2="225" y2="138" stroke={p.secondary} strokeWidth="1" strokeOpacity="0.75" />
      <path d="M 305,172 Q 315,150 325,172" stroke={p.secondary} strokeWidth="1.2" strokeOpacity="0.7" fill={p.palaceFill} />
      <line x1="315" y1="150" x2="315" y2="138" stroke={p.secondary} strokeWidth="1" strokeOpacity="0.75" />
      {/* Tiered Classical Windows of Taj Palace */}
      <line x1="202" y1="190" x2="245" y2="190" stroke={p.primary} strokeWidth="0.8" strokeOpacity="0.35" />
      <line x1="202" y1="210" x2="245" y2="210" stroke={p.primary} strokeWidth="0.8" strokeOpacity="0.35" />
      <line x1="202" y1="230" x2="245" y2="230" stroke={p.primary} strokeWidth="0.8" strokeOpacity="0.35" />
      <line x1="295" y1="190" x2="338" y2="190" stroke={p.primary} strokeWidth="0.8" strokeOpacity="0.35" />
      <line x1="295" y1="210" x2="338" y2="210" stroke={p.primary} strokeWidth="0.8" strokeOpacity="0.35" />
      <line x1="295" y1="230" x2="338" y2="230" stroke={p.primary} strokeWidth="0.8" strokeOpacity="0.35" />
      <ellipse cx="270" cy="265" rx="65" ry="2" fill={p.secondary} fillOpacity="0.25" />

      {/* Gateway of India: Monument Facade, 4 Stepped Minarets, Grand Ceremonial Arch */}
      <path
        d="M 365,262 L 365,165 L 398,165 L 398,135 L 430,135 L 430,115 L 460,115 L 460,90 L 500,90 L 500,115 L 530,115 L 530,135 L 562,135 L 562,165 L 595,165 L 595,262"
        stroke={`url(#${skyThemeGradId})`}
        strokeWidth="1.8"
        strokeOpacity="0.7"
        fill={p.gatewayFill}
      />
      {/* 4 Corner Turret Domes */}
      <path d="M 388,135 L 388,118 Q 398,105 408,118 L 408,135" stroke={p.secondary} strokeWidth="1.3" strokeOpacity="0.65" fill={p.gatewayFill} />
      <line x1="398" y1="106" x2="398" y2="96" stroke={p.secondary} strokeWidth="1.3" strokeOpacity="0.8" />
      <circle cx="398" cy="94" r="2" fill={p.secondary} />
      <path d="M 425,115 L 425,98 Q 435,85 445,98 L 445,115" stroke={p.secondary} strokeWidth="1.3" strokeOpacity="0.65" fill={p.gatewayFill} />
      <line x1="435" y1="86" x2="435" y2="76" stroke={p.secondary} strokeWidth="1.3" strokeOpacity="0.8" />
      <circle cx="435" cy="74" r="2" fill={p.secondary} />
      <path d="M 515,115 L 515,98 Q 525,85 535,98 L 535,115" stroke={p.secondary} strokeWidth="1.3" strokeOpacity="0.65" fill={p.gatewayFill} />
      <line x1="525" y1="86" x2="525" y2="76" stroke={p.secondary} strokeWidth="1.3" strokeOpacity="0.8" />
      <circle cx="525" cy="74" r="2" fill={p.secondary} />
      <path d="M 552,135 L 552,118 Q 562,105 572,118 L 572,135" stroke={p.secondary} strokeWidth="1.3" strokeOpacity="0.65" fill={p.gatewayFill} />
      <line x1="562" y1="106" x2="562" y2="96" stroke={p.secondary} strokeWidth="1.3" strokeOpacity="0.8" />
      <circle cx="562" cy="94" r="2" fill={p.secondary} />

      {/* Grand Central Arch */}
      <path d="M 444,262 L 444,178 Q 480,132 516,178 L 516,262" stroke={p.secondary} strokeWidth="2" strokeOpacity="0.85" fill="rgba(6,7,13,0.7)" />
      <path d="M 454,262 L 454,188 Q 480,150 506,188 L 506,262" stroke={p.primary} strokeWidth="1.2" strokeOpacity="0.5" />
      {/* Central Upper Dome & Jewel Finial */}
      <path d="M 466,90 Q 480,62 494,90" stroke={p.secondary} strokeWidth="1.6" strokeOpacity="0.8" fill={p.gatewayFill} />
      <line x1="480" y1="63" x2="480" y2="48" stroke={p.secondary} strokeWidth="1.8" strokeOpacity="0.95" />
      <circle cx="480" cy="46" r="3.2" fill={p.secondary} filter={`url(#${glowFilterId})`} />

      {/* Decorative Jali Tracery and Steps */}
      <line x1="375" y1="180" x2="425" y2="180" stroke={p.primary} strokeWidth="0.8" strokeOpacity="0.35" />
      <line x1="375" y1="200" x2="425" y2="200" stroke={p.primary} strokeWidth="0.8" strokeOpacity="0.35" />
      <line x1="375" y1="220" x2="425" y2="220" stroke={p.primary} strokeWidth="0.8" strokeOpacity="0.35" />
      <line x1="535" y1="180" x2="585" y2="180" stroke={p.primary} strokeWidth="0.8" strokeOpacity="0.35" />
      <line x1="535" y1="200" x2="585" y2="200" stroke={p.primary} strokeWidth="0.8" strokeOpacity="0.35" />
      <line x1="535" y1="220" x2="585" y2="220" stroke={p.primary} strokeWidth="0.8" strokeOpacity="0.35" />
      <line x1="435" y1="264" x2="525" y2="264" stroke={p.secondary} strokeWidth="1" strokeOpacity="0.5" />
      <ellipse cx="480" cy="265" rx="75" ry="2.2" fill={p.secondary} fillOpacity="0.3" />

      {/* Queen's Necklace (Marine Drive Glowing Pearl Coastal Road) */}
      <path d="M 595,260 Q 710,240 820,252 T 1030,260" stroke={p.secondary} strokeWidth="1.8" strokeOpacity="0.75" strokeDasharray="2 10" strokeLinecap="round" />
      <path d="M 600,262 Q 712,243 820,254 T 1030,262" stroke={p.accent} strokeWidth="1.2" strokeOpacity="0.45" strokeDasharray="2 10" strokeLinecap="round" />

      {/* Bandra-Worli Sea Link: Soaring Diamond Cable Towers & Fan Stay Cables */}
      <polygon points="915,262 940,32 965,262" stroke={`url(#${skySecGradId})`} strokeWidth="2" strokeOpacity="0.85" fill="rgba(6,182,212,0.05)" />
      <polygon points="927,262 940,78 953,262" stroke={p.bridgeAccent} strokeWidth="1.3" strokeOpacity="0.5" />
      <circle cx="940" cy="30" r="3.5" fill={p.bridgeAccent} filter={`url(#${glowFilterId})`} />

      {/* Left Fan Cables */}
      <line x1="940" y1="70" x2="820" y2="262" stroke={p.primary} strokeWidth="1" strokeOpacity="0.4" />
      <line x1="940" y1="90" x2="850" y2="262" stroke={p.primary} strokeWidth="1" strokeOpacity="0.4" />
      <line x1="940" y1="110" x2="875" y2="262" stroke={p.primary} strokeWidth="1" strokeOpacity="0.4" />
      <line x1="940" y1="130" x2="895" y2="262" stroke={p.primary} strokeWidth="1" strokeOpacity="0.4" />
      <line x1="940" y1="150" x2="910" y2="262" stroke={p.primary} strokeWidth="1" strokeOpacity="0.4" />

      {/* Right Fan Cables */}
      <line x1="940" y1="70" x2="1060" y2="262" stroke={p.primary} strokeWidth="1" strokeOpacity="0.4" />
      <line x1="940" y1="90" x2="1030" y2="262" stroke={p.primary} strokeWidth="1" strokeOpacity="0.4" />
      <line x1="940" y1="110" x2="1005" y2="262" stroke={p.primary} strokeWidth="1" strokeOpacity="0.4" />
      <line x1="940" y1="130" x2="985" y2="262" stroke={p.primary} strokeWidth="1" strokeOpacity="0.4" />
      <line x1="940" y1="150" x2="970" y2="262" stroke={p.primary} strokeWidth="1" strokeOpacity="0.4" />

      {/* Secondary Pylon Tower */}
      <polygon points="1065,262 1085,80 1105,262" stroke={p.secondary} strokeWidth="1.5" strokeOpacity="0.55" fill="rgba(99,102,241,0.03)" />
      <circle cx="1085" cy="78" r="2.5" fill={p.secondary} />
      <line x1="1085" y1="105" x2="1010" y2="262" stroke={p.secondary} strokeWidth="0.8" strokeOpacity="0.28" />
      <line x1="1085" y1="125" x2="1035" y2="262" stroke={p.secondary} strokeWidth="0.8" strokeOpacity="0.28" />
      <line x1="1085" y1="105" x2="1160" y2="262" stroke={p.secondary} strokeWidth="0.8" strokeOpacity="0.28" />
      <line x1="1085" y1="125" x2="1135" y2="262" stroke={p.secondary} strokeWidth="0.8" strokeOpacity="0.28" />
      <ellipse cx="940" cy="265" rx="90" ry="2" fill={p.primary} fillOpacity="0.3" />

      {/* Right Modern Skyscrapers & Rooftop Beacons */}
      <path d="M 1180,262 L 1180,130 L 1215,130 L 1215,262" stroke={p.secondary} strokeWidth="1.2" strokeOpacity="0.35" fill="rgba(18,20,38,0.3)" />
      <path d="M 1230,262 L 1230,95 L 1260,95 L 1260,262" stroke={p.primary} strokeWidth="1.2" strokeOpacity="0.4" fill="rgba(20,20,30,0.3)" />
      <line x1="1245" y1="95" x2="1245" y2="52" stroke={p.primary} strokeWidth="1.5" strokeOpacity="0.7" />
      <circle cx="1245" cy="50" r="2.5" fill={p.secondary} />
      <path d="M 1275,262 L 1275,150 L 1305,150 L 1305,262" stroke={p.primary} strokeWidth="1" strokeOpacity="0.3" />
      <path d="M 1320,262 L 1320,180 L 1360,180 L 1360,262" stroke={p.secondary} strokeWidth="1" strokeOpacity="0.25" />
      <line x1="1340" y1="180" x2="1340" y2="120" stroke={p.secondary} strokeWidth="1" strokeOpacity="0.5" />
      <circle cx="1340" cy="118" r="2" fill={p.secondary} />
      <path d="M 1375,262 L 1375,140 L 1410,140 L 1410,262" stroke={p.primary} strokeWidth="1" strokeOpacity="0.3" />
    </svg>
  );
}

export default function PageHero({
  eyebrow = 'Devcon 8 India · Mumbai',
  badgeText = 'Devcon 8 Community Hub',
  title,
  subtitle,
  dateVenue = 'Jio World Centre, Mumbai · Nov 3–6, 2026',
  theme = 'amber', // 'amber', 'cyan', 'purple', 'emerald', 'indigo'
  highlights = [],
  actions = [],
  breadcrumb
}) {
  return (
    <section className={`page-hero page-hero-${theme}`} aria-label={eyebrow}>
      {/* Luminous Aurora Mesh Layers */}
      <div className="page-hero-aurora" aria-hidden="true">
        <div className={`page-aurora-beam page-beam-1 beam-${theme}`}></div>
        <div className={`page-aurora-beam page-beam-2 beam-${theme}`}></div>
        <div className={`page-aurora-beam page-beam-3 beam-${theme}`}></div>
        <div className="page-aurora-glow"></div>
      </div>

      {/* Perspective 3D Digital Floor Grid */}
      <div className="page-hero-grid-perspective" aria-hidden="true"></div>

      {/* Smooth Vignette Falloff */}
      <div className="page-hero-vignette" aria-hidden="true"></div>

      {/* Indian Sacred Geometry Mandala & Rangoli (Web3 Astrolabe) */}
      <PageHeroMandala theme={theme} />

      {/* Mumbai Cyber Skyline: Gateway of India, Taj Palace, Sea Link & Queen's Necklace */}
      <PageHeroSkyline theme={theme} />

      {/* Foreground Content */}
      <div className="wrap page-hero-content">
        {/* Optional Breadcrumb */}
        {breadcrumb && (
          <div className="page-hero-breadcrumb">
            {breadcrumb}
          </div>
        )}

        {/* Top Badges Bar */}
        <div className="page-hero-badge-bar">
          <div className="page-hero-badge">
            <span className="page-hero-dot"></span>
            <strong>{badgeText}</strong>
            <span className="page-hero-sep">·</span>
            <span>{eyebrow}</span>
          </div>
          {dateVenue && (
            <div className="page-hero-venue">
              <span className="venue-dot"></span>
              <span>{dateVenue}</span>
            </div>
          )}
        </div>

        {/* Artistic Page Title */}
        <h1 className="page-hero-title">
          {title}
        </h1>

        {/* Subtitle Description */}
        {subtitle && (
          <p className="page-hero-sub">
            {subtitle}
          </p>
        )}

        {/* High-Impact Highlights / Metric Chips */}
        {highlights.length > 0 && (
          <div className="page-hero-highlights">
            {highlights.map((h, idx) => (
              <div key={idx} className="page-hero-chip">
                {h.icon && <span className="chip-icon">{h.icon}</span>}
                <div className="chip-text">
                  <span className="chip-main">{h.label}</span>
                  {h.sub && <span className="chip-sub">{h.sub}</span>}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Action CTAs */}
        {actions.length > 0 && (
          <div className="page-hero-actions">
            {actions.map((act, idx) => {
              const className = `btn-page-hero ${act.variant === 'primary' ? 'btn-page-hero-primary' : 'btn-page-hero-outline'}`;

              if (act.to) {
                return (
                  <Link key={idx} to={act.to} className={className} onClick={act.onClick}>
                    <span>{act.label}</span>
                    {act.arrow && <span className="btn-arr">{act.arrow}</span>}
                  </Link>
                );
              }
              return (
                <a
                  key={idx}
                  href={act.href}
                  target={act.isExternal ? '_blank' : undefined}
                  rel={act.isExternal ? 'noopener noreferrer' : undefined}
                  className={className}
                  onClick={act.onClick}
                >
                  <span>{act.label}</span>
                  {act.arrow && <span className="btn-arr">{act.arrow}</span>}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

