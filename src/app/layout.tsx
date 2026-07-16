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
})

export const metadata: Metadata = {
  title: 'He Huang | Student Services in Lexington, MA',
  description:
    'Lexington High School student offering violin lessons, practice coaching, personal fitness training, car washing, math tutoring, and STEM education mission trips. Serving the Lexington, MA community with dedication.',
  keywords: [
    'violin lessons Lexington',
    'math tutor elementary',
    'personal training teen',
    'car wash Lexington MA',
    'student services',
    'He Huang',
    'STEM education Panama',
  ],
  authors: [{ name: 'He Huang' }],
  creator: 'He Huang',
  openGraph: {
    title: 'He Huang | Student Services in Lexington, MA',
    description:
      'Lexington High School student offering violin lessons, practice coaching, personal fitness training, car washing, math tutoring, and STEM education mission trips. Serving the Lexington, MA community with dedication.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'He Huang | Student Services in Lexington, MA',
    description:
      'Lexington High School student offering violin lessons, practice coaching, personal fitness training, car washing, math tutoring, and STEM education mission trips. Serving the Lexington, MA community with dedication.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'He Huang Student Services',
  description:
    'Lexington High School student offering violin lessons, practice coaching, personal fitness training, car washing, math tutoring, and STEM education mission trips.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lexington',
    addressRegion: 'MA',
    addressCountry: 'US',
  },
  serviceType: 'Student Services',
  founder: {
    '@type': 'Person',
    name: 'He Huang',
    alumniOf: {
      '@type': 'HighSchool',
      name: 'Lexington High School',
    },
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Student Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Violin Lessons',
          description: 'Private violin lessons for students of all levels.',
        },
        price: '35.00',
        priceCurrency: 'USD',
        unitText: '30 minutes',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Violin Practice Partner',
          description:
            'Guided practice sessions to help students build technique and consistency.',
        },
        price: '25.00',
        priceCurrency: 'USD',
        unitText: '30 minutes',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Personal Fitness Training',
          description:
            'Customized workout plans and one-on-one fitness coaching.',
        },
        price: '25.00',
        priceCurrency: 'USD',
        unitText: '1 hour',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Car Washing',
          description:
            'Thorough hand car washing service in the Lexington area.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Math Tutoring for Elementary',
          description:
            'Patient, engaging math tutoring for elementary school students.',
        },
        price: '30.00',
        priceCurrency: 'USD',
        unitText: '1 hour',
      },
    ],
  },
  knowsAbout: [
    'STEM Education',
    'Panama Mission Trip',
    'Community Service',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans bg-white text-[#374151] antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
