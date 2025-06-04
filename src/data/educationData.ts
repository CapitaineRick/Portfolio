import { StaticImageData } from 'next/image';

export interface Education {
  id: string;
  title: string;
  school: string;
  logo: string;
  period: string;
  description: string;
  status: 'completed' | 'ongoing' | 'incomplete';
  mention?: string;
  skills?: string[];
  reason?: string;
}

export const educationData: Education[] = [
  // ton contenu ici
  {
    id: 'bts-sio',
    title: 'BTS SIO – Option SISR',
    school: 'IPSSI, Saint-Quentin-en-Yvelines',
    logo: '/images/ipssi.webp',
    period: '2024–2026',
    description: 'Brevet de Technicien Supérieur Services Informatiques aux Organisations, spécialité Solutions d’Infrastructure, Systèmes et Réseaux. Formation orientée administration réseau, cybersécurité et gestion de systèmes d’information.',
    status: 'ongoing',
    skills: [
      'Administration systèmes (Windows / Linux)',
      'Gestion de réseaux (Cisco)',
      'Sécurité des infrastructures (Proxy)',
      'Virtualisation (VMware, Proxmox)',
      'Support utilisateur (GLPI)',
      'Supervision réseau (Zabbix)',
      'Scripts d’automatisation (Bash, PowerShell)'
    ]
  },
  {
    id: 'license-mpc',
    title: 'Licence Mathématiques - Physique - Chimie (MPC)',
    school: 'Université de Versailles Saint-Quentin-en-Yvelines (UVSQ)',
    logo: '/images/UVSQ-logo.webp',
    period: '2022–2023',
    description: 'Première année de licence scientifique pluridisciplinaire avec une orientation vers les sciences du numérique. Approche théorique renforcée des mathématiques appliquées et de la physique.',
    status: 'incomplete',
    reason: 'Réorientation vers une formation plus professionnalisante et technique (BTS SIO)'
  },
  {
    id: 'but-rt',
    title: 'BUT Réseaux & Télécommunications',
    school: 'IUT de Vélizy – UVSQ',
    logo: '/images/UVSQ-logo.webp',
    period: '2021–2022',
    description: 'Formation axée sur les réseaux informatiques, la téléphonie, la cybersécurité et les communications numériques. ',
    status: 'incomplete',
    reason: 'Réorientation vers une formation plus en adéquation avec mes objectifs professionnels'
  },
  {
    id: 'cpge-tsi',
    title: 'Classe Préparatoire aux Grandes Écoles – TSI',
    school: 'Lycée Raspail, Paris 14ᵉ',
    logo: '/images/logo-raspail.webp',
    period: '2020–2021',
    description: 'Prépa scientifique post-bac STI2D orientée vers l’ingénierie, les sciences industrielles et les mathématiques. Préparation aux concours d’écoles d’ingénieurs.',
    status: 'completed',
    reason: 'Réorientation pour me recentrer sur l’informatique appliquée',
    mention: 'Assez Bien',
    skills: [
      'Mathématiques avancées (algèbre, analyse, probabilités)',
      'Physique appliquée (mécanique, électromagnétisme, thermodynamique)',
      'Informatique fondamentale (algorithmique, structures de données)',
      'Modélisation et simulation (Scilab, Python)',
      'Systèmes automatisés (chaînes d’énergie et d’information)',
      'Électrotechnique (circuits, lois fondamentales, moteurs)',
      'Méthodologie de résolution de problèmes complexes',
      'Travail en autonomie et gestion de projet scientifique'
    ]
  },
  {
    id: 'bac-sti2d',
    title: 'Baccalauréat STI2D – Option SIN',
    school: 'Lycée Jules Ferry, Versailles',
    logo: '/images/logo-jf.webp',
    period: '2017–2020',
    description: 'Sciences et Technologies de l’Industrie et du Développement Durable, spécialité Systèmes d’Information et Numérique. Apprentissage des bases de l’électronique, du développement et des systèmes embarqués.',
    status: 'completed',
    mention: 'Bien',
    skills: [
      'Initiation à l’électronique (capteurs, actionneurs)',
      'Programmation embarquée (Arduino)',
      'Réseaux de base (adressage IP, communication client/serveur)',
      'Conception de systèmes (schémas fonctionnels, chaînes d’énergie et d’information)',
      'Initiation aux langages (Python, C, HTML/CSS)',
      'Culture technologique (analyse de systèmes, innovation durable)'
    ]

  }
];