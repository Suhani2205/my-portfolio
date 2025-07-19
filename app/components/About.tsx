"use client";

import React from 'react';
import { motion } from 'framer-motion';
// import Link from 'next/link';
import BackgroundEffect from './ui/BackgroundEffect';
// import { TextGenerateEffect } from './ui/TextGenerateEffect';

const About = () => {
  return (
    <BackgroundEffect 
      variant="gradient" 
      intensity="medium" 
      showSparkles={true}
      showFloatingIcons={true}
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
    >
    <div id="about" className=" min-h-screen py-20 px-4 items-center justify-center">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
         <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20 bg-black/70 backdrop-blur-sm "
                  >
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-400 mr-3"></div>
              <h2 className="text-sm uppercase tracking-widest text-purple-400 font-semibold">
                Myself
              </h2>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-400 ml-3"></div>
            
            
                    <h3 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200">
                      About Me
                    </h3>
                  </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border border-gray-800 rounded-2xl p-8 bg-black/70 backdrop-blur-sm text-center"
        >
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-lg text-white ">
              I&apos;m <span className="font-semibold">Suhani Gupta</span>, a passionate Software Developer currently pursuing a B.Tech in <span className="text-purple-400">Electronics and Communication Engineering</span> at The LNM Institute of Information Technology (LNMIIT).
              With strong foundations in Data Structures, Algorithms, and full-stack web development, I specialize in building scalable, user-focused applications powered by intelligent systems. My interests lie at the intersection of software engineering and real-world problem-solving.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <p className="text-lg text-white">
              I’ve led and contributed to several impactful projects, including an AI-powered trip itinerary generator and a disease prediction chatbot using machine learning. These projects combined APIs, GPT models, and CNN architectures to deliver real-time, data-driven results. I enjoy working across the full stack — from backend logic to clean and responsive frontends — while ensuring fast, reliable performance.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-10">
            <p className="text-lg text-white">
              Beyond academics, I’m an active problem solver with 1000+ DSA problems solved across LeetCode and Codeforces, and a strong advocate for structured learning. I’ve served as a teaching assistant and led teams during campus events like TEDxLNMIIT, reflecting my collaborative and leadership mindset. I’m always eager to explore opportunities that let me build, learn, and grow in fast-paced tech environments.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
    </BackgroundEffect>
  );
};

export default About;