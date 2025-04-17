import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin,
  FaArrowRight
} from 'react-icons/fa';

function Footer() {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Business", href: "#business" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { name: "Facebook", icon: <FaFacebook />, href: "#" },
    { name: "Instagram", icon: <FaInstagram />, href: "#" },
    { name: "LinkedIn", icon: <FaLinkedin />, href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                TC
              </div>
              <h3 className="text-xl font-bold text-white">Tivon Camylian</h3>
            </div>
            <p className="text-gray-400">
              A passionate health promotion undergraduate with a diverse background in community engagement, administration, and creative fashion.
            </p>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center"
                  >
                    <FaArrowRight className="mr-2 text-sm" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaEnvelope className="text-red-500 mr-3" />
                <a href="mailto:tivoncamyliyan@gmail.com" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  tivoncamyliyan@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-red-500 mr-3" />
                <a href="tel:+94723929005" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  +94 723929005
                </a>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="text-red-500 mr-3" />
                <span className="text-gray-400">Nuwara Eliya, Sri Lanka</span>
              </li>
            </ul>
          </motion.div>

          {/* Column 4 - Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Connect With Me</h3>
            <p className="text-gray-400 mb-4">
              Let's stay connected! Follow me for updates on my journey, community work, and future fashion ventures.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-gray-700 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © 2025 Tivon Camylian. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
