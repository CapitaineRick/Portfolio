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
} from "lucide-react";
import { educationData } from "../../data/educationData";


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

  return (
    <section
      id="about"
      className="py-16 md:py-24 flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-purple-600">
            À propos de moi
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto mb-6"></div>
        </div>

        <div
          ref={aboutRef}
          className="transition-all duration-300 opacity-0 translate-y-10"
        >
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
            {/* Profile Card */}
            <div className="xl:col-span-4">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gray-800 rounded-2xl p-6">
                  {/* Profile Image */}
                  <div className="relative w-32 h-32 sm:w-48 sm:h-48 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-purple-500 rounded-full animate-spin-slow"></div>
                    <div className="absolute inset-1 bg-gray-800 rounded-full overflow-hidden">
                      <img
                        src="/images/profile.webp"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Personal Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">
                      Fernandes Sébastien
                    </h3>
                    <p className="text-orange-400 font-medium text-sm sm:text-base">
                      Étudiant en BTS SIO SISR
                    </p>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="p-2 bg-orange-900/30 rounded-lg flex-shrink-0">
                        <MapPin className="w-4 h-4 text-orange-500" />
                      </div>
                      <span className="break-words">Versailles, France</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="p-2 bg-orange-900/30 rounded-lg flex-shrink-0">
                        <Mail className="w-4 h-4 text-orange-500" />
                      </div>
                      <a
                        href="mailto:sebastien.78.fernandes@outlook.fr"
                        className="hover:text-orange-500 break-all"
                      >
                        sebastien.78.fernandes@outlook.fr
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="p-2 bg-orange-900/30 rounded-lg flex-shrink-0">
                        <Globe className="w-4 h-4 text-orange-500" />
                      </div>
                      <a
                        href="https://github.com/CapitaineRick"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-orange-500 break-all"
                      >
                        github.com/CapitaineRick
                      </a>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6">
                    <div className="bg-gray-700/50 rounded-xl p-3 sm:p-4 text-center">
                      <div className="text-xl sm:text-2xl font-bold text-orange-500">
                        {ongoingEducation.length + completedEducation.length}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400">
                        Années d'études
                      </div>
                    </div>
                    <div className="bg-gray-700/50 rounded-xl p-3 sm:p-4 text-center">
                      <div className="text-xl sm:text-2xl font-bold text-orange-500">
                        15+
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400">Projets</div>
                    </div>
                    <div className="bg-gray-700/50 rounded-xl p-3 sm:p-4 text-center">
                      <div className="text-xl sm:text-2xl font-bold text-orange-500">
                        -
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400">
                        Certifications
                      </div>
                    </div>
                    <div className="bg-gray-700/50 rounded-xl p-3 sm:p-4 text-center">
                      <div className="text-xl sm:text-2xl font-bold text-orange-500">
                        2
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400">Expérience professionnelle</div>
                    </div>
                  </div>

                  {/* Download CV Button */}
                  <a
                    href="/public/docs/fernandes-sebastien-cv.pdf"
                    download
                    className="w-full mt-6 px-4 sm:px-6 py-3 bg-gradient-to-r from-orange-500 to-purple-500 text-white rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-sm sm:text-base"
                  >
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                    Télécharger mon CV
                  </a>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="xl:col-span-8 space-y-8">
              {/* About Me Section */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gray-800 rounded-2xl p-4 sm:p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-orange-900/30 rounded-xl flex-shrink-0">
                      <User className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Qui suis-je ?
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      Je suis un étudiant passionné en BTS SIO avec une
                      spécialisation en SISR à l'IPSSI de Saint Quentin en
                      Yvelines. Ma formation me permet d'acquérir des
                      compétences techniques solides dans la conception, le
                      déploiement et la maintenance d'infrastructures
                      informatiques.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      Mon objectif est de devenir administrateur systèmes &
                      réseaux ou dans plusieurs années pentester, en mettant à
                      profit ma rigueur, ma logique et mon autonomie.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-6">
                      <div className="bg-gradient-to-br from-gray-700/50 to-gray-700/30 p-4 sm:p-6 rounded-xl">
                        <h4 className="font-semibold text-base sm:text-lg mb-4 text-orange-400">
                          Points forts
                        </h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm sm:text-base">Autonomie</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm sm:text-base">Rigueur</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm sm:text-base">
                              Esprit d'équipe
                            </span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm sm:text-base">
                              Capacité d'adaptation
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-gray-700/50 to-gray-700/30 p-4 sm:p-6 rounded-xl">
                        <h4 className="font-semibold text-base sm:text-lg mb-4 text-purple-400">
                          Centres d'intérêt
                        </h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm sm:text-base">Cybersécurité</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm sm:text-base">
                              Nouvelles technologies
                            </span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm sm:text-base">
                              Impressions 3D
                            </span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm sm:text-base">
                              Volley-ball
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Timeline */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gray-800 rounded-2xl p-4 sm:p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-900/30 rounded-xl flex-shrink-0">
                      <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Parcours Académique
                    </h3>
                  </div>

                  <div className="relative">
                    <div className="absolute left-4 sm:left-8 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

                    {/* Current Education */}
                    {ongoingEducation.map((education) => (
                      <div key={education.id} className="relative pl-8 sm:pl-16 pb-8">
                        <div className="absolute left-2.5 sm:left-6 top-3 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-500 border-2 sm:border-4 border-gray-800"></div>
                        <div className="bg-blue-900/20 rounded-xl p-4 sm:p-6">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                              <img
                                src={education.logo}
                                alt={education.school}
                                className="w-16 h-auto sm:w-24"
                              />
                              <div>
                                <h4 className="text-lg sm:text-xl font-bold text-white">
                                  {education.title}
                                </h4>
                                <p className="text-gray-400 text-sm sm:text-base">
                                  {education.school}
                                </p>
                              </div>
                            </div>
                            <span className="px-3 sm:px-4 py-2 bg-blue-900/30 text-blue-400 rounded-full text-xs sm:text-sm self-start sm:self-auto">
                              {education.period}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-400 mb-4">
                            {education.description}
                          </p>
                          {education.id === "bts-sio" && (
                            <a
                              href=""
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 text-xs sm:text-sm"
                            >
                              <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span>Tableau de Synthèse</span>
                              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                            </a>
                          )}

                          {education.skills && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mt-4">
                              {education.skills.map((skill, index) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-2"
                                >
                                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" />
                                  <span className="text-xs sm:text-sm text-gray-300">
                                    {skill}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}

                    {/* Past Education Toggle */}
                    <div className="relative pl-8 sm:pl-16">
                      <button
                        onClick={() => setShowPastEducation(!showPastEducation)}
                        className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors text-sm sm:text-base"
                      >
                        {showPastEducation ? (
                          <>
                            <ChevronUp size={16} className="sm:w-5 sm:h-5" />
                            <span>Masquer les formations non terminées</span>
                          </>
                        ) : (
                          <>
                            <ChevronDown size={16} className="sm:w-5 sm:h-5" />
                            <span>Afficher les formations non terminées</span>
                          </>
                        )}
                      </button>

                      {showPastEducation && (
                        <div className="mt-8 space-y-8">
                          {incompleteEducation.map((education) => (
                            <div key={education.id}>
                              <div className="absolute left-2.5 sm:left-6 top-3 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-red-500 border-2 sm:border-4 border-gray-800"></div>
                              <div className="bg-red-900/20 rounded-xl p-4 sm:p-6">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
                                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                    <img
                                      src={education.logo}
                                      alt={education.school}
                                      className="w-16 h-auto sm:w-24"
                                    />
                                    <div>
                                      <h4 className="text-lg sm:text-xl font-bold text-white">
                                        {education.title}
                                      </h4>
                                      <p className="text-gray-400 text-sm sm:text-base">
                                        {education.school}
                                      </p>
                                    </div>
                                  </div>
                                  <span className="px-3 sm:px-4 py-2 bg-red-900/30 text-red-400 rounded-full text-xs sm:text-sm self-start sm:self-auto">
                                    {education.period}
                                  </span>
                                </div>
                                <p className="text-xs sm:text-sm text-gray-400 mb-4">
                                  {education.description}
                                </p>
                                {education.reason && (
                                  <div className="mt-4 inline-flex px-3 sm:px-4 py-2 bg-red-900/30 text-red-400 rounded-full text-xs sm:text-sm">
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
                      <div key={education.id} className="relative pl-8 sm:pl-16 pb-8">
                        <div className="absolute left-2.5 sm:left-6 top-3 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-green-500 border-2 sm:border-4 border-gray-800"></div>
                        <div className="bg-green-900/20 rounded-xl p-4 sm:p-6">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                              <img
                                src={education.logo}
                                alt={education.school}
                                className="w-16 h-auto sm:w-24"
                              />
                              <div>
                                <h4 className="text-lg sm:text-xl font-bold text-white">
                                  {education.title}
                                </h4>
                                <p className="text-gray-400 text-sm sm:text-base">
                                  {education.school}
                                </p>
                              </div>
                            </div>
                            <span className="px-3 sm:px-4 py-2 bg-green-900/30 text-green-400 rounded-full text-xs sm:text-sm self-start sm:self-auto">
                              {education.period}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-400 mb-4">
                            {education.description}
                          </p>
                          {education.mention && (
                            <div className="mt-4 inline-flex px-3 sm:px-4 py-2 bg-green-900/30 text-green-400 rounded-full text-xs sm:text-sm">
                              Mention {education.mention}
                            </div>
                            
                          )}
                          {education.skills && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mt-4">
                              {education.skills.map((skill, index) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-2"
                                >
                                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" />
                                  <span className="text-xs sm:text-sm text-gray-300">
                                    {skill}
                                  </span>
                                </div>
                              ))}
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
      </div>
    </section>
  );
};

export default About;