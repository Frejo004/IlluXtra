<template>
  <div class="admin-layout">
    <AdminSidebar />
    
    <main class="admin-main">
      <div class="admin-header">
        <h1>Gestion des Médias</h1>
        <button class="btn-primary" @click="showUploadModal = true">
          + Ajouter un média
        </button>
      </div>
      
      <div class="admin-content">
        <div class="filters-bar">
          <select v-model="selectedCategory" @change="filterMedia" class="filter-select">
            <option value="all">Toutes les catégories</option>
            <option value="photos">Photos</option>
            <option value="videos">Vidéos</option>
            <option value="illustrations">Illustrations</option>
          </select>
          
          <input 
            v-model="searchQuery" 
            @input="filterMedia"
            type="text" 
            placeholder="Rechercher..." 
            class="search-input"
          />
        </div>
        
        <div class="media-table">
          <div class="table-header">
            <div class="col-image">Image</div>
            <div class="col-title">Titre</div>
            <div class="col-category">Catégorie</div>
            <div class="col-stats">Stats</div>
            <div class="col-actions">Actions</div>
          </div>
          
          <div v-for="media in filteredMedia" :key="media.id" class="table-row">
            <div class="col-image">
              <img :src="media.thumbnail" :alt="media.title" />
            </div>
            <div class="col-title">
              <h4>{{ media.title }}</h4>
              <p>{{ media.description }}</p>
            </div>
            <div class="col-category">
              <span class="category-badge">{{ formatCategory(media.category) }}</span>
            </div>
            <div class="col-stats">
              <div class="stat-item">⬇ {{ media.downloads }}</div>
              <div class="stat-item">❤️ {{ media.likes }}</div>
            </div>
            <div class="col-actions">
              <button class="action-btn edit" @click="editMedia(media)">✏️</button>
              <button class="action-btn delete" @click="deleteMedia(media)">🗑️</button>
            </div>
          </div>
        </div>
      </div>
    </main>
    
    <ConfirmModal 
      :isOpen="isOpen"
      :title="confirmOptions.title"
      :message="confirmOptions.message"
      :type="confirmOptions.type"
      :confirmText="confirmOptions.confirmText"
      :cancelText="confirmOptions.cancelText"
      @confirm="handleConfirm"
      @cancel="handleCancel"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import AdminSidebar from '../../components/admin/AdminSidebar.vue'
import ConfirmModal from '../../components/admin/ConfirmModal.vue'
import { useMediaStore, type MediaItem } from '../../composables/useMediaStore'
import { useConfirm } from '../../composables/useConfirm'

const { mediaItems } = useMediaStore()

const selectedCategory = ref('all')
const searchQuery = ref('')
const showUploadModal = ref(false)

const filteredMedia = computed(() => {
  let filtered = mediaItems.value

  if (selectedCategory.value !== 'all') {
    filtered = filtered.filter(item => item.category === selectedCategory.value)
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    )
  }

  return filtered
})

const formatCategory = (category: string) => {
  const categories = {
    photos: 'Photo',
    videos: 'Vidéo',
    illustrations: 'Illustration'
  }
  return categories[category as keyof typeof categories] || category
}

const filterMedia = () => {
  // Fonction appelée lors du changement de filtres
}

const editMedia = (media: MediaItem) => {
  console.log('Éditer:', media.title)
}

const { isOpen, confirmOptions, confirm, handleConfirm, handleCancel } = useConfirm()

const deleteMedia = async (media: MediaItem) => {
  const confirmed = await confirm({
    title: 'Supprimer le média',
    message: `Êtes-vous sûr de vouloir supprimer "${media.title}" ? Cette action est irréversible.`,
    type: 'danger',
    confirmText: 'Supprimer',
    cancelText: 'Annuler'
  })
  
  if (confirmed) {
    console.log('Média supprimé:', media.id)
    // Ici on supprimerait réellement le média
  }
}
</script>

<style scoped>
.admin-layout {
  display: flex;
  min-height: 100vh;
  background: #f9fafb;
}

.dark .admin-layout {
  background: #111827;
}

.admin-main {
  flex: 1;
  margin-left: 250px;
  padding: 2rem;
}

.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.admin-header h1 {
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
}

.dark .admin-header h1 {
  color: white;
}

.btn-primary {
  padding: 0.5rem 1rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
}

.btn-primary:hover {
  background: #2563eb;
}

.filters-bar {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.filter-select, .search-input {
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background: white;
}

.dark .filter-select, .dark .search-input {
  background: #374151;
  border-color: #4b5563;
  color: white;
}

.search-input {
  flex: 1;
  max-width: 300px;
}

.media-table {
  background: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.dark .media-table {
  background: #1f2937;
}

.table-header, .table-row {
  display: grid;
  grid-template-columns: 80px 1fr 120px 120px 100px;
  gap: 1rem;
  padding: 1rem;
  align-items: center;
}

.table-header {
  background: #f9fafb;
  font-weight: 600;
  color: #374151;
  border-bottom: 1px solid #e5e7eb;
}

.dark .table-header {
  background: #374151;
  color: #d1d5db;
  border-bottom-color: #4b5563;
}

.table-row {
  border-bottom: 1px solid #f3f4f6;
}

.dark .table-row {
  border-bottom-color: #374151;
}

.table-row:hover {
  background: #f9fafb;
}

.dark .table-row:hover {
  background: #374151;
}

.col-image img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 0.375rem;
}

.col-title h4 {
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.25rem;
}

.dark .col-title h4 {
  color: white;
}

.col-title p {
  font-size: 0.875rem;
  color: #6b7280;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.category-badge {
  padding: 0.25rem 0.5rem;
  background: #dbeafe;
  color: #1e40af;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.dark .category-badge {
  background: #1e3a8a;
  color: #93c5fd;
}

.stat-item {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.25rem;
}

.col-actions {
  display: flex;
  gap: 0.5rem;
}

.action-btn {
  padding: 0.25rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
}

.action-btn.edit {
  background: #fef3c7;
}

.action-btn.edit:hover {
  background: #fde68a;
}

.action-btn.delete {
  background: #fee2e2;
}

.action-btn.delete:hover {
  background: #fecaca;
}

@media (max-width: 768px) {
  .admin-main {
    margin-left: 0;
    padding: 1rem;
  }
  
  .table-header, .table-row {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
  
  .filters-bar {
    flex-direction: column;
  }
}
</style>