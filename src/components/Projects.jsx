import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Amazon Clone",
    image: "./Screenshot 2025-06-27 113342.png",
    link: "file:///C:/Users/2040s/OneDrive/Desktop/surya/amazon/amazon.html",
  },
  {
    title: "Travel india",
    image: "./Screenshot 2025-06-27 120533.png",
    link: "https://yourproject2.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
