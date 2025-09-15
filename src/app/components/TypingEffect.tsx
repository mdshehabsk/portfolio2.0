'use client'

import { motion } from 'motion/react'


import React, { useEffect, useState } from 'react'

const TypingEffect = () => {
      const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const typingTexts = [
    "building modern websites",
    "creating robust APIs", 
    "deploying scalable solutions",
    "crafting user experiences"
  ];

  // Typing effect
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentString = typingTexts[currentText];
    
    if (isTyping) {
      if (displayText.length < currentString.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentString.substring(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50);
      } else {
        setCurrentText((prev) => (prev + 1) % typingTexts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentText, typingTexts]);
  return (
 
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                className="text-xl md:text-2xl mb-6 h-8"
              >
                <span className="text-gray-600 dark:text-gray-300">
                  Specialized in{' '}
                  <span className="text-emerald-600 font-semibold">
                    {displayText}
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="ml-1"
                    >
                      |
                    </motion.span>
                  </span>
                </span>
              </motion.div>
  )
}

export default TypingEffect