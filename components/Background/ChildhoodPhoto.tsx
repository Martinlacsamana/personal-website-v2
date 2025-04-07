"use client"
import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const ChildhoodPhoto = () => {
  return (
    <div className="background-section flex flex-col items-center justify-center w-full py-16 px-4 bg-black">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center space-y-8"
        >
          <div className="relative w-full max-w-2xl aspect-video rounded-lg overflow-hidden bg-black border border-martin-cyan-light">
            {/* Placeholder for childhood photo - replace with your actual image */}
            <div className="absolute inset-0 flex items-center justify-center text-martin-cyan">
              Childhood Photo
              Boots n catz
              <Image 
                src="https://personal-website-company-images.s3.us-west-1.amazonaws.com/Background.png"
                alt="Watching my brothers"
                fill
                className="object-cover"
              />
             
            </div>
          </div>
          
          <div className="max-w-2xl text-center">
            <p className="text-gray-300 text-lg italic leading-relaxed">
              "My mission became clear: observe my role models, face the unknown, and make a difference where I can."
            </p>
          </div>
          
          <div className="flex justify-center w-full pt-8">
            <div className="h-px w-1/3 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ChildhoodPhoto
