// components/sections/Contact.tsx
'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaInstagram, FaRegCopy, FaCheckCircle } from 'react-icons/fa';

const socialLinks = [
  {
    icon: <FaLinkedin className="text-blue-600 dark:text-blue-400 text-2xl" />,
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/munnakumar32990/',
  },
  {
    icon: <FaGithub className="text-gray-800 dark:text-gray-200 text-2xl" />,
    label: 'GitHub',
    url: 'https://github.com/MunnaKumar32990',
  },
  {
    icon: <FaInstagram className="text-pink-500 dark:text-pink-400 text-2xl" />,
    label: 'Instagram',
    url: 'https://www.instagram.com/kumar__munna/?igsh=Zjl0Z2JnZWo1MHdt#',
  },
];

const contactInfo = [
  {
    icon: <FaEnvelope className="text-blue-600 dark:text-blue-400 text-xl" />,
    label: 'Email',
    value: 'munnakushw7@gmail.com',
    url: 'mailto:munnakushw7@gmail.com',
  },
  {
    icon: <FaPhone className="text-green-600 dark:text-green-400 text-xl" />,
    label: 'Phone',
    value: '+91 6207693788',
    url: 'tel:+916207693788',
  },
  {
    icon: <FaMapMarkerAlt className="text-red-500 dark:text-red-400 text-xl" />,
    label: 'Location',
    value: 'Bettiah, Bihar, India',
    url: '',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    type: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: 'success',
          message: 'Thank you for your message! I will get back to you soon.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'There was an error sending your message. Please try again.',
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('munnakushw7@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
            <span className="inline-block bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 px-4 py-1 rounded-full text-sm font-medium">
              <FaCheckCircle className="inline mr-1 mb-0.5" /> Available for freelance & collaborations
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. Send me a message and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-800 transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-800 transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-800 transition-colors duration-200"
                  placeholder="Your message here..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl disabled:opacity-70"
                disabled={status.type === 'loading'}
              >
                {status.type === 'loading' ? 'Sending...' : 'Send Message'}
              </motion.button>

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center p-4 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-200'
                      : status.type === 'error'
                      ? 'bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-200'
                      : ''
                  }`}
                >
                  {status.message}
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="space-y-6">
              <div className="space-y-4">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-gray-100">{info.label}</h3>
                      {info.url ? (
                        <a 
                          href={info.url}
                          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-gray-600 dark:text-gray-300">{info.value}</span>
                      )}
                    </div>
                    {info.label === 'Email' && (
                      <button
                        onClick={handleCopyEmail}
                        type="button"
                        className="ml-auto p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                        aria-label="Copy Email"
                      >
                        {copied ? (
                          <FaCheckCircle className="text-green-500 text-lg" />
                        ) : (
                          <FaRegCopy className="text-gray-500 dark:text-gray-400 text-lg" />
                        )}
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-4">Connect with me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300 hover:scale-110"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-4">Location</h3>
                <div className="w-full h-48 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57143.97769436826!2d84.44661571979657!3d26.802199576084934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993553420b78773%3A0x71129f699e524dd3!2sBettiah%2C%20Bihar!5e0!3m2!1sen!2sin!4v1709883545普及!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                    title="Bettiah, Bihar, India Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl shadow-lg text-xl font-semibold transform hover:scale-105 transition-all duration-300">
            Let's Create Something Amazing Together!
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;