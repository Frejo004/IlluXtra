<template>
  <div class="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <!-- Image -->
    <div class="aspect-w-4 aspect-h-3 bg-gray-200 dark:bg-gray-700 overflow-hidden">
      <img 
        :src="media.thumbnail" 
        :alt="media.title"
        class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
      
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
        <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
          <button 
            @click="downloadMedia"
            class="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ArrowDownTrayIcon class="h-5 w-5 text-gray-700" />
          </button>
          <button 
            @click="toggleLike"
            class="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            :class="{ 'text-red-500': isLiked }"
          >
            <HeartIcon class="h-5 w-5" :class="{ 'fill-current': isLiked }" />
          </button>
          <router-link 
            :to="`/media/${media.id}`"
            class="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            <EyeIcon class="h-5 w-5 text-gray-700" />
          </router-link>
        </div>
      </div>

      <!-- Category Badge -->
      <div class="absolute top-2 left-2">
        <span class="px-2 py-1 text-xs font-medium bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-white rounded-md backdrop-blur-sm">
          {{ formatCategory(media.category) }}
        </span>
      </div>

      <!-- Format Badge -->
      <div class="absolute top-2 right-2">
        <span class="px-2 py-1 text-xs font-medium bg-indigo-500 text-white rounded-md">
          {{ media.format }}
        </span>
      </div>
    </div>

    <!-- Content -->
    <div class="p-4">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-1 line-clamp-2">
        {{ media.title }}
      </h3>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
        {{ media.description }}
      </p>
      
      <!-- Tags -->
      <div class="flex flex-wrap gap-1 mb-3">
        <span 
          v-for="tag in media.tags.slice(0, 3)" 
          :key="tag"
          class="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
        >
          #{{ tag }}
        </span>
        <span v-if="media.tags.length > 3" class="px-2 py-1 text-xs text-gray-500">
          +{{ media.tags.length - 3 }}
        </span>
      </div>

      <!-- Stats -->
      <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <div class="flex items-center space-x-4">
          <span class="flex items-center space-x-1">
            <ArrowDownTrayIcon class="h-4 w-4" />
            <span>{{ formatNumber(media.downloads) }}</span>
          </span>
          <span class="flex items-center space-x-1">
            <HeartIcon class="h-4 w-4" />
            <span>{{ formatNumber(media.likes) }}</span>
          </span>
        </div>
        <span class="text-xs">{{ media.resolution }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ArrowDownTrayIcon, HeartIcon, EyeIcon } from '@heroicons/vue/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/vue/24/solid'
import type { MediaItem } from '../composables/useMediaStore'
import { useMediaStore } from '../composables/useMediaStore'

interface Props {
  media: MediaItem
}

const props = defineProps<Props>()
const { incrementDownloads, toggleLike: storeLike } = useMediaStore()

const isLiked = ref(false)

const formatCategory = (category: string) => {
  const categories = {
    photos: 'Photo',
    videos: 'Vidéo',
    illustrations: 'Illustration'
  }
  return categories[category as keyof typeof categories] || category
}

const formatNumber = (num: number) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k'
  }
  return num.toString()
}

const downloadMedia = () => {
  incrementDownloads(props.media.id)
  // Ici on pourrait implémenter le téléchargement réel
  console.log('Téléchargement:', props.media.title)
}

const toggleLike = () => {
  isLiked.value = !isLiked.value
  storeLike(props.media.id)
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>