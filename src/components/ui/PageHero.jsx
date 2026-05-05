import { motion } from 'framer-motion'
import { stagger, fadeInUp } from '../../utils/animations'

/**
 * Reusable top-of-page hero banner used on inner pages (Services, Work, About, Contact).
 */
export default function PageHero({ label, title, titleGold, subtitle, children }) {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] blur-[140px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 70%)' }}
      />

      {/* Fine grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-xl relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-4xl"
        >
          {label && (
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="section-label">
                <span className="w-5 h-px bg-blue-500" />
                {label}
              </span>
            </motion.div>
          )}

          <motion.h1 variants={fadeInUp} className="text-h1 font-black text-white tracking-tight text-balance">
            {title}
            {titleGold && (
              <>
                <br />
                <span className="gold-text">{titleGold}</span>
              </>
            )}
          </motion.h1>

          {subtitle && (
            <motion.p variants={fadeInUp} className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-2xl">
              {subtitle}
            </motion.p>
          )}

          {children && (
            <motion.div variants={fadeInUp} className="mt-8">
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #030303)' }}
      />
    </section>
  )
}
