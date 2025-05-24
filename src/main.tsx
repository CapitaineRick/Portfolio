import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { pdfjs } from 'react-pdf';

// Configuration du worker PDF.js avec un CDN fiable
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);