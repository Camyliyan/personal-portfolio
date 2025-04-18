import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaUsers, 
  FaLanguage, 
  FaFileWord, 
  FaFileExcel, 
  FaFilePowerpoint,
  FaPenFancy,
  FaCamera,
  FaVideo,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaArrowRight
} from 'react-icons/fa';

function Skill() {
  const technicalSkills = [
    { name: "Microsoft Word", icon: <FaFileWord />, level: 4 },
    { name: "Microsoft Excel", icon: <FaFileExcel />, level: 4 },
    { name: "Microsoft PowerPoint", icon: <FaFilePowerpoint />, level: 4 },
    { name: "Report Writing", icon: <FaPenFancy />, level: 5 },
    { name: "Social Media Management", icon: <FaCamera />, level: 4 },
    { name: "Video Editing", icon: <FaVideo />, level: 3 }
  ];

  const softSkills = [
    { name: "Leadership", level: 4 },
    { name: "Teamwork", level: 5 },
    { name: "Communication", level: 5 },
    { name: "Problem Solving", level: 4 }
  ];

  const additionalSkills = [
    { name: "Tamil", level: "Fluent" },
    { name: "Sinhala", level: "Fluent" },
    { name: "English", level: "Fluent" },
    { name: "HR Management", level: "Certified" }
  ];

  const renderStars = (level) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= level) {
        stars.push(<FaStar key={i} className="text-yellow-600" />);
      } else if (i - 0.5 === level) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-600" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-600" />);
      }
    }
    return stars;
  };

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
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500 mr-4">
                <FaCode className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Technical Skills</h3>
            </div>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-red-500 mr-2">{skill.icon}</span>
                    <span className="text-gray-700">{skill.name}</span>
                  </div>
                  <div className="flex">
                    {renderStars(skill.level)}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500 mr-4">
                <FaUsers className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Soft Skills</h3>
            </div>
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-700">{skill.name}</span>
                  <div className="flex">
                    {renderStars(skill.level)}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500 mr-4">
                <FaLanguage className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Additional Skills</h3>
            </div>
            <div className="space-y-4">
              {additionalSkills.map((skill, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-700">{skill.name}</span>
                  <span className="text-red-500 font-medium">{skill.level}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default Skill;
