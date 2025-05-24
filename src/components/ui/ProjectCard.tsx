import React from 'react';
import { ArrowRight, Briefcase, GraduationCap } from 'lucide-react';
import { useProject } from '../../contexts/ProjectContext';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  longDescription: string;
  tools: string[];
  steps: string[];
  results: string[];
}

interface ProjectCardProps {
  project: Project;
  isEnterprise: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isEnterprise, className = '', style }) => {
  const { setSelectedProject, setSelectedCategory } = useProject();

  const scrollToDocumentation = () => {
    const docsSection = document.querySelector('#documentation');
    if (docsSection) {
      setSelectedProject(project.id);
      setSelectedCategory(isEnterprise ? 'enterprise' : 'school');
      docsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${className}`}
      style={style}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-4 text-white w-full">
            <div className="flex justify-between items-center mb-2">
              <div className="flex flex-wrap gap-1">
                {project.tags.slice(0, 3).map(tag => (
                  <span 
                    key={tag} 
                    className="px-2 py-0.5 text-xs rounded-full bg-orange-500/80 text-white"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-gray-500/80 text-white">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
              {isEnterprise ? (
                <Briefcase className="w-5 h-5 text-orange-500" />
              ) : (
                <GraduationCap className="w-5 h-5 text-orange-500" />
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
        
        <button
          onClick={scrollToDocumentation}
          className="flex items-center text-orange-500 hover:text-orange-600 transition-colors font-medium"
        >
          Voir la documentation
          <ArrowRight className="ml-1" size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;