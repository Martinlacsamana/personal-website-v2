"use client"
import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const ChildhoodPhoto = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-24 px-4 bg-black">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col items-center space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-2xl aspect-video group"
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-500/25 via-transparent to-fuchsia-500/25 blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://personal-website-company-images.s3.us-west-1.amazonaws.com/Background.png"
                alt="Watching my brothers"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="max-w-2xl text-center px-4"
          >
            <p className="text-xl md:text-2xl font-light leading-relaxed tracking-tight bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent">
              &ldquo;My mission became clear: observe my role models, face the unknown, and make a difference where I can.&rdquo;
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center w-full pt-4"
          >
            <div className="h-px w-1/3 bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ChildhoodPhoto
