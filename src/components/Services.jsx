import { useState } from 'react'
import { motion } from 'framer-motion'
import { stagger as staggerContainer, fadeInUp } from '../utils/animations'

const services = [
  {
    title: 'Website Development',
    description: 'Pixel-perfect, blazing-fast websites built with React & Next.js. From landing pages to complex web apps.',
    tags: ['React', 'Next.js', 'CMS', 'E-commerce'],
    // Unsplash — coding / web dev
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
    color: '#6366f1',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: 'App Development',
    description: 'Cross-platform mobile apps with Flutter & React Native. Native performance, stunning UI, shipped on time.',
    tags: ['Flutter', 'React Native', 'iOS', 'Android'],
    // Unsplash — mobile / app
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    color: '#10b981',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 15.75h3" />
      </svg>
    ),
  },
  {
    title: 'AI Chatbots',
    description: 'Intelligent AI that automates support, qualifies leads, and engages customers 24/7. Built on GPT-4.',
    tags: ['GPT-4', 'LangChain', 'NLP', 'Automation'],
    // Unsplash — AI / tech
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
    color: '#3b82f6',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    title: 'SEO Optimization',
    description: 'Data-driven SEO that dominates search rankings. Technical audits, content strategy, measurable results.',
    tags: ['Technical SEO', 'Content', 'Link Building', 'Analytics'],
    // Unsplash — analytics / growth
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    color: '#f59e0b',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: 'Digital Marketing',
    description: 'Full-funnel marketing — paid ads, social media, email campaigns & growth strategies that drive real ROI.',
    tags: ['Google Ads', 'Meta Ads', 'Email', 'Growth'],
    // Unsplash — marketing / social
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
    color: '#ec4899',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
      </svg>
    ),
  },
]

/* Individual card with image bg + premium hover */
function ServiceCard({ service, index }) {
  // On touch devices there's no hover — always show content
  const isTouch = typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches
  const [hovered, setHovered] = useState(isTouch)

  const show = hovered // alias for readability

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      onHoverStart={() => !isTouch && setHovered(true)}
      onHoverEnd={() => !isTouch && setHovered(false)}
      className="group relative rounded-3xl overflow-hidden cursor-pointer"
      style={{ aspectRatio: isTouch ? '3/4' : '4/5' }}
      whileHover={!isTouch ? { y: -8, scale: 1.02 } : {}}
    >
      {/* ── Background image ── */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${service.image})` }}
        animate={{ scale: show ? 1.08 : 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* ── Dark gradient overlay ── */}
      <div className="absolute inset-0"
        style={{
          background: show
            ? `linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.2) 100%)`
            : `linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.1) 100%)`,
          transition: 'background 0.5s ease',
        }}
      />

      {/* ── Color accent overlay on hover ── */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: show ? 0.15 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ background: `radial-gradient(ellipse at bottom left, ${service.color}, transparent 70%)` }}
      />

      {/* ── Shimmer line on hover ── */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
        animate={{ opacity: show ? 1 : 0, scaleX: show ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* ── Content ── */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">

        {/* Icon */}
        <motion.div
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-white"
          style={{ background: `${service.color}cc`, border: `1px solid ${service.color}66` }}
          animate={{ y: show ? 0 : 4, opacity: show ? 1 : 0.85 }}
          transition={{ duration: 0.4 }}
        >
          {service.icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-black text-white leading-tight mb-2">
          {service.title}
        </h3>

        {/* Description — reveals on hover / always on mobile */}
        <motion.p
          className="text-sm text-white/80 leading-relaxed"
          animate={{ opacity: show ? 1 : 0, y: show ? 0 : 12, height: show ? 'auto' : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ overflow: 'hidden' }}
        >
          {service.description}
        </motion.p>

        {/* Tags */}
        <motion.div
          className="flex flex-wrap gap-1.5 mt-3"
          animate={{ opacity: show ? 1 : 0, y: show ? 0 : 8 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          {service.tags.map((tag) => (
            <span key={tag}
              className="text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full text-white"
              style={{ background: `${service.color}33`, border: `1px solid ${service.color}55` }}>
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Explore arrow */}
        <motion.div
          className="flex items-center gap-2 mt-4 text-white text-xs font-bold"
          animate={{ opacity: show ? 1 : 0, x: show ? 0 : -8 }}
          transition={{ duration: 0.35, delay: 0.08 }}
        >
          <span>Explore Service</span>
          <motion.svg
            className="w-4 h-4"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
            animate={{ x: show ? 4 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </motion.svg>
        </motion.div>
      </div>

      {/* ── Number badge ── */}
      <div className="absolute top-5 right-5 text-[11px] font-black tracking-widest text-white/30">
        0{index + 1}
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="section-padding section-gap relative bg-white">

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="mb-14 md:mb-16"
        >
          <motion.div variants={fadeInUp} className="section-label mb-4">
            <span className="w-5 h-px bg-blue-500" />
            What We Do
          </motion.div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 max-w-lg"
            >
              Services That
              <br />
              <span className="gold-gradient-text">Drive Growth</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-400 max-w-xs text-sm leading-relaxed md:text-right">
              Hover each card to explore. Every service engineered for measurable outcomes.
            </motion.p>
          </div>
        </motion.div>

        {/* Cards — 2 col on md, 3 col on lg, with last card spanning */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div key={service.title} className={i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}>
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
