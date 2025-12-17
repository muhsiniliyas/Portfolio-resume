// src/components/layout/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: "https://github.com/muhsiniliyas", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: Mail, href: "mailto:muhsiniliyas03@gmail.com", label: "Email" }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.h3 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Mohammed Muhsin Iliyas
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-xs">
              Creating beautiful, functional web applications with modern technologies.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-left"
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Get In Touch</h4>
            <div className="space-y-3 text-sm">
              <p className="text-gray-600 dark:text-gray-400">
                Ready to bring your ideas to life?
              </p>
              <motion.a
                href="mailto:your@email.com"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <Mail className="w-4 h-4 mr-2" />
                muhsiniliyas03@email.com
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
              © {currentYear} Mohammed Developer. Made with  
               React.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
