import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { pdfjs } from 'react-pdf';
import workerSrc from 'pdfjs-dist/build/pdf.worker.entry';

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;


export default function PdfViewer({ file }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

<<<<<<< Updated upstream
  const handleDownload = () => {
    if (!file) {
      console.warn("Aucun fichier à télécharger");
      return;
    }

    // Créer un lien pour le téléchargement
    const link = document.createElement('a');

    // Si c'est un fichier Blob ou File
    if (file instanceof Blob) {
      const blobUrl = URL.createObjectURL(file);
      link.href = blobUrl;
      link.download = file.name || 'document.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    }
    // Si c'est une URL string
    else if (typeof file === 'string') {
      // Extraire le nom du fichier du chemin
      const filename = file.split('/').pop() || 'document.pdf';
      
      link.href = file;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    else {
      console.error("Type de fichier non pris en charge pour le téléchargement");
    }
  };
=======
const handleDownload = () => {
  console.log("Téléchargement lancé");

  if (!file) {
    console.warn("Aucun fichier à télécharger :", file);
    return;
  }

  const link = document.createElement('a');

  // Si c’est un fichier Blob ou File
  if (file instanceof Blob) {
    const blobUrl = URL.createObjectURL(file);
    const filename = file.name || 'document.pdf';

    link.href = blobUrl;
    link.download = filename;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Libère l’URL blob
    URL.revokeObjectURL(blobUrl);

    console.log('Téléchargement d’un fichier Blob');
    console.log('Nom :', filename);
    console.log('Type :', file.type);
  }

  // Si c’est une URL string vers un fichier en ligne
  else if (typeof file === 'string') {
    const filename = file.split('/').pop() || 'document.pdf';

    link.href = file;
    link.download = filename;
    link.target = '_blank';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log('Téléchargement depuis une URL :', file);
  }

  // Sinon : erreur de type
  else {
    console.error("Type de fichier non pris en charge pour le téléchargement :", file);
  }
};

>>>>>>> Stashed changes

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
                onClick={handleDownload}
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