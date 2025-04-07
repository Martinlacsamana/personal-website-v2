"use client"
import React from "react"
import { motion } from "framer-motion"

const Purpose = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-16 px-4 bg-black">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-medium text-white">
            My <span className="text-martin-purple">Purpose</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black bg-opacity-80 border border-martin-purple-light p-6 rounded-lg">
              <h3 className="text-xl font-medium text-martin-purple mb-4">Technology with Impact</h3>
              <p className="text-gray-300 leading-relaxed">
                I lead with love because in a world filled with chaos, it doesn't hurt to be someone who puts a little bit of the pieces together. I build because technology can bring change to people more than I can do alone.
              </p>
            </div>
            
            <div className="bg-black bg-opacity-80 border border-martin-cyan-light p-6 rounded-lg">
              <h3 className="text-xl font-medium text-martin-cyan mb-4">Building for Tomorrow</h3>
              <p className="text-gray-300 leading-relaxed">
                I lead with love because I'll have children one day (hopefully) who will live in a world that I want to be better for them. The technology I aim to build and the target audience that I hope it reaches are guided by this vision.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center w-full pt-8">
            <div className="h-px w-1/2 bg-gradient-to-r from-transparent via-martin-purple to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Purpose
