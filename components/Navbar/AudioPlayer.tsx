"use client"

import React from "react"
import Image from "next/image"
import { Play, Pause } from "lucide-react"
import { cn } from "@/lib/utils"

type AudioPlayerProps = {
  isPlaying: boolean
  onToggle: () => void
  visible: boolean
}

const AudioPlayer = ({ isPlaying, onToggle, visible }: AudioPlayerProps) => {
  if (!visible) return null

  return (
    <button
      onClick={onToggle}
      className={cn(
        "group relative hidden sm:flex items-center gap-2 rounded-full border transition-all duration-200",
        "select-none cursor-pointer",
        "hover:scale-[1.02] active:scale-[0.98]",
        "border-white/10 bg-white/[0.06] px-2.5 py-1.5 backdrop-blur-md hover:bg-white/[0.11]"
      )}
    >
      <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full">
        <Image
          src="/songCover.jpeg"
          alt="Rich Girl album cover"
          fill
          className="object-cover"
          style={isPlaying ? { animation: "spin 20s linear infinite" } : undefined}
          sizes="28px"
        />
      </div>

      <div className="flex items-center gap-1.5 overflow-hidden max-w-[160px]">
        <span className="truncate text-xs font-medium leading-none tracking-tight text-white/90">
          Rich Girl
        </span>
        <span className="truncate text-[10px] font-light leading-none text-white/40">
          Hall &amp; Oates
        </span>
      </div>

      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors duration-150 group-hover:bg-white/20">
        {isPlaying ? (
          <Pause className="h-3 w-3 fill-white text-white" />
        ) : (
          <Play className="h-3 w-3 translate-x-[1px] fill-white text-white" />
        )}
      </div>
    </button>
  )
}

export default AudioPlayer
