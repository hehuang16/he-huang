'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Play, ExternalLink } from 'lucide-react'

const videos = [
  {
    id: 'video-1',
    title: 'Street Busking Performance — Lexington',
    description: 'Watch He Huang captivate crowds at his street busking sessions, turning public spaces into concert halls.',
    youtubeId: 'placeholder-1',
    tag: 'Busking',
    thumbnail: 'https://img.youtube.com/vi/placeholder-1/maxresdefault.jpg',
  },
  {
    id: 'video-2',
    title: 'LHS Chamber Orchestra Showcase',
    description: 'A taste of orchestral excellence from the LHS Chamber Orchestra.',
    youtubeId: 'placeholder-2',
    tag: 'Orchestra',
    thumbnail: 'https://img.youtube.com/vi/placeholder-2/maxresdefault.jpg',
  },
  {
    id: 'video-3',
    title: 'Solo Recital Highlight Reel',
    description: 'Years of practice compressed into unforgettable moments. From Bach to contemporary.',
    youtubeId: 'placeholder-3',
    tag: 'Recital',
    thumbnail: 'https://img.youtube.com/vi/placeholder-3/maxresdefault.jpg',
  },
]

function VideoCard({ video, index, inView }: { video: typeof videos[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      id={video.id}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-obsidian-card border border-obsidian-border rounded-sm overflow-hidden hover-lift"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail / Placeholder */}
      <div className="relative aspect-video bg-obsidian overflow-hidden">
        {/* Placeholder gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-[#1a0808] to-obsidian flex items-center justify-center">
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(220,38,38,0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(220,38,38,0.4) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Play button */}
          <motion.div
            className="relative z-10 w-16 h-16 flex items-center justify-center rounded-full bg-crimson/10 border-2 border-crimson/40"
            animate={hovered ? { scale: 1.1, borderColor: 'rgba(220,38,38,0.8)' } : { scale: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <Play className="w-6 h-6 text-crimson fill-crimson ml-1" />
          </motion.div>

          {/* Tag overlay */}
          <span className="absolute top-3 right-3 text-[0.6rem] font-display font-700 uppercase tracking-[0.2em] text-crimson bg-obsidian/80 px-2 py-1 rounded-sm border border-crimson/20">
            {video.tag}
          </span>
        </div>

        {/* Hover glow */}
        <motion.div
          className="absolute inset-0 bg-crimson/5"
          animate={hovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-display font-700 text-sm tracking-tight text-titanium mb-2">
          {video.title}
        </h3>
        <p className="text-silver/50 text-xs leading-relaxed mb-4">{video.description}</p>
        <button
          className="inline-flex items-center gap-2 text-[0.65rem] font-display font-700 uppercase tracking-[0.15em] text-crimson hover:text-crimson-light transition-colors"
          aria-label={`Watch ${video.title}`}
        >
          <span>Add Video Link</span>
          <ExternalLink className="w-3 h-3" />
        </button>
      </div>
    </motion.div>
  )
}

export default function Showcase() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="showcase" ref={ref} className="relative py-32 bg-obsidian-light">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block">Video Showcase</span>
          <span className="block w-12 h-0.5 bg-gradient-to-r from-crimson to-transparent mx-auto mb-6" />
          <h2 className="font-display font-900 text-[clamp(2rem,5vw,3.5rem)] tracking-tight text-titanium uppercase">
            See It.
            <br />
            <span className="text-crimson">Believe It.</span>
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-silver/50 text-sm leading-relaxed">
            Music doesn&apos;t live on paper. Watch He Huang perform in real settings — from
            concert halls to city sidewalks.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <VideoCard key={video.id} video={video} index={i} inView={inView} />
          ))}
        </div>

        {/* Note about placeholders */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8 text-center text-[0.65rem] font-display uppercase tracking-[0.2em] text-silver/20"
        >
          Video links will be added soon — contact for live demos
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/30 to-transparent" />
    </section>
  )
}
