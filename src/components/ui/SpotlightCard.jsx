import { useRef, useState } from 'react'

/**
 * Signature Linear/Vercel mouse-tracking spotlight effect.
 * Renders a radial gradient that follows the cursor inside the card.
 */
export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(37,99,235,0.1)',
  hoverBorderColor = 'rgba(37,99,235,0.25)',
}) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  const handleMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={`relative overflow-hidden transition-all duration-500 ${className}`}
      style={{
        borderColor: hovering ? hoverBorderColor : undefined,
      }}
    >
      {/* Spotlight radial gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          opacity: hovering ? 1 : 0,
          background: `radial-gradient(380px circle at ${pos.x}px ${pos.y}px, ${spotlightColor}, transparent 75%)`,
        }}
      />

      {/* Edge ambient glow — intensifies on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 rounded-[inherit]"
        style={{
          opacity: hovering ? 1 : 0,
          boxShadow: `inset 0 0 80px rgba(37,99,235,0.06)`,
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  )
}
