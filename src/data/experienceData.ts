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
}

export const experienceData: Experience[] = [
    {
    id: 'alternance1-knds',
    title: 'Alternance Administrateur Réseau',
    company: 'KNDS France',
    logo: '/images/logo-knds-logo.webp',
    period: 'Septembre 2025 - Juillet 2026',
    location: 'Versailles, France',
    description: 'Alternance de deuxième année en BTS SIO SISR au sein du service informatique de KNDS France, spécialisé dans la défense et l\'armement.',
    type: 'alternance',
    missions: [
      'Pilotage du renouvellement du LAN',
      'Durcissement de VLAN',
      'Mise en place de conformité',
      "Brassage d'équipements réseau",
      'Remplacement de PDU'


    ],
    technologies: [
      'Avaya (Switching)',
      'Aruba (Switching)',
      'Fortigate (Firewall)',
      'Stormshield (Firewall)',
      'Netbox (Inventaire de parc)',
    ]
  },
  {
    id: 'stage-knds',
    title: 'Stagiaire Support Informatique',
    company: 'KNDS France',
    logo: '/images/logo-knds-logo.webp',
    period: 'Mai 2025 - Juin 2025',
    location: 'Versailles, France',
    description: 'Stage de première année en BTS SIO SISR au sein du service informatique de KNDS France, spécialisé dans la défense et l\'armement.',
    type: 'stage',
    missions: [
      'Support utilisateur niveau 1 et 2',
      'Administration des systèmes VoIP/ToIP AVAYA',
      'Création d\'infographies du parc informatique',
      'Résolution d\'incidents techniques',
      'Documentation de procédures'
    ],
    technologies: [
      'AVAYA (VoIP/ToIP)',
      'Windows 10/11',
      'Outils de ticketing',
      'Inventaire de parc',
      'Netbox'
    ]
  }

];