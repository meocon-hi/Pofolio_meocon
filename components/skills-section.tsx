'use client'

import { useEffect, useRef } from 'react'

const skillCategories = [
  {
    title: 'プログラミング言語',
    subtitle: 'Programming Languages',
    color: '#38bdf8',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M10 10L5 16l5 6" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 10l5 6-5 6" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 7l-6 18" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
      </svg>
    ),
    skills: ['C++', 'Java', 'Python', 'PHP', 'Dart', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'フロントエンド / モバイル',
    subtitle: 'Frontend / Mobile',
    color: '#818cf8',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="5" width="24" height="16" rx="3" stroke="#818cf8" strokeWidth="2" fill="none"/>
        <path d="M11 27h10M16 21v6" stroke="#818cf8" strokeWidth="2" strokeLinecap="round"/>
        <rect x="8" y="9" width="7" height="8" rx="1.5" fill="#818cf8" opacity="0.3"/>
        <path d="M18 10h6M18 14h4" stroke="#818cf8" strokeWidth="1.8" strokeLinecap="round" opacity="0.7"/>
      </svg>
    ),
    skills: ['NextJS', 'React Native', 'Flutter', 'Bootstrap'],
  },
  {
    title: 'バックエンド / データベース',
    subtitle: 'Backend / Database',
    color: '#22d3ee',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <ellipse cx="16" cy="9" rx="10" ry="4" stroke="#22d3ee" strokeWidth="2" fill="none"/>
        <path d="M6 9v5c0 2.2 4.5 4 10 4s10-1.8 10-4V9" stroke="#22d3ee" strokeWidth="2" fill="none"/>
        <path d="M6 14v5c0 2.2 4.5 4 10 4s10-1.8 10-4v-5" stroke="#22d3ee" strokeWidth="2" fill="none"/>
        <circle cx="16" cy="9" r="2" fill="#22d3ee" opacity="0.6"/>
      </svg>
    ),
    skills: ['Laravel', 'ExpressJS', 'MongoDB', 'MySQL', 'SQL Server', 'Firebase'],
  },
  {
    title: 'その他スキル',
    subtitle: 'Other Skills',
    color: '#f472b6',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="10" stroke="#f472b6" strokeWidth="2" fill="none"/>
        <path d="M16 8v4M16 20v4M8 16h4M20 16h4" stroke="#f472b6" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="16" cy="16" r="3" fill="#f472b6" opacity="0.7"/>
      </svg>
    ),
    skills: ['Robot Simulation', 'Teamwork', 'Problem Solving', 'Continuous Learning'],
  },
]

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal, .card-reveal, .card-pop').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className="relative py-28 ocean-section-alt overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(129,140,248,0.08) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />

      {/* ── CORALS bottom-left ── */}
      <div className="absolute bottom-0 left-0 pointer-events-none select-none" style={{ width: '220px' }}>
        <svg viewBox="0 0 220 140" fill="none">
          <rect x="100" y="50" width="11" height="90" rx="5.5" fill="#f472b6" opacity="0.65"/>
          <ellipse cx="105" cy="48" rx="16" ry="20" fill="#f472b6" opacity="0.8"/>
          <ellipse cx="105" cy="33" rx="11" ry="13" fill="#fb7185" opacity="0.68"/>
          <circle cx="105" cy="23" r="7" fill="#f472b6" opacity="0.58"/>
          <circle cx="99" cy="42" r="2" fill="rgba(255,255,255,0.5)"/>
          <circle cx="111" cy="36" r="1.8" fill="rgba(255,255,255,0.45)"/>
          <rect x="52" y="72" width="9" height="68" rx="4.5" fill="#818cf8" opacity="0.62"/>
          <rect x="42" y="60" width="7" height="52" rx="3.5" fill="#818cf8" opacity="0.52" transform="rotate(-16 45 86)"/>
          <rect x="63" y="64" width="7" height="46" rx="3.5" fill="#a78bfa" opacity="0.52" transform="rotate(14 66 87)"/>
          <ellipse cx="55" cy="70" rx="10" ry="12" fill="#818cf8" opacity="0.72"/>
          <ellipse cx="43" cy="58" rx="8" ry="10" fill="#a78bfa" opacity="0.62" transform="rotate(-16 43 58)"/>
          <ellipse cx="68" cy="61" rx="8" ry="10" fill="#818cf8" opacity="0.62" transform="rotate(14 68 61)"/>
          <rect x="160" y="82" width="9" height="58" rx="4.5" fill="#22d3ee" opacity="0.58"/>
          <path d="M164 82 Q148 56 136 65 Q141 74 154 75" fill="#22d3ee" opacity="0.5"/>
          <path d="M164 82 Q180 52 193 63 Q187 72 175 73" fill="#0ea5e9" opacity="0.48"/>
          <ellipse cx="164" cy="80" rx="11" ry="7" fill="#22d3ee" opacity="0.38"/>
          <path d="M0 140 Q16 122 12 104 Q8 86 20 72 Q26 86 18 102 Q14 122 28 136" stroke="#4ade80" strokeWidth="2.5" fill="none" opacity="0.4" strokeLinecap="round"/>
          <path d="M185 140 Q196 120 192 100 Q188 82 198 68" stroke="#34d399" strokeWidth="2" fill="none" opacity="0.35" strokeLinecap="round"/>
        </svg>
      </div>

      {/* ── CORALS bottom-right ── */}
      <div className="absolute bottom-0 right-0 pointer-events-none select-none" style={{ width: '200px' }}>
        <svg viewBox="0 0 200 140" fill="none">
          <rect x="120" y="48" width="12" height="92" rx="6" fill="#fb7185" opacity="0.65"/>
          <ellipse cx="126" cy="46" rx="17" ry="21" fill="#f472b6" opacity="0.78"/>
          <ellipse cx="126" cy="30" rx="12" ry="14" fill="#fb7185" opacity="0.68"/>
          <circle cx="126" cy="19" r="8" fill="#f472b6" opacity="0.6"/>
          <circle cx="120" cy="40" r="2.2" fill="rgba(255,255,255,0.5)"/>
          <circle cx="132" cy="33" r="1.8" fill="rgba(255,255,255,0.45)"/>
          <rect x="48" y="68" width="10" height="72" rx="5" fill="#a78bfa" opacity="0.62"/>
          <rect x="34" y="56" width="8" height="58" rx="4" fill="#8b5cf6" opacity="0.52" transform="rotate(-14 38 85)"/>
          <rect x="62" y="60" width="8" height="52" rx="4" fill="#c4b5fd" opacity="0.52" transform="rotate(11 66 86)"/>
          <ellipse cx="50" cy="66" rx="11" ry="13" fill="#a78bfa" opacity="0.72"/>
          <ellipse cx="36" cy="54" rx="9" ry="11" fill="#8b5cf6" opacity="0.62" transform="rotate(-14 36 54)"/>
          <ellipse cx="68" cy="58" rx="9" ry="11" fill="#c4b5fd" opacity="0.62" transform="rotate(11 68 58)"/>
          <path d="M200 140 Q186 118 190 96 Q194 76 182 62 Q178 78 184 98 Q180 120 168 138" stroke="#4ade80" strokeWidth="2.5" fill="none" opacity="0.38" strokeLinecap="round"/>
          <path d="M15 140 Q22 122 18 102 Q14 84 24 70" stroke="#34d399" strokeWidth="2" fill="none" opacity="0.32" strokeLinecap="round"/>
        </svg>
      </div>

      {/* ── STARFISH ── */}
      {[
        { color:'#f472b6', size:32, style:{ bottom:'22%', left:'2%',  animation:'floatSlow 7s ease-in-out 0s infinite',   filter:'drop-shadow(0 0 8px rgba(244,114,182,0.6))',  transform:'rotate(18deg)' } },
        { color:'#fbbf24', size:22, style:{ bottom:'30%', left:'6%',  animation:'floatSlow 9s ease-in-out 1.5s infinite', filter:'drop-shadow(0 0 6px rgba(251,191,36,0.5))',   transform:'rotate(-25deg)' } },
        { color:'#22d3ee', size:18, style:{ bottom:'18%', left:'15%', animation:'floatSlow 6s ease-in-out 3s infinite',   filter:'drop-shadow(0 0 5px rgba(34,211,238,0.5))',   transform:'rotate(40deg)' } },
        { color:'#a78bfa', size:26, style:{ bottom:'25%', right:'3%', animation:'floatSlow 8s ease-in-out 2s infinite',   filter:'drop-shadow(0 0 7px rgba(167,139,250,0.55))', transform:'rotate(-35deg)' } },
        { color:'#38bdf8', size:20, style:{ bottom:'32%', right:'8%', animation:'floatSlow 5s ease-in-out 0.8s infinite', filter:'drop-shadow(0 0 5px rgba(56,189,248,0.5))',   transform:'rotate(55deg)' } },
      ].map((sf, i) => (
        <div key={i} className="absolute pointer-events-none select-none" style={sf.style}>
          <svg width={sf.size} height={sf.size} viewBox="0 0 100 100" fill="none">
            <path d="M50 5 L61 35 L95 35 L67 57 L78 90 L50 68 L22 90 L33 57 L5 35 L39 35 Z" fill={sf.color} opacity="0.9"/>
            <circle cx="50" cy="52" r="11" fill={sf.color} opacity="0.6"/>
            <circle cx="50" cy="18" r="3" fill="rgba(255,255,255,0.55)"/>
            <circle cx="74" cy="42" r="2.5" fill="rgba(255,255,255,0.5)"/>
            <circle cx="65" cy="74" r="2.5" fill="rgba(255,255,255,0.5)"/>
            <circle cx="35" cy="74" r="2.5" fill="rgba(255,255,255,0.5)"/>
            <circle cx="26" cy="42" r="2.5" fill="rgba(255,255,255,0.5)"/>
          </svg>
        </div>
      ))}

      {/* ── SMALL FISH ── */}
      {[
        { color:'#22d3ee', size:26, flip:false, style:{ top:'25%', left:'1%',   animation:'floatSlow 11s ease-in-out 0s infinite',   filter:'drop-shadow(0 0 5px rgba(34,211,238,0.4))' } },
        { color:'#f472b6', size:20, flip:true,  style:{ top:'40%', right:'2%',  animation:'floatSlow 13s ease-in-out 2s infinite',   filter:'drop-shadow(0 0 5px rgba(244,114,182,0.4))' } },
        { color:'#fbbf24', size:16, flip:false, style:{ top:'60%', left:'8%',   animation:'floatSlow 8s ease-in-out 1s infinite',    filter:'drop-shadow(0 0 4px rgba(251,191,36,0.38))' } },
        { color:'#a78bfa', size:18, flip:true,  style:{ top:'55%', right:'7%',  animation:'floatSlow 10s ease-in-out 3.5s infinite', filter:'drop-shadow(0 0 4px rgba(167,139,250,0.38))' } },
      ].map((f, i) => (
        <div key={i} className="absolute pointer-events-none select-none" style={{ ...f.style, transform: f.flip ? 'scaleX(-1)' : undefined }}>
          <svg width={f.size} height={Math.round(f.size * 0.62)} viewBox="0 0 80 50" fill="none">
            <ellipse cx="40" cy="25" rx="30" ry="18" fill={f.color} opacity="0.82"/>
            <path d="M10 25 L-6 12 L-6 38 Z" fill={f.color} opacity="0.88"/>
            <path d="M32 8 Q40 2 48 8 Q40 12 32 8Z" fill={f.color} opacity="0.7"/>
            <circle cx="58" cy="21" r="5" fill="white" opacity="0.9"/>
            <circle cx="59" cy="21" r="2.5" fill="#0a0f2e"/>
            <circle cx="58" cy="20" r="1.2" fill="white"/>
          </svg>
        </div>
      ))}

      {/* ── BUBBLES ── */}
      {[12,8,18,10,14,6,20].map((s, i) => (
        <div key={i} className="absolute rounded-full pointer-events-none"
          style={{
            width: s, height: s,
            left: `${5 + i * 14}%`, top: `${15 + (i % 3) * 25}%`,
            background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.5), rgba(56,189,248,0.1))',
            border: '1px solid rgba(255,255,255,0.2)',
            animation: `floatY ${4 + i * 0.7}s ease-in-out ${i * 0.5}s infinite`,
          }} />
      ))}

      {/* Wave top */}
      {/* removed - seamless bg */}

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        {/* Heading */}
        <div className="reveal mb-16 text-center">
          <div className="section-heading-line mx-auto" />
          <h2 className="text-4xl md:text-5xl font-black text-white mb-2">スキル</h2>
          <p className="text-[#38bdf8] text-sm font-semibold tracking-widest uppercase">Skills</p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className={`card-reveal delay-${i * 100}`}
            >
              <div className="ocean-card glass-card rounded-3xl p-7 h-full"
                style={{ borderColor: `${cat.color}25` }}>
                {/* Top accent bar */}
                <div className="absolute top-0 left-6 right-6 h-0.5 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${cat.color}, transparent)` }} />

                {/* Header */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}35` }}>
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base leading-tight">{cat.title}</h3>
                    <p className="text-[#94c8e8] text-xs mt-0.5">{cat.subtitle}</p>
                  </div>
                </div>

                <div className="h-px mb-5" style={{ background: `linear-gradient(90deg, ${cat.color}40, transparent)` }} />

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-default"
                      style={{
                        background: `${cat.color}15`,
                        border: `1px solid ${cat.color}35`,
                        color: cat.color,
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement
                        el.style.background = `${cat.color}30`
                        el.style.boxShadow = `0 0 14px ${cat.color}55`
                        el.style.color = '#fff'
                        el.style.transform = 'scale(1.08) translateY(-2px)'
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement
                        el.style.background = `${cat.color}15`
                        el.style.boxShadow = 'none'
                        el.style.color = cat.color
                        el.style.transform = ''
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave bottom - removed */}
    </section>
  )
}
