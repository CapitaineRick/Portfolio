import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData';
import { Star, TrendingUp, Award, BookOpen } from 'lucide-react';

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

  const getSkillLevelInfo = (level: number) => {
    switch (level) {
      case 3:
        return {
          label: 'Expert',
          color: 'from-emerald-500 to-green-500',
          bgColor: 'bg-emerald-500/10',
          textColor: 'text-emerald-400',
          icon: Award
        };
      case 2:
        return {
          label: 'Intermédiaire',
          color: 'from-orange-500 to-yellow-500',
          bgColor: 'bg-orange-500/10',
          textColor: 'text-orange-400',
          icon: TrendingUp
        };
      case 1:
        return {
          label: 'Débutant',
          color: 'from-blue-500 to-purple-500',
          bgColor: 'bg-blue-500/10',
          textColor: 'text-blue-400',
          icon: BookOpen
        };
      default:
        return {
          label: 'En formation',
          color: 'from-gray-500 to-gray-400',
          bgColor: 'bg-gray-500/10',
          textColor: 'text-gray-400',
          icon: Star
        };
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-500/5 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-purple-500/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-500/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-purple-600">
            Compétences Techniques
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Découvrez mes compétences techniques acquises à travers ma formation BTS SIO SISR 
            et mes expériences professionnelles en administration système et réseau
          </p>
        </div>

        {/* Skills Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'Catégories', value: skillsData.length, icon: '🎯' },
            { label: 'Compétences', value: skillsData.reduce((acc, cat) => acc + cat.skills.length, 0), icon: '⚡' },
            { label: 'Expert', value: skillsData.reduce((acc, cat) => acc + cat.skills.filter(s => s.level === 3).length, 0), icon: '🏆' },
            { label: 'En cours', value: skillsData.reduce((acc, cat) => acc + cat.skills.filter(s => s.level <= 1).length, 0), icon: '📚' }
          ].map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div 
          ref={skillsRef}
          className="transition-all duration-300 opacity-0 translate-y-10 space-y-12"
        >
          {skillsData.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="skill-category transition-all duration-300 opacity-0 translate-y-10"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
                  
                  {/* Category Header */}
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
                    <div className="flex items-center gap-4">
                      <div className="p-4 bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-2xl border border-orange-500/30">
                        <category.icon className="w-8 h-8 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {category.name}
                        </h3>
                        <p className="text-gray-400 text-lg">
                          {category.skills.length} compétences • {category.skills.filter(s => s.level >= 2).length} maîtrisées
                        </p>
                      </div>
                    </div>
                    
                    {/* Level Distribution */}
                    <div className="flex gap-2 md:ml-auto">
                      {[3, 2, 1, 0].map(level => {
                        const count = category.skills.filter(s => s.level === level).length;
                        const info = getSkillLevelInfo(level);
                        return count > 0 ? (
                          <div key={level} className={`px-3 py-1 rounded-full ${info.bgColor} ${info.textColor} text-sm font-medium flex items-center gap-1`}>
                            <info.icon className="w-3 h-3" />
                            {count}
                          </div>
                        ) : null;
                      })}
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {category.skills.map((skill, skillIndex) => {
                      const levelInfo = getSkillLevelInfo(skill.level);
                      
                      return (
                        <div 
                          key={skillIndex}
                          className="relative group/skill transition-all duration-300 hover:scale-[1.02]"
                        >
                          <div className={`absolute -inset-0.5 bg-gradient-to-r ${levelInfo.color} rounded-2xl blur opacity-0 group-hover/skill:opacity-50 transition duration-300`}></div>
                          
                          <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 h-full flex flex-col border border-gray-700/50 group-hover/skill:border-gray-600/50 transition-all duration-300">
                            
                            {/* Skill Header */}
                            <div className="flex items-start gap-4 mb-4">
                              <div className="relative">
                                <div className="h-14 w-14 rounded-xl bg-gray-800 p-3 flex items-center justify-center border border-gray-700 group-hover/skill:border-gray-600 transition-colors">
                                  <img 
                                    src={skill.logo} 
                                    alt={skill.name}
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                                {/* Level indicator */}
                                <div className={`absolute -top-1 -right-1 w-5 h-5 rounded-full ${levelInfo.bgColor} border-2 border-gray-900 flex items-center justify-center`}>
                                  <levelInfo.icon className={`w-2.5 h-2.5 ${levelInfo.textColor}`} />
                                </div>
                              </div>
                              
                              <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-white text-lg mb-1 group-hover/skill:text-orange-400 transition-colors">
                                  {skill.name}
                                </h4>
                                <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg ${levelInfo.bgColor} ${levelInfo.textColor} text-xs font-medium`}>
                                  <levelInfo.icon className="w-3 h-3" />
                                  {levelInfo.label}
                                </div>
                              </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="mb-4">
                              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                <div 
                                  className={`h-full bg-gradient-to-r ${levelInfo.color} transition-all duration-1000 ease-out`}
                                  style={{ 
                                    width: `${(skill.level / 3) * 100}%`,
                                    animationDelay: `${skillIndex * 100}ms`
                                  }}
                                />
                              </div>
                            </div>

                            {/* Description */}
                            <div className="flex-1">
                              <p className="text-sm text-gray-300 leading-relaxed">
                                {skill.description}
                              </p>
                            </div>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 pointer-events-none" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="relative group inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">
                Intéressé par mes compétences ?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Je suis toujours en apprentissage et ouvert aux nouvelles technologies. 
                N'hésitez pas à me contacter pour discuter de vos projets !
              </p>
              <button 
                onClick={() => {
                  const contactSection = document.querySelector('#contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-purple-500 text-white rounded-xl font-medium hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
              >
                Me contacter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;