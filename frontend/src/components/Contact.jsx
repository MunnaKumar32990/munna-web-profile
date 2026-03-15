import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageSquare } from 'lucide-react';
import { usePortfolioData } from '../contexts/PortfolioContext';
import { personalData as fallbackData } from '../utils/data';

const ContactInfoItem = ({ icon: Icon, label, value, href, iconBg }) => (
  <motion.a
    href={href || '#'}
    whileHover={{ x: 6 }}
    className="flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 group cursor-pointer"
    style={{ background: '#FEFCF7', borderColor: '#EADBC8' }}
  >
    <div
      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform"
      style={{ background: iconBg }}
    >
      <Icon className="w-5 h-5 text-white" />
    </div>
    <div className="min-w-0">
      <p className="text-xs font-medium" style={{ color: '#8B5E3C' }}>{label}</p>
      <p className="font-semibold text-sm truncate" style={{ color: '#3A2D28' }}>{value}</p>
    </div>
  </motion.a>
);

const SocialButton = ({ href, icon: Icon, label, hoverBg }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    whileHover={{ y: -4, scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
    style={{ background: '#FEFCF7', border: '1px solid #EADBC8', color: '#6B5A4E' }}
  >
    <Icon className="w-5 h-5" />
  </motion.a>
);

const FloatingLabel = ({ id, label, type = 'text', register, error, rows }) => {
  const Tag = rows ? 'textarea' : 'input';
  return (
    <div className="relative">
      <Tag
        id={id}
        {...register}
        type={type}
        rows={rows}
        placeholder=" "
        className={`peer w-full px-4 pt-5 pb-2 rounded-xl text-sm focus:outline-none focus:ring-2 transition-all ${rows ? 'resize-none' : ''}`}
        style={{
          background: 'rgba(234,219,200,0.3)',
          border: error ? '1px solid #c0392b' : '1px solid #EADBC8',
          color: '#3A2D28',
          outline: 'none',
        }}
        onFocus={e => e.target.style.boxShadow = '0 0 0 2px rgba(139,94,60,0.3)'}
        onBlur={e => e.target.style.boxShadow = 'none'}
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-3.5 text-sm transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs"
        style={{ color: '#8B5E3C' }}
      >
        {label}
      </label>
      {error && <p className="text-red-500 text-xs mt-1 ml-1">{error.message}</p>}
    </div>
  );
};

const Contact = () => {
  const { portfolio } = usePortfolioData();
  const personalData = portfolio || fallbackData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const socialLinks = personalData.socialLinks || {};
  const githubUrl = socialLinks.github || 'https://github.com/MunnaKumar32990/';
  const linkedinUrl = socialLinks.linkedin || 'https://linkedin.com/in/MunnaKumar32990/';
  const twitterUrl = socialLinks.twitter || 'https://twitter.com';

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const baseURL = import.meta.env.VITE_API_URL || '/api';
      const res = await fetch(`${baseURL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to send');
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch {
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #F5F5DC 0%, #FEFCF7 50%, #EADBC8 100%)' }}
      id="contact"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(139,94,60,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,94,60,0.04) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(234,219,200,0.5)' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-subtitle">Let's Talk</span>
          <h2
            className="section-title mt-2"
            style={{ background: 'linear-gradient(135deg, #8B5E3C, #c4875a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
          >
            Get In Touch
          </h2>
          <div className="w-16 h-1 mx-auto mt-4 rounded-full" style={{ background: 'linear-gradient(90deg, #8B5E3C, #c4875a)' }} />
          <p className="mt-4 max-w-xl mx-auto" style={{ color: '#6B5A4E' }}>
            Have a question or want to work together? Feel free to reach out — I'll respond promptly!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="space-y-5"
          >
            <div
              className="rounded-3xl p-7 text-white relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #8B5E3C 0%, #c4875a 60%, #a06840 100%)' }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-12 -mt-12 blur-xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Let's work together</h3>
                </div>
                <p className="text-white/85 text-sm leading-relaxed">
                  I'm always open to discussing new opportunities, creative projects, and interesting collaborations. Let's build something amazing!
                </p>
              </div>
            </div>

            <ContactInfoItem
              icon={Mail} label="Email" value={personalData.email || 'your.email@example.com'}
              href={`mailto:${personalData.email || ''}`}
              iconBg="linear-gradient(135deg, #8B5E3C, #c4875a)"
            />
            <ContactInfoItem
              icon={Phone} label="Phone" value={personalData.phone || '+1 (000) 000-0000'}
              href={`tel:${personalData.phone || ''}`}
              iconBg="linear-gradient(135deg, #c4875a, #a06840)"
            />
            <ContactInfoItem
              icon={MapPin} label="Location" value={personalData.location || 'Your City, Country'}
              iconBg="linear-gradient(135deg, #a06840, #8B5E3C)"
            />

            <div className="pt-2">
              <p className="text-sm font-semibold mb-3" style={{ color: '#6B5A4E' }}>Connect with me</p>
              <div className="flex gap-3">
                <SocialButton href={githubUrl} icon={Github} label="GitHub" />
                <SocialButton href={linkedinUrl} icon={Linkedin} label="LinkedIn" />
                <SocialButton href={twitterUrl} icon={Twitter} label="Twitter" />
              </div>
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="p-7 md:p-8 rounded-3xl shadow-lg border"
            style={{ background: '#FEFCF7', borderColor: '#EADBC8' }}
          >
            <h3 className="text-xl font-bold mb-6" style={{ color: '#3A2D28' }}>Send me a message</h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-10"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-5"
                  style={{ background: 'rgba(139,94,60,0.12)' }}
                >
                  <CheckCircle className="w-10 h-10" style={{ color: '#8B5E3C' }} />
                </div>
                <h4 className="text-xl font-bold mb-2" style={{ color: '#3A2D28' }}>Message Sent!</h4>
                <p className="max-w-sm text-sm" style={{ color: '#6B5A4E' }}>
                  Thank you! I'll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <FloatingLabel
                    id="name" label="Your Name"
                    register={register('name', { required: 'Name is required' })}
                    error={errors.name}
                  />
                  <FloatingLabel
                    id="email" label="Your Email" type="email"
                    register={register('email', {
                      required: 'Email is required',
                      pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
                    })}
                    error={errors.email}
                  />
                </div>
                <FloatingLabel
                  id="subject" label="Subject"
                  register={register('subject', { required: 'Subject is required' })}
                  error={errors.subject}
                />
                <FloatingLabel
                  id="message" label="Your Message"
                  register={register('message', { required: 'Message is required' })}
                  error={errors.message}
                  rows={5}
                />

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3.5 text-white rounded-xl font-semibold shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
                  style={{ background: 'linear-gradient(135deg, #8B5E3C, #c4875a)' }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;