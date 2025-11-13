import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { usePortfolioData } from '../contexts/PortfolioContext';
import { personalData as fallbackData } from '../utils/data';

const Contact = () => {
  const { portfolio, loading } = usePortfolioData();
  const personalData = portfolio || fallbackData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const baseURL = import.meta.env.VITE_API_URL || '/api';
      const res = await fetch(`${baseURL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error('Failed to send');
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 4000);
    } catch (e) {
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Safely access social links with fallbacks
  const socialLinks = personalData.socialLinks || {};
  const githubUrl = socialLinks.github || 'https://github.com/MunnaKumar32990/';
  const linkedinUrl = socialLinks.linkedin || 'https://linkedin.com/MunnaKumar32990/';
  const twitterUrl = socialLinks.twitter || 'https://twitter.com';

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden" id="contact">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                  Let's work together
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, creative projects, 
                  and interesting collaborations. Feel free to reach out!
                </p>
                
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-600 text-sm">Email</p>
                      <p className="text-slate-800 font-medium">{personalData.email || 'your.email@example.com'}</p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-600 text-sm">Phone</p>
                      <p className="text-slate-800 font-medium">{personalData.phone || '+1 (123) 456-7890'}</p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 bg-emerald-50 rounded-xl group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-600 text-sm">Location</p>
                      <p className="text-slate-800 font-medium">{personalData.location || 'Your Location'}</p>
                    </div>
                  </motion.div>
                </div>
                
                {/* Social Links */}
                <div className="mt-10">
                  <h4 className="text-lg font-medium text-slate-800 mb-4">Connect with me</h4>
                  <div className="flex gap-4">
                    <motion.a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-all duration-300 group"
                    >
                      <Github className="w-5 h-5 text-gray-600 group-hover:text-gray-800" />
                    </motion.a>
                    <motion.a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-all duration-300 group"
                    >
                      <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-gray-800" />
                    </motion.a>
                    <motion.a
                      href={twitterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-all duration-300 group"
                    >
                      <Twitter className="w-5 h-5 text-gray-600 group-hover:text-gray-800" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Send me a message</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-800 mb-2">Message Sent!</h4>
                  <p className="text-slate-600 max-w-md mx-auto">
                    Thank you for reaching out! I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        {...register('name', { required: 'Name is required' })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all peer placeholder-transparent"
                        placeholder="Your Name"
                        id="name"
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-4 -top-2 text-sm text-slate-500 bg-white px-2 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600"
                      >
                        Your Name
                      </label>
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div className="relative">
                      <input
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all peer placeholder-transparent"
                        placeholder="Your Email"
                        id="email"
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-4 -top-2 text-sm text-slate-500 bg-white px-2 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600"
                      >
                        Your Email
                      </label>
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      {...register('subject', { required: 'Subject is required' })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all peer placeholder-transparent"
                      placeholder="Subject"
                      id="subject"
                    />
                    <label
                      htmlFor="subject"
                      className="absolute left-4 -top-2 text-sm text-slate-500 bg-white px-2 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600"
                    >
                      Subject
                    </label>
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>
                  <div className="relative">
                    <textarea
                      {...register('message', { required: 'Message is required' })}
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all peer placeholder-transparent resize-none"
                      placeholder="Your Message"
                      id="message"
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-4 -top-2 text-sm text-slate-500 bg-white px-2 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600"
                    >
                      Your Message
                    </label>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1 }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;