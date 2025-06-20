import React, { useEffect, useRef } from 'react';
import { Network, Code, Book, Award, Clock, Users, ChevronRight, GraduationCap, Briefcase, CheckCircle2 } from 'lucide-react';

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
    <section id="education" className="py-16 bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-purple-600">
            BTS SIO - Services Informatiques aux Organisations
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Formation professionnalisante de niveau Bac+2 qui prépare aux métiers de l'informatique. 
            Elle offre une double compétence en développement et en infrastructure, avec une spécialisation 
            au choix entre SISR (infrastructure) et SLAM (développement).
          </p>
        </div>
        
        <div 
          ref={educationRef}
          className="transition-all duration-1000 opacity-0 translate-y-10"
        >
          {/* Formation Overview */}
          <div className="relative group mb-12">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Présentation de la formation</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-700/50 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-orange-900/30 rounded-lg">
                      <Clock className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-white">Organisation</h4>
                      <p className="text-gray-400">2 ans de formation</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-500" />
                      <span>1850 heures de formation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-500" />
                      <span>10 semaines de stage minimum</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-500" />
                      <span>Alternance possible</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-700/50 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-orange-900/30 rounded-lg">
                      <Book className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-white">Programme</h4>
                      <p className="text-gray-400">Formation complète</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-500" />
                      <span>Culture générale et expression</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-500" />
                      <span>Culture Economique Juridique et Managérial </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-500" />
                      <span>Anglais technique</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-500" />
                      <span>Mathématiques pour l'informatique</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-700/50 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-orange-900/30 rounded-lg">
                      <Award className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-white">Validation</h4>
                      <p className="text-gray-400">Diplôme d'État</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-500" />
                      <span>Niveau 5 (Bac+2)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-500" />
                      <span>120 crédits ECTS (60/an)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-500" />
                      <span>Certification professionnelle</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-700/50 rounded-xl p-6">
                <h4 className="font-semibold text-lg mb-4 text-white">Compétences communes</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h5 className="font-medium mb-2 text-orange-500">Support et assistance</h5>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-orange-500" />
                        <span>Gestion du patrimoine informatique</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-orange-500" />
                        <span>Réponse aux incidents</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-orange-500" />
                        <span>Développement de la présence en ligne</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h5 className="font-medium mb-2 text-orange-500">Cybersécurité</h5>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-orange-500" />
                        <span>Protection des données</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-orange-500" />
                        <span>Sécurisation des équipements</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-orange-500" />
                        <span>Politique de sécurité</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h5 className="font-medium mb-2 text-orange-500">Gestion de projet</h5>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-orange-500" />
                        <span>Analyse des besoins</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-orange-500" />
                        <span>Documentation technique</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-orange-500" />
                        <span>Travail en équipe</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Specializations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* SISR Option */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-6">
                  <Network className="w-12 h-12 text-orange-500" />
                  <div>
                    <h4 className="text-xl font-semibold text-white">Option SISR</h4>
                    <p className="text-orange-400">
                      Solutions d'Infrastructure, Systèmes et Réseaux
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2 text-white">Compétences techniques</h5>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <ChevronRight className="w-4 h-4 text-orange-500" />
                        <span>Administration Windows</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <ChevronRight className="w-4 h-4 text-orange-500" />
                        <span>Administration Linux</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <ChevronRight className="w-4 h-4 text-orange-500" />
                        <span>Virtualisation</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <ChevronRight className="w-4 h-4 text-orange-500" />
                        <span>Réseaux TCP/IP</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2 text-white">Services et sécurité</h5>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <ChevronRight className="w-4 h-4 text-orange-500" />
                        <span>Active Directory</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <ChevronRight className="w-4 h-4 text-orange-500" />
                        <span>Pare-feu</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <ChevronRight className="w-4 h-4 text-orange-500" />
                        <span>VPN</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <ChevronRight className="w-4 h-4 text-orange-500" />
                        <span>Supervision</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2 text-white">Débouchés professionnels</h5>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <ChevronRight className="w-4 h-4 text-orange-500" />
                        <span>Administrateur réseaux</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <ChevronRight className="w-4 h-4 text-orange-500" />
                        <span>Technicien support</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <ChevronRight className="w-4 h-4 text-orange-500" />
                        <span>Responsable infrastructure</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <ChevronRight className="w-4 h-4 text-orange-500" />
                        <span>Consultant cybersécurité</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SLAM Option */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-6">
                  <Code className="w-12 h-12 text-blue-500" />
                  <div>
                    <h4 className="text-xl font-semibold text-white">Option SLAM</h4>
                    <p className="text-blue-400">
                      Solutions Logicielles et Applications Métiers
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2 text-white">Compétences techniques</h5>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                        <span>Développement Web</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                        <span>Applications mobiles</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                        <span>Bases de données</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                        <span>Programmation objet</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2 text-white">Technologies</h5>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                        <span>Java, C#, Python</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                        <span>HTML, CSS, JavaScript</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                        <span>React, Angular</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                        <span>SQL, NoSQL</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2 text-white">Débouchés professionnels</h5>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                        <span>Développeur d'applications</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                        <span>Développeur Web</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                        <span>Analyste programmeur</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                        <span>Chef de projet junior</span>
                      </div>
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