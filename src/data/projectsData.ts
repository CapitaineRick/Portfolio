export const projectsData = {
  enterprise: [
    {
      id: "",
      title: "Stage KNDS",
      description:
        "Stage de première année, support utilisateur, infographie du parc et administration système",
      image: "/images/logo-knds-logo.webp",
      pdfUrl:"docs/rapport_knds.pdf",
      tags: ["Gestion de parc", "VoIP/ToIP", "AVAYA", "Support"],
    },
    {
      id: "cycle",
      title: "Cycle de vie des projets d'entreprise",
      description:
        "Formation sur le cycle de vie des engtreprises",
      image: "images/cycle-projet.png",
      pdfUrl:"images/formation.jpg",
      tags: ["Gestion de parc", "VoIP/ToIP", "AVAYA", "Support"],
    },
  ],
  school: [
    {
      id: "ap1",
      title: "AP-1",
      description:
        "Activité Professionnelle 1 - Problématique entreprise Revive",
      image: "/images/logo_revive_blanc.webp",
      documents: [
        {
          title: "Site Web Revive",
          url: "/docs/AP1/Revive/index.html",
          description: "Site web de l'entreprise Revive - Interface utilisateur complète avec e-commerce",
        },
        {
          title: "Bon de commande Revive",
          url: "/docs/AP1/bon_commande.pdf",
          description: "Document de commande pour l'entreprise Revive",
        },
        {
          title: "Contrat de Travail Hajar",
          url: "/docs/AP1/contrat_travail_hajar.pdf",
          description: "Contrat de travail pour Hajar dans l'entreprise Revive",
        },
        {
          title: "Contrat de Travail Tony",
          url: "/docs/AP1/contrat_travail_tony.pdf",
          description: "Contrat de travail pour Tony dans l'entreprise Revive",
        },
        {
          title: "Estimation Revive",
          url: "/docs/AP1/estimation_revive.pdf",
          description: "Estimation pour l'entreprise Revive",
        },
        {
          title: "Facture Revive",
          url: "/docs/AP1/facture_f33000001.pdf",
          description: "Facture pour l'entreprise Revive",
        },
        {
          title: "Fiche de Poste Marketing",
          url: "/docs/AP1/fiche_de_poste_marketing.pdf",
          description:
            "Fiche de poste pour le marketing dans l'entreprise Revive",
        },
        {
          title: "KBIS Revive",
          url: "/docs/AP1/kbis_revive.pdf",
          description: "Extrait KBIS de l'entreprise Revive",
        },
        {
          title: "Présentation de l'entreprise Revive",
          url: "/docs/AP1/présentation_revive.pdf",
          description: "Présentation de l'entreprise Revive",
        },
        {
          title: "Template de devis",
          url: "/docs/AP1/template_devis.pdf",
          description: "Template de devis pour l'entreprise Revive",
        },
      ],
      tags: ["Analyse", "Documentation", "Gestion", "E-commerce", "HTML/CSS/JS"],
    },
    {
      id: "ap2",
      title: "AP-2",
      description: "Activité Professionnelle 2 - Problématique de la M2L",
      image: "/images/logo-M2L.webp",
      tags: ["Windows", "Active Directory", "Déploiement logiciel"],
      documents: [
          {
          title: "Présentation AP2",
          url: "/docs/AP2/ap2-pres.pdf",
          description: "Présentation des problématiques et leurs solutions",
        },
        {
          title: "Documentation d'installation",
          url: "/docs/AP2/ap2-doc.pdf",
          description: "Installation des solutions.",
        }
      ]
    },
    {
      id: "proxmox",
      title: "Installation Proxmox VE",
      description: "Installation et configuration de l'hyperviseur Proxmox VE",
      image: "/images/logo-proxmox-logo.webp",
      pdfUrl: "/docs/Install_Proxmox.pdf",
      tags: ["Hyperviseur", "Virtualisation", "Clustering"],
    },
    {
      id: "arch",
      title: "Archlinux",
      description: "Installation et configuration de Archlinux",
      image: "/images/logo-arch-logo.webp",
      pdfUrl: "/docs/install-arch.pdf",
      tags: ["Linux", "OS", "Serveur"],
    },
    {
      id: "docker",
      title: "Installation Docker",
      description: "Installation et configuration de Docker sur Linux",
      image: "/images/logo-docker-logo.webp",
      pdfUrl: "/docs/Install_Docker.pdf",
      tags: ["Docker", "Linux", "Conteneurisation"],
    },
    {
      id: "windows-server-2025",
      title: "Installation Windows Server 2025",
      description: "Installation et configuration de Windows Server 2025",
      image: "/images/logo-wins25-logo.webp",
      pdfUrl: "/docs/Install_Win_S2025.pdf",
      tags: ["OS", "Windows", "Active Directory", "Administration système"],
    },
    {
      id: "windows-10",
      title: "Installation Windows 10",
      description: "Installation et configuration de Windows 10",
      image: "/images/logo-win10-logo.webp",
      pdfUrl: "/docs/Install_Win10.pdf",
      tags: ["OS", "Windows", "Administration système"],
    },
    {
      id: "windows-11",
      title: "Installation Windows 11",
      description: "Installation et configuration de Windows 11",
      image: "/images/logo-win11-logo.webp",
      pdfUrl: "/docs/Install_Win11.pdf",
      tags: ["OS", "Windows", "Administration système"],
    },
    {
      id: "ubuntu",
      title: "Installation Ubuntu Linux",
      description: "Installation et configuration d'Ubuntu Linux",
      image: "/images/logo-ubuntu-logo.webp",
      pdfUrl: "/docs/Install_Ubuntu.pdf",
      tags: ["OS", "Linux", "Serveur", "Administration système"],
    },
    {
      id: "haproxy",
      title: "Installation HAProxy",
      description: "Installation et configuration du load balancer HAProxy",
      image: "/images/logo-haproxy-logo.webp",
      pdfUrl: "/docs/Install_Haproxy.pdf",
      tags: ["Haute Disponibilité", "Load Balancing"],
    },
    {
      id: "kali",
      title: "Installation Kali Linux",
      description: "Installation et configuration de Kali Linux",
      image: "/images/logo-kali-logo.webp",
      pdfUrl: "/docs/Install_Kali.pdf",
      tags: ["Linux", "Cybersécurité", "Hacking", "Pentesting", "OS"],
    },
    {
      id: "debian-12",
      title: "Installation Debian 12",
      description: "Installation et configuration de Debian 12",
      image: "/images/logo-debian12-logo.webp",
      pdfUrl: "/docs/Install-debian12.pdf",
      tags: ["Linux", "OS", "Serveur", "Administration système"],
    },
    {
      id: "apache2",
      title: "Installation Apache2",
      description:
        "Installation et configuration du serveur web Apache2 avec modules",
      image: "/images/logo-apache-logo.webp",
      pdfUrl: "/docs/install-apache2.pdf",
      tags: ["Web", "Serveur", "Apache", "WAF"],
    },
        {
      id: "GLPI",
      title: "Installation de GLPI",
      description: "Installation et configuration de GLPI",
      image: "/images/logo-glpi.webp",
      pdfUrl: "/docs/Install_GLPI.pdf",
      tags: ["Support","Web"],
    },
        {
      id: "bash",
      title: "Script Bash",
      description: "Backup via rsync",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bash_Logo_Colored.svg/1200px-Bash_Logo_Colored.svg.png",
      pdfUrl: "/docs/script_bash.pdf",
      tags: ["Bash","Backup", "Administration système"],
    },

        {
      id: "powershell",
      title: "Script powershell",
      description: "Scripts d'administration en Powershell",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/PowerShell_5.0_icon.png/600px-PowerShell_5.0_icon.png",
      pdfUrl: "/docs/scripts_powershell.pdf",
      tags: ["Powershell", "Administration système"],
    },
  ],
  
};