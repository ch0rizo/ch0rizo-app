import React, { useEffect, useRef } from 'react';

interface ScrambleTextProps {
  text: string;  // Accepts any text to be scrambled
  component?: React.ElementType;  // Allow any component type (h1, p, etc.)
}

const ScrambleText: React.FC<ScrambleTextProps> = ({ text, component: Component = 'h1' }) => {  // Default to h1
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const elementRef = useRef<HTMLHeadingElement | null>(null);
  let interval: NodeJS.Timeout | null = null;

  const scrambleText = () => {
    if (elementRef.current) {
      let iteration = 0;
      clearInterval(interval!);

      interval = setInterval(() => {
        elementRef.current!.innerText = text.split("").map((letter, index) => {
          if (index < iteration) {
            return text[index];  // Show correct letter
          }
          return letters[Math.floor(Math.random() * letters.length)]; // Show random letter
        }).join("");

        if (iteration >= text.length) {
          clearInterval(interval!);  // Clear the interval when done
        }
        iteration += 1;  // Increment iteration to scramble faster
      }, 50);  // Decrease time to make it faster
    }
  };

  useEffect(() => {
    scrambleText(); // Start scrambling when component mounts

    return () => {
      clearInterval(interval!); 
    };
  }, []);

  return (
    <Component ref={elementRef} style={{ color: 'white' }} />
  );
};

export default ScrambleText;