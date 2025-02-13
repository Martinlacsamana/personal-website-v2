"use client"

import { motion } from "framer-motion"

export default function FloatingPaths({ position }: { position: number }) {
  // Helper function to generate color with opacity
  const getColor = (i: number) => {
    // Cycle through cyberpunk-inspired colors
    switch (i % 8) {
      case 0:
        return `rgba(0,255,255,${0.1 + i * 0.02})`      // cyan
      case 1:
        return `rgba(255,0,127,${0.1 + i * 0.02})`      // hot pink
      case 2:
        return `rgba(0,255,196,${0.1 + i * 0.02})`      // neon turquoise
      case 3:
        return `rgba(255,165,0,${0.1 + i * 0.02})`       // neon orange
      case 4:
        return `rgba(255,71,209,${0.1 + i * 0.02})`     // magenta
      case 5:
        return `rgba(128,0,255,${0.1 + i * 0.02})`      // electric purple
      case 6:
        return `rgba(0,234,255,${0.1 + i * 0.02})`      // bright blue
      case 7:
        return `rgba(174,0,255,${0.1 + i * 0.02})`      // neon violet
      default:
        return `rgba(0,255,255,${0.1 + i * 0.02})`      // fallback to cyan
    }
  }

  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: getColor(i),
    width: 0.5 + i * 0.03,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full text-white" viewBox="0 0 696 316" fill="none">
        <title>Behind the Computer</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={path.color}
            strokeWidth={path.width}
            strokeOpacity={0.2 + path.id * 0.02}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  )
}
// Main container - full screen with black background
{/* <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black"> */}
{/* Animated background layer */}
{/* <div className="absolute inset-0">
  <FloatingPaths position={1} />
  <FloatingPaths position={-1} />
</div> */}
{/* </div> */}