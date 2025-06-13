export const projectsData = {
  enterprise: [
    {
      id: 'active-directory',
      title: 'Stage KNDS',
      description: 'Stage de première année, support utilisateur, infographie du parc et administration système',
      image: '/images/logo-knds-logo.webp',
      tags: ['Gestion de parc', 'VoIP/ToIP', 'AVAYA', 'Support']
    },
  ],
  school: [
    {
      id: 'ap1',
      title: 'AP-1',
      description: 'Activité Professionnelle 1 - Problématique entreprise Revive',
      image: '/images/logo-revive-logo.webp',
      documents: [
        {
          title: 'Bon de commande Revive',
          url: '/docs/AP1/bon_commande.pdf',
          description: 'Document de commande pour l\'entreprise Revive'
        },
        {
          title: 'KBIS Revive',
          url: '/docs/AP1/kbis_revive.pdf',
          description: 'Extrait KBIS de l\'entreprise Revive'
        }
      ],
      tags: ['Entreprise', 'Analyse', 'Documentation', 'Gestion']
    },
    {
      id: 'ap2',
      title: 'AP-2',
      description: 'Activité Professionnelle 2 - Problématique de la M2L',
      image: '/images/logo-m2l-logo.webp',
      pdfUrl: '/docs/AP2.pdf',
      tags: ['Windows', 'Active Directory', 'Déploiement logiciel']
    },
    {
      id: 'proxmox',
      title: 'Installation Proxmox VE',
      description: 'Installation et configuration de l\'hyperviseur Proxmox VE',
      image: '/images/logo-proxmox-logo.webp',
      pdfUrl: '/docs/Install_Proxmox.pdf',
      tags: ['Hyperviseur', 'Virtualisation', 'Clustering']
    },
    {
      id: 'docker',
      title: 'Installation Docker',
      description: 'Installation et configuration de Docker sur Linux',
      image: '/images/logo-docker-logo.webp',
      pdfUrl: '/docs/Install_Docker.pdf',
      tags: ['Docker', 'Linux', 'Conteneurisation']
    },
    {
      id: 'windows-server-2025',
      title: 'Installation Windows Server 2025',
      description: 'Installation et configuration de Windows Server 2025',
      image: '/images/logo-wins25-logo.webp',
      pdfUrl: '/docs/Install_Win_S2025.pdf',
      tags: ['OS', 'Windows', 'Active Directory', 'Administration système']
    },
    {
      id: 'windows-10',
      title: 'Installation Windows 10',
      description: 'Installation et configuration de Windows 10',
      image: '/images/logo-win10-logo.webp',
      pdfUrl: '/docs/Install_Win10.pdf',
      tags: ['OS', 'Windows', 'Administration système']
    }, 
    {
      id: 'windows-11',
      title: 'Installation Windows 11',
      description: 'Installation et configuration de Windows 11',
      image: '/images/logo-win11-logo.webp',
      pdfUrl: '/docs/Install_Win11.pdf',
      tags: ['OS', 'Windows', 'Administration système']
    },
    {
      id: 'ubuntu',
      title: 'Installation Ubuntu Linux',
      description: 'Installation et configuration d\'Ubuntu Linux',
      image: '/images/logo-ubuntu-logo.webp',
      pdfUrl: '/docs/Install_Ubuntu.pdf',
      tags: ['OS', 'Linux', 'Serveur', 'Administration système']
    },
    {
      id: 'haproxy',
      title: 'Installation HAProxy',
      description: 'Installation et configuration du load balancer HAProxy',
      image: '/images/logo-haproxy-logo.webp',
      pdfUrl: '/docs/Install_Haproxy.pdf',
      tags: ['Haute Disponibilité', 'Load Balancing']
    },
    {
      id: 'kali',
      title: 'Installation Kali Linux',
      description: 'Installation et configuration de Kali Linux',
      image: '/images/logo-kali-logo.webp',
      pdfUrl: '/docs/Install_Kali.pdf',
      tags: ['Linux', 'Cybersécurité', 'Hacking', 'Pentesting', 'OS']
    },
    {
      id: 'debian-12',
      title: 'Installation Debian 12',
      description: 'Installation et configuration de Debian 12',
      image: '/images/logo-debian12-logo.webp',
      pdfUrl: '/docs/Install-debian12.pdf',
      tags: ['Linux', 'OS', 'Serveur', 'Administration système']
    },
    {
      id: 'apache2',
      title: 'Installation Apache2',
      description: 'Installation et configuration du serveur web Apache2 avec modules',
      image: '/images/logo-apache-logo.webp',
      pdfUrl: '/docs/install-apache2.pdf',
      tags: ['Web', 'Serveur', 'Apache', 'WAF']
    }
  ]
};