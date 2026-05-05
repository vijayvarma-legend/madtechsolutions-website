import { motion } from 'framer-motion'

const perks = [
  { icon: '🎨', title: 'Custom Design', desc: 'Tailored to your brand colors, logo & style' },
  { icon: '⚡', title: 'Delivered in 48hrs', desc: 'Live preview link sent to your inbox fast' },
  { icon: '📱', title: 'Fully Responsive', desc: 'Looks great on mobile, tablet & desktop' },
  { icon: '🔒', title: 'No Strings Attached', desc: 'Zero cost, zero commitment required' },
]

const ease = [0.16, 1, 0.3, 1]

export default function FreeDemoSection() {
  return (
    <section className="relative overflow-hidden" style={{ padding: '64px 24px', background: 'linear-gradient(135deg, #1D4ED8 0%, #2563EB 55%, #1e40af 100%)' }}>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.4,
        }} />

      {/* Glow blobs */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'rgba(96,165,250,0.2)', filter: 'blur(80px)' }} />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'rgba(29,78,216,0.35)', filter: 'blur(80px)' }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* ── Copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Tag */}
            <div className="mb-5 flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-xs font-bold tracking-widest uppercase"
                style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)' }}>
                🎁 Limited Time Offer
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              Get a Free Custom
              <br />
              <span className="text-yellow-300">Demo Website</span>
              <br />
              for Your Business
            </h2>

            <p className="mt-5 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0"
              style={{ color: 'rgba(219,234,254,0.9)' }}>
              We'll build a fully custom demo website for your business — completely free.
              No templates, no catch. Just a real preview of what we can do for you.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-black transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #fde047, #facc15)', color: '#1e3a8a', boxShadow: '0 8px 30px rgba(250,204,21,0.4)' }}
              >
                Claim Your Free Demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="mailto:madtechsolutions.in@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.3)' }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us Directly
              </a>
            </div>

            <p className="mt-4 text-xs font-medium" style={{ color: 'rgba(147,197,253,0.9)' }}>
              ✓ No credit card &nbsp;·&nbsp; ✓ No commitment &nbsp;·&nbsp; ✓ Delivered in 48 hours
            </p>
          </motion.div>

          {/* ── Perks grid ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="flex-1 grid grid-cols-2 gap-3 w-full max-w-md"
          >
            {perks.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease, delay: 0.2 + i * 0.08 }}
                className="rounded-2xl p-4 flex flex-col gap-2"
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
              >
                <span className="text-2xl">{p.icon}</span>
                <div className="text-sm font-black text-white">{p.title}</div>
                <div className="text-xs leading-relaxed" style={{ color: 'rgba(191,219,254,0.85)' }}>{p.desc}</div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
