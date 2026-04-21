'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const PHONE = '+16175482946'

const services = [
  {
    id: 'violin-mastery',
    number: '01',
    title: 'Violin Mastery',
    subtitle: 'Beginners',
    description:
      'Foundations of posture, tone, and musicality for elementary students. We build habits that last a lifetime — the right way from the very first note.',
    details: [
      'Bow hold and posture fundamentals',
      'Tone production & ear training',
      'Foundational music reading',
      'Performance confidence',
    ],
    ideal: 'Elementary school students starting violin',
    pricing: 'Text for Rates',
  },
  {
    id: 'practice-ally',
    number: '02',
    title: 'Virtuoso Practice Ally',
    subtitle: 'Intermediate Students',
    description:
      'Specialized "Practice Assistant" sessions for students under master teachers. I ensure every note of your master\'s homework is perfected between lessons.',
    details: [
      'Precision execution of teacher assignments',
      'Targeted passage work & debugging',
      'Audition & competition prep',
      'Mental performance coaching',
    ],
    ideal: 'BYSO, NEC, Rivers School students',
    pricing: 'Text for Rates',
    featured: true,
  },
  {
    id: 'strength',
    number: '03',
    title: 'Teen Strength & Discipline',
    subtitle: 'Fitness Mentorship',
    description:
      '1-on-1 fitness guidance focusing on form, discipline, and building a growth mindset. The same methodology that powers my violin practice — applied to the gym.',
    details: [
      'Proper movement mechanics & form',
      'Progressive training programming',
      'Discipline & habit building',
      'Growth mindset coaching',
    ],
    ideal: 'Middle & high school athletes',
    pricing: 'Text for Rates',
  },
]

const methodology = [
  {
    step: '1',
    title: 'Diagnose',
    desc: 'Like a sports coach, I identify exactly what\'s broken — not what "sounds nice."',
  },
  {
    step: '2',
    title: 'Target',
    desc: 'Isolate the weak measure. Slow it down. Rebuild it with precision.',
  },
  {
    step: '3',
    title: 'Drill',
    desc: 'Athletic repetition. We drill it until the muscle memory is unbreakable.',
  },
  {
    step: '4',
    title: 'Perform',
    desc: 'Put it in context. Under pressure. That\'s when mastery is revealed.',
  },
]

export default function Services() {
  const ref = useRef(null)
  const methodRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const methodInView = useInView(methodRef, { once: true, margin: '-60px' })

  return (
    <section id="services" ref={ref} className="relative py-32">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-crimson/4 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="section-label mb-4 block">Services</span>
          <span className="block w-12 h-0.5 bg-gradient-to-r from-crimson to-transparent mb-6" />
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-display font-900 text-[clamp(2rem,5vw,3.5rem)] tracking-tight text-titanium uppercase">
              Coaching &<br />
              <span className="text-crimson">Mentorship</span>
            </h2>
            <p className="max-w-md text-silver/50 text-sm leading-relaxed lg:text-right">
              Empowering the next generation of artists and athletes in Lexington and surrounding areas.
            </p>
          </div>
        </motion.div>

        {/* Services Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-24">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              id={`service-${service.id}`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-sm overflow-hidden group hover-lift ${
                service.featured
                  ? 'bg-obsidian-card border border-crimson/40'
                  : 'bg-obsidian-card border border-obsidian-border hover:border-crimson/20'
              }`}
            >
              {/* Featured badge */}
              {service.featured && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-crimson to-crimson-light" />
              )}

              <div className="p-8">
                {/* Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display font-900 text-4xl text-crimson/20 leading-none">
                    {service.number}
                  </span>
                  {service.featured && (
                    <span className="text-[0.6rem] font-display font-700 uppercase tracking-[0.2em] text-crimson bg-crimson/10 px-2 py-1 rounded-sm border border-crimson/20">
                      Most Popular
                    </span>
                  )}
                </div>

                {/* Title */}
                <span className="section-label mb-2 block">{service.subtitle}</span>
                <h3 className="font-display font-800 text-xl tracking-tight text-titanium mb-4">
                  {service.title}
                </h3>

                {/* Divider */}
                <div className="w-8 h-px bg-crimson/40 mb-4" />

                {/* Description */}
                <p className="text-silver/60 text-sm leading-relaxed mb-6">{service.description}</p>

                {/* Details */}
                <ul className="space-y-2 mb-6">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-xs text-silver/50">
                      <span className="w-1 h-1 bg-crimson rounded-full mt-1.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Ideal for */}
                <div className="py-3 px-4 bg-obsidian border border-obsidian-border rounded-sm mb-6">
                  <span className="text-[0.6rem] font-display font-700 uppercase tracking-[0.2em] text-silver/30 block mb-1">
                    Ideal For
                  </span>
                  <span className="text-xs text-silver/60">{service.ideal}</span>
                </div>

                {/* CTA */}
                <a
                  href={`sms:${PHONE}`}
                  id={`service-cta-${service.id}`}
                  className={`w-full flex items-center justify-center gap-2 py-3 font-display font-700 uppercase tracking-[0.1em] text-xs rounded-sm transition-all duration-300 ${
                    service.featured
                      ? 'bg-crimson hover:bg-crimson-dark text-white'
                      : 'border border-silver/20 text-silver/60 hover:border-crimson/40 hover:text-crimson'
                  }`}
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  {service.pricing}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── Athletic Methodology ─── */}
        <div ref={methodRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={methodInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-12 text-center"
          >
            <span className="section-label mb-4 block">The Method</span>
            <h2 className="font-display font-900 text-[clamp(1.5rem,3vw,2.5rem)] tracking-tight text-titanium uppercase">
              The Athletic Approach
              <br />
              <span className="text-silver/30 text-[0.6em] font-600">to Violin Practice</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {methodology.map((step, i) => (
              <motion.div
                key={step.step}
                id={`method-step-${step.step}`}
                initial={{ opacity: 0, x: -20 }}
                animate={methodInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative p-6 bg-obsidian-card border border-obsidian-border rounded-sm group hover:border-crimson/30 transition-colors"
              >
                {/* Step number */}
                <div className="w-8 h-8 flex items-center justify-center border border-crimson/30 rounded-sm bg-crimson/5 mb-4">
                  <span className="font-display font-900 text-xs text-crimson">{step.step}</span>
                </div>

                {/* Connecting arrow (not on last) */}
                {i < methodology.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-2 w-4 h-px bg-crimson/30" />
                )}

                <h4 className="font-display font-800 text-sm uppercase tracking-[0.1em] text-titanium mb-2">
                  {step.title}
                </h4>
                <p className="text-silver/50 text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
