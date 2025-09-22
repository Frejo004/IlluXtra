<template>
  <div class="media-card">
    <div class="media-image">
      <img :src="media.thumbnail" :alt="media.title" />
      <div class="media-overlay">
        <button @click="downloadMedia" class="action-btn">⬇</button>
        <button @click="toggleLike" class="action-btn">♥</button>
      </div>
      <span class="category-badge">{{ formatCategory(media.category) }}</span>
      <span class="format-badge">{{ media.format }}</span>
    </div>
    <div class="media-content">
      <h3>{{ media.title }}</h3>
      <p>{{ media.description }}</p>
      <div class="media-stats">
        <span>⬇ {{ formatNumber(media.downloads) }}</span>
        <span>♥ {{ formatNumber(media.likes) }}</span>
        <span>{{ media.resolution }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MediaItem } from '../composables/useMediaStore'

interface Props {
  media: MediaItem
}

defineProps<Props>()

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
  console.log('Téléchargement')
}

const toggleLike = () => {
  console.log('Like')
}
</script>

<style scoped>
.media-card {
  background: white;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: all 0.3s;
}

.media-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.dark .media-card {
  background: var(--color-gray-800);
}

.media-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.media-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.media-card:hover .media-image img {
  transform: scale(1.05);
}

.media-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  opacity: 0;
  transition: opacity 0.3s;
}

.media-card:hover .media-overlay {
  opacity: 1;
}

.action-btn {
  padding: 0.5rem;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
}

.category-badge {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  padding: 0.25rem 0.5rem;
  background: rgba(255,255,255,0.9);
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.format-badge {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.25rem 0.5rem;
  background: #6366f1;
  color: white;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.media-content {
  padding: 1rem;
}

.media-content h3 {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-gray-900);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.dark .media-content h3 {
  color: white;
}

.media-content p {
  font-size: 0.875rem;
  color: var(--color-gray-600);
  margin-bottom: 0.75rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.dark .media-content p {
  color: var(--color-gray-400);
}

.media-stats {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: var(--color-gray-500);
}

.dark .media-stats {
  color: var(--color-gray-400);
}
</style>