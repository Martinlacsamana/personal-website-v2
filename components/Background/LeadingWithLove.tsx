"use client"
import React from "react"
import { motion } from "framer-motion"

const cards = [
  {
    emoji: "✨",
    highlight: "Complimenting a dope earring",
    text: "that my barista is wearing.",
    color: "cyan",
    glowRgb: "92, 195, 250",
    highlightClass: "text-cyan-400",
    borderClass: "border-cyan-500/20",
    bgGradient: "from-cyan-500/10",
  },
  {
    emoji: "🎁",
    highlight: "Buying a matching smiski",
    text: "for my coworker because she mentioned wanting one before.",
    color: "pink",
    glowRgb: "250, 117, 248",
    highlightClass: "text-fuchsia-400",
    borderClass: "border-fuchsia-500/20",
    bgGradient: "from-fuchsia-500/10",
  },
  {
    emoji: "🚪",
    highlight: "Offering to hold the door",
    text: "for a person who is still 30 feet away and awkwardly holding eye contact because it's too late to go back now.",
    color: "purple",
    glowRgb: "158, 110, 230",
    highlightClass: "text-violet-400",
    borderClass: "border-violet-500/20",
    bgGradient: "from-violet-500/10",
  },
]

const LeadingWithLove = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-16 px-4 bg-black">
      <div className="w-full max-w-4xl mx-auto flex flex-col space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-2xl md:text-4xl font-light tracking-tight"
        >
          <span className="text-white">I lead with </span>
          <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent font-semibold">love</span>
          <span className="text-white">.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              className={`relative rounded-2xl p-5 backdrop-blur-md bg-white/[0.04] border ${card.borderClass} overflow-hidden group transition-colors duration-300`}
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
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            <span className="font-semibold uppercase tracking-wide text-sm text-rose-300/90 block mb-2">My why</span>
            Life is beautiful because it's impermanent. It's fragile and fleeting — and love is how we weave color into our daily lives through the work we do, the attitude we manifest, and the smiles we share.
          </p>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mt-4">
            Love fuels everything I do. My goal is simple: to leave the world better than I found it — for those I love, and for the family I hope to raise. And I believe <span className="text-white font-semibold">software can spark change far beyond what I could ever do alone.</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default LeadingWithLove
