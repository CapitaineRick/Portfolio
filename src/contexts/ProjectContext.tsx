import React, { createContext, useContext, useState } from 'react';

interface ProjectContextType {
  selectedProject: string;
  selectedCategory: 'enterprise' | 'school';
  setSelectedProject: (id: string) => void;
  setSelectedCategory: (category: 'enterprise' | 'school') => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState('active-directory');
  const [selectedCategory, setSelectedCategory] = useState<'enterprise' | 'school'>('enterprise');

  return (
    <ProjectContext.Provider value={{ 
      selectedProject, 
      selectedCategory, 
      setSelectedProject, 
      setSelectedCategory 
    }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = (): ProjectContextType => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
};