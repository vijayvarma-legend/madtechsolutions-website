import { motion } from 'framer-motion'
import { stagger as staggerContainer, cardItem as cardVariant, fadeInUp } from '../utils/animations'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'Deep dive into your business goals, audience, and competitive landscape. We ask the right questions before writing a single line of code.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'We map the perfect technical and creative solution — architecture, tech stack, design language, and KPIs that align with your goals.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Design',
    description:
      'Stunning UI/UX that balances aesthetics with usability. Every interaction is prototyped, tested, and refined before development begins.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Development',
    description:
      'Clean, scalable code built with modern frameworks. Rigorous QA, performance optimization, and continuous integration throughout.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Launch & Scale',
    description:
      'Seamless deployment, monitoring, and post-launch support. We don\'t just ship — we iterate and optimize for sustained growth.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
]

export default function Process() {
  return (
    <section id="process" className="section-padding section-gap relative overflow-hidden bg-slate-50">
      {/* Subtle divider line top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-white/8 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="mb-16 md:mb-20 text-center max-w-2xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="section-label mb-5 justify-center">
            <span className="w-5 h-px bg-blue-500" />
            How We Work
            <span className="w-5 h-px bg-blue-500" />
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900"
          >
            Our Proven
            <br />
            <span className="gold-gradient-text">5-Step Process</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-5 text-slate-500 text-base leading-relaxed"
          >
            A battle-tested framework that turns ideas into impactful digital products — on time, every time.
          </motion.p>
        </motion.div>

        {/* Steps — Desktop horizontal / Mobile vertical */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="hidden lg:block absolute top-14 left-[9%] right-[9%] h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent origin-left"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={cardVariant}
                className="relative group"
              >
                {/* Mobile connector line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-6 top-14 bottom-0 w-px bg-white/5" />
                )}

                {/* Number + icon circle */}
                <div className="relative z-10 flex lg:flex-col items-start lg:items-center gap-5 lg:gap-0">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-full border border-blue-200 bg-white flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-400 transition-all duration-400">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white border border-blue-400 flex items-center justify-center">
                      <span className="text-[9px] font-black text-blue-600">{index + 1}</span>
                    </div>
                  </div>

                  <div className="lg:mt-8 lg:text-center">
                    <div className="text-[10px] font-black tracking-[0.2em] text-blue-500/60 uppercase mb-1.5">
                      {step.number}
                    </div>
                    <h3 className="text-base font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-xs text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 p-8 md:p-12 glass-card rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          {/* bg glow */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.06) 0%, transparent 60%)' }}
          />
          <div className="relative z-10">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-400 mb-2">Ready to start?</p>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900">
              Let&apos;s build something{' '}
              <span className="gold-gradient-text">remarkable</span> together.
            </h3>
          </div>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="relative z-10 flex-shrink-0 btn-primary"
          >
            Start Your Project
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
