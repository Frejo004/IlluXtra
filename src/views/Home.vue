<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div class="text-center">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Découvrez l'avenir de la
            <span class="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              création visuelle
            </span>
          </h1>
          <p class="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Des milliers d'images, vidéos et illustrations générées par IA, libres de droits et prêtes à télécharger.
          </p>
          
          <!-- Search Bar -->
          <div class="max-w-2xl mx-auto mb-8">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <MagnifyingGlassIcon class="h-6 w-6 text-gray-400" />
              </div>
              <input
                v-model="searchQuery"
                @keyup.enter="performSearch"
                type="text"
                placeholder="Recherchez des images, vidéos, illustrations..."
                class="w-full pl-12 pr-32 py-4 text-gray-900 bg-white rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 text-lg"
              />
              <button
                @click="performSearch"
                class="absolute right-2 top-2 bottom-2 px-8 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors"
              >
                Rechercher
              </button>
            </div>
          </div>

          <!-- Categories -->
          <div class="flex flex-wrap justify-center gap-4">
            <router-link
              v-for="category in categories"
              :key="category.name"
              :to="category.to"
              class="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white font-medium transition-all duration-300 hover:scale-105"
            >
              {{ category.name }}
            </router-link>
          </div>
        </div>
      </div>
      
      <!-- Decorative elements -->
      <div class="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div class="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2s"></div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">10K+</div>
            <div class="text-gray-600 dark:text-gray-400">Médias disponibles</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">50K+</div>
            <div class="text-gray-600 dark:text-gray-400">Téléchargements</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">1K+</div>
            <div class="text-gray-600 dark:text-gray-400">Utilisateurs actifs</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">100%</div>
            <div class="text-gray-600 dark:text-gray-400">Gratuit</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Content -->
    <section class="py-16 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contenus populaires
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Découvrez les créations les plus appréciées par notre communauté
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MediaCard 
            v-for="media in featuredMedia" 
            :key="media.id" 
            :media="media" 
          />
        </div>

        <div class="text-center mt-12">
          <router-link
            to="/photos"
            class="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            Voir plus de contenus
            <ArrowRightIcon class="ml-2 h-5 w-5" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="py-16 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Pourquoi choisir IlluXtra ?
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Une plateforme pensée pour les créateurs modernes
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center group">
            <div class="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <SparklesIcon class="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Contenu IA Premium</h3>
            <p class="text-gray-600 dark:text-gray-400">Des créations uniques générées par les meilleurs modèles d'IA</p>
          </div>

          <div class="text-center group">
            <div class="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <CloudArrowDownIcon class="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Téléchargement Gratuit</h3>
            <p class="text-gray-600 dark:text-gray-400">Tous nos contenus sont librement téléchargeables</p>
          </div>

          <div class="text-center group">
            <div class="w-16 h-16 bg-cyan-100 dark:bg-cyan-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <MagnifyingGlassIcon class="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Recherche Avancée</h3>
            <p class="text-gray-600 dark:text-gray-400">Trouvez exactement ce que vous cherchez avec nos filtres intelligents</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { MagnifyingGlassIcon, ArrowRightIcon, SparklesIcon, CloudArrowDownIcon } from '@heroicons/vue/24/outline'
import { useMediaStore } from '../composables/useMediaStore'
import MediaCard from '../components/MediaCard.vue'

const router = useRouter()
const { mediaItems, searchQuery, updateFilters } = useMediaStore()

const categories = [
  { name: 'Photos', to: '/photos' },
  { name: 'Vidéos', to: '/videos' },
  { name: 'Illustrations', to: '/illustrations' }
]

const featuredMedia = computed(() => {
  return mediaItems.value
    .sort((a, b) => b.downloads - a.downloads)
    .slice(0, 6)
})

const performSearch = () => {
  updateFilters()
  if (searchQuery.value) {
    router.push('/photos')
  }
}

onMounted(() => {
  updateFilters()
})
</script>

<style scoped>
.animation-delay-2s {
  animation-delay: 2s;
}
</style>