import { Document, Page } from 'react-pdf';
import { useState } from 'react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

export default function PdfViewer({ file }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [scale, setScale] = useState(1.2);

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
        options={{
          cMapUrl: `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/cmaps/`,
          cMapPacked: true,
        }}
      >
        <Page 
          pageNumber={pageNumber} 
          renderTextLayer={true}
          renderAnnotationLayer={true}
          scale={scale}
          loading={
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
            </div>
          }
        />
      </Document>

      {!isLoading && numPages > 0 && (
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