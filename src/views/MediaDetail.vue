<template>
  <div class="media-detail-page">
    <div v-if="media" class="media-detail">
      <div class="media-image">
        <img :src="media.url" :alt="media.title" />
      </div>
      
      <div class="media-info">
        <h1>{{ media.title }}</h1>
        <p>{{ media.description }}</p>
        
        <div class="media-stats">
          <span>⬇ {{ media.downloads }}</span>
          <span>♥ {{ media.likes }}</span>
          <span>{{ media.resolution }}</span>
        </div>
        
        <div class="media-actions">
          <button class="download-btn">Télécharger</button>
          <button class="like-btn">♥ J'aime</button>
        </div>
      </div>
    </div>
    
    <div v-else class="not-found">
      <h1>Média non trouvé</h1>
      <router-link to="/">Retour à l'accueil</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMediaStore } from '../composables/useMediaStore'

interface Props {
  id: string
}

const props = defineProps<Props>()
const { getMediaById } = useMediaStore()

const media = computed(() => getMediaById(props.id))
</script>

<style scoped>
.media-detail-page {
  min-height: 100vh;
  background: var(--color-gray-50);
  padding: 2rem 1rem;
}

.dark .media-detail-page {
  background: var(--color-gray-900);
}

.media-detail {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .media-detail {
    grid-template-columns: 2fr 1fr;
  }
}

.media-image {
  background: white;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.dark .media-image {
  background: var(--color-gray-800);
}

.media-image img {
  width: 100%;
  height: auto;
  display: block;
}

.media-info {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  box-shadow: var(--shadow);
  height: fit-content;
}

.dark .media-info {
  background: var(--color-gray-800);
}

.media-info h1 {
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--color-gray-900);
}

.dark .media-info h1 {
  color: white;
}

.media-info p {
  color: var(--color-gray-600);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.dark .media-info p {
  color: var(--color-gray-400);
}

.media-stats {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  font-size: 0.875rem;
  color: var(--color-gray-500);
}

.dark .media-stats {
  color: var(--color-gray-400);
}

.media-actions {
  display: flex;
  gap: 1rem;
}

.download-btn, .like-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.download-btn {
  background: #6366f1;
  color: white;
  flex: 1;
}

.download-btn:hover {
  background: #4f46e5;
}

.like-btn {
  background: var(--color-gray-200);
  color: var(--color-gray-700);
}

.dark .like-btn {
  background: var(--color-gray-700);
  color: var(--color-gray-300);
}

.like-btn:hover {
  background: #ef4444;
  color: white;
}

.not-found {
  text-align: center;
  padding: 4rem 1rem;
}

.not-found h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--color-gray-900);
}

.dark .not-found h1 {
  color: white;
}

.not-found a {
  color: #6366f1;
  text-decoration: none;
  font-weight: 500;
}

.not-found a:hover {
  text-decoration: underline;
}
</style>