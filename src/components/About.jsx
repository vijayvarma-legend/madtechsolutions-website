import { motion } from 'framer-motion'
import { stagger as staggerContainer, fadeInUp, slideLeft as slideInLeft, slideRight as slideInRight } from '../utils/animations'

const stats = [
  { value: '10+', label: 'Happy Clients', desc: 'Across multiple industries' },
  { value: '15+', label: 'Projects Delivered', desc: 'Websites, apps & more' },
  { value: '1', label: 'Year of Excellence', desc: 'Established 2025' },
  { value: '100%', label: 'Client Satisfaction', desc: 'They keep coming back' },
]

export default function About() {
  return (
    <section id="about" className="section-padding section-gap relative overflow-hidden bg-white">
      {/* Background accent */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Visual */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={slideInLeft}
            className="relative"
          >
            {/* Main card */}
            <div className="relative glass-card rounded-3xl p-8 md:p-10 overflow-hidden">
              {/* Decorative grid */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }}
              />

              {/* Quote mark */}
              <div className="text-8xl font-black leading-none select-none mb-4" style={{ color: 'rgba(37,99,235,0.15)' }}>"</div>

              <blockquote className="relative z-10 text-2xl md:text-3xl font-bold text-slate-900 leading-tight tracking-tight">
                We don&apos;t build websites.
                <br />
                <span className="gold-gradient-text">We build growth engines.</span>
              </blockquote>

              <p className="relative z-10 mt-6 text-slate-500 text-sm leading-relaxed max-w-sm">
                Every pixel, every line of code, every campaign is engineered with a single purpose —
                to make your business grow faster.
              </p>

              {/* Team signature */}
              <div className="relative z-10 mt-8 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {['MT', 'RK', 'AP', 'SJ'].map((initials) => (
                    <div
                      key={initials}
                      className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-[9px] font-bold text-blue-700"
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-800">The MadTech Team</p>
                  <p className="text-[10px] text-slate-500">Designers, engineers &amp; strategists</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-5 -right-5 glass-card rounded-2xl px-5 py-4 hidden md:block"
            >
              <div className="text-2xl font-black leading-none" style={{ color: '#3B82F6' }}>⭐ 4.9</div>
              <div className="text-[10px] text-slate-500 font-medium mt-0.5">Avg. client rating</div>
            </motion.div>

            {/* Bottom floating pill */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-5 -left-5 glass-card rounded-full px-5 py-3 hidden md:flex items-center gap-2.5"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-semibold text-slate-700">3 projects in progress</span>
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="section-label mb-5">
              <span className="w-5 h-px bg-blue-500" />
              Who We Are
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight text-slate-900 leading-tight"
            >
              The Agency Behind
              <br />
              <span className="gold-gradient-text">Ambitious Brands</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-slate-500 leading-relaxed text-base"
            >
              MadTech Solutions is a full-service digital agency founded in 2019. We partner with
              forward-thinking businesses to build digital products that don&apos;t just look great —
              they perform exceptionally.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-slate-400 leading-relaxed text-sm"
            >
              From scrappy startups to established enterprises, we bring the same obsessive attention
              to detail, technical rigor, and creative thinking to every engagement.
            </motion.p>

            {/* Stats grid */}
            <motion.div
              variants={fadeInUp}
              className="mt-10 grid grid-cols-2 gap-5"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-2xl p-5 hover:border-white/12 transition-all duration-300 group"
                >
                  <div className="text-3xl font-black gold-gradient-text group-hover:scale-105 transition-transform duration-300 origin-left">
                    {stat.value}
                  </div>
                  <div className="mt-1.5 text-sm font-semibold text-slate-700">{stat.label}</div>
                  <div className="mt-0.5 text-[11px] text-slate-400">{stat.desc}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeInUp} className="mt-10">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-primary inline-flex"
              >
                Work With Us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
