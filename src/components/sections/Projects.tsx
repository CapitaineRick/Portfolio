import React, { useEffect, useRef, useState } from 'react';
import { projectsData } from '../../data/projectsData';
import ProjectCard from '../ui/ProjectCard';

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Injecte les tags de catégorie sans modifier la source
  const internshipProjects = projectsData.internship.map(p => ({
    ...p,
  }));

  const schoolProjects = projectsData.school.map(p => ({
    ...p,
    tags: [...(p.tags || []), 'AP'],
  }));

  const technicalProjects = projectsData.technical.map(p => ({
    ...p,
    tags: [...(p.tags || []), 'Guide Technique'],
  }));

  const allProjects = [...internshipProjects, ...schoolProjects, ...technicalProjects];

  // Catégories principales
  const categories = ['Tous', 'Stage / Alternance', 'AP', 'E6', 'Guide Technique'];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // Filtre les projets selon la catégorie
  const getFilteredProjects = () => {
    if (selectedCategory === 'Tous') {
      return allProjects;
    }
    return allProjects.filter(project => project.tags?.includes(selectedCategory));
  };

  const filteredProjects = getFilteredProjects();

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
    <section id="projects" className="py-12 sm:py-16 md:py-20 flex items-center justify-center relative overflow-hidden" itemScope itemType="https://schema.org/CreativeWork">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-500">
            Mes Documentations
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto mb-6 sm:mb-8 rounded-full"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            Découvrez mes réalisations techniques en administration système, réseau et sécurité
          </p>
        </div>

        {/* Filtres par catégorie */}
        <div className="mb-8 sm:mb-10 md:mb-12 px-4">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full border transition duration-300 font-semibold text-sm sm:text-base whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white border-orange-500 shadow-lg'
                    : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700 hover:border-gray-500'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projets affichés */}
        <div
          ref={projectsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10"
        >
          {currentProjects.map((project) => {
            // Déterminer la catégorie en fonction des tags
            let category: 'internship' | 'school' | 'technical' = 'technical';
            if (project.tags?.includes('Stage')) {
              category = 'internship';
            } else if (project.tags?.includes('AP')) {
              category = 'school';
            }

            return (
              <ProjectCard
                key={project.id}
                project={project}
                category={category}
                className="project-card opacity-0 scale-95 transition-all duration-300"
              />
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-gray-800 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors font-semibold border border-gray-700 text-sm sm:text-base"
            >
              Précédent
            </button>
            <span className="text-gray-300 text-base sm:text-lg font-semibold">
              Page {currentPage} / {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-gray-800 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors font-semibold border border-gray-700 text-sm sm:text-base"
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