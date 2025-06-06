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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-4">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gray-800 rounded-2xl p-6">
                  {/* Profile Image */}
                  <div className="relative w-48 h-48 mx-auto mb-6">
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
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      Fernandes Sébastien
                    </h3>
                    <p className="text-orange-400 font-medium">
                      Étudiant en BTS SIO SISR
                    </p>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="p-2 bg-orange-900/30 rounded-lg">
                        <MapPin className="w-4 h-4 text-orange-500" />
                      </div>
                      <span>Versailles, France</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="p-2 bg-orange-900/30 rounded-lg">
                        <Mail className="w-4 h-4 text-orange-500" />
                      </div>
                      <a
                        href="mailto:sebastien.78.fernandes@outlook.fr"
                        className="hover:text-orange-500"
                      >
                        sebastien.78.fernandes@outlook.fr
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="p-2 bg-orange-900/30 rounded-lg">
                        <Globe className="w-4 h-4 text-orange-500" />
                      </div>
                      <a
                        href="https://github.com/CapitaineRick"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-orange-500"
                      >
                        github.com/CapitaineRick
                      </a>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-700/50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-orange-500">
                        {ongoingEducation.length + completedEducation.length}
                      </div>
                      <div className="text-sm text-gray-400">
                        Années d'études
                      </div>
                    </div>
                    <div className="bg-gray-700/50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-orange-500">
                        15+
                      </div>
                      <div className="text-sm text-gray-400">Projets</div>
                    </div>
                    <div className="bg-gray-700/50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-orange-500">
                        -
                      </div>
                      <div className="text-sm text-gray-400">
                        Certifications
                      </div>
                    </div>
                    <div className="bg-gray-700/50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-orange-500">
                        2
                      </div>
                      <div className="text-sm text-gray-400">Expérience professionnelle</div>
                    </div>
                  </div>

                  {/* Download CV Button */}
                  <a
                    href="/public/docs/fernandes-sebastien-cv.pdf"
                    download
                    className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-orange-500 to-purple-500 text-white rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    <FileText className="w-5 h-5" />
                    Télécharger mon CV
                  </a>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 space-y-8">
              {/* About Me Section */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gray-800 rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-orange-900/30 rounded-xl">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div className="bg-gradient-to-br from-gray-700/50 to-gray-700/30 p-6 rounded-xl">
                        <h4 className="font-semibold text-lg mb-4 text-orange-400">
                          Points forts
                        </h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                            <span className="text-gray-300">Autonomie</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                            <span className="text-gray-300">Rigueur</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                            <span className="text-gray-300">
                              Esprit d'équipe
                            </span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                            <span className="text-gray-300">
                              Capacité d'adaptation
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-gray-700/50 to-gray-700/30 p-6 rounded-xl">
                        <h4 className="font-semibold text-lg mb-4 text-purple-400">
                          Centres d'intérêt
                        </h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                            <span className="text-gray-300">Cybersécurité</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                            <span className="text-gray-300">
                              Nouvelles technologies
                            </span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                            <span className="text-gray-300">
                              Impressions 3D
                            </span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                            <span className="text-gray-300">
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
                <div className="relative bg-gray-800 rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-900/30 rounded-xl">
                      <GraduationCap className="w-6 h-6 text-blue-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Parcours Académique
                    </h3>
                  </div>

                  <div className="relative">
                    <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

                    {/* Current Education */}
                    {ongoingEducation.map((education) => (
                      <div key={education.id} className="relative pl-16 pb-8">
                        <div className="absolute left-6 top-3 w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-800"></div>
                        <div className="bg-blue-900/20 rounded-xl p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-4">
                              <img
                                src={education.logo}
                                alt={education.school}
                                className="w-24 h-auto"
                              />
                              <div>
                                <h4 className="text-xl font-bold text-white">
                                  {education.title}
                                </h4>
                                <p className="text-gray-400">
                                  {education.school}
                                </p>
                              </div>
                            </div>
                            <span className="px-4 py-2 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                              {education.period}
                            </span>
                          </div>
                          <p className="text-sm text-gray-400">
                            {education.description}
                          </p>
                          {education.id === "bts-sio" && (
                            <a
                              href=""
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-3 px-4 py-2 mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                              <FileText className="w-4 h-4" />
                              <span>Tableau de Synthèse</span>
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}

                          {education.skills && (
                            <div className="grid grid-cols-2 gap-4 mt-4">
                              {education.skills.map((skill, index) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-2"
                                >
                                  <ChevronRight className="w-4 h-4 text-blue-500" />
                                  <span className="text-sm text-gray-300">
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
                    <div className="relative pl-16">
                      <button
                        onClick={() => setShowPastEducation(!showPastEducation)}
                        className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors"
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
                        <div className="mt-8 space-y-8">
                          {incompleteEducation.map((education) => (
                            <div key={education.id}>
                              <div className="absolute left-6 top-3 w-4 h-4 rounded-full bg-red-500 border-4 border-gray-800"></div>
                              <div className="bg-red-900/20 rounded-xl p-6">
                                <div className="flex items-center justify-between mb-4">
                                  <div className="flex items-center gap-4">
                                    <img
                                      src={education.logo}
                                      alt={education.school}
                                      className="w-24 h-auto"
                                    />
                                    <div>
                                      <h4 className="text-xl font-bold text-white">
                                        {education.title}
                                      </h4>
                                      <p className="text-gray-400">
                                        {education.school}
                                      </p>
                                    </div>
                                  </div>
                                  <span className="px-4 py-2 bg-red-900/30 text-red-400 rounded-full text-sm">
                                    {education.period}
                                  </span>
                                </div>
                                <p className="text-sm text-gray-400">
                                  {education.description}
                                </p>
                                {education.reason && (
                                  <div className="mt-4 inline-flex px-4 py-2 bg-red-900/30 text-red-400 rounded-full text-sm">
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
                        <div className="absolute left-6 top-3 w-4 h-4 rounded-full bg-green-500 border-4 border-gray-800"></div>
                        <div className="bg-green-900/20 rounded-xl p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-4">
                              <img
                                src={education.logo}
                                alt={education.school}
                                className="w-24 h-auto"
                              />
                              <div>
                                <h4 className="text-xl font-bold text-white">
                                  {education.title}
                                </h4>
                                <p className="text-gray-400">
                                  {education.school}
                                </p>
                              </div>
                            </div>
                            <span className="px-4 py-2 bg-green-900/30 text-green-400 rounded-full text-sm">
                              {education.period}
                            </span>
                          </div>
                          <p className="text-sm text-gray-400">
                            {education.description}
                          </p>
                          {education.mention && (
                            <div className="mt-4 inline-flex px-4 py-2 bg-green-900/30 text-green-400 rounded-full text-sm">
                              Mention {education.mention}
                            </div>
                            
                          )}
                          {education.skills && (
                            <div className="grid grid-cols-2 gap-4 mt-4">
                              {education.skills.map((skill, index) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-2"
                                >
                                  <ChevronRight className="w-4 h-4 text-blue-500" />
                                  <span className="text-sm text-gray-300">
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