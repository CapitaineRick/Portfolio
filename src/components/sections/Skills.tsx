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

  return (
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -right-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-orange-100 dark:bg-orange-900/30">
                  <category.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="skill-item opacity-0 scale-95 transition-all duration-500 group relative"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 transform group-hover:scale-[1.01] transition duration-500">
                      <div className="flex flex-col items-center text-center">
                        <div className="h-16 w-16 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                          <img 
                            src={skill.logo} 
                            alt={skill.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <h4 className="font-medium mb-2">{skill.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                          {skill.description}
                        </p>
                        <div className="flex gap-2 mt-auto">
                          {[1, 2, 3].map((dot) => (
                            <div
                              key={dot}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                dot <= skill.level 
                                  ? getLevelColor(skill.level)
                                  : 'bg-gray-200 dark:bg-gray-600'
                              } ${
                                dot <= skill.level && 'group-hover:scale-110'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;