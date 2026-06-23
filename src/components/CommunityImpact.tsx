'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Music,
  HeartPulse,
  Globe,
  Briefcase,
  Award,
  ChevronDown,
  Users,
  Wrench,
  BookOpen,
} from 'lucide-react'

/* ───────── data ───────── */

interface ImpactCard {
  id: string
  icon: typeof Music
  number: string
  label: string
  title: string
  description: string
  highlights: string[]
  focusAreas: string[]
  accent?: string
  badge?: string
  /** Extra sub-blocks for the Panama section */
  subBlocks?: { year: string; title: string; icon: typeof Globe; bullets: string[] }[]
}

const impactCards: ImpactCard[] = [
  {
    id: 'music-outreach',
    icon: Music,
    number: '01',
    label: 'Community Music Outreach',
    title: 'Music Beyond the Stage',
    description:
      'Throughout 2025, I performed for senior residents in local communities and participated in regional cultural festivals, using music to connect with audiences beyond the concert stage.',
    highlights: [
      'Senior community performances',
      'Regional cultural festival appearances',
      'Audience engagement through live music',
    ],
    focusAreas: ['Community Engagement', 'Cultural Outreach', 'Service Through Music'],
    accent: 'Music is not just performed — it is given.',
  },
  {
    id: 'healthcare-volunteer',
    icon: HeartPulse,
    number: '02',
    label: 'Healthcare Volunteer Service',
    title: '50+ Hours of Impact',
    description:
      'Contributed more than 50 volunteer hours in a hospital setting, supporting patients, staff, and daily operations while gaining firsthand exposure to healthcare environments.',
    highlights: [
      '50+ hours of direct hospital service',
      'Patient and staff support',
      'Firsthand clinical environment exposure',
    ],
    focusAreas: ['Compassion', 'Responsibility', 'Service'],
    badge: "President's Volunteer Service Award — Silver",
    accent: 'Service is not a line on a résumé. It is a practice.',
  },
  {
    id: 'international-service',
    icon: Globe,
    number: '03',
    label: 'International Service & STEM Leadership',
    title: 'Panama Service Missions',
    description:
      'Participated in two service-learning missions to Panama (2025, 2026), progressing from healthcare volunteer to student STEM leader.',
    highlights: [],
    focusAreas: ['Leadership', 'Global Service', 'STEM Education'],
    subBlocks: [
      {
        year: '2025',
        title: 'Healthcare Outreach',
        icon: HeartPulse,
        bullets: [
          'Assisted local families with basic health screenings — height, weight, and blood pressure',
          'Worked alongside volunteers to support community wellness initiatives',
        ],
      },
      {
        year: '2026',
        title: 'STEM Education Leadership',
        icon: BookOpen,
        bullets: [
          'Served as a student leader for STEM activities with local youth',
          'Led hands-on engineering workshops — model bridge design & construction',
          'Focused on teamwork, creativity, and problem-solving through experiential learning',
        ],
      },
    ],
    accent: 'Leadership is forged in unfamiliar environments.',
  },
  {
    id: 'entrepreneurship',
    icon: Briefcase,
    number: '04',
    label: 'Entrepreneurship & Professional Experience',
    title: 'Building Real Businesses',
    description:
      'From co-founding a community snow removal service to working 20 hours per week at a local restaurant, I apply the same discipline from music and athletics to the world of work.',
    highlights: [
      'Co-founded student snow removal service (2026)',
      'Launched community car wash service (Summer 2026)',
      'Cashier & Food Prep — Neillio\'s Gourmet Kitchen (2026–Present)',
      'Balancing ~20 hrs/wk with academics, athletics & music',
    ],
    focusAreas: ['Initiative', 'Professionalism', 'Time Management'],
    accent: 'Hustle is not taught in a classroom.',
  },
]

/* ───────── animation variants ───────── */

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
}

const cardAnim = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

/* ───────── sub-components ───────── */

function TimelineBlock({
  block,
}: {
  block: { year: string; title: string; icon: typeof Globe; bullets: string[] }
}) {
  const Icon = block.icon
  return (
    <div className="relative pl-7 pb-6 last:pb-0">
      {/* Vertical timeline line */}
      <div className="absolute left-[11px] top-0 bottom-0 w-px bg-gradient-to-b from-crimson/40 to-transparent" />

      {/* Dot */}
      <div className="absolute left-0 top-0.5 w-[23px] h-[23px] flex items-center justify-center rounded-full bg-crimson/10 border border-crimson/40">
        <Icon className="w-3 h-3 text-crimson" strokeWidth={2} />
      </div>

      <span className="text-[0.6rem] font-display font-700 uppercase tracking-[0.25em] text-crimson mb-1 block">
        {block.year}
      </span>
      <h5 className="font-display font-700 text-sm tracking-[0.05em] text-titanium mb-2">
        {block.title}
      </h5>
      <ul className="space-y-1.5">
        {block.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-xs text-silver/50 leading-relaxed">
            <span className="w-1 h-1 bg-crimson rounded-full mt-1.5 flex-shrink-0" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  )
}

function FocusPills({ areas }: { areas: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mt-5">
      {areas.map((area) => (
        <span
          key={area}
          className="px-3 py-1 text-[0.55rem] font-display font-700 uppercase tracking-[0.2em] border border-crimson/20 text-crimson/70 rounded-sm bg-crimson/5 hover:bg-crimson/10 hover:border-crimson/40 transition-colors duration-300"
        >
          {area}
        </span>
      ))}
    </div>
  )
}

/* ───────── main component ───────── */

export default function CommunityImpact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [expanded, setExpanded] = useState<string | null>(null)

  const toggle = (id: string) => setExpanded((prev) => (prev === id ? null : id))

  return (
    <section id="community" ref={ref} className="relative py-32 bg-obsidian-light overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/30 to-transparent" />

      {/* BG glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-crimson/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-crimson/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <span className="section-label mb-4 block">Community Impact & Leadership</span>
          <span className="block w-12 h-0.5 bg-gradient-to-r from-crimson to-transparent mb-6" />
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-display font-900 text-[clamp(2rem,5vw,3.5rem)] tracking-tight text-titanium uppercase">
              Serving
              <br />
              <span className="text-crimson">Communities</span>
            </h2>
            <p className="max-w-md text-silver/50 text-sm leading-relaxed lg:text-right">
              Through music, healthcare outreach, education, and entrepreneurship — making impact
              beyond the classroom.
            </p>
          </div>
        </motion.div>

        {/* ─── Stats Row ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16"
        >
          {[
            { icon: HeartPulse, stat: '50+', label: 'Volunteer Hours' },
            { icon: Globe, stat: '2', label: 'Panama Missions' },
            { icon: Award, stat: 'Silver', label: "President's Award" },
            { icon: Briefcase, stat: '20', label: 'Hrs/Wk Working' },
          ].map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.label}
                className="flex items-center gap-3 px-4 py-3 bg-obsidian-card border border-obsidian-border rounded-sm hover:border-crimson/30 transition-colors duration-300"
              >
                <div className="w-9 h-9 flex items-center justify-center border border-crimson/20 rounded-sm bg-crimson/5 flex-shrink-0">
                  <Icon className="w-4 h-4 text-crimson" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="stat-number text-[1.3rem] leading-none">{s.stat}</div>
                  <span className="text-[0.55rem] font-display font-700 uppercase tracking-[0.12em] text-silver/40 mt-0.5 block">
                    {s.label}
                  </span>
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* ─── Cards Grid ─── */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {impactCards.map((card) => {
            const Icon = card.icon
            const isOpen = expanded === card.id
            const hasExpandable = !!card.subBlocks?.length

            return (
              <motion.div
                key={card.id}
                id={`impact-${card.id}`}
                variants={cardAnim}
                className="group relative bg-obsidian-card border border-obsidian-border rounded-sm overflow-hidden hover-lift"
              >
                {/* Hover glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-crimson/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-crimson/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative p-8">
                  {/* Number + Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <span className="font-display font-900 text-4xl text-crimson/15 leading-none select-none">
                        {card.number}
                      </span>
                      <div className="w-11 h-11 flex items-center justify-center border border-crimson/30 rounded-sm bg-crimson/5 group-hover:bg-crimson/15 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-crimson" strokeWidth={1.5} />
                      </div>
                    </div>
                    {card.badge && (
                      <span className="hidden sm:flex items-center gap-1.5 text-[0.55rem] font-display font-700 uppercase tracking-[0.15em] text-crimson bg-crimson/10 px-2.5 py-1 rounded-sm border border-crimson/20">
                        <Award className="w-3 h-3" strokeWidth={2} />
                        {card.badge}
                      </span>
                    )}
                  </div>

                  {/* Mobile badge fallback */}
                  {card.badge && (
                    <div className="sm:hidden flex items-center gap-1.5 text-[0.55rem] font-display font-700 uppercase tracking-[0.15em] text-crimson bg-crimson/10 px-2.5 py-1 rounded-sm border border-crimson/20 mb-4 w-fit">
                      <Award className="w-3 h-3" strokeWidth={2} />
                      {card.badge}
                    </div>
                  )}

                  {/* Label & Title */}
                  <span className="section-label mb-2 block">{card.label}</span>
                  <h3 className="font-display font-800 text-xl tracking-tight text-titanium mb-4">
                    {card.title}
                  </h3>

                  {/* Divider */}
                  <div className="w-8 h-px bg-crimson/40 mb-4" />

                  {/* Description */}
                  <p className="text-silver/60 text-sm leading-relaxed mb-5">
                    {card.description}
                  </p>

                  {/* Highlights (for non-sub-block cards) */}
                  {card.highlights.length > 0 && (
                    <ul className="space-y-2 mb-4">
                      {card.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-xs text-silver/50">
                          <span className="w-1 h-1 bg-crimson rounded-full mt-1.5 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Sub-blocks (Panama timeline) — expandable */}
                  {hasExpandable && (
                    <>
                      <button
                        onClick={() => toggle(card.id)}
                        className="flex items-center gap-2 text-[0.65rem] font-display font-700 uppercase tracking-[0.15em] text-crimson/80 hover:text-crimson transition-colors duration-200 mb-4 group/btn"
                      >
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          strokeWidth={2}
                        />
                        {isOpen ? 'Collapse Details' : 'View Mission Details'}
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pt-2 pb-4 pl-2">
                              {card.subBlocks!.map((block) => (
                                <TimelineBlock key={block.year} block={block} />
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}

                  {/* Accent quote */}
                  {card.accent && (
                    <p className="text-[0.65rem] font-display font-600 tracking-[0.05em] text-crimson/70 italic border-l-2 border-crimson/30 pl-3 mt-2">
                      {card.accent}
                    </p>
                  )}

                  {/* Focus pills */}
                  <FocusPills areas={card.focusAreas} />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/30 to-transparent" />
    </section>
  )
}
