'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageCircle, MapPin, Clock } from 'lucide-react'

const PHONE = '+16175482946'
const PHONE_DISPLAY = '(617) 548-2946'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      {/* Large background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-crimson/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label mb-4 block">Let&apos;s Connect</span>
          <span className="block w-12 h-0.5 bg-gradient-to-r from-crimson to-transparent mx-auto mb-8" />

          <h2 className="font-display font-900 text-[clamp(2.5rem,7vw,5rem)] tracking-tight text-titanium uppercase mb-6 leading-none">
            Ready to
            <br />
            <span className="text-crimson">Elevate?</span>
          </h2>

          <p className="max-w-2xl mx-auto text-silver/60 text-base leading-relaxed mb-4">
            Don&apos;t wait for the next season. Don&apos;t wait for the next lesson. Don&apos;t wait until the audition is next week.
          </p>
          <p className="max-w-2xl mx-auto text-silver/90 text-base leading-relaxed mb-12 font-600">
            Let&apos;s start the journey today.
          </p>
        </motion.div>

        {/* CTA Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-obsidian-card border border-crimson/20 rounded-sm p-10 md:p-14"
        >
          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-crimson to-transparent" />

          {/* Main phone CTA */}
          <div className="mb-8">
            <span className="text-[0.65rem] font-display font-700 uppercase tracking-[0.3em] text-silver/30 block mb-4">
              Primary Contact
            </span>
            <motion.a
              href={`sms:${PHONE}`}
              id="contact-sms-cta"
              className="inline-flex items-center gap-4 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-14 h-14 flex items-center justify-center bg-crimson rounded-sm group-hover:bg-crimson-dark transition-colors duration-300 glow-crimson">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-display font-900 text-2xl text-titanium tracking-tight">
                  {PHONE_DISPLAY}
                </div>
                <div className="text-xs font-display uppercase tracking-[0.15em] text-silver/40">
                  Text for Rates & Availability
                </div>
              </div>
            </motion.a>
          </div>

          {/* Info Grid */}
          <div className="grid sm:grid-cols-2 gap-4 pt-8 border-t border-obsidian-border">
            <div className="flex items-start gap-3 text-left">
              <MapPin className="w-4 h-4 text-crimson mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <span className="text-xs font-display font-700 uppercase tracking-[0.15em] text-silver/40 block mb-1">
                  Service Area
                </span>
                <span className="text-sm text-silver/70">
                  Lexington, MA & surrounding areas
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left">
              <Clock className="w-4 h-4 text-crimson mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <span className="text-xs font-display font-700 uppercase tracking-[0.15em] text-silver/40 block mb-1">
                  Response Time
                </span>
                <span className="text-sm text-silver/70">
                  Usually within a few hours
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
