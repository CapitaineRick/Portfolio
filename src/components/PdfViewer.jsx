import { Document, Page } from 'react-pdf';
import { useState } from 'react';
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
      >
        <Page pageNumber={pageNumber} />
      </Document>

      <div className="pdf-controls mt-4 flex items-center justify-center gap-4">
        <button 
          onClick={() => setPageNumber(p => Math.max(p - 1, 1))}
          className="px-4 py-2 bg-orange-500 text-white rounded-lg disabled:opacity-50"
          disabled={pageNumber <= 1}
        >
          Page précédente
        </button>
        <span className="text-gray-700 dark:text-gray-300">
          {pageNumber} / {numPages}
        </span>
        <button 
          onClick={() => setPageNumber(p => Math.min(p + 1, numPages || 1))}
          className="px-4 py-2 bg-orange-500 text-white rounded-lg disabled:opacity-50"
          disabled={pageNumber >= (numPages || 1)}
        >
          Page suivante
        </button>
      </div>
    </div>
  );
}