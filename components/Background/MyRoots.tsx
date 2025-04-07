"use client"
import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const MyRoots = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-16 px-4 bg-black">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-medium text-white">
              My <span className="text-martin-pink">Roots</span>
            </h2>
            
            <p className="text-gray-300 leading-relaxed">
              I am the youngest of two older brothers and the son of immigrant parents. Having paved the way for me to exist and shine in this world, each of them have faced obstacles in the pursuit of success and did so with purpose.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              The worst could be enacted upon them and yet... they remained calm and kind. Having watched from a distance from afar, this moment onward since I could remember was to execute and make impact where I can.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              From my upbringings, I was raised under the notion that hard work triumphs all. My parents taught me that to achieve what I've never had, I had to do things I've never done.
            </p>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden bg-black border border-martin-pink-light">
              {/* Placeholder for family image - replace with your actual image */}
              <div className="absolute inset-0 flex items-center justify-center text-martin-pink">
                Family Journey
                {/* Once I grab the image, I'll uncomment this:
                <Image 
                  src="/path-to-your-image.jpg"
                  alt="Family journey"
                  fill
                  className="object-cover"
                />
                */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default MyRoots
