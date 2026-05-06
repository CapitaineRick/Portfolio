export interface TechWatchSource {
  type: 'link' | 'file' | 'video';
  label: string;
  url?: string;
  filePath?: string;
}

export interface TechWatchItem {
  title: string;
  description: string;
  image: string;
  date: string;
  tags: string[];
  category: string;
  sources: TechWatchSource[];
}

export const techWatchData: TechWatchItem[] = [
  {
    title: "SecNumCloud : Le standard de confiance pour le cloud français",
    description: `Sécurité des données dans le cloud (SecNumCloud) : Qualification ANSSI et souveraineté numérique
  SecNumCloud est un référentiel créé par l'ANSSI (Agence Nationale de la Sécurité des Systèmes d'Information) qui certifie qu'un hébergeur cloud est suffisamment sécurisé pour stocker des données sensibles. Il garantit qu'aucune législation étrangère ne peut permettre l'accès aux données hébergées, et que le prestataire respecte des exigences techniques strictes vérifiées par audit indépendant. Lorsqu'une administration stocke ses données chez un hébergeur américain, le CLOUD Act autorise les autorités américaines à y accéder, même si les serveurs sont en Europe. SecNumCloud impose qu'un opérateur européen garde le contrôle total et exclusif des données, rendant tout accès étranger légalement et techniquement impossible.

Évolutions récentes :
• Création en 2015 (Secure Cloud), renommé SecNumCloud en 2016, basé sur la norme ISO/CEI 27001
• Version actuelle 3.2 : environ 1 200 exigences techniques, opérationnelles et juridiques
• Qualification de S3NS (Thales + Google Cloud) fin 2025 : premier cloud hybride franco-américain qualifié
• Bleu (Orange + Capgemini + Microsoft Azure) : Jalon 1 validé novembre 2025, qualification visée en 2026
• Migration du Health Data Hub (données de santé nationales) vers une solution SecNumCloud annoncée pour fin 2026

Processus de qualification par jalons (12 à 24 mois) :
• J0 : recevabilité du dossier auprès de l'ANSSI
• J1 : conformité documentaire validée (politiques, procédures, architecture)
• J2 : audit technique sur site par un laboratoire accrédité (AFNOR, LNE)
• J3 : décision finale — délivrance du visa de sécurité SecNumCloud

Exigences imposées aux hébergeurs :
• Opérateur de droit européen avec des datacenters situés en Europe
• Chiffrement des données au repos et en transit
• SOC 24h/24, tests d'intrusion réguliers, audit de requalification tous les 3 ans
• Aucun accès possible aux données par un tiers non-européen
• Applicable aux modèles IaaS (Infrastructure), PaaS (Plateforme) et SaaS (Logiciel)

Qui est concerné :
• Les administrations publiques dans le cadre de la doctrine « Cloud au centre » de l'État
• Les OIV (Opérateurs d'Importance Vitale : énergie, défense, transports, santé)
• Les OSE (Opérateurs de Services Essentiels : banques, hôpitaux)
• Tout marché public impliquant le traitement de données sensibles

Impact pour les administrateurs réseau et systèmes :
• Référentiel incontournable pour tout projet d'hébergement en environnement public ou sensible
• Lié directement aux compétences réseau : chiffrement, cloisonnement (VLAN), gestion des accès
• Conformité à renforcer avec NIS2 et le Cyber Resilience Act (2026)
• En 2024, 73 % des dépenses cloud de l'État français bénéficient à des acteurs européens

À ne pas confondre :
SecNumCloud n'est pas un label de souveraineté technologique. La qualification de S3NS (Thales + Google Cloud) l'a prouvé : une technologie américaine peut être utilisée si l'opérateur européen conserve un contrôle exclusif sur les données. L'ANSSI l'a rappelé en janvier 2026 : SecNumCloud est un outil de cybersécurité, pas un choix politique.

SecNumCloud s'impose comme la norme de référence pour la protection des données sensibles en France, rendant sa maîtrise indispensable pour tout professionnel du réseau et de la cybersécurité.`,

  image: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg",
  date: "12 Juin 2025",
  tags: ["SSL", "TLS", "Cybersécurité", "Automatisation", "PKI"],
  category: "Cybersécurité",
  sources: [
    {
      type: 'link',
      label: 'Article Nameshield',
      url: 'https://blog.nameshield.com/fr/2025/05/21/cest-officiel-la-duree-de-vie-des-certificats-ssl-tls-va-etre-reduite-a-47-jours/#:~:text=Cette%20mesure%20entre%20officiellement%20en,bonne%20gestion%20de%20ces%20certificats.'
    },
    {
      type: 'link',
      label: 'Article Let’s Encrypt Blog',
      url: 'https://letsencrypt.org/blog/'
    },
    {
      type: 'link',
      label: 'Article Le Monde Informatique',
      url: 'https://www.lemondeinformatique.fr/actualites/lire-facebook-cloudflare-et-mozilla-allies-pour-mieux-securiser-les-certificats-tls-76965.html.'
    },
    {
      type: 'file',
      label: 'Documentation Veille',
      url: '/docs/Veille.pdf'
    },
    {
      type: 'file',
      label: 'Image ACME',
      url: '/images/ACME_protocol_process.webp'
    },
    {
      type: 'file',
      label: 'Imaghe Certificat SSL',
      url: '/images/ssl-desc.webp'
    }
  ]
}

];