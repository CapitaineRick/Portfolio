import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

export default function PdfViewer({ file }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  return (
    <div className="pdf-viewer">
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={(error) => console.error('Erreur chargement PDF:', error)}
        loading={
          <div className="flex items-center justify-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
          </div>
        }
      >
        <Page 
          pageNumber={pageNumber} 
          renderTextLayer={true}
          renderAnnotationLayer={true}
        />
      </Document>

      {numPages && (
        <div className="pdf-controls mt-4 flex items-center justify-center gap-4">
          <button 
            onClick={() => setPageNumber(p => Math.max(p - 1, 1))}
            disabled={pageNumber <= 1}
            className="px-4 py-2 bg-orange-500 text-white rounded-xl disabled:opacity-50"
          >
            Page précédente
          </button>
          <span className="text-gray-700 dark:text-gray-300">
            {pageNumber} / {numPages}
          </span>
          <button 
            onClick={() => setPageNumber(p => Math.min(p + 1, numPages))}
            disabled={pageNumber >= numPages}
            className="px-4 py-2 bg-orange-500 text-white rounded-xl disabled:opacity-50"
          >
            Page suivante
          </button>
        </div>
      )}
    </div>
  );
}