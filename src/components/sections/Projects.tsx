import React, { useEffect, useRef, useState } from 'react';
import { projectsData } from '../../data/projectsData';
import { Briefcase, GraduationCap, Search, Tags, Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<'all' | 'enterprise' | 'school'>('all');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = Array.from(
    new Set([
      ...projectsData.enterprise.flatMap(project => project.tags),
      ...projectsData.school.flatMap(project => project.tags)
    ])
  ).sort();

  // Filter projects based on search, type, and tags
  const filteredProjects = (() => {
    let projects = [];
    if (selectedType === 'all' || selectedType === 'enterprise') {
      projects.push(...projectsData.enterprise);
    }
    if (selectedType === 'all' || selectedType === 'school') {
      projects.push(...projectsData.school);
    }
    
    return projects.filter(project => {
      const matchesSearch = searchTerm === '' || 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesTag = !selectedTag || project.tags.includes(selectedTag);
      
      return matchesSearch && matchesTag;
    });
  })();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
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
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-purple-600">
            Mes Projets
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto mb-6"></div>
        </div>

        <div className="mb-12">
          {/* Search and Filter Container */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 space-y-8">
            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 
                         border border-gray-200 dark:border-gray-600 
                         focus:ring-2 focus:ring-orange-500 focus:border-transparent
                         placeholder-gray-400 dark:placeholder-gray-500"
              />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project Type Filter */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="w-5 h-5 text-orange-500" />
                  <h3 className="font-semibold text-lg">Type de projet</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setSelectedType('all')}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                      ${selectedType === 'all'
                        ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-lg'
                        : 'bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-600/50'
                      }`}
                  >
                    Tous
                  </button>
                  <button
                    onClick={() => setSelectedType('enterprise')}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2
                      ${selectedType === 'enterprise'
                        ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-lg'
                        : 'bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-600/50'
                      }`}
                  >
                    <Briefcase className="w-4 h-4" />
                    Professionnels
                  </button>
                  <button
                    onClick={() => setSelectedType('school')}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2
                      ${selectedType === 'school'
                        ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-lg'
                        : 'bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-600/50'
                      }`}
                  >
                    <GraduationCap className="w-4 h-4" />
                    Scolaires
                  </button>
                </div>
              </div>

              {/* Technologies Filter */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Tags className="w-5 h-5 text-orange-500" />
                  <h3 className="font-semibold text-lg">Technologies</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {allTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300
                        ${selectedTag === tag
                          ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-lg'
                          : 'bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-600/50'
                        }`}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div 
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <div className="absolute bottom-4 left-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span 
                            key={tag}
                            className="px-2 py-1 text-xs rounded-lg bg-white/20 backdrop-blur-sm text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className={`
                      p-2 rounded-xl backdrop-blur-md
                      ${projectsData.enterprise.some(p => p.id === project.id)
                        ? 'bg-orange-500/90 text-white' 
                        : 'bg-blue-500/90 text-white'
                      }
                    `}>
                      {projectsData.enterprise.some(p => p.id === project.id) ? (
                        <Briefcase className="w-5 h-5" />
                      ) : (
                        <GraduationCap className="w-5 h-5" />
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;