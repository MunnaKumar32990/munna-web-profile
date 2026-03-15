import { motion } from 'framer-motion';
import { Github, Mail, Phone, MapPin, Heart, Linkedin, Twitter, ArrowUp, Code2 } from 'lucide-react';
import { usePortfolioData } from '../contexts/PortfolioContext';
import { personalData as fallbackData } from '../utils/data';

const quickLinks = ['About', 'Projects', 'Education', 'Skills', 'Certifications', 'Contact'];

const SocialLink = ({ href, icon: Icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    whileHover={{ y: -4, scale: 1.15 }}
    whileTap={{ scale: 0.9 }}
    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
    style={{ background: 'rgba(234,219,200,0.08)', border: '1px solid rgba(234,219,200,0.15)', color: 'rgba(234,219,200,0.6)' }}
    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(234,219,200,0.15)'; e.currentTarget.style.color = '#EADBC8'; }}
    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(234,219,200,0.08)'; e.currentTarget.style.color = 'rgba(234,219,200,0.6)'; }}
  >
    <Icon className="w-4 h-4" />
  </motion.a>
);

const Footer = () => {
  const { portfolio } = usePortfolioData();
  const personalData = portfolio || fallbackData;
  const year = new Date().getFullYear();

  const socialLinks = personalData.socialLinks || {};
  const githubUrl = socialLinks.github || 'https://github.com/MunnaKumar32990';
  const linkedinUrl = socialLinks.linkedin || 'https://linkedin.com/in/MunnaKumar32990';
  const twitterUrl = socialLinks.twitter || 'https://twitter.com';

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{ background: 'linear-gradient(135deg, #2a1f1a 0%, #3A2D28 60%, #1a1210 100%)' }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(139,94,60,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(139,94,60,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Glow accents */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(139,94,60,0.12)' }} />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(196,135,90,0.10)' }} />

      {/* Top gradient line */}
      <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(196,135,90,0.5), transparent)' }} />

      <div className="container mx-auto px-6 py-14 relative z-10">
        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="md:col-span-2 space-y-5"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-lg shadow-lg"
                style={{ background: 'linear-gradient(135deg, #8B5E3C, #c4875a)' }}
              >
                {personalData.initials}
              </div>
              <h3
                className="text-xl font-bold"
                style={{ background: 'linear-gradient(135deg, #c4875a, #EADBC8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
              >
                {personalData.name}
              </h3>
            </div>

            <p className="text-sm leading-relaxed max-w-sm" style={{ color: 'rgba(234,219,200,0.6)' }}>
              {personalData.tagline}
            </p>

            <div className="flex items-center gap-2 text-sm" style={{ color: 'rgba(234,219,200,0.4)' }}>
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{personalData.location || 'India'}</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-2 pt-1">
              <SocialLink href={githubUrl} icon={Github} label="GitHub" />
              <SocialLink href={linkedinUrl} icon={Linkedin} label="LinkedIn" />
              <SocialLink href={twitterUrl} icon={Twitter} label="Twitter" />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-bold uppercase tracking-wider" style={{ color: 'rgba(234,219,200,0.8)' }}>Quick Links</h4>
            <nav className="flex flex-col space-y-2.5">
              {quickLinks.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ x: 5 }}
                  className="text-sm flex items-center gap-2 transition-colors duration-200"
                  style={{ color: 'rgba(234,219,200,0.5)' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#c4875a'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(234,219,200,0.5)'}
                >
                  <Code2 className="w-3 h-3 opacity-40" />
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
            <h4 className="text-sm font-bold uppercase tracking-wider" style={{ color: 'rgba(234,219,200,0.8)' }}>Contact</h4>
            <div className="space-y-3">
              <motion.a
                href={`mailto:${personalData.email || ''}`}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-sm transition-colors duration-200"
                style={{ color: 'rgba(234,219,200,0.5)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#c4875a'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(234,219,200,0.5)'}
              >
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(139,94,60,0.3)' }}>
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="truncate">{personalData.email || 'email@example.com'}</span>
              </motion.a>

              <motion.a
                href={`tel:${personalData.phone || ''}`}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-sm transition-colors duration-200"
                style={{ color: 'rgba(234,219,200,0.5)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#c4875a'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(234,219,200,0.5)'}
              >
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(196,135,90,0.25)' }}>
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{personalData.phone || 'Phone number'}</span>
              </motion.a>

              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-sm transition-colors duration-200"
                style={{ color: 'rgba(234,219,200,0.5)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#EADBC8'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(234,219,200,0.5)'}
              >
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(58,45,40,0.6)' }}>
                  <Github className="w-3.5 h-3.5" />
                </div>
                <span>GitHub Profile</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom row */}
        <div
          className="border-t mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderColor: 'rgba(139,94,60,0.2)' }}
        >
          <p className="text-sm flex items-center gap-1.5" style={{ color: 'rgba(234,219,200,0.4)' }}>
            Made with <Heart className="w-3.5 h-3.5 text-rose-400 animate-pulse" /> by{' '}
            <span style={{ color: 'rgba(234,219,200,0.7)', fontWeight: 500 }}>{personalData.name}</span> © {year}
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition-all duration-300"
            style={{ background: 'rgba(139,94,60,0.15)', border: '1px solid rgba(139,94,60,0.2)', color: 'rgba(234,219,200,0.6)' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(139,94,60,0.25)'; e.currentTarget.style.color = '#EADBC8'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(139,94,60,0.15)'; e.currentTarget.style.color = 'rgba(234,219,200,0.6)'; }}
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;