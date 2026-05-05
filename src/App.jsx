import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useLenis } from './hooks/useLenis'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import FreeDemoSection from './components/FreeDemoSection'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)
  useLenis()

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="bg-[#f8fafc] text-slate-900 overflow-x-hidden">
          <Navbar />
          <main>
            <Hero />
            <FreeDemoSection />
            <Services />
            <Portfolio />
            <About />
            <Process />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}
