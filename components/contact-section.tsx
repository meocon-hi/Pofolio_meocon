'use client'

import { useEffect, useRef } from 'react'

const contacts = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'thaonguyentran21062004@gmail.com',
    href: 'mailto:thaonguyentran21062004@gmail.com',
    color: '#38bdf8',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '0346 935 038',
    href: 'tel:0346935038',
    color: '#818cf8',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.202 2.394.1 2.646.64.698 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .269.18.579.688.482C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/meocon-hi',
    href: 'https://github.com/meocon-hi',
    color: '#f472b6',
  },
]

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal, .card-reveal, .card-pop').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="contact" ref={ref} className="relative py-28 ocean-section overflow-hidden">

      {/* Deep ocean glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(56,189,248,0.09) 0%, transparent 70%)' }} />
      <div className="absolute top-1/3 left-0 w-72 h-72 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(129,140,248,0.06) 0%, transparent 70%)', transform: 'translateX(-40%)' }} />
      <div className="absolute top-1/3 right-0 w-72 h-72 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(244,114,182,0.06) 0%, transparent 70%)', transform: 'translateX(40%)' }} />

      {/* Floating bubbles */}
      {[8,12,6,16,10,14,8,20].map((s, i) => (
        <div key={i} className="absolute rounded-full pointer-events-none"
          style={{
            width: s, height: s,
            left: `${6 + i * 12}%`, top: `${18 + (i % 4) * 18}%`,
            background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.35), rgba(56,189,248,0.06))',
            border: '1px solid rgba(255,255,255,0.15)',
            animation: `floatY ${4 + i}s ease-in-out ${i * 0.55}s infinite`,
          }} />
      ))}

      {/* Small fish */}
      {[
        { color:'#22d3ee', size:22, flip:false, style:{ top:'25%', left:'2%', animation:'floatSlow 11s ease-in-out infinite' } },
        { color:'#f472b6', size:16, flip:true,  style:{ top:'55%', right:'2%', animation:'floatSlow 13s ease-in-out 2s infinite' } },
      ].map((f, i) => (
        <div key={i} className="absolute pointer-events-none select-none"
          style={{ ...f.style, transform: f.flip ? 'scaleX(-1)' : undefined }}>
          <svg width={f.size} height={f.size * 0.62} viewBox="0 0 80 50" fill="none">
            <ellipse cx="40" cy="25" rx="30" ry="18" fill={f.color} opacity="0.75"/>
            <path d="M10 25 L-6 12 L-6 38 Z" fill={f.color} opacity="0.85"/>
            <circle cx="58" cy="21" r="5" fill="white" opacity="0.85"/>
            <circle cx="59" cy="21" r="2.5" fill="#0a0f2e"/>
          </svg>
        </div>
      ))}

      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10">

        {/* Heading */}
        <div className="reveal mb-12 text-center">
          <div className="section-heading-line mx-auto" />
          <h2 className="text-4xl md:text-5xl font-black text-white mb-2">お問い合わせ</h2>
          <p className="text-[#38bdf8] text-sm font-semibold tracking-widest uppercase">Contact</p>
        </div>

        {/* Message */}
        <div className="reveal mb-12 text-center max-w-xl mx-auto">
          <p className="text-[#e8f4ff]/75 text-base leading-relaxed">
            ポートフォリオをご覧いただき、ありがとうございます。<br />
            プロジェクトや活動についての詳細は、GitHubをご覧ください。
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {contacts.map((c, i) => (
            <a
              key={i}
              href={c.href}
              target={c.label === 'GitHub' ? '_blank' : undefined}
              rel={c.label === 'GitHub' ? 'noopener noreferrer' : undefined}
              className={`card-pop delay-${i * 150} ocean-card glass-card rounded-3xl p-6 flex flex-col items-center gap-4 text-center no-underline`}
              style={{ borderColor: `${c.color}28` }}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl"
                style={{ background: `linear-gradient(90deg, transparent, ${c.color}, transparent)` }} />

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mt-1 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${c.color}18`,
                  border: `1.5px solid ${c.color}38`,
                  color: c.color,
                  boxShadow: `0 0 20px ${c.color}20`,
                }}>
                {c.icon}
              </div>

              {/* Label */}
              <p className="text-[#94c8e8] text-xs font-bold uppercase tracking-widest"
                style={{ color: `${c.color}cc` }}>
                {c.label}
              </p>

              {/* Value */}
              <p className="text-white text-sm font-medium leading-snug break-all">{c.value}</p>

              {/* Arrow */}
              <div className="w-8 h-8 rounded-full flex items-center justify-center mt-auto transition-transform duration-300 hover:translate-x-1"
                style={{ background: `${c.color}15`, border: `1px solid ${c.color}30`, color: c.color }}>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal text-center">
          <a href="https://github.com/meocon-hi" target="_blank" rel="noopener noreferrer"
            className="btn-ocean inline-flex items-center gap-2 text-base">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.202 2.394.1 2.646.64.698 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .269.18.579.688.482C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
            GitHubを見る
          </a>
        </div>

      </div>
    </section>
  )
}
