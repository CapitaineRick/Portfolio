import React, { useState } from "react";
import ProjectCard from "./ProjectCard"; // suppose que tu as déjà ce composant
import PdfViewer from "./PdfViewer"; // ton composant d'affichage PDF

interface Project {
  title: string;
  description: string;
  tags: string[];
  fileUrl: string;
  icon?: React.ReactNode;
}

const projects: Project[] = [
  {
    title: "Rapport de stage",
    description: "Mon rapport de stage de première année en PDF.",
    tags: ["PDF", "Stage", "BTS SIO"],
    fileUrl: "/pdfs/rapport1.pdf",
  },
  {
    title: "Document technique",
    description: "Document de support sur le réseau.",
    tags: ["PDF", "Réseau", "Cours"],
    fileUrl: "/pdfs/reseau.pdf",
  },
  {
    title: "Présentation projet",
    description: "Slides de présentation du projet final.",
    tags: ["PDF", "Projet", "Présentation"],
    fileUrl: "/pdfs/projet_final.pdf",
  },
];

export default function ProjectGalleryWithViewer() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-12">
      {/* Cartes projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} onClick={() => setSelectedFile(project.fileUrl)} className="cursor-pointer">
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.tags}
              icon={project.icon}
              disabled
            />
          </div>
        ))}
      </div>

      {/* Affichage du PDF */}
      {selectedFile && (
        <div className="mt-8 border rounded-xl shadow-lg bg-white dark:bg-zinc-900 p-4">
          <PdfViewer file={selectedFile} />
        </div>
      )}
    </div>
  );
}
