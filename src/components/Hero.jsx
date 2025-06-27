import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
    <section id="about" className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 text-center">
      <motion.img
        src="./mine.jpg"
        alt="Profile"
        className="rounded-full w-40 h-40 mb-6 border-4 border-white"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.h2
        className="text-4xl font-bold mb-4"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Surya Tyagi
      </motion.h2>
      <motion.p
        className="text-lg max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        I'm a passionate web developer with experience in React, Tailwind, and animation using Framer Motion.
      </motion.p>
    </section>
    </>
  );
};

export default Hero;
