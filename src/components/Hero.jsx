import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { stagger as staggerContainer, fadeInUp, fadeIn } from '../utils/animations'

const marqueeItems = [
  'React', 'Next.js', 'Node.js', 'AI / ML', 'Flutter', 'AWS',
  'TypeScript', 'PostgreSQL', 'Figma', 'GraphQL', 'Tailwind CSS', 'Python',
  'React', 'Next.js', 'Node.js', 'AI / ML', 'Flutter', 'AWS',
  'TypeScript', 'PostgreSQL', 'Figma', 'GraphQL', 'Tailwind CSS', 'Python',
]

/* ── Floating service pill ── */
function ServicePill({ icon, label, delay, x, y, rotate = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ position: 'absolute', left: x, top: y, rotate }}
      className="flex items-center gap-2 bg-white rounded-full px-4 py-2.5 shadow-lg border border-slate-100 select-none"
      whileHover={{ scale: 1.06, y: -2 }}
    >
      <span className="text-lg leading-none">{icon}</span>
      <span className="text-xs font-bold text-slate-700 whitespace-nowrap">{label}</span>
    </motion.div>
  )
}

/* ── Central visual ── */
function HeroVisual() {
  return (
    <div className="relative w-full h-full">

      {/* ── Central glowing orb ── */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Outer ring pulse */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-72 h-72 rounded-full border-2 border-blue-400/30"
        />
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute w-96 h-96 rounded-full border border-blue-300/20"
        />

        {/* Core card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="relative z-10 w-52 h-52 rounded-3xl flex flex-col items-center justify-center text-white"
          style={{
            background: 'linear-gradient(135deg, #1D4ED8 0%, #2563EB 50%, #3B82F6 100%)',
            boxShadow: '0 30px 80px rgba(37,99,235,0.45), 0 0 0 1px rgba(255,255,255,0.1) inset',
          }}
        >
          {/* Logo text inside */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-center"
          >
            <div className="text-3xl font-black tracking-tight leading-none">MAD</div>
            <div className="text-sm font-semibold opacity-80 tracking-widest mt-0.5">TECH</div>
            <div className="mt-3 w-10 h-0.5 bg-white/40 mx-auto rounded-full" />
            <div className="mt-2 text-[9px] font-bold tracking-[0.2em] uppercase opacity-60">
              Make Anything Digital
            </div>
          </motion.div>

          {/* Animated corner accents */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-white/30 rounded-tl-lg" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-white/30 rounded-tr-lg" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-white/30 rounded-bl-lg" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-white/30 rounded-br-lg" />
        </motion.div>
      </div>

      {/* ── Orbiting service pills ── */}
      <ServicePill icon="🌐" label="Web Development"  delay={0.8}  x="2%"   y="12%"  rotate={-3} />
      <ServicePill icon="📱" label="App Development"  delay={1.0}  x="58%"  y="6%"   rotate={2} />
      <ServicePill icon="🤖" label="AI Chatbots"      delay={1.2}  x="62%"  y="72%"  rotate={-2} />
      <ServicePill icon="📈" label="SEO & Marketing"  delay={1.4}  x="0%"   y="74%"  rotate={3} />
      <ServicePill icon="🎨" label="UI/UX Design"     delay={1.6}  x="68%"  y="38%"  rotate={-1} />
      <ServicePill icon="⚡" label="Fast Delivery"    delay={1.8}  x="-2%"  y="44%"  rotate={2} />

      {/* ── Floating stat cards ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3"
      >
        {[
          { value: '10+', label: 'Clients' },
          { value: '15+', label: 'Projects' },
          { value: '100%', label: 'Satisfaction' },
        ].map((s) => (
          <div key={s.label}
            className="bg-white rounded-2xl px-4 py-3 text-center shadow-md border border-slate-100"
            style={{ boxShadow: '0 4px 20px rgba(37,99,235,0.1)' }}
          >
            <div className="text-base font-black text-blue-700">{s.value}</div>
            <div className="text-[9px] font-semibold text-slate-400 mt-0.5">{s.label}</div>
          </div>
        ))}
      </motion.div>

      {/* ── Available badge ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="absolute top-4 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md border border-emerald-100"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-bold text-slate-700">Available for new projects</span>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const rawY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const contentY = useSpring(rawY, { damping: 30, stiffness: 150 })
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex flex-col overflow-hidden bg-white">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div className="absolute rounded-full blur-[200px]"
          style={{ width: 700, height: 700, background: 'radial-gradient(circle, rgba(37,99,235,0.09) 0%, transparent 70%)', top: '-20%', left: '-10%' }}
          animate={{ x: [0, 25, 0], y: [0, -15, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute rounded-full blur-[160px]"
          style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(96,165,250,0.07) 0%, transparent 70%)', bottom: '0%', right: '-5%' }}
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }} />
        {/* Dot grid */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.07) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }} />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 flex-1 flex items-center section-padding pt-32 md:pt-36 pb-8"
      >
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* ── Left: Copy ── */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">

            <motion.div variants={fadeInUp} className="mb-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-xs font-bold text-blue-700 tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                Digital Agency · Est. 2025
              </span>
              {/* Free demo offer badge */}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #16a34a, #15803d)', color: '#fff', boxShadow: '0 4px 14px rgba(22,163,74,0.3)' }}
              >
                🎁 Free Demo Website
              </a>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-black tracking-tight leading-[0.88] text-balance"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 6.5rem)' }}
            >
              <span className="block text-slate-900">We Make</span>
              <span className="block gold-gradient-text">Anything</span>
              <span className="block text-slate-900">Digital.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="mt-6 text-base md:text-lg text-slate-500 max-w-lg leading-relaxed">
              Websites, mobile apps, AI chatbots, SEO &amp; digital marketing —
              built to grow your business online.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-primary group">
                Start Your Project
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#work"
                onClick={(e) => { e.preventDefault(); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-ghost group">
                See Our Work
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div variants={fadeInUp} className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {['#3B82F6','#6366F1','#10B981','#F59E0B','#EF4444'].map((c, i) => (
                  <div key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-black text-white"
                    style={{ background: c }}>
                    {['A','B','C','D','E'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800">10+ Happy Clients</div>
                <div className="text-xs text-slate-400">Trusted across India</div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Visual banner ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="relative h-[420px] md:h-[500px] hidden md:block"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="relative z-10 section-padding pb-6 flex items-center gap-3 text-slate-400"
      >
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1">
          <div className="w-px h-6 bg-gradient-to-b from-transparent to-slate-300" />
          <div className="w-1 h-1 rounded-full bg-slate-300" />
        </motion.div>
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold">Scroll to explore</span>
      </motion.div>

      {/* Tech marquee */}
      <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 1.2 }}
        className="relative z-10 border-t border-slate-100 py-4 overflow-hidden bg-slate-50/80">
        <div className="flex whitespace-nowrap animate-marquee">
          {marqueeItems.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 px-8">
              {item}
              <span className="w-1 h-1 rounded-full bg-blue-400 inline-block" />
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
