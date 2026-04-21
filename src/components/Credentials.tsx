'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, DollarSign, Users, Zap, Globe, Star } from 'lucide-react'

const credentials = [
  {
    id: 'busking',
    icon: DollarSign,
    stat: '$3,300+',
    label: 'Single Summer Busking',
    description:
      'Turned a violin and a sidewalk into a thriving micro-business. Raw hustle, raw talent — proof that music pays.',
    tag: 'Entrepreneurship',
  },
  {
    id: 'award',
    icon: Award,
    stat: 'Silver',
    label: "President's Volunteer Service Award",
    description:
      'Recognized at the highest level for community leadership. Not just notes on a page — impact in the real world.',
    tag: 'Leadership',
  },
  {
    id: 'relief',
    icon: Globe,
    stat: '$8,000+',
    label: 'COVID-19 Relief Funds Raised',
    description:
      'Founded the Sino-US Pen Pal Club and coordinated cross-cultural relief efforts during global crisis.',
    tag: 'Community Impact',
  },
  {
    id: 'students',
    icon: Users,
    stat: '2+',
    label: 'Students Successfully Mentored',
    description:
      'Guided elementary students from zero basics to confident performances. Results speak louder than credentials.',
    tag: 'Mentorship',
  },
  {
    id: 'mile',
    icon: Zap,
    stat: '6:02',
    label: 'Mile PR',
    description:
      'An athlete\'s mindset applied to every bow stroke. Speed, endurance, and discipline — on track and on stage.',
    tag: 'Athletics',
  },
  {
    id: 'years',
    icon: Star,
    stat: '11',
    label: 'Years of Violin Mastery',
    description:
      'From first notes to CCTV Beijing stages. Eleven years of deliberate practice, world-class training, elite results.',
    tag: 'Mastery',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Credentials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="credentials" ref={ref} className="relative py-32 overflow-hidden">
      {/* BG glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-crimson/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="section-label mb-4 block">Social Proof</span>
          <span className="block w-12 h-0.5 bg-gradient-to-r from-crimson to-transparent mb-6" />
          <h2 className="font-display font-900 text-[clamp(2rem,5vw,3.5rem)] tracking-tight text-titanium uppercase max-w-2xl">
            The Receipts.
            <br />
            <span className="text-silver/40 text-[0.6em]">Numbers don&apos;t lie.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {credentials.map((cred) => {
            const Icon = cred.icon
            return (
              <motion.div
                key={cred.id}
                id={`cred-${cred.id}`}
                variants={itemVariants}
                className="group relative bg-obsidian-card border border-obsidian-border rounded-sm p-6 hover:border-crimson/30 transition-colors duration-300 hover-lift"
              >
                {/* Tag */}
                <span className="absolute top-4 right-4 text-[0.55rem] font-display font-700 uppercase tracking-[0.2em] text-crimson/60 bg-crimson/5 px-2 py-1 rounded-sm">
                  {cred.tag}
                </span>

                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-crimson/20 rounded-sm bg-crimson/5">
                    <Icon className="w-4 h-4 text-crimson" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="stat-number text-[2rem]">{cred.stat}</div>
                    <div className="text-[0.65rem] font-display font-700 uppercase tracking-[0.12em] text-silver/40 mt-0.5">
                      {cred.label}
                    </div>
                  </div>
                </div>

                <p className="text-silver/50 text-xs leading-relaxed">
                  {cred.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
