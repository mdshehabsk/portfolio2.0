"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Calendar, Building2, ExternalLink } from "lucide-react";
import kodezenLogo from "@/image/kodezenteam_logo.jpeg";
import themeSpellLogo from '@/image/themespell.png'
const ExperienceSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Transform scroll progress to timeline height
  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Your actual experience data
  const experiences = [
    {
      id: 1,
      role: "Part Time - React Js Developer",
      company: "Themespell",
      location: "BD, Dhaka",
      startDate: "Feb 2025",
      endDate : "Present",
      isPresent: true,
      overview: [
        "Designed and developed the TS Team showcase plugin for WordPress, enabling users to create flexible, elegant, and highly customizable team member profiles and displays.",
        "Contributed to the development of the LocalPress theme, a comprehensive WordPress solution optimized for local businesses, featuring over 50 pre-made designs and full SEO compatibility.",
      ],
      technologies: ["Javascript", "ReactJS", "CSS ", "Plugin", "Theme"],
      certificateLink: null,
      logo: themeSpellLogo,
    },
    {
      id: 1,
      role: "Frontend Engineer",
      company: "Kodezen",
      location: "BD, Jhenaidah",
      startDate: "Feb 2024",
      endDate: "Nov 2024",
      isPresent: false,
      overview: [
        "Designed and developed 10+ custom Gutenberg blocks and numerous reusable components for WordPress plugin.",
        "Contributed to ongoing projects by implementing new features, optimizing existing functionalities and improving overall plugin performance.",
        "Collaborated with team members and mentored junior developers, providing guidance to help them understand project architecture and best practices.",
      ],
      technologies: [
        "Javascript",
        "ReactJS",
        "CSS & SCSS",
        "Block Development",
        "Plugin",
        "Reusable Component",
        "Git",
        "Jira",
        "ABlocks",
      ],
      certificateLink: null,
      logo: kodezenLogo,
    },
    {
      id: 2,
      role: "Backend Developer Intern",
      company: "Practico - Inc",
      location: "India, Bangalore",
      startDate: "Feb 2023",
      endDate: "May 2023",
      isPresent: false,
      overview: [
        "Developed and maintained simple API endpoints to support application functionality.",
        "Identified and resolved bugs to enhance application performance and reliability.",
        "Tested API endpoints to ensure proper functionality, accuracy, and efficiency.",
      ],
      technologies: ["Node", "Express", "MongoDB", "Postman"],
      certificateLink: "/internship-certificate.pdf",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors duration-300"
      id="experience"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            EXPERIENCES
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 top-0 w-px h-full bg-gray-300 dark:bg-gray-600"></div>
          <motion.div
            style={{ height: timelineHeight }}
            className="absolute left-0 top-0 w-px bg-gray-600 dark:bg-gray-400 origin-top"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className="relative flex items-start"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.4 }}
                  className="absolute -left-2 top-6"
                >
                  <div className="w-4 h-4 bg-gray-400 dark:bg-gray-500 rounded-full border-4 border-white dark:border-gray-900"></div>
                </motion.div>

                {/* Content */}
                <div className="flex flex-col lg:flex-row gap-6 ml-8 w-full">
                  {/* Left Side - Role */}
                  <div className="lg:w-1/4 flex-shrink-0">
                    <motion.h3
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.2 }}
                      className="text-xl font-semibold text-gray-900 dark:text-white mb-2"
                    >
                      {experience.role}
                    </motion.h3>
                  </div>

                  {/* Right Side - Company Card */}
                  <div className="lg:w-3/4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-all duration-300"
                    >
                      {/* Company Header */}
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-black dark:bg-white rounded flex items-center justify-center">
                            {experience?.logo ? (
                              <Image
                                src={experience?.logo}
                                alt="company logo"
                              />
                            ) : (
                              <Building2
                                size={16}
                                className="text-white dark:text-black"
                              />
                            )}
                          </div>
                          <span className="font-semibold text-lg text-gray-900 dark:text-white">
                            {experience.company}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            ({experience.location})
                          </span>
                        </div>
                      </div>

                      {/* Date Range */}
                      <div className="flex items-center space-x-2 mb-4">
                        <Calendar
                          size={16}
                          className="text-gray-500 dark:text-gray-400"
                        />
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {experience.startDate} - {experience.endDate}
                        </span>
                      </div>

                      {/* Job Overview */}
                      <div className="mb-6">
                        <ul className="space-y-3">
                          {experience.overview.map(
                            (achievement, achievementIndex) => (
                              <motion.li
                                key={achievementIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                  delay:
                                    index * 0.2 + achievementIndex * 0.1 + 0.4,
                                }}
                                className="flex items-start space-x-3 text-gray-700 dark:text-gray-300 leading-relaxed"
                              >
                                <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 flex-shrink-0" />
                                <span>{achievement}</span>
                              </motion.li>
                            )
                          )}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 rounded-full text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Certificate Link */}
                      {experience.certificateLink && (
                        <div>
                          <a
                            href={experience?.certificateLink}
                            target="_blank"
                            className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-sm underline"
                          >
                            <span>View Certificate</span>
                            <ExternalLink size={12} />
                          </a>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
