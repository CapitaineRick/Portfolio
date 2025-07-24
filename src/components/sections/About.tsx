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

  return (
    <section
      id="about"
      itemScope
      itemType="https://schema.org/AboutPage"
      className="py-8 sm:py-12 md:py-20 flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-500" itemProp="name">
            À propos de moi
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            Découvrez mon parcours, mes compétences et ma passion pour l'informatique
          </p>
        </div>

        <div
          ref={aboutRef}
          className="transition-all duration-300 opacity-0 translate-y-10"
        >
          {/* Profile Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl sm:rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-700 h-full">
                  {/* Profile Image */}
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 mx-auto mb-4 sm:mb-6 md:mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-purple-500 rounded-full animate-spin-slow"></div>
                    <div className="absolute inset-1 bg-gray-800 rounded-full overflow-hidden p-1">
                      <div className="w-full h-full rounded-full overflow-hidden bg-gray-700">
                        <img
                          src="/images/logo-profile.webp"
                          alt="Fernandes Sébastien - Profil"
                          className="w-full h-full object-cover object-center rounded-full"
                          style={{
                            imageRendering: 'crisp-edges',
                            WebkitImageRendering: 'crisp-edges',
                            msInterpolationMode: 'nearest-neighbor',
                            filter: 'contrast(1.1) brightness(1.05)',
                            transform: 'translateZ(0)',
                            backfaceVisibility: 'hidden',
                            perspective: '1000px'
                          }}
                          loading="eager"
                          decoding="sync"
                          width="208"
                          height="208"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Personal Info */}
                  <div className="text-center mb-3 sm:mb-4 md:mb-6">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-white" itemProp="name" itemScope itemType="https://schema.org/Person">
                      Fernandes Sébastien
                    </h3>
                    <p className="text-orange-400 font-semibold text-xs sm:text-sm md:text-base">
                      Étudiant en BTS SIO SISR
                    </p>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-2 md:space-y-3 mb-3 sm:mb-4 md:mb-6" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <div className="flex items-center gap-2 md:gap-3 text-gray-300 text-xs md:text-sm">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4 text-orange-500 flex-shrink-0" />
                      <span itemProp="addressLocality">Versailles, <span itemProp="addressCountry">France</span></span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 text-gray-300 text-xs md:text-sm">
                      <Mail className="w-3 h-3 md:w-4 md:h-4 text-orange-500 flex-shrink-0" />
                      <a
                        href="mailto:sebastien.78.fernandes@outlook.fr"
                        className="hover:text-orange-500 transition-colors break-all"
                        itemProp="email"
                      >
                        sebastien.78.fernandes@outlook.fr
                      </a>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 text-gray-300 text-xs md:text-sm">
                      <Globe className="w-3 h-3 md:w-4 md:h-4 text-orange-500 flex-shrink-0" />
                      <a
                        href="https://github.com/CapitaineRick"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-orange-500 transition-colors break-all"
                        itemProp="sameAs"
                      >
                        github.com/CapitaineRick
                      </a>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-2 md:gap-3 mb-3 sm:mb-4 md:mb-6">
                    <div className="bg-gray-700/50 rounded-lg md:rounded-xl p-2 md:p-3 text-center border border-gray-600">
                      <div className="text-sm sm:text-base md:text-lg font-bold text-orange-500 mb-1">
                        {ongoingEducation.length + completedEducation.length-1}
                      </div>
                      <div className="text-xs text-gray-400">
                        Années d'études
                      </div>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg md:rounded-xl p-2 md:p-3 text-center border border-gray-600">
                      <div className="text-sm sm:text-base md:text-lg font-bold text-orange-500 mb-1">
                        15+
                      </div>
                      <div className="text-xs text-gray-400">Documentations</div>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg md:rounded-xl p-2 md:p-3 text-center border border-gray-600">
                      <div className="text-sm sm:text-base md:text-lg font-bold text-orange-500 mb-1">
                        {experienceData.length}
                      </div>
                      <div className="text-xs text-gray-400">
                        Expériences pro
                      </div>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg md:rounded-xl p-2 md:p-3 text-center border border-gray-600">
                      <div className="text-sm sm:text-base md:text-lg font-bold text-orange-500 mb-1">
                        2
                      </div>
                      <div className="text-xs text-gray-400">Mois de stage</div>
                    </div>
                  </div>

                  {/* CV Download Button */}
                  <a
                    href="/docs/fernandes-sebastien-cv.pdf"
                    download
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gradient-to-r from-orange-500 to-purple-500 text-white rounded-lg md:rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity font-semibold shadow-lg text-xs sm:text-sm md:text-base"
                  >
                    <FileText className="w-3 h-3 md:w-4 md:h-4" />
                    Télécharger mon CV
                  </a>
                </div>
              </div>
            </div>

            {/* About Me & Strengths */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6 md:space-y-8">
              {/* About Me Section */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl sm:rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-700">
                  <div className="flex items-center gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
                    <div className="p-2 md:p-3 bg-orange-900/30 rounded-lg md:rounded-xl flex-shrink-0">
                      <User className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-orange-500" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                      Qui suis-je ?
                    </h3>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      Je suis un étudiant passionné en BTS SIO avec une
                      spécialisation en SISR à l'IPSSI de Saint Quentin en
                      Yvelines. Ma formation me permet d'acquérir des
                      compétences techniques solides dans la conception, le
                      déploiement et la maintenance d'infrastructures
                      informatiques.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      Mon objectif est de devenir administrateur systèmes &
                      réseaux ou dans plusieurs années pentester, en mettant à
                      profit ma rigueur, ma logique et mon autonomie.
                    </p>
                  </div>
                </div>
              </div>

              {/* Strengths & Interests */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                <div className="bg-gray-800 rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 border border-gray-700">
                  <h4 className="font-bold text-sm sm:text-base md:text-lg mb-2 sm:mb-3 md:mb-4 text-orange-400">
                    Points forts
                  </h4>
                  <ul className="space-y-2 md:space-y-3">
                    <li className="flex items-center gap-2 md:gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                      <span className="text-gray-300 text-xs sm:text-sm md:text-base">Autonomie</span>
                    </li>
                    <li className="flex items-center gap-2 md:gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                      <span className="text-gray-300 text-xs sm:text-sm md:text-base">Rigueur</span>
                    </li>
                    <li className="flex items-center gap-2 md:gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                      <span className="text-gray-300 text-xs sm:text-sm md:text-base">Esprit d'équipe</span>
                    </li>
                    <li className="flex items-center gap-2 md:gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                      <span className="text-gray-300 text-xs sm:text-sm md:text-base">Capacité d'adaptation</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-800 rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 border border-gray-700">
                  <h4 className="font-bold text-sm sm:text-base md:text-lg mb-2 sm:mb-3 md:mb-4 text-purple-400">
                    Centres d'intérêt
                  </h4>
                  <ul className="space-y-2 md:space-y-3">
                    <li className="flex items-center gap-2 md:gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"></div>
                      <span className="text-gray-300 text-xs sm:text-sm md:text-base">Cybersécurité</span>
                    </li>
                    <li className="flex items-center gap-2 md:gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"></div>
                      <span className="text-gray-300 text-xs sm:text-sm md:text-base">Nouvelles technologies</span>
                    </li>
                    <li className="flex items-center gap-2 md:gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"></div>
                      <span className="text-gray-300 text-xs sm:text-sm md:text-base">Impressions 3D</span>
                    </li>
                    <li className="flex items-center gap-2 md:gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"></div>
                      <span className="text-gray-300 text-xs sm:text-sm md:text-base">Volley-ball</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Experience & Education in Parallel */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-start">
            
            {/* Professional Experience Section */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl sm:rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-700">
                <div className="flex items-center gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
                  <div className="p-2 md:p-3 bg-green-900/30 rounded-lg md:rounded-xl flex-shrink-0">
                    <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-500" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                    Expériences Professionnelles
                  </h3>
                </div>

                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  {experienceData.map((experience) => (
                    <div key={experience.id} className="bg-green-900/20 rounded-lg md:rounded-xl p-3 sm:p-4 md:p-6 border border-green-800/30">
                      <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
                        <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                          <img
                            src={experience.logo}
                            alt={experience.company}
                            className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-auto object-contain flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1">
                              {experience.title}
                            </h4>
                            <p className="text-green-400 font-semibold text-xs md:text-sm">
                              {experience.company}
                            </p>
                          </div>
                          <span className={`px-2 py-1 rounded-full font-semibold text-xs flex-shrink-0 ${
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
                        
                        <div className="flex flex-col sm:flex-row gap-2 text-gray-400 text-xs md:text-sm">
                          <div className="flex items-center gap-1 md:gap-2">
                            <Calendar className="w-3 h-3 flex-shrink-0" />
                            <span>{experience.period}</span>
                          </div>
                          <div className="flex items-center gap-1 md:gap-2">
                            <MapPin className="w-3 h-3 flex-shrink-0" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-400 mb-2 sm:mb-3 md:mb-4 leading-relaxed text-xs md:text-sm">
                        {experience.description}
                      </p>

                      {/* Missions */}
                      <div className="bg-gray-700/50 rounded-lg p-2 sm:p-3 mb-2 sm:mb-3 md:mb-4">
                        <h5 className="font-bold mb-2 text-green-400 text-xs md:text-sm flex items-center gap-2">
                          <Target className="w-3 h-3" />
                          Missions principales
                        </h5>
                        <ul className="space-y-1">
                          {experience.missions.map((mission, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <ChevronRight className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-300 text-xs">{mission}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      {experience.technologies && (
                        <div className="bg-gray-700/50 rounded-lg p-2 sm:p-3">
                          <h5 className="font-bold mb-2 text-blue-400 text-xs md:text-sm flex items-center gap-2">
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
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl sm:rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-700">
                <div className="flex items-center gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
                  <div className="p-2 md:p-3 bg-blue-900/30 rounded-lg md:rounded-xl flex-shrink-0">
                    <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-500" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                    Parcours Académique
                  </h3>
                </div>

                <div className="relative">
                  <div className="absolute left-3 sm:left-4 md:left-6 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

                  {/* Current Education */}
                  {ongoingEducation.map((education) => (
                    <div key={education.id} className="relative pl-8 sm:pl-12 md:pl-16 pb-4 sm:pb-6 md:pb-8">
                      <div className="absolute left-2 sm:left-3 md:left-5 top-3 w-2 h-2 md:w-3 md:h-3 rounded-full bg-blue-500 border-2 border-gray-800"></div>
                      <div className="bg-blue-900/20 rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4 border border-blue-800/30">
                        <div className="flex flex-col gap-2 md:gap-3 mb-2 sm:mb-3 md:mb-4">
                          <div className="flex items-start gap-2 md:gap-3">
                            <img
                              src={education.logo}
                              alt={education.school}
                              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-auto object-contain flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1">
                                {education.title}
                              </h4>
                              <p className="text-gray-400 text-xs md:text-sm">
                                {education.school}
                              </p>
                            </div>
                            <span className="px-2 py-1 bg-blue-900/30 text-blue-400 rounded-full font-semibold text-xs flex-shrink-0">
                              {education.period}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-gray-400 mb-2 sm:mb-3 md:mb-4 leading-relaxed text-xs md:text-sm">
                          {education.description}
                        </p>
                        
                        {education.id === "bts-sio" && (
                          <a
                            href="/docs/tableau-synt-fernandes.pdf"
                          
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-2 mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg text-xs md:text-sm"
                          >
                            <FileText className="w-3 h-3" />
                            <span>Tableau de Synthèse</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}

                        {/* Skills */}
                        {education.skills && (
                          <div className="grid grid-cols-1 gap-1 md:gap-2 mt-2 sm:mt-3 md:mt-4">
                            {education.skills.map((skill, index) => (
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
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Past Education Toggle */}
                  <div className="relative pl-8 sm:pl-12 md:pl-16 mb-3 sm:mb-4 md:mb-6">
                    <button
                      onClick={() => setShowPastEducation(!showPastEducation)}
                      className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors font-semibold text-xs md:text-sm"
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
                      <div className="mt-3 sm:mt-4 md:mt-6 space-y-3 sm:space-y-4 md:space-y-6">
                        {incompleteEducation.map((education) => (
                          <div key={education.id} className="relative -ml-8 sm:-ml-12 md:-ml-16 pl-8 sm:pl-12 md:pl-16">
                            <div className="absolute left-2 sm:left-3 md:left-5 top-3 w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 border-2 border-gray-800"></div>
                            <div className="bg-red-900/20 rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4 border border-red-800/30">
                              <div className="flex flex-col gap-2 md:gap-3 mb-2 sm:mb-3 md:mb-4">
                                <div className="flex items-start gap-2 md:gap-3">
                                  <img
                                    src={education.logo}
                                    alt={education.school}
                                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-auto object-contain flex-shrink-0"
                                  />
                                  <div className="flex-1 min-w-0">
                                    <h4 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1">
                                      {education.title}
                                    </h4>
                                    <p className="text-gray-400 text-xs md:text-sm">
                                      {education.school}
                                    </p>
                                  </div>
                                  <span className="px-2 py-1 bg-red-900/30 text-red-400 rounded-full font-semibold text-xs flex-shrink-0">
                                    {education.period}
                                  </span>
                                </div>
                              </div>
                              
                              <p className="text-gray-400 mb-2 sm:mb-3 md:mb-4 leading-relaxed text-xs md:text-sm">
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
                    <div key={education.id} className="relative pl-8 sm:pl-12 md:pl-16 pb-4 sm:pb-6 md:pb-8">
                      <div className="absolute left-2 sm:left-3 md:left-5 top-3 w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500 border-2 border-gray-800"></div>
                      <div className="bg-green-900/20 rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4 border border-green-800/30">
                        <div className="flex flex-col gap-2 md:gap-3 mb-2 sm:mb-3 md:mb-4">
                          <div className="flex items-start gap-2 md:gap-3">
                            <img
                              src={education.logo}
                              alt={education.school}
                              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-auto object-contain flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1">
                                {education.title}
                              </h4>
                              <p className="text-gray-400 text-xs md:text-sm">
                                {education.school}
                              </p>
                            </div>
                            <span className="px-2 py-1 bg-green-900/30 text-green-400 rounded-full font-semibold text-xs flex-shrink-0">
                              {education.period}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-gray-400 mb-2 sm:mb-3 md:mb-4 leading-relaxed text-xs md:text-sm">
                          {education.description}
                        </p>
                        
                        {education.mention && (
                          <div className="mt-3 inline-flex px-2 py-1 bg-green-900/30 text-green-400 rounded-full font-semibold text-xs">
                            Mention {education.mention}
                          </div>
                        )}
                        
                        {/* Skills */}
                        {education.skills && (
                          <div className="grid grid-cols-1 gap-1 md:gap-2 mt-2 sm:mt-3 md:mt-4">
                            {education.skills.map((skill, index) => (
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