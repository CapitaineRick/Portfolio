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
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
            {/* Profile Card */}
            <div className="xl:col-span-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gray-800 rounded-3xl p-8 border border-gray-700">
                  {/* Profile Image */}
                  <div className="relative w-40 h-40 mx-auto mb-8">
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
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      Fernandes Sébastien
                    </h3>
                    <p className="text-orange-400 font-semibold text-lg">
                      Étudiant en BTS SIO SISR
                    </p>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-4 text-gray-300">
                      <div className="p-3 bg-orange-900/30 rounded-xl flex-shrink-0">
                        <MapPin className="w-5 h-5 text-orange-500" />
                      </div>
                      <span className="text-base">Versailles, France</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-300">
                      <div className="p-3 bg-orange-900/30 rounded-xl flex-shrink-0">
                        <Mail className="w-5 h-5 text-orange-500" />
                      </div>
                      <a
                        href="mailto:sebastien.78.fernandes@outlook.fr"
                        className="hover:text-orange-500 transition-colors text-base break-all"
                      >
                        sebastien.78.fernandes@outlook.fr
                      </a>
                    </div>
                    <div className="flex items-center gap-4 text-gray-300">
                      <div className="p-3 bg-orange-900/30 rounded-xl flex-shrink-0">
                        <Globe className="w-5 h-5 text-orange-500" />
                      </div>
                      <a
                        href="https://github.com/CapitaineRick"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-orange-500 transition-colors text-base break-all"
                      >
                        github.com/CapitaineRick
                      </a>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-gray-700/50 rounded-2xl p-4 text-center border border-gray-600">
                      <div className="text-2xl font-bold text-orange-500 mb-1">
                        {ongoingEducation.length + completedEducation.length}
                      </div>
                      <div className="text-sm text-gray-400">
                        Années d'études
                      </div>
                    </div>
                    <div className="bg-gray-700/50 rounded-2xl p-4 text-center border border-gray-600">
                      <div className="text-2xl font-bold text-orange-500 mb-1">
                        15+
                      </div>
                      <div className="text-sm text-gray-400">Projets</div>
                    </div>
                    <div className="bg-gray-700/50 rounded-2xl p-4 text-center border border-gray-600">
                      <div className="text-2xl font-bold text-orange-500 mb-1">
                        -
                      </div>
                      <div className="text-sm text-gray-400">
                        Certifications
                      </div>
                    </div>
                    <div className="bg-gray-700/50 rounded-2xl p-4 text-center border border-gray-600">
                      <div className="text-2xl font-bold text-orange-500 mb-1">
                        2
                      </div>
                      <div className="text-sm text-gray-400">Expérience pro</div>
                    </div>
                  </div>

                  {/* Download CV Button */}
                  <a
                    href="/public/docs/fernandes-sebastien-cv.pdf"
                    download
                    className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-purple-500 text-white rounded-2xl flex items-center justify-center gap-3 hover:opacity-90 transition-opacity font-semibold text-lg shadow-lg"
                  >
                    <FileText className="w-5 h-5" />
                    Télécharger mon CV
                  </a>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="xl:col-span-8 space-y-12">
              {/* About Me Section */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gray-800 rounded-3xl p-8 border border-gray-700">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="p-4 bg-orange-900/30 rounded-2xl flex-shrink-0">
                      <User className="w-7 h-7 text-orange-500" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">
                      Qui suis-je ?
                    </h3>
                  </div>

                  <div className="space-y-6">
                    <p className="text-gray-300 leading-relaxed text-lg">
                      Je suis un étudiant passionné en BTS SIO avec une
                      spécialisation en SISR à l'IPSSI de Saint Quentin en
                      Yvelines. Ma formation me permet d'acquérir des
                      compétences techniques solides dans la conception, le
                      déploiement et la maintenance d'infrastructures
                      informatiques.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      Mon objectif est de devenir administrateur systèmes &
                      réseaux ou dans plusieurs années pentester, en mettant à
                      profit ma rigueur, ma logique et mon autonomie.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                      <div className="bg-gradient-to-br from-gray-700/50 to-gray-700/30 p-6 rounded-2xl border border-gray-600">
                        <h4 className="font-bold text-xl mb-6 text-orange-400">
                          Points forts
                        </h4>
                        <ul className="space-y-4">
                          <li className="flex items-center gap-4">
                            <div className="w-3 h-3 rounded-full bg-orange-500 flex-shrink-0"></div>
                            <span className="text-gray-300 text-lg">Autonomie</span>
                          </li>
                          <li className="flex items-center gap-4">
                            <div className="w-3 h-3 rounded-full bg-orange-500 flex-shrink-0"></div>
                            <span className="text-gray-300 text-lg">Rigueur</span>
                          </li>
                          <li className="flex items-center gap-4">
                            <div className="w-3 h-3 rounded-full bg-orange-500 flex-shrink-0"></div>
                            <span className="text-gray-300 text-lg">
                              Esprit d'équipe
                            </span>
                          </li>
                          <li className="flex items-center gap-4">
                            <div className="w-3 h-3 rounded-full bg-orange-500 flex-shrink-0"></div>
                            <span className="text-gray-300 text-lg">
                              Capacité d'adaptation
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-gray-700/50 to-gray-700/30 p-6 rounded-2xl border border-gray-600">
                        <h4 className="font-bold text-xl mb-6 text-purple-400">
                          Centres d'intérêt
                        </h4>
                        <ul className="space-y-4">
                          <li className="flex items-center gap-4">
                            <div className="w-3 h-3 rounded-full bg-purple-500 flex-shrink-0"></div>
                            <span className="text-gray-300 text-lg">Cybersécurité</span>
                          </li>
                          <li className="flex items-center gap-4">
                            <div className="w-3 h-3 rounded-full bg-purple-500 flex-shrink-0"></div>
                            <span className="text-gray-300 text-lg">
                              Nouvelles technologies
                            </span>
                          </li>
                          <li className="flex items-center gap-4">
                            <div className="w-3 h-3 rounded-full bg-purple-500 flex-shrink-0"></div>
                            <span className="text-gray-300 text-lg">
                              Impressions 3D
                            </span>
                          </li>
                          <li className="flex items-center gap-4">
                            <div className="w-3 h-3 rounded-full bg-purple-500 flex-shrink-0"></div>
                            <span className="text-gray-300 text-lg">
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
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gray-800 rounded-3xl p-8 border border-gray-700">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="p-4 bg-blue-900/30 rounded-2xl flex-shrink-0">
                      <GraduationCap className="w-7 h-7 text-blue-500" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">
                      Parcours Académique
                    </h3>
                  </div>

                  <div className="relative">
                    <div className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

                    {/* Current Education */}
                    {ongoingEducation.map((education) => (
                      <div key={education.id} className="relative pl-20 pb-12">
                        <div className="absolute left-6 top-4 w-5 h-5 rounded-full bg-blue-500 border-4 border-gray-800"></div>
                        <div className="bg-blue-900/20 rounded-2xl p-6 border border-blue-800/30">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-6">
                            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                              <img
                                src={education.logo}
                                alt={education.school}
                                className="w-20 h-auto"
                              />
                              <div>
                                <h4 className="text-2xl font-bold text-white mb-2">
                                  {education.title}
                                </h4>
                                <p className="text-gray-400 text-lg">
                                  {education.school}
                                </p>
                              </div>
                            </div>
                            <span className="px-4 py-2 bg-blue-900/30 text-blue-400 rounded-full font-semibold">
                              {education.period}
                            </span>
                          </div>
                          <p className="text-gray-400 mb-6 leading-relaxed">
                            {education.description}
                          </p>
                          {education.id === "bts-sio" && (
                            <a
                              href=""
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-3 px-6 py-3 mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                              <FileText className="w-5 h-5" />
                              <span>Tableau de Synthèse</span>
                              <ExternalLink className="w-5 h-5" />
                            </a>
                          )}

                          {education.skills && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
                              {education.skills.map((skill, index) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-3"
                                >
                                  <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                  <span className="text-gray-300">
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
                    <div className="relative pl-20">
                      <button
                        onClick={() => setShowPastEducation(!showPastEducation)}
                        className="flex items-center gap-3 text-gray-400 hover:text-orange-500 transition-colors text-lg font-semibold"
                      >
                        {showPastEducation ? (
                          <>
                            <ChevronUp size={20} />
                            <span>Masquer les formations non terminées</span>
                          </>
                        ) : (
                          <>
                            <ChevronDown size={20} />
                            <span>Afficher les formations non terminées</span>
                          </>
                        )}
                      </button>

                      {showPastEducation && (
                        <div className="mt-12 space-y-12">
                          {incompleteEducation.map((education) => (
                            <div key={education.id}>
                              <div className="absolute left-6 top-4 w-5 h-5 rounded-full bg-red-500 border-4 border-gray-800"></div>
                              <div className="bg-red-900/20 rounded-2xl p-6 border border-red-800/30">
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-6">
                                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                                    <img
                                      src={education.logo}
                                      alt={education.school}
                                      className="w-20 h-auto"
                                    />
                                    <div>
                                      <h4 className="text-2xl font-bold text-white mb-2">
                                        {education.title}
                                      </h4>
                                      <p className="text-gray-400 text-lg">
                                        {education.school}
                                      </p>
                                    </div>
                                  </div>
                                  <span className="px-4 py-2 bg-red-900/30 text-red-400 rounded-full font-semibold">
                                    {education.period}
                                  </span>
                                </div>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                  {education.description}
                                </p>
                                {education.reason && (
                                  <div className="mt-6 inline-flex px-4 py-2 bg-red-900/30 text-red-400 rounded-full font-semibold">
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
                      <div key={education.id} className="relative pl-20 pb-12">
                        <div className="absolute left-6 top-4 w-5 h-5 rounded-full bg-green-500 border-4 border-gray-800"></div>
                        <div className="bg-green-900/20 rounded-2xl p-6 border border-green-800/30">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-6">
                            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                              <img
                                src={education.logo}
                                alt={education.school}
                                className="w-20 h-auto"
                              />
                              <div>
                                <h4 className="text-2xl font-bold text-white mb-2">
                                  {education.title}
                                </h4>
                                <p className="text-gray-400 text-lg">
                                  {education.school}
                                </p>
                              </div>
                            </div>
                            <span className="px-4 py-2 bg-green-900/30 text-green-400 rounded-full font-semibold">
                              {education.period}
                            </span>
                          </div>
                          <p className="text-gray-400 mb-6 leading-relaxed">
                            {education.description}
                          </p>
                          {education.mention && (
                            <div className="mt-6 inline-flex px-4 py-2 bg-green-900/30 text-green-400 rounded-full font-semibold">
                              Mention {education.mention}
                            </div>
                            
                          )}
                          {education.skills && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
                              {education.skills.map((skill, index) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-3"
                                >
                                  <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                  <span className="text-gray-300">
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