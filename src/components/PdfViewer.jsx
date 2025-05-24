import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

export default function PdfViewer({ file }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

const handleDownload = () => {
  if (!file) return;

  const link = document.createElement('a');

  if (file instanceof Blob) {
    const blobUrl = URL.createObjectURL(file);
    link.href = blobUrl;
    link.download = file.name || 'document.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);
    console.log('Type:', typeof file);
console.log('Instanceof File:', file instanceof File);
console.log('Instanceof Blob:', file instanceof Blob);
console.log('Value:', file);
  } else if (typeof file === 'string') {
    link.href = file;
    link.download = file.split('/').pop() || 'document.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log('Type:', typeof file);
console.log('Instanceof File:', file instanceof File);
console.log('Instanceof Blob:', file instanceof Blob);
console.log('Value:', file);
  } else {
    console.error("Type de fichier non pris en charge pour le téléchargement");
  }
};

  const TestComponent = () => {
  const file = new File([new Blob(['%PDF-1.4 test'], { type: 'application/pdf' })], 'test.pdf', {
    type: 'application/pdf',
  });

  return <PdfViewer file={file} />;
};





  return (
    <div className="pdf-viewer flex flex-col items-center">
      <div className="pdf-controls mb-4 flex items-center justify-center gap-4">
        <button 
          onClick={() => setScale(Math.max(0.5, scale - 0.1))}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg"
        >
          -
        </button>
        <span className="text-gray-700 dark:text-gray-300 min-w-[60px] text-center">
          {Math.round(scale * 100)}%
        </span>
        <button 
          onClick={() => setScale(Math.min(2.0, scale + 0.1))}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg"
        >
          +
        </button>
        <button
          onClick={handleDownload}
          className="px-3 py-1 bg-orange-500 text-white rounded-lg flex items-center gap-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Télécharger
        </button>
      </div>

      <div className="overflow-auto max-h-[70vh] w-full flex justify-center">
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(error) => console.error('Erreur chargement PDF:', error)}
          loading={
            <div className="flex items-center justify-center p-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
            </div>
          }
          error={
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <div className="text-red-500 dark:text-red-400 mb-4">
                Impossible de charger le PDF. Veuillez réessayer plus tard.
              </div>
              <button
                onClick={TestComponent}
                className="px-4 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors"
              >
                Télécharger le PDF
              </button>
            </div>
          }
        >
          <Page 
            pageNumber={pageNumber} 
            renderTextLayer={true}
            renderAnnotationLayer={true}
            scale={scale}
            className="shadow-lg"
          />
        </Document>
      </div>

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