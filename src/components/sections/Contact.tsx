import React, { useEffect, useRef, useState } from "react";
import { Send, Mail, Linkedin, File } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_krdwbss",
        "template_uvldull",
        formData,
        "CFXC5Rk1dCMIux3BE"
      )
      .then(() => {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 3000);
      })
      .catch(() => {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 3000);
      });
  };

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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20" itemScope itemType="https://schema.org/ContactPage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-500" itemProp="name">
            Contact
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto mb-6 sm:mb-8 rounded-full"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            N'hésitez pas à me contacter pour toute opportunité professionnelle
            ou collaboration technique
          </p>
        </div>

        <div
          ref={contactRef}
          className="transition-all duration-300 opacity-0 translate-y-10"
        >
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12">
            <div className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl sm:rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-700">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-white">
                    Envoyez-moi un message
                  </h3>
                  <p className="mb-6 sm:mb-8 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                    Je suis à l'écoute de vos propositions de stage,
                    d'alternance ou de collaboration technique.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-6"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm sm:text-base font-semibold text-gray-300 mb-2"
                      >
                        Nom
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 sm:p-4 border border-gray-600 rounded-xl sm:rounded-2xl
                                bg-gray-700 text-white text-sm sm:text-base
                                focus:ring-2 focus:ring-orange-500 focus:border-transparent
                                placeholder-gray-400
                                transition-all duration-300"
                        placeholder="Votre nom complet"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm sm:text-base font-semibold text-gray-300 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 sm:p-4 border border-gray-600 rounded-xl sm:rounded-2xl
                                bg-gray-700 text-white text-sm sm:text-base
                                focus:ring-2 focus:ring-orange-500 focus:border-transparent
                                placeholder-gray-400
                                transition-all duration-300"
                        placeholder="votre.email@exemple.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm sm:text-base font-semibold text-gray-300 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full p-3 sm:p-4 border border-gray-600 rounded-xl sm:rounded-2xl
                                bg-gray-700 text-white text-sm sm:text-base
                                focus:ring-2 focus:ring-orange-500 focus:border-transparent
                                placeholder-gray-400
                                transition-all duration-300 resize-none"
                        placeholder="Décrivez votre projet ou votre demande..."
                      />
                    </div>

                    <button
                      type="submit"
                      className={`w-full py-3 sm:py-4 px-6 sm:px-8 flex items-center justify-center rounded-xl sm:rounded-2xl
                              text-white font-bold text-sm sm:text-base md:text-lg transition-all duration-300 shadow-lg
                              ${
                                formStatus === "success"
                                  ? "bg-green-500 hover:bg-green-600"
                                  : formStatus === "error"
                                  ? "bg-red-500 hover:bg-red-600"
                                  : "bg-gradient-to-r from-orange-500 to-purple-500 hover:opacity-90 hover:scale-105"
                              }`}
                    >
                      {formStatus === "success" ? (
                        "Message envoyé avec succès !"
                      ) : formStatus === "error" ? (
                        "Erreur, veuillez réessayer"
                      ) : (
                        <>
                          <Send className="mr-2 sm:mr-3" size={16} />
                          Envoyer le message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl sm:rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-700">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-white">
                    Informations de contact
                  </h3>
                  <p className="mb-6 sm:mb-8 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                    Vous pouvez également me contacter directement via les
                    coordonnées ci-dessous.
                  </p>

                  <div className="space-y-6 sm:space-y-8">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="bg-orange-900/30 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-orange-500/30">
                        <Mail className="text-orange-500" size={20} />
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                          Email
                        </h4>
                        <a
                          href="mailto:sebastien.78.fernandes@outlook.fr"
                          className="text-orange-400 hover:text-orange-300 transition-colors text-sm sm:text-base md:text-lg break-all"
                          itemProp="email"
                        >
                          sebastien.78.fernandes@outlook.fr
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="bg-orange-900/30 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-orange-500/30">
                        <Linkedin className="text-orange-500" size={20} />
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                          LinkedIn
                        </h4>
                        <a
                          href="https://www.linkedin.com/in/s%C3%A9bastien-fernandes-566008232/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-400 hover:text-orange-300 transition-colors text-sm sm:text-base md:text-lg break-all"
                          itemProp="sameAs"
                        >
                          linkedin.com/in/sébastien-fernandes
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="bg-orange-900/30 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-orange-500/30">
                        <File className="text-orange-500" size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                          Mon CV
                        </h4>
                        <a
                          href="/docs/fernandes-sebastien-cv.pdf"
                          download
                          className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-orange-500 to-purple-500 text-white rounded-xl sm:rounded-2xl hover:opacity-90 transition-opacity font-semibold shadow-lg text-sm sm:text-base"
                        >
                          <File className="w-4 h-4 sm:w-5 sm:h-5" />
                          Télécharger mon CV
                        </a>
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

export default Contact;
