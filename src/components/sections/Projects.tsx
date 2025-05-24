import React, { useEffect, useRef, useState } from 'react';
import { projectsData } from '../../data/projectsData';
import ProjectCard from '../ui/ProjectCard';
import { Briefcase, GraduationCap, Filter, Tags, Calendar, CheckCircle2 } from 'lucide-react';

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<'all' | 'enterprise' | 'school'>('all');

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
  };

  // Get all unique tags from both enterprise and school projects
  const allTags = Array.from(
    new Set([
      ...projectsData.enterprise.flatMap(project => project.tags),
      ...projectsData.school.flatMap(project => project.tags)
    ])
  ).sort();

  // Filter projects based on selected tag and type
  const filteredProjects = (() => {
    let projects = [];
    if (selectedType === 'all' || selectedType === 'enterprise') {
      projects.push(...projectsData.enterprise);
    }
    if (selectedType === 'all' || selectedType === 'school') {
      projects.push(...projectsData.school);
    }
    if (selectedTag) {
      projects = projects.filter(project => project.tags.includes(selectedTag));
    }
    return projects;
  })();

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
  }, [selectedTag, selectedType]);

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-200/30 dark:bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-blue-200/30 dark:bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-200/30 dark:bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Expériences</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Découvrez mes projets professionnels et scolaires, témoignant de mon expertise
            en administration système et réseau.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <Briefcase className="w-8 h-8 text-orange-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {projectsData.enterprise.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Projets professionnels
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <GraduationCap className="w-8 h-8 text-orange-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {projectsData.school.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Projets scolaires
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <Tags className="w-8 h-8 text-orange-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {allTags.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Technologies utilisées
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-orange-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {projectsData.enterprise.length + projectsData.school.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Projets complétés
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
            <div className="flex items-center gap-2 mb-6">
              <Filter className="w-5 h-5 text-orange-500" />
              <h3 className="text-xl font-semibold">Filtrer les projets</h3>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
              <button
                onClick={() => setSelectedType('all')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                  selectedType === 'all'
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                Tous les projets
              </button>
              <button
                onClick={() => setSelectedType('enterprise')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                  selectedType === 'enterprise'
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                <Briefcase className="w-5 h-5" />
                Projets professionnels
              </button>
              <button
                onClick={() => setSelectedType('school')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                  selectedType === 'school'
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                <GraduationCap className="w-5 h-5" />
                Projets scolaires
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    selectedTag === tag
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600'
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div 
          ref={projectsRef}
          className="transition-all duration-1000 opacity-0 translate-y-10"
        >
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="flex justify-center mb-4">
                <Filter className="w-12 h-12 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Aucun projet trouvé</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Aucun projet ne correspond aux critères de filtrage sélectionnés.
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