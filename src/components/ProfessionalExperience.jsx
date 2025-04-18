import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHeartbeat, 
  FaMapMarkerAlt, 
  FaTshirt, 
  FaFilePdf, 
  FaCross,
  FaArrowRight
} from 'react-icons/fa';

function ProfessionalExperience() {
  const experiences = [
    {
      title: "Health Promotion Volunteer",
      organization: "G17 Project",
      date: "2023",
      description: "Engaged in community-based health promotion efforts, educating and empowering local populations about key health issues.",
      icon: <FaHeartbeat />,
      achievements: [
        "Conducted health awareness workshops",
        "Developed educational materials",
        "Collaborated with local health professionals"
      ]
    },
    {
      title: "Field Worker",
      organization: "Mahakandarawa Tract 01, Mihintale",
      date: "2022-2023",
      description: "Collaborated with local teams to improve regional health and wellness, focusing on community health initiatives.",
      icon: <FaMapMarkerAlt />,
      achievements: [
        "Implemented community health programs",
        "Coordinated with local authorities",
        "Monitored program effectiveness"
      ]
    },
    {
      title: "Founder",
      organization: "OLIZEN Clothing Brand (Currently Paused)",
      date: "2021-Present",
      description: "Founded a fashion brand focusing on old money and mafia-style fashion. Developed marketing strategies and expanded brand presence online. Plans to restart after gaining more work experience.",
      icon: <FaTshirt />,
      achievements: [
        "Developed brand identity",
        "Created marketing strategies",
        "Managed online presence"
      ]
    },
    {
      title: "PDF Seller",
      organization: "Self-Employed",
      date: "2021-2022",
      description: "Created and sold self-improvement and business-related PDFs on various online platforms. Focused on customer satisfaction and meeting demand-driven product offerings.",
      icon: <FaFilePdf />,
      achievements: [
        "Created educational content",
        "Managed online sales",
        "Built customer relationships"
      ]
    },
    {
      title: "Junior Red Cross Worker",
      organization: "Red Cross (School)",
      date: "2020-2021",
      description: "Participated in various school-related activities and initiatives promoting health and safety awareness.",
      icon: <FaCross />,
      achievements: [
        "Organized safety workshops",
        "Participated in emergency drills",
        "Promoted health awareness"
      ]
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
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

          {/* Experiences */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
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
                      {experience.icon}
                    </div>

                    {/* Content */}
                    <div className="pt-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {experience.title}
                      </h3>
                      <p className="text-red-500 font-medium mb-2">
                        {experience.organization}
                      </p>
                      <p className="text-gray-500 text-sm mb-4">
                        {experience.date}
                      </p>
                      <p className="text-gray-600 mb-4">
                        {experience.description}
                      </p>
                      
                      {/* Achievements */}
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            <span className="text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

  
      </div>
    </section>
  );
}

export default ProfessionalExperience;
