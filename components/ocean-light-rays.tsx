/* Subtle per-section light rays – supplement the global fixed rays */
export function OceanLightRays({ opacity = 1 }: { opacity?: number }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ opacity, zIndex: 0 }}
    >
      {/* Top-center ambient glow – simulates light column from above */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2"
        style={{
          width: '70%',
          height: '60%',
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(56,189,248,0.12) 0%, rgba(56,189,248,0.04) 50%, transparent 75%)',
          filter: 'blur(6px)',
        }}
      />

      {/* Side ambient – scattering from walls */}
      <div className="absolute top-0 left-0 w-60 h-60"
        style={{ background: 'radial-gradient(circle at 0% 0%, rgba(56,189,248,0.07) 0%, transparent 65%)' }} />
      <div className="absolute top-0 right-0 w-60 h-60"
        style={{ background: 'radial-gradient(circle at 100% 0%, rgba(129,140,248,0.07) 0%, transparent 65%)' }} />

      {/* Individual light beams */}
      {[
        { left: '15%', w: 55,  skew: -20, op: 0.10, d: '0s',   dur: '6s'   },
        { left: '28%', w: 38,  skew: -10, op: 0.07, d: '1.3s', dur: '7.5s' },
        { left: '42%', w: 72,  skew:  -2, op: 0.12, d: '0.6s', dur: '5.5s' },
        { left: '56%', w: 88,  skew:   5, op: 0.13, d: '1.9s', dur: '6.2s' },
        { left: '68%', w: 58,  skew:  14, op: 0.09, d: '0.9s', dur: '5s'   },
        { left: '80%', w: 44,  skew:  22, op: 0.08, d: '2.6s', dur: '7s'   },
      ].map((r, i) => (
        <div
          key={i}
          className="absolute top-0 animate-light-ray"
          style={{
            left: r.left, width: r.w, height: '65%',
            background: `linear-gradient(180deg,
              rgba(160,225,255,${r.op})   0%,
              rgba(56,189,248,${r.op*.6}) 40%,
              transparent                 100%)`,
            transform: `skewX(${r.skew}deg)`,
            borderRadius: '0 0 60% 60%',
            animationDelay: r.d,
            animationDuration: r.dur,
          }}
        />
      ))}

      {/* Caustic patches */}
      {[
        { w: 110, h: 35, t: '7%',  l: '12%', op: 0.055 },
        { w:  75, h: 22, t: '13%', l: '52%', op: 0.042 },
        { w: 140, h: 44, t: '5%',  l: '68%', op: 0.060 },
        { w:  55, h: 18, t: '17%', l: '32%', op: 0.038 },
      ].map((c, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-light-ray"
          style={{
            width: c.w, height: c.h, top: c.t, left: c.l,
            background: `radial-gradient(ellipse, rgba(190,240,255,${c.op}) 0%, transparent 70%)`,
            filter: 'blur(5px)',
            animationDelay: `${i * 0.75}s`,
            animationDuration: `${4 + i * 0.6}s`,
          }}
        />
      ))}
    </div>
  )
}
