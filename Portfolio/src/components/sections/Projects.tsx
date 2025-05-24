import React, { useEffect, useRef, useState } from 'react';
import { projectsData } from '../../data/projectsData';
import ProjectCard from '../ui/ProjectCard';

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          
          const cards = entry.target.querySelectorAll('.project-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('opacity-100', 'scale-100');
              card.classList.remove('opacity-0', 'scale-95');
            }, 50 * index);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="py-16 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-purple-600">
            Mes Projets
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-800 dark:text-gray-300 max-w-3xl mx-auto font-medium">
            Découvrez mes réalisations techniques en administration système, réseau et sécurité
          </p>
        </div>

        <div 
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-300 opacity-0 translate-y-10"
        >
          {projectsData.enterprise.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isEnterprise={true}
              className="project-card opacity-0 scale-95 transition-all duration-300"
            />
          ))}
          {projectsData.school.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isEnterprise={false}
              className="project-card opacity-0 scale-95 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;