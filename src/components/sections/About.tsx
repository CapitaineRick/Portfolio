import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, Book, Code, Monitor, Server, Shield, Briefcase, GraduationCap, ChevronDown, ChevronUp, User, MapPin, Calendar, Mail, Phone, Globe, FileText } from 'lucide-react';

const About: React.FC = () => {
  // Existing state and refs...

  return (
    <>
      <Helmet>
        <title>À propos - Fernandes Sébastien | BTS SIO SISR</title>
        <meta name="description" content="Découvrez mon parcours, mes compétences et mon expérience en tant qu'étudiant en BTS SIO SISR. Formation, stages et objectifs professionnels." />
        <meta name="keywords" content="BTS SIO, SISR, Parcours académique, Expérience professionnelle, Stage, KNDS" />
      </Helmet>
      <section id="about" className="py-16 md:py-24 flex items-center justify-center relative overflow-hidden">
        {/* Existing component content... */}
      </section>
    </>
  );
};

export default About;