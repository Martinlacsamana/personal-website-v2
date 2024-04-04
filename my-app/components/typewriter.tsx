"use client"
import React, { useEffect, useState } from 'react';

interface Props {
    text: string;
    typingSpeed?: number;
}

const TypewriterEffect: React.FC<Props> = ({ text, typingSpeed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        console.log(displayedText)
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        setIsTypingComplete(true); // Typing is complete, stop showing the cursor
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [text, typingSpeed]);

  return (
    <>
      <p>{displayedText}<span className={isTypingComplete ? 'hidden' : 'cursor'}>|</span></p>
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