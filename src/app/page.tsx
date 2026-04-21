import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Mission from '@/components/Mission'
import About from '@/components/About'
import Credentials from '@/components/Credentials'
import Showcase from '@/components/Showcase'
import Services from '@/components/Services'
import WhyMe from '@/components/WhyMe'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <About />
        <Credentials />
        <Showcase />
        <Services />
        <WhyMe />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
