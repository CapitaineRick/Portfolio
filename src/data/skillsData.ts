import { Network, Server, Shield, Terminal, MonitorSmartphone, Wrench } from 'lucide-react';

export const skillsData = [
  {
    name: 'Support et mise à disposition des services informatiques',
    icon: Wrench,
    skills: [
      {
        name: 'Windows Server',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/2048px-Windows_logo_-_2012.svg.png',
        level: 2,
        description: 'Compétence acquise en BTS SIO SISR via des TP et projets. Installation et configuration de services AD et DHCP sur des VM.'
      },
      {
        name: 'Windows 11',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/2048px-Windows_logo_-_2012.svg.png',
        level: 2,
        description: 'Expérience personnelle et en environnement de test. Installation, configuration système, gestion des comptes utilisateurs et dépannage.'
      },
      {
        name: 'Windows 10',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/2048px-Windows_logo_-_2012.svg.png',
        level: 2,
        description: 'Expérience personnelle et en environnement de test. Installation, configuration système, gestion des comptes utilisateurs et dépannage.'
      },
      {
        name: 'Linux',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png',
        level: 2,
        description: 'Autoformation et BTS : installation/configuration sur Debian, Arch Linux et Ubuntu. Expérience sur dual boot et environnements virtualisés.'
      },
      {
        name: 'GLPI',
        logo: 'https://www.sparks-formation.com/wp-content/uploads/2020/07/logo-glpi.png',
        level: 1,
        description: 'Utilisé dans le cadre du BTS. Installation, configuration de base, gestion des tickets et inventaire de parc informatique simulé.'
      },
      {
        name: 'Active Directory',
        logo: 'https://cdn-icons-png.flaticon.com/512/2784/2784487.png',
        level: 1,
        description: 'Manipulation dans des environnements de TP. Création de comptes, groupes, stratégies de sécurité et GPO.'
      }
    ]
  },
  {
    name: 'Administration des systèmes et des réseaux',
    icon: Network,
    skills: [
      {
        name: 'Proxmox',
        logo: 'https://www.proxmox.com/images/proxmox/Proxmox_logo_standard_hex_400px.png',
        level: 2,
        description: 'Virtualisation de serveurs via Proxmox durant les projets de BTS. Création de VM, configuration de clusters, snapshots.'
      },
      {
        name: 'Cisco',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png',
        level: 2,
        description: 'TP sur Packet Tracer en BTS SIO SISR : configuration de routeurs, VLAN, adressage IP, routage statique/dynamique.'
      },
      {
        name: 'VMware',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Vmware.svg/1200px-Vmware.svg.png',
        level: 2,
        description: 'Utilisé pour la virtualisation d’environnements Windows/Linux lors de projets personnels et en laboratoire scolaire.'
      },
      {
        name: 'VirtualBox',
        logo: '/images/logo-virtualbox-logo.webp',
        level: 2,
        description: 'Utilisé pour la virtualisation d’environnements Windows/Linux lors de projets personnels et en laboratoire scolaire.'
      },
      {
        name: 'MySQL',
        logo: 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg',
        level: 2,
        description: 'Manipulation via projets Web et TP SQL. Création de bases de données, gestion des utilisateurs, sécurisation.'
      },
      {
        name: 'DNS',
        logo: 'https://cdn-icons-png.flaticon.com/512/2620/2620427.png',
        level: 1,
        description: 'TP BTS : configuration de zones DNS, résolution de noms, intégration avec Active Directory.'
      },
      {
        name: 'DHCP',
        logo: 'https://cdn-icons-png.flaticon.com/512/9354/9354390.png',
        level: 1,
        description: 'Mis en place sur Windows Server et Debian en TP pour l’attribution automatique d’adresses IP.'
      }
    ]
  },
  {
    name: 'Cybersécurité des services informatiques',
    icon: Shield,
    skills: [
      {
        name: 'Wireshark',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Wireshark_icon.svg/1200px-Wireshark_icon.svg.png',
        level: 2,
        description: 'Utilisé pour analyser le trafic réseau dans le cadre de TP sécurité au BTS. Observation de trames, détection d’anomalies.'
      },
      {
        name: 'Kali Linux',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Kali-dragon-icon.svg/2048px-Kali-dragon-icon.svg.png',
        level: 1,
        description: 'Autoformation à l’éthique hacking. Tests basiques (Nmap, reconnaissance réseau) dans des environnements isolés.'
      },
      {
        name: 'VPN',
        logo: 'https://cdn-icons-png.flaticon.com/512/6313/6313041.png',
        level: 1,
        description: 'Mise en place d’un VPN simple pour un projet personnel. Concepts abordés : chiffrement, tunnels, sécurité réseau.'
      },
      {
        name: 'Pare-feu',
        logo: 'https://cdn-icons-png.flaticon.com/512/2196/2196224.png',
        level: 0,
        description: 'Notions acquises en BTS. Configuration initiale de règles UFW/IPTables. En cours d’approfondissement.'
      }
    ]
  },
  {
    name: 'Supervision et haute disponibilité',
    icon: MonitorSmartphone,
    skills: [
      {
        name: 'HAProxy',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Haproxy-logo.png',
        level: 2,
        description: 'Utilisé en projet BTS pour répartir la charge entre plusieurs serveurs web (load balancing). Rupture protocolaire via un reverse proxy.'
      },
      {
        name: 'Zabbix',
        logo: 'https://assets.zabbix.com/img/logo/zabbix_logo_500x131.png',
        level: 2,
        description: 'Projet de supervision réseau et serveurs en BTS. Configuration de l’agent, alertes et tableaux de bord.'
      },
      {
        name: 'Rsync',
        logo: '/images/logo-rsync-logo.webp',
        level: 1,
        description: 'Mise en place de sauvegardes automatisées sur Linux. Scripté dans le cadre d’un projet de continuité de service.'
      }
    ]
  },
  {
    name: 'Automatisation et scripting',
    icon: Terminal,
    skills: [
      {
        name: 'Bash',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bash_Logo_Colored.svg/1200px-Bash_Logo_Colored.svg.png',
        level: 2,
        description: 'Scripting Linux appris en TP et projets perso : automatisation de sauvegardes, tâches CRON, installation de paquets.'
      },
      {
        name: 'Python',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
        level: 2,
        description: 'Développement de petits outils/scripts. Appris en autoformation et utilisé dans des projets de traitement de données ou outils réseau.'
      },
      {
        name: 'PowerShell',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/PowerShell_5.0_icon.png/600px-PowerShell_5.0_icon.png',
        level: 1,
        description: 'Utilisé pour automatiser des tâches Windows (création d’utilisateurs, export CSV) dans des environnements de TP.'
      },
      {
        name: 'C / C++',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
        level: 1,
        description: 'Bases apprises en autoformation. Utilisation pour comprendre les fondements de la programmation système.'
      },
      {
        name: 'Ansible',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ansible_logo.svg/1200px-Ansible_logo.svg.png',
        level: 0,
        description: 'En cours d’apprentissage. Découverte de la configuration automatisée via YAML et playbooks.'
      }
    ]
  },
  {
    name: 'Développement web et mobile',
    icon: MonitorSmartphone,
    skills: [
      {
        name: 'HTML5 / CSS3',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
        level: 2,
        description: 'Utilisé dans le cadre de projets scolaires pour créer des interfaces web responsives. Maîtrise des balises, flexbox et design de base.'
      },
      {
        name: 'PHP 7',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg',
        level: 2,
        description: 'Développement back-end avec MySQL pour des projets de gestion de base de donnée.'
      },
      {
        name: 'SQL',
        logo: 'https://cdn-icons-png.flaticon.com/512/29/29826.png',
        level: 1,
        description: 'Requêtes SQL, jointures et manipulation de données dans le cadre de projets web en BTS.'
      }
    ]
  },
  {
    name: 'Gestion de projet',
    icon: Shield,
    skills: [
      {
        name: 'Merise',
        logo: '/images/logo-merise.webp',
        level: 2,
        description: 'Modélisation des données (MLD, MCD) dans le cadre des cours de BTS. Utilisé dans les projets de gestion.'
      },
      {
        name: 'Diagrame de Gantt',
        logo: '/images/logo-gantt.webp',
        level: 2,
        description: 'Planification de projets avec diagrammes de Gantt sur GanttProject ou Excel.'
      }
    ]
  },
  {
    name: 'Distributions Linux',
    icon: Terminal,
    skills: [
      {
        name: 'Arch Linux',
        logo: '/images/logo-arch-logo.webp',
        level: 2,
        description: 'Autoformation poussée. Installation manuelle, configuration fine, scripts de maintenance. Utilisé en dual boot.'
      },
      {
        name: 'Debian',
        logo: '/images/logo-debian12-logo.webp',
        level: 2,
        description: 'Utilisée en environnement de TP. Serveurs LAMP, SSH, DNS. Appris dans le cadre du BTS.'
      }

    ]
  }
];
