import React, { useState, useEffect, useMemo } from 'react';

const Typewriter = ({ text, speed = 100, eraseSpeed = 50, delay = 1000, loop = true }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const textArray = useMemo(() => Array.isArray(text) ? text : [text], [text]);
  const currentText = textArray[currentTextIndex];
  
  useEffect(() => {
    const typeSpeed = isDeleting ? eraseSpeed : speed;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        } else if (loop) {
          // Start deleting after a delay
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          // Move to next text or loop back
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => 
            prevIndex === textArray.length - 1 ? 0 : prevIndex + 1
          );
        }
      }
    }, typeSpeed);
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentText, delay, loop, speed, eraseSpeed, textArray, currentTextIndex]);
  
  return (
    <span className="typewriter">
      {displayText}
      <span className="cursor">|</span>
    </span>
  );
};

export default Typewriter;
