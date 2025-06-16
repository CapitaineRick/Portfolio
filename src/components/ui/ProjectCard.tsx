import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ArrowRight, Briefcase, GraduationCap, ExternalLink, Maximize2, X, ChevronLeft, ChevronRight, FileText, ChevronDown, Globe, Download } from 'lucide-react';
import { Document, Page } from 'react-pdf';

interface DocumentItem {
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
  documents?: DocumentItem[];
  pdfUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  isEnterprise: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isEnterprise, className = '', style }) => {
  const [showFullscreen, setShowFullscreen] = useState(false);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.2);
  const [pdfError, setPdfError] = useState<string | null>(null);
  const [selectedDocument, setSelectedDocument] = useState<DocumentItem | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Fonction pour détecter si c'est un site web
  const isWebDocument = (url: string): boolean => {
    const webExtensions = ['.html', '.htm', '.php', '.asp', '.aspx', '.jsp'];
    const urlLower = url.toLowerCase();
    
    // Vérifier si l'URL commence par http/https
    if (urlLower.startsWith('http://') || urlLower.startsWith('https://')) {
      return true;
    }
    
    // Vérifier les extensions web
    return webExtensions.some(ext => urlLower.endsWith(ext));
  };

  // Fonction pour détecter si c'est un fichier téléchargeable
  const isDownloadableFile = (url: string): boolean => {
    const downloadableExtensions = ['.php', '.js', '.css', '.txt', '.json', '.xml', '.sql'];
    const urlLower = url.toLowerCase();
    return downloadableExtensions.some(ext => urlLower.endsWith(ext));
  };

  // Fonction pour télécharger un fichier
  const downloadFile = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Fonction pour construire l'URL complète
  const getFullUrl = (url: string): string => {
    // Si l'URL est déjà absolue (commence par http/https), la retourner telle quelle
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    
    // Si l'URL commence par /, c'est un chemin absolu depuis la racine
    if (url.startsWith('/')) {
      return `${window.location.origin}${url}`;
    }
    
    // Sinon, c'est un chemin relatif
    return `${window.location.origin}/${url}`;
  };

  // Gestion du scroll et de la touche Échap
  useEffect(() => {
    if (showFullscreen) {
      // Bloquer le scroll de manière plus agressive SANS changer la position
      const originalOverflow = document.body.style.overflow;
      const originalPosition = document.body.style.position;
      const originalTop = document.body.style.top;
      const originalWidth = document.body.style.width;
      const originalDocumentOverflow = document.documentElement.style.overflow;
      
      // Bloquer le scroll sans affecter la position
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      
      // Gestionnaire pour la touche Échap
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setShowFullscreen(false);
          setSelectedDocument(null);
        }
      };

      // Bloquer le scroll avec les touches
      const handleKeyDown = (event: KeyboardEvent) => {
        if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(event.key)) {
          // Permettre le scroll seulement à l'intérieur du modal PDF
          const target = event.target as HTMLElement;
          const isInsideModal = target.closest('.pdf-modal-content');
          if (!isInsideModal) {
            event.preventDefault();
          }
        }
      };

      // Bloquer le scroll avec la molette
      const handleWheel = (event: WheelEvent) => {
        const target = event.target as HTMLElement;
        const isInsideModal = target.closest('.pdf-modal-content');
        if (!isInsideModal) {
          event.preventDefault();
        }
      };

      // Bloquer le scroll tactile
      const handleTouchMove = (event: TouchEvent) => {
        const target = event.target as HTMLElement;
        const isInsideModal = target.closest('.pdf-modal-content');
        if (!isInsideModal) {
          event.preventDefault();
        }
      };

      document.addEventListener('keydown', handleEscape);
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('wheel', handleWheel, { passive: false });
      document.addEventListener('touchmove', handleTouchMove, { passive: false });

      return () => {
        // Restaurer les styles originaux SANS affecter la position de scroll
        document.body.style.overflow = originalOverflow;
        document.body.style.position = originalPosition;
        document.body.style.top = originalTop;
        document.body.style.width = originalWidth;
        document.documentElement.style.overflow = originalDocumentOverflow;
        
        // Supprimer les écouteurs
        document.removeEventListener('keydown', handleEscape);
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('wheel', handleWheel);
        document.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, [showFullscreen]);

  useEffect(() => {
    const updateDropdownPosition = () => {
      if (buttonRef.current && showDropdown) {
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const dropdownWidth = 320;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        let left = buttonRect.left;
        let top = buttonRect.bottom + 8;
        
        if (left + dropdownWidth > viewportWidth - 16) {
          left = Math.max(16, viewportWidth - dropdownWidth - 16);
        }
        
        if (left < 16) {
          left = 16;
        }
        
        const maxDropdownHeight = 400;
        if (top + maxDropdownHeight > viewportHeight - 16) {
          top = Math.max(16, buttonRect.top - maxDropdownHeight - 8);
        }
        
        setDropdownPosition({
          top: Math.max(16, top),
          left: left
        });
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      if (dropdownRef.current?.contains(target) || 
          buttonRef.current?.contains(target)) {
        return;
      }
      
      setShowDropdown(false);
    };

    const handleScroll = (event: Event) => {
      if (dropdownRef.current?.contains(event.target as Node)) {
        return;
      }
      
      if (showDropdown) {
        updateDropdownPosition();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      updateDropdownPosition();
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('scroll', handleScroll, true);
      document.addEventListener('keydown', handleKeyDown);
      window.addEventListener('resize', updateDropdownPosition);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', handleScroll, true);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', updateDropdownPosition);
    };
  }, [showDropdown]);

  const handleDocumentSelect = (doc: DocumentItem) => {
    // Vérifier si c'est un fichier téléchargeable
    if (isDownloadableFile(doc.url)) {
      const filename = doc.url.split('/').pop() || 'document';
      downloadFile(doc.url, filename);
      setShowDropdown(false);
      return;
    }

    // Vérifier si c'est un site web
    if (isWebDocument(doc.url)) {
      // Construire l'URL complète et naviguer dans le même onglet
      const fullUrl = getFullUrl(doc.url);
      window.location.href = fullUrl;
      setShowDropdown(false);
      return;
    }

    // Sinon, ouvrir dans le visualiseur PDF
    setSelectedDocument(doc);
    setShowFullscreen(true);
    setShowDropdown(false);
    setPageNumber(1);
    setPdfError(null);
  };

  const handleCloseModal = () => {
    setShowFullscreen(false);
    setSelectedDocument(null);
  };

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
    setPdfError(null);
  }

  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (project.demoUrl) {
      window.location.href = project.demoUrl;
    }
  };

  const handleSingleDocumentClick = () => {
    if (project.pdfUrl) {
      if (isDownloadableFile(project.pdfUrl)) {
        const filename = project.pdfUrl.split('/').pop() || 'document';
        downloadFile(project.pdfUrl, filename);
      } else if (isWebDocument(project.pdfUrl)) {
        const fullUrl = getFullUrl(project.pdfUrl);
        window.location.href = fullUrl;
      } else {
        setShowFullscreen(true);
      }
    }
  };

  // Dropdown component to be rendered in portal
  const DropdownMenu = () => {
    if (!showDropdown || !project.documents) return null;

    return createPortal(
      <div
        ref={dropdownRef}
        style={{
          position: 'fixed',
          top: `${dropdownPosition.top}px`,
          left: `${dropdownPosition.left}px`,
          zIndex: 9999,
          pointerEvents: 'auto'
        }}
        className="w-80 bg-gray-800 rounded-xl border border-gray-700 shadow-2xl backdrop-blur-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-h-96 overflow-y-auto overscroll-contain">
          <div className="p-2">
            {project.documents.map((doc, index) => {
              const isWeb = isWebDocument(doc.url);
              const isDownloadable = isDownloadableFile(doc.url);
              return (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleDocumentSelect(doc);
                  }}
                  className="w-full p-3 text-left hover:bg-gray-700 text-gray-300 hover:text-orange-400 transition-colors flex items-start gap-3 rounded-lg mb-1 last:mb-0 focus:outline-none focus:bg-gray-700 focus:ring-2 focus:ring-orange-500"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    {isDownloadable ? (
                      <Download className="w-4 h-4 text-green-500" />
                    ) : isWeb ? (
                      <Globe className="w-4 h-4 text-blue-500" />
                    ) : (
                      <FileText className="w-4 h-4 text-orange-500" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="font-medium text-sm leading-tight break-words flex items-center gap-2">
                      {doc.title}
                      {isDownloadable && <Download className="w-3 h-3 text-green-400" />}
                    </div>
                    {doc.description && (
                      <div className="text-xs text-gray-400 leading-tight break-words">
                        {doc.description}
                      </div>
                    )}
                    {isDownloadable && (
                      <div className="text-xs text-green-400 font-medium">
                        Télécharger le fichier
                      </div>
                    )}
                    {isWeb && (
                      <div className="text-xs text-blue-400 font-medium">
                        Ouvre dans le même onglet
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>,
      document.body
    );
  };

  return (
    <>
      <div 
        ref={cardRef}
        className={`group relative ${className}`} 
        style={style}
      >
        {/* Fond coloré adaptatif */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-500 rounded-xl sm:rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
        
        {/* Contenu de la carte avec hauteur flexible */}
        <div className="relative bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden flex flex-col h-full">
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
            <div className={`p-1.5 sm:p-2 rounded-lg sm:rounded-xl backdrop-blur-md ${
              isEnterprise ? 'bg-orange-500/90 text-white' : 'bg-blue-500/90 text-white'
            }`}>
              {isEnterprise ? <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" /> : <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />}
            </div>
          </div>

          {/* Image avec hauteur fixe */}
          <div className="relative h-40 sm:h-48 overflow-hidden flex-shrink-0">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs rounded-md sm:rounded-lg bg-white/20 backdrop-blur-sm text-white">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs rounded-md sm:rounded-lg bg-white/20 backdrop-blur-sm text-white">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Contenu flexible */}
          <div className="p-4 sm:p-6 flex flex-col flex-grow">
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-orange-500 transition-colors">
              {project.title}
            </h3>
            
            {/* Description avec hauteur flexible */}
            <div className="flex-grow mb-4 sm:mb-6">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {project.description}
              </p>
            </div>

            {/* Boutons en bas */}
            <div className="flex items-center justify-between mt-auto">
              <div className="relative">
                {project.documents ? (
                  <button
                    ref={buttonRef}
                    onClick={toggleDropdown}
                    className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-orange-900/30 text-orange-400 hover:bg-orange-900/50 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">Documents</span>
                    <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  project.pdfUrl && (
                    <button
                      onClick={handleSingleDocumentClick}
                      className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-orange-900/30 text-orange-400 hover:bg-orange-900/50 font-medium transition-all duration-300"
                    >
                      {isDownloadableFile(project.pdfUrl) ? (
                        <>
                          <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-sm">Télécharger</span>
                        </>
                      ) : isWebDocument(project.pdfUrl) ? (
                        <>
                          <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-sm">Voir le site</span>
                        </>
                      ) : (
                        <>
                          <Maximize2 className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-sm">Voir le document</span>
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                        </>
                      )}
                    </button>
                  )
                )}
              </div>

              {project.demoUrl && (
                <button
                  onClick={handleDemoClick}
                  className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-gray-700 text-gray-400 hover:text-orange-500 transition-colors"
                  title="Aller vers le site"
                >
                  <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown rendered in portal */}
      <DropdownMenu />

      {/* PDF Viewer Modal */}
      {showFullscreen && (selectedDocument?.url || project.pdfUrl) && !isWebDocument(selectedDocument?.url || project.pdfUrl || '') && !isDownloadableFile(selectedDocument?.url || project.pdfUrl || '') && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-2 sm:p-4">
          <div className="pdf-modal-content bg-gray-800 rounded-xl sm:rounded-2xl w-full max-w-7xl max-h-[95vh] overflow-auto p-3 sm:p-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 sm:mb-4 gap-2 sm:gap-0">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {selectedDocument?.title || project.title}
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCloseModal}
                  className="p-2 rounded-xl bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors"
                  title="Fermer (Échap)"
                >
                  <X size={18} className="sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center mb-3 sm:mb-4 gap-2 sm:gap-4">
              <div className="flex items-center gap-2 sm:gap-4">
                <button
                  onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
                  disabled={pageNumber <= 1}
                  className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-orange-900/30 text-orange-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
                </button>
                <span className="text-gray-300 text-sm sm:text-base">
                  Page {pageNumber} sur {numPages}
                </span>
                <button
                  onClick={() => setPageNumber(Math.min(numPages || 1, pageNumber + 1))}
                  disabled={pageNumber >= (numPages || 1)}
                  className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-orange-900/30 text-orange-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight size={16} className="sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="flex items-center gap-2 sm:gap-4">
                <button 
                  onClick={() => setScale(Math.max(0.5, scale - 0.1))}
                  className="px-2 sm:px-3 py-1 bg-gray-700 text-gray-300 rounded-md sm:rounded-lg text-sm"
                >
                  -
                </button>
                <span className="text-gray-300 min-w-[60px] text-center text-sm sm:text-base">
                  {Math.round(scale * 100)}%
                </span>
                <button 
                  onClick={() => setScale(Math.min(3.0, scale + 0.1))}
                  className="px-2 sm:px-3 py-1 bg-gray-700 text-gray-300 rounded-md sm:rounded-lg text-sm"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <Document
                file={selectedDocument?.url || project.pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={(error) => {
                  console.error('Error loading PDF:', error);
                  setPdfError('Impossible de charger le PDF. Veuillez réessayer plus tard.');
                }}
                loading={
                  <div className="flex items-center justify-center p-8">
                    <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-orange-500"></div>
                  </div>
                }
              >
                <Page
                  pageNumber={pageNumber}
                  scale={scale}
                  renderTextLayer={true}
                  renderAnnotationLayer={false}
                  className="mx-auto"
                />
              </Document>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;