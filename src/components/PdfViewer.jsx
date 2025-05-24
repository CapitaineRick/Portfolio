import { Document, Page } from 'react-pdf';
import { useState } from 'react';

export default function PdfViewer({ file }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  console.log('Chemin du PDF reçu :', file); // ✅ Ici, en dehors du JSX

  return (
    <div className="pdf-viewer">
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={(error) => console.error('Erreur chargement PDF:', error)}
      >
        <Page pageNumber={pageNumber} />
      </Document>

      <div className="pdf-controls">
        <button onClick={() => setPageNumber(p => Math.max(p - 1, 1))}>Page -</button>
        <span>{pageNumber} / {numPages}</span>
        <button onClick={() => setPageNumber(p => Math.min(p + 1, numPages))}>Page +</button>
      </div>
    </div>
  );
}
