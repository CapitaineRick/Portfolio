import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ArrowRight, Briefcase, GraduationCap, ExternalLink, Maximize2, X, ChevronLeft, ChevronRight, FileText, ChevronDown, Globe, Download } from 'lucide-react';
import { Document, Page } from 'react-pdf';
import JSZip from 'jszip';

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
  category: 'internship' | 'school' | 'technical';
  className?: string;
  style?: React.CSSProperties;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, category, className = '', style }) => {
  const [showFullscreen, setShowFullscreen] = useState(false);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.2);
  const [pdfError, setPdfError] = useState<string | null>(null);
  const [selectedDocument, setSelectedDocument] = useState<DocumentItem | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);
  const [dropdownPos, setDropdownPos] = useState<{ top: number; left: number } | null>(null);

  const fallbackImage = `${import.meta.env.BASE_URL}images/fond.webp`;
  const resolveImageSrc = (image: string) => {
    if (!image) return fallbackImage;
    if (image.startsWith('http://') || image.startsWith('https://')) return image;
    const normalized = image.startsWith('/') ? image.slice(1) : image;
    return `${import.meta.env.BASE_URL}${normalized}`;
  };

  const [imgSrc, setImgSrc] = useState<string>(resolveImageSrc(project.image));

  useEffect(() => {
    setImgSrc(resolveImageSrc(project.image));
  }, [project.image]);

  const cardRef = useRef<HTMLDivElement>(null);

  const isWebDocument = (url: string): boolean => {
    const webExtensions = ['.html', '.htm', '.php', '.asp', '.aspx', '.jsp'];
    const urlLower = url.toLowerCase();
    if (urlLower.startsWith('http://') || urlLower.startsWith('https://')) return true;
    return webExtensions.some(ext => urlLower.endsWith(ext));
  };

  const isDownloadableFile = (url: string): boolean => {
    const downloadableExtensions = ['.php', '.js', '.css', '.txt', '.json', '.xml', '.sql'];
    const urlLower = url.toLowerCase();
    return downloadableExtensions.some(ext => urlLower.endsWith(ext));
  };

  const isImageFile = (url: string): boolean => {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.svg'];
    const urlLower = url.toLowerCase();
    return imageExtensions.some(ext => urlLower.endsWith(ext));
  };

  const downloadFile = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadAllDocuments = async (documents: DocumentItem[], projectTitle: string) => {
    const zip = new JSZip();
    const folder = zip.folder(projectTitle);
    for (const doc of documents) {
      try {
        const response = await fetch(doc.url);
        if (response.ok) {
          const blob = await response.blob();
          const filename = doc.url.split('/').pop() || 'document';
          folder?.file(filename, blob);
        }
      } catch (error) {
        console.error(`Erreur lors du téléchargement de ${doc.url}:`, error);
      }
    }
    const zipBlob = await zip.generateAsync({ type: 'blob' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(zipBlob);
    link.download = `${projectTitle}.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  };

  const getFullUrl = (url: string): string => {
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    if (url.startsWith('/')) return `${window.location.origin}${url}`;
    return `${window.location.origin}/${url}`;
  };

  // Fermer le dropdown si clic extérieur
  useEffect(() => {
    if (!showDropdown) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(e.target as Node) &&
        dropdownButtonRef.current && !dropdownButtonRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showDropdown]);

  // Calculer la position du dropdown
  const handleToggleDropdown = () => {
    if (!showDropdown && dropdownButtonRef.current) {
      const rect = dropdownButtonRef.current.getBoundingClientRect();
      setDropdownPos({ top: rect.bottom + window.scrollY + 4, left: rect.left + window.scrollX });
    }
    setShowDropdown(prev => !prev);
  };

  // Scroll lock quand modal ouvert
  useEffect(() => {
    if (showFullscreen) {
      const originalOverflow = document.body.style.overflow;
      const originalDocumentOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setShowFullscreen(false);
          setSelectedDocument(null);
        }
      };
      const handleKeyDown = (event: KeyboardEvent) => {
        if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(event.key)) {
          const target = event.target as HTMLElement;
          if (!target.closest('.pdf-modal-content')) event.preventDefault();
        }
      };
      const handleWheel = (event: WheelEvent) => {
        const target = event.target as HTMLElement;
        if (!target.closest('.pdf-modal-content')) event.preventDefault();
      };
      const handleTouchMove = (event: TouchEvent) => {
        const target = event.target as HTMLElement;
        if (!target.closest('.pdf-modal-content')) event.preventDefault();
      };

      document.addEventListener('keydown', handleEscape);
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('wheel', handleWheel, { passive: false });
      document.addEventListener('touchmove', handleTouchMove, { passive: false });

      return () => {
        document.body.style.overflow = originalOverflow;
        document.documentElement.style.overflow = originalDocumentOverflow;
        document.removeEventListener('keydown', handleEscape);
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('wheel', handleWheel);
        document.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, [showFullscreen]);

  const handleDocumentSelect = (doc: DocumentItem) => {
    if (isDownloadableFile(doc.url)) {
      downloadFile(doc.url, doc.url.split('/').pop() || 'document');
      setShowDropdown(false);
      return;
    }
    if (isWebDocument(doc.url)) {
      window.location.href = getFullUrl(doc.url);
      setShowDropdown(false);
      return;
    }
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

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (project.demoUrl) window.location.href = project.demoUrl;
  };

  const handleSingleDocumentClick = () => {
    if (project.pdfUrl) {
      if (isDownloadableFile(project.pdfUrl)) {
        downloadFile(project.pdfUrl, project.pdfUrl.split('/').pop() || 'document');
      } else if (isWebDocument(project.pdfUrl)) {
        window.location.href = getFullUrl(project.pdfUrl);
      } else if (isImageFile(project.pdfUrl)) {
        window.open(getFullUrl(project.pdfUrl), '_blank');
      } else {
        setShowFullscreen(true);
      }
    }
  };

  // Dropdown portal pour la liste de documents
  const DropdownMenu = () => {
    if (!showDropdown || !project.documents || !dropdownPos) return null;
    return createPortal(
      <div
        ref={dropdownRef}
        className="fixed z-[9999] bg-gray-800 border border-gray-700 rounded-xl shadow-xl overflow-hidden"
        style={{ top: dropdownPos.top, left: dropdownPos.left, minWidth: 220, maxWidth: 320 }}
      >
        {project.documents.map((doc, idx) => (
          <button
            key={idx}
            onClick={() => handleDocumentSelect(doc)}
            className="w-full flex items-start gap-3 px-4 py-3 text-left hover:bg-gray-700 transition-colors border-b border-gray-700 last:border-b-0"
          >
            <FileText className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-sm font-medium text-white">{doc.title}</div>
              {doc.description && (
                <div className="text-xs text-gray-400 mt-0.5">{doc.description}</div>
              )}
            </div>
          </button>
        ))}
        <div className="border-t border-gray-700">
          <button
            onClick={() => { downloadAllDocuments(project.documents!, project.title); setShowDropdown(false); }}
            className="w-full flex items-center gap-2 px-4 py-3 text-left hover:bg-gray-700 transition-colors text-orange-400 text-sm"
          >
            <Download className="w-4 h-4" />
            Télécharger tout (.zip)
          </button>
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

        {/* Contenu de la carte */}
        <div className="relative bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden flex flex-col h-full">
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
            <div className={`p-1.5 sm:p-2 rounded-lg sm:rounded-xl backdrop-blur-md ${
              category === 'internship' ? 'bg-orange-500/90 text-white' :
              category === 'school' ? 'bg-blue-500/90 text-white' :
              'bg-purple-500/90 text-white'
            }`}>
              {category === 'internship' ? <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" /> :
               category === 'school' ? <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" /> :
               <FileText className="w-4 h-4 sm:w-5 sm:h-5" />}
            </div>
          </div>

          {/* Image */}
          <div className="relative h-40 sm:h-48 overflow-hidden flex-shrink-0">
            <img
              src={imgSrc}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              decoding="async"
              onError={() => setImgSrc(fallbackImage)}
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

          {/* Contenu */}
          <div className="p-4 sm:p-6 flex flex-col flex-grow">
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-orange-500 transition-colors">
              {project.title}
            </h3>

            <div className="flex-grow mb-4 sm:mb-6">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {project.description}
              </p>
            </div>

            {/* Boutons */}
            <div className="flex items-center justify-between mt-auto">
              <div className="relative">
                {category !== 'internship' && (
                  project.documents ? (
                    // Dropdown pour plusieurs documents
                    <button
                      ref={dropdownButtonRef}
                      onClick={handleToggleDropdown}
                      className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-orange-900/30 text-orange-400 hover:bg-orange-900/50 font-medium transition-all duration-300"
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
                          <><Download className="w-3 h-3 sm:w-4 sm:h-4" /><span className="text-xs sm:text-sm">Télécharger</span></>
                        ) : isWebDocument(project.pdfUrl) ? (
                          <><Globe className="w-3 h-3 sm:w-4 sm:h-4" /><span className="text-xs sm:text-sm">Voir le site</span></>
                        ) : (
                          <><Maximize2 className="w-3 h-3 sm:w-4 sm:h-4" /><span className="text-xs sm:text-sm">Voir le document</span><ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" /></>
                        )}
                      </button>
                    )
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

      {/* Dropdown portal */}
      <DropdownMenu />

      {/* PDF Viewer Modal */}
      {showFullscreen && (selectedDocument?.url || project.pdfUrl) &&
        !isWebDocument(selectedDocument?.url || project.pdfUrl || '') &&
        !isDownloadableFile(selectedDocument?.url || project.pdfUrl || '') &&
        !isImageFile(selectedDocument?.url || project.pdfUrl || '') && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-2 sm:p-4">
          <div className="pdf-modal-content bg-gray-800 rounded-xl sm:rounded-2xl w-full max-w-7xl max-h-[95vh] overflow-auto p-3 sm:p-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 sm:mb-4 gap-2 sm:gap-0">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {selectedDocument?.title || project.title}
              </h3>
              <button
                onClick={handleCloseModal}
                className="p-2 rounded-xl bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors"
                title="Fermer (Échap)"
              >
                <X size={18} className="sm:w-5 sm:h-5" />
              </button>
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
              {pdfError ? (
                <p className="text-red-400 text-sm p-8">{pdfError}</p>
              ) : (
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
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;