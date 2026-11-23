import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Copy, Check, Mail, Phone, MapPin, Send } from 'lucide-react';
import { usePortfolioData } from '../contexts/PortfolioContext';

const Contact = () => {
  const { portfolio } = usePortfolioData();
  const email = portfolio?.email || 'munnakushw7@gmail.com';
  const phone = portfolio?.phone || '+91 6207693788';
  const location = portfolio?.location || 'India';
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${email}?subject=Collaboration Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nSender Email: ' + formData.email)}`;
    window.location.href = mailtoUrl;
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
  };

  const socials = [
    { label: 'GITHUB', url: portfolio?.socialLinks?.github || 'https://github.com/MunnaKumar32990' },
    { label: 'LINKEDIN', url: portfolio?.socialLinks?.linkedin || 'https://linkedin.com/in/MunnaKumar32990' },
    { label: 'LEETCODE', url: 'https://leetcode.com/u/KLU2300032990/' },
    { label: 'HACKERRANK', url: 'https://www.hackerrank.com/profile/h2300032990' },
  ];

  return (
    <section id="contact" className="py-24 bg-white text-[#111111] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-8 border-b border-[#E5E5E5] pb-4">
          <span className="text-[#F04444] text-xs font-mono">✻</span>
          <span className="label-tiny text-[#777777]">07 / INITIATE CONVERSATION</span>
        </div>

        {/* Oversized Headline */}
        <div className="mb-16">
          <h2 className="headline-large text-[#111111]">
            HAVE AN IDEA?<br />
            LET'S <span className="text-[#F04444]">BUILD IT.</span>
          </h2>
        </div>

        {/* Contact Grid: Details & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Inquiries */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <p className="text-lg text-[#555555] leading-relaxed mb-8 max-w-lg">
                Whether you have an upcoming project, an engineering role, or a technical inquiry, my inbox is always open for ambitious conversations.
              </p>

              {/* Direct Email Box */}
              <div className="border border-[#E5E5E5] p-6 bg-[#FAFAFA] mb-8">
                <span className="font-mono text-[10px] text-[#777777] uppercase tracking-wider block mb-2">
                  DIRECT EMAIL INBOX
                </span>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <a
                    href={`mailto:${email}`}
                    className="font-display font-bold text-xl sm:text-2xl text-[#111111] hover:text-[#F04444] transition-colors break-all"
                  >
                    {email}
                  </a>

                  <button
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#111111] bg-white text-[#111111] hover:bg-[#111111] hover:text-white transition-all text-xs font-mono uppercase"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#22C55E]" />
                        <span>COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Communication Metadata */}
              <div className="grid grid-cols-2 gap-4 font-mono text-xs border-y border-[#E5E5E5] py-4">
                <div>
                  <span className="text-[#777777] block text-[10px] uppercase mb-0.5">
                    TELEPHONE
                  </span>
                  <a href={`tel:${phone}`} className="text-[#111111] font-semibold hover:text-[#F04444]">
                    {phone}
                  </a>
                </div>

                <div>
                  <span className="text-[#777777] block text-[10px] uppercase mb-0.5">
                    GEOGRAPHY
                  </span>
                  <span className="text-[#111111] font-semibold">
                    {location} (IST / UTC+5:30)
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="pt-8">
              <span className="font-mono text-[10px] text-[#777777] uppercase tracking-widest block mb-4">
                [ NETWORK PRESENCE ]
              </span>
              <div className="flex flex-wrap items-center gap-4">
                {socials.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-xs font-display font-bold tracking-wider text-[#111111] hover:text-[#F04444] transition-colors uppercase border-b border-transparent hover:border-[#F04444] pb-0.5"
                  >
                    <span>{s.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#F04444] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Clean Minimalist Inquiry Form */}
          <div className="lg:col-span-6">
            <form onSubmit={handleSubmit} className="border border-[#E5E5E5] p-8 bg-[#FAFAFA] space-y-6">
              <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-4 mb-2">
                <span className="font-display font-bold text-sm uppercase tracking-wider text-[#111111]">
                  SEND AN INQUIRY
                </span>
                <span className="font-mono text-xs text-[#F04444]">✻</span>
              </div>

              <div>
                <label className="font-mono text-[10px] uppercase tracking-wider text-[#777777] block mb-2">
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Carter"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white border border-[#E5E5E5] px-4 py-3 text-sm text-[#111111] placeholder-[#AAAAAA] focus:outline-none focus:border-[#111111] transition-colors"
                />
              </div>

              <div>
                <label className="font-mono text-[10px] uppercase tracking-wider text-[#777777] block mb-2">
                  YOUR EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white border border-[#E5E5E5] px-4 py-3 text-sm text-[#111111] placeholder-[#AAAAAA] focus:outline-none focus:border-[#111111] transition-colors"
                />
              </div>

              <div>
                <label className="font-mono text-[10px] uppercase tracking-wider text-[#777777] block mb-2">
                  MESSAGE / PROJECT SCOPE *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Briefly describe your requirements or inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border border-[#E5E5E5] px-4 py-3 text-sm text-[#111111] placeholder-[#AAAAAA] focus:outline-none focus:border-[#111111] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-[#F04444] text-white py-4 px-6 font-display font-bold text-xs uppercase tracking-widest transition-colors duration-200"
              >
                <span>TRANSMIT MESSAGE</span>
                <Send className="w-4 h-4" />
              </button>

              {formSent && (
                <div className="p-3 bg-[#EBFBF0] border border-[#22C55E]/30 text-[#15803D] text-xs font-mono text-center">
                  Email client triggered. Looking forward to our discussion!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
