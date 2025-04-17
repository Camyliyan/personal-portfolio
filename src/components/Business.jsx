import React from 'react';
import { motion } from 'framer-motion';
import { FaTshirt, FaFilePdf, FaBriefcase, FaArrowRight } from 'react-icons/fa';

function Business() {
  const experiences = [
    {
      title: "Founder - OLIZEN Clothing Brand",
      date: "2021-Present",
      description: "Founded a fashion brand focused on creating old money and mafia-style fashion. Developed marketing strategies, established an online presence, and expanded the brand. Plans to restart the brand after gaining further professional experience and funding.",
      icon: <FaTshirt className="text-3xl" />,
      status: "Currently Paused"
    },
    {
      title: "PDF Seller (Self-Employed)",
      date: "2021-2022",
      description: "Created and sold self-improvement and business-related PDFs through online platforms. Focused on offering high-quality, demand-driven content for customers.",
      icon: <FaFilePdf className="text-3xl" />,
      status: "Completed"
    },
    {
      title: "Additional Business Experience",
      date: "2020-Present",
      description: "Engaged in various entrepreneurial ventures and freelance projects, developing skills in business management, marketing, and customer relations.",
      icon: <FaBriefcase className="text-3xl" />,
      status: "Ongoing"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Business Experience
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
            >
              {/* Icon and Status */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500">
                  {experience.icon}
                </div>
                <span className="text-sm font-medium text-gray-500">
                  {experience.status}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {experience.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                {experience.date}
              </p>
              <p className="text-gray-600">
                {experience.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="group inline-flex items-center px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-500/20"
          >
            Explore My Business Projects
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Business;
