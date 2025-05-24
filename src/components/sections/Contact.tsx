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
    setFormStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => {
      setFormStatus('idle');
    }, 3000);
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
    <section id="contact" className="py-16 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-purple-600">
            Contact
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            N'hésitez pas à me contacter pour toute opportunité ou question
          </p>
        </div>
        
        <div 
          ref={contactRef}
          className="transition-all duration-1000 opacity-0 translate-y-10"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold mb-6">Envoyez-moi un message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nom
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 
                                 border border-gray-200 dark:border-gray-600
                                 focus:ring-2 focus:ring-orange-500 focus:border-transparent
                                 transition-all duration-300"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 
                                 border border-gray-200 dark:border-gray-600
                                 focus:ring-2 focus:ring-orange-500 focus:border-transparent
                                 transition-all duration-300"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 
                                 border border-gray-200 dark:border-gray-600
                                 focus:ring-2 focus:ring-orange-500 focus:border-transparent
                                 transition-all duration-300"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className={`w-full py-3 px-6 flex items-center justify-center gap-2 rounded-xl
                                text-white font-medium transition-all duration-300
                                ${formStatus === 'success' 
                                  ? 'bg-green-500' 
                                  : formStatus === 'error'
                                    ? 'bg-red-500'
                                    : 'bg-gradient-to-r from-orange-500 to-purple-500 hover:opacity-90'
                                }`}
                    >
                      {formStatus === 'success' ? (
                        'Message envoyé !'
                      ) : formStatus === 'error' ? (
                        'Erreur, veuillez réessayer'
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Envoyer
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative group h-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 h-full">
                  <h3 className="text-2xl font-semibold mb-6">Informations de contact</h3>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl">
                        <Mail className="w-6 h-6 text-orange-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1">Email</h4>
                        <a 
                          href="mailto:sebastien.78.fernandes@outlook.fr"
                          className="text-orange-500 hover:underline transition-all duration-300"
                        >
                          sebastien.78.fernandes@outlook.fr
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl">
                        <Linkedin className="w-6 h-6 text-orange-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1">LinkedIn</h4>
                        <a 
                          href="https://www.linkedin.com/in/s%C3%A9bastien-fernandes-566008232/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-500 hover:underline transition-all duration-300"
                        >
                          linkedin.com/in/sébastien-fernandes
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl">
                        <File className="w-6 h-6 text-orange-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1">CV</h4>
                        <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-purple-500 
                                         text-white rounded-xl flex items-center gap-2 
                                         hover:opacity-90 transition-all duration-300">
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