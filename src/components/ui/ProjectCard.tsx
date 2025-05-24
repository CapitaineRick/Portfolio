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
      <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
        {/* Project Type Badge */}
        <div className="absolute top-4 right-4 z-10">
          <div className={`
            p-2 rounded-xl backdrop-blur-md
            ${isEnterprise 
              ? 'bg-orange-500/90 text-white' 
              : 'bg-blue-500/90 text-white'
            }
          `}>
            {isEnterprise ? (
              <Briefcase className="w-5 h-5" />
            ) : (
              <GraduationCap className="w-5 h-5" />
            )}
          </div>
        </div>

        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map(tag => (
                  <span 
                    key={tag} 
                    className="px-2 py-1 text-xs rounded-lg bg-white/20 backdrop-blur-sm text-white"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-2 py-1 text-xs rounded-lg bg-white/20 backdrop-blur-sm text-white">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
            {project.description}
          </p>
          
          <div className="flex items-center justify-between">
            <button
              onClick={scrollToDocumentation}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-50 dark:bg-orange-950/50 
                       text-orange-600 dark:text-orange-400 font-medium transition-all duration-300
                       hover:bg-orange-100 dark:hover:bg-orange-900/50 group/btn"
            >
              Documentation
              <ArrowRight className="transition-transform group-hover/btn:translate-x-1" size={16} />
            </button>
            
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-500 hover:text-orange-500 transition-colors"
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