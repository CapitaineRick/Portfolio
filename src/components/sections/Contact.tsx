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
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-purple-600">
            Contact
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-medium">
            N'hésitez pas à me contacter pour toute opportunité professionnelle ou collaboration technique
          </p>
        </div>
        
        <div 
          ref={contactRef}
          className="transition-all duration-300 opacity-0 translate-y-10"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gray-800 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-white">Envoyez-moi un message</h3>
                  <p className="mb-6 text-gray-300">
                    Je suis à l'écoute de vos propositions de stage, d'alternance ou de collaboration technique.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Nom
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-600 rounded-xl
                                bg-gray-700 text-white
                                focus:ring-2 focus:ring-orange-500 focus:border-transparent
                                placeholder-gray-400
                                transition-all duration-300"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-600 rounded-xl
                                bg-gray-700 text-white
                                focus:ring-2 focus:ring-orange-500 focus:border-transparent
                                placeholder-gray-400
                                transition-all duration-300"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full p-3 border border-gray-600 rounded-xl
                                bg-gray-700 text-white
                                focus:ring-2 focus:ring-orange-500 focus:border-transparent
                                placeholder-gray-400
                                transition-all duration-300"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className={`w-full py-3 px-6 flex items-center justify-center rounded-xl
                              text-white font-medium transition-all duration-300
                              ${formStatus === 'success' 
                                ? 'bg-green-500 hover:bg-green-600' 
                                : formStatus === 'error'
                                  ? 'bg-red-500 hover:bg-red-600'
                                  : 'bg-gradient-to-r from-orange-500 to-purple-500 hover:opacity-90'
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
            </div>
            
            <div className="md:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gray-800 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-white">Informations de contact</h3>
                  <p className="mb-6 text-gray-300">
                    Vous pouvez également me contacter directement via les coordonnées ci-dessous.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-orange-900/30 p-3 rounded-xl mr-4">
                        <Mail className="text-orange-500" size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white">Email</h4>
                        <a 
                          href="mailto:sebastien.78.fernandes@outlook.fr"
                          className="text-orange-400 hover:underline"
                        >
                          sebastien.78.fernandes@outlook.fr
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-orange-900/30 p-3 rounded-xl mr-4">
                        <Linkedin className="text-orange-500" size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white">LinkedIn</h4>
                        <a 
                          href="https://www.linkedin.com/in/s%C3%A9bastien-fernandes-566008232/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-400 hover:underline"
                        >
                          linkedin.com/in/sébastien-fernandes
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-orange-900/30 p-3 rounded-xl mr-4">
                        <File className="text-orange-500" size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white">Mon CV</h4>
                        <button className="mt-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-purple-500 text-white rounded-xl hover:opacity-90 transition-all duration-300">
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
    </section>
  );
};

export default Contact;