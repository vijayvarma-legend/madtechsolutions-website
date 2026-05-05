import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SpotlightCard from '../components/ui/SpotlightCard'
import PageHero from '../components/ui/PageHero'
import SectionHeader from '../components/ui/SectionHeader'
import { stagger, cardItem, fadeInUp, viewport } from '../utils/animations'

const services = [
  {
    number: '01',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'Website Development',
    tagline: 'Pixel-perfect. Lightning-fast. Conversion-focused.',
    description:
      'We craft websites that are not just beautiful — they perform. From landing pages to complex web applications, we use React, Next.js, and modern architecture to build digital experiences that load instantly and convert visitors into customers.',
    features: [
      'React & Next.js applications',
      'Headless CMS (Contentful, Sanity)',
      'E-commerce (Shopify, custom)',
      'Performance & Core Web Vitals optimization',
      '99.9% uptime SLA',
    ],
    color: 'rgba(129,140,248,0.08)',
    borderHover: 'rgba(129,140,248,0.25)',
    accent: '#818cf8',
  },
  {
    number: '02',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 15.75h3" />
      </svg>
    ),
    title: 'App Development',
    tagline: 'Native performance. Cross-platform reach.',
    description:
      'We build mobile applications that feel native on both iOS and Android. Using Flutter and React Native, we deliver cross-platform apps without compromising on performance, UX, or the platform-specific details users expect.',
    features: [
      'Flutter & React Native',
      'iOS & Android deployment',
      'Offline-first architecture',
      'Push notifications & deep linking',
      'App Store optimization (ASO)',
    ],
    color: 'rgba(52,211,153,0.07)',
    borderHover: 'rgba(52,211,153,0.25)',
    accent: '#34d399',
  },
  {
    number: '03',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    title: 'AI Chatbots',
    tagline: 'Intelligent. Tireless. Revenue-generating.',
    description:
      'We design and deploy conversational AI that goes beyond scripted responses. Built on GPT-4 and custom LLMs with RAG pipelines, our chatbots handle complex queries, qualify leads, and provide human-level support — 24/7 at a fraction of the cost.',
    features: [
      'GPT-4 & custom LLM integration',
      'RAG (Retrieval Augmented Generation)',
      'Multi-channel (web, WhatsApp, Slack)',
      'CRM & helpdesk integrations',
      'Analytics & conversation insights',
    ],
    color: 'rgba(201,168,93,0.07)',
    borderHover: 'rgba(201,168,93,0.3)',
    accent: '#C9A85D',
  },
  {
    number: '04',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: 'SEO Optimization',
    tagline: 'Rank higher. Earn more. Sustainably.',
    description:
      'We combine technical precision with data-driven content strategy to dominate search rankings. Our SEO work is built to last — no black-hat shortcuts, just sustainable organic growth that compounds over time.',
    features: [
      'Technical SEO audits & fixes',
      'Core Web Vitals & speed optimization',
      'Keyword research & content strategy',
      'Local SEO & Google My Business',
      'Monthly reporting with ROI tracking',
    ],
    color: 'rgba(96,165,250,0.07)',
    borderHover: 'rgba(96,165,250,0.25)',
    accent: '#60a5fa',
  },
  {
    number: '05',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'Digital Marketing',
    tagline: 'Every rupee spent. Every lead tracked.',
    description:
      'We run performance marketing campaigns across Google, Meta, and LinkedIn that generate real pipeline — not vanity metrics. From strategy to creative to optimization, we own the entire funnel and obsess over your CAC and ROAS.',
    features: [
      'Google & Meta Ads management',
      'LinkedIn B2B campaigns',
      'Email marketing & automation',
      'Conversion rate optimization (CRO)',
      'Full-funnel analytics & attribution',
    ],
    color: 'rgba(251,113,133,0.07)',
    borderHover: 'rgba(251,113,133,0.25)',
    accent: '#fb7185',
  },
]

const stack = ['React', 'Next.js', 'Flutter', 'Node.js', 'Python', 'GPT-4', 'AWS', 'Firebase', 'PostgreSQL', 'MongoDB', 'TypeScript', 'Figma', 'Tailwind CSS', 'LangChain', 'GraphQL', 'Docker']

export default function Services() {
  return (
    <div className="bg-surface-0">
      <PageHero
        label="Our Services"
        title="Everything You Need to"
        titleGold="Dominate Digitally"
        subtitle="Five core service areas, dozens of specialties. Whether you need a single service or a full-stack digital team, we've got you covered."
      >
        <div className="flex flex-wrap gap-4">
          <Link to="/contact" className="btn-gold">Start a Project</Link>
          <Link to="/work" className="btn-outline">See Our Work</Link>
        </div>
      </PageHero>

      {/* Services */}
      <section className="section-y">
        <div className="container-xl space-y-6">
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
            >
              <SpotlightCard
                className="glass rounded-2xl p-8 md:p-10 border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500"
                spotlightColor={s.color}
                hoverBorderColor={s.borderHover}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Left */}
                  <div>
                    <div className="flex items-start gap-5 mb-6">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                        style={{
                          background: `${s.color}`,
                          border: `1px solid ${s.accent}25`,
                          color: s.accent,
                        }}
                      >
                        {s.icon}
                      </div>
                      <div className="pt-1">
                        <p className="text-[10px] font-black tracking-[0.25em] uppercase mb-1" style={{ color: s.accent }}>
                          {s.number}
                        </p>
                        <h3 className="text-xl font-bold text-white">{s.title}</h3>
                        <p className="text-xs text-zinc-600 mt-0.5 font-medium italic">{s.tagline}</p>
                      </div>
                    </div>
                    <p className="text-sm text-zinc-500 leading-relaxed">{s.description}</p>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 mt-7 text-sm font-semibold transition-colors duration-300 group"
                      style={{ color: s.accent }}
                    >
                      Start this service
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>

                  {/* Right — Features */}
                  <div className="flex flex-col justify-center">
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-600 mb-5">
                      What&apos;s Included
                    </p>
                    <ul className="space-y-3">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-zinc-400">
                          <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: s.accent }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="section-y border-t border-white/[0.04] bg-[#050505]">
        <div className="container-xl">
          <SectionHeader
            label="Tech Stack"
            title="Tools We"
            titleGold="Master"
            subtitle="We stay current with the best tools in the industry so you don't have to."
            align="center"
            className="mb-14"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
            className="flex flex-wrap justify-center gap-3"
          >
            {stack.map((tech) => (
              <motion.span
                key={tech}
                variants={cardItem}
                className="px-5 py-2.5 text-xs font-semibold tracking-wide text-zinc-500 glass rounded-full border border-white/[0.06] hover:text-gold hover:border-gold/20 transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-y border-t border-white/[0.04]">
        <div className="container-xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-h2 font-black text-white mb-5">
              Not sure which service
              <br />
              <span className="gold-text">you need?</span>
            </h2>
            <p className="text-zinc-500 text-base mb-10 max-w-md mx-auto">
              Book a free 30-minute strategy call. We&apos;ll diagnose your digital gaps and
              recommend the right solution — no pressure, no sales pitch.
            </p>
            <Link to="/contact" className="btn-gold px-10 py-4">
              Book Free Consultation
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
