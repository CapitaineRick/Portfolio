import React, { useEffect, useRef, useState } from 'react';
import { projectsData } from '../../data/projectsData';
import ProjectCard from '../ui/ProjectCard';
import { Briefcase, GraduationCap } from 'lucide-react';

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
  };

  // Combine enterprise and school projects into a single array
  const allProjects = [...projectsData.enterprise, ...projectsData.school];

  // Get all unique tags
  const allTags = Array.from(
    new Set(allProjects.flatMap(project => project.tags))
  ).sort();

  // Filter projects based on selected tag
  const filteredProjects = selectedTag
    ? allProjects.filter(project => project.tags.includes(selectedTag))
    : allProjects;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          
          // Animate project cards
          const cards = entry.target.querySelectorAll('.project-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('opacity-100', 'scale-100');
              card.classList.remove('opacity-0', 'scale-95');
            }, 100 * index);
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
  }, [selectedTag]);

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Expériences</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
          
          {/* Tags Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all
                  ${selectedTag === tag 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        
        <div 
          ref={projectsRef}
          className="transition-all duration-1000 opacity-0 translate-y-10"
        >
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Aucun projet ne correspond à ce filtre.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id}
                  project={project}
                  isEnterprise={projectsData.enterprise.some(p => p.id === project.id)}
                  className="project-card opacity-0 scale-95 transition-all duration-500"
                  style={{ transitionDelay: `${index * 100}ms` }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;