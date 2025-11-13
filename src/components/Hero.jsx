import React, { useState } from 'react';
import { ChevronDown, Download, Mail, Code, Terminal, Sparkles, Menu, X, Github, Linkedin, ExternalLink, Sun, Moon } from 'lucide-react';
import { usePortfolioData } from '../contexts/PortfolioContext';
import { personalData as fallbackData } from '../utils/data';

// Mock data - replace with your actual data

// Custom hook for typewriter effect
const useTypewriter = (text, speed = 100, delay = 0) => {
  const [displayText, setDisplayText] = React.useState('');
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typeInterval);
        }
      }, speed);
      
      return () => clearInterval(typeInterval);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [text, speed, delay]);
  
  return displayText;
};

const Hero = () => {
  const { portfolio, loading } = usePortfolioData();
  const personalData = portfolio || fallbackData;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const nameTypewriter = useTypewriter(`${personalData.name || ''}`, 100);
  const roleTypewriter = useTypewriter(`${personalData.role || ''}`, 80, 1800);
  const taglineTypewriter = useTypewriter(`${personalData.tagline || ''}`, 40, 3500);
  
  // Navigation items
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  // Function to handle section navigation
  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to handle resume download
  const downloadResume = () => {
    const resumeUrl = "/RESUMEN.pdf";
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = "RESUMEN.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      {/* Navigation */}
      <nav className="relative z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div 
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center font-bold text-white text-lg shadow-lg group-hover:scale-105 transition-transform duration-200">
                {personalData.initials}
              </div>
              <span className="text-xl font-bold text-gray-900">
                {personalData.name}
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-indigo-600 font-medium px-3 py-2 border-b-2 border-indigo-600 transition-colors duration-200"
              >
                Home
              </button>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-600 hover:text-indigo-600 font-medium px-3 py-2 transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-200"></span>
                </button>
              ))}
              
              {/* Theme Toggle */}
              <button className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors duration-200">
                <Sun className="w-5 h-5 text-blue-600" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100 bg-white/90 backdrop-blur-lg">
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-left px-4 py-3 text-indigo-600 font-medium bg-indigo-50 rounded-lg"
                >
                  Home
                </button>
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-3 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-200px)]">
          
          {/* Left Content */}
          <div className="space-y-8 lg:pr-8">
            {/* Role Badge */}
            <div className="inline-block">
              <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
                {roleTypewriter || personalData.role}
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent block">
                  {nameTypewriter || personalData.name}
                </span>
              </h1>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Crafting Digital
                <br />
                <span className="text-gray-700">Experiences</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              {taglineTypewriter || personalData.tagline}
            </p>

            {/* CTA Buttons - First Row */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              {/* Primary Button */}
              <button
                onClick={() => scrollToSection('projects')}
                className="group bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Explore My Work
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
              </button>
              
              <button
                onClick={downloadResume}
                className="bg-orange-100 hover:bg-orange-200 text-orange-700 hover:text-orange-800 border-2 border-orange-200 hover:border-orange-300 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                CV Website
              </button>
              
              <button
                onClick={() => window.open('https://github.com/MunnaKumar32990', '_blank')}
                className="bg-purple-100 hover:bg-purple-200 text-purple-700 hover:text-purple-800 border-2 border-purple-200 hover:border-purple-300 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                My GitHub - Website
              </button>
            </div>

            {/* Second Row - Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-teal-100 hover:bg-teal-200 text-teal-700 hover:text-teal-800 border-2 border-teal-200 hover:border-teal-300 px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </button>
              
              <div className="flex gap-3">
                <button className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 group">
                  <Github className="w-5 h-5 text-gray-600 group-hover:text-gray-800" />
                </button>
                <button className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 group">
                  <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-gray-800" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative w-80 h-96 md:w-96 md:h-[28rem] lg:w-[26rem] lg:h-[32rem]">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                
                {/* Image */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white group-hover:scale-105 transition-all duration-500">
                  <img
                    src={personalData.profileImage}
                    alt={personalData.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl animate-bounce">
                  <Code className="w-8 h-8 text-white" />
                </div>
                
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl animate-pulse">
                  <Terminal className="w-8 h-8 text-white" />
                </div>
                
                <div className="absolute top-1/4 -left-8 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg animate-spin" style={{ animationDuration: '8s' }}>
                  <span className="text-2xl">⚛️</span>
                </div>
                
                {/* Floating Dots */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-3 h-3 rounded-full animate-pulse ${
                      i % 3 === 0 ? 'bg-blue-400' : i % 3 === 1 ? 'bg-purple-400' : 'bg-indigo-400'
                    }`}
                    style={{
                      left: `${10 + (i * 15) % 80}%`,
                      top: `${15 + (i * 12) % 70}%`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: `${2 + i * 0.2}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('about')}
            className="group flex flex-col items-center space-y-2 hover:scale-110 transition-transform duration-300"
          >
            <div className="w-8 h-12 border-2 border-gray-300 rounded-full flex justify-center p-1 group-hover:border-indigo-500 transition-colors duration-300">
              <div className="w-1 h-3 bg-gray-400 rounded-full animate-bounce group-hover:bg-indigo-500"></div>
            </div>
            <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">Scroll</span>
            <ChevronDown className="w-4 h-4 text-gray-400 animate-bounce group-hover:text-indigo-500 transition-colors duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;