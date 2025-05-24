import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';

const Skills: React.FC = () => {
  const { theme } = useTheme();
  const skillsRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedSkills, setExpandedSkills] = useState<{[key: string]: boolean}>({});

  const toggleCategory = (categoryName: string) => {
    setSelectedCategory(selectedCategory === categoryName ? null : categoryName);
  };

  const toggleSkillExpansion = (skillName: string) => {
    setExpandedSkills(prev => ({
      ...prev,
      [skillName]: !prev[skillName]
    }));
  };

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
            }, 200 * index);
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

  const getSkillLevelColor = (level: number) => {
    switch (level) {
      case 3:
        return 'from-green-500 to-emerald-500';
      case 2:
        return 'from-yellow-500 to-orange-500';
      default:
        return 'from-blue-500 to-purple-500';
    }
  };

  const getSkillLevelText = (level: number) => {
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
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-50/20 to-purple-50/20 dark:from-orange-900/20 dark:to-purple-900/20" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-purple-600">
            Compétences Techniques
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez mes compétences techniques acquises à travers ma formation et mes expériences professionnelles
          </p>
        </div>

        <div 
          ref={skillsRef}
          className="transition-all duration-1000 opacity-0 translate-y-10 space-y-8"
        >
          {/* Skills Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {skillsData.map((category, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer"
                onClick={() => toggleCategory(category.name)}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl">
                      <category.icon className="w-8 h-8 text-orange-500" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {category.skills.length} compétences
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Skills */}
          {skillsData.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className={`skill-category transition-all duration-500 opacity-0 translate-y-10 ${
                selectedCategory && selectedCategory !== category.name ? 'hidden' : ''
              }`}
            >
              <div className="relative group mb-8">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-orange-100 dark:bg-orange-900/30 rounded-xl">
                      <category.icon className="w-8 h-8 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{category.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {category.skills.length} compétences maîtrisées
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="relative group"
                      >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-1000"></div>
                        <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 h-full">
                          {/* Skill Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="h-12 w-12 rounded-lg bg-gray-100 dark:bg-gray-700 p-2 flex items-center justify-center">
                                <img 
                                  src={skill.logo} 
                                  alt={skill.name}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <div>
                                <h4 className="font-semibold">{skill.name}</h4>
                                <div className="flex items-center gap-2">
                                  <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${getSkillLevelColor(skill.level)}`} />
                                  <span className="text-sm text-gray-600 dark:text-gray-400">
                                    {getSkillLevelText(skill.level)}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <button
                              onClick={() => toggleSkillExpansion(skill.name)}
                              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                            >
                              {expandedSkills[skill.name] ? (
                                <ChevronUp className="w-5 h-5 text-gray-500" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-gray-500" />
                              )}
                            </button>
                          </div>

                          {/* Skill Progress */}
                          <div className="mb-4">
                            <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div 
                                className={`h-full rounded-full bg-gradient-to-r ${getSkillLevelColor(skill.level)} transition-all duration-1000`}
                                style={{ width: `${(skill.level / 3) * 100}%` }}
                              />
                            </div>
                          </div>

                          {/* Skill Details */}
                          <div className={`overflow-hidden transition-all duration-300 ${
                            expandedSkills[skill.name] ? 'max-h-96' : 'max-h-0'
                          }`}>
                            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {skill.description}
                              </p>
                            </div>
                          </div>
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