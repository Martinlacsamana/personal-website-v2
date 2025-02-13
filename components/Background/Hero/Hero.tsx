"use client"

import { motion } from "framer-motion"
import FloatingPaths from "./FloatingPaths"
import Computer from "./Computer"
import { LampDemo } from "@/components/ui/lamp"

export default function Hero({
  title = "Behind the Computer",
}: {
  title?: string
}) {
  return (
    // Main container - full screen with black background
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <LampDemo />
      
    </div>
  )
}