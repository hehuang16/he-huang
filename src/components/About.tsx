'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Heart } from 'lucide-react';

const credentials = [
  '11 Years Violin',
  'BYSO Member',
  'LHS Chamber Orchestra',
  "President's Service Award",
  '2 Panama Missions',
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="bg-white py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-3xl mx-auto px-4 sm:px-6 text-center"
      >
        <p className="section-label">About Me</p>
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#1A1A2E] mt-2">
          A Little About Who I Am
        </h2>

        <p className="text-[#374151] text-base leading-relaxed mt-6">
          I&rsquo;m a 10th-grade student at Lexington High School with a deep
          love for music, fitness, and helping others. I&rsquo;ve been playing
          violin for 11 years, performing with the Boston Youth Symphony
          Orchestra and the LHS Chamber Orchestra.
        </p>

        <p className="text-[#374151] text-base leading-relaxed mt-6">
          Beyond music, I&rsquo;m an active member of the LHS Wrestling Club, a
          recipient of the President&rsquo;s Volunteer Service Award (Silver),
          and have completed two service missions to Panama. I believe in showing
          up, working hard, and treating every person I serve with respect.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {credentials.map((label) => (
            <span
              key={label}
              className="px-3 py-1.5 text-xs font-medium text-[#1E3A5F] bg-[#F8F9FA] border border-[#E5E7EB] rounded-full"
            >
              {label}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
