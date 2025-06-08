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
          
          const skills = entry.target.querySelectorAll('.skill-category');
          skills.forEach((skill, index) => {
            setTimeout(() => {
              skill.classList.add('opacity-100', 'translate-y-0');
              skill.classList.remove('opacity-0', 'translate-y-10');
            }, 150 * index);
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
      case 0:
        return 'from-gray-500 to-gray-600';
      case 1:
        return 'from-yellow-500 to-orange-500';
      case 2:
        return 'from-orange-500 to-red-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getLevelText = (level: number) => {
    switch (level) {
      case 0:
        return 'Débutant';
      case 1:
        return 'Intermédiaire';
      case 2:
        return 'Avancé';
      default:
        return 'Débutant';
    }
  };

  const getLevelBadgeColor = (level: number) => {
    switch (level) {
      case 0:
        return 'bg-gray-600/30 text-gray-300 border-gray-500/30';
      case 1:
        return 'bg-yellow-600/30 text-yellow-300 border-yellow-500/30';
      case 2:
        return 'bg-orange-600/30 text-orange-300 border-orange-500/30';
      default:
        return 'bg-gray-600/30 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <section id="skills" className="py-20 flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-500/5 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-purple-500/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-500/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-500">
            Compétences Techniques
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto mb-10 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Découvrez mes compétences techniques acquises à travers ma formation BTS SIO SISR 
            et mes expériences professionnelles en administration système et réseau
          </p>
        </div>

        <div 
          ref={skillsRef}
          className="transition-all duration-300 opacity-0 translate-y-10 space-y-16"
        >
          {skillsData.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="skill-category transition-all duration-300 opacity-0 translate-y-10"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-gray-800 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
                  
                  {/* Category Header */}
                  <div className="flex items-center gap-6 mb-10">
                    <div className="p-4 bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-2xl border border-orange-500/30">
                      <category.icon className="w-8 h-8 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {category.name}
                      </h3>
                      <p className="text-gray-400 text-lg">
                        {category.skills.length} compétences maîtrisées
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="relative group/skill transition-all duration-300 hover:scale-[1.02]"
                      >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-xl blur opacity-0 group-hover/skill:opacity-30 transition duration-300"></div>
                        
                        <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col border border-gray-700 group-hover/skill:border-gray-600 transition-all duration-300">
                          
                          {/* Skill Header */}
                          <div className="flex items-start gap-4 mb-4">
                            <div className="h-12 w-12 rounded-xl bg-gray-800 p-2 flex items-center justify-center border border-gray-700 group-hover/skill:border-gray-600 transition-colors flex-shrink-0">
                              <img 
                                src={skill.logo} 
                                alt={skill.name}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-bold text-white text-lg group-hover/skill:text-orange-400 transition-colors">
                                  {skill.name}
                                </h4>
                                <span className={`px-2 py-1 text-xs font-medium rounded-lg border ${getLevelBadgeColor(skill.level)}`}>
                                  {getLevelText(skill.level)}
                                </span>
                              </div>
                              
                              {/* Progress Bar */}
                              <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
                                <div 
                                  className={`h-2 rounded-full bg-gradient-to-r ${getLevelColor(skill.level)} transition-all duration-1000 ease-out`}
                                  style={{ 
                                    width: `${((skill.level + 1) / 3) * 100}%`,
                                    animationDelay: `${categoryIndex * 150 + skillIndex * 100}ms`
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <div className="flex-1">
                            <p className="text-sm text-gray-300 leading-relaxed">
                              {skill.description}
                            </p>
                          </div>

                          {/* Level Indicator */}
                          <div className="flex items-center gap-1 mt-4 pt-3 border-t border-gray-700">
                            {[...Array(3)].map((_, i) => (
                              <div 
                                key={i}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                  i <= skill.level 
                                    ? `bg-gradient-to-r ${getLevelColor(skill.level)} shadow-lg` 
                                    : 'bg-gray-600'
                                }`}
                                style={{ 
                                  animationDelay: `${categoryIndex * 150 + skillIndex * 100 + i * 50}ms`
                                }}
                              />
                            ))}
                            <span className="ml-2 text-xs text-gray-400 font-medium">
                              Niveau {skill.level + 1}/3
                            </span>
                          </div>

                          {/* Hover Effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Résumé des compétences</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">
                    {skillsData.reduce((total, category) => 
                      total + category.skills.filter(skill => skill.level === 2).length, 0
                    )}
                  </div>
                  <div className="text-gray-400">Compétences avancées</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">
                    {skillsData.reduce((total, category) => 
                      total + category.skills.filter(skill => skill.level === 1).length, 0
                    )}
                  </div>
                  <div className="text-gray-400">Compétences intermédiaires</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-500 mb-2">
                    {skillsData.reduce((total, category) => 
                      total + category.skills.filter(skill => skill.level === 0).length, 0
                    )}
                  </div>
                  <div className="text-gray-400">Compétences débutantes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;