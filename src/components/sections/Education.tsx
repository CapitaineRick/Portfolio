'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';
import { educationData } from '../../data/educationData';

const Education: React.FC = () => {
  const [showIncomplete, setShowIncomplete] = useState(false);
  const educationRef = useRef<HTMLDivElement>(null);

  const completedEducation = educationData.filter(edu => edu.status === 'completed');
  const ongoingEducation = educationData.filter(edu => edu.status === 'ongoing');
  const incompleteEducation = educationData.filter(edu => edu.status === 'incomplete');

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

  const renderEducation = (education: typeof educationData[0]) => (
    <div className="relative pl-16 pb-8" key={education.id}>
      <div className={`absolute left-6 top-3 w-4 h-4 rounded-full border-4 border-gray-800 ${
        education.status === 'completed' 
          ? 'bg-green-500' 
          : education.status === 'ongoing'
            ? 'bg-blue-500'
            : 'bg-red-500'
      }`}></div>
      <div className={`${
        education.status === 'completed'
          ? 'bg-green-900/20'
          : education.status === 'ongoing'
            ? 'bg-blue-900/20'
            : 'bg-red-900/20'
      } rounded-xl p-6`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="relative w-24 h-auto">
              <Image 
                src={education.logo}
                alt={education.school}
                width={96}
                height={96}
                className="w-24 h-auto object-contain"
              />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">{education.title}</h4>
              <p className="text-gray-400">{education.school}</p>
            </div>
          </div>
          <span className={`px-4 py-2 rounded-full text-sm ${
            education.status === 'completed'
              ? 'bg-green-900/30 text-green-400'
              : education.status === 'ongoing'
                ? 'bg-blue-900/30 text-blue-400'
                : 'bg-red-900/30 text-red-400'
          }`}>
            {education.period}
          </span>
        </div>
        <div className="space-y-4">
          <p className="text-sm text-gray-400">
            {education.description}
          </p>
          {education.skills && (
            <div className="grid grid-cols-2 gap-4">
              {education.skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <ChevronRight className={`w-4 h-4 ${
                    education.status === 'completed'
                      ? 'text-green-500'
                      : 'text-blue-500'
                  }`} />
                  <span className="text-sm text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          )}
          {education.mention && (
            <div className="inline-flex px-4 py-2 bg-green-900/30 text-green-400 rounded-full text-sm">
              Mention {education.mention}
            </div>
          )}
          {education.reason && (
            <div className="inline-flex px-4 py-2 bg-red-900/30 text-red-400 rounded-full text-sm">
              Non validé - {education.reason}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="education" className="py-16 md:py-24 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-purple-600">
            Parcours Académique
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto mb-6"></div>
        </div>
        
        <div 
          ref={educationRef}
          className="transition-all duration-300 opacity-0 translate-y-10"
        >
          <div className="relative">
            <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            {/* Formations en cours */}
            {ongoingEducation.map(renderEducation)}

            {/* Formations non terminées */}
            <div className="relative pl-16">
              <button
                onClick={() => setShowIncomplete(!showIncomplete)}
                className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors"
              >
                {showIncomplete ? (
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

              {showIncomplete && (
                <div className="mt-8 space-y-8">
                  {incompleteEducation.map(renderEducation)}
                </div>
              )}
            </div>

            {/* Formations terminées */}
            {completedEducation.map(renderEducation)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
