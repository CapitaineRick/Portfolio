import React, { useEffect, useRef } from 'react';
import { Network, Code, Server, Shield } from 'lucide-react';

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
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -right-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ma formation – BTS SIO</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>
        
        <div 
          ref={educationRef}
          className="transition-all duration-1000 opacity-0 translate-y-10"
        >
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-gray-200/50 dark:border-gray-700/50">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Le BTS SIO – Services Informatiques aux Organisations</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Le BTS SIO forme des techniciens capables de concevoir, déployer et maintenir des solutions informatiques 
                adaptées aux besoins des entreprises. Il comprend deux spécialités distinctes permettant une spécialisation 
                selon les projets professionnels.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* SISR Option */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 transform group-hover:scale-[1.01] transition duration-500">
                  <div className="flex items-center mb-4">
                    <Network className="w-12 h-12 text-orange-500 mr-4" />
                    <div>
                      <h4 className="text-xl font-semibold">Option SISR</h4>
                      <p className="text-orange-600 dark:text-orange-400 font-medium">
                        Solutions d'Infrastructure, Systèmes et Réseaux
                      </p>
                    </div>
                  </div>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">
                    Formation orientée vers l'installation, l'administration et la sécurisation 
                    des infrastructures réseaux et des systèmes serveurs pour les entreprises.
                  </p>
                  
                  <h6 className="font-medium mb-2">Compétences acquises :</h6>
                  <ul className="space-y-2">
                    {[
                      'Administration de serveurs Windows Server et Linux',
                      'Configuration de services réseaux (DNS, DHCP, Active Directory)',
                      'Mise en place de solutions de virtualisation',
                      'Sécurisation d\'infrastructures (pare-feu, VPN, back-up)',
                      'Scripting avec PowerShell et Bash',
                      'Supervision et maintenance préventive'
                    ].map((skill, index) => (
                      <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                        <div className="w-2 h-2 rounded-full bg-orange-500 mr-2"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* SLAM Option */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 transform group-hover:scale-[1.01] transition duration-500">
                  <div className="flex items-center mb-4">
                    <Code className="w-12 h-12 text-gray-500 mr-4" />
                    <div>
                      <h4 className="text-xl font-semibold">Option SLAM</h4>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">
                        Solutions Logicielles et Applications Métiers
                      </p>
                    </div>
                  </div>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">
                    Formation centrée sur le développement d'applications web, desktop ou mobiles 
                    répondant aux besoins spécifiques des organisations.
                  </p>
                  
                  <h6 className="font-medium mb-2">Compétences acquises :</h6>
                  <ul className="space-y-2">
                    {[
                      'Développement web avec PHP, HTML/CSS, JavaScript',
                      'Conception et administration de bases de données SQL',
                      'Utilisation de frameworks et CMS',
                      'Gestion de projet et méthodes agiles',
                      'Développement mobile (Android, iOS)',
                      'Gestion de versions avec Git'
                    ].map((skill, index) => (
                      <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                        <div className="w-2 h-2 rounded-full bg-gray-500 mr-2"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Additional Features */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Server,
                  title: 'Infrastructure',
                  description: 'Conception et maintenance des systèmes',
                  color: 'orange'
                },
                {
                  icon: Shield,
                  title: 'Sécurité',
                  description: 'Protection des données et systèmes',
                  color: 'blue'
                },
                {
                  icon: Network,
                  title: 'Réseaux',
                  description: 'Configuration et optimisation',
                  color: 'green'
                },
                {
                  icon: Code,
                  title: 'Développement',
                  description: 'Scripts et automatisation',
                  color: 'purple'
                }
              ].map((feature, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r from-${feature.color}-500 to-${feature.color}-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000`}></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 transform group-hover:scale-[1.01] transition duration-500">
                    <feature.icon className={`w-12 h-12 text-${feature.color}-500 mb-4`} />
                    <h5 className="text-lg font-semibold mb-2">{feature.title}</h5>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;