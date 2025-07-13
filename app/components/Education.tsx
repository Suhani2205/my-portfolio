"use client";

import React from "react";
// other imports

import { motion } from 'framer-motion';

const educationData = [
  {
    institution: "The LNM Institute of Information Technology, Jaipur",
    degree: "B.Tech in Electronics and Communication Engineering",
    year: "2022 – 2026",
  },
  {
    institution: "Cambridge Court High School, Jaipur",
    degree: "Class XII – CBSE",
    year: "2021 – 2022",
  },
  {
    institution: "Cambridge Court High School, Jaipur",
    degree: "Class X – CBSE",
    year: "2019 – 2020",
  },
];

const Education = () => {
  return (
    <div id="education" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-14">
        {/* <h2 className="text-sm uppercase tracking-widest text-purple-400 font-semibold mb-2">Academics</h2> */}
        <h3 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200">
          Education
        </h3>
      </div>

      <div className="space-y-10 items-center">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-75 group-hover:opacity-100 blur-sm group-hover:blur transition duration-1000"></div>
            <div className="relative border border-purple-500/20 rounded-xl p-6 backdrop-blur-md bg-black/30 transition-all duration-300 group-hover:transform group-hover:scale-[1.01]">
              <h4 className="text-xl font-semibold text-purple-400 mb-2">{edu.institution}</h4>
              <p className="text-white mb-1">{edu.degree}</p>
              <p className="text-gray-400">{edu.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
