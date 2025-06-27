import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, image, link }) => {
  return (
    <>
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full md:w-1/3 p-4"
      whileHover={{ scale: 1.05 }}
    >
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-[380px] object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
      </div>
    </motion.a>
    </>
  );
};

export default ProjectCard;
