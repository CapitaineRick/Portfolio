import { Document, Page } from 'react-pdf';
import { useState } from 'react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

export default function PdfViewer({ file }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [scale, setScale] = useState(1.2);
  const [error, setError] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
    setIsLoading(false);
    setError(null);
  };

  const LoadingSpinner = () => (
    <div className="flex justify-center items-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
    </div>
  );

  const ErrorMessage = () => (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="text-red-500 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
        Erreur de chargement du PDF
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        Le document PDF n'a pas pu être chargé. Veuillez vérifier que le fichier existe et réessayer.
      </p>
    </div>
  );

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <div className="pdf-viewer">
      {isLoading && <LoadingSpinner />}
      
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={(error) => {
          console.error('Erreur chargement PDF:', error);
          setIsLoading(false);
          setError(error);
        }}
        loading={<LoadingSpinner />}
        error={<ErrorMessage />}
        options={{
          cMapUrl: 'cmaps/',
          cMapPacked: true,
          standardFontDataUrl: 'standard_fonts/'
        }}
      >
        {!error && (
          <Page 
            pageNumber={pageNumber} 
            renderTextLayer={true}
            renderAnnotationLayer={true}
            scale={scale}
            loading={<LoadingSpinner />}
            error={<ErrorMessage />}
          />
        )}
      </Document>

      {!isLoading && !error && numPages > 0 && (
        <>
          <div className="pdf-controls mt-4 flex items-center justify-center gap-4">
            <button 
              onClick={() => setPageNumber(p => Math.max(p - 1, 1))}
              className="px-4 py-2 bg-orange-500 text-white rounded-lg disabled:opacity-50 hover:bg-orange-600 transition-colors"
              disabled={pageNumber <= 1}
            >
              Page précédente
            </button>
            <span className="text-gray-700 dark:text-gray-300">
              {pageNumber} / {numPages}
            </span>
            <button 
              onClick={() => setPageNumber(p => Math.min(p + 1, numPages || 1))}
              className="px-4 py-2 bg-orange-500 text-white rounded-lg disabled:opacity-50 hover:bg-orange-600 transition-colors"
              disabled={pageNumber >= (numPages || 1)}
            >
              Page suivante
            </button>
          </div>
          
          <div className="zoom-controls mt-4 flex items-center justify-center gap-4">
            <button 
              onClick={() => setScale(s => Math.max(0.5, s - 0.2))}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Zoom -
            </button>
            <span className="text-gray-700 dark:text-gray-300">
              {Math.round(scale * 100)}%
            </span>
            <button 
              onClick={() => setScale(s => Math.min(2.5, s + 0.2))}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Zoom +
            </button>
          </div>
        </>
      )}
    </div>
  );
}