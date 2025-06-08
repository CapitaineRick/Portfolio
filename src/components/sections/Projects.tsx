import React, { useEffect, useRef, useState } from 'react';
import { projectsData } from '../../data/projectsData';
import ProjectCard from '../ui/ProjectCard';

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Injecte les tags "Entreprise" et "Ecole" sans modifier la source
  const enterpriseProjects = projectsData.enterprise.map(p => ({
    ...p,
    tags: [...(p.tags || []), 'Entreprise'],
  }));

  const schoolProjects = projectsData.school.map(p => ({
    ...p,
    tags: [...(p.tags || []), 'Ecole'],
  }));

  const allProjects = [...enterpriseProjects, ...schoolProjects];

  // Priorité : Entreprise, Ecole, puis les autres en ordre alphabétique
  const priorityTags = ['Entreprise', 'Ecole','Personnel'];
  const otherTags = Array.from(
    new Set(allProjects.flatMap(project => project.tags || []))
  ).filter(tag => !priorityTags.includes(tag)).sort();

  const tags = [...priorityTags, ...otherTags];

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTags]);

  const filteredProjects = selectedTags.length === 0
    ? allProjects
    : allProjects.filter(project =>
        project.tags?.some(tag => selectedTags.includes(tag))
      );

  const projectsPerPage = 9;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
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

  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
      card.classList.remove('animate-fade-in-up');
      card.classList.add('opacity-0');

      setTimeout(() => {
        card.classList.add('animate-fade-in-up');
        card.classList.remove('opacity-0');
      }, 50 * index);
    });
  }, [currentProjects]);

  return (
    <section id="projects" className="py-20 flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-500">
            Mes Projets
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Découvrez mes réalisations techniques en administration système, réseau et sécurité
          </p>
        </div>

        {/* Filtres par tags */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-6 py-3 rounded-2xl border transition-all duration-300 font-semibold text-base hover-lift ${
                selectedTags.includes(tag)
                  ? 'bg-orange-500 text-white border-orange-500 shadow-lg'
                  : 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700 hover:border-gray-500'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projets affichés */}
        <div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 opacity-0"
        >
          {currentProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isEnterprise={project.tags?.includes('Entreprise')}
              className="project-card opacity-0"
            />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-6">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-6 py-3 rounded-xl bg-gray-800 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors font-semibold border border-gray-700 hover-lift"
            >
              Précédent
            </button>
            <span className="text-gray-300 text-lg font-semibold">
              Page {currentPage} / {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-6 py-3 rounded-xl bg-gray-800 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors font-semibold border border-gray-700 hover-lift"
            >
              Suivant
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;