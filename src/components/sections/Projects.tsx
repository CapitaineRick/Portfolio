import React, { useEffect, useRef, useState } from 'react';
import { projectsData } from '../../data/projectsData';
import { Briefcase, GraduationCap, Filter, Tags, Calendar, CheckCircle2, Search, ChevronDown, ChevronUp, ExternalLink, ArrowRight, FileText } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set worker URL for PDF.js
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
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-50/20 to-purple-50/20 dark:from-orange-900/20 dark:to-purple-900/20" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-purple-600">
            Mes Projets
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez mes réalisations techniques en administration système, réseau et sécurité
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-8">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher un projet..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-gray-800 
                          border border-gray-200 dark:border-gray-700 
                          focus:ring-2 focus:ring-orange-500 focus:border-transparent
                          text-gray-900 dark:text-white placeholder-gray-500"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Project Type Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedType('all')}
              className={`relative group overflow-hidden px-6 py-3 rounded-2xl font-medium transition-all duration-300 
                ${selectedType === 'all'
                  ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-lg'
                }`}
            >
              <span className="relative z-10">Tous les projets</span>
              {selectedType === 'all' && (
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-500 opacity-50 animate-pulse"></div>
              )}
            </button>
            
            <button
              onClick={() => setSelectedType('enterprise')}
              className={`relative group overflow-hidden px-6 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center gap-2
                ${selectedType === 'enterprise'
                  ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-lg'
                }`}
            >
              <Briefcase className="w-5 h-5" />
              <span className="relative z-10">Professionnels</span>
              {selectedType === 'enterprise' && (
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-500 opacity-50 animate-pulse"></div>
              )}
            </button>
            
            <button
              onClick={() => setSelectedType('school')}
              className={`relative group overflow-hidden px-6 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center gap-2
                ${selectedType === 'school'
                  ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-lg'
                }`}
            >
              <GraduationCap className="w-5 h-5" />
              <span className="relative z-10">Scolaires</span>
              {selectedType === 'school' && (
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-500 opacity-50 animate-pulse"></div>
              )}
            </button>
          </div>

          {/* Tag Cloud */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Tags className="w-5 h-5 text-orange-500" />
                <h3 className="text-lg font-semibold">Technologies</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className={`relative group overflow-hidden px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                      ${selectedTag === tag
                        ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-lg'
                        : 'bg-orange-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-md'
                      }`}
                  >
                    #{tag}
                    {selectedTag === tag && (
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-500 opacity-50 animate-pulse"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Project Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                icon: Briefcase,
                count: projectsData.enterprise.length,
                label: 'Projets pro',
                gradient: 'from-orange-500 to-red-500'
              },
              {
                icon: GraduationCap,
                count: projectsData.school.length,
                label: 'Projets scolaires',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Tags,
                count: allTags.length,
                label: 'Technologies',
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                icon: CheckCircle2,
                count: projectsData.enterprise.length + projectsData.school.length,
                label: 'Total projets',
                gradient: 'from-purple-500 to-pink-500'
              }
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300`} />
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6">
                  <div className="flex flex-col items-center">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.gradient} mb-3`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold mb-1">{stat.count}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div 
          ref={projectsRef}
          className="transition-all duration-1000 opacity-0 translate-y-10"
        >
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <div className="relative group">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div key={project.id} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                    {/* Project Image */}
                    <div className="relative h-48">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
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
                      {/* Project Type Badge */}
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

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>

                      {/* Project Actions */}
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
                            className="p-2 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-500 hover:text-orange-500 transition-colors"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>

                      {/* Documentation Viewer */}
                      {selectedDoc === project.id && project.pdfUrl && (
                        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                          <div className="flex justify-between items-center mb-4">
                            <h4 className="font-medium text-orange-500">Documentation</h4>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={handlePrevPage}
                                disabled={pageNumber <= 1}
                                className="p-1 rounded-lg bg-orange-50 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 
                                         disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                <ChevronDown className="w-4 h-4 transform rotate-90" />
                              </button>
                              <span className="text-sm">
                                Page {pageNumber} / {numPages || 1}
                              </span>
                              <button
                                onClick={handleNextPage}
                                disabled={pageNumber >= (numPages || 1)}
                                className="p-1 rounded-lg bg-orange-50 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400
                                         disabled:opacity-50 disabled:cursor-not-allowed"
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
                        </div>
                      )}

                      {/* Expanded Content */}
                      {expandedProject === project.id && (
                        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-medium text-orange-500 mb-2">Technologies utilisées</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                  <span 
                                    key={tag}
                                    className="px-2 py-1 text-xs rounded-lg bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;