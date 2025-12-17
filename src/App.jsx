// src/App.jsx - Professional Portfolio with Modern Features (NO ThemeProvider, NO ThemeToggle)
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import Enhanced Components
import Header from "./components/layout/Header";
import BackToTop from "./components/layout/BackToTop";

// Import Section Components
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

// Page transition variants
const pageVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.6 },
  },
};

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Navigation & UI Elements */}
      <Header />
      <BackToTop />

      {/* Main Content with Page Animations */}
      <AnimatePresence mode="wait">
        <motion.main
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="relative overflow-hidden"
        >
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </motion.main>
      </AnimatePresence>
    </div>
  );
}

export default App;
