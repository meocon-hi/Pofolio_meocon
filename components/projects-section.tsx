'use client'

import { useEffect, useRef } from 'react'

/* ── Illustration SVGs for each project ── */
function HearMeIllustration() {
  return (
    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
      {/* Background glow */}
      <circle cx="100" cy="100" r="75" fill="rgba(56,189,248,0.12)"/>
      {/* Hand / ASL sign */}
      <g transform="translate(50,40)">
        {/* Palm */}
        <rect x="28" y="60" width="44" height="52" rx="10" fill="#38bdf8" opacity="0.9"/>
        {/* Thumb */}
        <rect x="12" y="72" width="20" height="28" rx="8" fill="#38bdf8" opacity="0.85" transform="rotate(-20 22 86)"/>
        {/* Finger 1 */}
        <rect x="28" y="22" width="12" height="44" rx="6" fill="#60c8f5" opacity="0.9"/>
        {/* Finger 2 */}
        <rect x="44" y="18" width="12" height="46" rx="6" fill="#60c8f5" opacity="0.9"/>
        {/* Finger 3 */}
        <rect x="60" y="22" width="12" height="42" rx="6" fill="#60c8f5" opacity="0.85"/>
        {/* Finger 4 */}
        <rect x="74" y="30" width="11" height="34" rx="5.5" fill="#60c8f5" opacity="0.8"/>
        {/* Shine */}
        <ellipse cx="55" cy="58" rx="10" ry="4" fill="rgba(255,255,255,0.25)"/>
      </g>
      {/* Sound waves */}
      <path d="M148 70 Q162 100 148 130" stroke="#f472b6" strokeWidth="3.5" fill="none" strokeLinecap="round" opacity="0.8"/>
      <path d="M158 58 Q178 100 158 142" stroke="#f472b6" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.55"/>
      <path d="M168 48 Q192 100 168 152" stroke="#f472b6" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.35"/>
      {/* AI sparkles */}
      <circle cx="40" cy="38" r="4" fill="#fbbf24" opacity="0.9"/>
      <circle cx="32" cy="50" r="2.5" fill="#fbbf24" opacity="0.7"/>
      <circle cx="52" cy="30" r="3" fill="#fbbf24" opacity="0.75"/>
      <path d="M40 30 L40 46 M33 38 L47 38" stroke="#fbbf24" strokeWidth="1.5" opacity="0.5"/>
      {/* Floating bubbles */}
      <circle cx="30" cy="150" r="8" fill="rgba(56,189,248,0.2)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
      <circle cx="165" cy="160" r="5" fill="rgba(56,189,248,0.15)" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
      <circle cx="170" cy="45" r="6" fill="rgba(244,114,182,0.15)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
    </svg>
  )
}

function RobocarIllustration() {
  return (
    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
      <circle cx="100" cy="100" r="75" fill="rgba(129,140,248,0.12)"/>
      {/* Submarine / Robot body */}
      <g transform="translate(30, 55)">
        {/* Main body */}
        <rect x="20" y="35" width="100" height="55" rx="22" fill="#818cf8" opacity="0.95"/>
        {/* Cockpit dome */}
        <ellipse cx="95" cy="35" rx="24" ry="22" fill="#a78bfa" opacity="0.9"/>
        <ellipse cx="95" cy="33" rx="18" ry="16" fill="rgba(180,220,255,0.7)"/>
        <ellipse cx="92" cy="30" rx="7" ry="6" fill="rgba(255,255,255,0.6)"/>
        {/* Eye / Sensor */}
        <circle cx="95" cy="35" r="9" fill="#22d3ee" opacity="0.85"/>
        <circle cx="95" cy="35" r="5" fill="#0a0f2e"/>
        <circle cx="93" cy="33" r="2" fill="white" opacity="0.8"/>
        {/* Front nose */}
        <path d="M120 48 L140 62 L120 76 Z" fill="#6366f1" opacity="0.85"/>
        {/* Tail fin */}
        <path d="M20 45 L0 28 L8 62 Z" fill="#7c3aed" opacity="0.75"/>
        <path d="M20 75 L0 92 L8 62 Z" fill="#7c3aed" opacity="0.7"/>
        {/* Propeller */}
        <circle cx="10" cy="62" r="6" fill="#4f46e5" opacity="0.8"/>
        <ellipse cx="10" cy="50" rx="3" ry="10" fill="#818cf8" opacity="0.7" transform="rotate(20 10 62)"/>
        <ellipse cx="10" cy="74" rx="3" ry="10" fill="#818cf8" opacity="0.7" transform="rotate(-20 10 62)"/>
        {/* Top fin */}
        <path d="M60 35 L70 10 L85 35 Z" fill="#6366f1" opacity="0.7"/>
        {/* Wheels (robocar) */}
        <circle cx="45" cy="90" r="12" fill="#4338ca" opacity="0.9"/>
        <circle cx="45" cy="90" r="7" fill="#312e81" opacity="0.9"/>
        <circle cx="95" cy="90" r="12" fill="#4338ca" opacity="0.9"/>
        <circle cx="95" cy="90" r="7" fill="#312e81" opacity="0.9"/>
        {/* Speed lines */}
        <path d="M-8 50 L12 50" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
        <path d="M-12 62 L8 62" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
        <path d="M-8 74 L10 74" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      </g>
      {/* Bubbles */}
      <circle cx="155" cy="45" r="9" fill="rgba(129,140,248,0.2)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
      <circle cx="165" cy="155" r="6" fill="rgba(56,189,248,0.15)" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
      <circle cx="30" cy="160" r="10" fill="rgba(129,140,248,0.15)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
      <circle cx="168" cy="100" r="4" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8"/>
      {/* Trophy badge */}
      <circle cx="165" cy="42" r="14" fill="rgba(251,191,36,0.2)" stroke="rgba(251,191,36,0.5)" strokeWidth="1.5"/>
      <text x="165" y="47" textAnchor="middle" fontSize="14" fill="#fbbf24">🏆</text>
    </svg>
  )
}

function WebMobileIllustration() {
  return (
    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
      <circle cx="100" cy="100" r="75" fill="rgba(244,114,182,0.10)"/>
      {/* Laptop */}
      <g transform="translate(22, 80)">
        <rect x="10" y="0" width="115" height="72" rx="6" fill="#1e1b4b" opacity="0.95"/>
        <rect x="14" y="4" width="107" height="64" rx="4" fill="#312e81" opacity="0.9"/>
        {/* Screen content */}
        <rect x="18" y="8" width="60" height="8" rx="3" fill="#f472b6" opacity="0.7"/>
        <rect x="18" y="20" width="99" height="4" rx="2" fill="rgba(255,255,255,0.25)"/>
        <rect x="18" y="28" width="80" height="4" rx="2" fill="rgba(255,255,255,0.18)"/>
        <rect x="18" y="36" width="90" height="4" rx="2" fill="rgba(255,255,255,0.18)"/>
        <rect x="18" y="48" width="40" height="14" rx="5" fill="#f472b6" opacity="0.75"/>
        <rect x="64" y="48" width="40" height="14" rx="5" fill="rgba(56,189,248,0.4)" stroke="rgba(56,189,248,0.5)" strokeWidth="1"/>
        {/* Base */}
        <path d="M0 72 L135 72 L125 82 L10 82 Z" fill="#0f0a2e" opacity="0.9"/>
        <rect x="50" y="82" width="35" height="5" rx="2.5" fill="#1e1b4b" opacity="0.8"/>
      </g>
      {/* Phone floating */}
      <g transform="translate(128, 38)">
        <rect x="0" y="0" width="44" height="76" rx="8" fill="#1e1b4b" opacity="0.95"/>
        <rect x="3" y="8" width="38" height="60" rx="4" fill="#312e81" opacity="0.9"/>
        {/* Phone screen */}
        <rect x="6" y="12" width="32" height="6" rx="2" fill="#f472b6" opacity="0.65"/>
        <rect x="6" y="22" width="32" height="3" rx="1.5" fill="rgba(255,255,255,0.2)"/>
        <rect x="6" y="28" width="22" height="3" rx="1.5" fill="rgba(255,255,255,0.15)"/>
        <rect x="6" y="40" width="32" height="16" rx="4" fill="rgba(56,189,248,0.25)"/>
        {/* Home bar */}
        <rect x="14" y="72" width="16" height="3" rx="1.5" fill="rgba(255,255,255,0.3)"/>
      </g>
      {/* Code brackets floating */}
      <text x="22" y="78" fontSize="22" fill="#38bdf8" opacity="0.5" fontFamily="monospace">{'</>'}</text>
      <text x="155" y="168" fontSize="16" fill="#f472b6" opacity="0.45" fontFamily="monospace">{ '{}' }</text>
      {/* Tech icons */}
      <circle cx="38" cy="130" r="14" fill="rgba(244,114,182,0.15)" stroke="rgba(244,114,182,0.4)" strokeWidth="1.5"/>
      <text x="38" y="135" textAnchor="middle" fontSize="13" fill="#f472b6" opacity="0.85">⚛</text>
      <circle cx="162" cy="128" r="12" fill="rgba(56,189,248,0.15)" stroke="rgba(56,189,248,0.4)" strokeWidth="1.5"/>
      <text x="162" y="133" textAnchor="middle" fontSize="11" fill="#38bdf8" opacity="0.85">🔥</text>
      {/* Bubbles */}
      <circle cx="28" cy="50" r="7" fill="rgba(244,114,182,0.15)" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
      <circle cx="170" cy="165" r="8" fill="rgba(56,189,248,0.12)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
    </svg>
  )
}

const projects = [
  {
    num: '01',
    title: 'HearMe',
    category: 'AI / Education / Team Project',
    categoryJa: 'AI / 教育 / チームプロジェクト',
    description: '「AI for Life」コンテストでチームメンバーと一緒に開発したアプリです。AIを使ってASL（アメリカ手話）の学習を支援することを目的としています。人の学習をサポートできる、意味のあるプロジェクトだと感じました。',
    tags: ['AI', 'ASL', 'Education', 'Teamwork'],
    accent: '#38bdf8',
    result: null,
    Illustration: HearMeIllustration,
  },
  {
    num: '02',
    title: 'VKU ROBOCAR',
    category: 'Robot / Simulation / Competition',
    categoryJa: 'ロボット / シミュレーション / 競技',
    description: 'VKU ROBOCARコンテストで、チームメンバーと協力しながらロボットカーの開発に取り組みました。このプロジェクトを通して、ロボットやシミュレーション分野にもっと興味を持つようになりました。',
    tags: ['Robot', 'Simulation', 'Team Project', 'C++'],
    accent: '#818cf8',
    result: '奨励賞',
    Illustration: RobocarIllustration,
  },
  {
    num: '03',
    title: 'Web / Mobile Projects',
    category: 'Web & Mobile Development',
    categoryJa: 'Web & モバイル開発',
    description: '大学での学習や個人開発を通して、Webアプリやモバイルアプリの開発に取り組んできました。React Native、Laravel、NextJS、Firebaseなどを使い、実際のアプリ開発に必要な基礎力を身につけています。',
    tags: ['Web', 'Mobile', 'React Native', 'Laravel', 'Firebase'],
    accent: '#f472b6',
    result: null,
    Illustration: WebMobileIllustration,
  },
]

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal, .card-pop').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={ref} className="relative py-28 ocean-section-alt">

      <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(244,114,182,0.07) 0%, transparent 70%)', transform: 'translateX(40%)' }} />

      {/* Bubbles */}
      {[10, 16, 8, 20, 12].map((s, i) => (
        <div key={i} className="absolute rounded-full pointer-events-none"
          style={{
            width: s, height: s,
            left: `${10 + i * 20}%`, bottom: `${20 + (i % 3) * 15}%`,
            background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.5), rgba(56,189,248,0.1))',
            border: '1px solid rgba(255,255,255,0.2)',
            animation: `floatY ${5 + i}s ease-in-out ${i * 0.6}s infinite`,
          }} />
      ))}

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">

        {/* Heading */}
        <div className="reveal mb-16 text-center">
          <div className="section-heading-line mx-auto" />
          <h2 className="text-4xl md:text-5xl font-black text-white mb-2">プロジェクト</h2>
          <p className="text-[#38bdf8] text-sm font-semibold tracking-widest uppercase">Projects</p>
        </div>

        {/* Cards - portrait style like reference */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {projects.map((proj, i) => (
            <div key={proj.title} className={`card-pop delay-${i * 150}`}>
              <div
                className="ocean-card relative rounded-3xl flex flex-col overflow-hidden"
                style={{
                  background: `linear-gradient(180deg, rgba(10,18,55,0.85) 0%, rgba(6,12,40,0.92) 100%)`,
                  border: `1px solid ${proj.accent}30`,
                  boxShadow: `0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px ${proj.accent}15`,
                }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                  style={{ background: `linear-gradient(90deg, ${proj.accent}, transparent 70%)` }} />

                {/* Number badge */}
                <div className="absolute top-4 right-4 text-xs font-black tracking-widest opacity-40" style={{ color: proj.accent }}>
                  {proj.num}
                </div>

                {/* Illustration area */}
                <div className="relative w-full flex items-center justify-center pt-8 pb-4 px-6"
                  style={{ height: '200px' }}>
                  {/* Glow behind illustration */}
                  <div className="absolute inset-0 rounded-t-3xl"
                    style={{ background: `radial-gradient(ellipse at 50% 80%, ${proj.accent}18 0%, transparent 65%)` }} />
                  <div className="relative w-full h-full">
                    <proj.Illustration />
                  </div>
                </div>

                {/* Divider */}
                <div className="mx-5 h-px" style={{ background: `linear-gradient(90deg, transparent, ${proj.accent}40, transparent)` }} />

                {/* Content */}
                <div className="p-6 flex flex-col gap-3 flex-grow">
                  {/* Result badge */}
                  {proj.result && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold self-start"
                      style={{ background: 'rgba(244,114,182,0.18)', border: '1px solid rgba(244,114,182,0.4)', color: '#f472b6' }}>
                      🏆 {proj.result}
                    </span>
                  )}

                  <h3 className="text-white font-black text-xl leading-tight">{proj.title}</h3>

                  <div>
                    <p className="text-xs font-bold mb-0.5" style={{ color: proj.accent }}>{proj.category}</p>
                    <p className="text-[#94c8e8] text-xs">{proj.categoryJa}</p>
                  </div>

                  <div className="h-px" style={{ background: `linear-gradient(90deg, ${proj.accent}30, transparent)` }} />

                  <p className="text-[#e8f4ff]/78 text-sm leading-relaxed flex-grow">{proj.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {proj.tags.map((tag) => (
                      <span key={tag}
                        className="px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-250 hover:scale-105"
                        style={{
                          background: `${proj.accent}12`,
                          border: `1px solid ${proj.accent}32`,
                          color: proj.accent,
                        }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
