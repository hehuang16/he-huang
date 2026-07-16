'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Music, Dumbbell, Car, BookOpen, Globe } from 'lucide-react'

const PHONE = '+17813544240'

const services = [
  {
    icon: Globe,
    title: 'Panama Mission Trip — STEM Education',
    price: 'Free to Join',
    priceBadgeClass: 'text-[#2563EB] bg-[#DBEAFE]',
    description:
      'Leading our next mission trip to Panama in February 2027. We provide hands-on STEM education to local students — bridge building, engineering workshops, and teamwork. Open to all students who want to make a global impact.',
    experience: '2 missions completed · Healthcare & STEM leadership',
    isSpecial: true,
    cta: 'Text to Learn More →',
  },
  {
    icon: Music,
    title: 'Violin Lessons',
    price: '$35 / 30 min',
    donation: true,
    description:
      'Dedicated to building a strong musical foundation, focusing on posture and tone production for beginners right from the very first lesson.',
    experience: '11 years of violin · BYSO & LHS Chamber Orchestra',
  },
  {
    icon: Music,
    title: 'Violin Practice Partner',
    price: '$25 / 30 min',
    donation: true,
    description:
      "Providing focused practice sessions to help intermediate students perfect their teacher's assignments, prepare for auditions, and build consistent practice habits.",
    experience: 'Trained under Piotr Buczek & Kelly Barr',
  },
  {
    icon: BookOpen,
    title: 'Math Tutoring',
    price: '$30 / hour',
    donation: true,
    description:
      'Delivering patient, encouraging math tutoring for elementary/middle school students. I make math approachable and help build confidence through clear explanations and plenty of practice.',
    experience: '50+ hours of tutoring completed',
  },
  {
    icon: Dumbbell,
    title: 'Personal Fitness Training',
    price: '$25 / hour',
    donation: true,
    description:
      'Customizing scientific training plans to cultivate self-disciplined exercise habits for teenagers. I bring the discipline of athletics to every session.',
    experience: 'LHS Wrestling Club · 2 years of strength training',
  },
  {
    icon: Car,
    title: 'Premium Car Washing',
    price: '$20+ (2-person premium hand wash)',
    donation: true,
    description: (
      <>
        Providing a highly efficient and detailed neighborhood car washing service. My partner <strong>Alan Jee</strong> and I work as a dedicated team to treat your vehicle with the utmost care.
      </>
    ),
    experience: '7 cars serviced',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="services" className="bg-[#F8F9FA] py-20">
      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">What I Offer</span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#1A1A2E] tracking-tight mt-2">
            My Services
          </h2>
          <p className="text-[#6B7280] text-sm mt-2">
            Reliable, affordable services from a hardworking LHS student.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="space-y-4 mt-10">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow ${
                  service.isSpecial ? 'border-2 border-[#2563EB]' : 'border border-[#E5E7EB]'
                }`}
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-[#DBEAFE] flex items-center justify-center flex-shrink-0">
                    <Icon className="text-[#2563EB] w-6 h-6" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Title + Price */}
                    <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-2">
                      <h3 className="font-display font-semibold text-lg text-[#1A1A2E]">
                        {service.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span
                          className={`text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap w-fit ${
                            service.priceBadgeClass || 'text-[#059669] bg-[#D1FAE5]'
                          }`}
                        >
                          {service.price}
                        </span>
                        {service.donation && (
                          <span className="text-xs font-medium text-[#2563EB] bg-[#DBEAFE]/50 px-2 py-1 rounded-md w-fit">
                            ($10 donated to LHS and CBCGB)
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[#6B7280] text-sm mt-2 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Experience */}
                    <p className="mt-3 text-xs text-[#9CA3AF]">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#9CA3AF] mr-1.5 align-middle" />
                      {service.experience}
                    </p>

                    {/* CTA */}
                    <a
                      href={`sms:${PHONE}`}
                      className="inline-block mt-4 text-[#2563EB] hover:text-[#1E3A5F] text-sm font-medium transition-colors"
                    >
                      {service.cta || 'Text to Book →'}
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
