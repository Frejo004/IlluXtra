<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 class="text-3xl font-bold text-gray-900 dark:text-white capitalize">
              {{ mediaType === 'all' ? 'Tous les médias' : mediaType }}
            </h1>
            <p class="mt-2 text-gray-600 dark:text-gray-400">
              Découvrez notre collection de {{ mediaType === 'all' ? 'médias' : mediaType }} générés par IA
            </p>
          </div>
          
          <!-- Mobile Search -->
          <div class="mt-4 md:mt-0 md:w-80">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" />
              </div>
              <input
                v-model="searchQuery"
                @input="updateFilters"
                type="text"
                placeholder="Rechercher..."
                class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Sidebar Filters -->
        <div class="lg:w-80">
          <FilterSidebar />
        </div>

        <!-- Main Content -->
        <div class="flex-1">
          <!-- Results Info -->
          <div class="flex items-center justify-between mb-6">
            <p class="text-sm text-gray-600 dark:text-gray-400">
              {{ filteredItems.length }} résultat{{ filteredItems.length > 1 ? 's' : '' }} trouvé{{ filteredItems.length > 1 ? 's' : '' }}
            </p>
            
            <!-- View Toggle -->
            <div class="flex items-center space-x-2">
              <button
                @click="viewMode = 'grid'"
                :class="viewMode === 'grid' ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'"
                class="p-2 rounded-md transition-colors"
              >
                <Squares2X2Icon class="h-5 w-5" />
              </button>
              <button
                @click="viewMode = 'list'"
                :class="viewMode === 'list' ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'"
                class="p-2 rounded-md transition-colors"
              >
                <ListBulletIcon class="h-5 w-5" />
              </button>
            </div>
          </div>

          <!-- Loading State -->
          <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              v-for="i in 6" 
              :key="i"
              class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm animate-pulse"
            >
              <div class="h-48 bg-gray-200 dark:bg-gray-700"></div>
              <div class="p-4">
                <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded mb-3 w-3/4"></div>
                <div class="flex space-x-2">
                  <div class="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-16"></div>
                  <div class="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-20"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Media Grid -->
          <div 
            v-else-if="filteredItems.length > 0"
            :class="viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'"
          >
            <MediaCard 
              v-for="media in paginatedItems" 
              :key="media.id" 
              :media="media"
              :class="viewMode === 'list' ? 'flex-row' : ''"
            />
          </div>

          <!-- Empty State -->
          <div v-else class="text-center py-12">
            <div class="w-24 h-24 mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
              <MagnifyingGlassIcon class="h-12 w-12 text-gray-400" />
            </div>
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Aucun résultat trouvé
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Essayez de modifier vos critères de recherche
            </p>
            <button
              @click="resetFilters"
              class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>

          <!-- Pagination -->
          <div v-if="totalPages > 1" class="flex justify-center mt-8">
            <nav class="flex items-center space-x-2">
              <button
                @click="currentPage = Math.max(1, currentPage - 1)"
                :disabled="currentPage === 1"
                class="px-3 py-2 text-sm font-medium text-gray-500 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Précédent
              </button>
              
              <span 
                v-for="page in visiblePages" 
                :key="page"
                @click="currentPage = page"
                :class="page === currentPage ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700'"
                class="px-3 py-2 text-sm font-medium border border-gray-300 dark:border-gray-600 rounded-md cursor-pointer"
              >
                {{ page }}
              </span>
              
              <button
                @click="currentPage = Math.min(totalPages, currentPage + 1)"
                :disabled="currentPage === totalPages"
                class="px-3 py-2 text-sm font-medium text-gray-500 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Suivant
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { MagnifyingGlassIcon, Squares2X2Icon, ListBulletIcon } from '@heroicons/vue/24/outline'
import { useMediaStore } from '../composables/useMediaStore'
import MediaCard from '../components/MediaCard.vue'
import FilterSidebar from '../components/FilterSidebar.vue'

interface Props {
  mediaType?: 'photos' | 'videos' | 'illustrations' | 'all'
}

const props = withDefaults(defineProps<Props>(), {
  mediaType: 'all'
})

const { 
  filteredItems, 
  searchQuery, 
  selectedCategory, 
  selectedFilters, 
  updateFilters 
} = useMediaStore()

const loading = ref(false)
const viewMode = ref<'grid' | 'list'>('grid')
const currentPage = ref(1)
const itemsPerPage = ref(12)

// Set category based on route
watch(() => props.mediaType, (newType) => {
  selectedCategory.value = newType === 'all' ? 'all' : newType
  currentPage.value = 1
  updateFilters()
}, { immediate: true })

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredItems.value.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(filteredItems.value.length / itemsPerPage.value)
})

const visiblePages = computed(() => {
  const pages = []
  const maxVisible = 5
  let start = Math.max(1, currentPage.value - Math.floor(maxVisible / 2))
  let end = Math.min(totalPages.value, start + maxVisible - 1)
  
  if (end - start + 1 < maxVisible) {
    start = Math.max(1, end - maxVisible + 1)
  }
  
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  
  return pages
})

const resetFilters = () => {
  selectedCategory.value = props.mediaType === 'all' ? 'all' : props.mediaType
  selectedFilters.colors = []
  selectedFilters.format = 'all'
  selectedFilters.resolution = 'all'
  selectedFilters.sortBy = 'recent'
  searchQuery.value = ''
  currentPage.value = 1
  updateFilters()
}

// Simulate loading
onMounted(() => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 500)
})

// Reset page when filters change
watch(filteredItems, () => {
  currentPage.value = 1
})
</script>