'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      id="hero"
      className="bg-white pt-32 pb-20 px-4"
    >
      <motion.div
        className="max-w-3xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Greeting label */}
        <motion.p className="section-label" variants={fadeUp}>
          LHS Class of 2028 · Lexington, MA
        </motion.p>

        {/* Main heading */}
        <motion.h1
          className="font-display font-bold text-[clamp(2rem,6vw,3rem)] text-[#1A1A2E] tracking-tight mt-4"
          variants={fadeUp}
        >
          Hi, I&rsquo;m He Huang.
          <br />
          <span className="text-[#2563EB]">Dedicated to Serving Our Community.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-[#6B7280] text-base sm:text-lg mt-4 max-w-xl mx-auto leading-relaxed"
          variants={fadeUp}
        >
          I offer violin lessons, fitness training, math tutoring, car washing,
          and lead STEM education mission trips. Every service is delivered with
          care, discipline, and respect.
        </motion.p>

        {/* CTA button */}
        <motion.div className="mt-8" variants={fadeUp}>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] hover:bg-[#1E3A5F] text-white font-semibold rounded-lg transition-colors text-sm"
          >
            View My Services
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16 flex justify-center text-[#9CA3AF]"
          variants={fadeUp}
        >
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );
}
