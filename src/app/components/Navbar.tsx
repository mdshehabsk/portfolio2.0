


'use client'
import { Moon, Sun, User, Briefcase, Code, FolderOpen, } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const links = [
  {
    label: "About",
    link: "#about",
    icon: User
  },
  {
    label: "Experience", 
    link: "#experience",
    icon: Briefcase
  },
  {
    label: "Skills",
    link: "#skills", 
    icon: Code
  },
  {
    label: "Projects",
    link: "#projects",
    icon: FolderOpen
  }
];

const Navbar = () => {
  // Use React state instead of localStorage for Claude.ai compatibility
  const [isDark, setIsDark] = useState(false);


  // Apply theme to document
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
      document.documentElement.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      {/* Desktop Navbar - Top */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-lg border-b transition-colors duration-300 bg-white/70 dark:bg-gray-900/80 border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link 
            className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            href='/'
          >
            Portfolio
          </Link>

          {/* Navigation Menu */}
          <div className="flex items-center space-x-8">
            {links.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-all duration-200 text-gray-600 dark:text-yellow-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-110 active:scale-95 cursor-pointer"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navbar - Bottom */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-gray-900/90 border-t border-gray-200/50 dark:border-gray-700/50">
        <div className="px-4 py-2">
          {/* Mobile Menu Items */}
          <div className="flex items-center justify-around">
            {links.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={index}
                  href={item.link}
                  className="flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200 hover:bg-gray-100/60 dark:hover:bg-gray-800/60 active:scale-95 group"
                >
                  <IconComponent 
                    size={20} 
                    className="text-gray-600 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" 
                  />
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {item.label}
                  </span>
                </a>
              );
            })}
            
            {/* Theme Toggle for Mobile */}
            <button
              onClick={toggleTheme}
              className="flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200 hover:bg-gray-100/60 dark:hover:bg-gray-800/60 active:scale-95 group"
            >
              {isDark ? (
                <Sun size={20} className="text-yellow-500 group-hover:text-yellow-400 transition-colors duration-200" />
              ) : (
                <Moon size={20} className="text-gray-600 group-hover:text-gray-800 transition-colors duration-200" />
              )}
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                Theme
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Top Bar - Just Logo */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 px-4 py-3 backdrop-blur-lg bg-white/70 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="flex items-center justify-center">
          <Link 
            className="text-xl font-bold text-gray-900 dark:text-white"
            href='/'
          >
            Portfolio
          </Link>
        </div>
      </div>



    
    </>
  )
}

export default Navbar