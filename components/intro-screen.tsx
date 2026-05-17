'use client'

import { useState } from 'react'

interface IntroScreenProps {
  onComplete: () => void
}

export function IntroScreen({ onComplete }: IntroScreenProps) {
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleStart = () => {
    setIsTransitioning(true)
    setTimeout(onComplete, 1100)
  }

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
    >
      {/* ═══════════════ SKY GRADIENT ═══════════════ */}
      <div className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #2a1a6e 0%, #3d2a9e 15%, #5b3fbb 28%, #7c5fc8 40%, #5b8ed4 55%, #3a9fd8 68%, #2ab8e8 80%, #1ecbe8 90%, #2ad4d8 100%)',
        }}
      />

      {/* ═══════════════ SUN / LIGHT SOURCE ═══════════════ */}
      <div className="absolute pointer-events-none"
        style={{
          top: '-5%', left: '50%', transform: 'translateX(-50%)',
          width: '300px', height: '300px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,220,180,0.35) 0%, rgba(200,160,255,0.2) 40%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      {/* ═══════════════ LIGHT RAYS ═══════════════ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { left: '18%', width: 90,  skew: -22, opacity: 0.22, delay: '0s',   dur: '5s' },
          { left: '28%', width: 60,  skew: -14, opacity: 0.16, delay: '1s',   dur: '6s' },
          { left: '38%', width: 110, skew: -6,  opacity: 0.28, delay: '0.5s', dur: '4.5s' },
          { left: '52%', width: 80,  skew: 5,   opacity: 0.18, delay: '1.5s', dur: '5.5s' },
          { left: '63%', width: 130, skew: 14,  opacity: 0.30, delay: '0.8s', dur: '5s' },
          { left: '74%', width: 70,  skew: 22,  opacity: 0.15, delay: '2s',   dur: '6s' },
          { left: '82%', width: 100, skew: 28,  opacity: 0.20, delay: '0.3s', dur: '4s' },
        ].map((r, i) => (
          <div key={i} className="absolute top-0"
            style={{
              left: r.left,
              width: r.width,
              height: '90%',
              background: `linear-gradient(180deg, rgba(200,220,255,${r.opacity}) 0%, transparent 100%)`,
              transform: `skewX(${r.skew}deg)`,
              borderRadius: '0 0 60% 60%',
              animation: `lightRayMove ${r.dur} ease-in-out ${r.delay} infinite`,
            }}
          />
        ))}
      </div>

      {/* ═══════════════ CLOUDS (top area) ═══════════════ */}
      <div className="absolute pointer-events-none" style={{ top: '5%', left: '-5%', width: '35%', opacity: 0.55 }}>
        <svg viewBox="0 0 400 160" fill="none">
          <ellipse cx="160" cy="100" rx="130" ry="55" fill="rgba(255,255,255,0.7)" />
          <ellipse cx="100" cy="115" rx="80" ry="45" fill="rgba(255,255,255,0.65)" />
          <ellipse cx="230" cy="110" rx="100" ry="50" fill="rgba(255,255,255,0.6)" />
          <ellipse cx="60" cy="128" rx="55" ry="35" fill="rgba(220,200,255,0.6)" />
          <ellipse cx="310" cy="120" rx="70" ry="38" fill="rgba(200,220,255,0.55)" />
          {/* shine */}
          <ellipse cx="155" cy="82" rx="60" ry="18" fill="rgba(255,255,255,0.4)" />
        </svg>
      </div>
      <div className="absolute pointer-events-none" style={{ top: '2%', right: '-3%', width: '30%', opacity: 0.5 }}>
        <svg viewBox="0 0 350 140" fill="none">
          <ellipse cx="190" cy="90" rx="120" ry="50" fill="rgba(255,255,255,0.65)" />
          <ellipse cx="120" cy="105" rx="75" ry="40" fill="rgba(255,255,255,0.55)" />
          <ellipse cx="270" cy="100" rx="80" ry="42" fill="rgba(220,200,255,0.5)" />
          <ellipse cx="200" cy="72" rx="55" ry="15" fill="rgba(255,255,255,0.35)" />
        </svg>
      </div>

      {/* ═══════════════ MOUNTAINS / ROCKS - RIGHT ═══════════════ */}
      <div className="absolute pointer-events-none" style={{ bottom: '18%', right: '0', width: '42%' }}>
        <svg viewBox="0 0 500 380" fill="none" preserveAspectRatio="xMaxYMax meet">
          {/* Far mountain */}
          <path d="M200 380 L280 180 L370 380 Z" fill="rgba(100,80,160,0.45)" />
          {/* Main large rock */}
          <path d="M280 380 L320 200 L340 220 L360 180 L380 210 L420 160 L480 380 Z"
            fill="#5b4fa0" />
          <path d="M340 220 L360 180 L380 210 L420 160 L480 380 L380 380 Z"
            fill="#4a3d8f" />
          {/* Rock face highlights */}
          <path d="M360 180 L370 220 L380 210 L370 195 Z" fill="rgba(180,160,255,0.3)" />
          <path d="M420 160 L430 200 L445 185 L435 168 Z" fill="rgba(180,160,255,0.25)" />
          {/* Secondary rock */}
          <path d="M380 380 L400 260 L430 280 L460 240 L510 380 Z" fill="#3d2f7a" />
          <path d="M430 280 L450 255 L465 270 L460 240 L510 380 Z" fill="#2e2260" />
          {/* Rock texture lines */}
          <path d="M320 240 Q340 228 360 235" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" fill="none" />
          <path d="M350 200 Q368 190 382 198" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" fill="none" />
          {/* Green vegetation (subtle) */}
          <ellipse cx="300" cy="200" rx="20" ry="12" fill="rgba(80,180,120,0.4)" />
          <ellipse cx="460" cy="244" rx="16" ry="10" fill="rgba(80,180,120,0.35)" />
          <ellipse cx="445" cy="238" rx="12" ry="8" fill="rgba(100,200,140,0.3)" />
        </svg>
      </div>

      {/* ═══════════════ MOUNTAINS - LEFT ═══════════════ */}
      <div className="absolute pointer-events-none" style={{ bottom: '18%', left: '0', width: '28%' }}>
        <svg viewBox="0 0 320 300" fill="none" preserveAspectRatio="xMinYMax meet">
          <path d="M-20 300 L60 150 L100 180 L140 120 L200 300 Z" fill="rgba(70,55,120,0.5)" />
          <path d="M60 150 L100 180 L140 120 L120 135 L100 115 L80 140 Z" fill="rgba(100,80,160,0.35)" />
          <path d="M-20 300 L30 200 L60 220 L100 300 Z" fill="rgba(50,35,100,0.55)" />
          {/* highlight */}
          <path d="M62 152 L80 162 L90 155 L80 148 Z" fill="rgba(200,180,255,0.2)" />
        </svg>
      </div>

      {/* ═══════════════ LIGHTHOUSE - RIGHT ═══════════════ */}
      <div className="absolute pointer-events-none"
        style={{ bottom: '20%', right: '7%', width: 'clamp(55px,7vw,85px)', filter: 'drop-shadow(0 0 15px rgba(250,220,80,0.5))' }}>
        <svg viewBox="0 0 90 200" fill="none">
          {/* Base / cliff */}
          <path d="M10 200 L80 200 L75 155 L15 155 Z" fill="#3a2f6a" />
          {/* Tower body */}
          <path d="M28 155 L62 155 L58 60 L32 60 Z" fill="white" fillOpacity="0.9" />
          {/* Red stripes */}
          <path d="M29 130 L61 130 L60 115 L30 115 Z" fill="#f43f5e" opacity="0.85" />
          <path d="M31 95 L59 95 L58 80 L32 80 Z" fill="#f43f5e" opacity="0.8" />
          {/* Lantern room */}
          <rect x="26" y="52" width="38" height="14" rx="3" fill="#60a5fa" opacity="0.9" />
          <ellipse cx="45" cy="52" rx="22" ry="9" fill="white" opacity="0.85" />
          {/* Light bulb */}
          <circle cx="45" cy="52" r="9" fill="#fef08a" opacity="0.95" />
          <circle cx="45" cy="52" r="5" fill="white" />
          {/* Glow */}
          <circle cx="45" cy="52" r="16" fill="rgba(254,240,138,0.25)" />
          {/* Light beams */}
          <path d="M45 43 L12 15" stroke="rgba(254,240,138,0.55)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M45 43 L78 18" stroke="rgba(254,240,138,0.55)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M45 43 L2 35" stroke="rgba(254,240,138,0.3)" strokeWidth="2" strokeLinecap="round" />
          <path d="M45 43 L88 30" stroke="rgba(254,240,138,0.3)" strokeWidth="2" strokeLinecap="round" />
          {/* Cap */}
          <path d="M26 52 L64 52 L54 40 L36 40 Z" fill="#94a3b8" opacity="0.8" />
          <ellipse cx="45" cy="40" rx="10" ry="5" fill="#cbd5e1" opacity="0.9" />
          {/* Balcony rail */}
          <rect x="22" y="64" width="46" height="4" rx="2" fill="#94a3b8" opacity="0.7" />
          {/* Windows */}
          <rect x="36" y="100" width="18" height="12" rx="3" fill="#7dd3fc" opacity="0.7" />
          <rect x="36" y="125" width="18" height="12" rx="3" fill="#7dd3fc" opacity="0.65" />
          {/* Door */}
          <path d="M37 155 L37 140 Q45 135 53 140 L53 155 Z" fill="#7dd3fc" opacity="0.5" />
        </svg>
      </div>

      {/* ═══════════════ OCEAN WATER ═══════════════ */}
      {/* Deep water bg */}
      <div className="absolute pointer-events-none"
        style={{
          bottom: 0, left: 0, right: 0, height: '22%',
          background: 'linear-gradient(180deg, #1a6db5 0%, #0e3a7d 50%, #0a1f5e 100%)',
        }}
      />
      {/* Wave 1 */}
      <div className="absolute pointer-events-none" style={{ bottom: '17%', left: 0, width: '200%' }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: '100%', height: '50px', animation: 'waveFlow 8s linear infinite' }}>
          <path d="M0,20 C120,40 240,0 360,20 C480,40 600,0 720,20 C840,40 960,0 1080,20 C1200,40 1320,5 1440,20 L1440,60 L0,60 Z"
            fill="rgba(56,150,220,0.6)" />
        </svg>
      </div>
      {/* Wave 2 */}
      <div className="absolute pointer-events-none" style={{ bottom: '14%', left: 0, width: '200%' }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: '100%', height: '55px', animation: 'waveFlow 11s linear 1s infinite' }}>
          <path d="M0,30 C180,5 360,45 540,25 C720,5 900,40 1080,22 C1260,5 1380,35 1440,25 L1440,60 L0,60 Z"
            fill="rgba(30,120,200,0.75)" />
        </svg>
      </div>
      {/* Wave 3 - darkest front */}
      <div className="absolute pointer-events-none" style={{ bottom: '10%', left: 0, width: '200%' }}>
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" style={{ width: '100%', height: '65px', animation: 'waveFlow 9s linear 0.5s infinite' }}>
          <path d="M0,35 C200,10 400,55 600,30 C800,5 1000,50 1200,28 C1320,15 1400,42 1440,32 L1440,70 L0,70 Z"
            fill="#0e4a8f" />
        </svg>
      </div>
      {/* Sea surface glitter */}
      <div className="absolute pointer-events-none"
        style={{ bottom: '10%', left: 0, right: 0, height: '10%',
          background: 'linear-gradient(180deg, rgba(56,189,248,0.15) 0%, transparent 100%)' }} />

      {/* ═══════════════ SEAGULLS (flying birds) ═══════════════ */}
      {/* Bird group 1 - top left */}
      <div className="absolute pointer-events-none" style={{ top: '18%', left: '12%', animation: 'floatSlow 8s ease-in-out infinite' }}>
        <svg width="80" height="28" viewBox="0 0 80 28" fill="none">
          <path d="M0 14 Q10 6 20 14" stroke="white" strokeWidth="2.2" fill="none" strokeLinecap="round" opacity="0.85"/>
          <path d="M25 10 Q35 2 45 10" stroke="white" strokeWidth="2.2" fill="none" strokeLinecap="round" opacity="0.75"/>
          <path d="M50 16 Q58 9 66 16" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.65"/>
        </svg>
      </div>
      {/* Bird group 2 - top right */}
      <div className="absolute pointer-events-none" style={{ top: '14%', right: '18%', animation: 'floatSlow 10s ease-in-out 2s infinite' }}>
        <svg width="60" height="22" viewBox="0 0 60 22" fill="none">
          <path d="M0 11 Q8 4 16 11" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.8"/>
          <path d="M20 8 Q28 1 36 8" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7"/>
          <path d="M40 13 Q47 7 54 13" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.6"/>
        </svg>
      </div>
      {/* Bird group 3 - center top */}
      <div className="absolute pointer-events-none" style={{ top: '22%', left: '42%', animation: 'floatSlow 7s ease-in-out 1s infinite' }}>
        <svg width="50" height="18" viewBox="0 0 50 18" fill="none">
          <path d="M0 9 Q7 3 14 9" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.75"/>
          <path d="M18 7 Q25 1 32 7" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.65"/>
        </svg>
      </div>

      {/* ═══════════════ LARGE SAILBOAT (center, bigger) ═══════════════ */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          bottom: '7%',
          left: '50%',
          transform: 'translateX(-55%)',
          width: 'clamp(240px, 32vw, 420px)',
          filter: 'drop-shadow(0 10px 30px rgba(10,30,100,0.55))',
          animation: 'rotateBoat 5s ease-in-out infinite',
        }}
      >
        <svg viewBox="0 0 300 270" fill="none">
          {/* Water reflection under boat */}
          <ellipse cx="150" cy="253" rx="115" ry="15" fill="rgba(56,150,220,0.3)" />
          {/* Reflection of sails */}
          <path d="M150 253 L70 268 L150 258 Z" fill="rgba(255,248,235,0.12)" />
          <path d="M150 253 L230 266 L150 258 Z" fill="rgba(255,248,235,0.08)" />

          {/* Hull */}
          <path d="M55 210 Q150 235 245 210 L228 226 Q150 246 72 226 Z" fill="#dc2626" />
          <path d="M72 226 Q150 246 228 226 L218 234 Q150 252 82 234 Z" fill="#b91c1c" />
          {/* Hull highlight stripe */}
          <path d="M78 213 Q150 226 222 213" stroke="rgba(255,130,130,0.5)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          {/* Keel hint */}
          <path d="M130 240 Q150 248 170 240 L165 244 Q150 252 135 244 Z" fill="#991b1b" opacity="0.6"/>

          {/* Mast */}
          <line x1="150" y1="22" x2="150" y2="212" stroke="rgba(255,255,255,0.82)" strokeWidth="4.5" strokeLinecap="round" />
          {/* Cross spar */}
          <line x1="120" y1="55" x2="180" y2="55" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round"/>
          {/* Boom */}
          <line x1="150" y1="192" x2="105" y2="208" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round" />

          {/* Main sail LEFT - large */}
          <path d="M150 28 L150 204 L38 158 Z"
            fill="rgba(255,248,235,0.93)"
            stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          {/* Pink stripe 1 */}
          <path d="M150 108 L82 132 L87 118 L150 94 Z" fill="rgba(244,114,182,0.62)" />
          {/* Pink stripe 2 */}
          <path d="M150 148 L58 168 L64 155 L150 132 Z" fill="rgba(244,114,182,0.42)" />
          {/* Sail shading/depth */}
          <path d="M150 28 L150 204 L95 180 Z" fill="rgba(0,0,0,0.07)" />

          {/* Second sail RIGHT */}
          <path d="M150 42 L150 198 L242 154 Z"
            fill="rgba(255,248,235,0.76)"
            stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
          {/* Blue stripe right */}
          <path d="M150 114 L214 136 L209 123 L150 100 Z" fill="rgba(56,189,248,0.32)" />
          {/* Right sail depth */}
          <path d="M150 42 L150 198 L205 172 Z" fill="rgba(0,0,0,0.05)" />

          {/* Jib (small front sail) */}
          <path d="M150 38 L104 100 L150 106 Z" fill="rgba(255,248,235,0.58)" />

          {/* Flag at top */}
          <path d="M150 20 L182 31 L150 42 Z" fill="#f472b6" />
          <line x1="150" y1="20" x2="150" y2="42" stroke="rgba(255,255,255,0.65)" strokeWidth="1.8" />

          {/* Rope stays */}
          <line x1="150" y1="28" x2="38" y2="158" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" />
          <line x1="150" y1="28" x2="242" y2="154" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" />
          <line x1="150" y1="28" x2="104" y2="100" stroke="rgba(255,255,255,0.13)" strokeWidth="1" />
          <line x1="150" y1="55" x2="38" y2="158" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

          {/* Cabin */}
          <rect x="126" y="196" width="50" height="22" rx="8" fill="rgba(255,255,255,0.28)" />
          <rect x="128" y="198" width="46" height="18" rx="7" fill="rgba(255,255,255,0.1)" />
          {/* Windows */}
          <circle cx="140" cy="207" r="7" fill="rgba(56,189,248,0.72)" />
          <circle cx="160" cy="207" r="7" fill="rgba(56,189,248,0.72)" />
          <circle cx="141" cy="206" r="2.5" fill="rgba(255,255,255,0.72)" />
          <circle cx="161" cy="206" r="2.5" fill="rgba(255,255,255,0.72)" />

          {/* Person 1 - climbing mast / standing */}
          <ellipse cx="108" cy="202" rx="6" ry="9" fill="rgba(20,15,60,0.75)" />
          <circle cx="108" cy="191" r="6" fill="rgba(20,15,60,0.75)" />
          {/* hat */}
          <ellipse cx="108" cy="185" rx="7" ry="3" fill="rgba(60,40,120,0.6)"/>

          {/* Person 2 - looking with binoculars */}
          <ellipse cx="188" cy="203" rx="5" ry="8" fill="rgba(20,15,60,0.7)" />
          <circle cx="188" cy="193" r="6" fill="rgba(20,15,60,0.7)" />
          <rect x="189" y="194" width="12" height="4" rx="2" fill="rgba(80,60,30,0.55)" />

          {/* Person 3 - small at bow */}
          <ellipse cx="75" cy="205" rx="4" ry="7" fill="rgba(20,15,60,0.55)" />
          <circle cx="75" cy="196" r="4.5" fill="rgba(20,15,60,0.55)" />

          {/* Wake waves */}
          <path d="M38 232 Q90 220 142 229 Q195 238 240 226 Q265 220 278 225"
            stroke="rgba(255,255,255,0.42)" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M50 242 Q100 231 150 240 Q200 249 248 237"
            stroke="rgba(255,255,255,0.26)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          {/* Foam bow */}
          <path d="M55 215 Q44 221 38 230 Q46 224 56 220 Z" fill="rgba(255,255,255,0.55)" />
          <path d="M60 218 Q50 223 45 230" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      {/* ═══════════════ DOLPHIN (big, jumping high) ═══════════════ */}
      <div className="absolute pointer-events-none select-none"
        style={{
          bottom: '10%',
          left: '18%',
          width: 'clamp(130px, 18vw, 220px)',
          filter: 'drop-shadow(0 6px 20px rgba(56,189,248,0.55))',
          animation: 'dolphinJump 3.2s ease-in-out 0.3s infinite',
        }}>
        <svg viewBox="0 0 180 150" fill="none">
          {/* === BODY === */}
          <path d="M18 118 Q38 55 82 30 Q118 10 148 28 Q168 42 165 68 Q162 90 140 100 Q108 114 75 100 Q45 88 28 108 Z"
            fill="#38bdf8" opacity="0.92"/>
          {/* Belly lighter */}
          <path d="M35 105 Q65 84 108 92 Q130 98 140 100 Q108 114 75 100 Q52 91 35 105 Z"
            fill="rgba(255,255,255,0.5)"/>
          {/* Body sheen / highlight */}
          <path d="M60 40 Q90 28 120 38 Q100 32 70 44 Z" fill="rgba(255,255,255,0.3)"/>

          {/* === TAIL FLUKES === */}
          <path d="M18 118 Q6 100 2 80 Q14 92 24 86 Q20 104 18 118 Z" fill="#0ea5e9" opacity="0.88"/>
          <path d="M18 118 Q8 130 12 142 Q22 128 30 122 Z" fill="#0ea5e9" opacity="0.82"/>
          {/* tail sheen */}
          <path d="M6 84 Q12 90 20 88" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" strokeLinecap="round"/>

          {/* === DORSAL FIN === */}
          <path d="M82 38 Q92 8 108 22 Q98 30 88 44 Z" fill="#0284c7" opacity="0.92"/>
          {/* fin highlight */}
          <path d="M85 38 Q90 18 100 24" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

          {/* === PECTORAL FIN === */}
          <path d="M105 80 Q115 100 100 112 Q95 95 98 80 Z" fill="#0ea5e9" opacity="0.75"/>

          {/* === HEAD / BEAK === */}
          <path d="M148 28 Q168 42 165 68 Q162 52 155 38 Z" fill="#0ea5e9" opacity="0.5"/>

          {/* === EYE === */}
          <circle cx="148" cy="58" r="7" fill="white" opacity="0.95"/>
          <circle cx="150" cy="58" r="4" fill="#0a0f2e"/>
          <circle cx="148" cy="56" r="1.5" fill="white"/>

          {/* === SMILE === */}
          <path d="M155 72 Q162 80 168 75" stroke="rgba(255,255,255,0.65)" strokeWidth="2" fill="none" strokeLinecap="round"/>

          {/* === WATER SPLASH at entry === */}
          <path d="M22 112 Q14 98 8 102" stroke="rgba(255,255,255,0.6)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <path d="M28 116 Q16 105 10 110" stroke="rgba(255,255,255,0.45)" strokeWidth="2" fill="none" strokeLinecap="round"/>
          {/* droplets */}
          <circle cx="5" cy="96" r="3" fill="rgba(255,255,255,0.55)"/>
          <circle cx="14" cy="90" r="2" fill="rgba(255,255,255,0.45)"/>
          <circle cx="2" cy="108" r="2.5" fill="rgba(255,255,255,0.5)"/>
          {/* big splash ring */}
          <path d="M8 122 Q18 115 32 120" stroke="rgba(255,255,255,0.35)" strokeWidth="2" fill="none" strokeLinecap="round"/>

          {/* === WATER SURFACE LINE === */}
          <path d="M0 128 Q45 118 90 125 Q135 132 180 122"
            stroke="rgba(56,189,248,0.5)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      {/* ═══════════════ JUMPING FISH ═══════════════ */}
      {/* Fish 1 */}
      <div className="absolute pointer-events-none select-none"
        style={{
          bottom: '15%', right: '28%',
          width: 'clamp(35px,5vw,55px)',
          animation: 'floatY 2.5s ease-in-out 1s infinite',
          filter: 'drop-shadow(0 3px 8px rgba(244,114,182,0.45))',
          transform: 'rotate(-30deg)',
        }}>
        <svg viewBox="0 0 70 45" fill="none">
          <ellipse cx="35" cy="22" rx="26" ry="14" fill="#f472b6" opacity="0.88"/>
          <path d="M9 22 L-5 12 L-5 32 Z" fill="#e11d78" opacity="0.9"/>
          <path d="M30 10 Q35 4 42 9 Q37 12 30 10Z" fill="#fb7185" opacity="0.8"/>
          <circle cx="52" cy="18" r="5" fill="white" opacity="0.9"/>
          <circle cx="53" cy="18" r="2.5" fill="#0a0f2e"/>
          <path d="M36 10 Q38 22 36 35" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>
      {/* Fish 2 - smaller */}
      <div className="absolute pointer-events-none select-none"
        style={{
          bottom: '18%', left: '38%',
          width: 'clamp(25px,3.5vw,42px)',
          animation: 'floatY 3.5s ease-in-out 2.2s infinite',
          filter: 'drop-shadow(0 3px 8px rgba(34,211,238,0.4))',
          transform: 'rotate(20deg) scaleX(-1)',
        }}>
        <svg viewBox="0 0 70 45" fill="none">
          <ellipse cx="35" cy="22" rx="26" ry="14" fill="#22d3ee" opacity="0.85"/>
          <path d="M9 22 L-5 12 L-5 32 Z" fill="#0891b2" opacity="0.9"/>
          <path d="M30 10 Q35 4 42 9 Q37 12 30 10Z" fill="#38bdf8" opacity="0.8"/>
          <circle cx="52" cy="18" r="5" fill="white" opacity="0.9"/>
          <circle cx="53" cy="18" r="2.5" fill="#0a0f2e"/>
        </svg>
      </div>
      {/* Fish 3 - golden */}
      <div className="absolute pointer-events-none select-none"
        style={{
          bottom: '12%', right: '42%',
          width: 'clamp(20px,3vw,36px)',
          animation: 'floatY 4s ease-in-out 3s infinite',
          filter: 'drop-shadow(0 3px 6px rgba(251,191,36,0.4))',
          transform: 'rotate(-15deg)',
        }}>
        <svg viewBox="0 0 70 45" fill="none">
          <ellipse cx="35" cy="22" rx="26" ry="14" fill="#fbbf24" opacity="0.85"/>
          <path d="M9 22 L-5 12 L-5 32 Z" fill="#d97706" opacity="0.9"/>
          <circle cx="52" cy="18" r="5" fill="white" opacity="0.9"/>
          <circle cx="53" cy="18" r="2.5" fill="#0a0f2e"/>
        </svg>
      </div>

      {/* ═══════════════ BUBBLES ═══════════════ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { s:12, l:'5%',  d:'0s',   dur:'9s'  },
          { s:20, l:'12%', d:'1.5s', dur:'11s' },
          { s:8,  l:'20%', d:'3s',   dur:'8s'  },
          { s:16, l:'32%', d:'0.8s', dur:'10s' },
          { s:24, l:'55%', d:'2s',   dur:'13s' },
          { s:10, l:'65%', d:'4s',   dur:'9s'  },
          { s:18, l:'75%', d:'1s',   dur:'11s' },
          { s:14, l:'85%', d:'3s',   dur:'8.5s'},
          { s:22, l:'92%', d:'2.5s', dur:'12s' },
        ].map((b, i) => (
          <div key={i} className="absolute rounded-full"
            style={{
              width: b.s, height: b.s, left: b.l, bottom: '-5%',
              background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.6), rgba(56,189,248,0.1))',
              border: '1px solid rgba(255,255,255,0.3)',
              animation: `bubbleRise ${b.dur} linear ${b.d} infinite`,
            }} />
        ))}
      </div>

      {/* ═══════════════ STARS (fixed positions, no random on render) ═══════════════ */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          {w:1.5,t:3,l:8,o:0.5,d:0},{w:2,t:7,l:22,o:0.35,d:1},{w:1,t:5,l:38,o:0.45,d:2},
          {w:2.5,t:2,l:55,o:0.55,d:0.5},{w:1,t:9,l:70,o:0.3,d:1.5},{w:2,t:4,l:85,o:0.4,d:3},
          {w:1.5,t:12,l:14,o:0.35,d:2.5},{w:1,t:15,l:30,o:0.5,d:0.8},{w:2,t:8,l:47,o:0.45,d:3.5},
          {w:1.5,t:18,l:62,o:0.3,d:1.2},{w:2.5,t:11,l:78,o:0.55,d:4},{w:1,t:20,l:92,o:0.4,d:0.3},
          {w:2,t:6,l:3,o:0.35,d:2.8},{w:1,t:22,l:18,o:0.5,d:1.8},{w:1.5,t:14,l:42,o:0.4,d:3.2},
          {w:2,t:25,l:58,o:0.3,d:0.6},{w:1,t:10,l:73,o:0.45,d:2.2},{w:2.5,t:17,l:88,o:0.55,d:1.4},
          {w:1.5,t:28,l:5,o:0.35,d:3.8},{w:1,t:32,l:25,o:0.4,d:0.2},{w:2,t:19,l:50,o:0.5,d:2.6},
          {w:1,t:35,l:66,o:0.3,d:1.6},{w:2.5,t:23,l:82,o:0.45,d:4.2},{w:1.5,t:38,l:96,o:0.4,d:0.9},
          {w:2,t:42,l:10,o:0.35,d:3.4},{w:1,t:30,l:35,o:0.55,d:1.1},{w:1.5,t:45,l:52,o:0.3,d:2.4},
          {w:2,t:26,l:74,o:0.45,d:0.7},{w:1,t:40,l:90,o:0.4,d:3.6},{w:2.5,t:13,l:98,o:0.5,d:1.9},
        ].map((s, i) => (
          <div key={i} className="absolute rounded-full bg-white"
            style={{
              width: s.w, height: s.w,
              top: `${s.t}%`, left: `${s.l}%`,
              opacity: s.o,
              animation: `glowPulse ${3 + s.d * 0.5}s ease-in-out infinite`,
              animationDelay: `${s.d}s`,
            }}
          />
        ))}
      </div>

      {/* ═══════════════ CONTENT (center) ═══════════════ */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6 text-center"
        style={{ paddingBottom: '8%' }}>

        {/* Japanese name - main large title */}
        <div
          className={`transition-all duration-700 ${isTransitioning ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}
          style={{ animation: 'fadeInUp 0.9s ease-out 0.1s both' }}
        >
          <h1
            className="font-black text-white leading-tight mb-1"
            style={{
              fontSize: 'clamp(1.8rem,5.5vw,4.8rem)',
              whiteSpace: 'nowrap',
              textShadow: '0 4px 30px rgba(56,189,248,0.5), 0 2px 8px rgba(0,0,0,0.5)',
              letterSpacing: '0.04em',
            }}
          >
            チャン・タオ・グエン
          </h1>
        </div>

        {/* English name subtitle */}
        <div style={{ animation: 'fadeInUp 0.9s ease-out 0.25s both' }}>
          <p className="text-white/60 font-semibold tracking-[0.25em] text-sm md:text-base mb-4"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
            TRAN THAO NGUYEN
          </p>
        </div>

        {/* Role badge */}
        <div style={{ animation: 'fadeInUp 0.9s ease-out 0.4s both' }}
          className="mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{
              background: 'rgba(56,189,248,0.18)',
              border: '1px solid rgba(56,189,248,0.4)',
              color: '#7dd3fc',
              backdropFilter: 'blur(8px)',
              textShadow: 'none',
            }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
            Software Engineering Student
          </span>
        </div>

        {/* Japanese catchphrase */}
        <div style={{ animation: 'fadeInUp 0.9s ease-out 0.55s both' }} className="mb-8">
          <p className="text-white/55 text-sm md:text-base italic leading-relaxed max-w-md"
            style={{ textShadow: '0 2px 6px rgba(0,0,0,0.4)' }}>
            新しい技術に挑戦しながら、人や社会に役立つものを作りたい。
          </p>
        </div>

        {/* CTA button */}
        <div
          className={`transition-all duration-700 delay-300 ${isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}
          style={{ animation: 'fadeInUp 0.9s ease-out 0.7s both' }}
        >
          <button
            onClick={handleStart}
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-bold text-white text-base transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'linear-gradient(135deg, #f472b6, #fb7185, #f43f5e)',
              boxShadow: '0 6px 30px rgba(244,114,182,0.5), 0 2px 8px rgba(0,0,0,0.3)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 40px rgba(244,114,182,0.7), 0 4px 12px rgba(0,0,0,0.3)'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 30px rgba(244,114,182,0.5), 0 2px 8px rgba(0,0,0,0.3)'
            }}
          >
            ポートフォリオを見る
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>

      {/* ═══════════════ SKIP ═══════════════ */}
      <button
        onClick={handleStart}
        className="absolute bottom-5 right-6 text-xs text-white/35 hover:text-white/70 transition-colors z-20 tracking-widest"
      >
        スキップ →
      </button>
    </div>
  )
}
