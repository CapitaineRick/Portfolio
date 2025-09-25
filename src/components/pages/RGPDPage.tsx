import React from 'react';
import { Shield, Eye, Edit, Trash2, Download, Mail, Phone, MapPin, Calendar, AlertTriangle, CheckCircle } from 'lucide-react';

const RGPDPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-orange-900/30 rounded-2xl border border-orange-500/30">
              <Shield className="w-12 h-12 text-orange-500" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-500">
            Politique de Protection des Données (RGPD)
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Conformément au Règlement Général sur la Protection des Données (RGPD), 
            voici comment nous collectons, utilisons et protégeons vos données personnelles.
          </p>
        </div>

        {/* Informations du responsable */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-8 border border-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-orange-500 flex items-center gap-3">
            <Eye className="w-6 h-6" />
            Responsable du traitement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-orange-500" />
                <div>
                  <p className="font-semibold">Sébastien Fernandes</p>
                  <p className="text-gray-400">Étudiant BTS SIO SISR</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <a href="mailto:sebastien.78.fernandes@outlook.fr" className="text-orange-400 hover:text-orange-300">
                  sebastien.78.fernandes@outlook.fr
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-orange-500" />
                <p className="text-gray-300">Versailles, France</p>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-orange-500" />
                <p className="text-gray-300">Dernière mise à jour : Janvier 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Données collectées */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-8 border border-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-orange-500 flex items-center gap-3">
            <Download className="w-6 h-6" />
            Données collectées
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-700/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-white">📧 Formulaire de contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Nom et prénom</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Adresse email</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Message et contenu de la demande</span>
                </li>
              </ul>
              <p className="text-sm text-gray-400 mt-4">
                <strong>Finalité :</strong> Répondre à vos demandes de contact et opportunités professionnelles
              </p>
            </div>

            <div className="bg-gray-700/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-white">📊 Données de navigation</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Adresse IP (anonymisée)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Pages visitées et temps de visite</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Navigateur et système d'exploitation</span>
                </li>
              </ul>
              <p className="text-sm text-gray-400 mt-4">
                <strong>Finalité :</strong> Améliorer l'expérience utilisateur et analyser l'audience (Vercel Analytics)
              </p>
            </div>
          </div>
        </div>

        {/* Vos droits */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-8 border border-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-orange-500 flex items-center gap-3">
            <Shield className="w-6 h-6" />
            Vos droits RGPD
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Eye className="w-5 h-5 text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Droit d'accès</h3>
                  <p className="text-gray-400 text-sm">Connaître les données que nous détenons sur vous</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Edit className="w-5 h-5 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Droit de rectification</h3>
                  <p className="text-gray-400 text-sm">Corriger ou mettre à jour vos informations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Trash2 className="w-5 h-5 text-red-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Droit à l'effacement</h3>
                  <p className="text-gray-400 text-sm">Demander la suppression de vos données</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Droit d'opposition</h3>
                  <p className="text-gray-400 text-sm">Vous opposer au traitement de vos données</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Download className="w-5 h-5 text-purple-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Droit à la portabilité</h3>
                  <p className="text-gray-400 text-sm">Récupérer vos données dans un format lisible</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-orange-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Droit de limitation</h3>
                  <p className="text-gray-400 text-sm">Limiter le traitement de vos données</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-orange-900/20 rounded-xl border border-orange-500/30">
            <h3 className="font-semibold text-orange-400 mb-3">💡 Comment exercer vos droits ?</h3>
            <p className="text-gray-300 mb-4">
              Pour exercer l'un de ces droits, contactez-nous par email en précisant :
            </p>
            <ul className="space-y-1 text-gray-300 text-sm ml-4">
              <li>• Votre identité et coordonnées</li>
              <li>• Le droit que vous souhaitez exercer</li>
              <li>• Les données concernées (si applicable)</li>
            </ul>
            <div className="mt-4">
              <a 
                href="mailto:sebastien.78.fernandes@outlook.fr?subject=Demande RGPD"
                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors font-medium"
              >
                <Mail className="w-4 h-4" />
                Exercer mes droits
              </a>
            </div>
          </div>
        </div>

        {/* Sécurité et conservation */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-8 border border-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-orange-500 flex items-center gap-3">
            <Shield className="w-6 h-6" />
            Sécurité et conservation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-700/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-white">🔒 Mesures de sécurité</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Chiffrement HTTPS (SSL/TLS)</li>
                <li>• Hébergement sécurisé (Netlify)</li>
                <li>• Accès restreint aux données</li>
                <li>• Sauvegardes régulières</li>
              </ul>
            </div>
            <div className="bg-gray-700/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-white">⏰ Durée de conservation</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Messages de contact : 3 ans</li>
                <li>• Données analytiques : 26 mois</li>
                <li>• Logs techniques : 12 mois</li>
                <li>• Suppression automatique</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cookies et traceurs */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-8 border border-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-orange-500 flex items-center gap-3">
            <Eye className="w-6 h-6" />
            Cookies et traceurs
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-700/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-white">🍪 Cookies utilisés</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-green-400">Cookies essentiels</h4>
                  <p className="text-gray-400 text-sm">Nécessaires au fonctionnement du site (pas de consentement requis)</p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-400">Cookies analytiques (Vercel)</h4>
                  <p className="text-gray-400 text-sm">Mesure d'audience anonymisée pour améliorer le site</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
              <h3 className="font-semibold text-blue-400 mb-3">ℹ️ Gestion des cookies</h3>
              <p className="text-gray-300 text-sm mb-4">
                Vous pouvez configurer votre navigateur pour refuser les cookies ou être alerté lors de leur dépôt.
              </p>
              <p className="text-gray-400 text-xs">
                Note : Désactiver les cookies peut affecter certaines fonctionnalités du site.
              </p>
            </div>
          </div>
        </div>

        {/* Contact et réclamations */}
        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-orange-500 flex items-center gap-3">
            <Mail className="w-6 h-6" />
            Contact et réclamations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-700/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-white">📞 Nous contacter</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-orange-500" />
                  <a href="mailto:sebastien.78.fernandes@outlook.fr" className="text-orange-400 hover:text-orange-300 text-sm">
                    sebastien.78.fernandes@outlook.fr
                  </a>
                </div>
                <p className="text-gray-400 text-sm">
                  Réponse sous 72h maximum
                </p>
              </div>
            </div>
            <div className="bg-gray-700/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-white">⚖️ Autorité de contrôle</h3>
              <p className="text-gray-300 text-sm mb-2">
                En cas de litige, vous pouvez saisir la CNIL :
              </p>
              <a 
                href="https://www.cnil.fr/fr/plaintes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 text-sm"
              >
                www.cnil.fr/fr/plaintes
              </a>
            </div>
          </div>
        </div>

        {/* Retour à l'accueil */}
        <div className="text-center mt-12">
          <a 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-purple-500 text-white rounded-xl hover:opacity-90 transition-opacity font-semibold shadow-lg"
          >
            ← Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
};

export default RGPDPage;