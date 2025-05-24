import React, { useEffect, useRef, useState } from 'react';
import { projectsData } from '../../data/projectsData';
import { ChevronLeft, ChevronRight, Briefcase, GraduationCap, Maximize2, Minimize2, Download } from 'lucide-react';
import { useProject } from '../../contexts/ProjectContext';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

const Documentation: React.FC = () => {
  const docsRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { selectedProject, selectedCategory, setSelectedProject, setSelectedCategory } = useProject();
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [scale, setScale] = useState(1.0);
  
  const project = projectsData[selectedCategory].find(p => p.id === selectedProject);

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `/pdfjs/pdf.worker.min.js`;
  }, []);

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
    <section id="documentation" className={`py-16 md:py-24 ${isFullscreen ? 'fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-auto' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-purple-600">
            Documentations
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-800 dark:text-gray-300 max-w-3xl mx-auto font-medium">
            Consultez mes documentations techniques détaillées sur différents projets et technologies
          </p>
        </div>
        
        <div 
          ref={docsRef}
          className="transition-all duration-300 opacity-0 translate-y-10"
        >
          {/* Category Selector */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => handleCategoryChange('enterprise')}
              className={`flex items-center px-4 py-2 rounded-xl transition-all ${
                selectedCategory === 'enterprise'
                  ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <Briefcase className="w-5 h-5 mr-2" />
              Projets en entreprise
            </button>
            <button
              onClick={() => handleCategoryChange('school')}
              className={`flex items-center px-4 py-2 rounded-xl transition-all ${
                selectedCategory === 'school'
                  ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              Projets scolaires
            </button>
          </div>
          
          {/* Project Selection */}
          <div className="flex-1 max-w-md mx-auto mb-8">
            <select
              value={selectedProject}
              onChange={(e) => handleProjectChange(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 
                       bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-orange-500 focus:border-transparent
                       text-center transition-all duration-300"
            >
              {projectsData[selectedCategory].map(p => (
                <option key={p.id} value={p.id}>
                  {p.title}
                </option>
              ))}
            </select>
          </div>
          
          {/* PDF Viewer */}
          <div className={`relative group ${isFullscreen ? 'fixed inset-4 z-50 overflow-auto' : ''}`}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                <div className="flex gap-2">
                  <button
                    onClick={handleDownload}
                    className="p-2 rounded-xl bg-gradient-to-r from-orange-500 to-purple-500 text-white hover:opacity-90 transition-all duration-300"
                    title="Télécharger le PDF"
                  >
                    <Download size={20} />
                  </button>
                  <button
                    onClick={toggleFullscreen}
                    className="p-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 
                             hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
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
                    className="p-2 rounded-xl bg-orange-50 dark:bg-orange-950/50 text-orange-700 dark:text-orange-400 
                             disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300
                             hover:bg-orange-100 dark:hover:bg-orange-900/50"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    Page {pageNumber} sur {numPages}
                  </span>
                  <button
                    onClick={handleNext}
                    disabled={numPages === null || pageNumber >= numPages}
                    className="p-2 rounded-xl bg-orange-50 dark:bg-orange-950/50 text-orange-700 dark:text-orange-400 
                             disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300
                             hover:bg-orange-100 dark:hover:bg-orange-900/50"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              <div className="flex justify-center">
                <Document
                  file={project.pdfUrl}
                  onLoadSuccess={onDocumentLoadSuccess}
                  className="border border-gray-300 dark:border-gray-600 rounded-xl overflow-hidden"
                >
                  <Page
                    pageNumber={pageNumber}
                    scale={scale}
                    className="shadow-lg"
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