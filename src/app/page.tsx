

'use client'

import Navbar from './components/Navbar';
import Skill from './components/Skill';
import ProjectsSection from './components/Projects';
import ExperienceSection from './components/Experience';
import AboutSection from './components/About';
import Hero from './components/Hero';



export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 relative">


      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero/>
      <ProjectsSection/>
      <Skill/>
      <AboutSection/>
      <ExperienceSection/>
    </div>
  );
}
