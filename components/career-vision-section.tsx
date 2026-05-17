'use client'

import { useEffect, useRef } from 'react'

const values = [
  { icon: '🚀', text: '技術力と実践力の継続的な向上' },
  { icon: '🤝', text: 'チームとの協働とコミュニケーション' },
  { icon: '🌍', text: '社会への貢献と問題解決' },
  { icon: '🔬', text: '新しい技術への挑戦と学習' },
]

export function CareerVisionSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="vision" ref={ref} className="relative py-28 ocean-section-alt">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)', transform: 'translate(-40%, -50%)' }} />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(244,114,182,0.07) 0%, transparent 70%)', transform: 'translate(40%, -50%)' }} />
      </div>
      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10">
        {/* Heading */}
        <div className="reveal mb-14 text-center">
          <div className="section-heading-line mx-auto" />
          <h2 className="text-4xl md:text-5xl font-black text-white mb-2">目指すエンジニア像</h2>
          <p className="text-[#38bdf8] text-sm font-semibold tracking-widest uppercase">Career Vision</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Text */}
          <div className="space-y-5 reveal-left">
            {[
              '私の目標は、学んだ技術を実際の開発に活かし、人や社会に役立つものを作れるエンジニアになることです。',
              'これまで主にWeb開発について学んできましたが、ロボット、シミュレーション、AIなどの分野にも少しずつ挑戦する中で、さらに幅広い技術に興味を持つようになりました。',
              '将来は、チームワークを大切にしながら、技術力だけでなく、問題解決力も高め、社会に貢献できるエンジニアとして成長していきたいです。',
            ].map((text, i) => (
              <div key={i} className="glass-card rounded-2xl p-6">
                <p className="text-[#e8f4ff]/85 leading-relaxed text-base">{text}</p>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="space-y-4 reveal-right">
            <p className="text-[#38bdf8] text-xs font-bold tracking-widest uppercase mb-5">Key Values</p>
            {values.map((v, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:-translate-x-1 hover:border-[rgba(56,189,248,0.45)] transition-all duration-300"
                style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: 'rgba(56,189,248,0.12)', border: '1px solid rgba(56,189,248,0.25)' }}>
                  {v.icon}
                </div>
                <p className="text-[#e8f4ff]/90 text-sm font-medium">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
