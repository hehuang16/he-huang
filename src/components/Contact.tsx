'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, MapPin, Clock } from 'lucide-react';

const PHONE = '+17813544240';
const PHONE_DISPLAY = '(781) 354-4240';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="bg-[#F8F9FA] py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-2xl mx-auto px-4 sm:px-6 text-center"
      >
        <p className="section-label">Get In Touch</p>
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#1A1A2E] mt-2">
          Ready to Get Started?
        </h2>
        <p className="text-[#6B7280] text-base mt-3">
          Send me a text and I&rsquo;ll get back to you within a few hours.
          I&rsquo;m happy to answer any questions about my services.
        </p>

        <div className="mt-8 bg-white rounded-xl border border-[#E5E7EB] p-8 shadow-sm">
          <p className="font-display font-bold text-2xl text-[#1A1A2E]">
            {PHONE_DISPLAY}
          </p>

          <a
            href={`sms:${PHONE}`}
            className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] hover:bg-[#1E3A5F] text-white font-semibold rounded-lg transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Text Me
          </a>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#E5E7EB]">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-[#6B7280] shrink-0" />
              <span className="text-sm text-[#6B7280]">
                Lexington, MA & surrounding areas
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-[#6B7280] shrink-0" />
              <span className="text-sm text-[#6B7280]">
                Usually responds within a few hours
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
