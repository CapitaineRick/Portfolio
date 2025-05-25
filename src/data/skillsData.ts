import { Network, Server, Shield, Terminal, MonitorSmartphone, Wrench } from 'lucide-react';

export const skillsData = [
  {
    name: 'Support et mise à disposition des services informatiques',
    icon: Wrench,
    skills: [
      {
        name: 'GLPI',
        logo: 'https://www.sparks-formation.com/wp-content/uploads/2020/07/logo-glpi.png',
        level: 1,
        description: 'Gestion des tickets et inventaire'
      },
      {
        name: 'Active Directory',
        logo: 'https://cdn-icons-png.flaticon.com/512/2784/2784487.png',
        level: 3,
        description: 'Administration des utilisateurs et GPO'
      },
      {
        name: 'Windows Server',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/2048px-Windows_logo_-_2012.svg.png',
        level: 3,
        description: 'Configuration et maintenance'
      },
      {
        name: 'Linux',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png',
        level: 3,
        description: 'Administration système'
      },
      {
        name: 'VirtualBox',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Virtualbox_logo.png',
        level: 3,
        description: 'Virtualisation locale'
      },
      {
        name: 'RDP',
        logo: 'https://cdn-icons-png.flaticon.com/512/603/603201.png',
        level: 2,
        description: 'Connexion distante sécurisée'
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
        level: 3,
        description: 'Virtualisation et clustering'
      },
      {
        name: 'pfSense',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/PfSense_logo.png/1200px-PfSense_logo.png',
        level: 3,
        description: 'Pare-feu et routage'
      },
      {
        name: 'Cisco',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png',
        level: 2,
        description: 'Configuration des switchs et routeurs'
      },
      {
        name: 'VMware',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Vmware.svg/1200px-Vmware.svg.png',
        level: 2,
        description: 'Virtualisation'
      },
      {
        name: 'DNS',
        logo: 'https://cdn-icons-png.flaticon.com/512/2620/2620427.png',
        level: 2,
        description: 'Résolution de noms'
      },
      {
        name: 'DHCP',
        logo: 'https://cdn-icons-png.flaticon.com/512/9354/9354390.png',
        level: 2,
        description: 'Attribution automatique des adresses IP'
      }
    ]
  },
  {
    name: 'Cybersécurité des services informatiques',
    icon: Shield,
    skills: [
      {
        name: 'Pare-feu',
        logo: 'https://cdn-icons-png.flaticon.com/512/2196/2196224.png',
        level: 3,
        description: 'Configuration et maintenance'
      },
      {
        name: 'VPN',
        logo: 'https://cdn-icons-png.flaticon.com/512/6313/6313041.png',
        level: 2,
        description: 'Mise en place et gestion'
      },
      {
        name: 'Wireshark',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Wireshark_icon.svg/1200px-Wireshark_icon.svg.png',
        level: 2,
        description: 'Analyse de trafic réseau'
      },
      {
        name: 'Kali Linux',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Kali-dragon-icon.svg/2048px-Kali-dragon-icon.svg.png',
        level: 2,
        description: 'Tests de pénétration'
      },
      {
        name: 'MySQL',
        logo: 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg',
        level: 2,
        description: 'Base de données sécurisées'
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
        level: 3,
        description: 'Load balancing'
      },
      {
        name: 'Zabbix',
        logo: 'https://assets.zabbix.com/img/logo/zabbix_logo_500x131.png',
        level: 2,
        description: 'Monitoring système et réseau'
      },
      {
        name: 'Grafana',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Grafana_logo.svg/1200px-Grafana_logo.svg.png',
        level: 2,
        description: 'Visualisation des données'
      },
      {
        name: 'Veeam',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Veeam_logo.png',
        level: 2,
        description: 'Sauvegarde et restauration'
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
        level: 3,
        description: 'Scripting Linux'
      },
      {
        name: 'PowerShell',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/PowerShell_5.0_icon.png/600px-PowerShell_5.0_icon.png',
        level: 2,
        description: 'Automatisation Windows'
      },
      {
        name: 'Python',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
        level: 2,
        description: 'Développement d\'outils'
      },
      {
        name: 'C / C++',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
        level: 2,
        description: 'Développement bas niveau'
      },
      {
        name: 'Ansible',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ansible_logo.svg/1200px-Ansible_logo.svg.png',
        level: 1,
        description: 'Configuration automatisée'
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
        level: 3,
        description: 'Structure et design web'
      },
      {
        name: 'SQL',
        logo: 'https://cdn-icons-png.flaticon.com/512/29/29826.png',
        level: 2,
        description: 'Requêtes et gestion de données'
      },
      {
        name: 'PHP 7',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg',
        level: 2,
        description: 'Back-end web'
      }
    ]
  },
  {
    name: 'Services aux utilisateurs',
    icon: Server,
    skills: [
      {
        name: 'Office 365',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_logo_%282019%E2%80%93present%29.svg.png',
        level: 3,
        description: 'Suite bureautique cloud'
      },
      {
        name: 'Teams',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png',
        level: 3,
        description: 'Communication unifiée'
      },
      {
        name: 'Exchange',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Microsoft_Exchange_logo.png/640px-Microsoft_Exchange_logo.png',
        level: 2,
        description: 'Messagerie d\'entreprise'
      },
      {
        name: 'SharePoint',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Microsoft_Office_SharePoint_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_SharePoint_%282019%E2%80%93present%29.svg.png',
        level: 2,
        description: 'Collaboration documentaire'
      }
    ]
  },
  {
    name: 'Gestion de projet',
    icon: Shield,
    skills: [
      {
        name: 'Merise',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Merise_model.png',
        level: 2,
        description: 'Modélisation des données et des traitements'
      }
    ]
  },
  {
    name: 'Distributions Linux',
    icon: Terminal,
    skills: [
      {
        name: 'Arch Linux',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Archlinux-icon-crystal-64.svg',
        level: 2,
        description: 'Distribution rolling release personnalisable'
      },
      {
        name: 'Debian',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Debian-logo.svg',
        level: 2,
        description: 'Distribution stable et sécurisée'
      }
    ]
  }
];