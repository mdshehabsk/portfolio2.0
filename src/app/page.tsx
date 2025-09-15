// 'use client'
// import { motion } from 'motion/react';
// import { Github, Facebook, Linkedin } from 'lucide-react';
// import Navbar from './components/Navbar';
// import TypingEffect from './components/TypingEffect';
// import Skill from './components/Skill';

// interface SocialLink {
//   Icon: React.ComponentType<{ size?: number }>;
//   href: string;
//   label: string;
// }

// export default function Home() {


//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
//       {/* Navbar */}
//       <Navbar />

//       {/* Hero Section */}
//       <main className="pt-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="min-h-screen flex items-center justify-center py-20">
//             <div className="max-w-4xl text-center">
//               {/* Availability Badge */}
//               <motion.div
//                 initial={{ scale: 0, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
//                 className="inline-flex items-center space-x-2 mb-8 justify-center border px-6 py-2 rounded-full"
//               >
//                 <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
//                 <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
//                   Available for work
//                 </span>
//               </motion.div>

//               {/* Main Title */}
//               <motion.h1
//                 initial={{ y: 50, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
//                 className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
//               >
//                 Full Stack{' '}
//                 <span className="text-gray-900 dark:text-white">
//                   Developer
//                 </span>
//               </motion.h1>

              
//               <TypingEffect/>
//               {/* Subtitle */}
//               <motion.p
//                 initial={{ y: 30, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
//                 className="text-lg md:text-xl mb-10 max-w-2xl leading-relaxed mx-auto text-gray-600 dark:text-gray-400"
//               >
//                 Passionate about creating digital experiences that combine beautiful design 
//                 with powerful functionality. Let's build something amazing together.
//               </motion.p>

//               {/* Buttons */}
//                             <motion.div
//                 initial={{ y: 30, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
//                 className="flex flex-col sm:flex-row gap-4 mb-12 justify-center"
//               >
//                 <motion.button
//                   whileHover={{ scale: 1.05, y: -2, boxShadow: "0 4px 20px rgba(16, 185, 129, 0.4)" }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-8 py-4 bg-emerald-500 dark:bg-emerald-600 cursor-pointer text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-emerald-600 dark:hover:bg-emerald-500 transition-all duration-200"
//                 >
//                   View Resume
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.05, y: -2 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-emerald-500 dark:hover:border-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all duration-200 cursor-pointer"
//                 >
//                   Book a Call
//                 </motion.button>
//               </motion.div>

//               {/* Social Links */}
//               <motion.div
//                 initial={{ y: 30, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
//                 className="flex space-x-6 justify-center"
//               >
//                 {([
//                   { Icon: Github, href: "#", label: "GitHub" },
//                   { Icon: Facebook, href: "#", label: "Facebook" },
//                   { Icon: Linkedin, href: "#", label: "LinkedIn" }
//                 ] as SocialLink[]).map(({ Icon, href, label }, index) => (
//                   <motion.a
//                     key={label}
//                     href={href}
//                     whileHover={{ scale: 1.2, y: -3 }}
//                     whileTap={{ scale: 0.9 }}
//                     transition={{ delay: index * 0.1 }}
//                     className="p-3 rounded-lg transition-colors duration-200 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
//                     aria-label={label}
//                   >
//                     <Icon size={24} />
//                   </motion.a>
//                 ))}
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </main>
//       <Skill/>
//     </div>
//   );
// }

'use client'
import { motion } from 'motion/react';
import { Github, Facebook, Linkedin } from 'lucide-react';
import Navbar from './components/Navbar';
import TypingEffect from './components/TypingEffect';
import Skill from './components/Skill';
import { useEffect, useRef } from 'react';

interface SocialLink {
  Icon: React.ComponentType<{ size?: number }>;
  href: string;
  label: string;
}

// Background Effect Component
// Background Effect Component
const BackgroundEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Canvas context not available');
      return;
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawGrid(); // Redraw grid on resize
    };

    const gridSize = 50;
    const glowRadius = 100;

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(100, 100, 100, 0.15)';
      ctx.lineWidth = 1;

      // Draw vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const drawGlow = (mouseX: number, mouseY: number) => {
      // Clear previous glow
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid(); // Redraw grid to prevent erasing

      // Create radial gradient for glow
      const gradient = ctx.createRadialGradient(
        mouseX,
        mouseY,
        0,
        mouseX,
        mouseY,
        glowRadius
      );
      gradient.addColorStop(0, 'rgba(16, 185, 129, 0.4)');
      gradient.addColorStop(1, 'rgba(16, 185, 129, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      drawGlow(mouseX, mouseY);
    };

    // Initialize canvas
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);

    // Initial draw
    drawGrid();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-auto"
    />
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 relative">
      {/* Background Effect */}
      <BackgroundEffect />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="pt-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-4xl text-center">
              {/* Availability Badge */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                className="inline-flex items-center space-x-2 mb-8 justify-center border px-6 py-2 rounded-full"
              >
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Available for work
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
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
                transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
                className="text-lg md:text-xl mb-10 max-w-2xl leading-relaxed mx-auto text-gray-600 dark:text-gray-400"
              >
                Passionate about creating digital experiences that combine beautiful design 
                with powerful functionality. Let's build something amazing together.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 mb-12 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2, boxShadow: "0 4px 20px rgba(16, 185, 129, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-emerald-500 dark:bg-emerald-600 cursor-pointer text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-emerald-600 dark:hover:bg-emerald-500 transition-all duration-200"
                >
                  View Resume
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-emerald-500 dark:hover:border-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all duration-200 cursor-pointer"
                >
                  Book a Call
                </motion.button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
                className="flex space-x-6 justify-center"
              >
                {([
                  { Icon: Github, href: "#", label: "GitHub" },
                  { Icon: Facebook, href: "#", label: "Facebook" },
                  { Icon: Linkedin, href: "#", label: "LinkedIn" }
                ] as SocialLink[]).map(({ Icon, href, label }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-3 rounded-lg transition-colors duration-200 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
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
      <Skill/>
    </div>
  );
}
