import { motion } from 'framer-motion'
import { stagger, fadeInUp, viewport } from '../../utils/animations'

/**
 * Wraps children in a scroll-triggered stagger container.
 * Each direct child that uses `variants` will animate sequentially.
 */
export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  viewportMargin = '-80px',
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, delayChildren: delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** Convenience child wrapper using fadeInUp */
export function AnimItem({ children, className = '', variants }) {
  return (
    <motion.div variants={variants ?? fadeInUp} className={className}>
      {children}
    </motion.div>
  )
}
