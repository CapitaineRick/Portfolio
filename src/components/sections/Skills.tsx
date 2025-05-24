import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData';

const Skills: React.FC = () => {
  const { theme } = useTheme();
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          
          const skills = entry.target.querySelectorAll('.skill-item');
          skills.forEach((skill, index) => {
            setTimeout(() => {
              skill.classList.add('opacity-100', 'scale-100');
              skill.classList.remove('opacity-0', 'scale-95');
            }, 50 * index);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const getLevelColor = (level: number) => {
    switch (level) {
      case 3:
        return 'bg-green-500';
      case 2:
        return 'bg-yellow-500';
      default:
        return 'bg-gray-300';
    }
  };

  const getLevelText = (level: number) => {
    switch (level) {
      case 3:
        return 'Expert';
      case 2:
        return 'Intermédiaire';
      default:
        return 'Débutant';
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-200/30 dark:bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-blue-200/30 dark:bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-200/30 dark:bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Compétences techniques</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Mes compétences techniques acquises lors de ma formation et mes expériences professionnelles
          </p>
        </div>
        
        <div 
          ref={skillsRef}
          className="transition-all duration-1000 opacity-0 translate-y-10"
        >
          {skillsData.map((category) => (
            <div key={category.name} className="mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-orange-100 dark:bg-orange-900/30">
                    <category.icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{category.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {category.skills.length} compétences
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.skills.map((skill, index) => (
                    <div 
                      key={skill.name}
                      className="skill-item opacity-0 scale-95 transition-all duration-500 relative group"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-1000"></div>
                      <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 h-full border border-gray-100 dark:border-gray-700">
                        <div className="flex flex-col items-center text-center h-full">
                          <div className="h-16 w-16 mb-4 p-2 rounded-xl bg-gray-50 dark:bg-gray-700/50">
                            <img 
                              src={skill.logo} 
                              alt={skill.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <h4 className="font-semibold text-lg mb-2">{skill.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                            {skill.description}
                          </p>
                          
                          <div className="w-full mt-auto">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium">Niveau</span>
                              <span className={`text-sm font-medium ${
                                skill.level === 3 
                                  ? 'text-green-500' 
                                  : skill.level === 2 
                                    ? 'text-yellow-500' 
                                    : 'text-gray-500'
                              }`}>
                                {getLevelText(skill.level)}
                              </span>
                            </div>
                            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div 
                                className={`h-full ${getLevelColor(skill.level)} transition-all duration-500`}
                                style={{ width: `${(skill.level / 3) * 100}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;