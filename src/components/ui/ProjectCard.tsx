import React, { useState } from 'react';
import { ArrowRight, Briefcase, GraduationCap, ExternalLink, Maximize2, FileText, X, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { useProject } from '../../contexts/ProjectContext';
import { Document, Page } from 'react-pdf';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  pdfUrl: string;
}

interface ProjectCardProps {
  project: Project;
  isEnterprise: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isEnterprise, className = '', style }) => {
  const { setSelectedProject, setSelectedCategory } = useProject();
  const [showFullscreen, setShowFullscreen] = useState(false);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [pdfError, setPdfError] = useState<string | null>(null);

  const scrollToDocumentation = () => {
    const docsSection = document.querySelector('#documentation');
    if (docsSection) {
      setSelectedProject(project.id);
      setSelectedCategory(isEnterprise ? 'enterprise' : 'school');
      docsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownload = () => {
    if (project.pdfUrl) {
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
    setPdfError(null);
  }

  function onDocumentLoadError(error: Error) {
    console.error('Error loading PDF:', error);
    setPdfError('Impossible de charger le PDF. Veuillez réessayer plus tard.');
  }

  return (
    <>
      <div 
        className={`group relative ${className}`}
        style={style}
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
        <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
          {/* Project Type Badge */}
          <div className="absolute top-4 right-4 z-10">
            <div className={`
              p-2 rounded-xl backdrop-blur-md
              ${isEnterprise 
                ? 'bg-orange-500/90 text-white' 
                : 'bg-blue-500/90 text-white'
              }
            `}>
              {isEnterprise ? (
                <Briefcase className="w-5 h-5" />
              ) : (
                <GraduationCap className="w-5 h-5" />
              )}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative h-48 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map(tag => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 text-xs rounded-lg bg-white/20 backdrop-blur-sm text-white"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded-lg bg-white/20 backdrop-blur-sm text-white">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
              {project.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={scrollToDocumentation}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-50 dark:bg-orange-950/50 
                           text-orange-600 dark:text-orange-400 font-medium transition-all duration-300
                           hover:bg-orange-100 dark:hover:bg-orange-900/50 group/btn"
                >
                  <FileText className="w-4 h-4" />
                  Documentation
                  <ArrowRight className="transition-transform group-hover/btn:translate-x-1" size={16} />
                </button>

                <button
                  onClick={() => setShowFullscreen(true)}
                  className={`p-2 rounded-xl transition-colors ${
                    project.pdfUrl 
                      ? 'bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/50'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                  }`}
                  disabled={!project.pdfUrl}
                  title={project.pdfUrl ? 'Voir en plein écran' : 'Documentation non disponible'}
                >
                  <Maximize2 size={16} />
                </button>
              </div>
              
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
          </div>
        </div>
      </div>

      {/* Fullscreen Documentation Modal */}
      {showFullscreen && project.pdfUrl && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-6xl max-h-[90vh] flex flex-col overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownload}
                  className="p-2 rounded-xl bg-orange-50 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 
                           hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                  title="Télécharger le PDF"
                >
                  <Download size={20} />
                </button>
                <button
                  onClick={() => setShowFullscreen(false)}
                  className="p-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 
                           hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="flex justify-center p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
                  disabled={pageNumber <= 1}
                  className="p-2 rounded-xl bg-orange-50 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400
                           disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="text-gray-700 dark:text-gray-300">
                  Page {pageNumber} sur {numPages || '?'}
                </span>
                <button
                  onClick={() => setPageNumber(Math.min(numPages || 1, pageNumber + 1))}
                  disabled={!numPages || pageNumber >= numPages}
                  className="p-2 rounded-xl bg-orange-50 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400
                           disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
                <div className="flex items-center gap-2 ml-4">
                  <button
                    onClick={() => setScale(Math.max(0.5, scale - 0.1))}
                    className="p-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300
                             hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    -
                  </button>
                  <span className="text-gray-700 dark:text-gray-300 min-w-[60px] text-center">
                    {Math.round(scale * 100)}%
                  </span>
                  <button
                    onClick={() => setScale(Math.min(2.0, scale + 0.1))}
                    className="p-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300
                             hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex-1 overflow-auto p-4">
              {pdfError ? (
                <div className="flex flex-col items-center justify-center p-8 text-center">
                  <div className="text-red-500 dark:text-red-400 mb-4">{pdfError}</div>
                  <button
                    onClick={handleDownload}
                    className="px-4 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors"
                  >
                    Télécharger le PDF
                  </button>
                </div>
              ) : (
                <div className="flex justify-center">
                  <Document
                    file={project.pdfUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={onDocumentLoadError}
                    loading={
                      <div className="flex items-center justify-center p-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
                      </div>
                    }
                    className="mx-auto"
                  >
                    <Page
                      pageNumber={pageNumber}
                      scale={scale}
                      className="mx-auto shadow-lg"
                      renderTextLayer={true}
                      renderAnnotationLayer={true}
                    />
                  </Document>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;