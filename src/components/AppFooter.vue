<template>
  <footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">IX</span>
            </div>
            <span class="text-xl font-bold">IlluXtra</span>
          </div>
          <p class="text-gray-400 mb-4 max-w-md">
            La plateforme de référence pour les médias générés par IA. Découvrez des milliers d'images, vidéos et illustrations de qualité professionnelle.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <span class="sr-only">Facebook</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <span class="sr-only">Twitter</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <span class="sr-only">Instagram</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C23.975 5.367 18.608.029 12.017.029zM15.629 18.056H8.353c-1.69 0-3.056-1.367-3.056-3.056V8.995c0-1.69 1.367-3.056 3.056-3.056h7.276c1.69 0 3.056 1.367 3.056 3.056V15c0 1.689-1.367 3.056-3.056 3.056z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Links -->
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider mb-4">Navigation</h3>
          <ul class="space-y-2">
            <li><router-link to="/" class="text-gray-400 hover:text-white transition-colors">Accueil</router-link></li>
            <li><router-link to="/photos" class="text-gray-400 hover:text-white transition-colors">Photos</router-link></li>
            <li><router-link to="/videos" class="text-gray-400 hover:text-white transition-colors">Vidéos</router-link></li>
            <li><router-link to="/illustrations" class="text-gray-400 hover:text-white transition-colors">Illustrations</router-link></li>
            <li><router-link to="/blog" class="text-gray-400 hover:text-white transition-colors">Blog</router-link></li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider mb-4">Support</h3>
          <ul class="space-y-2">
            <li><router-link to="/contact" class="text-gray-400 hover:text-white transition-colors">Contact</router-link></li>
            <li><router-link to="/legal" class="text-gray-400 hover:text-white transition-colors">Mentions légales</router-link></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Politique de confidentialité</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
          </ul>
        </div>
      </div>
      
      <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; 2024 IlluXtra. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>