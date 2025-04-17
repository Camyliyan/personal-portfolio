import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaBriefcase, 
  FaTshirt, 
  FaCalendarAlt, 
  FaClock,
  FaArrowRight
} from 'react-icons/fa';

function Education() {
  const milestones = [
    {
      title: "Bachelor's in Health Promotion",
      institution: "Rajarata University of Sri Lanka",
      date: "2023",
      description: "Comprehensive undergraduate program focusing on community health, wellness initiatives, and health advocacy.",
      icon: <FaGraduationCap />,
    },
    {
      title: "Certificate in Human Resources Management",
      institution: "Cased Institute",
      date: "2022",
      description: "Specialized certification covering HR strategies, recruitment processes, and organizational development.",
      icon: <FaBriefcase />,
    },
    {
      title: "Diploma in Fashion Design",
      institution: "Alison",
      date: "2022",
      description: "Focused on design principles, garment construction, and creative expression in fashion.",
      icon: <FaTshirt />,
    },
    {
      title: "Administration Support Course",
      institution: "Alison",
      date: "2021",
      description: "Comprehensive course covering office management, scheduling, and administrative tools.",
      icon: <FaCalendarAlt />,
    },
    {
      title: "Master the Art of Building Self-Discipline Course",
      institution: "Alison",
      date: "2021",
      description: "A course focused on developing personal discipline and productivity habits.",
      icon: <FaClock />,
    },
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
            My Educational Journey
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    {/* Icon */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                      {milestone.icon}
                    </div>

                    {/* Content */}
                    <div className="pt-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-red-500 font-medium mb-2">
                        {milestone.institution}
                      </p>
                      <p className="text-gray-500 text-sm mb-4">
                        {milestone.date}
                      </p>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
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
            Explore My Full Academic Experience
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
