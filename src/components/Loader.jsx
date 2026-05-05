import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function LogoMark() {
  return (
    <svg width="90" height="65" viewBox="0 0 90 65" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="loader-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="loader-a" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <motion.path d="M2 62V8L16 8L26 38L36 8L50 8V62H40V28L30 55H22L12 28V62H2Z"
        fill="url(#loader-grad)" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }} />
      <motion.path d="M45 62L58 8H68L81 62H70L64 38L58 62H45Z"
        fill="url(#loader-a)" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }} />
      <motion.path d="M55 8H72C82 8 88 16 88 35C88 54 82 62 72 62H55V8ZM65 18V52H71C76 52 78 46 78 35C78 24 76 18 71 18H65Z"
        fill="url(#loader-grad)" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }} />
    </svg>
  )
}

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    let current = 0
    const steps = [15, 30, 20, 25, 10]
    let stepIndex = 0
    const tick = () => {
      if (stepIndex >= steps.length) return
      current = Math.min(current + steps[stepIndex], 100)
      setProgress(current)
      stepIndex++
      if (current < 100) setTimeout(tick, 300 + Math.random() * 200)
    }
    setTimeout(tick, 200)
    const done = setTimeout(onComplete, 2600)
    return () => clearTimeout(done)
  }, [onComplete])

  return (
    <motion.div
      key="loader"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center select-none"
      >
        {!imgError ? (
          <motion.img
            src="/logo.png"
            alt="MAD Tech Solutions"
            className="h-24 w-auto object-contain"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onError={() => setImgError(true)}
          />
        ) : (
          <LogoMark />
        )}
              <div className="mt-1 text-[9px] font-bold tracking-[0.35em] uppercase text-center text-blue-400">
            Est. 2025 · Make Anything Digital
          </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-12 w-52"
      >
        <div className="h-px overflow-hidden rounded-full bg-slate-200">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #1D4ED8, #2563EB, #60A5FA)',
              width: `${progress}%`,
              boxShadow: '0 0 12px rgba(37,99,235,0.4)',
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </div>
        <div className="mt-3 flex justify-between text-[10px] font-medium text-slate-400">
          <span>Loading experience</span>
          <span>{progress}%</span>
        </div>
      </motion.div>
    </motion.div>
  )
}
