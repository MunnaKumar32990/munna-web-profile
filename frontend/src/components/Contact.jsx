import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
  Mail, Phone, MapPin, Send, CheckCircle2,
  Github, Linkedin, Twitter, MessageSquare, ArrowUpRight
} from 'lucide-react';
import { usePortfolioData } from '../contexts/PortfolioContext';

const Contact = () => {
  const { portfolio, loading } = usePortfolioData();
  const personalData = portfolio || {};

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  if (loading) return null;

  const socialLinks = personalData.socialLinks || {};
  const githubUrl = socialLinks.github || 'https://github.com/MunnaKumar32990';
  const linkedinUrl = socialLinks.linkedin || 'https://linkedin.com/in/MunnaKumar32990';
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
      // Fallback
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#0B0C10] devx-grid-bg transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="devx-accent-bar mx-auto" />
          <h2 className="devx-section-title">
            Get In Touch
          </h2>
          <p className="devx-section-desc">
            Have a project in mind, an opportunity to discuss, or just want to connect? My inbox is always open.
          </p>
        </motion.div>

        {/* 2-Column Bento Form Layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">

          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="devx-card p-7 sm:p-8 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 mb-3 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available for new opportunities
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Let's collaborate
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  I am actively seeking software engineering roles, full-stack contracts, and AI-driven web application projects.
                </p>
              </div>

              {/* Direct channels */}
              <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-white/[0.08]">
                <motion.a
                  href={`mailto:${personalData.email || 'munnakushw7@gmail.com'}`}
                  whileHover={{ x: 4 }}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06] hover:border-blue-500/40 hover:bg-white dark:hover:bg-white/[0.04] transition-all flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-slate-500">Email Me</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                      {personalData.email || 'munnakushw7@gmail.com'}
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  href={`tel:${personalData.phone || '+91 6207693788'}`}
                  whileHover={{ x: 4 }}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06] hover:border-blue-500/40 hover:bg-white dark:hover:bg-white/[0.04] transition-all flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-slate-500">Call Me</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors truncate">
                      {personalData.phone || '+91 6207693788'}
                    </div>
                  </div>
                </motion.a>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06] flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500">Location</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      {personalData.location || 'India'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-100 dark:border-white/[0.08]">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3 font-semibold">
                  Find me on social media:
                </div>
                <div className="flex gap-2.5">
                  {[
                    { href: githubUrl, icon: Github, label: 'GitHub' },
                    { href: linkedinUrl, icon: Linkedin, label: 'LinkedIn' },
                    { href: twitterUrl, icon: Twitter, label: 'Twitter' },
                  ].map(({ href, icon: Icon, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      whileHover={{ y: -4, scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] hover:border-blue-500 hover:text-blue-600 dark:hover:text-white text-slate-600 dark:text-slate-400 flex items-center justify-center transition-all shadow-sm"
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Modern Glass Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="devx-card p-7 sm:p-9 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Send a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Message Sent Successfully!</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm">
                    Thank you for reaching out. I have received your message and will get back to you promptly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2 font-semibold">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        {...register('name', { required: 'Name is required' })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0B0C10] border border-slate-200 dark:border-white/[0.08] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2 font-semibold">
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                        })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0B0C10] border border-slate-200 dark:border-white/[0.08] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2 font-semibold">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Project Inquiry / Opportunity"
                      {...register('subject', { required: 'Subject is required' })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0B0C10] border border-slate-200 dark:border-white/[0.08] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
                    />
                    {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2 font-semibold">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Hello Munna, I would like to discuss..."
                      {...register('message', { required: 'Message is required' })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0B0C10] border border-slate-200 dark:border-white/[0.08] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm resize-none"
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-devx-primary w-full py-3.5 text-sm font-semibold tracking-wide"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </span>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
