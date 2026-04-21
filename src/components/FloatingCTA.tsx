'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

const PHONE = '+16175482946'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const [pulse, setPulse] = useState(false)

  useEffect(() => {
    // Show after scrolling 400px
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    // Pulse every 4 seconds
    const pulseInterval = setInterval(() => {
      setPulse(true)
      setTimeout(() => setPulse(false), 600)
    }, 4000)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearInterval(pulseInterval)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="floating-cta"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          <motion.a
            href={`sms:${PHONE}`}
            id="floating-cta-button"
            className="flex items-center gap-3 px-5 py-3.5 bg-crimson text-white font-display font-700 uppercase tracking-[0.1em] text-xs shadow-2xl"
            whileHover={{ scale: 1.05, backgroundColor: '#B91C1C' }}
            whileTap={{ scale: 0.95 }}
            animate={pulse ? { scale: [1, 1.08, 1] } : {}}
            transition={pulse ? { duration: 0.4, ease: 'easeInOut' } : { type: 'spring', stiffness: 500, damping: 25 }}
            style={{ boxShadow: '0 0 20px rgba(220, 38, 38, 0.4), 0 8px 32px rgba(0,0,0,0.6)' }}
          >
            <MessageCircle className="w-4 h-4 flex-shrink-0" />
            <span className="hidden sm:inline">Text for Inquiry</span>
            <span className="sm:hidden">Inquire</span>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
