"use client"

import React from "react"
import Image from "next/image"
import { Play, Pause } from "lucide-react"
import { cn } from "@/lib/utils"

type FloatingAudioPlayerProps = {
  isPlaying: boolean
  onToggle: () => void
  scrolled: boolean
}

const FloatingAudioPlayer = ({ isPlaying, onToggle, scrolled }: FloatingAudioPlayerProps) => {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "fixed z-50 flex items-center gap-3 rounded-full border border-white/10 bg-black/70 px-3 py-2 shadow-lg shadow-black/30 backdrop-blur-xl select-none cursor-pointer hover:scale-[1.02] active:scale-[0.98]",
        "transition-[opacity,transform] duration-500 ease-out",
        "bottom-4 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:right-6 sm:bottom-6",
        scrolled
          ? "sm:opacity-100 sm:translate-y-0"
          : "sm:opacity-0 sm:translate-y-4 sm:pointer-events-none"
      )}
    >
      <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full">
        <Image
          src="/songCover.jpeg"
          alt="Rich Girl album cover"
          fill
          className="object-cover"
          style={isPlaying ? { animation: "spin 20s linear infinite" } : undefined}
          sizes="32px"
        />
      </div>

      <div className="flex flex-col overflow-hidden">
        <span className="truncate text-xs font-medium leading-tight tracking-tight text-white/90">
          Rich Girl
        </span>
        <span className="truncate text-[10px] font-light leading-tight text-white/40">
          Hall &amp; Oates
        </span>
      </div>

      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10">
        {isPlaying ? (
          <Pause className="h-3.5 w-3.5 fill-white text-white" />
        ) : (
          <Play className="h-3.5 w-3.5 translate-x-[0.5px] fill-white text-white" />
        )}
      </div>
    </button>
  )
}

export default FloatingAudioPlayer
