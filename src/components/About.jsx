import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGlobe, FaUsers, FaPalette } from 'react-icons/fa';

function About() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <img
                  src="sample.png"
                  alt="Tivon Camylian"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 rounded-2xl border-4 border-white/20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-2xl"></div>
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-red-500/10 rounded-full blur-2xl"></div>
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl font-bold text-gray-900"
              >
                Meet Tivon Camylian
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl font-bold text-gray-600"
              >
                An undergraduate passionate about health promotion, fashion design, and community impact, 
                Tivon is dedicated to making a positive change through personal and professional growth.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-600 leading-relaxed"
              >
                With a strong foundation in communication, leadership, and community-driven projects, 
                Tivon brings a unique perspective to every endeavor. From organizing health awareness 
                campaigns to developing a fashion brand, their diverse skill set enables them to 
                approach challenges from multiple angles. Fluently trilingual in Tamil, Sinhala, and 
                English, Tivon is ready to connect and collaborate across industries to make a lasting impact.
              </motion.p>
            </div>

            {/* Skills/Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <FaUsers className="text-red-200" />
                </div>
                <span className="text-gray-600">Community Impact</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <FaPalette className="text-red-200" />
                </div>
                <span className="text-gray-600">Fashion Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <FaGlobe className="text-red-200" />
                </div>
                <span className="text-gray-600">Trilingual</span>
              </div>
            </motion.div>

          
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;