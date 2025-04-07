"use client"
import React from "react"
import { motion } from "framer-motion"

const LeadingWithLove = () => {
  return (
    <div className="background-section flex flex-col items-center justify-center w-full py-16 px-4 bg-black">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-light text-white">
            I lead with <span className="text-martin-cyan font-semibold">love</span>. It could be...
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Barista */}
            <motion.div 
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(92, 195, 250, 0.2)' }}
              transition={{ duration: 0.2 }}
              className="bg-black bg-opacity-90 p-6 rounded-lg relative overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-martin-cyan to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 border border-martin-cyan-light rounded-lg"></div>
              
              <div className="mb-3 text-martin-cyan text-2xl">☕</div>
              <p className="text-gray-300 leading-relaxed relative z-10">
                <span className="text-martin-cyan opacity-90 font-medium">Smiling at the barista</span> and asking how their day is going.
              </p>
            </motion.div>
            
            {/* Card 2 - Stranger */}
            <motion.div 
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(250, 117, 248, 0.2)' }}
              transition={{ duration: 0.2 }}
              className="bg-black bg-opacity-90 p-6 rounded-lg relative overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-martin-pink to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 border border-martin-pink-light rounded-lg"></div>
              
              <div className="mb-3 text-martin-pink text-2xl">👕</div>
              <p className="text-gray-300 leading-relaxed relative z-10">
                <span className="text-martin-pink opacity-90 font-medium">Complimenting a stranger</span> on the street for a piece of outerwear I've never seen before.
              </p>
            </motion.div>
            
            {/* Card 3 - Coworker */}
            <motion.div 
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(158, 110, 230, 0.2)' }}
              transition={{ duration: 0.2 }}
              className="bg-black bg-opacity-90 p-6 rounded-lg relative overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-martin-purple to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 border border-martin-purple-light rounded-lg"></div>
              
              <div className="mb-3 text-martin-purple text-2xl">💬</div>
              <p className="text-gray-300 leading-relaxed relative z-10">
                <span className="text-martin-purple font-medium">Checking in on a co-worker</span> after a call, just to ask how they're holding up.
              </p>
            </motion.div>
          </div>
          
          <p className="text-gray-300 text-lg leading-relaxed max-w-full">
            <span className="font-bold uppercase text-rose-300">My purpose? </span>
            I lead with love because it fuels everything I do — the technology I build, the people I hope it reaches.
            I create because I believe <span className="text-white font-semibold">software can spark change far beyond what I could ever do alone. </span>
            My goal is simple: to leave the world better than I found it — for those I love today, and the family I hope to raise one day.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default LeadingWithLove
