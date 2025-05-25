import { Network, Server, Shield, Terminal, MonitorSmartphone, Wrench } from 'lucide-react';
export const skillsData = [
  {
    name: 'Support et mise à disposition des services informatiques',
    icon: Wrench,
    skills: [
      {
        name: 'GLPI',
        logo: 'https://www.sparks-formation.com/wp-content/uploads/2020/07/logo-glpi.png',
        level: 2,
        description: 'Gestion des demandes, inventaire de parc et base de connaissances'
      },
      {
        name: 'Active Directory',
        logo: 'https://cdn-icons-png.flaticon.com/512/2784/2784487.png',
        level: 3,
        description: 'Gestion des comptes utilisateurs, unités d’organisation et stratégies de groupe (GPO)'
      },
      {
        name: 'Windows Server',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/2048px-Windows_logo_-_2012.svg.png',
        level: 3,
        description: 'Installation, configuration de rôles (AD DS, DNS, DHCP), gestion des sauvegardes'
      },
      {
        name: 'Linux',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png',
        level: 3,
        description: 'Administration système (utilisateurs, services, droits, mises à jour)'
      }
    ]
  },
  {
    name: 'Administration des systèmes et des réseaux',
    icon: Server,
    skills: [
      {
        name: 'Cisco',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png',
        level: 2,
        description: 'Configuration des VLANs, routage statique et dynamique, ACLs'
      },
      {
        name: 'pfSense',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/PfSense_logo.png/1200px-PfSense_logo.png',
        level: 3,
        description: 'Mise en place de firewall, NAT, VPN et règles de sécurité'
      },
      {
        name: 'VMware',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Vmware.svg/1200px-Vmware.svg.png',
        level: 2,
        description: 'Création et gestion de machines virtuelles, snapshots, ressources'
      },
      {
        name: 'Proxmox',
        logo: 'https://www.proxmox.com/images/proxmox/Proxmox_logo_standard_hex_400px.png',
        level: 3,
        description: 'Virtualisation de serveurs, haute disponibilité et gestion des clusters'
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
        description: 'Filtrage du trafic réseau entrant/sortant, DMZ, zones de confiance'
      },
      {
        name: 'VPN',
        logo: 'https://cdn-icons-png.flaticon.com/512/6313/6313041.png',
        level: 2,
        description: 'Configuration de tunnels sécurisés site-à-site ou client-à-site'
      },
      {
        name: 'Wireshark',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Wireshark_icon.svg/1200px-Wireshark_icon.svg.png',
        level: 2,
        description: 'Analyse du trafic réseau, détection d’anomalies et de failles'
      },
      {
        name: 'Kali Linux',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Kali-dragon-icon.svg/2048px-Kali-dragon-icon.svg.png',
        level: 2,
        description: 'Tests de pénétration, reconnaissance réseau et exploitation de failles'
      }
    ]
  },
  {
    name: 'Supervision et haute disponibilité',
    icon: MonitorSmartphone,
    skills: [
      {
        name: 'Zabbix',
        logo: 'https://assets.zabbix.com/img/logo/zabbix_logo_500x131.png',
        level: 2,
        description: 'Surveillance des ressources systèmes, alertes et visualisation graphique'
      },
      {
        name: 'Grafana',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Grafana_logo.svg/1200px-Grafana_logo.svg.png',
        level: 2,
        description: 'Tableaux de bord interactifs pour visualisation temps réel'
      },
      {
        name: 'HAProxy',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Haproxy-logo.png',
        level: 3,
        description: 'Répartition de charge, tolérance aux pannes et montée en charge'
      },
      {
        name: 'Veeam',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Veeam_logo.png',
        level: 2,
        description: 'Stratégies de sauvegarde, restauration de VM et fichiers'
      }
    ]
  },
  {
    name: 'Automatisation et scripting',
    icon: Terminal,
    skills: [
      {
        name: 'PowerShell',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/PowerShell_5.0_icon.png/600px-PowerShell_5.0_icon.png',
        level: 2,
        description: 'Automatisation des tâches sur l’écosystème Windows'
      },
      {
        name: 'Bash',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bash_Logo_Colored.svg/1200px-Bash_Logo_Colored.svg.png',
        level: 3,
        description: 'Scripts Linux pour l’administration système et la maintenance'
      },
      {
        name: 'Python',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
        level: 2,
        description: 'Création de scripts, outils de diagnostic et automatisation réseau'
      },
      {
        name: 'Ansible',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ansible_logo.svg/1200px-Ansible_logo.svg.png',
        level: 1,
        description: 'Déploiement et configuration automatisée d’infrastructures'
      }
    ]
  },
  {
    name: 'Services aux utilisateurs',
    icon: Network,
    skills: [
      {
        name: 'Exchange',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Microsoft_Exchange_logo.png/640px-Microsoft_Exchange_logo.png',
        level: 2,
        description: 'Administration de la messagerie, gestion des boîtes et transport'
      },
      {
        name: 'SharePoint',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Microsoft_Office_SharePoint_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_SharePoint_%282019%E2%80%93present%29.svg.png',
        level: 2,
        description: 'Création d’espaces collaboratifs, gestion documentaire'
      },
      {
        name: 'Office 365',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_logo_%282019%E2%80%93present%29.svg.png',
        level: 3,
        description: 'Déploiement, administration et support utilisateur de la suite cloud'
      },
      {
        name: 'Teams',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png',
        level: 3,
        description: 'Outil de communication, gestion des équipes et canaux'
      }
    ]
  }
];
