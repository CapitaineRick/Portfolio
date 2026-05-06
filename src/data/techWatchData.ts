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

Prérequis pour obtenir la qualification :
• Être une personne morale de droit européen (entreprise enregistrée dans l'UE)
• Détenir un capital majoritairement européen (minimum 61 % selon les exigences ANSSI)
• Ne pas être soumis à des législations extraterritoriales non-européennes (CLOUD Act, FISA)
• Disposer d'un Système de Management de la Sécurité de l'Information (SMSI) documenté et opérationnel
• Appliquer le guide d'hygiène informatique de l'ANSSI au niveau renforcé
• Mettre en œuvre des mécanismes de chiffrement conformes aux recommandations de l'ANSSI (algorithmes approuvés, gestion des clés)
• Garantir que seul le personnel de l'opérateur qualifié peut intervenir sur les ressources hébergeant le service
• Disposer d'une infrastructure hébergée exclusivement sur le sol européen
• Être en capacité de répondre à un audit sur site réalisé par un laboratoire accrédité (AFNOR, LNE)
• S'engager à maintenir la conformité avec un audit annuel de maintien et un renouvellement complet tous les 3 ans

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

  image: "\public\images\secnumcloud.webp",
  date: "01 mai 2026",
  tags: ["SecNumCloud", "ANSSI", "Cloud", "Cybersécurité", "Souveraineté numérique", "Cloud de confiance"],
  category: "Cybersécurité",
sources: [
    {
      type: 'link',
      label: 'ANSSI — Page cloud officielle',
      url: 'https://cyber.gouv.fr/enjeux-technologiques/cloud/'
    },
    {
      type: 'link',
      label: 'ANSSI — Liste des prestataires qualifiés SecNumCloud',
      url: 'https://cyber.gouv.fr/offre-de-service/solutions-certifiees-et-qualifiees/services-de-securite-evalue/solutions-en-cours-de-qualification/prestataires-secnumcloud/'
    },
    {
      type: 'link',
      label: 'Wikipedia — SecNumCloud',
      url: 'https://fr.wikipedia.org/wiki/SecNumCloud'
    },
    {
      type: 'link',
      label: 'AFNOR Certification — Qualification SecNumCloud',
      url: 'https://certification.afnor.org/numerique/qualification-secnumcloud'
    },
    {
      type: 'link',
      label: 'LNE — Processus de qualification SecNumCloud',
      url: 'https://www.lne.fr/fr/service/certification/qualification-secnumcloud'
    },
    {
      type: 'link',
      label: 'SoftFluent — Comprendre SecNumCloud',
      url: 'https://www.softfluent.fr/blog/comprendre-secnumcloud/'
    },
    {
      type: 'link',
      label: 'LeMagIT — Évolutions du référentiel version 3.2',
      url: 'https://www.lemagit.fr/conseil/SecNumCloud-32-les-principales-evolutions-du-referentiel'
    },
    {
      type: 'link',
      label: 'Usine Digitale — S3NS et doctrine ANSSI (jan. 2026)',
      url: 'https://www.usine-digitale.fr/informatique/cloud/souverainete-ce-que-lobtention-du-visa-secnumcloud-par-s3ns-change-durablement-dans-la-doctrine-francaise-du-cloud-de-confiance.IMMAGOMCTBFM3DXWKV2KBAZLSU.html'
    },
    {
      type: 'link',
      label: 'Next — Health Data Hub et migration SecNumCloud (fév. 2026)',
      url: 'https://next.ink/223140/health-data-hub-le-gouvernement-promet-une-bascule-sur-secnumcloud-dici-fin-2026/'
    },
    {
      type: 'link',
      label: 'Orange Newsroom — Qualification Cloud Avenue SecNum (juil. 2025)',
      url: 'https://newsroom.orange.com/orange-business-annonce-la-qualification-secnumcloud-de-son-offre-cloud-avenue-secnum-une-etape-cle-pour-la-confiance-numerique/?lang=fra'
    }
  ]
}

];