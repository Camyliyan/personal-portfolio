import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled for navbar background
      setIsScrolled(window.scrollY > 50);

      // Get all sections
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100; // Offset for better accuracy

      // Find the current section in view
      let currentSection = 'home';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Business', href: '#business' },
    { name: 'Skills', href: '#skills' },
    { name: 'Clubs', href: '#clubs' }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1f1c1c]/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <a href="#home" className="text-white text-2xl font-bold">TC</a>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`relative text-gray-300 hover:text-white px-3 py-2 text-sm font-medium group ${
                    activeLink === link.href.slice(1) ? 'text-white' : ''
                  }`}
                >
                  {link.name}
                  {/* Animated border bottom */}
                  <motion.span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-500 ${
                      activeLink === link.href.slice(1) ? 'scale-x-100' : 'scale-x-0'
                    }`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeLink === link.href.slice(1) ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Hover border animation */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeLink === link.href.slice(1)
                  ? 'text-white bg-red-600/20'
                  : 'text-gray-300 hover:text-white hover:bg-red-600/10'
              }`}
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}

export default Navigation;