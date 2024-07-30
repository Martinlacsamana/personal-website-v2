"use client"
import React, { useEffect, useRef, useState } from 'react';

interface Props {
    text: string;
    typingSpeed?: number;
}

const TypewriterEffect: React.FC<Props> = ({ text, typingSpeed = 50 }) => {
  const displayedTextRef = useRef('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [, setTrigger] = useState(0); // State to trigger re-renders

  useEffect(() => {
    let index = 0;
    displayedTextRef.current = ''; // Reset displayed text when text prop changes
    setIsTypingComplete(false); // Reset typing complete status

    const interval = setInterval(() => {
      if (index < text.length) {
        displayedTextRef.current += text.charAt(index);
        index++;
        setTrigger((prev) => prev + 1); // Trigger re-render
      } else {
        clearInterval(interval);
        setIsTypingComplete(true); // Typing is complete, stop showing the cursor
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [text, typingSpeed]);

  return (
    <>
      <p>{displayedTextRef.current}<span className={isTypingComplete ? 'hidden' : 'cursor'}>|</span></p>
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