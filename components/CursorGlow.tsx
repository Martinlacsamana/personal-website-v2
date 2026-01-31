"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CursorGlow = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    // Check if device has hover capability (desktop)
    const hasHover = window.matchMedia('(hover: hover)').matches
    setIsDesktop(hasHover)

    if (!hasHover) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Don't render on mobile/touch devices
  if (!isDesktop) return null

  return (
    <motion.div
      className="fixed top-0 left-0 w-14 h-14 rounded-full bg-white/70 blur-2xl pointer-events-none z-50"
      animate={{
        x: mousePos.x - 56, // Center the glow (half of 112px width)
        y: mousePos.y - 56, // Center the glow (half of 112px height)
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 700,
        mass: 0.5,
      }}
    />
  )
}

export default CursorGlow
