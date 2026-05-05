import { motion } from 'framer-motion'
import { fadeInUp } from '../../utils/animations'

/**
 * Consistent premium section header used across all pages.
 * Label → H2 → optional subtext.
 */
export default function SectionHeader({
  label,
  title,            // string with optional *gold-wrapped* words — use <> or JSX
  titleGold,        // optional: the part of title rendered in gold gradient
  subtitle,
  align = 'left',   // 'left' | 'center'
  className = '',
}) {
  const centerClass = align === 'center' ? 'text-center items-center' : ''

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-70px' }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      className={`flex flex-col gap-4 ${centerClass} ${className}`}
    >
      {label && (
        <motion.div variants={fadeInUp}>
          <span className="section-label">
            <span className="w-5 h-px bg-blue-500" />
            {label}
            {align === 'center' && <span className="w-5 h-px bg-blue-500" />}
          </span>
        </motion.div>
      )}

      <motion.h2
        variants={fadeInUp}
        className="text-h2 text-white font-bold tracking-tight text-balance"
      >
        {title}
        {titleGold && (
          <>
            {' '}
            <span className="gold-text">{titleGold}</span>
          </>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className={`text-base text-zinc-500 leading-relaxed max-w-xl ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
