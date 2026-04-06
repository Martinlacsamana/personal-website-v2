"use client"
import React from "react"
import { motion } from "framer-motion"

const cards = [
  {
    emoji: "☕",
    highlight: "Smiling at the barista",
    text: "and asking how their day is going.",
    color: "cyan",
    glowRgb: "92, 195, 250",
    highlightClass: "text-cyan-400",
    borderClass: "border-cyan-500/20",
    bgGradient: "from-cyan-500/10",
  },
  {
    emoji: "👕",
    highlight: "Complimenting a stranger",
    text: "on the street for a piece of outerwear I've never seen before.",
    color: "pink",
    glowRgb: "250, 117, 248",
    highlightClass: "text-fuchsia-400",
    borderClass: "border-fuchsia-500/20",
    bgGradient: "from-fuchsia-500/10",
  },
  {
    emoji: "💬",
    highlight: "Checking in on a co-worker",
    text: "after a call, just to ask how they're holding up.",
    color: "purple",
    glowRgb: "158, 110, 230",
    highlightClass: "text-violet-400",
    borderClass: "border-violet-500/20",
    bgGradient: "from-violet-500/10",
  },
]

const LeadingWithLove = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-24 px-4 bg-black">
      <div className="w-full max-w-4xl mx-auto flex flex-col space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-light tracking-tight"
        >
          <span className="text-white">I lead with </span>
          <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent font-semibold">love</span>
          <span className="text-white">. It could be...</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.color}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              whileHover={{
                y: -6,
                boxShadow: `0 20px 40px -12px rgba(${card.glowRgb}, 0.25)`,
              }}
              className={`relative rounded-2xl p-6 backdrop-blur-md bg-white/[0.04] border ${card.borderClass} overflow-hidden group transition-colors duration-300`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative z-10">
                <span className="text-2xl block mb-4">{card.emoji}</span>
                <p className="text-gray-300 leading-relaxed text-[15px]">
                  <span className={`${card.highlightClass} font-medium`}>{card.highlight}</span>{" "}
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="relative pl-6 border-l-2 border-cyan-500/40"
        >
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/60 via-cyan-500/20 to-transparent" />
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            <span className="font-semibold uppercase tracking-wide text-sm text-rose-300/90 block mb-2">My purpose</span>
            I lead with love because it fuels everything I do — the technology I build, the people I hope it reaches.
            I create because I believe <span className="text-white font-semibold">software can spark change far beyond what I could ever do alone.</span>{" "}
            My goal is simple: to leave the world better than I found it — for those I love today, and the family I hope to raise one day.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default LeadingWithLove
