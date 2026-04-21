'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const reasons = [
  {
    id: 'track-record',
    title: 'Proven Track Record',
    description:
      'Successfully guided 4th graders from absolute basics to confident public performances. Real results, not promises.',
    icon: '🏆',
  },
  {
    id: 'insider-knowledge',
    title: 'Insider Knowledge',
    description:
      'I navigate the exact path your child is on — from BYSO, NEC, and Rivers School auditions to the high-stakes LHS music curriculum. I\'ve been there. I know the map.',
    icon: '🗺️',
  },
  {
    id: 'relatable',
    title: 'Relatable Leadership',
    description:
      'I don\'t just teach. I inspire as a "big brother" figure who walks the talk. Students see themselves in me — not a distant adult, but someone who\'s doing it right now.',
    icon: '🤝',
  },
  {
    id: 'athletic-mindset',
    title: 'The Athletic Mindset',
    description:
      'Practice isn\'t passive. I bring the intensity of wrestling training to every session — drills, reps, targets, and measurable progress.',
    icon: '⚡',
  },
]

export default function WhyMe() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="why-me" ref={ref} className="relative py-32 bg-obsidian-light overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/30 to-transparent" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-crimson/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label mb-4 block">Why Mentorship With Me?</span>
            <span className="block w-12 h-0.5 bg-gradient-to-r from-crimson to-transparent mb-8" />

            <h2 className="font-display font-900 text-[clamp(2rem,5vw,3.5rem)] tracking-tight text-titanium uppercase mb-8">
              Not Just a Tutor.
              <br />
              <span className="text-crimson">A System.</span>
            </h2>

            <p className="text-silver/60 text-base leading-relaxed mb-8">
              Any teacher can show you the notes. Very few can show you{' '}
              <span className="text-silver font-600">how to own them</span> — technically,
              mentally, and physically. That&apos;s the difference I bring.
            </p>

            {/* Key differentiators */}
            <div className="space-y-3">
              {[
                'Active LHS student who knows the curriculum',
                'BYSO insider who knows the audition format',
                'Street performer who knows how to perform under pressure',
                'Athlete who knows how to build discipline',
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-crimson flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-silver/70 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Reason cards */}
          <div className="space-y-4">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.id}
                id={`reason-${reason.id}`}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-5 p-5 bg-obsidian-card border border-obsidian-border rounded-sm hover:border-crimson/30 transition-colors group"
              >
                <div className="flex-shrink-0 text-2xl">{reason.icon}</div>
                <div>
                  <h3 className="font-display font-700 text-sm uppercase tracking-[0.1em] text-titanium mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-silver/50 text-xs leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/30 to-transparent" />
    </section>
  )
}
