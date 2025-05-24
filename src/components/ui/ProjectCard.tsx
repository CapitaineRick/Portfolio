import React from 'react';
import { ArrowRight, Briefcase, GraduationCap, ExternalLink } from 'lucide-react';
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
      className={`group relative ${className}`}
      style={style}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-1000"></div>
      <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
        <div className="relative h-48">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map(tag => (
                    <span 
                      key={tag} 
                      className="px-2 py-0.5 text-xs rounded-full bg-orange-500/90 text-white backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-gray-500/90 text-white backdrop-blur-sm">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
                <span className={`p-2 rounded-full ${
                  isEnterprise 
                    ? 'bg-orange-500/90' 
                    : 'bg-blue-500/90'
                } backdrop-blur-sm`}>
                  {isEnterprise ? (
                    <Briefcase className="w-4 h-4 text-white" />
                  ) : (
                    <GraduationCap className="w-4 h-4 text-white" />
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {project.description}
          </p>
          
          <div className="flex items-center justify-between">
            <button
              onClick={scrollToDocumentation}
              className="flex items-center text-orange-500 hover:text-orange-600 transition-colors font-medium group/btn"
            >
              Documentation
              <ArrowRight className="ml-1 transition-transform group-hover/btn:translate-x-1" size={16} />
            </button>
            
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-500 hover:text-orange-500 transition-colors"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;