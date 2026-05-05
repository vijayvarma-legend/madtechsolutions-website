import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { stagger as staggerContainer, fadeInUp, slideLeft as slideInLeft, slideRight as slideInRight } from '../utils/animations'

const projectTypes = [
  'Website Development',
  'App Development',
  'AI Chatbot',
  'SEO Optimization',
  'Digital Marketing',
  'Other / Not Sure',
]

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'Email',
    value: 'madtechsolutions.in@gmail.com',
    href: 'mailto:madtechsolutions.in@gmail.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'Location',
    value: 'India · Remote Worldwide',
    href: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Response time',
    value: 'Within 24 hours',
    href: null,
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  })
  const [focused, setFocused] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1600))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-padding section-gap relative overflow-hidden bg-white">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Large faded email bg text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          className="text-[clamp(3rem,15vw,12rem)] font-black text-white/[0.018] tracking-tighter whitespace-nowrap"
        >
          Let&apos;s Talk
        </span>
      </div>

      {/* Ambient blob */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="mb-14 md:mb-20"
        >
          <motion.div variants={fadeInUp} className="section-label mb-5">
            <span className="w-5 h-px bg-blue-500" />
            Get In Touch
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900"
          >
            Let&apos;s Build Something
            <br />
            <span className="gold-gradient-text">Extraordinary</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={slideInLeft}
            className="lg:col-span-2 space-y-8"
          >
            <p className="text-slate-500 leading-relaxed text-base">
              Have a project in mind? Fill in the form and we&apos;ll get back to you within 24 hours
              with a clear plan and honest pricing.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-blue-400 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-zinc-600 font-medium uppercase tracking-wide mb-0.5">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm text-slate-700 hover:text-blue-600 transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-slate-700">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badge */}
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-2.5 mb-3">
                <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span className="text-xs font-bold text-white uppercase tracking-wide">Our Promise</span>
              </div>
              <ul className="space-y-2">
                {[
                  'Free consultation & project scoping',
                  'Transparent, fixed-price quotes',
                  'NDA signed before project kickoff',
                  '100% satisfaction guarantee',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={slideInRight}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card rounded-3xl p-10 md:p-14 flex flex-col items-center justify-center text-center min-h-[500px]"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.3)' }}
                  >
                    <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3">Message Sent!</h3>
                  <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                    Thanks, {form.name.split(' ')[0]}! We&apos;ve received your message and will
                    reach out within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="glass-card rounded-3xl p-8 md:p-10 space-y-5"
                >
                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {[
                      { name: 'name', label: 'Your Name', placeholder: 'John Doe', type: 'text' },
                      { name: 'email', label: 'Email Address', placeholder: 'john@company.com', type: 'email' },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-[11px] font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                          {field.label}
                        </label>
                        <div className="relative">
                          <input
                            type={field.type}
                            name={field.name}
                            value={form[field.name]}
                            onChange={handleChange}
                            onFocus={() => setFocused(field.name)}
                            onBlur={() => setFocused(null)}
                            placeholder={field.placeholder}
                            required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-300 focus:border-blue-400 focus:bg-white"
                          />
                          {focused === field.name && (
                            <motion.div
                              layoutId="input-glow"
                              className="absolute inset-0 rounded-xl pointer-events-none"
                              style={{ boxShadow: '0 0 0 1px rgba(37,99,235,0.3), 0 0 20px rgba(37,99,235,0.08)' }}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Project type */}
                  <div>
                    <label className="block text-[11px] font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                      Project Type
                    </label>
                    <div className="relative">
                      <select
                        name="project"
                        value={form.project}
                        onChange={handleChange}
                        onFocus={() => setFocused('project')}
                        onBlur={() => setFocused(null)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 outline-none appearance-none transition-all duration-300 focus:border-blue-400 focus:bg-white"
                          style={{ color: form.project ? '#0f172a' : '#94a3b8' }}
                      >
                        <option value="" disabled>Select a service…</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type} className="bg-white text-slate-900">
                            {type}
                          </option>
                        ))}
                      </select>
                      <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                      Tell Us About Your Project
                    </label>
                    <div className="relative">
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        placeholder="Describe your project, goals, timeline, and budget..."
                        rows={5}
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 outline-none resize-none transition-all duration-300 focus:border-blue-400 focus:bg-white"
                      />
                      {focused === 'message' && (
                        <motion.div
                          className="absolute inset-0 rounded-xl pointer-events-none"
                          style={{ boxShadow: '0 0 0 1px rgba(37,99,235,0.3), 0 0 20px rgba(37,99,235,0.08)' }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary justify-center py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
                        />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
