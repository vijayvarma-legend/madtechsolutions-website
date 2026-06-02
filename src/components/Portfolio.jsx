import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { stagger as staggerContainer, cardItem as cardVariant, fadeInUp } from '../utils/animations'

const projects = [
  {
    id: 1,
    title: 'The Grand Table',
    category: 'Restaurant Website',
    description: 'Elegant restaurant website with online reservations, menu showcase, and immersive food photography layout to drive footfall.',
    tags: ['HTML/CSS', 'JavaScript', 'Responsive', 'UI/UX'],
    gradient: 'from-amber-950 via-orange-900 to-stone-950',
    accent: '#f59e0b',
    year: '2024',
    url: 'https://madhukunchalaa.github.io/busin/restaurant/index.html',
    image: 'restaurant.png',
  },
  {
    id: 2,
    title: 'Glam Studio',
    category: 'Salon & Beauty',
    description: 'Premium salon brand website featuring service menus, stylist profiles, booking integration, and a luxe aesthetic.',
    tags: ['HTML/CSS', 'JavaScript', 'Animations', 'Booking'],
    gradient: 'from-rose-950 via-pink-900 to-slate-950',
    accent: '#fb7185',
    year: '2024',
    url: 'https://madhukunchalaa.github.io/busin/salon/index.html',
    image: 'salon.png',
  },
  {
    id: 3,
    title: 'Villart',
    category: 'Creative Portfolio',
    description: 'Artistic portfolio website with dynamic galleries, smooth scroll transitions, and a bold visual identity for a creative studio.',
    tags: ['React', 'Animations', 'Portfolio', 'Creative'],
    gradient: 'from-violet-950 via-indigo-900 to-slate-950',
    accent: '#818cf8',
    year: '2024',
    url: 'https://madhukunchalaa.github.io/villart/',
    image: 'villart.png',
  },
  {
    id: 4,
    title: 'Organic Co.',
    category: 'E-Commerce / Brand',
    description: 'Clean eco-brand website for an organic products company, featuring product catalogue, sustainability story, and checkout flow.',
    tags: ['HTML/CSS', 'JavaScript', 'E-Commerce', 'Branding'],
    gradient: 'from-emerald-950 via-teal-900 to-slate-950',
    accent: '#34d399',
    year: '2024',
    url: 'https://madhukunchalaa.github.io/organic-project/',
    image: 'organic.png',
  },
  {
    id: 5,
    title: 'Shoot Site',
    category: 'Photography Studio',
    description: 'Professional photography studio website with fullscreen gallery, cinematic hero sections, and enquiry form for bookings.',
    tags: ['HTML/CSS', 'Gallery', 'Photography', 'UI/UX'],
    gradient: 'from-slate-950 via-zinc-900 to-stone-950',
    accent: '#94a3b8',
    year: '2024',
    url: 'https://madhukunchalaa.github.io/Shoot-SIte/index.html',
    image: 'shoot.png',
  },
  {
    id: 6,
    title: 'Shaik & Reddy Associates',
    category: 'Legal / Corporate',
    description: 'Professional law firm website with practice area pages, attorney profiles, and a trust-first design to convert potential clients.',
    tags: ['React', 'Corporate', 'SEO', 'Responsive'],
    gradient: 'from-blue-950 via-indigo-950 to-slate-950',
    accent: '#60a5fa',
    year: '2025',
    url: 'https://shaikandreddyassociates.com/',
    image: 'shaik.png',
  },
  {
    id: 7,
    title: 'Kriss Magic',
    category: 'Entertainment / Events',
    description: 'Vibrant event & entertainment brand website with bold typography, performance highlights, and booking call-to-action.',
    tags: ['React', 'Animations', 'Events', 'Branding'],
    gradient: 'from-orange-950 via-amber-900 to-slate-950',
    accent: '#fb923c',
    year: '2025',
    url: 'https://vijayvarma-legend.github.io/krissmagicc-website/',
    image: 'kriss.png',
  },
]

function ProjectCard({ project }) {
  const isTouch = typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches
  const [hovered, setHovered] = useState(isTouch)
  const [imgError, setImgError] = useState(false)

  const screenshotUrl = `/portfolio/${project.image}`

  return (
    <motion.div
      variants={cardVariant}
      onHoverStart={() => !isTouch && setHovered(true)}
      onHoverEnd={() => !isTouch && setHovered(false)}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      whileHover={!isTouch ? { y: -4 } : {}}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')}
    >
      {/* Browser chrome + screenshot */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
        {/* Browser bar */}
        <div className="absolute top-0 left-0 right-0 z-10 h-8 bg-slate-200/90 backdrop-blur-sm flex items-center px-3 gap-2 border-b border-slate-300/60">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          </div>
          <div className="flex-1 h-4 rounded-full bg-white/80 border border-slate-300/60 flex items-center px-2">
            <span className="text-[8px] text-slate-400 truncate">{project.url.replace('https://', '')}</span>
          </div>
        </div>

        {/* Screenshot image */}
        {!imgError ? (
          <motion.img
            src={screenshotUrl}
            alt={project.title}
            onError={() => setImgError(true)}
            className="absolute inset-0 w-full h-full object-cover object-top"
            style={{ paddingTop: '2rem' }}
            animate={hovered ? { scale: 1.04 } : { scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        ) : (
          /* Fallback gradient if screenshot fails */
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex items-center justify-center`} style={{ paddingTop: '2rem' }}>
            <span className="text-2xl font-black text-white/20 tracking-tight">{project.title}</span>
          </div>
        )}

        {/* Hover overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 bg-[#080808]/80 backdrop-blur-[2px] flex flex-col justify-end p-6"
              style={{ paddingTop: '2rem' }}
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
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-white text-xs font-semibold hover:text-blue-300 transition-colors group"
                onClick={(e) => e.stopPropagation()}
              >
                <span>Visit Live Site</span>
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Year badge */}
        <div
          className="absolute top-10 right-3 z-10 text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
          style={{ background: `${project.accent}22`, color: project.accent, border: `1px solid ${project.accent}40` }}
        >
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
            animate={hovered ? { x: 0, opacity: 1 } : { x: -4, opacity: isTouch ? 1 : 0 }}
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
            Our Work
          </motion.div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900"
            >
              Real Projects,
              <br />
              <span className="gold-gradient-text">Real Results</span>
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
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
