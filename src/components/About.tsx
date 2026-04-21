'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Music2, Dumbbell, Heart } from 'lucide-react'

const cards = [
  {
    id: 'violinist',
    icon: Music2,
    label: 'The Violinist',
    title: '11 Years of Strings',
    description:
      'From the elite stages of CCTV Beijing to the prestigious BYSO and the top-tier LHS Chamber Orchestra. Trained by masters Piotr Buczek and Kelly Barr.',
    highlights: [
      'CCTV Beijing Stage Performer',
      'BYSO Member',
      'LHS Chamber Orchestra',
      '$3,300+ Busking Revenue',
    ],
    accent: 'From masters to the street corner — every stage is a classroom.',
  },
  {
    id: 'athlete',
    icon: Dumbbell,
    label: 'The Athlete',
    title: '2 Years of Iron Discipline',
    description:
      '2 years of dedicated strength training in LHS Wrestling Club and a lifelong passion for sports. Pushing limits every single day.',
    highlights: [
      'LHS Wrestling Club',
      '6:02 Mile PR',
      'Diamond MS Top Scorer',
      'Athletic Strength Training',
    ],
    accent: 'A 6:02 mile and a bow stroke trained the same way — with precision.',
  },
  {
    id: 'leader',
    icon: Heart,
    label: 'The Leader',
    title: 'Servant Leadership',
    description:
      'Recipient of the President\'s Volunteer Service Award (Silver). Founder of the Sino-US Pen Pal Club. COVID-19 relief fund coordinator raising $8,000+.',
    highlights: [
      "President's Service Award (Silver)",
      'Sino-US Pen Pal Founder',
      '$8,000+ Relief Funds',
      'Community Mentor',
    ],
    accent: 'Leadership is not a title. It\'s a commitment to those around you.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.15,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="relative py-32 bg-obsidian-light">
      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block">About Me</span>
          <span className="block w-12 h-0.5 bg-gradient-to-r from-crimson to-transparent mx-auto mb-6" />
          <h2 className="font-display font-900 text-[clamp(2rem,5vw,3.5rem)] tracking-tight text-titanium uppercase">
            Three Dimensions
            <br />
            <span className="text-crimson">One Identity</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.id}
                id={`about-card-${card.id}`}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="group relative bg-obsidian-card border border-obsidian-border rounded-sm p-8 hover-lift cursor-default"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-crimson/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-crimson/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  {/* Icon */}
                  <div className="mb-6 w-12 h-12 flex items-center justify-center border border-crimson/30 rounded-sm bg-crimson/5 group-hover:bg-crimson/15 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-crimson" strokeWidth={1.5} />
                  </div>

                  {/* Label */}
                  <span className="section-label mb-3 block">{card.label}</span>

                  {/* Title */}
                  <h3 className="font-display font-800 text-xl tracking-tight text-titanium mb-4">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-silver/60 text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {card.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-silver/50">
                        <span className="w-1 h-1 bg-crimson rounded-full flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Accent quote */}
                  <p className="text-[0.65rem] font-display font-600 tracking-[0.05em] text-crimson/70 italic border-l-2 border-crimson/30 pl-3">
                    {card.accent}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/30 to-transparent" />
    </section>
  )
}
