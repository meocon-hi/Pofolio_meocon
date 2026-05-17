'use client'

import { useEffect, useState } from 'react'

/* ---- Bubble component ---- */
function Bubble({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.7), rgba(100,210,255,0.2))',
        border: '1px solid rgba(255,255,255,0.4)',
        ...style,
      }}
    />
  )
}

const BUBBLES = [
  { size: 14, left: '6%',  delay: '0s',   duration: '8s'  },
  { size: 22, left: '13%', delay: '1.5s', duration: '10s' },
  { size: 10, left: '22%', delay: '3s',   duration: '7s'  },
  { size: 18, left: '35%', delay: '0.8s', duration: '12s' },
  { size: 12, left: '50%', delay: '2.2s', duration: '9s'  },
  { size: 20, left: '61%', delay: '4s',   duration: '11s' },
  { size: 16, left: '70%', delay: '1s',   duration: '10s' },
  { size: 10, left: '80%', delay: '3.5s', duration: '8s'  },
  { size: 24, left: '88%', delay: '2s',   duration: '9.5s'},
  { size: 8,  left: '95%', delay: '1.2s', duration: '7.5s'},
]

/* ---- Starfish ---- */
function Starfish({ style, color = '#f472b6', size = 40 }: { style: React.CSSProperties; color?: string; size?: number }) {
  return (
    <div className="absolute pointer-events-none select-none" style={style}>
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <path d="M50 5 L61 35 L95 35 L67 57 L78 90 L50 68 L22 90 L33 57 L5 35 L39 35 Z" fill={color} opacity="0.9"/>
        <circle cx="50" cy="52" r="12" fill={color} opacity="0.65"/>
        <circle cx="50" cy="20" r="3" fill="rgba(255,255,255,0.6)" />
        <circle cx="74" cy="42" r="3" fill="rgba(255,255,255,0.6)" />
        <circle cx="65" cy="74" r="3" fill="rgba(255,255,255,0.6)" />
        <circle cx="35" cy="74" r="3" fill="rgba(255,255,255,0.6)" />
        <circle cx="26" cy="42" r="3" fill="rgba(255,255,255,0.6)" />
      </svg>
    </div>
  )
}

/* ---- Small fish ---- */
function Fish({ style, color = '#22d3ee', size = 32, flip = false }: { style: React.CSSProperties; color?: string; size?: number; flip?: boolean }) {
  return (
    <div className="absolute pointer-events-none select-none" style={{ ...style, transform: `${(style.transform as string) ?? ''} ${flip ? 'scaleX(-1)' : ''}` }}>
      <svg width={size} height={size * 0.6} viewBox="0 0 80 48" fill="none">
        <ellipse cx="38" cy="24" rx="30" ry="18" fill={color} opacity="0.85" />
        <path d="M8 24 L-8 10 L-8 38 Z" fill={color} opacity="0.9" />
        <path d="M30 6 Q38 0 46 6 Q38 10 30 6Z" fill={color} opacity="0.75" />
        <circle cx="58" cy="20" r="5" fill="white" opacity="0.9" />
        <circle cx="59" cy="20" r="2.5" fill="#0a0f2e" />
        <path d="M40 8 Q42 24 40 40" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />
      </svg>
    </div>
  )
}

/* ---- Coral ---- */
function Coral({ style, color = '#f472b6', size = 50 }: { style: React.CSSProperties; color?: string; size?: number }) {
  return (
    <div className="absolute pointer-events-none select-none" style={style}>
      <svg width={size} height={size * 1.4} viewBox="0 0 60 84" fill="none">
        <rect x="26" y="60" width="8" height="24" rx="4" fill={color} opacity="0.65"/>
        <ellipse cx="30" cy="60" rx="6" ry="8" fill={color} opacity="0.85"/>
        <rect x="14" y="40" width="6" height="20" rx="3" fill={color} opacity="0.55" transform="rotate(-15 17 50)"/>
        <ellipse cx="14" cy="40" rx="5" ry="7" fill={color} opacity="0.75" transform="rotate(-15 14 40)"/>
        <rect x="40" y="44" width="6" height="18" rx="3" fill={color} opacity="0.55" transform="rotate(15 43 53)"/>
        <ellipse cx="46" cy="44" rx="5" ry="7" fill={color} opacity="0.75" transform="rotate(15 46 44)"/>
        <circle cx="30" cy="52" r="4" fill="rgba(255,255,255,0.35)"/>
        <circle cx="14" cy="33" r="3" fill="rgba(255,255,255,0.3)"/>
        <circle cx="46" cy="37" r="3" fill="rgba(255,255,255,0.3)"/>
      </svg>
    </div>
  )
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        /* Bright daytime ocean sky - purple top → bright cyan bottom */
        background: 'linear-gradient(180deg, #3b2f8f 0%, #5b46c8 12%, #7c6fe0 22%, #6aaee8 38%, #3bbfe8 55%, #22d4f0 68%, #1ac8e8 78%, #0fb8d8 88%, #18a8c8 100%)',
      }}
    >
      {/* ── SUN GLOW top-center ── */}
      <div className="absolute pointer-events-none" style={{
        top: '-8%', left: '50%', transform: 'translateX(-50%)',
        width: '500px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(255,230,180,0.45) 0%, rgba(180,140,255,0.2) 45%, transparent 70%)',
        filter: 'blur(18px)',
      }}/>

      {/* ── LIGHT RAYS ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { left:'8%',  w:80,  skew:-26, op:0.25, d:'0s',   dur:'5s'  },
          { left:'18%', w:55,  skew:-16, op:0.18, d:'1s',   dur:'6.5s'},
          { left:'28%', w:100, skew:-7,  op:0.30, d:'0.4s', dur:'4.5s'},
          { left:'40%', w:70,  skew:2,   op:0.22, d:'1.6s', dur:'5.5s'},
          { left:'52%', w:120, skew:10,  op:0.32, d:'0.8s', dur:'5s'  },
          { left:'64%', w:65,  skew:18,  op:0.18, d:'2.2s', dur:'6s'  },
          { left:'75%', w:95,  skew:26,  op:0.26, d:'0.2s', dur:'4.8s'},
          { left:'86%', w:60,  skew:32,  op:0.16, d:'1.4s', dur:'5.2s'},
        ].map((r, i) => (
          <div key={i} className="absolute top-0 animate-light-ray" style={{
            left: r.left, width: r.w, height: '75%',
            background: `linear-gradient(180deg, rgba(255,245,200,${r.op}) 0%, rgba(180,230,255,${r.op * 0.5}) 50%, transparent 100%)`,
            transform: `skewX(${r.skew}deg)`,
            borderRadius: '0 0 60% 60%',
            animationDelay: r.d, animationDuration: r.dur,
          }}/>
        ))}
      </div>

      {/* ── CLOUDS ── */}
      <div className="absolute pointer-events-none" style={{ top:'4%', left:'-4%', width:'34%', opacity:0.7 }}>
        <svg viewBox="0 0 420 170" fill="none">
          <ellipse cx="165" cy="105" rx="135" ry="58" fill="rgba(255,255,255,0.82)"/>
          <ellipse cx="100" cy="120" rx="85" ry="48" fill="rgba(255,255,255,0.75)"/>
          <ellipse cx="240" cy="112" rx="105" ry="52" fill="rgba(255,255,255,0.72)"/>
          <ellipse cx="58" cy="132" rx="58" ry="38" fill="rgba(230,220,255,0.7)"/>
          <ellipse cx="320" cy="122" rx="72" ry="40" fill="rgba(210,235,255,0.68)"/>
          <ellipse cx="158" cy="85" rx="65" ry="20" fill="rgba(255,255,255,0.45)"/>
        </svg>
      </div>
      <div className="absolute pointer-events-none" style={{ top:'2%', right:'-2%', width:'28%', opacity:0.62 }}>
        <svg viewBox="0 0 360 145" fill="none">
          <ellipse cx="195" cy="92" rx="125" ry="52" fill="rgba(255,255,255,0.78)"/>
          <ellipse cx="125" cy="108" rx="78" ry="42" fill="rgba(255,255,255,0.7)"/>
          <ellipse cx="275" cy="100" rx="82" ry="44" fill="rgba(220,215,255,0.65)"/>
          <ellipse cx="200" cy="72" rx="58" ry="16" fill="rgba(255,255,255,0.38)"/>
        </svg>
      </div>

      {/* ── MOUNTAINS LEFT ── */}
      <div className="absolute pointer-events-none" style={{ bottom:'18%', left:'0', width:'30%' }}>
        <svg viewBox="0 0 340 320" fill="none" preserveAspectRatio="xMinYMax meet">
          <path d="M-10 320 L55 155 L90 185 L130 118 L195 320 Z" fill="rgba(55,42,105,0.6)"/>
          <path d="M55 155 L90 185 L130 118 L112 136 L92 112 L72 142 Z" fill="rgba(90,70,155,0.4)"/>
          <path d="M-10 320 L25 205 L55 225 L92 320 Z" fill="rgba(38,28,88,0.65)"/>
          <path d="M58 157 L76 168 L88 160 L77 150 Z" fill="rgba(200,180,255,0.25)"/>
          {/* green hints */}
          <ellipse cx="145" cy="120" rx="18" ry="11" fill="rgba(80,185,120,0.45)"/>
        </svg>
      </div>

      {/* ── MOUNTAINS RIGHT ── */}
      <div className="absolute pointer-events-none" style={{ bottom:'18%', right:'0', width:'44%' }}>
        <svg viewBox="0 0 520 400" fill="none" preserveAspectRatio="xMaxYMax meet">
          <path d="M195 400 L275 185 L365 400 Z" fill="rgba(90,72,148,0.45)"/>
          <path d="M275 400 L312 205 L332 225 L355 183 L378 215 L420 162 L488 400 Z" fill="#5b4fa0"/>
          <path d="M332 225 L355 183 L378 215 L420 162 L488 400 L380 400 Z" fill="#4a3d8f"/>
          <path d="M355 183 L366 224 L378 215 L368 198 Z" fill="rgba(190,170,255,0.32)"/>
          <path d="M420 162 L432 202 L446 188 L436 170 Z" fill="rgba(190,170,255,0.28)"/>
          <path d="M378 400 L398 262 L428 283 L458 242 L515 400 Z" fill="#3d2f7a"/>
          <ellipse cx="298" cy="202" rx="20" ry="12" fill="rgba(80,185,120,0.45)"/>
          <ellipse cx="458" cy="246" rx="16" ry="10" fill="rgba(80,185,120,0.4)"/>
        </svg>
      </div>

      {/* ── LIGHTHOUSE ── */}
      <div className="absolute pointer-events-none" style={{
        bottom:'20%', right:'7%',
        width:'clamp(55px,7vw,88px)',
        filter:'drop-shadow(0 0 16px rgba(255,220,80,0.55))',
      }}>
        <svg viewBox="0 0 90 200" fill="none">
          <path d="M10 200 L80 200 L75 155 L15 155 Z" fill="#3a2f6a"/>
          <path d="M28 155 L62 155 L58 60 L32 60 Z" fill="white" fillOpacity="0.92"/>
          <path d="M29 130 L61 130 L60 115 L30 115 Z" fill="#f43f5e" opacity="0.88"/>
          <path d="M31 95 L59 95 L58 80 L32 80 Z" fill="#f43f5e" opacity="0.82"/>
          <rect x="26" y="52" width="38" height="14" rx="3" fill="#60a5fa" opacity="0.92"/>
          <ellipse cx="45" cy="52" rx="22" ry="9" fill="white" opacity="0.88"/>
          <circle cx="45" cy="52" r="9" fill="#fef08a" opacity="0.97"/>
          <circle cx="45" cy="52" r="5" fill="white"/>
          <circle cx="45" cy="52" r="16" fill="rgba(254,240,138,0.28)"/>
          <path d="M45 43 L12 15" stroke="rgba(254,240,138,0.6)" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M45 43 L78 18" stroke="rgba(254,240,138,0.6)" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M45 43 L2 35" stroke="rgba(254,240,138,0.32)" strokeWidth="2" strokeLinecap="round"/>
          <path d="M45 43 L88 30" stroke="rgba(254,240,138,0.32)" strokeWidth="2" strokeLinecap="round"/>
          <path d="M26 52 L64 52 L54 40 L36 40 Z" fill="#94a3b8" opacity="0.82"/>
          <ellipse cx="45" cy="40" rx="10" ry="5" fill="#cbd5e1" opacity="0.92"/>
          <rect x="22" y="64" width="46" height="4" rx="2" fill="#94a3b8" opacity="0.72"/>
          <rect x="36" y="100" width="18" height="12" rx="3" fill="#7dd3fc" opacity="0.72"/>
          <rect x="36" y="125" width="18" height="12" rx="3" fill="#7dd3fc" opacity="0.68"/>
          <path d="M37 155 L37 140 Q45 135 53 140 L53 155 Z" fill="#7dd3fc" opacity="0.52"/>
        </svg>
      </div>

      {/* ── OCEAN WATER ── */}
      <div className="absolute pointer-events-none" style={{
        bottom:0, left:0, right:0, height:'22%',
        background:'linear-gradient(180deg, #1a8fc8 0%, #0e5a9d 45%, #0a2f6e 100%)',
      }}/>
      {/* Waves */}
      <div className="absolute pointer-events-none" style={{ bottom:'17%', left:0, width:'200%' }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width:'100%', height:'52px', animation:'waveFlow 8s linear infinite' }}>
          <path d="M0,18 C120,38 240,0 360,18 C480,38 600,0 720,18 C840,38 960,0 1080,18 C1200,38 1320,5 1440,18 L1440,60 L0,60 Z" fill="rgba(30,160,230,0.6)"/>
        </svg>
      </div>
      <div className="absolute pointer-events-none" style={{ bottom:'14%', left:0, width:'200%' }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width:'100%', height:'56px', animation:'waveFlow 11s linear 1s infinite' }}>
          <path d="M0,28 C180,5 360,44 540,24 C720,5 900,40 1080,20 C1260,5 1380,35 1440,24 L1440,60 L0,60 Z" fill="rgba(14,100,190,0.78)"/>
        </svg>
      </div>
      <div className="absolute pointer-events-none" style={{ bottom:'10%', left:0, width:'200%' }}>
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" style={{ width:'100%', height:'65px', animation:'waveFlow 9s linear 0.5s infinite' }}>
          <path d="M0,32 C200,8 400,54 600,28 C800,5 1000,50 1200,26 C1320,14 1400,40 1440,30 L1440,70 L0,70 Z" fill="#0b4a8a"/>
        </svg>
      </div>

      {/* ── SEAGULLS ── */}
      <div className="absolute pointer-events-none" style={{ top:'20%', left:'10%', animation:'floatSlow 8s ease-in-out infinite' }}>
        <svg width="82" height="28" viewBox="0 0 82 28" fill="none">
          <path d="M0 14 Q10 5 20 14" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.9"/>
          <path d="M26 10 Q36 1 46 10" stroke="white" strokeWidth="2.3" fill="none" strokeLinecap="round" opacity="0.78"/>
          <path d="M52 16 Q60 8 68 16" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.65"/>
        </svg>
      </div>
      <div className="absolute pointer-events-none" style={{ top:'15%', right:'20%', animation:'floatSlow 10s ease-in-out 2s infinite' }}>
        <svg width="58" height="20" viewBox="0 0 58 20" fill="none">
          <path d="M0 10 Q8 3 16 10" stroke="white" strokeWidth="2.2" fill="none" strokeLinecap="round" opacity="0.82"/>
          <path d="M20 7 Q28 0 36 7" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7"/>
          <path d="M40 12 Q47 5 54 12" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.6"/>
        </svg>
      </div>
      <div className="absolute pointer-events-none" style={{ top:'25%', left:'40%', animation:'floatSlow 7s ease-in-out 1s infinite' }}>
        <svg width="44" height="16" viewBox="0 0 44 16" fill="none">
          <path d="M0 8 Q6 2 12 8" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.75"/>
          <path d="M16 6 Q22 0 28 6" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.62"/>
        </svg>
      </div>

      {/* ── BIG SAILBOAT right side ── */}
      <div className="absolute pointer-events-none select-none animate-boat" style={{
        bottom:'8%', right:'2%',
        width:'clamp(220px,30vw,400px)',
        filter:'drop-shadow(0 10px 32px rgba(10,30,100,0.45))',
      }}>
        <svg viewBox="0 0 300 270" fill="none">
          <ellipse cx="150" cy="252" rx="115" ry="14" fill="rgba(30,120,200,0.28)"/>
          {/* Hull */}
          <path d="M52 208 Q150 232 248 208 L230 224 Q150 244 70 224 Z" fill="#dc2626"/>
          <path d="M70 224 Q150 244 230 224 L220 232 Q150 250 80 232 Z" fill="#b91c1c"/>
          <path d="M76 211 Q150 224 224 211" stroke="rgba(255,130,130,0.5)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          {/* Mast */}
          <line x1="150" y1="20" x2="150" y2="210" stroke="rgba(255,255,255,0.85)" strokeWidth="4.5" strokeLinecap="round"/>
          <line x1="150" y1="192" x2="108" y2="207" stroke="rgba(255,255,255,0.52)" strokeWidth="2.5" strokeLinecap="round"/>
          {/* Main sail L */}
          <path d="M150 26 L150 202 L36 156 Z" fill="rgba(255,248,235,0.94)" stroke="rgba(255,255,255,0.22)" strokeWidth="1"/>
          <path d="M150 106 L80 130 L85 116 L150 92 Z" fill="rgba(244,114,182,0.62)"/>
          <path d="M150 148 L56 168 L62 154 L150 132 Z" fill="rgba(244,114,182,0.42)"/>
          <path d="M150 26 L150 202 L98 178 Z" fill="rgba(0,0,0,0.06)"/>
          {/* Sail R */}
          <path d="M150 40 L150 196 L244 152 Z" fill="rgba(255,248,235,0.76)" stroke="rgba(255,255,255,0.18)" strokeWidth="1"/>
          <path d="M150 112 L216 134 L210 121 L150 98 Z" fill="rgba(56,189,248,0.32)"/>
          {/* Jib */}
          <path d="M150 36 L105 98 L150 104 Z" fill="rgba(255,248,235,0.56)"/>
          {/* Flag */}
          <path d="M150 18 L182 29 L150 40 Z" fill="#f472b6"/>
          <line x1="150" y1="18" x2="150" y2="40" stroke="rgba(255,255,255,0.65)" strokeWidth="1.8"/>
          {/* Stays */}
          <line x1="150" y1="26" x2="36" y2="156" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
          <line x1="150" y1="26" x2="244" y2="152" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
          {/* Cabin */}
          <rect x="126" y="194" width="50" height="22" rx="8" fill="rgba(255,255,255,0.28)"/>
          <circle cx="140" cy="205" r="7" fill="rgba(56,189,248,0.72)"/>
          <circle cx="160" cy="205" r="7" fill="rgba(56,189,248,0.72)"/>
          <circle cx="141" cy="204" r="2.5" fill="rgba(255,255,255,0.72)"/>
          <circle cx="161" cy="204" r="2.5" fill="rgba(255,255,255,0.72)"/>
          {/* People */}
          <ellipse cx="108" cy="200" rx="6" ry="9" fill="rgba(20,15,60,0.72)"/>
          <circle cx="108" cy="189" r="6" fill="rgba(20,15,60,0.72)"/>
          <ellipse cx="188" cy="201" rx="5" ry="8" fill="rgba(20,15,60,0.68)"/>
          <circle cx="188" cy="191" r="6" fill="rgba(20,15,60,0.68)"/>
          <rect x="189" y="192" width="12" height="4" rx="2" fill="rgba(80,60,30,0.52)"/>
          {/* Wake */}
          <path d="M36 232 Q92 220 144 228 Q196 236 242 224 Q266 218 280 224" stroke="rgba(255,255,255,0.42)" strokeWidth="3" fill="none" strokeLinecap="round"/>
          <path d="M48 242 Q102 231 152 239 Q202 248 248 236" stroke="rgba(255,255,255,0.26)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <path d="M52 212 Q42 218 36 228 Q44 222 54 218 Z" fill="rgba(255,255,255,0.52)"/>
        </svg>
      </div>

      {/* ── DOLPHIN ── */}
      <div className="absolute pointer-events-none select-none" style={{
        bottom:'10%', left:'18%',
        width:'clamp(120px,16vw,200px)',
        filter:'drop-shadow(0 6px 20px rgba(56,189,248,0.5))',
        animation:'dolphinJump 3.2s ease-in-out 0.3s infinite',
      }}>
        <svg viewBox="0 0 180 150" fill="none">
          <path d="M18 118 Q38 55 82 30 Q118 10 148 28 Q168 42 165 68 Q162 90 140 100 Q108 114 75 100 Q45 88 28 108 Z" fill="#38bdf8" opacity="0.92"/>
          <path d="M35 105 Q65 84 108 92 Q130 98 140 100 Q108 114 75 100 Q52 91 35 105 Z" fill="rgba(255,255,255,0.5)"/>
          <path d="M60 40 Q90 28 120 38 Q100 32 70 44 Z" fill="rgba(255,255,255,0.3)"/>
          <path d="M18 118 Q6 100 2 80 Q14 92 24 86 Q20 104 18 118 Z" fill="#0ea5e9" opacity="0.88"/>
          <path d="M18 118 Q8 130 12 142 Q22 128 30 122 Z" fill="#0ea5e9" opacity="0.82"/>
          <path d="M82 38 Q92 8 108 22 Q98 30 88 44 Z" fill="#0284c7" opacity="0.92"/>
          <path d="M105 80 Q115 100 100 112 Q95 95 98 80 Z" fill="#0ea5e9" opacity="0.75"/>
          <circle cx="148" cy="58" r="7" fill="white" opacity="0.95"/>
          <circle cx="150" cy="58" r="4" fill="#0a0f2e"/>
          <circle cx="148" cy="56" r="1.5" fill="white"/>
          <path d="M155 72 Q162 80 168 75" stroke="rgba(255,255,255,0.65)" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M22 112 Q14 98 8 102" stroke="rgba(255,255,255,0.6)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <circle cx="5" cy="96" r="3" fill="rgba(255,255,255,0.55)"/>
          <circle cx="14" cy="90" r="2" fill="rgba(255,255,255,0.45)"/>
          <path d="M0 128 Q45 118 90 125 Q135 132 180 122" stroke="rgba(56,189,248,0.5)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      {/* ── SEA CREATURES bottom ── */}
      <Starfish color="#f472b6" size={50} style={{ bottom:'19%', left:'4%', animation:'floatSlow 7s ease-in-out 0s infinite', filter:'drop-shadow(0 0 10px rgba(244,114,182,0.7))' }}/>
      <Starfish color="#fbbf24" size={34} style={{ bottom:'27%', left:'8%', animation:'floatSlow 9s ease-in-out 1.5s infinite', filter:'drop-shadow(0 0 8px rgba(251,191,36,0.6))', transform:'rotate(28deg)' }}/>
      <Starfish color="#38bdf8" size={26} style={{ bottom:'15%', left:'14%', animation:'floatSlow 6s ease-in-out 3s infinite', filter:'drop-shadow(0 0 7px rgba(56,189,248,0.6))', transform:'rotate(-18deg)' }}/>
      <Starfish color="#f472b6" size={38} style={{ bottom:'30%', right:'5%', animation:'floatSlow 8s ease-in-out 2s infinite', filter:'drop-shadow(0 0 8px rgba(244,114,182,0.6))', transform:'rotate(42deg)' }}/>

      <Coral color="#f472b6" size={42} style={{ bottom:'8%', left:'28%', animation:'floatY 5s ease-in-out 0.5s infinite', filter:'drop-shadow(0 0 10px rgba(244,114,182,0.45))' }}/>
      <Coral color="#22d3ee" size={36} style={{ bottom:'8%', left:'34%', animation:'floatY 7s ease-in-out 1.5s infinite', filter:'drop-shadow(0 0 8px rgba(34,211,238,0.45))' }}/>
      <Coral color="#818cf8" size={46} style={{ bottom:'8%', right:'24%', animation:'floatY 6s ease-in-out 0.8s infinite', filter:'drop-shadow(0 0 10px rgba(129,140,248,0.45))' }}/>

      <Fish color="#f472b6" size={38} style={{ bottom:'16%', right:'30%', animation:'floatY 2.5s ease-in-out 1s infinite', filter:'drop-shadow(0 3px 8px rgba(244,114,182,0.5))', transform:'rotate(-28deg)' }}/>
      <Fish color="#22d3ee" size={28} flip style={{ bottom:'18%', left:'40%', animation:'floatY 3.5s ease-in-out 2.2s infinite', filter:'drop-shadow(0 3px 8px rgba(34,211,238,0.45))', transform:'rotate(18deg)' }}/>
      <Fish color="#fbbf24" size={22} style={{ bottom:'13%', right:'44%', animation:'floatY 4s ease-in-out 3s infinite', filter:'drop-shadow(0 3px 6px rgba(251,191,36,0.45))', transform:'rotate(-14deg)' }}/>

      {/* ── BUBBLES ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {BUBBLES.map((b, i) => (
          <Bubble key={i} style={{
            width: b.size, height: b.size,
            left: b.left, bottom:'-5%',
            animation:`bubbleRise ${b.duration} linear ${b.delay} infinite`,
          }}/>
        ))}
      </div>

      {/* ── STARS (top sky) ── */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none">
          {[
            {w:1.8,t:3,l:8,o:0.4},{w:2.2,t:7,l:22,o:0.3},{w:1.2,t:5,l:38,o:0.38},
            {w:2.5,t:2,l:55,o:0.45},{w:1,t:9,l:70,o:0.25},{w:2,t:4,l:85,o:0.35},
            {w:1.5,t:12,l:14,o:0.3},{w:1.2,t:15,l:30,o:0.4},{w:2,t:8,l:47,o:0.38},
            {w:1.5,t:18,l:62,o:0.25},{w:2.5,t:11,l:78,o:0.45},{w:1,t:20,l:92,o:0.32},
            {w:2,t:6,l:3,o:0.28},{w:1,t:22,l:18,o:0.4},{w:1.5,t:14,l:42,o:0.32},
          ].map((s, i) => (
            <div key={i} className="absolute rounded-full bg-white" style={{
              width:s.w, height:s.w,
              top:`${s.t}%`, left:`${s.l}%`,
              opacity:s.o,
              animation:`glowPulse ${3 + i * 0.3}s ease-in-out ${i * 0.4}s infinite`,
            }}/>
          ))}
        </div>
      )}

      {/* ── WAVE bottom divider ── */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none overflow-hidden" style={{ height:'100px' }}>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,50 C180,100 360,0 540,50 C720,100 900,0 1080,50 C1260,100 1440,30 1440,50 L1440,100 L0,100 Z" fill="rgba(8,18,50,0.75)"/>
          <path d="M0,65 C240,20 480,90 720,55 C960,20 1200,80 1440,55 L1440,100 L0,100 Z" fill="rgba(8,18,50,0.96)"/>
        </svg>
      </div>

      {/* ── HERO TEXT ── */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto" style={{ paddingBottom:'4%' }}>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold tracking-widest uppercase"
          style={{
            background:'rgba(255,255,255,0.15)',
            border:'1px solid rgba(255,255,255,0.35)',
            color:'white',
            backdropFilter:'blur(8px)',
            animation:'fadeIn 0.6s ease-out forwards',
          }}>
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"/>
          Technology Exploration Journey
        </div>

        {/* Japanese name - BIG */}
        <h1 className="font-black text-white mb-2"
          style={{
            fontSize:'clamp(1.8rem,5.5vw,4.8rem)',
            lineHeight:1.1,
            whiteSpace:'nowrap',
            textShadow:'0 4px 30px rgba(0,50,150,0.4), 0 2px 8px rgba(0,0,0,0.3)',
            animation:'fadeInUp 0.8s ease-out 0.15s both',
            letterSpacing:'0.03em',
          }}>
          チャン・タオ・グエン
        </h1>

        {/* English name */}
        <p className="font-bold tracking-widest mb-3"
          style={{
            fontSize:'clamp(0.9rem,2vw,1.2rem)',
            color:'rgba(255,255,255,0.6)',
            animation:'fadeInUp 0.8s ease-out 0.3s both',
            letterSpacing:'0.22em',
          }}>
          TRAN THAO NGUYEN
        </p>

        {/* Role */}
        <p className="text-white font-semibold text-lg md:text-xl mb-3 tracking-wide"
          style={{ animation:'fadeInUp 0.8s ease-out 0.42s both', textShadow:'0 2px 10px rgba(0,80,180,0.4)' }}>
          Software Engineering Student
        </p>

        {/* JP catchphrase */}
        <p className="text-white/70 text-sm md:text-base mb-10 leading-relaxed max-w-xl mx-auto italic"
          style={{ animation:'fadeInUp 0.8s ease-out 0.55s both' }}>
          新しい技術に挑戦しながら、人や社会に役立つものを作りたい。
        </p>

        {/* CTA */}
        <div style={{ animation:'fadeInUp 0.8s ease-out 0.68s both' }}>
          <a href="#about" className="btn-ocean inline-flex items-center gap-2 text-base">
            ポートフォリオを見る
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/>
            </svg>
          </a>
        </div>

        {/* Scroll */}
        <div className="mt-12 flex flex-col items-center gap-1" style={{ animation:'fadeIn 1s ease-out 1.2s both' }}>
          <span className="text-white/45 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-white/40 to-transparent rounded-full"/>
        </div>
      </div>
    </section>
  )
}
