'use client'

import { Music } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative py-12 bg-obsidian-light border-t border-obsidian-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-crimson rounded-sm flex items-center justify-center">
              <Music className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-display font-800 text-sm tracking-[0.15em] uppercase text-titanium">
              He Huang
            </span>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 justify-center">
            {[
              { label: 'About', href: '#about' },
              { label: 'Services', href: '#services' },
              { label: 'Showcase', href: '#showcase' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[0.65rem] font-display font-600 uppercase tracking-[0.2em] text-silver/40 hover:text-crimson transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="sms:+16175482946"
            className="px-5 py-2 bg-crimson/10 border border-crimson/30 text-crimson text-xs font-display font-700 uppercase tracking-[0.12em] rounded-sm hover:bg-crimson hover:text-white transition-all duration-300"
          >
            Text Now
          </a>
        </div>

        {/* Community Service Statement */}
        <div className="text-center py-4 border-t border-obsidian-border border-b mb-6">
          <p className="text-silver/40 text-xs font-sans">
            Proudly serving the Lexington, MA community and students from{' '}
            <span className="text-silver/60">LHS, Diamond, and Clarke Middle Schools.</span>
          </p>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[0.6rem] font-display uppercase tracking-[0.2em] text-silver/20">
            © {year} He Huang. All rights reserved.
          </p>
          <p className="text-[0.6rem] font-display uppercase tracking-[0.2em] text-silver/20">
            Lexington, MA · Greater Boston Area
          </p>
        </div>
      </div>
    </footer>
  )
}
