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
  const priorityTags = ['Entreprise', 'Ecole'];
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
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
      card.classList.remove('opacity-100', 'scale-100');
      card.classList.add('opacity-0', 'scale-95');

      setTimeout(() => {
        card.classList.add('opacity-100', 'scale-100');
        card.classList.remove('opacity-0', 'scale-95');
      }, 50 * index);
    });
  }, [currentProjects]);

  return (
    <section id="projects" className="py-16 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-purple-600">
            Mes Projets
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-medium">
            Découvrez mes réalisations techniques en administration système, réseau et sécurité
          </p>
        </div>

        {/* Filtres par tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-4 py-2 rounded-full border transition duration-200 ${
                selectedTags.includes(tag)
                  ? 'bg-orange-500 text-white border-orange-500'
                  : 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projets affichés */}
        <div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isEnterprise={project.tags?.includes('Entreprise')}
              className="project-card opacity-0 scale-95 transition-all duration-300"
            />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex justify-center items-center gap-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded bg-gray-700 text-white disabled:opacity-40"
            >
              Précédent
            </button>
            <span className="text-gray-300">
              Page {currentPage} / {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded bg-gray-700 text-white disabled:opacity-40"
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
