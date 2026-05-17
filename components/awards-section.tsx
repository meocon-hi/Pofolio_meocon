'use client'

import { useEffect, useRef } from 'react'

const awards = [
  { year: '2020.01', title: '高校生優秀学生コンテスト', desc: '準優勝', color: '#94a3b8', icon: '🥈' },
  { year: '2021.01', title: '高校生優秀生徒コンテスト', desc: '第3位', color: '#f59e0b', icon: '🥉' },
  { year: '2022.01', title: '高校生優秀生徒コンテスト', desc: '第3位', color: '#f59e0b', icon: '🥉' },
  { year: '2022.10', title: '入学試験成績', desc: 'トップ10', color: '#38bdf8', icon: '⭐' },
  { year: '2023.11', title: '経団連奨学金', desc: '奨学生採用', color: '#fbbf24', icon: '🎓' },
  { year: '2024.02', title: '日本アニメ吹き替えコンテスト', desc: '2位', color: '#f472b6', icon: '🎤' },
  { year: '2024.06', title: 'VKU ROBOCARコンテスト', desc: '奨励賞', color: '#818cf8', icon: '🤖' },
  { year: '2024.12', title: 'AI for Lifeコンテスト', desc: '決勝進出', color: '#22d3ee', icon: '🧠' },
  { year: '2025.11', title: 'NiX・IT日本語', desc: 'B1.1 修了', color: '#34d399', icon: '📜' },
  { year: '2026.01', title: 'NiX-JPN-20 専門日本語５', desc: '修了', color: '#a78bfa', icon: '🗾' },
]

// ── constants ──────────────────────────────────────────
const ITEM_W = 220
const CARD_W = 196
const CARD_H = 130
const DOT_R = 16
const CONN = 18
const OVERLAP = 5

const TOTAL_W = ITEM_W * awards.length

const SVG_H = 90
const Y_EVEN = 22
const Y_ODD = 68

const dx = (i: number) => ITEM_W * i + ITEM_W / 2

function wavePath() {
  const pts = awards.map((_, i) => ({
    x: dx(i),
    y: i % 2 === 0 ? Y_EVEN : Y_ODD,
  }))

  let d = `M ${pts[0].x} ${pts[0].y}`

  for (let i = 0; i < pts.length - 1; i++) {
    const c1x = pts[i].x + ITEM_W * 0.45
    const c2x = pts[i + 1].x - ITEM_W * 0.45

    d += ` C ${c1x} ${pts[i].y} ${c2x} ${pts[i + 1].y} ${pts[i + 1].x} ${pts[i + 1].y}`
  }

  return d
}

const WAVE_TOP = CARD_H + CONN + 8
const TOTAL_H = WAVE_TOP + SVG_H + CONN + CARD_H + 36

export function AwardsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  // scroll reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.08 }
    )

    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => obs.observe(el))

    return () => obs.disconnect()
  }, [])

  // mouse + touch drag scroll
  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    let down = false
    let sx = 0
    let sl = 0

    const startDrag = (pageX: number) => {
      down = true
      sx = pageX - el.offsetLeft
      sl = el.scrollLeft
      el.style.cursor = 'grabbing'
    }

    const stopDrag = () => {
      down = false
      el.style.cursor = 'grab'
    }

    const moveDrag = (pageX: number) => {
      if (!down) return
      el.scrollLeft = sl - (pageX - el.offsetLeft - sx)
    }

    const md = (e: MouseEvent) => startDrag(e.pageX)
    const mu = () => stopDrag()
    const mm = (e: MouseEvent) => {
      if (!down) return
      e.preventDefault()
      moveDrag(e.pageX)
    }

    const ts = (e: TouchEvent) => startDrag(e.touches[0].pageX)
    const te = () => stopDrag()
    const tm = (e: TouchEvent) => {
      if (!down) return
      moveDrag(e.touches[0].pageX)
    }

    el.addEventListener('mousedown', md)
    el.addEventListener('mouseup', mu)
    el.addEventListener('mouseleave', mu)
    el.addEventListener('mousemove', mm)

    el.addEventListener('touchstart', ts, { passive: true })
    el.addEventListener('touchend', te)
    el.addEventListener('touchcancel', te)
    el.addEventListener('touchmove', tm, { passive: true })

    return () => {
      el.removeEventListener('mousedown', md)
      el.removeEventListener('mouseup', mu)
      el.removeEventListener('mouseleave', mu)
      el.removeEventListener('mousemove', mm)

      el.removeEventListener('touchstart', ts)
      el.removeEventListener('touchend', te)
      el.removeEventListener('touchcancel', te)
      el.removeEventListener('touchmove', tm)
    }
  }, [])

  return (
    <section id="awards" ref={sectionRef} className="relative py-28 ocean-section overflow-hidden">

      <div className="relative z-10">
        {/* ── Heading ── */}
        <div className="reveal mb-14 text-center px-6">
          <div className="section-heading-line mx-auto" />

          <h2 className="text-4xl md:text-5xl font-black text-white mb-2">
            受賞・活動
          </h2>

          <p className="text-[#38bdf8] text-sm font-semibold tracking-widest uppercase mb-3">
            Awards & Activities
          </p>

          <p className="text-[#94c8e8]/50 text-xs flex items-center justify-center gap-2">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            スクロールして確認
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </p>
        </div>

        {/* ── Scroll track ── */}
        <div
          ref={trackRef}
          className="overflow-x-auto select-none"
          style={{
            cursor: 'grab',
            scrollbarWidth: 'none',
            paddingLeft: 32,
            paddingRight: 32,
          }}
        >
          {/* ── Canvas ── */}
          <div className="relative" style={{ width: TOTAL_W, height: TOTAL_H }}>
            {/* ── Wave SVG ── */}
            <svg
              className="absolute pointer-events-none"
              style={{ left: 0, top: WAVE_TOP, zIndex: 1 }}
              width={TOTAL_W}
              height={SVG_H}
              viewBox={`0 0 ${TOTAL_W} ${SVG_H}`}
            >
              <defs>
                <linearGradient id="awards-wave-gradient" x1="0" y1="0" x2={TOTAL_W} y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="28%" stopColor="#818cf8" />
                  <stop offset="50%" stopColor="#f472b6" />
                  <stop offset="72%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#a78bfa" />
                </linearGradient>
              </defs>

              <path
                d={wavePath()}
                fill="none"
                stroke="rgba(100,200,255,0.13)"
                strokeWidth="12"
                strokeLinecap="round"
              />

              <path
                d={wavePath()}
                fill="none"
                stroke="url(#awards-wave-gradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>

            {/* ── Per-item ── */}
            {awards.map((a, i) => {
              const isTop = i % 2 === 0
              const dotSVGY = isTop ? Y_EVEN : Y_ODD
              const dotAbsX = dx(i)
              const dotAbsY = WAVE_TOP + dotSVGY

              const cardLeft = dotAbsX - CARD_W / 2
              const cardTop = isTop
                ? dotAbsY - DOT_R - CONN - CARD_H
                : dotAbsY + DOT_R + CONN

              const connLeft = dotAbsX - 1

              const connTop = isTop
                ? cardTop + CARD_H - OVERLAP
                : dotAbsY + DOT_R

              const connHeight = CONN + OVERLAP

              const yearTop = isTop
                ? dotAbsY + DOT_R + 5
                : dotAbsY - DOT_R - 24

              return (
                <div key={`${a.year}-${a.title}`}>
                  {/* Card */}
                  <div
                    className="glass-card rounded-2xl absolute flex flex-col p-4 transition-transform duration-300 hover:-translate-y-1"
                    style={{
                      left: cardLeft,
                      top: cardTop,
                      width: CARD_W,
                      height: CARD_H,
                      borderColor: `${a.color}35`,
                      zIndex: 10,
                      boxShadow: `0 10px 30px rgba(0,0,0,0.18), 0 0 18px ${a.color}12`,
                    }}
                  >
                    {/* accent bar near connector */}
                    {isTop ? (
                      <div
                        className="absolute bottom-0 left-6 right-6 h-px rounded-full"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${a.color}, transparent)`,
                        }}
                      />
                    ) : (
                      <div
                        className="absolute top-0 left-6 right-6 h-px rounded-full"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${a.color}, transparent)`,
                        }}
                      />
                    )}

                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl leading-none">{a.icon}</span>

                      <span
                        className="text-xs font-black px-2 py-0.5 rounded-full"
                        style={{
                          background: `${a.color}18`,
                          border: `1px solid ${a.color}35`,
                          color: a.color,
                        }}
                      >
                        {a.year}
                      </span>
                    </div>

                    <h4 className="text-white font-bold text-sm leading-snug flex-1">
                      {a.title}
                    </h4>

                    <p className="text-xs font-bold mt-1" style={{ color: a.color }}>
                      {a.desc}
                    </p>
                  </div>

                  {/* Connector */}
                  <div
                    className="absolute rounded-full"
                    style={{
                      left: connLeft,
                      top: connTop,
                      width: 2,
                      height: connHeight,
                      background: `linear-gradient(180deg, ${a.color}, ${a.color}88)`,
                      opacity: 0.9,
                      zIndex: 12,
                      boxShadow: `0 0 8px ${a.color}66`,
                    }}
                  />

                  {/* Dot */}
                  <div
                    className="absolute"
                    style={{
                      left: dotAbsX - DOT_R,
                      top: dotAbsY - DOT_R,
                      width: DOT_R * 2,
                      height: DOT_R * 2,
                      zIndex: 20,
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded-full animate-ping"
                      style={{
                        background: `${a.color}22`,
                        animationDuration: `${2 + i * 0.18}s`,
                      }}
                    />

                    <div
                      className="relative w-full h-full rounded-full border-2 flex items-center justify-center text-sm"
                      style={{
                        borderColor: a.color,
                        background: '#070d2a',
                        boxShadow: `0 0 12px ${a.color}55`,
                      }}
                    >
                      {a.icon}
                    </div>
                  </div>

                  {/* Year label */}
                  <div
                    className="absolute text-center pointer-events-none"
                    style={{
                      left: dotAbsX - 38,
                      top: yearTop,
                      width: 76,
                      zIndex: 8,
                    }}
                  >
                    <span className="text-xs font-black" style={{ color: a.color }}>
                      {a.year.slice(0, 4)}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* fade edges */}
        <div
          className="absolute inset-y-0 left-0 w-10 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, rgba(8,18,50,0.88), transparent)',
          }}
        />

        <div
          className="absolute inset-y-0 right-0 w-10 pointer-events-none"
          style={{
            background: 'linear-gradient(-90deg, rgba(8,18,50,0.88), transparent)',
          }}
        />
      </div>
    </section>
  )
}