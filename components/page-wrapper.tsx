'use client'

import { useState, useEffect } from 'react'
import { IntroScreen } from '@/components/intro-screen'
import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { SkillsSection } from '@/components/skills-section'
import { ExperienceSection } from '@/components/experience-section'
import { ProjectsSection } from '@/components/projects-section'
import { AwardsSection } from '@/components/awards-section'
import { CareerVisionSection } from '@/components/career-vision-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export function PageWrapper() {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const hasSeenIntro = typeof window !== 'undefined' && sessionStorage.getItem('hasSeenIntro')
    if (hasSeenIntro) setShowIntro(false)
  }, [])

  const handleIntroComplete = () => {
    sessionStorage.setItem('hasSeenIntro', 'true')
    setShowIntro(false)
  }

  return (
    <div style={{ background: '#06163c', minHeight: '100vh' }}>
      {showIntro && <IntroScreen onComplete={handleIntroComplete} />}

      <main
        className={`w-full transition-opacity duration-1000 ${showIntro ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        style={{
          background: `linear-gradient(
            180deg,
            #2e1f80   0%,   /* Hero: purple violet sky         */
            #4a38c0   3%,   /* Hero: deep violet               */
            #5b8ed4   8%,   /* Hero: sky meets water           */
            #1595c8  14%,   /* Water surface – bright cyan     */
            #0d4e96  18%,   /* Shallow – About (light abundant)*/
            #0b3e82  25%,   /* Shallow – Skills                */
            #093470  32%,   /* Mid shallow – Experience        */
            #072b62  38%,   /* Mid ocean – Projects            */
            #062354  45%,   /* Mid deep                        */
            #051c48  52%,   /* Deep – Awards                   */
            #04163c  58%,   /* Deep navy                       */
            #071b50  68%,   /* Vision – slight purple warmth   */
            #091e58  76%,   /* Contact                         */
            #06143a  88%,   /* Pre-footer                      */
            #030a1e 100%    /* Footer – near-black ocean floor */
          )`,
        }}
      >
        {/* ── GLOBAL LIGHT RAYS ── rays taper off with depth */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
          {[
            { left:'6%',  w:55,  skew:-26, op:0.11, d:'0s',   dur:'6s'  },
            { left:'18%', w:42,  skew:-15, op:0.07, d:'1.2s', dur:'7.5s'},
            { left:'30%', w:75,  skew:-5,  op:0.13, d:'0.4s', dur:'5.5s'},
            { left:'44%', w:95,  skew: 2,  op:0.14, d:'1.8s', dur:'6s'  },
            { left:'57%', w:68,  skew: 11, op:0.09, d:'0.9s', dur:'5.2s'},
            { left:'70%', w:52,  skew: 20, op:0.08, d:'2.5s', dur:'7s'  },
            { left:'83%', w:70,  skew: 28, op:0.10, d:'0.3s', dur:'6.5s'},
          ].map((r, i) => (
            <div key={i} className="absolute top-0 animate-light-ray" style={{
              left: r.left, width: r.w,
              /* rays reach ~85% of viewport then dissolve – simulates light absorbed by depth */
              height: '85vh',
              background: `linear-gradient(180deg,
                rgba(140,220,255,${r.op})   0%,
                rgba(56,189,248,${r.op*.65}) 28%,
                rgba(20,120,210,${r.op*.3})  58%,
                transparent 100%
              )`,
              transform: `skewX(${r.skew}deg)`,
              borderRadius: '0 0 55% 55%',
              animationDelay: r.d,
              animationDuration: r.dur,
            }}/>
          ))}

          {/* Caustic shimmer bands (light bending through water surface) */}
          {[
            { top:'20%', op:0.042, d:'0s',  dur:'8s'  },
            { top:'35%', op:0.030, d:'2s',  dur:'10s' },
            { top:'52%', op:0.022, d:'1s',  dur:'9.5s'},
            { top:'68%', op:0.015, d:'3s',  dur:'11s' },
            { top:'82%', op:0.010, d:'1.5s',dur:'12s' },
          ].map((b, i) => (
            <div key={i} className="absolute left-0 right-0 animate-light-ray"
              style={{
                top: b.top, height: '70px',
                background: `linear-gradient(180deg, transparent, rgba(56,189,248,${b.op}), transparent)`,
                animationDelay: b.d, animationDuration: b.dur,
              }}/>
          ))}
        </div>

        {/* ── GLOBAL FLOATING PARTICLES ── */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
          {[
            {s:6, l:'3%',  top:'20%', d:'0s',   dur:'7s' },
            {s:10,l:'10%', top:'45%', d:'1s',   dur:'9s' },
            {s:7, l:'18%', top:'70%', d:'2s',   dur:'8s' },
            {s:12,l:'28%', top:'30%', d:'0.5s', dur:'11s'},
            {s:5, l:'38%', top:'60%', d:'3s',   dur:'7s' },
            {s:9, l:'50%', top:'80%', d:'1.5s', dur:'10s'},
            {s:6, l:'62%', top:'25%', d:'2.5s', dur:'8s' },
            {s:11,l:'72%', top:'55%', d:'0.8s', dur:'9s' },
            {s:7, l:'82%', top:'40%', d:'3.5s', dur:'7.5s'},
            {s:8, l:'92%', top:'65%', d:'1.2s', dur:'10s'},
          ].map((b, i) => (
            <div key={i} className="absolute rounded-full"
              style={{
                width: b.s, height: b.s, left: b.l, top: b.top,
                background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.5), rgba(56,189,248,0.1))',
                border: '1px solid rgba(255,255,255,0.2)',
                animation: `floatY ${b.dur} ease-in-out ${b.d} infinite`,
              }}/>
          ))}
        </div>

        <div className="relative" style={{ zIndex: 1 }}>
          <Navigation />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <AwardsSection />
          <CareerVisionSection />
          <ContactSection />
          <Footer />
        </div>
      </main>
    </div>
  )
}
