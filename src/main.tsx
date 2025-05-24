import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { pdfjs } from 'react-pdf';

// Configure PDF.js worker to use local file - removed leading slash for correct path resolution
pdfjs.GlobalWorkerOptions.workerSrc = 'pdfjs/web/pdf.worker.min.js';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);