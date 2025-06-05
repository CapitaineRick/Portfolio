import React, { useState } from 'react';
import { ArrowRight, Briefcase, GraduationCap, ExternalLink, Maximize2, X, Download, ChevronLeft, ChevronRight, FileText, ChevronDown } from 'lucide-react';
import { useProject } from '../../contexts/ProjectContext';
import { Document, Page } from 'react-pdf';

interface Document {
  title: string;
  url: string;
  description?: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  documents?: Document[];
  pdfUrl?: string;
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
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (selectedDocument) {
      const link = document.createElement('a');
      link.href = selectedDocument.url;
      const fileName = selectedDocument.url.split('/').pop() || `${selectedDocument.title}.pdf`;
      link.download = fileName;
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

  const handleDocumentSelect = (doc: Document) => {
    setSelectedDocument(doc);
    setShowFullscreen(true);
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <>
      <div 
        className={`group relative ${className}`}
        style={style}
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
        <div className="relative bg-gray-800 rounded-2xl overflow-hidden">
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
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-500 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-6 line-clamp-3">
              {project.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 relative">
                {project.documents ? (
                  <div className="relative\" ref={dropdownRef}>
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl 
                        bg-orange-900/30 text-orange-400 hover:bg-orange-900/50
                        font-medium transition-all duration-300"
                    >
                      <FileText className="w-4 h-4" />
                      Sélectionner un document
                      <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isDropdownOpen && (
                      <div 
                        className="absolute left-0 mt-2 w-64 bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden"
                        style={{ 
                          zIndex: 50,
                          position: 'absolute',
                          top: '100%',
                          left: '0'
                        }}
                      >
                        {project.documents.map((doc, index) => (
                          <button
                            key={index}
                            onClick={() => handleDocumentSelect(doc)}
                            className="w-full px-4 py-2 text-left hover:bg-gray-700 text-gray-300 hover:text-orange-400 transition-colors flex items-center gap-2"
                          >
                            <FileText className="w-4 h-4" />
                            <div>
                              <div className="font-medium">{doc.title}</div>
                              {doc.description && (
                                <div className="text-xs text-gray-400">{doc.description}</div>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => project.pdfUrl && setShowFullscreen(true)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl 
                      ${project.pdfUrl 
                        ? 'bg-orange-900/30 text-orange-400 hover:bg-orange-900/50'
                        : 'bg-gray-700 text-gray-600 cursor-not-allowed'
                      } font-medium transition-all duration-300 group/btn`}
                    disabled={!project.pdfUrl}
                    title={project.pdfUrl ? 'Voir le document' : 'Documentation non disponible'}
                  >
                    <Maximize2 className="w-4 h-4" />
                    Voir le document
                    <ArrowRight className="transition-transform group-hover/btn:translate-x-1" size={16} />
                  </button>
                )}
              </div>
              
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-gray-700 text-gray-400 hover:text-orange-500 transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Documentation Modal */}
      {showFullscreen && (selectedDocument?.url || project.pdfUrl) && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-auto p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">
                {selectedDocument?.title || project.title}
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownload}
                  className="p-2 rounded-xl bg-orange-900/30 text-orange-400 
                           hover:bg-orange-900/50 transition-colors"
                  title="Télécharger le PDF"
                >
                  <Download size={20} />
                </button>
                <button
                  onClick={() => {
                    setShowFullscreen(false);
                    setSelectedDocument(null);
                  }}
                  className="p-2 rounded-xl bg-gray-700 text-gray-300 
                           hover:bg-gray-600 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {pdfError ? (
              <div className="flex flex-col items-center justify-center p-8 text-center">
                <div className="text-red-400 mb-4">{pdfError}</div>
                <button
                  onClick={handleDownload}
                  className="px-4 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors"
                >
                  Télécharger le PDF
                </button>
              </div>
            ) : (
              <>
                <div className="flex justify-center mb-4">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
                      disabled={pageNumber <= 1}
                      className="p-2 rounded-xl bg-orange-900/30 text-orange-400
                               disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <span className="text-gray-300">
                      Page {pageNumber} sur {numPages}
                    </span>
                    <button
                      onClick={() => setPageNumber(Math.min(numPages || 1, pageNumber + 1))}
                      disabled={pageNumber >= (numPages || 1)}
                      className="p-2 rounded-xl bg-orange-900/30 text-orange-400
                               disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
                
                {/* Zoom controls */}
                <div className="flex justify-center mb-4">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => setScale(Math.max(0.5, scale - 0.1))}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-lg"
                    >
                      -
                    </button>
                    <span className="text-gray-300 min-w-[60px] text-center">
                      {Math.round(scale * 100)}%
                    </span>
                    <button 
                      onClick={() => setScale(Math.min(2.0, scale + 0.1))}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-lg"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <Document
                    file={selectedDocument?.url || project.pdfUrl}
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
                      className="mx-auto"
                      renderTextLayer={true}
                      renderAnnotationLayer={true}
                      height={800}
                    />
                  </Document>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;