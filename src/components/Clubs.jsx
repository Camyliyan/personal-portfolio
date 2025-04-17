import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHeartbeat, 
  FaBook, 
  FaUsers, 
  FaCross, 
  FaArrowRight 
} from 'react-icons/fa';

function Clubs() {
  const clubs = [
    {
      name: "Health Promotion Society",
      role: "Member",
      institution: "Rajarata University of Sri Lanka",
      description: "Active member contributing to health awareness campaigns and community health initiatives.",
      icon: <FaHeartbeat className="text-3xl" />
    },
    {
      name: "Journal Club",
      role: "Member",
      institution: "Rajarata University of Sri Lanka",
      description: "Participated in academic discussions and research paper reviews to enhance scientific knowledge.",
      icon: <FaBook className="text-3xl" />
    },
    {
      name: "Nuwara Eliya Undergraduate Association",
      role: "Member",
      institution: "Rajarata University of Sri Lanka",
      description: "Engaged in student activities and community service projects for the Nuwara Eliya region.",
      icon: <FaUsers className="text-3xl" />
    },
    {
      name: "Junior Red Cross",
      role: "Volunteer",
      institution: "School Level",
      description: "Volunteered in various health and safety initiatives, promoting humanitarian values.",
      icon: <FaCross className="text-3xl" />
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
            Clubs & Societies
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clubs.map((club, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="flex items-start space-x-4">
                {/* Icon */}
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-500 flex-shrink-0">
                  {club.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {club.name}
                  </h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-red-500 font-medium">{club.role}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600">{club.institution}</span>
                  </div>
                  <p className="text-gray-600">
                    {club.description}
                  </p>
                </div>
              </div>
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
            Learn More About My Involvement
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Clubs;
