<template>
  <div v-if="media" class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Breadcrumb -->
      <nav class="flex mb-8" aria-label="Breadcrumb">
        <ol class="flex items-center space-x-4">
          <li>
            <router-link to="/" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              Accueil
            </router-link>
          </li>
          <li>
            <div class="flex items-center">
              <ChevronRightIcon class="h-5 w-5 text-gray-400 mx-2" />
              <router-link 
                :to="`/${media.category}`" 
                class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 capitalize"
              >
                {{ media.category }}
              </router-link>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <ChevronRightIcon class="h-5 w-5 text-gray-400 mx-2" />
              <span class="text-gray-500 dark:text-gray-400">{{ media.title }}</span>
            </div>
          </li>
        </ol>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Media Display -->
        <div class="lg:col-span-2">
          <div class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <div class="aspect-w-16 aspect-h-12 bg-gray-100 dark:bg-gray-700">
              <img 
                :src="media.url" 
                :alt="media.title"
                class="w-full h-96 lg:h-[600px] object-cover"
              />
            </div>
            
            <!-- Actions Bar -->
            <div class="p-4 border-t border-gray-200 dark:border-gray-700">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <button 
                    @click="toggleLike"
                    class="flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors"
                    :class="isLiked ? 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'"
                  >
                    <HeartIcon class="h-5 w-5" :class="{ 'fill-current': isLiked }" />
                    <span>{{ media.likes }} J'aime</span>
                  </button>
                  
                  <button class="flex items-center space-x-2 px-4 py-2 text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 rounded-lg transition-colors">
                    <ShareIcon class="h-5 w-5" />
                    <span>Partager</span>
                  </button>
                </div>
                
                <div class="text-sm text-gray-500 dark:text-gray-400">
                  {{ media.downloads }} téléchargements
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Media Info -->
        <div class="space-y-6">
          <!-- Title & Description -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {{ media.title }}
            </h1>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              {{ media.description }}
            </p>
            
            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span 
                v-for="tag in media.tags" 
                :key="tag"
                class="px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400 rounded-full"
              >
                #{{ tag }}
              </span>
            </div>

            <!-- Download Button -->
            <button
              @click="downloadMedia"
              class="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              <ArrowDownTrayIcon class="h-5 w-5" />
              <span>Télécharger gratuitement</span>
            </button>
            
            <!-- Download Options -->
            <div class="mt-3 text-center">
              <details class="group">
                <summary class="text-sm text-indigo-600 dark:text-indigo-400 cursor-pointer hover:underline">
                  Options de téléchargement
                </summary>
                <div class="mt-3 space-y-2 text-sm">
                  <div class="flex justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    <span>Petite (640x426)</span>
                    <span class="text-gray-500">0.5 MB</span>
                  </div>
                  <div class="flex justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    <span>Moyenne (1280x853)</span>
                    <span class="text-gray-500">1.2 MB</span>
                  </div>
                  <div class="flex justify-between p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded border border-indigo-200 dark:border-indigo-800">
                    <span class="font-medium">Grande ({{ media.resolution }})</span>
                    <span class="text-indigo-600 dark:text-indigo-400">{{ media.size }}</span>
                  </div>
                </div>
              </details>
            </div>
          </div>

          <!-- Media Details -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Détails
            </h3>
            
            <dl class="space-y-3">
              <div class="flex justify-between">
                <dt class="text-sm text-gray-500 dark:text-gray-400">Créateur</dt>
                <dd class="text-sm font-medium text-gray-900 dark:text-white">{{ media.author }}</dd>
              </div>
              <div class="flex justify-between">
                <dt class="text-sm text-gray-500 dark:text-gray-400">Catégorie</dt>
                <dd class="text-sm font-medium text-gray-900 dark:text-white capitalize">{{ media.category }}</dd>
              </div>
              <div class="flex justify-between">
                <dt class="text-sm text-gray-500 dark:text-gray-400">Format</dt>
                <dd class="text-sm font-medium text-gray-900 dark:text-white">{{ media.format }}</dd>
              </div>
              <div class="flex justify-between">
                <dt class="text-sm text-gray-500 dark:text-gray-400">Résolution</dt>
                <dd class="text-sm font-medium text-gray-900 dark:text-white">{{ media.resolution }}</dd>
              </div>
              <div class="flex justify-between">
                <dt class="text-sm text-gray-500 dark:text-gray-400">Taille</dt>
                <dd class="text-sm font-medium text-gray-900 dark:text-white">{{ media.size }}</dd>
              </div>
              <div class="flex justify-between">
                <dt class="text-sm text-gray-500 dark:text-gray-400">Date</dt>
                <dd class="text-sm font-medium text-gray-900 dark:text-white">{{ formatDate(media.createdAt) }}</dd>
              </div>
            </dl>
          </div>

          <!-- Color Palette -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Palette de couleurs
            </h3>
            <div class="flex space-x-2">
              <div 
                v-for="color in media.colors" 
                :key="color"
                class="w-12 h-12 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm"
                :style="{ backgroundColor: color }"
                :title="color"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Related Media -->
      <div class="mt-16">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          Médias similaires
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MediaCard 
            v-for="relatedMedia in relatedMediaItems" 
            :key="relatedMedia.id" 
            :media="relatedMedia" 
          />
        </div>
      </div>
    </div>
  </div>

  <!-- Media Not Found -->
  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Média introuvable
      </h1>
      <p class="text-gray-600 dark:text-gray-400 mb-8">
        Le média que vous recherchez n'existe pas ou a été supprimé.
      </p>
      <router-link 
        to="/"
        class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
      >
        Retour à l'accueil
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { 
  ArrowDownTrayIcon, 
  HeartIcon, 
  ShareIcon, 
  ChevronRightIcon 
} from '@heroicons/vue/24/outline'
import { useMediaStore } from '../composables/useMediaStore'
import MediaCard from '../components/MediaCard.vue'

interface Props {
  id: string
}

const props = defineProps<Props>()
const router = useRouter()
const { getMediaById, mediaItems, incrementDownloads, toggleLike: storeLike } = useMediaStore()

const media = computed(() => getMediaById(props.id))
const isLiked = ref(false)

const relatedMediaItems = computed(() => {
  if (!media.value) return []
  
  return mediaItems.value
    .filter(item => 
      item.id !== media.value!.id && 
      (item.category === media.value!.category || 
       item.tags.some(tag => media.value!.tags.includes(tag)))
    )
    .slice(0, 4)
})

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const downloadMedia = () => {
  if (media.value) {
    incrementDownloads(media.value.id)
    // Simulate download
    console.log('Téléchargement de:', media.value.title)
  }
}

const toggleLike = () => {
  if (media.value) {
    isLiked.value = !isLiked.value
    storeLike(media.value.id)
  }
}

onMounted(() => {
  if (!media.value) {
    router.push('/')
  }
})
</script>