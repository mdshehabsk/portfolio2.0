

import { motion } from 'motion/react'
import React from 'react'
import TypingEffect from './TypingEffect'
import { Github, Facebook, Linkedin, FileText, CalendarCheck2 } from 'lucide-react';

interface SocialLink {
  Icon: React.ComponentType<{ size?: number }>;
  href: string;
  label: string;
}

const Hero = () => {
  return (
    <main className="pt-20 px-6 relative z-10 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Light Mode - Floating Geometric Shapes */}
        <div className="absolute inset-0 dark:hidden">
          {/* Main gradient background */}
          <div className="absolute inset-0   "></div>
          
          {/* Floating geometric shapes */}
          <motion.div
            animate={{ 
              rotate: 360,
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-lg blur-sm"
          ></motion.div>
          
          <motion.div
            animate={{ 
              rotate: -360,
              x: [0, -40, 0],
              y: [0, 40, 0]
            }}
            transition={{ 
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              x: { duration: 10, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 7, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-br from-pink-400/25 to-orange-400/25 rounded-full blur-sm"
          ></motion.div>
          
          <motion.div
            animate={{ 
              rotate: 360,
              x: [0, 60, 0],
              y: [0, -20, 0]
            }}
            transition={{ 
              rotate: { duration: 30, repeat: Infinity, ease: "linear" },
              x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 9, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-60 left-1/2 w-8 h-8 bg-gradient-to-br from-indigo-400/30 to-cyan-400/30 rotate-45"
            style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
          ></motion.div>
          
          <motion.div
            animate={{ 
              rotate: -360,
              x: [0, -30, 0],
              y: [0, 25, 0]
            }}
            transition={{ 
              rotate: { duration: 18, repeat: Infinity, ease: "linear" },
              x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute bottom-40 right-20 w-20 h-20 bg-gradient-to-br from-teal-400/15 to-green-400/15 rounded-xl blur-md"
          ></motion.div>
          
          {/* Animated waves */}
          <motion.div
            animate={{
              scaleX: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-200/20 to-transparent"
            style={{
              clipPath: 'polygon(0% 100%, 100% 100%, 100% 60%, 80% 70%, 60% 50%, 40% 65%, 20% 45%, 0% 55%)'
            }}
          ></motion.div>
          
          <motion.div
            animate={{
              scaleX: [1, 0.8, 1],
              opacity: [0.15, 0.4, 0.15]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-purple-200/25 to-transparent"
            style={{
              clipPath: 'polygon(0% 100%, 100% 100%, 100% 70%, 85% 50%, 70% 75%, 50% 45%, 30% 60%, 15% 40%, 0% 65%)'
            }}
          ></motion.div>
          
          {/* Floating particles */}
          <motion.div
            animate={{
              y: [0, -100, 0],
              x: [0, 20, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0
            }}
            className="absolute bottom-20 left-10 w-2 h-2 bg-blue-400/40 rounded-full blur-sm"
          ></motion.div>
          
          <motion.div
            animate={{
              y: [0, -120, 0],
              x: [0, -15, 0],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeOut",
              delay: 2
            }}
            className="absolute bottom-16 right-16 w-1.5 h-1.5 bg-purple-400/50 rounded-full blur-sm"
          ></motion.div>
          
          <motion.div
            animate={{
              y: [0, -80, 0],
              x: [0, 30, 0],
              opacity: [0, 0.7, 0]
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeOut",
              delay: 4
            }}
            className="absolute bottom-24 left-1/2 w-1 h-1 bg-pink-400/60 rounded-full blur-sm"
          ></motion.div>
          
          {/* Large ambient orbs */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-blue-300/10 to-transparent rounded-full blur-3xl"
          ></motion.div>
          
          <motion.div
            animate={{
              scale: [1, 0.7, 1],
              opacity: [0.15, 0.25, 0.15]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
            className="absolute bottom-1/3 left-1/3 w-60 h-60 bg-gradient-radial from-purple-300/15 to-transparent rounded-full blur-2xl"
          ></motion.div>
        </div>

        {/* Dark Mode - Moonlight Rays */}
        <div className="absolute inset-0 hidden dark:block">
          {/* Dark gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900"></div>
          
          {/* Moonlight source */}
          <div className="absolute -top-20 right-20 w-32 h-32 bg-yellow-200/20 rounded-full blur-3xl"></div>
          
          {/* Animated moonlight rays */}
          <motion.div
            initial={{ opacity: 0.3, scaleY: 0 }}
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scaleY: [0, 1, 0.8]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0
            }}
            className="absolute top-0 right-32 w-2 h-96 bg-gradient-to-b from-yellow-200/40 via-blue-200/20 to-transparent origin-top transform rotate-12"
          ></motion.div>
          
          <motion.div
            initial={{ opacity: 0.2, scaleY: 0 }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              scaleY: [0, 1, 0.7]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute top-0 right-20 w-3 h-80 bg-gradient-to-b from-yellow-100/30 via-indigo-200/15 to-transparent origin-top transform -rotate-6"
          ></motion.div>
          
          <motion.div
            initial={{ opacity: 0.4, scaleY: 0 }}
            animate={{ 
              opacity: [0.4, 0.7, 0.4],
              scaleY: [0, 1, 0.9]
            }}
            transition={{ 
              duration: 3.5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-0 right-40 w-1.5 h-72 bg-gradient-to-b from-yellow-300/50 via-blue-100/25 to-transparent origin-top transform rotate-24"
          ></motion.div>
          
          <motion.div
            initial={{ opacity: 0.25, scaleY: 0 }}
            animate={{ 
              opacity: [0.25, 0.45, 0.25],
              scaleY: [0, 1, 0.6]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1.5
            }}
            className="absolute top-0 right-8 w-2.5 h-64 bg-gradient-to-b from-yellow-200/35 via-purple-200/20 to-transparent origin-top transform -rotate-18"
          ></motion.div>

          {/* Subtle particle effects */}
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-40 right-16 w-1 h-1 bg-yellow-200/60 rounded-full blur-sm"
          ></motion.div>
          
          <motion.div
            animate={{
              x: [0, -40, 0],
              y: [0, 40, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-60 right-32 w-0.5 h-0.5 bg-blue-200/70 rounded-full blur-sm"
          ></motion.div>

          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-yellow-200/10 via-blue-200/5 to-transparent rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-4xl text-center">
            {/* Availability Badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center space-x-2 mb-8 justify-center border px-6 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
            >
              <div className="w-3 h-3 rounded-full animate-pulse bg-blue-600"></div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Available for work
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Full Stack{' '}
              <span className="text-gray-900 dark:text-white">
                Developer
              </span>
            </motion.h1>

            <TypingEffect/>

            {/* Subtitle */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              className="text-lg md:text-xl mb-10 max-w-2xl leading-relaxed mx-auto text-gray-600 dark:text-gray-400"
            >
              {`Love To Work With Complex Challenge, Build And Supply Innovation Solution With Cutting Edge Technology At The Market`}
            </motion.p>

            {/* Buttons */}
             <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
      className="flex flex-col sm:flex-row gap-4 mb-12 justify-center"
    >
      <motion.a
        whileHover={{ scale: 1.05, y: -2, boxShadow: "0 4px 20px rgba(59, 130, 246, 0.4)" }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 bg-gray-700 dark:bg-gray-600 cursor-pointer text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-blue-500 dark:hover:bg-blue-500 transition-all duration-200 backdrop-blur-sm flex items-center gap-2"
        href='https://drive.google.com/file/d/14G5RhIyzOxblgLkL5BlxVY__L1vUqJge/view?usp=drive_link'
        target='_blank'
      >
        <FileText size={20} />
        View Resume
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-200 cursor-pointer bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm flex items-center gap-2"
        href="https://cal.com/mdshehabsk"
        target='_blank'
      >
        <CalendarCheck2  size={20} />
        Book a Call
      </motion.a>
    </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              className="flex space-x-6 justify-center"
            >
              {([
                { Icon: Github, href: "https://www.github.com/mdshehabsk", label: "GitHub" },
                { Icon: Facebook, href: "https://www.facebook.com/1mdshehabsk", label: "Facebook" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/shehab-uddin-1281b0210/", label: "LinkedIn" }
              ] as SocialLink[]).map(({ Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-3 rounded-lg transition-colors duration-200 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-700/50 backdrop-blur-sm"
                  aria-label={label}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero