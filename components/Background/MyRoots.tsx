"use client"
import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const MyRoots = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-24 px-4 bg-black">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-2xl md:text-4xl font-light tracking-tight">
              <span className="text-white">It stems from my </span>
              <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent font-semibold">roots...</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              I'm the youngest of two older brothers and the son of immigrant parents who paved the way for me to grow and thrive. Each of them faced hardship, yet met life's toughest moments with purpose.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              They've taught me many things -- but what stayed with me most is ambition rooted in kindness. Love your family. Love your friends. Love what you do.{" "}
              <span className="text-white font-bold">And when you feel lost, lead with love.</span>{" "}
              Let it guide you through hard work, passion, and pain. Above all, be the kind of person younger Martin would look up to.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-[400px] max-w-md aspect-square group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-500/30 via-fuchsia-500/20 to-violet-500/30 blur-md opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10">
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
    </div>
  )
}

export default MyRoots
