import React, { useEffect, useRef, useState } from 'react';
import { projectsData } from '../../data/projectsData';
import { ChevronLeft, ChevronRight, Briefcase, GraduationCap, Maximize2, Minimize2, Download } from 'lucide-react';
import { useProject } from '../../contexts/ProjectContext';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set worker URL for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Documentation: React.FC = () => {
  const docsRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { selectedProject, selectedCategory, setSelectedProject, setSelectedCategory } = useProject();
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [scale, setScale] = useState(1.0);
  
  // Find the current project based on selection
  const project = projectsData[selectedCategory].find(p => p.id === selectedProject);

  const handlePrevious = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNext = () => {
    if (numPages && pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const handleCategoryChange = (category: 'enterprise' | 'school') => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedCategory(category);
      // Set the first project of the selected category as default
      setSelectedProject(projectsData[category][0].id);
      setPageNumber(1);
      setIsTransitioning(false);
    }, 300);
  };

  const handleProjectChange = (projectId: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedProject(projectId);
      setPageNumber(1);
      setIsTransitioning(false);
    }, 300);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    setScale(isFullscreen ? 1.0 : 1.5);
  };

  const handleDownload = () => {
    if (project?.pdfUrl) {
      const link = document.createElement('a');
      link.href = project.pdfUrl;
      link.download = `${project.title}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

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

    if (docsRef.current) {
      observer.observe(docsRef.current);
    }

    return () => {
      if (docsRef.current) {
        observer.unobserve(docsRef.current);
      }
    };
  }, []);

  if (!project) {
    return null;
  }

  return (
    <section id="documentation" className={`py-16 md:py-24 relative overflow-hidden ${isFullscreen ? 'fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-auto' : ''}`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -right-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Documentations</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>
        
        <div 
          ref={docsRef}
          className="transition-all duration-1000 opacity-0 translate-y-10"
        >
          {/* Category Selector */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => handleCategoryChange('enterprise')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === 'enterprise'
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-lg'
              }`}
            >
              <Briefcase className="w-5 h-5" />
              Projets en entreprise
            </button>
            <button
              onClick={() => handleCategoryChange('school')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === 'school'
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-lg'
              }`}
            >
              <GraduationCap className="w-5 h-5" />
              Projets scolaires
            </button>
          </div>
          
          {/* Project Selection */}
          <div className="flex-1 max-w-md mx-auto mb-8">
            <select
              value={selectedProject}
              onChange={(e) => handleProjectChange(e.target.value)}
              className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-center shadow-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
            >
              {projectsData[selectedCategory].map(p => (
                <option key={p.id} value={p.id}>
                  {p.title}
                </option>
              ))}
            </select>
          </div>
          
          {/* PDF Viewer */}
          <div className={`group relative ${isFullscreen ? 'fixed inset-4 z-50 overflow-auto' : ''}`}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-orange-500">{project.title}</h3>
                <div className="flex gap-2">
                  <button
                    onClick={handleDownload}
                    className="p-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
                    title="Télécharger le PDF"
                  >
                    <Download size={20} />
                  </button>
                  <button
                    onClick={toggleFullscreen}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex justify-center mb-6">
                <div className="flex items-center gap-4">
                  <button
                    onClick={handlePrevious}
                    disabled={pageNumber <= 1}
                    className="p-2 rounded-lg bg-orange-500 text-white disabled:bg-gray-300 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <span className="text-lg font-medium">
                    Page {pageNumber} sur {numPages}
                  </span>
                  <button
                    onClick={handleNext}
                    disabled={numPages === null || pageNumber >= numPages}
                    className="p-2 rounded-lg bg-orange-500 text-white disabled:bg-gray-300 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              <div className="flex justify-center">
                <Document
                  file={project.pdfUrl}
                  onLoadSuccess={onDocumentLoadSuccess}
                  className="border rounded-lg overflow-hidden shadow-2xl"
                >
                  <Page
                    pageNumber={pageNumber}
                    scale={scale}
                    className="transition-transform duration-300"
                    renderTextLayer={true}
                    renderAnnotationLayer={true}
                  />
                </Document>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;