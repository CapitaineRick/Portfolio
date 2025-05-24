import React, { useEffect, useRef } from 'react';
import { Network, Code } from 'lucide-react';

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
    <section id="education" className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ma formation – BTS SIO</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>
        
        <div 
          ref={educationRef}
          className="transition-all duration-1000 opacity-0 translate-y-10"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 mb-8 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Le BTS SIO – Services Informatiques aux Organisations</h3>
            <p className="mb-8 text-gray-700 dark:text-gray-300">
              Le BTS SIO forme des techniciens capables de concevoir, déployer et maintenir des solutions informatiques 
              adaptées aux besoins des entreprises. Il comprend deux spécialités distinctes permettant une spécialisation 
              selon les projets professionnels.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* SISR Option */}
              <div className="bg-orange-50 dark:bg-gray-700 rounded-lg p-6 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center mb-4">
                  <Network className="w-12 h-12 text-orange-500 mr-4" />
                  <h4 className="text-xl font-semibold">Option SISR</h4>
                </div>
                <h5 className="text-lg font-medium mb-2 text-orange-600 dark:text-orange-400">
                  Solutions d'Infrastructure, Systèmes et Réseaux
                </h5>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  Formation orientée vers l'installation, l'administration et la sécurisation 
                  des infrastructures réseaux et des systèmes serveurs pour les entreprises.
                </p>
                
                <h6 className="font-medium mb-2">Compétences acquises :</h6>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Administration de serveurs Windows Server et Linux</li>
                  <li>Configuration de services réseaux (DNS, DHCP, Active Directory)</li>
                  <li>Mise en place de solutions de virtualisation (VMware, Virtualbox, Proxmox)</li>
                  <li>Mise en place de services </li>
                  <li>Sécurisation d'infrastructures (pare-feu, VPN, back-up)</li>
                  <li>Scripting avec PowerShell et Bash</li>
                  <li>Supervision et maintenance préventive (GLPI, Zabbix, HAProxy)</li>
                </ul>
              </div>
              
              {/* SLAM Option */}
              <div className="bg-gray-100 dark:bg-gray-700/80 rounded-lg p-6 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center mb-4">
                  <Code className="w-12 h-12 text-gray-500 mr-4" />
                  <h4 className="text-xl font-semibold">Option SLAM</h4>
                </div>
                <h5 className="text-lg font-medium mb-2 text-gray-600 dark:text-gray-400">
                  Solutions Logicielles et Applications Métiers
                </h5>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  Formation centrée sur le développement d'applications web, desktop ou mobiles 
                  répondant aux besoins spécifiques des organisations.
                </p>
                
                <h6 className="font-medium mb-2">Compétences acquises :</h6>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Développement web avec PHP, HTML/CSS, JavaScript</li>
                  <li>Conception et administration de bases de données SQL</li>
                  <li>Utilisation de frameworks et CMS</li>
                  <li>Gestion de projet et méthodes agiles</li>
                  <li>Développement mobile (Android, iOS)</li>
                  <li>Gestion de versions avec Git</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;