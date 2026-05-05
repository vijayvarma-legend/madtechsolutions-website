import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { stagger as staggerContainer, cardItem as cardVariant, fadeInUp } from '../utils/animations'

const projects = [
  {
    id: 1,
    title: 'NexaBank',
    category: 'FinTech Platform',
    description: 'A complete digital banking suite with real-time analytics, AI fraud detection, and seamless UX for 200k+ users.',
    tags: ['React', 'Node.js', 'AI/ML', 'PostgreSQL'],
    gradient: 'from-violet-950 via-indigo-900 to-slate-950',
    accent: '#818cf8',
    year: '2024',
  },
  {
    id: 2,
    title: 'LuxeCommerce',
    category: 'E-Commerce',
    description: 'Premium fashion e-commerce with AR try-on, AI recommendations, and a headless CMS powering 5M monthly visits.',
    tags: ['Next.js', 'Shopify', 'AR', 'Tailwind'],
    gradient: 'from-stone-950 via-amber-950 to-stone-950',
    accent: '#d97706',
    year: '2024',
  },
  {
    id: 3,
    title: 'MindAI',
    category: 'AI SaaS',
    description: 'GPT-4 powered workspace assistant that reduced operational time by 60% for enterprise clients across 12 countries.',
    tags: ['GPT-4', 'Python', 'LangChain', 'React'],
    gradient: 'from-emerald-950 via-teal-900 to-slate-950',
    accent: '#34d399',
    year: '2024',
  },
  {
    id: 4,
    title: 'HealthFlow',
    category: 'Healthcare App',
    description: 'End-to-end telemedicine platform with EHR integration, appointment booking, and live consultation for 50+ clinics.',
    tags: ['Flutter', 'Firebase', 'WebRTC', 'Node.js'],
    gradient: 'from-blue-950 via-indigo-950 to-slate-950',
    accent: '#60a5fa',
    year: '2023',
  },
  {
    id: 5,
    title: 'GrowthLab',
    category: 'Marketing Platform',
    description: 'All-in-one growth dashboard combining paid ads, email, social, and SEO analytics with AI-driven insights.',
    tags: ['React', 'D3.js', 'Python', 'BigQuery'],
    gradient: 'from-rose-950 via-pink-900 to-slate-950',
    accent: '#fb7185',
    year: '2023',
  },
  {
    id: 6,
    title: 'CloudSuite',
    category: 'B2B SaaS',
    description: 'Enterprise resource planning SaaS with multi-tenant architecture, real-time collaboration, and advanced reporting.',
    tags: ['Next.js', 'TypeScript', 'AWS', 'Postgres'],
    gradient: 'from-orange-950 via-amber-900 to-slate-950',
    accent: '#fb923c',
    year: '2023',
  },
]

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={cardVariant}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Visual block */}
      <div className={`relative w-full aspect-[4/3] bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        {/* Abstract geometric shapes inside card */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute rounded-full opacity-20"
            style={{
              width: 200,
              height: 200,
              background: `radial-gradient(circle, ${project.accent}40, transparent 70%)`,
              top: '10%',
              right: '10%',
            }}
            animate={hovered ? { scale: 1.3, opacity: 0.35 } : { scale: 1, opacity: 0.2 }}
            transition={{ duration: 0.6 }}
          />
          <motion.div
            className="absolute rounded-full opacity-10"
            style={{
              width: 120,
              height: 120,
              background: `radial-gradient(circle, ${project.accent}60, transparent 70%)`,
              bottom: '20%',
              left: '15%',
            }}
            animate={hovered ? { scale: 1.2, opacity: 0.2 } : { scale: 1, opacity: 0.1 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Faux browser chrome or UI mockup lines */}
        <div className="absolute top-6 left-6 right-6">
          <div className="h-8 rounded-lg bg-white/5 border border-white/10 flex items-center px-3 gap-2">
            <div className="flex gap-1.5">
              {[0,1,2].map(d => (
                <div key={d} className="w-2.5 h-2.5 rounded-full bg-white/15" />
              ))}
            </div>
            <div className="flex-1 h-3 rounded-full bg-white/8" />
          </div>
          <div className="mt-3 space-y-2">
            <div className="h-3 w-3/5 rounded bg-white/8" />
            <div className="h-3 w-4/5 rounded bg-white/5" />
            <div className="h-3 w-2/5 rounded bg-white/5" />
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
              className="absolute inset-0 bg-[#080808]/80 backdrop-blur-sm flex flex-col justify-end p-6"
            >
              <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full border"
                    style={{ color: project.accent, borderColor: `${project.accent}40` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-5 inline-flex items-center gap-2 text-white text-xs font-semibold group">
                <span>View Case Study</span>
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Year badge */}
        <div className="absolute top-4 right-4 text-[10px] font-bold tracking-widest text-white/30 uppercase">
          {project.year}
        </div>
      </div>

      {/* Card footer */}
      <div className="p-5 bg-white border border-slate-100 border-t-0 rounded-b-2xl">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5 font-medium">{project.category}</p>
          </div>
          <motion.div
            animate={hovered ? { x: 0, opacity: 1 } : { x: -4, opacity: 0 }}
            className="text-blue-400"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  return (
    <section id="work" className="section-padding section-gap relative bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="mb-16 md:mb-20"
        >
          <motion.div variants={fadeInUp} className="section-label mb-5">
            <span className="w-5 h-px bg-blue-500" />
            Featured Work
          </motion.div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900"
            >
              Projects That
              <br />
              <span className="gold-gradient-text">Made Impact</span>
            </motion.h2>
            <motion.a
              variants={fadeInUp}
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="self-start md:self-auto btn-ghost text-sm"
            >
              Start a Project
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
