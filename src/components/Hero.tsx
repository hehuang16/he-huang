'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageCircle, ChevronDown } from 'lucide-react'

const PHONE = '+16175482946'

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
}

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
  },
}

export default function Hero() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient + noise */}
      <div className="absolute inset-0 bg-obsidian">
        <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-[#120408] to-obsidian" />
        {/* Radial crimson glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-crimson/5 rounded-full blur-[120px]" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(220,38,38,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(220,38,38,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Scan line effect */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/30 to-transparent pointer-events-none"
        animate={{ top: ['-5%', '110%'] }}
        transition={{ duration: 5, ease: 'linear', repeat: Infinity, repeatDelay: 2 }}
        style={{ position: 'absolute' }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={heroVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Label */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="section-label">
            LHS Chamber Orchestra · BYSO · Lexington, MA
          </span>
        </motion.div>

        {/* Thin red line above headline */}
        <motion.div
          className="mx-auto mb-8 h-px w-16 origin-left bg-crimson"
          variants={lineVariants}
          style={{ transformOrigin: 'left center' }}
        />

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-display font-900 text-[clamp(3.5rem,10vw,8rem)] leading-[0.9] tracking-[-0.04em] uppercase text-titanium mb-6"
        >
          Precision.
          <br />
          <span className="text-crimson">Power.</span>
          <br />
          Soul.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-silver/60 text-base sm:text-lg font-sans font-400 leading-relaxed mb-12"
        >
          Training every stroke like an Olympic athlete.{' '}
          <span className="text-silver/90">Premium violin mentoring</span> by an LHS
          scholar-musician—where artistic precision meets athletic discipline.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <motion.a
            href={`sms:${PHONE}`}
            id="hero-cta-primary"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-crimson text-white font-display font-700 uppercase tracking-[0.12em] text-sm rounded-sm overflow-hidden"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 500, damping: 25 }}
          >
            {/* Spring glow on hover */}
            <span className="absolute inset-0 bg-crimson-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-3">
              <MessageCircle className="w-4 h-4" />
              Text for Inquiry
            </span>
          </motion.a>

          <motion.a
            href="#about"
            id="hero-cta-secondary"
            className="inline-flex items-center gap-2 px-8 py-4 border border-silver/20 text-silver/70 hover:text-silver hover:border-crimson/40 font-display font-600 uppercase tracking-[0.12em] text-sm rounded-sm transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore My Story
          </motion.a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={itemVariants}
          className="mt-20 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto"
        >
          {[
            { value: '11', label: 'Years Violin' },
            { value: '$3.3K', label: 'Busking Revenue' },
            { value: '4', label: 'Students Mentored' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="stat-number">{stat.value}</span>
              <span className="mt-1 text-[0.65rem] font-display font-600 uppercase tracking-[0.15em] text-silver/40">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[0.6rem] font-display uppercase tracking-[0.3em] text-silver/30">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 text-crimson/60" />
      </motion.div>
    </section>
  )
}
