export interface Experience {
  id: string;
  title: string;
  company: string;
  logo: string;
  period: string;
  location: string;
  description: string;
  type: 'stage' | 'emploi' | 'alternance';
  missions: string[];
  technologies?: string[];
  achievements?: string[];
}

export const experienceData: Experience[] = [
  {
    id: 'stage-knds',
    title: 'Stagiaire Support Informatique',
    company: 'KNDS France',
    logo: '/images/knds-logo.webp',
    period: 'Mai 2024 - Juillet 2024',
    location: 'Versailles, France',
    description: 'Stage de première année en BTS SIO SISR au sein du service informatique de KNDS France, spécialisé dans la défense et l\'armement.',
    type: 'stage',
    missions: [
      'Support utilisateur niveau 1 et 2',
      'Gestion et maintenance du parc informatique',
      'Administration des systèmes VoIP/ToIP AVAYA',
      'Création d\'infographies du parc informatique',
      'Résolution d\'incidents techniques',
      'Documentation des procédures support'
    ],
    technologies: [
      'AVAYA (VoIP/ToIP)',
      'Windows 10/11',
      'Active Directory',
      'Outils de ticketing',
      'Inventaire de parc'
    ],
    achievements: [
      'Résolution de 95% des tickets niveau 1 en autonomie',
      'Création d\'une cartographie complète du parc',
      'Amélioration des procédures de support utilisateur',
      'Formation aux technologies VoIP/ToIP'
    ]
  }
  // Vous pouvez ajouter d'autres expériences ici
];