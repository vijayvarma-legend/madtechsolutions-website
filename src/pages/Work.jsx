import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '../components/ui/PageHero'
import SpotlightCard from '../components/ui/SpotlightCard'
import SectionHeader from '../components/ui/SectionHeader'
import { stagger, cardItem, viewport } from '../utils/animations'

const filters = ['All', 'Web', 'App', 'AI', 'Marketing']

const projects = [
  {
    id: 1, title: 'NexaBank', category: 'FinTech Platform', filter: 'Web',
    desc: 'Complete digital banking suite with real-time analytics, AI fraud detection, and a seamless UX for 200k+ monthly users.',
    tags: ['React', 'Node.js', 'AI/ML', 'PostgreSQL'],
    gradient: 'from-violet-950 via-indigo-900 to-slate-950',
    accent: '#818cf8', year: '2024', span: 'md:col-span-2',
  },
  {
    id: 2, title: 'MindAI', category: 'AI SaaS', filter: 'AI',
    desc: 'GPT-4 workspace assistant that reduced operational overhead by 60% for enterprise clients across 12 countries.',
    tags: ['GPT-4', 'Python', 'LangChain', 'React'],
    gradient: 'from-emerald-950 via-teal-900 to-slate-950',
    accent: '#34d399', year: '2024', span: '',
  },
  {
    id: 3, title: 'LuxeCommerce', category: 'E-Commerce', filter: 'Web',
    desc: 'Premium fashion e-commerce with AR try-on, AI product recommendations, and headless CMS serving 5M monthly visits.',
    tags: ['Next.js', 'Shopify', 'AR', 'Tailwind'],
    gradient: 'from-stone-950 via-amber-950 to-stone-950',
    accent: '#d97706', year: '2024', span: '',
  },
  {
    id: 4, title: 'HealthFlow', category: 'Healthcare App', filter: 'App',
    desc: 'End-to-end telemedicine platform with EHR integration, appointment booking, and live consultation for 50+ clinics.',
    tags: ['Flutter', 'Firebase', 'WebRTC', 'Node.js'],
    gradient: 'from-blue-950 via-indigo-950 to-slate-950',
    accent: '#60a5fa', year: '2023', span: '',
  },
  {
    id: 5, title: 'GrowthLab', category: 'Marketing Platform', filter: 'Marketing',
    desc: 'Unified growth dashboard combining paid ads, email, social, and SEO analytics with AI-driven recommendations.',
    tags: ['React', 'D3.js', 'Python', 'BigQuery'],
    gradient: 'from-rose-950 via-pink-900 to-slate-950',
    accent: '#fb7185', year: '2023', span: '',
  },
  {
    id: 6, title: 'CloudSuite', category: 'B2B SaaS', filter: 'Web',
    desc: 'Enterprise resource planning SaaS with multi-tenant architecture, real-time collaboration, and advanced reporting.',
    tags: ['Next.js', 'TypeScript', 'AWS', 'PostgreSQL'],
    gradient: 'from-orange-950 via-amber-900 to-slate-950',
    accent: '#fb923c', year: '2023', span: '',
  },
]

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className={`group rounded-2xl overflow-hidden ${project.span}`}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Visual */}
      <div className={`relative w-full aspect-[16/10] bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        {/* Orb */}
        <motion.div
          className="absolute rounded-full blur-[60px] opacity-25"
          style={{ width: 280, height: 280, background: project.accent, top: '5%', right: '8%' }}
          animate={hovered ? { scale: 1.25, opacity: 0.4 } : { scale: 1, opacity: 0.25 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          className="absolute rounded-full blur-[40px] opacity-10"
          style={{ width: 150, height: 150, background: project.accent, bottom: '15%', left: '10%' }}
          animate={hovered ? { scale: 1.3, opacity: 0.2 } : { scale: 1, opacity: 0.1 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        {/* Faux UI */}
        <div className="absolute top-7 left-7 right-7">
          <div className="h-8 rounded-lg bg-white/[0.07] border border-white/[0.08] flex items-center px-3 gap-2 mb-4">
            {[0,1,2].map(d => <div key={d} className="w-2.5 h-2.5 rounded-full bg-white/15" />)}
            <div className="flex-1 h-2.5 rounded-full bg-white/[0.06]" />
          </div>
          <div className="space-y-2.5">
            <div className="h-3 w-3/5 rounded bg-white/[0.08]" />
            <div className="h-3 w-4/5 rounded bg-white/[0.05]" />
            <div className="h-3 w-2/5 rounded bg-white/[0.04]" />
          </div>
          {/* Decorative chart bars */}
          <div className="mt-5 flex items-end gap-1 h-12">
            {[40, 65, 45, 80, 55, 90, 70, 85].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm opacity-20"
                style={{ height: `${h}%`, background: project.accent }}
                animate={hovered ? { opacity: 0.35 } : { opacity: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              />
            ))}
          </div>
        </div>

        {/* Year */}
        <div className="absolute top-5 right-5 text-[10px] font-bold tracking-widest text-white/25 uppercase">{project.year}</div>

        {/* Hover overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-[#030303]/80 backdrop-blur-sm flex flex-col justify-end p-7"
            >
              <p className="text-sm text-zinc-300 leading-relaxed mb-5">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map(t => (
                  <span key={t} className="text-[10px] font-bold px-3 py-1 rounded-full border"
                    style={{ color: project.accent, borderColor: `${project.accent}45` }}>{t}</span>
                ))}
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-gold transition-colors">
                Request Case Study
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Card footer */}
      <div className="flex items-center justify-between px-6 py-4 bg-surface-2 border border-t-0 border-white/[0.05] rounded-b-2xl">
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

export default function Work() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.filter === active)

  return (
    <div className="bg-surface-0">
      <PageHero
        label="Our Work"
        title="Projects Built to"
        titleGold="Leave a Mark"
        subtitle="A curated selection of our best work across industries — each built with precision, purpose, and a relentless focus on outcomes."
      />

      <section className="section-y pt-0">
        <div className="container-xl">
          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 text-xs font-bold tracking-wide uppercase rounded-full transition-all duration-300 ${
                  active === f
                    ? 'bg-gold text-black'
                    : 'glass text-zinc-500 hover:text-white hover:border-white/15'
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className={project.span}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="section-y border-t border-white/[0.04] bg-[#050505]">
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="section-label justify-center mb-6">
              <span className="w-5 h-px bg-gold" />Your Project Next<span className="w-5 h-px bg-gold" />
            </p>
            <h2 className="text-h2 font-black text-white mb-5">
              Ready to Join the
              <br /><span className="gold-text">Portfolio?</span>
            </h2>
            <p className="text-zinc-500 mb-10 leading-relaxed">
              Every project in this portfolio started with a single conversation. Let&apos;s have ours.
            </p>
            <Link to="/contact" className="btn-gold px-10 py-4">
              Start Your Project
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
