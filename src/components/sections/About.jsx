// src/components/sections/About.jsx - Using Standard Tailwind Classes
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Zap, Users, Award, Coffee } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const skills = [
    { name: 'Frontend Development', level: 95, icon: Code },
    { name: 'UI/UX Design', level: 88, icon: Palette },
    { name: 'Performance Optimization', level: 92, icon: Zap },
    { name: 'Team Collaboration', level: 90, icon: Users }
  ];

  const stats = [
    { number: '3+', label: 'Projects Completed' },
    { number: '0+', label: 'Fresher' },
    { number: '∞', label: 'Cups of Coffee' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate developer with Fresher of experience creating beautiful, 
            functional web applications. I love turning complex problems into 
            simple, elegant designs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Award className="w-6 h-6 text-blue-600 mr-3" />
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I'm a passionate Computer Science student and aspiring UI/UX designer with a keen eye for creating beautiful, user-centered digital experiences. My journey in web development started with curiosity and has evolved into a deep love for crafting elegant solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                I specialize in front-end development and UI/UX design, always striving to bridge the gap between functionality and aesthetics. Every project is an opportunity to learn something new and push creative boundaries. Always eager to learn and adopt new technologies.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <skill.icon className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="font-medium">{skill.name}</span>
                  <span className="ml-auto text-blue-600 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.5, delay: 0.6 + index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
