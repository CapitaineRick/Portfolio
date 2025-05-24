import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, GraduationCap, ExternalLink, FileText } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    demoUrl?: string;
    pdfUrl?: string;
  };
  isEnterprise: boolean;
  onDocClick?: (id: string) => void;
  onExpandClick?: (id: string) => void;
  expanded?: boolean;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isEnterprise,
  onDocClick,
  onExpandClick,
  expanded,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden h-full">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            {/* Tags */}
            <div className="absolute bottom-4 left-4">
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
          {/* Project Type Badge */}
          <div className="absolute top-4 right-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className={`
                p-2 rounded-xl backdrop-blur-md
                ${isEnterprise 
                  ? 'bg-orange-500/90 text-white' 
                  : 'bg-blue-500/90 text-white'
                }
              `}
            >
              {isEnterprise ? (
                <Briefcase className="w-5 h-5" />
              ) : (
                <GraduationCap className="w-5 h-5" />
              )}
            </motion.div>
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

          {/* Actions */}
          <div className="flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => project.pdfUrl ? onDocClick?.(project.id) : onExpandClick?.(project.id)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-50 dark:bg-orange-950/50 
                       text-orange-600 dark:text-orange-400 font-medium transition-all duration-300
                       hover:bg-orange-100 dark:hover:bg-orange-900/50"
            >
              {project.pdfUrl ? (
                <>
                  <FileText className="w-4 h-4" />
                  Documentation
                </>
              ) : expanded ? (
                <>
                  Voir moins
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </>
              ) : (
                <>
                  Voir plus
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </motion.button>

            {project.demoUrl && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-700 
                         text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                Demo
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;