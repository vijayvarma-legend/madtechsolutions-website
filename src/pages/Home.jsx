import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion'
import SpotlightCard from '../components/ui/SpotlightCard'
import SectionHeader from '../components/ui/SectionHeader'
import { stagger, cardItem, fadeInUp, fadeIn, viewport } from '../utils/animations'

/* ─── Animated rotating word ─── */
const heroWords = ['Websites', 'Mobile Apps', 'AI Chatbots', 'Growth']

function RotatingWord() {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % heroWords.length), 2800)
    return () => clearInterval(id)
  }, [])
  return (
    <span className="inline-block relative overflow-hidden" style={{ minWidth: '7ch' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={idx}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block gold-text whitespace-nowrap"
        >
          {heroWords[idx]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

/* ─── Stats ─── */
const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
  { value: 6, suffix: ' Yrs', label: 'Of Excellence' },
  { value: 99, suffix: '%', label: 'Client Retention' },
]

/* ─── Service preview (3 cards on home) ─── */
const services = [
  {
    icon: '⚡',
    title: 'Website Development',
    desc: 'Blazing-fast, pixel-perfect websites built with React and Next.js that convert visitors into customers.',
    link: '/services',
  },
  {
    icon: '🤖',
    title: 'AI Chatbots',
    desc: 'GPT-4 powered conversational AI that automates support, qualifies leads, and operates 24/7.',
    link: '/services',
  },
  {
    icon: '📈',
    title: 'Digital Growth',
    desc: 'Full-funnel SEO, paid ads, and performance marketing engineered for measurable ROI.',
    link: '/services',
  },
]

/* ─── Work preview ─── */
const featuredWork = [
  {
    id: 1,
    title: 'NexaBank',
    category: 'FinTech Platform',
    gradient: 'from-violet-950 to-indigo-900',
    accent: '#818cf8',
    tags: ['React', 'AI/ML', 'Node.js'],
  },
  {
    id: 2,
    title: 'MindAI',
    category: 'AI SaaS',
    gradient: 'from-emerald-950 to-teal-900',
    accent: '#34d399',
    tags: ['GPT-4', 'Python', 'LangChain'],
  },
]

/* ─── Testimonial ─── */
const testimonial = {
  quote:
    'MadTech transformed our entire digital presence. Conversion rate up 340% in 3 months — they genuinely care about outcomes, not just deliverables.',
  name: 'Sarah Johnson',
  role: 'CEO, TechVentures Inc.',
  initials: 'SJ',
}

/* ─── Marquee ─── */
const marqueeItems = [
  'React', 'Next.js', 'Node.js', 'Flutter', 'GPT-4', 'AWS', 'TypeScript',
  'PostgreSQL', 'Tailwind CSS', 'Python', 'LangChain', 'Figma',
  'React', 'Next.js', 'Node.js', 'Flutter', 'GPT-4', 'AWS', 'TypeScript',
  'PostgreSQL', 'Tailwind CSS', 'Python', 'LangChain', 'Figma',
]

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const rawY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const heroY = useSpring(rawY, { damping: 30, stiffness: 120 })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <div className="bg-surface-0">

      {/* ════════════ HERO ════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col overflow-hidden">

        {/* Ambient blobs */}
        <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute rounded-full blur-[160px]"
            style={{ width: 700, height: 700, top: '-10%', left: '20%',
              background: 'radial-gradient(circle, rgba(201,168,93,0.09) 0%, transparent 70%)' }}
            animate={{ x: [0, 25, 0], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute rounded-full blur-[130px]"
            style={{ width: 500, height: 500, top: '40%', right: '5%',
              background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)' }}
            animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
          <motion.div
            className="absolute rounded-full blur-[100px]"
            style={{ width: 300, height: 300, bottom: '20%', left: '10%',
              background: 'radial-gradient(circle, rgba(201,168,93,0.05) 0%, transparent 70%)' }}
            animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          />

          {/* Fine grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />
          {/* Radial vignette */}
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse 80% 70% at 50% -10%, transparent, #030303 80%)' }}
          />
        </div>

        {/* Hero content */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 flex-1 flex flex-col justify-center container-xl pt-28 md:pt-36 pb-16"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
            className="max-w-5xl"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-9">
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass text-xs font-semibold text-zinc-400 tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                Award-winning Digital Agency · Est. 2019
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-display font-black tracking-tight leading-[0.9] text-balance"
            >
              <span className="block text-white">We Build</span>
              <span className="block mt-1">
                <RotatingWord />
              </span>
              <span className="block text-white/25 mt-1">That Scale.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={fadeInUp}
              className="mt-8 text-lg text-zinc-500 max-w-xl leading-relaxed"
            >
              MadTech Solutions is a full-service digital agency. We design, build, and grow
              digital products used by thousands of people every day.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold">
                Start Your Project
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link to="/work" className="btn-outline">
                View Our Work
              </Link>
            </motion.div>

            {/* Inline stats */}
            <motion.div variants={fadeInUp} className="mt-16 flex flex-wrap gap-8 md:gap-12">
              {stats.map(({ value, suffix, label }) => (
                <div key={label}>
                  <div className="text-2xl font-black gold-text">
                    {value}{suffix}
                  </div>
                  <div className="text-xs text-zinc-600 mt-0.5 font-medium">{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="relative z-10 container-xl pb-10 flex items-center gap-3 text-zinc-700"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1"
          >
            <div className="w-px h-8 bg-gradient-to-b from-transparent to-zinc-700" />
            <div className="w-1 h-1 rounded-full bg-zinc-700" />
          </motion.div>
          <span className="text-[10px] tracking-[0.2em] uppercase font-semibold">Scroll to explore</span>
        </motion.div>

        {/* Marquee strip */}
        <div className="relative z-10 border-t border-white/[0.04] py-4 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            {marqueeItems.map((item, i) => (
              <span key={i} className="inline-flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-700 px-8">
                {item}
                <span className="w-1 h-1 rounded-full bg-zinc-800 inline-block" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ SERVICES PREVIEW ════════════ */}
      <section className="section-y border-t border-white/[0.04]">
        <div className="container-xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <SectionHeader
              label="What We Do"
              title="Services Built for"
              titleGold="Real Results"
            />
            <Link
              to="/services"
              className="self-start md:self-auto flex items-center gap-2 text-sm text-zinc-500 hover:text-gold transition-colors duration-300 group"
            >
              All Services
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {services.map((s) => (
              <motion.div key={s.title} variants={cardItem}>
                <SpotlightCard className="glass gradient-border rounded-2xl p-7 h-full group hover:border-gold/20 transition-all duration-500">
                  <div className="text-3xl mb-6">{s.icon}</div>
                  <h3 className="text-base font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-6">{s.desc}</p>
                  <Link
                    to={s.link}
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-600 hover:text-gold transition-colors duration-300 font-semibold group/link"
                  >
                    Learn more
                    <svg className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════ FEATURED WORK ════════════ */}
      <section className="section-y border-t border-white/[0.04]">
        <div className="container-xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <SectionHeader
              label="Featured Work"
              title="Projects That"
              titleGold="Made Impact"
            />
            <Link
              to="/work"
              className="self-start md:self-auto flex items-center gap-2 text-sm text-zinc-500 hover:text-gold transition-colors duration-300 group"
            >
              View All Projects
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {featuredWork.map((project) => (
              <motion.div key={project.id} variants={cardItem}>
                <WorkCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════ TESTIMONIAL ════════════ */}
      <section className="section-y border-t border-white/[0.04] bg-[#050505]">
        <div className="container-xl max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="section-label"><span className="w-5 h-px bg-gold" />What Clients Say</span>
            </motion.div>
            <motion.blockquote
              variants={fadeInUp}
              className="text-2xl md:text-3xl text-white/80 font-light leading-relaxed italic mb-10"
            >
              &ldquo;{testimonial.quote}&rdquo;
            </motion.blockquote>
            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                {testimonial.initials}
              </div>
              <div>
                <p className="text-sm font-bold text-white">{testimonial.name}</p>
                <p className="text-xs text-zinc-600">{testimonial.role}</p>
              </div>
              <div className="ml-auto">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-gold fill-gold" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="section-y border-t border-white/[0.04]">
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center"
          >
            {/* Background */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,93,0.06) 0%, transparent 70%), #0a0a0a',
              }}
            />
            <div
              aria-hidden
              className="absolute inset-0 rounded-3xl"
              style={{
                background: 'linear-gradient(135deg, rgba(201,168,93,0.08) 0%, transparent 50%, rgba(201,168,93,0.04) 100%)',
                border: '1px solid rgba(201,168,93,0.1)',
              }}
            />

            <div className="relative z-10">
              <p className="section-label justify-center mb-5">
                <span className="w-5 h-px bg-gold" />Ready to Start
                <span className="w-5 h-px bg-gold" />
              </p>
              <h2 className="text-h2 font-black text-white mb-6">
                Let&apos;s Build Something
                <br />
                <span className="gold-text">Extraordinary</span>
              </h2>
              <p className="text-zinc-500 text-base mb-10 max-w-md mx-auto leading-relaxed">
                Join 30+ companies that trusted MadTech to build their digital future.
                Free consultation included.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact" className="btn-gold px-9 py-4 text-base">
                  Start Your Project
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link to="/work" className="btn-outline px-9 py-4 text-base">
                  See Our Work
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

/* ─── Work Card sub-component ─── */
function WorkCard({ project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="group rounded-2xl overflow-hidden cursor-pointer"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Visual */}
      <div className={`relative w-full aspect-[16/10] bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        {/* Orb */}
        <motion.div
          className="absolute rounded-full opacity-30 blur-2xl"
          style={{ width: 250, height: 250, background: project.accent, top: '10%', right: '10%' }}
          animate={hovered ? { scale: 1.2, opacity: 0.45 } : { scale: 1, opacity: 0.3 }}
          transition={{ duration: 0.5 }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
        {/* Faux UI */}
        <div className="absolute top-6 left-6 right-6">
          <div className="h-7 rounded-lg bg-white/[0.07] border border-white/10 flex items-center px-3 gap-2 mb-3">
            {[0,1,2].map(d => <div key={d} className="w-2.5 h-2.5 rounded-full bg-white/15" />)}
            <div className="flex-1 h-2.5 rounded-full bg-white/[0.07]" />
          </div>
          <div className="space-y-2">
            <div className="h-2.5 w-3/5 rounded bg-white/[0.07]" />
            <div className="h-2.5 w-4/5 rounded bg-white/[0.04]" />
          </div>
        </div>

        {/* Hover overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-[#030303]/75 backdrop-blur-sm flex items-end p-6"
            >
              <div className="flex flex-wrap gap-2">
                {project.tags.map(t => (
                  <span key={t} className="text-[10px] font-bold px-2.5 py-1 rounded-full border"
                    style={{ color: project.accent, borderColor: `${project.accent}50` }}>{t}</span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-5 bg-surface-2 border border-t-0 border-white/[0.05]">
        <div>
          <h3 className="text-sm font-bold text-white group-hover:text-gold transition-colors duration-300">{project.title}</h3>
          <p className="text-xs text-zinc-600 mt-0.5">{project.category}</p>
        </div>
        <motion.div animate={hovered ? { x: 0, opacity: 1 } : { x: -6, opacity: 0 }} className="text-gold">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  )
}
