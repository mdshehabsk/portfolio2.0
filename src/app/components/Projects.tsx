

// import vittorio1 from '@/image/projects/vittorio1.webp'
// import vittorio2 from '@/image/projects/vittorio2.png'
// import vittorio3 from '@/image/projects/vittorio3.png'

// import vlada1 from '@/image/projects/vlada1.png'
// import vlada2 from '@/image/projects/vlada2.png'
// import vlada3 from '@/image/projects/vlada3.png'


// import { useState } from 'react';
// import { motion } from 'motion/react';
// import Image, { StaticImageData } from 'next/image';
// import { 
//   ChevronLeft, 
//   ChevronRight, 
//   ExternalLink, 
//   Github,
// } from 'lucide-react';

// // Define the Project interface for TypeScript
// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   features: string[];
//   technologies: string[];
//   images: StaticImageData[];
//   liveUrl: string;
 
// }

// const ProjectsSection = () => {
//   const [activeProject, setActiveProject] = useState<number>(0);
//   const [activeImageIndex, setActiveImageIndex] = useState<Record<number, number>>({});

// // Sample project data
// // Sample project data
// const projects: Project[] = [
//   {
//     id: 1,
//     title: 'Vittorio Lusso Leather Goods Platform',
//     description: 'A full-stack e-commerce platform specializing in premium leather goods with a seamless shopping experience',
//     features: [
//       'Secure user authentication and authorization',
//       'Advanced product catalog with filters for leather types and craftsmanship',
//       'Customizable shopping cart with saved preferences',
//       'Payment integration with SSL-COMMERCE',
//       'Real-time order tracking and status updates',
//       'Admin dashboard with detailed inventory analytics',
//     ],
//     technologies: ['Next.js', 'Node.js', 'MongoDB', 'RTK Query', 'SSL-COMMERCE', 'Tailwind CSS'],
//     images: [vittorio1, vittorio2, vittorio3],
//     liveUrl: 'https://vittoriolusso.com',
//   },
//   {
//     id: 2,
//     title: 'Vlada Women’s Clothing Store',
//     description: 'A modern e-commerce platform tailored for women’s clothing, specializing in sarees and other apparel',
//     features: [
//       'Curated product catalog with saree style and fabric filters',
//       'Streamlined shopping cart and checkout process',
//       'Payment integration with SSL-COMMERCE',
//       'Order history and delivery tracking',
//       'Admin panel for managing clothing inventory and promotions',
//     ],
//     technologies: ['Next.js', 'Node.js', 'MongoDB', 'React Query', 'SSL-COMMERCE', 'Tailwind CSS'],
//     images: [vlada1, vlada2, vlada3],
//     liveUrl: 'https://vlada.store',
//   },
// ];

//   const nextProject = () => {
//     setActiveProject((prev) => (prev + 1) % projects.length);
//   };

//   const prevProject = () => {
//     setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
//   };

//   const nextImage = (projectId: number, totalImages: number) => {
//     setActiveImageIndex((prev) => ({
//       ...prev,
//       [projectId]: ((prev[projectId] || 0) + 1) % totalImages,
//     }));
//   };

//   const prevImage = (projectId: number, totalImages: number) => {
//     setActiveImageIndex((prev) => ({
//       ...prev,
//       [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages,
//     }));
//   };

//   const currentProject = projects[activeProject];
//   const currentImageIndex = activeImageIndex[currentProject.id] || 0;

//   return (
//     <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300" id='projects' >
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <motion.div
//           initial={{ y: 30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
//             Personal Projects
//           </h2>
//           <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
//             A showcase of my development journey through various projects and technical challenges
//           </p>
//         </motion.div>

//         {/* Project Carousel */}
//         <div className="relative">
//           {/* Main Content */}
//           <motion.div
//             key={activeProject}
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className="grid lg:grid-cols-2 gap-12 items-start"
//           >
//             {/* Project Images */}
//             <div className="space-y-4">
//               {/* Main Image */}
//               <div className="relative group rounded-xl overflow-hidden shadow-xl bg-white dark:bg-gray-800">
//                 <div className="relative h-96 overflow-hidden">
//                   <Image
//                     src={currentProject.images[currentImageIndex]}
//                     alt={`${currentProject.title} - Image ${currentImageIndex + 1}`}
//                     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                     width={1000}
//                     height={1000}
//                   />
                  
                 
                  
//                   {/* Image Navigation */}
//                   {currentProject.images.length > 1 && (
//                     <>
//                       <button
//                         onClick={() => prevImage(currentProject.id, currentProject.images.length)}
//                         className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200 cursor-pointer "
//                         aria-label="Previous image"
//                       >
//                         <ChevronLeft size={18} />
//                       </button>
//                       <button
//                         onClick={() => nextImage(currentProject.id, currentProject.images.length)}
//                         className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200 cursor-pointer "
//                         aria-label="Next image"
//                       >
//                         <ChevronRight size={18} />
//                       </button>
//                     </>
//                   )}

//                   {/* Image Indicators */}
//                   {currentProject.images.length > 1 && (
//                     <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
//                       {currentProject.images.map((_, imgIndex) => (
//                         <button
//                           key={imgIndex}
//                           onClick={() =>
//                             setActiveImageIndex((prev) => ({
//                               ...prev,
//                               [currentProject.id]: imgIndex,
//                             }))
//                           }
//                           className={`w-2 h-2 rounded-full transition-all duration-200 ${
//                             imgIndex === currentImageIndex
//                               ? 'bg-white scale-125'
//                               : 'bg-white/50 hover:bg-white/75'
//                           }`}
//                           aria-label={`Go to image ${imgIndex + 1}`}
//                         />
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Thumbnail Strip */}
//               {currentProject.images.length > 1 && (
//                 <div className="flex space-x-2 overflow-x-auto pb-2">
//                   {currentProject.images.map((image, imgIndex) => (
//                     <button
//                       key={imgIndex}
//                       onClick={() =>
//                         setActiveImageIndex((prev) => ({
//                           ...prev,
//                           [currentProject.id]: imgIndex,
//                         }))
//                       }
//                       className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200  cursor-pointer ${
//                         imgIndex === currentImageIndex
//                           ? 'border-gray-400 dark:border-gray-500'
//                           : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
//                       }`}
//                       aria-label={`Select thumbnail ${imgIndex + 1}`}
//                     >
//                       <Image
//                         src={image}
//                         alt={`Thumbnail ${imgIndex + 1} for ${currentProject.title}`}
//                         className="w-full h-full object-cover"
//                         width={1000}
//                         height={10000}
//                       />
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Project Details */}
//             <div className="space-y-6">
//               <div>
//                 <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
//                   {currentProject.title}
//                 </h3>
//                 <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
//                   {currentProject.description}
//                 </p>
//               </div>

//               {/* Features */}
//               <div>
//                 <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
//                   Key Features
//                 </h4>
//                 <ul className="space-y-3">
//                   {currentProject.features.map((feature, featureIndex) => (
//                     <li
//                       key={featureIndex}
//                       className="flex items-start space-x-3 text-gray-700 dark:text-gray-300"
//                     >
//                       <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 flex-shrink-0" />
//                       <span className="leading-relaxed">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Technologies */}
//               <div>
//                 <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
//                   Built With
//                 </h4>
//                 <div className="flex flex-wrap gap-2">
//                   {currentProject.technologies.map((tech, techIndex) => (
//                     <span
//                       key={techIndex}
//                       className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300 border border-gray-300 dark:border-gray-700"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex space-x-4 pt-4">
//                 <a
//                   href={currentProject.liveUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center space-x-2 px-5 py-2.5 rounded-lg font-medium text-sm bg-gray-900 text-white dark:bg-gray-800 dark:text-gray-200 border dark:border-gray-700 hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200"
//                   aria-label={`View live demo of ${currentProject.title}`}
//                 >
//                   <ExternalLink size={16} />
//                   <span>Live Demo</span>
//                 </a>
               
//               </div>
//             </div>
//           </motion.div>

//           {/* Project Navigation */}
//           <div className="flex items-center justify-between mt-12">
//             <button
//               onClick={prevProject}
//               className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
//               aria-label="Previous project"
//             >
//               <ChevronLeft size={20} />
//               <span>Previous</span>
//             </button>

//             {/* Project Indicators */}
//             <div className="flex space-x-2">
//               {projects.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setActiveProject(index)}
//                   className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
//                     index === activeProject
//                       ? 'bg-gray-900 dark:bg-white'
//                       : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
//                   }`}
//                   aria-label={`Go to project ${index + 1}`}
//                 />
//               ))}
//             </div>

//             <button
//               onClick={nextProject}
//               className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
//               aria-label="Next project"
//             >
//               <span>Next</span>
//               <ChevronRight size={20} />
//             </button>
//           </div>

//           {/* Project Counter */}
//           <div className="text-center mt-8 text-sm text-gray-400 dark:text-gray-500">
//             {activeProject + 1} / {projects.length}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;


import vittorio1 from '@/image/projects/vittorio1.webp'
import vittorio2 from '@/image/projects/vittorio2.png'
import vittorio3 from '@/image/projects/vittorio3.png'

import vlada1 from '@/image/projects/vlada1.png'
import vlada2 from '@/image/projects/vlada2.png'
import vlada3 from '@/image/projects/vlada3.png'

import { useState } from 'react';
import { motion } from 'motion/react';
import Image, { StaticImageData } from 'next/image';
import { 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink,
} from 'lucide-react';

// Define the Project interface for TypeScript
interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  images: StaticImageData[];
  liveUrl: string;
}

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<number>(0);
  const [activeImageIndex, setActiveImageIndex] = useState<Record<number, number>>({});

  // Sample project data
  const projects: Project[] = [
    {
      id: 1,
      title: 'Vittorio Lusso Leather Goods Platform',
      description: 'A full-stack e-commerce platform specializing in premium leather goods with a seamless shopping experience',
      features: [
        'Secure user authentication and authorization',
        'Advanced product catalog with filters for leather types and craftsmanship',
        'Customizable shopping cart with saved preferences',
        'Payment integration with SSL-COMMERCE',
        'Real-time order tracking and status updates',
        'Admin dashboard with detailed inventory analytics',
      ],
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'RTK Query', 'SSL-COMMERCE', 'Tailwind CSS'],
      images: [vittorio1, vittorio2, vittorio3],
      liveUrl: 'https://vittoriolusso.com',
    },
    {
      id: 2,
      title: 'Vlada Women’s Clothing Store',
      description: 'A modern e-commerce platform tailored for women’s clothing, specializing in sarees and other apparel',
      features: [
        'Curated product catalog with saree style and fabric filters',
        'Streamlined shopping cart and checkout process',
        'Payment integration with SSL-COMMERCE',
        'Order history and delivery tracking',
        'Admin panel for managing clothing inventory and promotions',
      ],
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'React Query', 'SSL-COMMERCE', 'Tailwind CSS'],
      images: [vlada1, vlada2, vlada3],
      liveUrl: 'https://vlada.store',
    },
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextImage = (projectId: number, totalImages: number) => {
    setActiveImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages,
    }));
  };

  const prevImage = (projectId: number, totalImages: number) => {
    setActiveImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages,
    }));
  };

  const currentProject = projects[activeProject];
  const currentImageIndex = activeImageIndex[currentProject.id] || 0;

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300" id='projects'>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Portfolio Projects
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            A showcase of my development journey through various projects and technical challenges
          </p>
        </motion.div>

        {/* Project Carousel */}
        <div className="relative">
          {/* Main Content */}
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            {/* Project Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative group rounded-xl overflow-hidden shadow-xl bg-white dark:bg-gray-800">
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src={currentProject.images[currentImageIndex]}
                    alt={`${currentProject.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    width={1000}
                    height={1000}
                  />
                  {/* Image Navigation */}
                  {currentProject.images.length > 1 && (
                    <>
                      <button
                        onClick={() => prevImage(currentProject.id, currentProject.images.length)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200 cursor-pointer"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        onClick={() => nextImage(currentProject.id, currentProject.images.length)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200 cursor-pointer"
                        aria-label="Next image"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </>
                  )}

                  {/* Image Indicators */}
                  {currentProject.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      {currentProject.images.map((_, imgIndex) => (
                        <button
                          key={imgIndex}
                          onClick={() =>
                            setActiveImageIndex((prev) => ({
                              ...prev,
                              [currentProject.id]: imgIndex,
                            }))
                          }
                          className={`w-2 h-2 rounded-full transition-all duration-200 ${
                            imgIndex === currentImageIndex
                              ? 'bg-white scale-125'
                              : 'bg-white/50 hover:bg-white/75'
                          }`}
                          aria-label={`Go to image ${imgIndex + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Thumbnail Strip */}
              {currentProject.images.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  {currentProject.images.map((image, imgIndex) => (
                    <button
                      key={imgIndex}
                      onClick={() =>
                        setActiveImageIndex((prev) => ({
                          ...prev,
                          [currentProject.id]: imgIndex,
                        }))
                      }
                      className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                        imgIndex === currentImageIndex
                          ? 'border-gray-400 dark:border-gray-500'
                          : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                      }`}
                      aria-label={`Select thumbnail ${imgIndex + 1}`}
                    >
                      <Image
                        src={image}
                        alt={`Thumbnail ${imgIndex + 1} for ${currentProject.title}`}
                        className="w-full h-full object-cover"
                        width={1000}
                        height={10000}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  {currentProject.title}
                </h3>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                  {currentProject.description}
                </p>
              </div>

              {/* Live Demo Button */}
              <div>
                <a
                  href={currentProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold text-base bg-gray-900 text-white dark:bg-gray-800 dark:text-gray-200 border dark:border-gray-700 hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200 shadow-md"
                  aria-label={`View live demo of ${currentProject.title}`}
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Key Features
                </h4>
                <ul className="space-y-3">
                  {currentProject.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-3 text-gray-700 dark:text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 flex-shrink-0" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Built With
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300 border border-gray-300 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project Navigation */}
          <div className="flex items-center justify-between mt-12">
            <button
              onClick={prevProject}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer "
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Project Indicators */}
            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                    index === activeProject
                      ? 'bg-gray-900 dark:bg-white'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Project Counter */}
          <div className="text-center mt-8 text-sm text-gray-400 dark:text-gray-500">
            {activeProject + 1} / {projects.length}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;