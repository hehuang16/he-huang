import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['400', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'He Huang | Elite Violin Mentoring & Practice Coaching in Lexington, MA',
  description:
    'LHS scholar-musician offering high-performance violin mentoring. Specializing in technique precision, athletic discipline, and competition prep for students in Greater Boston.',
  keywords: [
    'Violin Mentor Lexington',
    'LHS Violin',
    'Music Practice Assistant Boston',
    'High School Violin Tutor',
    'BYSO audition prep',
    'NEC violin coaching',
    'He Huang violin',
    'Lexington MA music tutor',
  ],
  authors: [{ name: 'He Huang' }],
  creator: 'He Huang',
  openGraph: {
    title: 'He Huang | Elite Violin Mentoring in Lexington, MA',
    description:
      'LHS scholar-musician offering high-performance violin mentoring. Precision, discipline, and artistic soul.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'He Huang | Elite Violin Mentoring in Lexington, MA',
    description:
      'LHS scholar-musician offering high-performance violin mentoring. Precision, discipline, and artistic soul.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

// JSON-LD LocalBusiness schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'He Huang Violin Mentoring',
  description:
    'Premium violin mentoring and practice coaching by LHS scholar-musician He Huang. Specializing in technique precision, athletic discipline, and competition prep.',
  url: 'https://hehuangviolin.com',
  telephone: '+16175482946',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lexington',
    addressRegion: 'MA',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 42.4473,
    longitude: -71.2245,
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Lexington',
      '@id': 'https://www.wikidata.org/wiki/Q771627',
    },
    {
      '@type': 'State',
      name: 'Massachusetts',
    },
  ],
  serviceType: 'Music Tutoring',
  priceRange: '$$',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Violin Mentoring Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Violin Mastery for Beginners',
          description:
            'Foundations of posture, tone, and musicality for elementary students.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Virtuoso Practice Ally',
          description:
            'Specialized practice assistant sessions for students under master teachers.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Teen Strength & Discipline',
          description:
            '1-on-1 fitness guidance focusing on form, discipline, and growth mindset.',
        },
      },
    ],
  },
  founder: {
    '@type': 'Person',
    name: 'He Huang',
    alumniOf: 'Lexington High School',
    knowsAbout: ['Violin', 'Music Education', 'Athletic Training', 'Performance'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} font-sans bg-obsidian text-silver antialiased`}>
        {children}
      </body>
    </html>
  )
}
