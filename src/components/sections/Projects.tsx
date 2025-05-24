import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { projectsData } from '../../data/projectsData';
import { Briefcase, GraduationCap, Filter, Tags, Search, ChevronDown, ChevronUp, ExternalLink, ArrowRight, FileText, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects: React.FC = () => {
  // Existing state and refs...

  return (
    <>
      <Helmet>
        <title>Projets - Fernandes Sébastien | BTS SIO SISR</title>
        <meta name="description" content="Découvrez mes projets en administration système, réseau et sécurité. Réalisations professionnelles et académiques en infrastructure IT." />
        <meta name="keywords" content="Projets IT, Infrastructure, Système, Réseau, Sécurité, Documentation technique" />
      </Helmet>
      <section id="projects" className="py-16 flex items-center justify-center relative overflow-hidden">
        {/* Existing component content... */}
      </section>
    </>
  );
};

export default Projects;