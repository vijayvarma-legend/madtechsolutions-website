import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
]

function LogoMark() {
  return (
    <svg width="52" height="38" viewBox="0 0 90 65" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="nm-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="nm-a" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <path d="M2 62V8L16 8L26 38L36 8L50 8V62H40V28L30 55H22L12 28V62H2Z" fill="url(#nm-g)" />
      <path d="M45 62L58 8H68L81 62H70L64 38L58 62H45Z" fill="url(#nm-a)" />
      <path d="M55 8H72C82 8 88 16 88 35C88 54 82 62 72 62H55V8ZM65 18V52H71C76 52 78 46 78 35C78 24 76 18 71 18H65Z" fill="url(#nm-g)" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [imgError, setImgError] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => setScrolled(latest > 80))

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(37,99,235,0.08)]'
            : 'bg-transparent'
        }`}
      >
        <div className="section-padding flex items-center justify-between h-24 md:h-28">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
            className="flex items-center select-none"
          >
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              {!imgError ? (
                <img
                  src="/logo.png"
                  alt="MAD Tech Solutions"
                  className="h-20 md:h-24 w-auto object-contain"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="flex items-center gap-3">
                  <LogoMark />
                  <div className="flex flex-col leading-none">
                    <span className="text-xl font-black tracking-tight text-slate-900">
                      MAD<span className="text-blue-600"> Tech</span>
                    </span>
                    <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-blue-400/70 mt-0.5">
                      Solutions
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="text-sm font-semibold text-slate-700 hover:text-blue-600 relative group transition-colors duration-300"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
              className="btn-primary text-sm"
            >
              Get Started
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-slate-800 origin-center" />
            <motion.span animate={menuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
              className="block w-6 h-0.5 bg-slate-800" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-slate-800 origin-center" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden bg-white/98 backdrop-blur-xl"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="text-3xl font-black text-slate-800 hover:text-blue-600 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 + 0.1, duration: 0.4 }}
              className="mt-4 btn-primary text-base px-10 py-4"
            >
              Get Started
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
