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
  {
    id: 'bts-sio',
    title: 'BTS SIO - Option SISR',
    school: 'IPSSI, Saint-Quentin-en-Yvelines',
    logo: '/images/logo-jf.webp',
    period: '2023-2025',
    description: 'Services Informatiques aux Organisations - Solutions d\'Infrastructure, Systèmes et Réseaux',
    status: 'ongoing',
    skills: [
      'Administration systèmes',
      'Sécurité des infrastructures',
      'Virtualisation',
      'Support technique'
    ]
  },
  {
    id: 'bts-snir',
    title: 'BTS SNIR',
    school: 'Lycée Vaucanson, Versailles',
    logo: '/images/logo-jf.webp',
    period: '2022-2023',
    description: 'Systèmes Numériques option Informatique et Réseaux',
    status: 'incomplete',
    reason: 'Réorientation'
  },
  {
    id: 'bac-sti2d',
    title: 'Bac STI2D - Option SIN',
    school: 'Lycée Jules Ferry, Versailles',
    logo: '/images/logo-jf.webp',
    period: '2021-2023',
    description: 'Sciences et Technologies de l\'Industrie et du Développement Durable - Systèmes d\'Information et Numérique',
    status: 'completed',
    mention: 'Bien'
  }
];