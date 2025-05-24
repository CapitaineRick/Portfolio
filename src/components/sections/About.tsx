import React from 'react';

function About() {
  return (
    <>
      {/* Previous code unchanged */}

      {/* BTS SNIR (Non terminé) */}
      <div className="relative pl-16 pb-8">
        <div className="absolute left-6 top-3 w-4 h-4 rounded-full bg-red-500 border-4 border-white dark:border-gray-800"></div>
        <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <img 
                src="https://www.lyc-vaucanson-versailles.ac-versailles.fr/sites/lyc-vaucanson-versailles/local/cache-vignettes/L144xH144/siteon0-e0d79.png"
                alt="Lycée Vaucanson"
                className="w-24 h-auto"
              />
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">BTS SNIR</h4>
                <p className="text-gray-700 dark:text-gray-400">Lycée Vaucanson, Versailles</p>
              </div>
            </div>
            <span className="px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-sm">
              2022-2023
            </span>
          </div>
          <p className="text-sm text-gray-800 dark:text-gray-400">
            Systèmes Numériques option Informatique et Réseaux
          </p>
          <div className="mt-4 inline-flex px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-sm">
            Non validé
          </div>
        </div>
      </div>

      {/* BTS SIO */}
      <div className="relative pl-16 pb-8">
        {/* BTS SIO content unchanged */}
      </div>

      {/* Bac STI2D */}
      <div className="relative pl-16 pb-8">
        {/* Bac STI2D content unchanged */}
      </div>
    </>
  );
}

export default About;