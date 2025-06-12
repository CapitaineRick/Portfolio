export const techWatchData = [
  {
    title: "Nouvelle vulnérabilité critique dans Apache HTTP Server",
    description: "Une faille de sécurité majeure a été découverte dans Apache HTTP Server 2.4.49 et 2.4.50, permettant l'exécution de code arbitraire. Cette vulnérabilité, référencée CVE-2021-41773, affecte les configurations par défaut et nécessite une mise à jour immédiate.\n\nLa faille permet à un attaquant distant d'accéder à des fichiers en dehors du répertoire racine configuré et d'exécuter des scripts sur le serveur. Les administrateurs système doivent appliquer le correctif ou désactiver mod_cgi comme mesure temporaire.",
    category: "Cybersécurité",
    date: "15 Oct 2024",
    url: "https://httpd.apache.org/security/vulnerabilities_24.html",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
    tags: ["Apache", "CVE", "Serveur Web", "Sécurité"]
  },
  {
    title: "Microsoft déploie des correctifs pour Exchange Server",
    description: "Microsoft a publié des mises à jour de sécurité critiques pour Exchange Server afin de corriger plusieurs vulnérabilités permettant l'élévation de privilèges et l'exécution de code à distance.\n\nCes failles, découvertes par des chercheurs en sécurité, pourraient permettre à des attaquants d'accéder aux boîtes mail et de compromettre l'infrastructure de messagerie d'entreprise. La mise à jour est recommandée en priorité absolue.",
    category: "Infrastructure",
    date: "12 Oct 2024",
    url: "https://msrc.microsoft.com/update-guide/",
    image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg",
    tags: ["Microsoft", "Exchange", "Messagerie", "Patch"]
  },
  {
    title: "Kubernetes 1.25 : Nouvelles fonctionnalités de sécurité",
    description: "La nouvelle version de Kubernetes introduit des améliorations significatives en matière de sécurité, notamment le support natif des Pod Security Standards et l'amélioration du chiffrement des données au repos.\n\nCette version marque également la suppression définitive des API bêta obsolètes et l'introduction de nouvelles fonctionnalités pour la gestion des secrets. Les équipes DevOps doivent planifier leur migration.",
    category: "Conteneurisation",
    date: "08 Oct 2024",
    url: "https://kubernetes.io/blog/2022/08/23/kubernetes-v1-25-release/",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
    tags: ["Kubernetes", "Conteneurs", "DevOps", "Sécurité"]
  },
  {
    title: "Attaque par ransomware sur l'infrastructure critique",
    description: "Une nouvelle campagne de ransomware cible spécifiquement les infrastructures critiques utilisant des systèmes SCADA et des automates industriels. Les attaquants exploitent des vulnérabilités dans les protocoles de communication industriels.\n\nLes experts recommandent la segmentation réseau, la mise à jour des firmwares et l'implémentation de solutions de détection spécialisées pour l'environnement industriel.",
    category: "Cybersécurité",
    date: "05 Oct 2024",
    url: "https://www.cisa.gov/news-events/alerts",
    image: "https://images.pexels.com/photos/5380792/pexels-photo-5380792.jpeg",
    tags: ["Ransomware", "SCADA", "Industrie", "Sécurité"]
  },
  {
    title: "Proxmox VE 7.3 : Améliorations de la virtualisation",
    description: "Proxmox Virtual Environment 7.3 apporte des améliorations significatives en termes de performance et de sécurité. Cette version inclut le support du kernel Linux 5.15 LTS et des optimisations pour les environnements haute disponibilité.\n\nLes nouvelles fonctionnalités incluent une interface web améliorée, de meilleurs outils de sauvegarde et une intégration renforcée avec les solutions de stockage distribué.",
    category: "Virtualisation",
    date: "02 Oct 2024",
    url: "https://www.proxmox.com/en/news/press-releases",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg",
    tags: ["Proxmox", "Virtualisation", "Hyperviseur", "Linux"]
  },
  {
    title: "Zero Trust : Évolution des architectures réseau",
    description: "Le modèle Zero Trust devient la norme pour sécuriser les infrastructures modernes. Cette approche remet en question le périmètre de sécurité traditionnel en vérifiant chaque connexion et chaque utilisateur.\n\nLes entreprises adoptent progressivement cette philosophie qui nécessite une refonte complète de l'architecture réseau, avec l'implémentation de solutions d'authentification multi-facteurs et de micro-segmentation.",
    category: "Architecture",
    date: "28 Sep 2024",
    url: "https://www.nist.gov/publications/zero-trust-architecture",
    image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg",
    tags: ["Zero Trust", "Architecture", "Sécurité", "Réseau"]
  },
  {
    title: "Vulnérabilités dans les puces Intel et AMD",
    description: "De nouvelles vulnérabilités matérielles ont été découvertes dans les processeurs Intel et AMD, similaires à Spectre et Meltdown. Ces failles permettent potentiellement l'accès à des données sensibles via des attaques par canal auxiliaire.\n\nLes fabricants travaillent sur des microcode updates, mais les correctifs logiciels pourraient impacter les performances. Les administrateurs doivent évaluer le risque versus performance.",
    category: "Hardware",
    date: "25 Sep 2024",
    url: "https://www.intel.com/content/www/us/en/security-center/default.html",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
    tags: ["Intel", "AMD", "Hardware", "Vulnérabilité"]
  },
  {
    title: "Docker Desktop : Nouvelles fonctionnalités de sécurité",
    description: "Docker Desktop introduit de nouvelles fonctionnalités de sécurité incluant la signature d'images, l'analyse de vulnérabilités intégrée et des politiques de sécurité renforcées pour les environnements de développement.\n\nCes améliorations visent à sécuriser la chaîne d'approvisionnement logicielle dès le développement et à réduire les risques liés aux images de conteneurs non vérifiées.",
    category: "Conteneurisation",
    date: "22 Sep 2024",
    url: "https://docs.docker.com/desktop/release-notes/",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
    tags: ["Docker", "Conteneurs", "Sécurité", "DevSecOps"]
  },
  {
    title: "Évolution des attaques sur Active Directory",
    description: "Les cybercriminels développent de nouvelles techniques pour compromettre Active Directory, exploitant des configurations par défaut et des privilèges excessifs. Les attaques Golden Ticket et Silver Ticket évoluent vers des méthodes plus sophistiquées.\n\nLes experts recommandent l'implémentation de solutions de détection comportementale, la révision des privilèges et l'adoption de stratégies de moindre privilège.",
    category: "Cybersécurité",
    date: "18 Sep 2024",
    url: "https://attack.mitre.org/",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
    tags: ["Active Directory", "Windows", "Sécurité", "Authentification"]
  },
  {
    title: "5G et sécurité des réseaux d'entreprise",
    description: "L'adoption de la 5G dans les environnements d'entreprise soulève de nouveaux défis de sécurité. La technologie de découpage réseau (network slicing) offre des opportunités mais introduit aussi de nouveaux vecteurs d'attaque.\n\nLes entreprises doivent adapter leurs politiques de sécurité pour intégrer ces nouvelles technologies tout en maintenant la confidentialité et l'intégrité des données.",
    category: "Réseaux",
    date: "15 Sep 2024",
    url: "https://www.nist.gov/news-events/news/2021/08/nist-releases-cybersecurity-guidance-5g-cloud-infrastructures",
    image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg",
    tags: ["5G", "Réseaux", "Télécommunications", "Sécurité"]
  }
];