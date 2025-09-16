'use client'

import { motion, AnimatePresence } from 'motion/react'
import React, { useEffect, useMemo, useState } from 'react'

const TypingEffect: React.FC = () => {
  const [currentText, setCurrentText] = useState<number>(0)
  const [displayText, setDisplayText] = useState<string>('')
  const [isTyping, setIsTyping] = useState<boolean>(true)

  const typingTexts = useMemo<string[]>(() => [
    'building websites solutions',
    'creating blazing fast APIs',
    'deploying scalable solutions',
  ], [])



  // Typing effect logic
  useEffect(() => {
    let timeout: NodeJS.Timeout
    const currentString = typingTexts[currentText]

    if (isTyping) {
      if (displayText.length < currentString.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentString.substring(0, displayText.length + 1))
        }, 100)
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, 1500)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1))
        }, 50)
      } else {
        setCurrentText((prev) => (prev + 1) % typingTexts.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isTyping, currentText, typingTexts])

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.25, duration: 0.5, ease: 'easeOut' }}
      className="text-xl md:text-2xl mb-6 h-8"
    >
      <span className="text-gray-600 dark:text-gray-300">
        Specialized in{' '}
        <span className="text-blue-500 dark:text-blue-400 font-semibold">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentText}
          
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -10, transition: { duration: 0.15 } }}
            >
              {displayText}
            </motion.span>
          </AnimatePresence>
          <motion.span
   
            animate="blink"
            className="ml-1 inline-block w-[2px] h-6 bg-blue-500 dark:bg-blue-400 align-middle"
          >
            &nbsp;
          </motion.span>
        </span>
      </span>
    </motion.div>
  )
}

export default TypingEffect