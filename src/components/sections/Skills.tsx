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
          entry.target.classList.add('animate-fade-in-up');
          
          const skills = entry.target.querySelectorAll('.skill-category');
          skills.forEach((skill, index) => {
            setTimeout(() => {
              skill.classList.add('animate-fade-in-up');
            }, 100 * index);
          });
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
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

  return (
    <section id="skills" className="py-20 flex items-center justify-center relative">
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
          className="opacity-0 space-y-16"
        >
          {skillsData.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="skill-category opacity-0"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-gray-800 backdrop-blur-sm rounded-3xl p-10 border border-gray-700">
                  
                  {/* Category Header */}
                  <div className="flex items-center gap-8 mb-12">
                    <div className="p-5 bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-3xl border border-orange-500/30">
                      <category.icon className="w-10 h-10 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        {category.name}
                      </h3>
                      <p className="text-gray-400 text-xl">
                        {category.skills.length} compétences maîtrisées
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="relative group/skill transition-all duration-300 hover-lift"
                      >
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-0 group-hover/skill:opacity-50 transition duration-300"></div>
                        
                        <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 h-full flex flex-col border border-gray-700 group-hover/skill:border-gray-600 transition-all duration-300">
                          
                          {/* Skill Header */}
                          <div className="flex items-start gap-6 mb-6">
                            <div className="h-16 w-16 rounded-2xl bg-gray-800 p-4 flex items-center justify-center border border-gray-700 group-hover/skill:border-gray-600 transition-colors flex-shrink-0">
                              <img 
                                src={skill.logo} 
                                alt={skill.name}
                                className="w-full h-full object-contain"
                                loading="lazy"
                              />
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-white text-xl mb-3 group-hover/skill:text-orange-400 transition-colors">
                                {skill.name}
                              </h4>
                            </div>
                          </div>

                          {/* Description */}
                          <div className="flex-1">
                            <p className="text-base text-gray-300 leading-relaxed">
                              {skill.description}
                            </p>
                          </div>

                          {/* Hover Effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                      </div>
                    ))}
                  </div>
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