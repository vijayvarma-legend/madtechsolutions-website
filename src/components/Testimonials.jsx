import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { stagger as staggerContainer, fadeInUp } from '../utils/animations'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechVentures Inc.',
    initials: 'SJ',
    color: 'from-violet-600 to-indigo-600',
    quote:
      'MadTech completely transformed our online presence. Our conversion rate jumped 340% in the first three months post-launch. Their attention to detail and technical excellence is unmatched — genuinely the best agency we\'ve worked with.',
    rating: 5,
    project: 'Website + SEO',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder',
    company: 'GrowthCo Labs',
    initials: 'MC',
    color: 'from-emerald-600 to-teal-600',
    quote:
      'The AI chatbot they built for us handles 80% of customer queries automatically. Our support costs dropped dramatically while customer satisfaction scores went up. MadTech delivered a truly intelligent solution — not just a generic bot.',
    rating: 5,
    project: 'AI Chatbot',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'CMO',
    company: 'NexaRetail',
    initials: 'PS',
    color: 'from-rose-600 to-pink-600',
    quote:
      'Their digital marketing strategy took us from zero to 50k monthly visitors in 6 months. The SEO results alone justified the entire engagement. What sets MadTech apart is that they genuinely care about your growth, not just the deliverables.',
    rating: 5,
    project: 'Digital Marketing + SEO',
  },
  {
    id: 4,
    name: 'David Park',
    role: 'CTO',
    company: 'FinStream',
    initials: 'DP',
    color: 'from-blue-600 to-cyan-600',
    quote:
      'We needed a complex fintech platform built in 4 months. MadTech delivered on time, on budget, and exceeded our technical expectations. The architecture they designed scales beautifully — we went from 1k to 100k users without a hiccup.',
    rating: 5,
    project: 'FinTech App Development',
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-blue-400 fill-blue-400" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next, paused])

  const current = testimonials[active]

  return (
    <section className="section-padding section-gap relative overflow-hidden bg-slate-900">
      {/* Top border fade */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Ambient blob */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(37,99,235,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="mb-14 text-center"
        >
          <motion.div variants={fadeInUp} className="section-label mb-5 justify-center" style={{ color: '#60A5FA' }}>
            <span className="w-5 h-px bg-blue-500" />
            Testimonials
            <span className="w-5 h-px bg-blue-500" />
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white"
          >
            Clients Love
            <br />
            <span className="gold-gradient-text">Working With Us</span>
          </motion.h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="testimonial-card rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[320px] flex flex-col justify-between">
            {/* Quote mark */}
            <div className="absolute top-6 right-8 text-[120px] font-black text-white/5 leading-none select-none">"</div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10"
              >
                <StarRating rating={current.rating} />

                <blockquote className="mt-6 text-lg md:text-xl text-slate-200 leading-relaxed font-light max-w-3xl">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                <div className="mt-8 flex items-center gap-4">
                  <div
                    className={`w-11 h-11 rounded-full bg-gradient-to-br ${current.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                  >
                    {current.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{current.name}</p>
                    <p className="text-xs text-slate-400">
                      {current.role} · {current.company}
                    </p>
                  </div>
                  <div className="ml-auto hidden md:block">
                    <span className="text-[10px] font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full border border-white/10 text-slate-400">
                      {current.project}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="relative z-10 mt-8 flex items-center justify-between">
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setActive(i); setPaused(true) }}
                    className={`transition-all duration-300 rounded-full ${
                      i === active
                        ? 'w-6 h-1.5 bg-blue-500'
                        : 'w-1.5 h-1.5 bg-white/15 hover:bg-white/30'
                    }`}
                  />
                ))}
              </div>

              {/* Arrow buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => { prev(); setPaused(true) }}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/25 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => { next(); setPaused(true) }}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/25 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Client logos strip */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => { setActive(i); setPaused(true) }}
                className={`text-xs font-semibold transition-all duration-300 ${
                  i === active ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {t.company}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
