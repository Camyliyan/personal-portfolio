/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaHeart, FaPalette, FaUsers } from 'react-icons/fa';
import resume from '../assets/resume.pdf';

function Herosection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/community-fashion.jpg"
          alt="Community and Fashion"
          className="w-full h-full object-cover"
        />
       <div className="absolute inset-0 bg-[url('/personal-portfolio/back.jpg')] backdrop-blur-sm"></div>

      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="font-serif text-white">Empowering</span>{' '}
            <span className="font-sans text-red-400">Health & Fashion</span>{' '}
            <span className="font-serif text-white">with Purpose</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mb-12"
          >
            A dedicated Health Promotion undergraduate with a passion for creating change
            through fashion and community impact.
          </motion.p>

          {/* Feature Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <FaHeart className="text-2xl text-red-200" />
              </div>
              <span className="text-white">Health Promotion</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <FaPalette className="text-2xl text-red-200" />
              </div>
              <span className="text-white">Fashion Design</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <FaUsers className="text-2xl text-red-200" />
              </div>
              <span className="text-white">Community Impact</span>
            </div>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
        <a
  href={resume}
  download
  className="group inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-900 text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-500/20 cursor-pointer"
>
  Download CV
  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
</a>



          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1f1c1c] to-transparent"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
    </section>
  );
}

export default Herosection;
