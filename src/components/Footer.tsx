'use client';

const PHONE = '+17813544240';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1E3A5F] text-white py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-display font-semibold text-lg">He Huang</span>

          <nav className="flex items-center gap-6">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href={`sms:${PHONE}`}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg border border-white/20 transition-colors"
          >
            Text Me
          </a>
        </div>

        {/* Community line */}
        <p className="mt-6 pt-6 border-t border-white/10 text-center text-white/50 text-xs">
          Proudly serving students and families in Lexington, MA — including
          Bowman, Bridge, Hastings, Fiske, Estabrook, Harrington, Diamond,
          Clarke, and Lexington High School.
        </p>

        {/* Copyright */}
        <p className="mt-4 text-center text-white/30 text-xs">
          &copy; {year} He Huang. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
