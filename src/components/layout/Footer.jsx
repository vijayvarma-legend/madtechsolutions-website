import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '../../utils/animations'

const nav = {
  Services: [
    { label: 'Web Development', to: '/services' },
    { label: 'App Development', to: '/services' },
    { label: 'AI Chatbots', to: '/services' },
    { label: 'SEO Optimization', to: '/services' },
    { label: 'Digital Marketing', to: '/services' },
  ],
  Company: [
    { label: 'About', to: '/about' },
    { label: 'Our Work', to: '/work' },
    { label: 'Process', to: '/about' },
    { label: 'Careers', to: '/contact' },
  ],
  Connect: [
    { label: 'hello@madtech.in', href: 'mailto:madtechsolutions.in@gmail.com' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Twitter / X', href: '#' },
    { label: 'Instagram', href: '#' },
  ],
}

const socials = [
  {
    name: 'LinkedIn',
    href: '#',
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
  },
  {
    name: 'X',
    href: '#',
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
  },
  {
    name: 'Instagram',
    href: '#',
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>,
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/[0.05] bg-[#050505]">
      {/* Main footer */}
      <div className="container-xl py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-flex items-center gap-1 select-none">
              <span className="text-xl font-black">
                <span className="gold-text">Mad</span>
                <span className="text-white">Tech</span>
              </span>
              <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-zinc-600 self-end mb-px ml-1.5">
                Solutions
              </span>
            </Link>

            <p className="text-sm text-zinc-600 leading-relaxed max-w-xs">
              A full-service digital agency crafting premium websites, apps, and AI solutions
              for ambitious brands across India and worldwide.
            </p>

            <div className="flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-zinc-600 hover:text-gold hover:border-gold/20 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 text-[11px] text-zinc-700 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for new projects
            </div>
          </div>

          {/* Links */}
          {Object.entries(nav).map(([heading, items]) => (
            <div key={heading}>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 mb-5">
                {heading}
              </p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    {item.to ? (
                      <Link
                        to={item.to}
                        className="text-sm text-zinc-600 hover:text-zinc-300 transition-colors duration-300"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="text-sm text-zinc-600 hover:text-zinc-300 transition-colors duration-300"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04]">
        <div className="container-xl py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-700">
            © {year} MadTech Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map((t) => (
              <a key={t} href="#" className="text-xs text-zinc-700 hover:text-zinc-400 transition-colors">
                {t}
              </a>
            ))}
          </div>
          <p className="text-xs text-zinc-800">Crafted in India ♥</p>
        </div>
      </div>
    </footer>
  )
}
