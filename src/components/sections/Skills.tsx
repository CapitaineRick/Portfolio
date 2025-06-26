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
          entry.target.classList.add('animate-fade-in');
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
    <section id="skills" className="py-20 bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-500">
            Compétences Techniques
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Découvrez mes compétences techniques acquises à travers ma formation BTS SIO SISR 
            et mes expériences professionnelles en administration système et réseau
          </p>
        </div>

        <div 
          ref={skillsRef}
          className="opacity-0 transition-opacity duration-700 space-y-12"
        >
          {skillsData.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="relative group"
            >
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-colors duration-300">
                
                {/* Category Header */}
                <div className="flex items-center gap-6 mb-10">
                  <div className="p-4 bg-orange-900/30 rounded-2xl border border-orange-500/30">
                    <category.icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {category.name}
                    </h3>
                  </div>
                </div>

                {/* Skills Grid - Optimisé */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="bg-gray-900/60 rounded-xl p-6 border border-gray-700 hover:border-gray-600 hover:bg-gray-900/80 transition-all duration-200"
                    >
                      
                      {/* Skill Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gray-800 p-2 flex items-center justify-center border border-gray-700 flex-shrink-0">
                          <img 
                            src={skill.logo} 
                            alt={skill.name}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-white text-lg mb-1">
                            {skill.name}
                          </h4>
                        </div>
                      </div>

                      {/* Description */}
                      <div>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          {skill.description}
                        </p>
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