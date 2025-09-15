'use client'
import { Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  // Initialize theme from localStorage or default to light
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === 'dark';
    }
    return false;
  });

  // Apply theme to document and save to localStorage
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md border-b transition-colors duration-300 bg-gray-50/80 dark:bg-gray-900/80 border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          Portfolio
        </motion.div>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {['About', 'Experience', 'Skills'].map((item, index) => (
            <motion.a
              key={item}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              href={`#${item.toLowerCase()}`}
              className="font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Right side - Theme toggle & Contact */}
        <div className="flex items-center space-x-4">
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-colors duration-200 text-gray-600 dark:text-yellow-400 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>

          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="px-6 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar