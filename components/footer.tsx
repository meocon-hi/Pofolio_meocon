'use client'

export function Footer() {
  return (
    <footer className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, transparent 0%, #030a1e 40%, #020715 100%)' }}>

      {/* ── Ocean floor decorations ── */}
      {/* Corals left */}
      <div className="absolute bottom-0 left-0 pointer-events-none select-none" style={{ width: '260px' }}>
        <svg viewBox="0 0 260 160" fill="none">
          {/* tall pink coral */}
          <rect x="120" y="45" width="12" height="115" rx="6" fill="#f472b6" opacity="0.55"/>
          <ellipse cx="126" cy="43" rx="18" ry="22" fill="#f472b6" opacity="0.72"/>
          <ellipse cx="126" cy="26" rx="12" ry="14" fill="#fb7185" opacity="0.62"/>
          <circle cx="126" cy="15" r="8" fill="#f472b6" opacity="0.55"/>
          <circle cx="120" cy="37" r="2.2" fill="rgba(255,255,255,0.45)"/>
          <circle cx="132" cy="30" r="1.8" fill="rgba(255,255,255,0.4)"/>
          {/* purple branching */}
          <rect x="55" y="70" width="9" height="90" rx="4.5" fill="#818cf8" opacity="0.58"/>
          <rect x="42" y="58" width="7" height="58" rx="3.5" fill="#818cf8" opacity="0.48" transform="rotate(-15 45 87)"/>
          <rect x="68" y="62" width="7" height="52" rx="3.5" fill="#a78bfa" opacity="0.48" transform="rotate(13 71 88)"/>
          <ellipse cx="57" cy="68" rx="11" ry="13" fill="#818cf8" opacity="0.68"/>
          <ellipse cx="43" cy="56" rx="9" ry="11" fill="#a78bfa" opacity="0.58" transform="rotate(-15 43 56)"/>
          <ellipse cx="72" cy="59" rx="9" ry="11" fill="#818cf8" opacity="0.58" transform="rotate(13 72 59)"/>
          {/* cyan fan coral */}
          <rect x="190" y="82" width="10" height="78" rx="5" fill="#22d3ee" opacity="0.5"/>
          <path d="M195 82 Q175 55 162 65 Q168 74 182 75" fill="#22d3ee" opacity="0.45"/>
          <path d="M195 82 Q215 50 230 62 Q223 72 210 73" fill="#0ea5e9" opacity="0.42"/>
          <ellipse cx="195" cy="80" rx="12" ry="8" fill="#22d3ee" opacity="0.32"/>
          {/* small pink anemone */}
          <rect x="22" y="108" width="8" height="52" rx="4" fill="#fb7185" opacity="0.5"/>
          {[0,1,2,3,4].map(j => (
            <ellipse key={j} cx={18 + j * 4} cy={106} rx={4} ry={10}
              fill="#f472b6" opacity="0.52"
              transform={`rotate(${-20 + j * 10} ${18 + j * 4} 128)`}/>
          ))}
          {/* seaweed */}
          <path d="M0 160 Q14 138 10 116 Q6 96 18 82 Q24 96 16 116 Q12 136 28 154"
            stroke="#4ade80" strokeWidth="2.5" fill="none" opacity="0.35" strokeLinecap="round"/>
          <path d="M240 160 Q252 138 248 115 Q244 95 255 82"
            stroke="#34d399" strokeWidth="2" fill="none" opacity="0.32" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Corals right */}
      <div className="absolute bottom-0 right-0 pointer-events-none select-none" style={{ width: '240px' }}>
        <svg viewBox="0 0 240 155" fill="none">
          <rect x="145" y="42" width="13" height="113" rx="6.5" fill="#fb7185" opacity="0.55"/>
          <ellipse cx="151" cy="40" rx="19" ry="23" fill="#f472b6" opacity="0.72"/>
          <ellipse cx="151" cy="22" rx="13" ry="15" fill="#fb7185" opacity="0.62"/>
          <circle cx="151" cy="10" r="9" fill="#f472b6" opacity="0.55"/>
          <rect x="42" y="65" width="10" height="90" rx="5" fill="#a78bfa" opacity="0.58"/>
          <rect x="28" y="54" width="8" height="58" rx="4" fill="#8b5cf6" opacity="0.48" transform="rotate(-14 32 83)"/>
          <rect x="56" y="58" width="8" height="52" rx="4" fill="#c4b5fd" opacity="0.48" transform="rotate(11 60 84)"/>
          <ellipse cx="44" cy="63" rx="12" ry="14" fill="#a78bfa" opacity="0.68"/>
          <ellipse cx="30" cy="52" rx="10" ry="12" fill="#8b5cf6" opacity="0.58" transform="rotate(-14 30 52)"/>
          <ellipse cx="62" cy="56" rx="10" ry="12" fill="#c4b5fd" opacity="0.58" transform="rotate(11 62 56)"/>
          <rect x="14" y="88" width="9" height="67" rx="4.5" fill="#22d3ee" opacity="0.52"/>
          <ellipse cx="18" cy="86" rx="11" ry="9" fill="#22d3ee" opacity="0.42"/>
          <path d="M240 155 Q226 130 230 108 Q234 88 222 74 Q218 90 224 110 Q220 132 208 152"
            stroke="#4ade80" strokeWidth="2.5" fill="none" opacity="0.35" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Starfish */}
      {[
        { color:'#f472b6', size:28, style:{ bottom:'52%', left:'3%', animation:'floatSlow 8s ease-in-out 0s infinite', filter:'drop-shadow(0 0 6px rgba(244,114,182,0.5))', transform:'rotate(20deg)' } },
        { color:'#fbbf24', size:20, style:{ bottom:'42%', left:'8%', animation:'floatSlow 10s ease-in-out 1.5s infinite', filter:'drop-shadow(0 0 5px rgba(251,191,36,0.45))', transform:'rotate(-30deg)' } },
        { color:'#38bdf8', size:16, style:{ bottom:'55%', right:'4%', animation:'floatSlow 7s ease-in-out 2s infinite', filter:'drop-shadow(0 0 5px rgba(56,189,248,0.45))', transform:'rotate(45deg)' } },
        { color:'#a78bfa', size:22, style:{ bottom:'44%', right:'9%', animation:'floatSlow 9s ease-in-out 0.8s infinite', filter:'drop-shadow(0 0 5px rgba(167,139,250,0.45))', transform:'rotate(-15deg)' } },
      ].map((sf, i) => (
        <div key={i} className="absolute pointer-events-none select-none" style={sf.style}>
          <svg width={sf.size} height={sf.size} viewBox="0 0 100 100" fill="none">
            <path d="M50 5 L61 35 L95 35 L67 57 L78 90 L50 68 L22 90 L33 57 L5 35 L39 35 Z"
              fill={sf.color} opacity="0.88"/>
            <circle cx="50" cy="52" r="11" fill={sf.color} opacity="0.55"/>
          </svg>
        </div>
      ))}

      {/* Small fish */}
      <div className="absolute pointer-events-none select-none"
        style={{ bottom:'62%', left:'18%', animation:'floatSlow 12s ease-in-out infinite', filter:'drop-shadow(0 0 4px rgba(34,211,238,0.4))' }}>
        <svg width="24" height="15" viewBox="0 0 80 50" fill="none">
          <ellipse cx="40" cy="25" rx="30" ry="18" fill="#22d3ee" opacity="0.72"/>
          <path d="M10 25 L-6 12 L-6 38 Z" fill="#22d3ee" opacity="0.85"/>
          <circle cx="58" cy="21" r="5" fill="white" opacity="0.85"/>
          <circle cx="59" cy="21" r="2.5" fill="#0a0f2e"/>
        </svg>
      </div>
      <div className="absolute pointer-events-none select-none"
        style={{ bottom:'58%', right:'15%', animation:'floatSlow 10s ease-in-out 3s infinite', filter:'drop-shadow(0 0 4px rgba(244,114,182,0.4))', transform:'scaleX(-1)' }}>
        <svg width="20" height="12" viewBox="0 0 80 50" fill="none">
          <ellipse cx="40" cy="25" rx="30" ry="18" fill="#f472b6" opacity="0.7"/>
          <path d="M10 25 L-6 12 L-6 38 Z" fill="#f472b6" opacity="0.82"/>
          <circle cx="58" cy="21" r="5" fill="white" opacity="0.85"/>
          <circle cx="59" cy="21" r="2.5" fill="#0a0f2e"/>
        </svg>
      </div>

      {/* Bubbles rising from floor */}
      {[6,10,8,14,7,12].map((s, i) => (
        <div key={i} className="absolute rounded-full pointer-events-none"
          style={{
            width: s, height: s,
            left: `${10 + i * 16}%`, bottom: '8%',
            background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.5), rgba(56,189,248,0.1))',
            border: '1px solid rgba(255,255,255,0.25)',
            animation: `bubbleRise ${6 + i * 1.2}s linear ${i * 0.8}s infinite`,
          }} />
      ))}

      {/* Sand / ocean floor texture */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: '60px' }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,30 C120,15 240,45 360,28 C480,12 600,42 720,28 C840,14 960,44 1080,28 C1200,12 1320,40 1440,28 L1440,60 L0,60 Z"
            fill="rgba(4,14,44,0.95)"/>
          <path d="M0,42 C180,28 360,54 540,38 C720,22 900,52 1080,38 C1260,24 1380,48 1440,40 L1440,60 L0,60 Z"
            fill="rgba(3,9,30,0.98)"/>
        </svg>
      </div>

      {/* Glow from above */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(56,189,248,0.07) 0%, transparent 70%)' }} />

      {/* ── Content ── */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-16 pb-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-black text-white"
                style={{ background: 'linear-gradient(135deg,#38bdf8,#818cf8)', boxShadow:'0 0 18px rgba(56,189,248,0.4)' }}>
                TN
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">TRAN THAO NGUYEN</p>
                <p className="text-[#38bdf8] text-xs">チャン・タオ・グエン</p>
              </div>
            </div>
            <p className="text-[#94c8e8]/80 text-sm leading-relaxed">
              Software Engineering Student<br />Web & Mobile Developer
            </p>
            <p className="text-[#94c8e8]/50 text-xs italic leading-relaxed">
              新しい技術に挑戦しながら、<br />人や社会に役立つものを作りたい。
            </p>
            {/* mini decorative line */}
            <div className="h-px w-20"
              style={{ background: 'linear-gradient(90deg,#38bdf8,#f472b6,transparent)' }} />
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: '#38bdf8' }}>Navigation</p>
            <ul className="space-y-2.5">
              {[
                ['About', '#about'], ['Skills', '#skills'], ['Experience', '#experience'],
                ['Projects', '#projects'], ['Awards', '#awards'], ['Vision', '#vision'], ['Contact', '#contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href}
                    className="text-[#94c8e8]/75 text-sm hover:text-white transition-all duration-200 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-3 h-px rounded-full transition-all duration-300 flex-shrink-0"
                      style={{ background: 'linear-gradient(90deg,#38bdf8,#f472b6)' }} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: '#38bdf8' }}>Connect</p>
            <div className="space-y-4">
              {[
                {
                  href: 'mailto:thaonguyentran21062004@gmail.com',
                  label: 'Email',
                  value: 'thaonguyentran21062004\n@gmail.com',
                  color: '#38bdf8',
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  ),
                },
                {
                  href: 'tel:0346935038',
                  label: 'Phone',
                  value: '0346 935 038',
                  color: '#818cf8',
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  ),
                },
                {
                  href: 'https://github.com/meocon-hi',
                  label: 'GitHub',
                  value: 'github.com/meocon-hi',
                  color: '#f472b6',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.202 2.394.1 2.646.64.698 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .269.18.579.688.482C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                  ),
                },
              ].map((c, i) => (
                <a key={i} href={c.href}
                  target={c.label === 'GitHub' ? '_blank' : undefined}
                  rel={c.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 group hover:text-white transition-colors">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: `${c.color}15`, border: `1px solid ${c.color}28`, color: c.color }}>
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-[#94c8e8]/50 text-xs">{c.label}</p>
                    <p className="text-[#94c8e8]/80 text-xs font-medium group-hover:text-white transition-colors whitespace-pre-line">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative pt-8">
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg,transparent,rgba(56,189,248,0.2),rgba(244,114,182,0.15),transparent)' }} />
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-[#94c8e8]/45 text-xs">
              © 2026 Tran Thao Nguyen · All Rights Reserved
            </p>
            <div className="flex items-center gap-2 text-[#94c8e8]/35 text-xs">
              <span>🌊</span>
              <span>Designed for Japanese IT Recruitment</span>
              <span>·</span>
              <span>Built with Next.js</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
