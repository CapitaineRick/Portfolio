import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  icon?: React.ReactNode;
  disabled?: boolean;
  url?: string; // ← nouveau
}


const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  icon,
  disabled = false,
}) => {
  return (
    <div className="relative w-full max-w-sm group">
      {/* Fond flou dégradé */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-orange-500 opacity-30 blur-lg transition duration-300 group-hover:opacity-60 z-0" />

      {/* Contenu de la carte */}
      <div className="relative z-10 bg-zinc-900 text-white rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between h-full">
        {/* Partie supérieure : titre, icône, tags */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold">{title}</h3>
            {icon && (
              <div className="bg-zinc-800 p-2 rounded-full text-white">
                {icon}
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-zinc-700 text-xs px-2 py-1 rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-sm text-zinc-300">{description}</p>
        </div>

        {/* Bouton bas */}
        <div className="bg-zinc-800 p-4">
          <button
            className={`w-full px-4 py-2 text-sm rounded-xl transition ${
              disabled
                ? "bg-zinc-700 text-zinc-500 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700 text-white"
            }`}
            disabled={disabled}
          >
            ↗ Voir le document
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
