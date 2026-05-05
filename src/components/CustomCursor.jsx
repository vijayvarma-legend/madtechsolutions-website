import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const dotX = useSpring(mouseX, { damping: 40, stiffness: 900, mass: 0.1 })
  const dotY = useSpring(mouseY, { damping: 40, stiffness: 900, mass: 0.1 })
  const ringX = useSpring(mouseX, { damping: 28, stiffness: 350, mass: 0.5 })
  const ringY = useSpring(mouseY, { damping: 28, stiffness: 350, mass: 0.5 })

  useEffect(() => {
    const handleMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleOver = (e) => {
      const target = e.target
      const isLink =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('data-cursor') === 'pointer'
      setIsHovering(!!isLink)
    }

    window.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseover', handleOver)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseover', handleOver)
    }
  }, [isVisible, mouseX, mouseY])

  return (
    <div className="hidden md:block">
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          background: '#3B82F6',
        }}
        animate={{
          width: isHovering ? 6 : 5,
          height: isHovering ? 6 : 5,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          border: '1px solid rgba(59,130,246,0.5)',
        }}
        animate={{
          width: isHovering ? 44 : 32,
          height: isHovering ? 44 : 32,
          borderColor: isHovering
            ? 'rgba(96,165,250,0.8)'
            : 'rgba(37,99,235,0.4)',
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.25 }}
      />
    </div>
  )
}
