"use client"
import React, { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Links from "./Links"
import AudioPlayer from "./AudioPlayer"
import FloatingAudioPlayer from "./FloatingAudioPlayer"
import { cn } from "@/lib/utils"

/** Past this offset, switch into pill mode (when currently wide). */
const SCROLL_ENTER = 40
/**
 * Past this offset, switch back to wide (when currently pill).
 * Lower than SCROLL_ENTER so layout changes near the boundary cannot
 * bounce scrollY across one threshold forever (Schmitt trigger).
 */
const SCROLL_LEAVE = 20

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  const handleEnded = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = 0
    audio.play()
  }, [])

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduceMotion(mq.matches)
    const onChange = () => setReduceMotion(mq.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled((prev) => {
        if (prev) {
          return y >= SCROLL_LEAVE
        }
        return y > SCROLL_ENTER
      })
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
    <audio ref={audioRef} src="/song.mp3" onEnded={handleEnded} preload="metadata" />
    <div
      className={cn(
        "pointer-events-none sticky top-0 z-50 flex w-full justify-center",
        scrolled && "px-3 pt-2 sm:px-4"
      )}
    >
      <nav
        aria-label="Main"
        className={cn(
          "pointer-events-auto flex w-full min-h-0 items-center justify-between gap-4 text-white",
          !reduceMotion &&
            "transition-[max-width,border-radius,padding,background-color,box-shadow,border-color] duration-300 ease-out",
          scrolled
            ? "max-w-3xl rounded-full border border-white/15 bg-white/10 px-4 py-1.5 shadow-lg shadow-black/25 backdrop-blur-xl sm:px-6 sm:py-1.5"
            : "navbar max-w-full min-h-0 rounded-none border border-transparent bg-black opacity-80 backdrop-blur-sm"
        )}
      >
        <div className="flex-1">
          <Link
            href="/"
            className={cn(
              scrolled
                ? "btn btn-ghost min-h-0 h-auto px-2 py-0.5 transition-opacity hover:opacity-80"
                : "btn btn-ghost text-xl font-light tracking-[0] leading-6 whitespace-nowrap text-white text-opacity-90 transition-opacity hover:text-opacity-100"
            )}
          >
            {scrolled ? (
              <Image
                src="/mar-logo.png"
                alt="Mar logo"
                width={120}
                height={40}
                className="h-9 w-auto"
                priority
              />
            ) : (
              "Martin"
            )}
          </Link>
        </div>

        <AudioPlayer isPlaying={isPlaying} onToggle={togglePlay} visible={!scrolled} />

        <div
          className={cn(
            "flex flex-1 justify-end tracking-[0] whitespace-nowrap",
            scrolled
              ? "font-extralight text-[15px] leading-tight text-white text-opacity-100"
              : "font-extralight text-[15.6px] leading-6 text-white text-opacity-100"
          )}
        >
          <ul
            className={cn(
              "menu menu-horizontal px-1",
              scrolled && "menu-sm min-h-0 py-0"
            )}
          >
            <li
              tabIndex={0}
              className="rounded-lg hover:bg-white/10 hover:text-white"
            >
              <Link href="/background">About Me</Link>
            </li>
            <Links pillStyle={scrolled} />
          </ul>
        </div>
      </nav>
    </div>
    <FloatingAudioPlayer isPlaying={isPlaying} onToggle={togglePlay} scrolled={scrolled} />
    </>
  )
}

export default Navbar
