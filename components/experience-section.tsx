'use client'

import { useEffect, useRef } from 'react'

const experiences = [
  {
    period: '2024.07 — 2026.04',
    title: 'IMPL株式会社（日本）',
    role: 'リモートインターン',
    description: '日本企業でリモートインターンとして、いくつかの開発プロジェクトに参加しました。特にロボット関連プロジェクトでは、初めての分野に挑戦しながら、シミュレーションや開発について学びました。この経験を通して、未知の技術にも積極的に挑戦する大切さを学びました。',
    tags: ['Remote Work', 'Robot Simulation', 'Development', 'Team Project'],
  },
]

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal, .card-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={ref} className="relative py-28 ocean-section">

      {/* Bubbles */}
      {[6, 12, 18, 10, 14].map((s, i) => (
        <div key={i} className="absolute rounded-full pointer-events-none"
          style={{
            width: s, height: s,
            right: `${5 + i * 15}%`, bottom: `${10 + i * 12}%`,
            background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.3), rgba(56,189,248,0.08))',
            border: '1px solid rgba(255,255,255,0.15)',
            animation: `floatY ${5 + i}s ease-in-out ${i * 0.8}s infinite`,
          }} />
      ))}

      <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">

        {/* Heading */}
        <div className="reveal mb-16 text-center">
          <div className="section-heading-line mx-auto" />
          <h2 className="text-4xl md:text-5xl font-black text-white mb-2">経験</h2>
          <p className="text-[#38bdf8] text-sm font-semibold tracking-widest uppercase">Experience</p>
        </div>

        {experiences.map((exp, i) => (
          <div key={i} className="card-reveal text-center md:text-left">

            {/* Period badge */}
            <div className="flex justify-center md:justify-start mb-5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold"
                style={{
                  background: 'rgba(56,189,248,0.12)',
                  border: '1px solid rgba(56,189,248,0.35)',
                  color: '#38bdf8',
                }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
                {exp.period}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-white font-black mb-2"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', textShadow: '0 0 30px rgba(56,189,248,0.3)' }}>
              {exp.title}
            </h3>

            {/* Role */}
            <p className="font-bold text-lg mb-6" style={{ color: '#f472b6' }}>
              {exp.role}
            </p>

            {/* Divider */}
            <div className="flex justify-center md:justify-start mb-6">
              <div className="h-0.5 w-24 rounded-full"
                style={{ background: 'linear-gradient(90deg, #38bdf8, #818cf8, transparent)' }} />
            </div>

            {/* Description */}
            <p className="text-[#e8f4ff]/85 leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0"
              style={{ fontSize: '1rem', lineHeight: '1.9' }}>
              {exp.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {exp.tags.map((tag) => (
                <span key={tag}
                  className="skill-badge px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
                  style={{ boxShadow: 'none' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(56,189,248,0.45)'
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none'
                  }}>
                  {tag}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}
