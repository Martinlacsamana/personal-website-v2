"use client"
import React from "react"
import { motion } from "framer-motion"
import { Spotlight } from "@/components/ui/spotlight"

const PersonalityIntro = () => {
  // TODO: ADD A SPOTLIGHT EFFECT HERE FROM ACERNITY UI
  return (
    <div id="background-intro" className="background-section flex flex-col items-center justify-center w-full py-16 px-4 bg-black scroll-mt-32">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center"
        >
           <h2 className="text-center text-2xl md:text-2xl lg:text-4xl font-light tracking-tight text-white">
            I am authentically myself - overtly<span className="text-cyan-400 opacity-90 font-semibold"> ambitious</span>, partly <span className="text-rose-400/90 italic">sarcastic</span>,{" "}
            and constantly <span className="text-slate-400 underline">caffeinated</span>. <span className="spotlight-target">Most importantly...</span>
          </h2>
        </motion.div>
      </div>

      {/* <Spotlight className="spotlight-target" /> */}
    </div>
  )
}

export default PersonalityIntro
