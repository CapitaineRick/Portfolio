import React, { useEffect, useRef, useState } from 'react';
import { projectsData } from '../../data/projectsData';
import { Briefcase, GraduationCap, Filter, Tags, Search, ChevronDown, ChevronUp, ExternalLink, ArrowRight, FileText } from 'lucide-react';
import { useProject } from '../../contexts/ProjectContext';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<'all' | 'enterprise' | 'school'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
  };

  const handleDocClick = (projectId: string) => {
    setSelectedDoc(selectedDoc === projectId ? null : projectId);
    setPageNumber(1);
  };

  // Get available tags based on selected type
  const getAvailableTags = () => {
    let projects = [];
    if (selectedType === 'all') {
      projects = [...projectsData.enterprise, ...projectsData.school];
    } else if (selectedType === 'enterprise') {
      projects = projectsData.enterprise;
    } else {
      projects = projectsData.school;
    }
    return Array.from(new Set(projects.flatMap(project => project.tags))).sort();
  };

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

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  const handlePrevPage = () => {
    setPageNumber(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setPageNumber(prev => Math.min(prev + 1, numPages || 1));
  };

  useEffect(() => {
    // Reset selected tag if it's not available in current type
    const availableTags = getAvailableTags();
    if (selectedTag && !availableTags.includes(selectedTag)) {
      setSelectedTag(null);
    }
  }, [selectedType]);

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
    <section id="projects" className="py-16 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-purple-600">
            Mes Projets
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez mes réalisations techniques en administration système, réseau et sécurité
          </p>
        </div>

        {/* Modern Search Interface */}
        <div className="mb-12">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8">
              {/* Search Bar */}
              <div className="relative mb-8">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Search className="h-6 w-6 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Rechercher un projet par nom, description ou technologie..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-14 pr-4 py-4 rounded-2xl bg-gray-50 dark:bg-gray-700/50 
                           border-2 border-gray-200 dark:border-gray-600 
                           focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500
                           placeholder-gray-400 dark:placeholder-gray-500
                           text-lg transition-all duration-300"
                />
              </div>

              {/* Project Types */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="w-5 h-5 text-orange-500" />
                  <h3 className="text-lg font-semibold">Type de projet</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setSelectedType('all')}
                    className={`px-6 py-3 rounded-xl text-base font-medium transition-all duration-300 flex items-center gap-2
                      ${selectedType === 'all'
                        ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-lg shadow-orange-500/25'
                        : 'bg-gray-50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600/50'
                      }`}
                  >
                    Tous les projets
                  </button>
                  <button
                    onClick={() => setSelectedType('enterprise')}
                    className={`px-6 py-3 rounded-xl text-base font-medium transition-all duration-300 flex items-center gap-2
                      ${selectedType === 'enterprise'
                        ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-lg shadow-orange-500/25'
                        : 'bg-gray-50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600/50'
                      }`}
                  >
                    <Briefcase className="w-5 h-5" />
                    Professionnels
                  </button>
                  <button
                    onClick={() => setSelectedType('school')}
                    className={`px-6 py-3 rounded-xl text-base font-medium transition-all duration-300 flex items-center gap-2
                      ${selectedType === 'school'
                        ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-lg shadow-orange-500/25'
                        : 'bg-gray-50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600/50'
                      }`}
                  >
                    <GraduationCap className="w-5 h-5" />
                    Scolaires
                  </button>
                </div>
              </div>

              {/* Active Filters Display */}
              {(selectedType !== 'all' || selectedTag || searchTerm) && (
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Filtres actifs:</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedType !== 'all' && (
                        <span className="px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
                          {selectedType === 'enterprise' ? 'Projets professionnels' : 'Projets scolaires'}
                        </span>
                      )}
                      {selectedTag && (
                        <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                          #{selectedTag}
                        </span>
                      )}
                      {searchTerm && (
                        <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                          Recherche: "{searchTerm}"
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Technologies Filter */}
        <div className="mb-12">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8">
              <div className="flex items-center gap-2 mb-4">
                <Tags className="w-5 h-5 text-orange-500" />
                <h3 className="text-lg font-semibold">Technologies disponibles</h3>
                <span className="text-sm text-gray-500">
                  ({selectedType === 'all' ? 'tous les projets' : selectedType === 'enterprise' ? 'projets professionnels' : 'projets scolaires'})
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {getAvailableTags().map(tag => (
                  <button
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                      ${selectedTag === tag
                        ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-lg shadow-orange-500/25'
                        : 'bg-gray-50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600/50'
                      }`}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div 
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 opacity-0 translate-y-10"
        >
          {filteredProjects.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <div className="relative group inline-block">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8">
                  <Search className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Aucun projet trouvé</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Essayez de modifier vos critères de recherche
                  </p>
                </div>
              </div>
            </div>
          ) : (
            filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="project-card group transition-all duration-300 opacity-0 scale-95 h-fit"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden h-full">
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
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {project.description}
                      </p>

                      <div className="flex items-center justify-between">
                        {project.pdfUrl ? (
                          <button
                            onClick={() => handleDocClick(project.id)}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-50 dark:bg-orange-950/50 
                                     text-orange-600 dark:text-orange-400 font-medium transition-all duration-300
                                     hover:bg-orange-100 dark:hover:bg-orange-900/50"
                          >
                            <FileText className="w-4 h-4" />
                            Documentation
                          </button>
                        ) : (
                          <button
                            onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-50 dark:bg-orange-950/50 
                                     text-orange-600 dark:text-orange-400 font-medium transition-all duration-300
                                     hover:bg-orange-100 dark:hover:bg-orange-900/50"
                          >
                            {expandedProject === project.id ? (
                              <>
                                Voir moins
                                <ChevronUp className="w-4 h-4" />
                              </>
                            ) : (
                              <>
                                Voir plus
                                <ChevronDown className="w-4 h-4" />
                              </>
                            )}
                          </button>
                        )}
                        
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-700 
                                     text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-all duration-300"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Demo
                          </a>
                        )}
                      </div>

                      {((selectedDoc === project.id && project.pdfUrl) || expandedProject === project.id) && (
                        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                          {selectedDoc === project.id && project.pdfUrl ? (
                            <>
                              <div className="flex justify-between items-center mb-4">
                                <h4 className="font-medium text-orange-500">Documentation</h4>
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={handlePrevPage}
                                    disabled={pageNumber <= 1}
                                    className="p-2 rounded-lg bg-orange-50 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 
                                             disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                                  >
                                    <ChevronDown className="w-4 h-4 transform rotate-90" />
                                  </button>
                                  <span className="text-sm">
                                    Page {pageNumber} / {numPages || 1}
                                  </span>
                                  <button
                                    onClick={handleNextPage}
                                    disabled={pageNumber >= (numPages || 1)}
                                    className="p-2 rounded-lg bg-orange-50 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400
                                             disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                                  >
                                    <ChevronDown className="w-4 h-4 transform -rotate-90" />
                                  </button>
                                </div>
                              </div>
                              <div className="flex justify-center">
                                <Document
                                  file={project.pdfUrl}
                                  onLoadSuccess={onDocumentLoadSuccess}
                                  className="border rounded-lg overflow-hidden"
                                >
                                  <Page
                                    pageNumber={pageNumber}
                                    className="shadow-lg"
                                    renderTextLayer={true}
                                    renderAnnotationLayer={true}
                                  />
                                </Document>
                              </div>
                            </>
                          ) : (
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-medium text-orange-500 mb-2">Technologies utilisées</h4>
                                <div className="flex flex-wrap gap-2">
                                  {project.tags.map(tag => (
                                    <span 
                                      key={tag}
                                      className="px-2 py-1 text-xs rounded-lg bg-orange-50 dark:bg-orange-900/30 
                                               text-orange-600 dark:text-orange-400 transition-all duration-300"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;