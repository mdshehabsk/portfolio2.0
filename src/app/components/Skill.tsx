
"use client";

import { motion } from "motion/react";
import javascript from "@/image/skills/javascript.png";
import typescript from "@/image/skills/typescript.png";
import nodejs from "@/image/skills/node.png";
import expressjs from "@/image/skills/express.png";
import mongodb from "@/image/skills/mongodb.png";
import nextjs from "@/image/skills/nextjs.png";
import reactjs from "@/image/skills/react.png";
import reduxjs from "@/image/skills/redux.png";
import tailwindcss from "@/image/skills/tailwind.png";
import prisma from "@/image/skills/prisma.png";
import nestjs from "@/image/skills/nestjs.png";
import postgresql from "@/image/skills/postgresql.png";
import firebase from "@/image/skills/firebase.png";
import git from "@/image/skills/git.png";
import docker from "@/image/skills/docker.png";
import figma from "@/image/skills/figma.png";
import github from "@/image/skills/github.png";
import aws from "@/image/skills/aws.png";
import linux from "@/image/skills/linux.png";
import postman from "@/image/skills/postman.png";
import reactQuery from "@/image/skills/ReactQueryIcon.png";
import zustand from "@/image/skills/zustand.jpg";
import server from "@/image/skills/server.png";
import ci from "@/image/skills/ci-cd.png";

import Image from "next/image";

const SkillsSection = () => {
  const skills = [
    { name: "JavaScript", image: javascript },
    { name: "TypeScript", image: typescript },
    { name: "React.js", image: reactjs },
    { name: "Next.js", image: nextjs },
    { name: "Redux", image: reduxjs },
    { name: "Tailwind CSS", image: tailwindcss },
    { name: "Node.js", image: nodejs },
    { name: "Nest.js", image: nestjs },
    { name: "Express.js", image: expressjs },
    { name: "MongoDB", image: mongodb },
    { name: "PostgreSQL", image: postgresql },
    { name: "Prisma", image: prisma },
    { name: "Firebase", image: firebase },
    { name: "Git", image: git },
    { name: "GitHub", image: github },
    { name: "Docker", image: docker },
    { name: "AWS", image: aws },
    { name: "Linux", image: linux },
    { name: "Postman", image: postman },
    { name: "Figma", image: figma },
    { name: "Zustand", image: zustand },
    { name: "RTK Query", image: reduxjs },
    { name: "React Query", image: reactQuery },
    { name: "CI/CD", image: ci },
    { name: "VPS", image: server },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };



  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-300" id="skills">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Skills & Technologies
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            A comprehensive toolkit built through years of hands-on development
            experience
          </p>
        </motion.div>

        {/* Featured Skills (JavaScript and TypeScript) */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center gap-4 mb-4 p-0 m-0" // Explicitly remove padding/margin
        >
          {skills.slice(0, 2).map((skill, index) => (
            <motion.div
              key={index}
              className="cursor-pointer group flex flex-col gap-2 rounded-xl backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 transition-all duration-300 p-4" // Added padding
            >
              <div className="h-[200px] w-full flex items-center justify-center">
                <Image
                  src={skill?.image}
                  alt={skill.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-medium text-center text-gray-900 dark:text-white">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3"
        >
          {skills.slice(2).map((skill, index) => {
            return (
              <div key={index}>
                {skill?.name === "Zustand" ? (
                  <motion.div
                    key={`${skill.name}-${index}`}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="group  box-border rounded-lg backdrop-blur-md bg-white/70 dark:bg-gray-800/70 border border-gray-200/50 dark:border-gray-700/50 hover:bg-white/90 dark:hover:bg-gray-800/90 hover:border-gray-300/70 dark:hover:border-gray-600/70 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                  >
                    <div className=" mx-auto  flex items-center justify-center rounded-md overflow-hidden">
                      <Image
                        src={skill.image}
                        alt={skill.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className=" my-2 text-sm font-medium text-center text-gray-900 dark:text-white leading-tight">
                      {skill.name}
                    </h3>
                  </motion.div>
                ) : (
                  <motion.div
                    key={`${skill.name}-${index}`}
                    animate="active"
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="group p-4 rounded-lg backdrop-blur-md bg-white/70 dark:bg-gray-800/70 border border-gray-200/50 dark:border-gray-700/50 hover:bg-white/90 dark:hover:bg-gray-800/90 hover:border-gray-300/70 dark:hover:border-gray-600/70 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer "
                  >
                    <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center rounded-md overflow-hidden">
                      <Image
                        src={skill.image}
                        alt={skill.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-sm font-medium text-center text-gray-900 dark:text-white leading-tight">
                      {skill.name}
                    </h3>
                  </motion.div>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
