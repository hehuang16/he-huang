'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

export default function Mission() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="mission" ref={ref} className="relative py-32 overflow-hidden">
      {/* Subtle bg radial */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-crimson/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Left: Quote Block */}
          <motion.div variants={fadeUp}>
            <span className="section-label mb-4 block">The Mission</span>
            <span className="red-line w-12" />

            <blockquote className="relative">
              <span className="absolute -top-8 -left-4 text-[8rem] font-display font-900 text-crimson/10 leading-none select-none">
                &ldquo;
              </span>
              <p className="relative font-display font-800 text-[clamp(1.5rem,3.5vw,2.4rem)] leading-[1.2] tracking-tight text-titanium">
                Bridging Cultures Through Discipline and Harmony.
              </p>
              <footer className="mt-6 text-silver/40 text-sm font-sans">
                — He Huang, LHS 2028
              </footer>
            </blockquote>

            <div className="mt-10 flex flex-wrap gap-3">
              {['Iowa Born', 'Beijing Raised', 'Lexington Thriving'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 text-[0.65rem] font-display font-700 uppercase tracking-[0.2em] border border-obsidian-border text-silver/50 rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Body Text + Highlights */}
          <motion.div variants={fadeUp} className="space-y-6">
            <p className="text-silver/70 text-base leading-relaxed">
              Born in the heart of Iowa, raised in the vibrant streets of Beijing, and now
              thriving in Lexington, MA — I am a 10th-grade student at Lexington High School
              dedicated to mastering the art of the violin and the science of physical strength.
            </p>
            <p className="text-silver/70 text-base leading-relaxed">
              I believe that <span className="text-silver font-600">true excellence</span> is
              found where{' '}
              <span className="text-crimson font-600">artistic precision</span> meets{' '}
              <span className="text-silver font-600">athletic grit</span>. Every practice
              session is treated like a training block. Every performance is a competition.
            </p>

            {/* Highlight pills */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: '🎻', text: 'LHS Chamber Orchestra' },
                { icon: '🎵', text: 'BYSO Member' },
                { icon: '🏆', text: 'CCTV Beijing Performer' },
                { icon: '🌏', text: 'Sino-US Pen Pal Founder' },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 px-4 py-3 bg-obsidian-card border border-obsidian-border rounded-sm hover:border-crimson/30 transition-colors duration-300"
                >
                  <span className="text-base">{item.icon}</span>
                  <span className="text-xs font-display font-600 uppercase tracking-[0.12em] text-silver/60">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
