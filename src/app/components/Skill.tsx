import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Code, 
  Database, 
  Server, 
  Globe, 
  GitBranch, 
  Container, 
  Cloud, 
  Zap,
  Layers,
  Box,
  Settings,
  FileCode,
  Workflow,
  Search
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  color: 'emerald' | 'blue' | 'purple' | 'orange';
}

interface Category {
  id: string;
  label: string;
}

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories: Record<string, SkillCategory> = {
    frontend: {
      title: 'Frontend',
      color: 'emerald',
      skills: [
        { name: 'JavaScript', icon: FileCode },
        { name: 'TypeScript', icon: Code },
        { name: 'React.js', icon: Layers },
        { name: 'Next.js', icon: Globe },
        { name: 'Redux', icon: Box },
        { name: 'Zustand', icon: Zap },
        { name: 'RTK Query', icon: Search },
        { name: 'React Query', icon: Database }
      ]
    },
    backend: {
      title: 'Backend',
      color: 'blue',
      skills: [
        { name: 'Node.js', icon: Server },
        { name: 'Nest.js', icon: Settings },
        { name: 'Express.js', icon: Workflow }
      ]
    },
    database: {
      title: 'Database',
      color: 'purple',
      skills: [
        { name: 'MongoDB', icon: Database },
        { name: 'PostgreSQL', icon: Database }
      ]
    },
    devops: {
      title: 'DevOps & Tools',
      color: 'orange',
      skills: [
        { name: 'GitHub', icon: GitBranch },
        { name: 'Docker', icon: Container },
        { name: 'CI/CD', icon: Workflow },
        { name: 'VPS', icon: Server },
        { name: 'AWS', icon: Cloud },
        { name: 'Postman', icon: Search }
      ]
    }
  };

  const getAllSkills = () => {
    return Object.values(skillCategories).flatMap(category => 
      category.skills.map(skill => ({ ...skill, category: category.title, color: category.color }))
    );
  };

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return getAllSkills();
    }
    return skillCategories[activeCategory]?.skills.map(skill => ({
      ...skill,
      category: skillCategories[activeCategory].title,
      color: skillCategories[activeCategory].color
    })) || [];
  };

  const categories: Category[] = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'devops', label: 'DevOps & Tools' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const getColorClasses = (color: string, type: 'bg' | 'text' | 'border' | 'hover' = 'bg') => {
    const colors: Record<string, Record<string, string>> = {
      emerald: {
        bg: 'bg-emerald-500',
        text: 'text-emerald-600 dark:text-emerald-400',
        border: 'border-emerald-500',
        hover: 'hover:bg-emerald-50 dark:hover:bg-emerald-900/30'
      },
      blue: {
        bg: 'bg-blue-500',
        text: 'text-blue-600 dark:text-blue-400',
        border: 'border-blue-500',
        hover: 'hover:bg-blue-50 dark:hover:bg-blue-900/30'
      },
      purple: {
        bg: 'bg-purple-500',
        text: 'text-purple-600 dark:text-purple-400',
        border: 'border-purple-500',
        hover: 'hover:bg-purple-50 dark:hover:bg-purple-900/30'
      },
      orange: {
        bg: 'bg-orange-500',
        text: 'text-orange-600 dark:text-orange-400',
        border: 'border-orange-500',
        hover: 'hover:bg-orange-50 dark:hover:bg-orange-900/30'
      }
    };
    return colors[color]?.[type] || colors.emerald[type];
  };

  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-800 transition-colors duration-300">
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
            Skills & Technologies
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            A comprehensive toolkit built through years of hands-on development experience
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          {getFilteredSkills().map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={`${skill.name}-${index}`}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className={`relative p-6 rounded-xl border transition-all duration-300 group cursor-pointer ${
                  getColorClasses(skill.color, 'border') + ' ' +
                  (activeCategory === 'all' ? getColorClasses(skill.color, 'hover') : '') + ' ' +
                  'bg-white dark:bg-gray-700 hover:shadow-lg'
                }`}
              >
                {/* Skill Icon */}
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 ${getColorClasses(skill.color, 'bg')}`}>
                  <IconComponent 
                    size={24} 
                    className={getColorClasses(skill.color, 'text')}
                  />
                </div>

                {/* Skill Name */}
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {skill.name}
                </h3>

                {/* Category Badge */}
                <div className={`inline-block px-2 py-1 rounded text-xs font-medium ${getColorClasses(skill.color, 'hover')}`}>
                  {skill.category}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(skillCategories).map(([key, category]) => (
              <div key={key} className="p-6 rounded-lg bg-gray-50 dark:bg-gray-700">
                <div className="text-3xl font-bold mb-2 text-gray-700 dark:text-gray-300">
                  {category.skills.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {category.title}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;