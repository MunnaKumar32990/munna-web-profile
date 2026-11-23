import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, GraduationCap, Code } from 'lucide-react';
import { usePortfolioData } from '../contexts/PortfolioContext';

const About = () => {
  const { portfolio } = usePortfolioData();
  const about = portfolio?.about || {};

  return (
    <section id="about" className="py-24 bg-white text-[#111111] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-6 border-b border-[#E5E5E5] pb-4">
          <span className="text-[#F04444] text-xs font-mono">✻</span>
          <span className="label-tiny text-[#777777]">04 / PHILOSOPHY & BACKGROUND</span>
        </div>

        {/* Oversized Headline */}
        <div className="mb-16">
          <h2 className="headline-large text-[#111111]">
            BEYOND WRITING CODE,<br />
            I BUILD <span className="text-[#F04444]">SOLUTIONS.</span>
          </h2>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait & Key Attributes */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Rectangular Agency Portrait (Minimal 1px Border, No Rounded Blobs) */}
            <div className="relative border border-[#E5E5E5] bg-[#F3F3F3] p-2 aspect-[4/5] overflow-hidden group">
              <img
                src={portfolio?.profileImage || './NewProfile.png'}
                alt={portfolio?.name || 'Munna Kumar'}
                className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#111111]/90 backdrop-blur-sm text-white p-3 border border-[#333333] flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-xs uppercase tracking-wider">
                    {portfolio?.name || 'MUNNA KUMAR'}
                  </div>
                  <div className="font-mono text-[10px] text-[#AAAAAA]">
                    {portfolio?.role || 'BACKEND & AI ENGINEER'}
                  </div>
                </div>
                <span className="text-[#F04444] text-xs">✻</span>
              </div>
            </div>

            {/* Quick Stat Pill Cards */}
            <div className="grid grid-cols-2 gap-4 font-mono text-xs">
              <div className="border border-[#E5E5E5] p-4 bg-[#FAFAFA]">
                <span className="text-[10px] text-[#777777] uppercase block mb-1">
                  CURRENT CGPA
                </span>
                <span className="font-display font-bold text-lg text-[#111111]">
                  {portfolio?.cgpa || '9.6'} / 10
                </span>
                <span className="text-[11px] text-[#555555] block mt-0.5">
                  KL University
                </span>
              </div>

              <div className="border border-[#E5E5E5] p-4 bg-[#FAFAFA]">
                <span className="text-[10px] text-[#777777] uppercase block mb-1">
                  ALGORITHMS
                </span>
                <span className="font-display font-bold text-lg text-[#111111]">
                  {portfolio?.leetcodeCount || '200+'} Solved
                </span>
                <span className="text-[11px] text-[#555555] block mt-0.5">
                  LeetCode & DSA
                </span>
              </div>
            </div>

            {/* Resume Button */}
            <a
              href="/PortfolioResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between p-4 border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white transition-all uppercase font-display font-bold text-xs tracking-widest group"
            >
              <span>DOWNLOAD CURRICULUM VITAE</span>
              <ArrowUpRight className="w-4 h-4 text-[#F04444] group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Right Column: Detailed Narrative & Focus Areas */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {/* Primary Narrative */}
            <div>
              <span className="font-mono text-xs text-[#F04444] uppercase tracking-wider block mb-2">
                // EXECUTIVE SUMMARY
              </span>
              <p className="text-lg sm:text-xl text-[#222222] font-normal leading-relaxed">
                Detail-oriented Software & Backend Engineer with robust expertise in Python, FastAPI, Java SpringBoot, and modern React interfaces. Experienced in deploying cloud-native solutions leveraging AWS, integrating cutting-edge LLMs, and solving complex algorithmic challenges.
              </p>
            </div>

            {/* Horizontal Line */}
            <div className="divider-light" />

            {/* Core Pillars */}
            <div className="space-y-6">
              <span className="font-mono text-xs text-[#777777] uppercase tracking-wider block">
                [ CORE TECHNICAL PILLARS ]
              </span>

              <div className="border-t border-[#E5E5E5] pt-4">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h4 className="font-display font-bold text-base text-[#111111] uppercase tracking-tight">
                    01. SCALABLE BACKEND & API ARCHITECTURE
                  </h4>
                  <span className="font-mono text-xs text-[#F04444]">✦</span>
                </div>
                <p className="text-sm text-[#555555] leading-relaxed">
                  Engineering high-throughput, low-latency RESTful APIs and WebSocket microservices with FastAPI and SpringBoot. Dedicated to schema rigor, clean layering, and database efficiency.
                </p>
              </div>

              <div className="border-t border-[#E5E5E5] pt-4">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h4 className="font-display font-bold text-base text-[#111111] uppercase tracking-tight">
                    02. INTELLIGENT AI & MULTIMODAL SYSTEMS
                  </h4>
                  <span className="font-mono text-xs text-[#F04444]">✦</span>
                </div>
                <p className="text-sm text-[#555555] leading-relaxed">
                  Integrating OpenAI GPT-4, Groq, Gemini API, and Azure Cognitive Services to solve real-world problems — such as multilingual voice assistance for farmers and regulatory compliance checking.
                </p>
              </div>

              <div className="border-t border-[#E5E5E5] pt-4">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h4 className="font-display font-bold text-base text-[#111111] uppercase tracking-tight">
                    03. CLOUD DEPLOYMENT & CONTAINERIZATION
                  </h4>
                  <span className="font-mono text-xs text-[#F04444]">✦</span>
                </div>
                <p className="text-sm text-[#555555] leading-relaxed">
                  Certified AWS Cloud Practitioner with hands-on SageMaker, Lambda, and Step Functions experience, reducing cloud resource expenses through automated workflows and model optimization.
                </p>
              </div>
            </div>

            {/* Horizontal Line */}
            <div className="divider-light" />

            {/* Personal Manifesto Quote */}
            <div className="bg-[#FAFAFA] border-l-2 border-[#F04444] p-5">
              <p className="font-display text-sm text-[#333333] italic leading-relaxed">
                "Writing code is only 20% of engineering. The remaining 80% is designing modular systems, preventing edge cases, and ensuring that software serves human needs seamlessly."
              </p>
              <div className="mt-3 font-mono text-xs text-[#777777] uppercase tracking-wider">
                — Munna Kumar
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
