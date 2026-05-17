'use client'

import { useEffect, useRef } from 'react'

/* ── Illustration SVGs ── */
function SpaceWebIllustration() {
  return (
    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
      <circle cx="100" cy="100" r="75" fill="rgba(56,189,248,0.10)"/>
      {/* Stars */}
      <circle cx="30" cy="30" r="2" fill="white" opacity="0.8"/>
      <circle cx="170" cy="25" r="1.5" fill="white" opacity="0.6"/>
      <circle cx="155" cy="60" r="1" fill="white" opacity="0.5"/>
      <circle cx="45" cy="170" r="1.5" fill="white" opacity="0.55"/>
      <circle cx="175" cy="155" r="2" fill="white" opacity="0.7"/>
      <circle cx="80" cy="20" r="1" fill="white" opacity="0.5"/>
      {/* Planet big */}
      <circle cx="105" cy="95" r="42" fill="#1e3a6e" opacity="0.95"/>
      <circle cx="105" cy="95" r="42" fill="url(#planetGrad)" opacity="0.85"/>
      <defs>
        <radialGradient id="planetGrad" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0.2"/>
        </radialGradient>
      </defs>
      {/* Planet ring */}
      <ellipse cx="105" cy="95" rx="60" ry="14" stroke="#38bdf8" strokeWidth="2.5" fill="none" opacity="0.35"/>
      <ellipse cx="105" cy="95" rx="52" ry="10" stroke="#7dd3fc" strokeWidth="1.2" fill="none" opacity="0.25"/>
      {/* Surface lines */}
      <path d="M70 80 Q105 70 140 82" stroke="rgba(56,189,248,0.35)" strokeWidth="1.5" fill="none"/>
      <path d="M68 97 Q105 88 142 99" stroke="rgba(56,189,248,0.25)" strokeWidth="1.2" fill="none"/>
      <path d="M72 114 Q105 106 138 116" stroke="rgba(56,189,248,0.2)" strokeWidth="1" fill="none"/>
      {/* Moon */}
      <circle cx="50" cy="55" r="14" fill="#1e3a6e" opacity="0.9"/>
      <circle cx="50" cy="55" r="14" fill="rgba(165,180,252,0.25)"/>
      <circle cx="45" cy="50" r="4" fill="rgba(255,255,255,0.12)"/>
      {/* Browser chrome floating */}
      <rect x="20" y="148" width="80" height="38" rx="5" fill="rgba(14,30,80,0.85)" stroke="rgba(56,189,248,0.3)" strokeWidth="1"/>
      <rect x="20" y="148" width="80" height="10" rx="5" fill="rgba(56,189,248,0.2)"/>
      <circle cx="26" cy="153" r="2" fill="#f472b6" opacity="0.8"/>
      <circle cx="32" cy="153" r="2" fill="#fbbf24" opacity="0.8"/>
      <circle cx="38" cy="153" r="2" fill="#4ade80" opacity="0.8"/>
      <rect x="24" y="162" width="68" height="3" rx="1.5" fill="rgba(255,255,255,0.2)"/>
      <rect x="24" y="169" width="50" height="3" rx="1.5" fill="rgba(255,255,255,0.15)"/>
      <rect x="24" y="176" width="60" height="3" rx="1.5" fill="rgba(255,255,255,0.12)"/>
      {/* Sparkles */}
      <circle cx="160" cy="148" r="4" fill="#fbbf24" opacity="0.85"/>
      <circle cx="152" cy="160" r="2.5" fill="#fbbf24" opacity="0.65"/>
      <path d="M160 140 L160 156 M152 148 L168 148" stroke="#fbbf24" strokeWidth="1.2" opacity="0.45"/>
    </svg>
  )
}

function HearMeIllustration() {
  return (
    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
      <circle cx="100" cy="100" r="75" fill="rgba(56,189,248,0.12)"/>
      <g transform="translate(50,40)">
        <rect x="28" y="60" width="44" height="52" rx="10" fill="#38bdf8" opacity="0.9"/>
        <rect x="12" y="72" width="20" height="28" rx="8" fill="#38bdf8" opacity="0.85" transform="rotate(-20 22 86)"/>
        <rect x="28" y="22" width="12" height="44" rx="6" fill="#60c8f5" opacity="0.9"/>
        <rect x="44" y="18" width="12" height="46" rx="6" fill="#60c8f5" opacity="0.9"/>
        <rect x="60" y="22" width="12" height="42" rx="6" fill="#60c8f5" opacity="0.85"/>
        <rect x="74" y="30" width="11" height="34" rx="5.5" fill="#60c8f5" opacity="0.8"/>
        <ellipse cx="55" cy="58" rx="10" ry="4" fill="rgba(255,255,255,0.25)"/>
      </g>
      <path d="M148 70 Q162 100 148 130" stroke="#f472b6" strokeWidth="3.5" fill="none" strokeLinecap="round" opacity="0.8"/>
      <path d="M158 58 Q178 100 158 142" stroke="#f472b6" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.55"/>
      <path d="M168 48 Q192 100 168 152" stroke="#f472b6" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.35"/>
      <circle cx="40" cy="38" r="4" fill="#fbbf24" opacity="0.9"/>
      <circle cx="32" cy="50" r="2.5" fill="#fbbf24" opacity="0.7"/>
      <circle cx="52" cy="30" r="3" fill="#fbbf24" opacity="0.75"/>
      <path d="M40 30 L40 46 M33 38 L47 38" stroke="#fbbf24" strokeWidth="1.5" opacity="0.5"/>
      <circle cx="30" cy="150" r="8" fill="rgba(56,189,248,0.2)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
      <circle cx="165" cy="160" r="5" fill="rgba(56,189,248,0.15)" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
      <circle cx="170" cy="45" r="6" fill="rgba(244,114,182,0.15)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
    </svg>
  )
}

function RobotSimIllustration() {
  return (
    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
      <circle cx="100" cy="100" r="75" fill="rgba(129,140,248,0.12)"/>
      {/* Robot body */}
      <g transform="translate(58, 40)">
        {/* Head */}
        <rect x="12" y="0" width="60" height="46" rx="10" fill="#818cf8" opacity="0.95"/>
        {/* Eye left */}
        <circle cx="28" cy="20" r="9" fill="#0f172a"/>
        <circle cx="28" cy="20" r="6" fill="#22d3ee" opacity="0.9"/>
        <circle cx="26" cy="18" r="2.5" fill="white" opacity="0.85"/>
        {/* Eye right */}
        <circle cx="56" cy="20" r="9" fill="#0f172a"/>
        <circle cx="56" cy="20" r="6" fill="#22d3ee" opacity="0.9"/>
        <circle cx="54" cy="18" r="2.5" fill="white" opacity="0.85"/>
        {/* Mouth */}
        <rect x="24" y="34" width="36" height="6" rx="3" fill="#22d3ee" opacity="0.6"/>
        <rect x="28" y="36" width="8" height="2" rx="1" fill="white" opacity="0.5"/>
        <rect x="40" y="36" width="8" height="2" rx="1" fill="white" opacity="0.5"/>
        {/* Antenna */}
        <rect x="39" y="-14" width="6" height="16" rx="3" fill="#a78bfa" opacity="0.9"/>
        <circle cx="42" cy="-16" r="5" fill="#f472b6" opacity="0.85"/>
        {/* Body */}
        <rect x="4" y="50" width="76" height="56" rx="10" fill="#6366f1" opacity="0.9"/>
        {/* Chest panel */}
        <rect x="14" y="58" width="56" height="36" rx="6" fill="rgba(10,15,60,0.6)"/>
        <circle cx="28" cy="70" r="5" fill="#22d3ee" opacity="0.8"/>
        <circle cx="42" cy="70" r="5" fill="#f472b6" opacity="0.75"/>
        <circle cx="56" cy="70" r="5" fill="#4ade80" opacity="0.75"/>
        <rect x="20" y="80" width="44" height="3" rx="1.5" fill="#38bdf8" opacity="0.4"/>
        <rect x="20" y="86" width="32" height="3" rx="1.5" fill="#38bdf8" opacity="0.3"/>
        {/* Arms */}
        <rect x="-16" y="52" width="20" height="46" rx="10" fill="#7c3aed" opacity="0.85"/>
        <rect x="80" y="52" width="20" height="46" rx="10" fill="#7c3aed" opacity="0.85"/>
        {/* Wheels */}
        <circle cx="22" cy="112" r="12" fill="#4338ca" opacity="0.9"/>
        <circle cx="22" cy="112" r="7" fill="#1e1b4b" opacity="0.95"/>
        <circle cx="62" cy="112" r="12" fill="#4338ca" opacity="0.9"/>
        <circle cx="62" cy="112" r="7" fill="#1e1b4b" opacity="0.95"/>
      </g>
      {/* Gazebo grid floor */}
      <line x1="20" y1="175" x2="180" y2="175" stroke="rgba(56,189,248,0.2)" strokeWidth="1"/>
      <line x1="20" y1="182" x2="180" y2="182" stroke="rgba(56,189,248,0.12)" strokeWidth="0.8"/>
      <line x1="40" y1="165" x2="40" y2="190" stroke="rgba(56,189,248,0.15)" strokeWidth="0.8"/>
      <line x1="80" y1="165" x2="80" y2="190" stroke="rgba(56,189,248,0.15)" strokeWidth="0.8"/>
      <line x1="120" y1="165" x2="120" y2="190" stroke="rgba(56,189,248,0.15)" strokeWidth="0.8"/>
      <line x1="160" y1="165" x2="160" y2="190" stroke="rgba(56,189,248,0.15)" strokeWidth="0.8"/>
      {/* Floating code */}
      <rect x="14" y="80" width="28" height="14" rx="4" fill="rgba(99,102,241,0.2)" stroke="rgba(99,102,241,0.4)" strokeWidth="1"/>
      <text x="28" y="91" textAnchor="middle" fontSize="7" fill="#a78bfa" opacity="0.8">AI</text>
      {/* Bubbles */}
      <circle cx="22" cy="48" r="6" fill="rgba(129,140,248,0.2)" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
      <circle cx="176" cy="140" r="8" fill="rgba(56,189,248,0.15)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
    </svg>
  )
}

type Link = { label: string; href: string }

const projects = [
  {
    num: '01',
    title: '宇宙探索 Web サイト',
    period: '2023年5月（約2週間）',
    category: 'Web Development / Team Project',
    categoryJa: 'Webサイト / チーム開発',
    description: '宇宙や惑星について学ぶことができるWebサイトを開発しました。ユーザーが各惑星の情報を楽しく学べるよう、画面デザインやレイアウト、レスポンシブ対応を担当しました。チームでの開発を通して、見やすいUIの重要さと、短い期間で計画的に進める力を学びました。',
    tags: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Team'],
    accent: '#38bdf8',
    result: null,
    Illustration: SpaceWebIllustration,
    links: [
      { label: 'GitHub', href: 'https://github.com/meocon-hi/n2.git' },
      { label: 'Live Demo', href: 'https://n2-sigma.vercel.app/' },
    ] as Link[],
  },
  {
    num: '02',
    title: 'HearMe',
    period: '2024年10月〜2024年12月',
    category: 'AI / Education / Team Project',
    categoryJa: 'AI・手話認識 / チーム開発',
    description: '「AI for Life」コンテストで開発したアプリです。AIを使ってASL（アメリカ手話）の文字を認識し、学習をサポートします。データ調査・AIモデル学習・認識機能の検討を担当しました。2025年12月からはReact Nativeを使ったマルチプラットフォームアプリとして開発を続ける予定です。',
    tags: ['Python', 'AI', 'React Native', 'ASL', 'Team'],
    accent: '#f472b6',
    result: null,
    Illustration: HearMeIllustration,
    links: [
      { label: 'Frontend', href: 'https://github.com/CristalViet/AmericanSignLanugeApp.git' },
      { label: 'Backend', href: 'https://github.com/CristalViet/BackEndHearMe_Version2' },
    ] as Link[],
  },
  {
    num: '03',
    title: 'ロボットシミュレーション',
    period: '2026年2月〜2026年4月',
    category: 'Robot / AI / Internship',
    categoryJa: 'ロボット・シミュレーション / インターン',
    description: 'IMPL株式会社でのリモートインターン中に参加したプロジェクトです。AIモデルを使った認識機能の実装、Gazeboでのロボットシミュレーション、Raspberry Pi上での動作確認を担当しました。思った通りに動かない時に原因を考え試行錯誤する力を身につけ、ロボット・シミュレーション分野への興味がさらに深まりました。',
    tags: ['Python', 'AI', 'Gazebo', 'Raspberry Pi', 'Simulation'],
    accent: '#818cf8',
    result: 'インターン',
    Illustration: RobotSimIllustration,
    links: [] as Link[],
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

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {projects.map((proj, i) => (
            <div key={proj.title} className={`card-pop delay-${i * 150}`}>
              <div
                className="ocean-card relative rounded-3xl flex flex-col overflow-hidden h-full"
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

                  {/* Badge row */}
                  <div className="flex flex-wrap gap-2 items-center">
                    {proj.result && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold"
                        style={{ background: `${proj.accent}20`, border: `1px solid ${proj.accent}50`, color: proj.accent }}>
                        💼 {proj.result}
                      </span>
                    )}
                    {/* Period chip */}
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: '#94c8e8' }}>
                      🗓 {proj.period}
                    </span>
                  </div>

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

                  {/* Links */}
                  {proj.links.length > 0 && (
                    <>
                      <div className="h-px mt-1" style={{ background: `linear-gradient(90deg, ${proj.accent}25, transparent)` }} />
                      <div className="flex flex-wrap gap-2 pt-1">
                        {proj.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 hover:scale-105 hover:brightness-110"
                            style={{
                              background: `${proj.accent}18`,
                              border: `1px solid ${proj.accent}45`,
                              color: proj.accent,
                            }}
                          >
                            {link.label === 'GitHub' || link.label === 'Frontend' || link.label === 'Backend' ? (
                              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                              </svg>
                            ) : (
                              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                <polyline points="15 3 21 3 21 9"/>
                                <line x1="10" y1="14" x2="21" y2="3"/>
                              </svg>
                            )}
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
