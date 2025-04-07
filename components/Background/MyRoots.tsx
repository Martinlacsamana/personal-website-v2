"use client"
import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const MyRoots = () => {
  return (
    <div className="background-section flex flex-col items-center justify-center w-full py-16 px-4 bg-black">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          <div className="flex-1 space-y-6">
            <h2 className="text-1xl md:text-3xl font-base text-white">
              It stems from my <span className="text-martin-cyan font-semibold opacity-90">roots..</span>
            </h2>
            
            <p className="text-gray-300 leading-relaxed">
              I'm the youngest of two older brothers and the son of immigrant parents who paved the way for me to grow and thrive. Each of them faced their own share of hardship, yet met life’s harshest moments with calm and kindness.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              They've taught me many things, but what's stayed with me most is ambition rooted in kindness. Love your family. Love your friends. Love what you do. And when you feel lost — lead with love. Let it guide you through hard work, passion, and pain. Be the kind of person your future family can look up to.
            </p>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="relative w-[400px] max-w-md aspect-square rounded-lg overflow-hidden bg-black border border-martin-pink-light">


                
               
                <Image 
                  src="https://personal-website-random-assets.s3.us-west-1.amazonaws.com/CIMG1948.JPG"
                  alt="Family journey"
                  fill
                  className="object-cover"
                />
               
         
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default MyRoots
