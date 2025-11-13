import { motion } from 'framer-motion';
import { Github, Mail, Phone, MapPin, Heart, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { usePortfolioData } from '../contexts/PortfolioContext';
import { personalData as fallbackData } from '../utils/data';

const Footer = () => {
  const { portfolio, loading } = usePortfolioData();
  const personalData = portfolio || fallbackData;
  const currentYear = new Date().getFullYear();
  
  // Safely access social links with fallbacks
  const socialLinks = personalData.socialLinks || {};
  const githubUrl = socialLinks.github || 'https://github.com';
  const linkedinUrl = socialLinks.linkedin || 'https://linkedin.com';
  const twitterUrl = socialLinks.twitter || 'https://twitter.com';
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Personal Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center font-bold text-white text-lg shadow-lg">
                {personalData.initials}
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {personalData.name}
              </h3>
            </div>
            
            <p className="text-slate-300 leading-relaxed max-w-md">
              {personalData.tagline}
            </p>
            
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin className="w-4 h-4" />
              <span>{personalData.location || 'Your Location'}</span>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-2">
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-slate-200">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              {['About', 'Projects', 'Education', 'Skills', 'Certifications', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ x: 5 }}
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-slate-200">Get In Touch</h4>
            <div className="space-y-4">
              <motion.a
                href={`mailto:${personalData.email || 'your.email@example.com'}`}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{personalData.email || 'your.email@example.com'}</span>
              </motion.a>
              
              <motion.a
                href={`tel:${personalData.phone || '+1234567890'}`}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{personalData.phone || '+1 (123) 456-7890'}</span>
              </motion.a>
              
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                  <Github className="w-4 h-4" />
                </div>
                <span>GitHub Profile</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        {/* Copyright & Back to Top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-slate-400 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by {personalData.name} © {currentYear}
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-300"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Back to Top</span>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;