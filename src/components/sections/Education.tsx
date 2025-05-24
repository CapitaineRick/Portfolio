import React, { useEffect, useRef } from 'react';
import { Network, Code, Book, Award, Clock, Users, ChevronRight, GraduationCap, Briefcase } from 'lucide-react';

const Education: React.FC = () => {
  const educationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => {
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
    };
  }, []);

  return (
    <section id="education" className="py-16 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-200/30 dark:bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-blue-200/30 dark:bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-200/30 dark:bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ma formation – BTS SIO</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>
        
        <div 
          ref={educationRef}
          className="transition-all duration-1000 opacity-0 translate-y-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Overview */}
            <div className="space-y-6">
              {/* Introduction Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 transform hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-semibold">BTS SIO</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Le BTS Services Informatiques aux Organisations est un diplôme reconnu par l'État de niveau Bac+2
                  qui forme des professionnels de l'informatique capables de répondre aux besoins des entreprises.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-orange-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-orange-500" />
                      <span className="font-medium">Durée</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">2 ans de formation</p>
                  </div>
                  <div className="bg-orange-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-orange-500" />
                      <span className="font-medium">Format</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Alternance</p>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6">
                <h4 className="text-xl font-semibold mb-4">Points clés de la formation</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-orange-50 dark:bg-gray-700/50 rounded-lg transform hover:scale-[1.02] transition-all duration-300">
                    <Book className="w-6 h-6 text-orange-500 mt-1" />
                    <div>
                      <h5 className="font-medium mb-1">Formation technique approfondie</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Apprentissage des technologies et méthodologies actuelles du marché
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-orange-50 dark:bg-gray-700/50 rounded-lg transform hover:scale-[1.02] transition-all duration-300">
                    <Briefcase className="w-6 h-6 text-orange-500 mt-1" />
                    <div>
                      <h5 className="font-medium mb-1">Expérience professionnelle</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Stages et projets en entreprise pour une formation pratique
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-orange-50 dark:bg-gray-700/50 rounded-lg transform hover:scale-[1.02] transition-all duration-300">
                    <Award className="w-6 h-6 text-orange-500 mt-1" />
                    <div>
                      <h5 className="font-medium mb-1">Diplôme reconnu</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Certification d'État de niveau 5 (Bac+2)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Specializations */}
            <div className="space-y-6">
              {/* SISR Option */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <Network className="w-12 h-12 text-orange-500" />
                    <div>
                      <h4 className="text-xl font-semibold">Option SISR</h4>
                      <p className="text-orange-600 dark:text-orange-400">
                        Solutions d'Infrastructure, Systèmes et Réseaux
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-orange-50 dark:bg-gray-700/50 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Compétences techniques</h5>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center gap-2 text-sm">
                          <ChevronRight className="w-4 h-4 text-orange-500" />
                          <span>Administration Windows</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <ChevronRight className="w-4 h-4 text-orange-500" />
                          <span>Administration Linux</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <ChevronRight className="w-4 h-4 text-orange-500" />
                          <span>Virtualisation</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <ChevronRight className="w-4 h-4 text-orange-500" />
                          <span>Réseaux TCP/IP</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-50 dark:bg-gray-700/50 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Services et sécurité</h5>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center gap-2 text-sm">
                          <ChevronRight className="w-4 h-4 text-orange-500" />
                          <span>Active Directory</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <ChevronRight className="w-4 h-4 text-orange-500" />
                          <span>Pare-feu</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <ChevronRight className="w-4 h-4 text-orange-500" />
                          <span>VPN</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <ChevronRight className="w-4 h-4 text-orange-500" />
                          <span>Supervision</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-50 dark:bg-gray-700/50 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Débouchés professionnels</h5>
                      <div className="grid grid-cols-1 gap-2">
                        <div className="flex items-center gap-2 text-sm">
                          <ChevronRight className="w-4 h-4 text-orange-500" />
                          <span>Administrateur systèmes et réseaux</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <ChevronRight className="w-4 h-4 text-orange-500" />
                          <span>Technicien support</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <ChevronRight className="w-4 h-4 text-orange-500" />
                          <span>Responsable infrastructure</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <ChevronRight className="w-4 h-4 text-orange-500" />
                          <span>Consultant cybersécurité</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SLAM Option (Grayed out) */}
              <div className="relative opacity-50">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <Code className="w-12 h-12 text-gray-500" />
                    <div>
                      <h4 className="text-xl font-semibold">Option SLAM</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Solutions Logicielles et Applications Métiers
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Option non choisie</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Cette spécialisation est orientée développement d'applications
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;