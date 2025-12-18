// src/components/sections/Projects.jsx (Merged with Parallax)
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Star, Calendar } from "lucide-react";

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [imageErrors, setImageErrors] = useState({});

  // Parallax setup
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.25, 0.45, 0.25]);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "E-commerce solution with modern payment integration, real-time inventory management, and admin dashboard",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      fallbackImage: "https://via.placeholder.com/800x600/3B82F6/FFFFFF?text=E-Commerce",
      tech: ["React","TailWindCSS"],
      liveUrl: "https://shopworld.netlify.app/",
      githubUrl: "https://github.com/muhsiniliyas/ShopMark",
      stars: 42,
      status: "Live",
      date: "Oct 2025",
    },
    {
      id: 2,
      title: "FoodApp Platform",
      description: "Real-time project management app with team collaboration and drag-and-drop functionality",
      image:
        "https://images.unsplash.com/photo-1589010588553-46e8e7c21788?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZCUyMGRlbGl2ZXJ5fGVufDB8fDB8fHww",
      fallbackImage: "https://via.placeholder.com/800x600/8B5CF6/FFFFFF?text=Task+Manager",
      tech: ["React","TailWindCSS"],
      liveUrl: "https://foodstorm.netlify.app/",
      githubUrl: "https://github.com/muhsiniliyas/FoodWebsite",
      stars: 28,
      status: "Live",
      date: "Sept 2025",
    },
    {
      id: 3,
      title: "3D Tourist Website",
      description:
        "Modern Website featuring 3D animations, smooth transitions, and interactive elements on the Tourist Adventure",
      image: "https://images.unsplash.com/photo-1617040619263-41c5a9ca7521?w=800&h=600&fit=crop",
      fallbackImage: "https://via.placeholder.com/800x600/EC4899/FFFFFF?text=3D+Portfolio",
      tech: ["React", "Three.js", "Framer Motion", "Tailwind"],
      liveUrl: "https://traveluniversel.netlify.app/",
      githubUrl: "https://github.com/muhsiniliyas/TravelWorld",
      stars: 67,
      status: "Live",
      date: "Aug 2025",
    },
    {
      id: 4,
      title: "CarShop Website",
      description:
        "Modern Website featuring 3D animations, smooth transitions, and interactive elements on the Car Adventure",
      image: "https://images.unsplash.com/photo-1617040619263-41c5a9ca7521?w=800&h=600&fit=crop",
      fallbackImage: "https://via.placeholder.com/800x600/EC4899/FFFFFF?text=3D+Portfolio",
      tech: ["React", "Three.js", "Framer Motion", "Tailwind"],
      liveUrl: "https://carsglobal.netlify.app/",
      githubUrl: "https://github.com/muhsiniliyas/CarsWorld",
      stars: 67,
      status: "Live",
      date: "Nov 2025",
    },
  ];

  const handleImageError = (projectId) => {
    setImageErrors((prev) => ({ ...prev, [projectId]: true }));
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Parallax background layer */}
      <motion.div style={{ y: bgY, opacity: bgOpacity }} className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
      </motion.div>

      <div className="container-custom section-padding relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing my latest work and creative solutions with modern technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="glass-effect rounded-2xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={imageErrors[project.id] ? project.fallbackImage : project.image}
                  alt={`${project.title} project screenshot`}
                  onError={() => handleImageError(project.id)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Status Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-2 py-1 text-xs rounded-full font-medium ${
                      project.status === "Live" ? "bg-green-500/90 text-white" : "bg-yellow-500/90 text-white"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* GitHub Stars */}
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center text-white text-xs">
                  <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                  {project.stars}
                </div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-300"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-300"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {project.date}
                  </div>
                  <div className="flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    {project.stars} stars
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6">
                <div className="flex gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-center py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 border border-gray-300 dark:border-gray-600 hover:border-gray-400 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
