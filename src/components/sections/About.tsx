import React, { useEffect, useRef } from "react";
import {
  Award,
  Book,
  Code,
  Monitor,
  Server,
  Shield,
  Briefcase,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  User,
  MapPin,
  Calendar,
  Mail,
  Phone,
  Globe,
  FileText,
  ChevronRight,
  ExternalLink,
  Building,
  Clock,
  Target,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import { educationData } from "../../data/educationData";
import { experienceData } from "../../data/experienceData";

const About: React.FC = () => {
  const [showPastEducation, setShowPastEducation] = React.useState(false);
  const [showCertifications, setShowCertifications] = React.useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  const completedEducation = educationData.filter(
    (edu) => edu.status === "completed"
  );
  const ongoingEducation = educationData.filter(
    (edu) => edu.status === "ongoing"
  );
  const incompleteEducation = educationData.filter(
    (edu) => edu.status === "incomplete"
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      className="py-20 flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-500">
            À propos de moi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Découvrez mon parcours, mes compétences et ma passion pour l'informatique
          </p>
        </div>

        <div
          ref={aboutRef}
          className="transition-all duration-300 opacity-0 translate-y-10"
        >
          {/* Profile Section */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-16">
            {/* Profile Card */}
            <div className="xl:col-span-1">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gray-800 rounded-3xl p-8 border border-gray-700 h-full">
                  {/* Profile Image */}
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-purple-500 rounded-full animate-spin-slow"></div>
                    <div className="absolute inset-2 bg-gray-800 rounded-full overflow-hidden">
                      <img
                        src="/images/profile.webp"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Personal Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2 text-white">
                      Fernandes Sébastien
                    </h3>
                    <p className="text-orange-400 font-semibold">
                      Étudiant en BTS SIO SISR
                    </p>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-300 text-sm">
                      <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span>Versailles, France</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300 text-sm">
                      <Mail className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <a
                        href="mailto:sebastien.78.fernandes@outlook.fr"
                        className="hover:text-orange-500 transition-colors break-all"
                      >
                        sebastien.78.fernandes@outlook.fr
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300 text-sm">
                      <Globe className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <a
                        href="https://github.com/CapitaineRick"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-orange-500 transition-colors break-all"
                      >
                        github.com/CapitaineRick
                      </a>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-gray-700/50 rounded-xl p-3 text-center border border-gray-600">
                      <div className="text-lg font-bold text-orange-500 mb-1">
                        {ongoingEducation.length + completedEducation.length}
                      </div>
                      <div className="text-xs text-gray-400">
                        Années d'études
                      </div>
                    </div>
                    <div className="bg-gray-700/50 rounded-xl p-3 text-center border border-gray-600">
                      <div className="text-lg font-bold text-orange-500 mb-1">
                        15+
                      </div>
                      <div className="text-xs text-gray-400">Projets</div>
                    </div>
                    <div className="bg-gray-700/50 rounded-xl p-3 text-center border border-gray-600">
                      <div className="text-lg font-bold text-orange-500 mb-1">
                        {experienceData.length}
                      </div>
                      <div className="text-xs text-gray-400">
                        Expériences pro
                      </div>
                    </div>
                    <div className="bg-gray-700/50 rounded-xl p-3 text-center border border-gray-600">
                      <div className="text-lg font-bold text-orange-500 mb-1">
                        3
                      </div>
                      <div className="text-xs text-gray-400">Mois de stage</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <a
                      href="/public/docs/fernandes-sebastien-cv.pdf"
                      download
                      className="w-full px-4 py-3 bg-gradient-to-r from-orange-500 to-purple-500 text-white rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity font-semibold shadow-lg"
                    >
                      <FileText className="w-4 h-4" />
                      Télécharger mon CV
                    </a>
                    
                    <button
                      onClick={scrollToProjects}
                      className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity font-semibold shadow-lg"
                    >
                      <BookOpen className="w-4 h-4" />
                      Voir la documentation
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* About Me & Strengths */}
            <div className="xl:col-span-2 space-y-8">
              {/* About Me Section */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gray-800 rounded-3xl p-8 border border-gray-700">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-orange-900/30 rounded-xl flex-shrink-0">
                      <User className="w-6 h-6 text-orange-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Qui suis-je ?
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      Je suis un étudiant passionné en BTS SIO avec une
                      spécialisation en SISR à l'IPSSI de Saint Quentin en
                      Yvelines. Ma formation me permet d'acquérir des
                      compétences techniques solides dans la conception, le
                      déploiement et la maintenance d'infrastructures
                      informatiques.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Mon objectif est de devenir administrateur systèmes &
                      réseaux ou dans plusieurs années pentester, en mettant à
                      profit ma rigueur, ma logique et mon autonomie.
                    </p>
                  </div>
                </div>
              </div>

              {/* Strengths & Interests */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <h4 className="font-bold text-lg mb-4 text-orange-400">
                    Points forts
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                      <span className="text-gray-300">Autonomie</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                      <span className="text-gray-300">Rigueur</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                      <span className="text-gray-300">Esprit d'équipe</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                      <span className="text-gray-300">Capacité d'adaptation</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <h4 className="font-bold text-lg mb-4 text-purple-400">
                    Centres d'intérêt
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"></div>
                      <span className="text-gray-300">Cybersécurité</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"></div>
                      <span className="text-gray-300">Nouvelles technologies</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"></div>
                      <span className="text-gray-300">Impressions 3D</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"></div>
                      <span className="text-gray-300">Volley-ball</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Experience & Education in Parallel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Professional Experience Section */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-gray-800 rounded-3xl p-8 border border-gray-700 h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-green-900/30 rounded-xl flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Expériences Professionnelles
                  </h3>
                </div>

                <div className="space-y-6">
                  {experienceData.map((experience) => (
                    <div key={experience.id} className="bg-green-900/20 rounded-xl p-6 border border-green-800/30">
                      <div className="flex flex-col gap-4 mb-4">
                        <div className="flex items-center gap-4">
                          <img
                            src={experience.logo}
                            alt={experience.company}
                            className="w-12 h-auto"
                          />
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-white mb-1">
                              {experience.title}
                            </h4>
                            <p className="text-green-400 font-semibold text-sm">
                              {experience.company}
                            </p>
                          </div>
                          <span className={`px-2 py-1 rounded-full font-semibold text-xs ${
                            experience.type === 'stage' 
                              ? 'bg-blue-900/30 text-blue-400'
                              : experience.type === 'alternance'
                                ? 'bg-purple-900/30 text-purple-400'
                                : 'bg-green-900/30 text-green-400'
                          }`}>
                            {experience.type === 'stage' ? 'Stage' : 
                             experience.type === 'alternance' ? 'Alternance' : 'Emploi'}
                          </span>
                        </div>
                        
                        <div className="flex flex-col gap-2 text-gray-400 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3 h-3" />
                            <span>{experience.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-3 h-3" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                        {experience.description}
                      </p>

                      {/* Missions */}
                      <div className="bg-gray-700/50 rounded-lg p-3 mb-4">
                        <h5 className="font-bold mb-2 text-green-400 text-sm flex items-center gap-2">
                          <Target className="w-3 h-3" />
                          Missions principales
                        </h5>
                        <ul className="space-y-1">
                          {experience.missions.slice(0, 3).map((mission, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <ChevronRight className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-300 text-xs">{mission}</span>
                            </li>
                          ))}
                          {experience.missions.length > 3 && (
                            <li className="text-gray-400 text-xs italic">
                              +{experience.missions.length - 3} autres missions...
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* Technologies */}
                      {experience.technologies && (
                        <div className="bg-gray-700/50 rounded-lg p-3">
                          <h5 className="font-bold mb-2 text-blue-400 text-sm flex items-center gap-2">
                            <Monitor className="w-3 h-3" />
                            Technologies
                          </h5>
                          <div className="flex flex-wrap gap-1">
                            {experience.technologies.map((tech, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-blue-900/30 text-blue-300 rounded text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-gray-800 rounded-3xl p-8 border border-gray-700 h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-blue-900/30 rounded-xl flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Parcours Académique
                  </h3>
                </div>

                <div className="relative">
                  <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

                  {/* Current Education */}
                  {ongoingEducation.map((education) => (
                    <div key={education.id} className="relative pl-16 pb-8">
                      <div className="absolute left-5 top-3 w-3 h-3 rounded-full bg-blue-500 border-2 border-gray-800"></div>
                      <div className="bg-blue-900/20 rounded-xl p-4 border border-blue-800/30">
                        <div className="flex flex-col gap-3 mb-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={education.logo}
                              alt={education.school}
                              className="w-10 h-auto"
                            />
                            <div className="flex-1">
                              <h4 className="text-lg font-bold text-white mb-1">
                                {education.title}
                              </h4>
                              <p className="text-gray-400 text-sm">
                                {education.school}
                              </p>
                            </div>
                            <span className="px-2 py-1 bg-blue-900/30 text-blue-400 rounded-full font-semibold text-xs">
                              {education.period}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                          {education.description}
                        </p>
                        
                        {education.id === "bts-sio" && (
                          <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-2 mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg text-sm"
                          >
                            <FileText className="w-3 h-3" />
                            <span>Tableau de Synthèse</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}

                        {education.skills && (
                          <div className="grid grid-cols-1 gap-2 mt-4">
                            {education.skills.slice(0, 4).map((skill, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <ChevronRight className="w-3 h-3 text-blue-500 flex-shrink-0" />
                                <span className="text-gray-300 text-xs">
                                  {skill}
                                </span>
                              </div>
                            ))}
                            {education.skills.length > 4 && (
                              <div className="text-gray-400 text-xs italic">
                                +{education.skills.length - 4} autres compétences...
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Past Education Toggle */}
                  <div className="relative pl-16 mb-6">
                    <button
                      onClick={() => setShowPastEducation(!showPastEducation)}
                      className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors font-semibold text-sm"
                    >
                      {showPastEducation ? (
                        <>
                          <ChevronUp size={14} />
                          <span>Masquer formations non terminées</span>
                        </>
                      ) : (
                        <>
                          <ChevronDown size={14} />
                          <span>Afficher formations non terminées</span>
                        </>
                      )}
                    </button>

                    {showPastEducation && (
                      <div className="mt-6 space-y-6">
                        {incompleteEducation.map((education) => (
                          <div key={education.id} className="relative -ml-16 pl-16">
                            <div className="absolute left-5 top-3 w-3 h-3 rounded-full bg-red-500 border-2 border-gray-800"></div>
                            <div className="bg-red-900/20 rounded-xl p-4 border border-red-800/30">
                              <div className="flex flex-col gap-3 mb-4">
                                <div className="flex items-center gap-3">
                                  <img
                                    src={education.logo}
                                    alt={education.school}
                                    className="w-10 h-auto"
                                  />
                                  <div className="flex-1">
                                    <h4 className="text-lg font-bold text-white mb-1">
                                      {education.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm">
                                      {education.school}
                                    </p>
                                  </div>
                                  <span className="px-2 py-1 bg-red-900/30 text-red-400 rounded-full font-semibold text-xs">
                                    {education.period}
                                  </span>
                                </div>
                              </div>
                              
                              <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                                {education.description}
                              </p>
                              
                              {education.reason && (
                                <div className="mt-3 inline-flex px-2 py-1 bg-red-900/30 text-red-400 rounded-full font-semibold text-xs">
                                  Non validé - {education.reason}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Completed Education */}
                  {completedEducation.map((education) => (
                    <div key={education.id} className="relative pl-16 pb-8">
                      <div className="absolute left-5 top-3 w-3 h-3 rounded-full bg-green-500 border-2 border-gray-800"></div>
                      <div className="bg-green-900/20 rounded-xl p-4 border border-green-800/30">
                        <div className="flex flex-col gap-3 mb-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={education.logo}
                              alt={education.school}
                              className="w-10 h-auto"
                            />
                            <div className="flex-1">
                              <h4 className="text-lg font-bold text-white mb-1">
                                {education.title}
                              </h4>
                              <p className="text-gray-400 text-sm">
                                {education.school}
                              </p>
                            </div>
                            <span className="px-2 py-1 bg-green-900/30 text-green-400 rounded-full font-semibold text-xs">
                              {education.period}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                          {education.description}
                        </p>
                        
                        {education.mention && (
                          <div className="mt-3 inline-flex px-2 py-1 bg-green-900/30 text-green-400 rounded-full font-semibold text-xs">
                            Mention {education.mention}
                          </div>
                        )}
                        
                        {education.skills && (
                          <div className="grid grid-cols-1 gap-2 mt-4">
                            {education.skills.slice(0, 4).map((skill, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <ChevronRight className="w-3 h-3 text-blue-500 flex-shrink-0" />
                                <span className="text-gray-300 text-xs">
                                  {skill}
                                </span>
                              </div>
                            ))}
                            {education.skills && education.skills.length > 4 && (
                              <div className="text-gray-400 text-xs italic">
                                +{education.skills.length - 4} autres compétences...
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;