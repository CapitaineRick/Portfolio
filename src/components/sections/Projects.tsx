import React, { useEffect, useRef, useState } from 'react';
import { projectsData } from '../../data/projectsData';
import ProjectCard from '../ui/ProjectCard';
import { Briefcase, GraduationCap, Filter, Tags, Calendar, CheckCircle2, Search } from 'lucide-react';

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<'all' | 'enterprise' | 'school'>('all');
  const [searchTerm, setSearchTerm] = useState('');

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

  // Filter projects based on selected tag, type and search term
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
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      projects = projects.filter(project => 
        project.title.toLowerCase().includes(term) ||
        project.description.toLowerCase().includes(term) ||
        project.tags.some(tag => tag.toLowerCase().includes(term))
      );
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
  }, [selectedTag, selectedType, searchTerm]);

  return (
    <section id="projects" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-purple-50/50 dark:from-orange-950/30 dark:to-purple-950/30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-purple-600">
            Mes Projets
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Découvrez mes réalisations techniques en administration système, réseau et sécurité
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-gray-800 shadow-lg 
                          border border-gray-200 dark:border-gray-700 
                          focus:ring-2 focus:ring-orange-500 focus:border-transparent
                          text-gray-900 dark:text-white placeholder-gray-500"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Project Type Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 
                ${selectedType === 'all'
                  ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-lg shadow-orange-500/25'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-lg'
                }`}
            >
              Tous les projets
            </button>
            <button
              onClick={() => setSelectedType('enterprise')}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center gap-2
                ${selectedType === 'enterprise'
                  ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-lg shadow-orange-500/25'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-lg'
                }`}
            >
              <Briefcase className="w-5 h-5" />
              Professionnels
            </button>
            <button
              onClick={() => setSelectedType('school')}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center gap-2
                ${selectedType === 'school'
                  ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-lg shadow-orange-500/25'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-lg'
                }`}
            >
              <GraduationCap className="w-5 h-5" />
              Scolaires
            </button>
          </div>

          {/* Tag Cloud */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Tags className="w-5 h-5 text-orange-500" />
              <h3 className="text-lg font-semibold">Technologies</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                    ${selectedTag === tag
                      ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-lg'
                      : 'bg-orange-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-md'
                    }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          {/* Project Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              {
                icon: Briefcase,
                count: projectsData.enterprise.length,
                label: 'Projets pro',
                color: 'from-orange-500 to-red-500'
              },
              {
                icon: GraduationCap,
                count: projectsData.school.length,
                label: 'Projets scolaires',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Tags,
                count: allTags.length,
                label: 'Technologies',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: CheckCircle2,
                count: projectsData.enterprise.length + projectsData.school.length,
                label: 'Total projets',
                color: 'from-purple-500 to-pink-500'
              }
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300`} />
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 text-center">
                  <div className="flex justify-center mb-3">
                    <stat.icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.count}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div 
          ref={projectsRef}
          className="transition-all duration-1000 opacity-0 translate-y-10"
        >
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-md mx-auto">
                <Search className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Aucun projet trouvé</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Essayez de modifier vos critères de recherche
                </p>
              </div>
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