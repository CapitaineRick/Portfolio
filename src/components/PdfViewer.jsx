import { Document, Page } from 'react-pdf';
import { useState } from 'react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

export default function PdfViewer({ file }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
    setIsLoading(false);
  };

  return (
    <div className="pdf-viewer">
      {isLoading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
        </div>
      )}
      
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={(error) => {
          console.error('Erreur chargement PDF:', error);
          setIsLoading(false);
        }}
        loading={
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
          </div>
        }
      >
        <Page 
          pageNumber={pageNumber} 
          renderTextLayer={true}
          renderAnnotationLayer={true}
          renderInteractiveForms={false}
          scale={1.2}
          loading={
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
            </div>
          }
        />
      </Document>

      {!isLoading && numPages > 0 && (
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
      )}
    </div>
  );
}