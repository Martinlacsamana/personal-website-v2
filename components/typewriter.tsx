"use client"
import React, { useEffect, useRef, useState } from 'react';

interface Props {
    text: string;
    typingSpeed?: number;
    delay?: number;
    pauseAt?: number;           // Character index to pause at
    pauseDuration?: number;     // How long to pause (ms)
    cursorLingerDuration?: number; // Keep cursor blinking after typing completes (ms)
}

const TypewriterEffect: React.FC<Props> = ({ text, typingSpeed = 50, delay = 0, pauseAt, pauseDuration = 1000, cursorLingerDuration = 0 }) => {
  const displayedTextRef = useRef('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isCursorHidden, setIsCursorHidden] = useState(false);
  const [hasStarted, setHasStarted] = useState(delay === 0);
  const [, setTrigger] = useState(0); // State to trigger re-renders

  // Handle delay before typing starts
  useEffect(() => {
    if (delay > 0) {
      const delayTimeout = setTimeout(() => {
        setHasStarted(true);
      }, delay);
      return () => clearTimeout(delayTimeout);
    }
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    let index = 0;
    let timeoutId: NodeJS.Timeout;
    displayedTextRef.current = ''; // Reset displayed text when text prop changes
    setIsTypingComplete(false); // Reset typing complete status

    const typeNextChar = () => {
      if (index < text.length) {
        displayedTextRef.current += text.charAt(index);
        index++;
        setTrigger((prev) => prev + 1); // Trigger re-render
        
        // Check if we should pause at this index
        const nextDelay = (pauseAt !== undefined && index === pauseAt) ? pauseDuration : typingSpeed;
        timeoutId = setTimeout(typeNextChar, nextDelay);
      } else {
        setIsTypingComplete(true);
        // If cursorLingerDuration is set, keep cursor visible for that duration
        if (cursorLingerDuration > 0) {
          timeoutId = setTimeout(() => {
            setIsCursorHidden(true);
          }, cursorLingerDuration);
        } else {
          setIsCursorHidden(true);
        }
      }
    };

    timeoutId = setTimeout(typeNextChar, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [text, typingSpeed, hasStarted, pauseAt, pauseDuration, cursorLingerDuration]);

  return (
    <>
      <span>{displayedTextRef.current}<span className={isCursorHidden || !hasStarted ? 'hidden' : 'cursor'}>|</span></span>
      <style jsx>{`
        .cursor {
          opacity: 1;
          animation: blinkCursor 0.75s steps(40) infinite;
        }

        @keyframes blinkCursor {
          50% { opacity: 0; }
        }

        .hidden {
          display: none;
        }
      `}</style>
    </>
  );
};

export default TypewriterEffect;