<template>
  <div class="gallery-page">
    <div class="gallery-header">
      <h1>{{ mediaType === 'all' ? 'Tous les médias' : mediaType }}</h1>
      <p>Découvrez notre collection</p>
    </div>

    <div class="gallery-container">
      <div class="gallery-sidebar">
        <FilterSidebar />
      </div>

      <div class="gallery-content">
        <div class="media-grid">
          <MediaCard 
            v-for="media in filteredItems" 
            :key="media.id" 
            :media="media" 
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useMediaStore } from '../composables/useMediaStore'
import MediaCard from '../components/MediaCard.vue'
import FilterSidebar from '../components/FilterSidebar.vue'

interface Props {
  mediaType?: 'photos' | 'videos' | 'illustrations' | 'all'
}

const props = withDefaults(defineProps<Props>(), {
  mediaType: 'all'
})

const { filteredItems, selectedCategory, updateFilters } = useMediaStore()

watch(() => props.mediaType, (newType) => {
  selectedCategory.value = newType === 'all' ? 'all' : newType
  updateFilters()
}, { immediate: true })
</script>

<style scoped>
.gallery-page {
  min-height: 100vh;
  background: var(--color-gray-50);
}

.dark .gallery-page {
  background: var(--color-gray-900);
}

.gallery-header {
  background: white;
  padding: 2rem;
  text-align: center;
}

.dark .gallery-header {
  background: var(--color-gray-800);
}

.gallery-header h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: var(--color-gray-900);
  text-transform: capitalize;
}

.dark .gallery-header h1 {
  color: white;
}

.gallery-header p {
  color: var(--color-gray-600);
}

.dark .gallery-header p {
  color: var(--color-gray-400);
}

.gallery-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
}

@media (max-width: 1024px) {
  .gallery-container {
    grid-template-columns: 1fr;
  }
}

.media-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}
</style>