'use client'

import { useEffect, useRef } from 'react'

const infoItems = [
  {
    label: '大学', value: 'VKU大学（越韓情報通信技術大学）',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L3 9l11 6 11-6L14 3Z" fill="#38bdf8" opacity="0.9"/>
        <path d="M3 9v7l11 6 11-6V9" stroke="#38bdf8" strokeWidth="1.5" fill="none" opacity="0.6"/>
        <path d="M8 11.5v6l6 3.5 6-3.5v-6" fill="#38bdf8" opacity="0.25"/>
      </svg>
    ),
  },
  {
    label: '専攻', value: 'ソフトウェアサイエンス学科',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="14" rx="3" stroke="#818cf8" strokeWidth="1.8" fill="none"/>
        <path d="M9 10l3 3-3 3" stroke="#818cf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 16h5" stroke="#818cf8" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M10 22h8" stroke="#818cf8" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: '所在地', value: 'ダナン、ベトナム',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3C10.13 3 7 6.13 7 10c0 5.25 7 15 7 15s7-9.75 7-15c0-3.87-3.13-7-7-7Z" fill="#f472b6" opacity="0.85"/>
        <circle cx="14" cy="10" r="2.5" fill="white" opacity="0.9"/>
      </svg>
    ),
  },
  {
    label: '状態', value: '就職活動中',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#22d3ee" strokeWidth="1.8" fill="none" opacity="0.7"/>
        <path d="M14 8v6l4 2" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="14" cy="14" r="2" fill="#22d3ee" opacity="0.6"/>
      </svg>
    ),
  },
]

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="relative py-28 ocean-section overflow-hidden">

      {/* ── OCEAN LIGHT RAYS ── */}

      {/* ── BACKGROUND ORBS ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)' }} />
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(244,114,182,0.05) 0%, transparent 70%)' }} />
      <div className="absolute bottom-20 left-10 w-56 h-56 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(129,140,248,0.06) 0%, transparent 70%)' }} />

      {/* ── FLOATING BUBBLES (many, various sizes) ── */}
      {[
        { s:8,  l:'5%',  t:'15%', d:'0s',   dur:'5s'  },
        { s:14, l:'12%', t:'55%', d:'1s',   dur:'7s'  },
        { s:6,  l:'20%', t:'30%', d:'2s',   dur:'4.5s'},
        { s:18, l:'28%', t:'70%', d:'0.5s', dur:'8s'  },
        { s:10, l:'38%', t:'20%', d:'3s',   dur:'6s'  },
        { s:22, l:'48%', t:'80%', d:'1.5s', dur:'9s'  },
        { s:8,  l:'58%', t:'40%', d:'2.5s', dur:'5.5s'},
        { s:16, l:'68%', t:'65%', d:'0.8s', dur:'7.5s'},
        { s:12, l:'78%', t:'25%', d:'3.5s', dur:'6.5s'},
        { s:20, l:'88%', t:'50%', d:'1.2s', dur:'8.5s'},
        { s:7,  l:'94%', t:'35%', d:'4s',   dur:'5s'  },
        { s:15, l:'33%', t:'45%', d:'2.8s', dur:'7s'  },
      ].map((b, i) => (
        <div key={i} className="absolute rounded-full pointer-events-none"
          style={{
            width: b.s, height: b.s, left: b.l, top: b.t,
            background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.55), rgba(56,189,248,0.12))',
            border: '1px solid rgba(255,255,255,0.25)',
            animation: `floatY ${b.dur} ease-in-out ${b.d} infinite`,
          }} />
      ))}

      {/* ── CORALS bottom-left ── */}
      <div className="absolute bottom-0 left-0 pointer-events-none select-none" style={{ width: '280px' }}>
        <svg viewBox="0 0 280 160" fill="none">
          {/* Tall coral center */}
          <rect x="130" y="60" width="12" height="100" rx="6" fill="#f472b6" opacity="0.7"/>
          <ellipse cx="136" cy="58" rx="18" ry="22" fill="#f472b6" opacity="0.85"/>
          <ellipse cx="136" cy="42" rx="12" ry="14" fill="#fb7185" opacity="0.7"/>
          <circle cx="136" cy="30" r="8" fill="#f472b6" opacity="0.6"/>
          {/* Dots */}
          <circle cx="130" cy="52" r="2.5" fill="rgba(255,255,255,0.5)"/>
          <circle cx="142" cy="45" r="2" fill="rgba(255,255,255,0.45)"/>
          <circle cx="136" cy="38" r="2" fill="rgba(255,255,255,0.4)"/>

          {/* Left branching coral */}
          <rect x="68" y="85" width="9" height="75" rx="4.5" fill="#818cf8" opacity="0.65"/>
          <rect x="58" y="70" width="7" height="55" rx="3.5" fill="#818cf8" opacity="0.55" transform="rotate(-18 62 97)"/>
          <rect x="80" y="72" width="7" height="50" rx="3.5" fill="#a78bfa" opacity="0.55" transform="rotate(15 83 97)"/>
          <ellipse cx="72" cy="84" rx="10" ry="13" fill="#818cf8" opacity="0.75"/>
          <ellipse cx="60" cy="68" rx="8" ry="10" fill="#a78bfa" opacity="0.65" transform="rotate(-18 60 68)"/>
          <ellipse cx="86" cy="70" rx="8" ry="10" fill="#818cf8" opacity="0.65" transform="rotate(15 86 70)"/>
          <circle cx="72" cy="74" r="2" fill="rgba(255,255,255,0.45)"/>

          {/* Right fan coral */}
          <rect x="195" y="90" width="10" height="70" rx="5" fill="#22d3ee" opacity="0.6"/>
          <path d="M200 90 Q180 60 165 70 Q170 80 185 82" fill="#22d3ee" opacity="0.55"/>
          <path d="M200 90 Q220 55 235 68 Q228 78 215 80" fill="#0ea5e9" opacity="0.5"/>
          <path d="M200 90 Q198 50 200 35 Q205 50 202 62" fill="#38bdf8" opacity="0.55"/>
          <ellipse cx="200" cy="88" rx="12" ry="8" fill="#22d3ee" opacity="0.4"/>

          {/* Small pink anemone */}
          <rect x="30" y="110" width="8" height="50" rx="4" fill="#fb7185" opacity="0.55"/>
          {[0,1,2,3,4].map(j => (
            <ellipse key={j} cx={26 + j * 4} cy={108} rx={4} ry={10}
              fill="#f472b6" opacity="0.6"
              transform={`rotate(${-20 + j * 10} ${26 + j * 4} 130)`}/>
          ))}

          {/* Ground seaweed */}
          <path d="M0 160 Q20 140 15 120 Q10 100 25 85 Q30 100 22 118 Q18 138 35 155"
            stroke="#4ade80" strokeWidth="3" fill="none" opacity="0.45" strokeLinecap="round"/>
          <path d="M240 160 Q255 138 250 115 Q245 95 258 82 Q262 98 255 116 Q250 138 268 155"
            stroke="#4ade80" strokeWidth="3" fill="none" opacity="0.4" strokeLinecap="round"/>
          <path d="M100 160 Q108 145 104 128 Q100 112 112 100"
            stroke="#34d399" strokeWidth="2.5" fill="none" opacity="0.4" strokeLinecap="round"/>
        </svg>
      </div>

      {/* ── CORALS bottom-right ── */}
      <div className="absolute bottom-0 right-0 pointer-events-none select-none" style={{ width: '260px' }}>
        <svg viewBox="0 0 260 160" fill="none">
          {/* Big pink coral */}
          <rect x="160" y="55" width="13" height="105" rx="6.5" fill="#f472b6" opacity="0.7"/>
          <ellipse cx="166" cy="52" rx="20" ry="24" fill="#fb7185" opacity="0.8"/>
          <ellipse cx="166" cy="35" rx="14" ry="16" fill="#f472b6" opacity="0.7"/>
          <circle cx="166" cy="22" r="9" fill="#fb7185" opacity="0.65"/>
          <circle cx="160" cy="46" r="2.5" fill="rgba(255,255,255,0.5)"/>
          <circle cx="172" cy="38" r="2" fill="rgba(255,255,255,0.45)"/>

          {/* Purple branching */}
          <rect x="65" y="75" width="10" height="85" rx="5" fill="#a78bfa" opacity="0.65"/>
          <rect x="50" y="62" width="8" height="60" rx="4" fill="#8b5cf6" opacity="0.55" transform="rotate(-15 54 92)"/>
          <rect x="80" y="65" width="8" height="55" rx="4" fill="#c4b5fd" opacity="0.55" transform="rotate(12 84 92)"/>
          <ellipse cx="68" cy="73" rx="12" ry="14" fill="#a78bfa" opacity="0.75"/>
          <ellipse cx="52" cy="60" rx="9" ry="11" fill="#8b5cf6" opacity="0.65" transform="rotate(-15 52 60)"/>
          <ellipse cx="86" cy="62" rx="9" ry="11" fill="#c4b5fd" opacity="0.65" transform="rotate(12 86 62)"/>

          {/* Cyan tube coral */}
          <rect x="20" y="90" width="9" height="70" rx="4.5" fill="#22d3ee" opacity="0.6"/>
          <ellipse cx="24" cy="88" rx="11" ry="9" fill="#22d3ee" opacity="0.5"/>
          <circle cx="24" cy="82" r="5" fill="#67e8f9" opacity="0.6"/>

          {/* Seaweed */}
          <path d="M260 160 Q245 135 248 112 Q252 90 240 75 Q236 92 242 112 Q238 138 225 158"
            stroke="#4ade80" strokeWidth="3" fill="none" opacity="0.42" strokeLinecap="round"/>
          <path d="M130 160 Q138 142 133 124 Q128 106 140 92"
            stroke="#34d399" strokeWidth="2.5" fill="none" opacity="0.38" strokeLinecap="round"/>
        </svg>
      </div>

      {/* ── STARFISH floating ── */}
      {[
        { color:'#f472b6', size:34, style:{ bottom:'22%', left:'3%',  animation:'floatSlow 7s ease-in-out 0s infinite',   filter:'drop-shadow(0 0 8px rgba(244,114,182,0.65))', transform:'rotate(15deg)' } },
        { color:'#fbbf24', size:24, style:{ bottom:'32%', left:'7%',  animation:'floatSlow 9s ease-in-out 1.5s infinite', filter:'drop-shadow(0 0 6px rgba(251,191,36,0.55))',  transform:'rotate(-20deg)' } },
        { color:'#22d3ee', size:20, style:{ bottom:'18%', left:'16%', animation:'floatSlow 6s ease-in-out 3s infinite',   filter:'drop-shadow(0 0 5px rgba(34,211,238,0.55))',  transform:'rotate(35deg)' } },
        { color:'#f472b6', size:28, style:{ bottom:'25%', right:'4%', animation:'floatSlow 8s ease-in-out 2s infinite',   filter:'drop-shadow(0 0 7px rgba(244,114,182,0.6))',  transform:'rotate(-30deg)' } },
        { color:'#a78bfa', size:22, style:{ bottom:'35%', right:'9%', animation:'floatSlow 5s ease-in-out 0.8s infinite', filter:'drop-shadow(0 0 6px rgba(167,139,250,0.55))', transform:'rotate(50deg)' } },
      ].map((sf, i) => (
        <div key={i} className="absolute pointer-events-none select-none" style={sf.style}>
          <svg width={sf.size} height={sf.size} viewBox="0 0 100 100" fill="none">
            <path d="M50 5 L61 35 L95 35 L67 57 L78 90 L50 68 L22 90 L33 57 L5 35 L39 35 Z"
              fill={sf.color} opacity="0.9"/>
            <circle cx="50" cy="52" r="12" fill={sf.color} opacity="0.6"/>
            {[0,1,2,3,4].map(j => {
              const angles = [270, 342, 54, 126, 198]
              const r = 32
              const x = 50 + r * Math.cos((angles[j] * Math.PI) / 180)
              const y = 52 + r * Math.sin((angles[j] * Math.PI) / 180)
              return <circle key={j} cx={x} cy={y} r="3" fill="rgba(255,255,255,0.55)"/>
            })}
          </svg>
        </div>
      ))}

      {/* ── SMALL FISH ── */}
      {[
        { color:'#22d3ee', size:30, flip:false, style:{ top:'22%', left:'2%',  animation:'floatSlow 10s ease-in-out infinite',    filter:'drop-shadow(0 0 5px rgba(34,211,238,0.45))' } },
        { color:'#f472b6', size:22, flip:true,  style:{ top:'35%', right:'3%', animation:'floatSlow 12s ease-in-out 2s infinite',  filter:'drop-shadow(0 0 5px rgba(244,114,182,0.45))' } },
        { color:'#fbbf24', size:18, flip:false, style:{ top:'60%', left:'10%', animation:'floatSlow 8s ease-in-out 1s infinite',   filter:'drop-shadow(0 0 4px rgba(251,191,36,0.4))' } },
        { color:'#a78bfa', size:20, flip:true,  style:{ top:'50%', right:'8%', animation:'floatSlow 9s ease-in-out 3s infinite',   filter:'drop-shadow(0 0 4px rgba(167,139,250,0.4))' } },
      ].map((f, i) => (
        <div key={i} className="absolute pointer-events-none select-none" style={{ ...f.style, transform: f.flip ? 'scaleX(-1)' : undefined }}>
          <svg width={f.size} height={f.size * 0.62} viewBox="0 0 80 50" fill="none">
            <ellipse cx="40" cy="25" rx="30" ry="18" fill={f.color} opacity="0.82"/>
            <path d="M10 25 L-6 12 L-6 38 Z" fill={f.color} opacity="0.88"/>
            <path d="M32 8 Q40 2 48 8 Q40 12 32 8Z" fill={f.color} opacity="0.7"/>
            <circle cx="58" cy="21" r="5" fill="white" opacity="0.9"/>
            <circle cx="59" cy="21" r="2.5" fill="#0a0f2e"/>
            <circle cx="58" cy="20" r="1.2" fill="white"/>
            <path d="M40 9 Q42 25 40 41" stroke="rgba(255,255,255,0.28)" strokeWidth="1.8" fill="none"/>
          </svg>
        </div>
      ))}

      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10">

        {/* ── SECTION HEADING ── */}
        <div className="reveal mb-12 text-center">
          <div className="section-heading-line mx-auto" />
          <h2 className="text-4xl md:text-5xl font-black text-white mb-2">私について</h2>
          <p className="text-[#38bdf8] text-sm font-semibold tracking-widest uppercase">About Me</p>
        </div>

        {/* ── AVATAR CENTER ── */}
        <div className="reveal flex flex-col items-center mb-14">
          {/* Glow ring + avatar */}
          <div className="relative mb-5">
            {/* Animated gradient glow ring */}
            <div className="absolute -inset-1.5 rounded-full animate-glow-pulse"
              style={{ background: 'linear-gradient(135deg, #0ea5e9, #818cf8, #f472b6)', borderRadius: '9999px', filter: 'blur(6px)', opacity: 0.75 }} />
            {/* Avatar circle */}
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden"
              style={{ border: '3px solid rgba(56,189,248,0.5)' }}>
              <img
                src="/avatar.jpg"
                alt="Tran Thao Nguyen"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <h3 className="text-white font-black text-2xl md:text-3xl mb-1 tracking-wide">
            TRAN THAO NGUYEN
          </h3>
          <p className="text-[#38bdf8] text-sm font-semibold tracking-widest mb-1">チャン・タオ・グエン</p>
          <p className="text-[#94c8e8] text-sm mb-5">Software Engineering Student</p>

          <a href="https://github.com/meocon-hi" target="_blank" rel="noopener noreferrer"
            className="btn-ocean-outline inline-flex items-center gap-2 text-sm px-6 py-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.202 2.394.1 2.646.64.698 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .269.18.579.688.482C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            GitHub
          </a>
        </div>

        {/* ── INFO GRID ── */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {infoItems.map((item) => (
            <div key={item.label}
              className="glass-card rounded-2xl p-5 text-center hover:-translate-y-1 hover:border-[rgba(56,189,248,0.45)] transition-all duration-300">
              <div className="flex justify-center mb-3">{item.icon}</div>
              <p className="text-[#94c8e8] text-xs font-bold uppercase tracking-widest mb-1">{item.label}</p>
              <p className="text-white text-sm font-semibold leading-snug">{item.value}</p>
            </div>
          ))}
        </div>

        {/* ── BIO TEXT ── */}
        <div className="space-y-5 reveal">
          {[
            '私は、越韓情報通信技術大学のソフトウェアサイエンス学科で学んでいる大学4年生です。これまで主にWeb開発やモバイルアプリ開発について学び、React Native、Laravel、NextJS、Firebaseなどを使った開発に取り組んできました。',
            '大学での学習やプロジェクトを通して、ソフトウェア開発だけでなく、ロボット制御、シミュレーション、AIなどの分野にも興味を持つようになりました。特に、VKU ROBOCARコンテストや日本企業でのリモートインターンを通して、ロボットやシミュレーション分野に触れる機会があり、より深く学びたいと感じました。',
            '将来は、Webアプリやモバイルアプリの開発だけでなく、ロボット、シミュレーション、AI、船舶を支えるシステムなど、さまざまな技術を組み合わせた開発にも挑戦したいです。',
            '私の目標は、学んだ技術を実際の開発に活かし、人や社会に役立つものを作れるエンジニアになることです。まだ経験は多くありませんが、新しい分野にも積極的に挑戦し、チームワークを大切にしながら成長していきたいです。',
          ].map((text, i) => (
            <div key={i} className="glass-card rounded-2xl p-6 hover:border-[rgba(56,189,248,0.4)] transition-all duration-300">
              <p className="text-[#e8f4ff]/90 leading-relaxed text-base">{text}</p>
            </div>
          ))}
        </div>

        {/* ── TAGS ── */}
        <div className="reveal flex flex-wrap justify-center gap-2 mt-8">
          {['Web Development', 'Mobile App', 'Robot Simulation', 'AI', 'Ship Systems', 'Team Player', 'Fast Learner'].map((tag) => (
            <span key={tag} className="skill-badge text-xs px-4 py-2 rounded-full font-semibold">{tag}</span>
          ))}
        </div>

      </div>
    </section>
  )
}
