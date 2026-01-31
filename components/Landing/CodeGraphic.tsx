"use client"
import React from 'react'
import TypewriterEffect from '@/components/typewriter'

const CodeGraphic = () => {
    return (
        <div className="w-full flex justify-center brightness-90 px-4 sm:px-0">
            <div className="mockup-code w-full sm:w-2/3 text-xs md:text-base " id='dominoes'>
                <pre data-prefix="$"><code><TypewriterEffect text="npm install childhood" typingSpeed={40} delay={2000} cursorLingerDuration={1200} /></code></pre>
                <pre data-prefix=">" className="text-warning"><code><TypewriterEffect text="Dad: Don't be afraid of the unknown." typingSpeed={40} delay={4200} /></code></pre>
                <pre data-prefix=">" className="text-warning"><code><TypewriterEffect text="Mom: Be kind to the world." typingSpeed={40} delay={5800} /></code></pre>
                <pre data-prefix="?" className="text-error"><code><TypewriterEffect text="Brothers: Try not to f*ck up." typingSpeed={40} delay={7000} /></code></pre>
                <pre data-prefix=">" className="text-success"><code><TypewriterEffect text="Brothers: We love you." typingSpeed={40} delay={8300} /></code></pre>
                <pre data-prefix=">" className="text-gray-300"><code><TypewriterEffect text="... love you too." typingSpeed={40} delay={9700} pauseAt={3} pauseDuration={800} /></code></pre>
            </div>
        </div>
    )
}

export default CodeGraphic