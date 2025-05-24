import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { pdfjs } from "react-pdf";

// 👇 Configure le worker ICI
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
