import React, { useEffect, useRef, useState } from 'react';
import { Send, Mail, Linkedin, File } from 'lucide-react';

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1000);
  };

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
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -right-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>
        
        <div 
          ref={contactRef}
          className="transition-all duration-1000 opacity-0 translate-y-10"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl transform group-hover:scale-[1.01] transition duration-500">
                <h3 className="text-2xl font-semibold mb-4">Envoyez-moi un message</h3>
                <p className="mb-6 text-gray-700 dark:text-gray-300">
                  N'hésitez pas à me contacter pour un stage, une alternance ou toute collaboration technique.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                                bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                                focus:ring-2 focus:ring-orange-500 focus:border-transparent
                                transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                                bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                                focus:ring-2 focus:ring-orange-500 focus:border-transparent
                                transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                                bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                                focus:ring-2 focus:ring-orange-500 focus:border-transparent
                                transition-all duration-300"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className={`w-full py-3 px-6 flex items-center justify-center rounded-lg
                              text-white font-medium transition-all duration-300
                              transform hover:scale-105 shadow-lg
                              ${formStatus === 'success' 
                                ? 'bg-green-500 hover:bg-green-600 shadow-green-500/25' 
                                : formStatus === 'error'
                                  ? 'bg-red-500 hover:bg-red-600 shadow-red-500/25'
                                  : 'bg-orange-500 hover:bg-orange-600 shadow-orange-500/25'
                              }`}
                  >
                    {formStatus === 'success' ? (
                      'Message envoyé !'
                    ) : formStatus === 'error' ? (
                      'Erreur, veuillez réessayer'
                    ) : (
                      <>
                        <Send className="mr-2" size={18} />
                        Envoyer
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
            
            <div className="md:w-1/2 group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl transform group-hover:scale-[1.01] transition duration-500">
                <h3 className="text-2xl font-semibold mb-4">Informations de contact</h3>
                <p className="mb-6 text-gray-700 dark:text-gray-300">
                  Vous pouvez également me contacter directement via les coordonnées ci-dessous.
                </p>
                
                <div className="space-y-6">
                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl blur opacity-0 group-hover:opacity-25 transition duration-1000"></div>
                    <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 transform group-hover:scale-[1.01] transition duration-500">
                      <div className="flex items-center">
                        <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-full mr-4">
                          <Mail className="text-orange-500" size={24} />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium">Email</h4>
                          <a 
                            href="mailto:sebastien.78.fernandes@outlook.fr"
                            className="text-orange-500 hover:text-orange-600 transition-colors"
                          >
                            sebastien.78.fernandes@outlook.fr
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl blur opacity-0 group-hover:opacity-25 transition duration-1000"></div>
                    <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 transform group-hover:scale-[1.01] transition duration-500">
                      <div className="flex items-center">
                        <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-full mr-4">
                          <Linkedin className="text-orange-500" size={24} />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium">LinkedIn</h4>
                          <a 
                            href="https://www.linkedin.com/in/s%C3%A9bastien-fernandes-566008232/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-500 hover:text-orange-600 transition-colors"
                          >
                            linkedin.com/in/sébastien-fernandes
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl blur opacity-0 group-hover:opacity-25 transition duration-1000"></div>
                    <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 transform group-hover:scale-[1.01] transition duration-500">
                      <div className="flex items-center">
                        <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-full mr-4">
                          <File className="text-orange-500" size={24} />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium">Mon CV</h4>
                          <button className="mt-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25">
                            Télécharger mon CV
                          </button>
                        </div>
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