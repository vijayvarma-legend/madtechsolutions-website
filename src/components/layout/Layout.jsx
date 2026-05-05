import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLenis } from '../../hooks/useLenis'
import { pageVariants } from '../../utils/animations'
import Navbar from './Navbar'
import Footer from './Footer'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function Layout({ children }) {
  useLenis()

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <motion.main
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen bg-surface-0"
      >
        {children}
      </motion.main>
      <Footer />
    </>
  )
}
