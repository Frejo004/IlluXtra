<template>
  <div class="admin-layout">
    <AdminSidebar />
    
    <main class="admin-main">
      <div class="admin-header">
        <h1>Paramètres</h1>
        <button class="btn-primary" @click="saveSettings">
          Sauvegarder
        </button>
      </div>
      
      <div class="admin-content">
        <div class="settings-grid">
          <div class="settings-card">
            <h3>Paramètres généraux</h3>
            <form class="settings-form">
              <div class="form-group">
                <label>Nom du site</label>
                <input v-model="settings.siteName" type="text" />
              </div>
              
              <div class="form-group">
                <label>Description</label>
                <textarea v-model="settings.siteDescription" rows="3"></textarea>
              </div>
              
              <div class="form-group">
                <label>Email de contact</label>
                <input v-model="settings.contactEmail" type="email" />
              </div>
              
              <div class="form-group">
                <label>Mode maintenance</label>
                <div class="toggle-switch">
                  <input 
                    v-model="settings.maintenanceMode" 
                    type="checkbox" 
                    id="maintenance"
                  />
                  <label for="maintenance" class="toggle-label"></label>
                </div>
              </div>
            </form>
          </div>
          
          <div class="settings-card">
            <h3>Gestion des médias</h3>
            <form class="settings-form">
              <div class="form-group">
                <label>Taille max des fichiers (MB)</label>
                <input v-model="settings.maxFileSize" type="number" min="1" max="100" />
              </div>
              
              <div class="form-group">
                <label>Formats autorisés</label>
                <div class="checkbox-group">
                  <label v-for="format in availableFormats" :key="format" class="checkbox-item">
                    <input 
                      v-model="settings.allowedFormats" 
                      :value="format" 
                      type="checkbox"
                    />
                    {{ format.toUpperCase() }}
                  </label>
                </div>
              </div>
              
              <div class="form-group">
                <label>Modération automatique</label>
                <div class="toggle-switch">
                  <input 
                    v-model="settings.autoModeration" 
                    type="checkbox" 
                    id="moderation"
                  />
                  <label for="moderation" class="toggle-label"></label>
                </div>
              </div>
            </form>
          </div>
          
          <div class="settings-card">
            <h3>Catégories</h3>
            <div class="categories-list">
              <div v-for="category in categories" :key="category.id" class="category-item">
                <span class="category-name">{{ category.name }}</span>
                <div class="category-actions">
                  <button class="action-btn edit" @click="editCategory(category)">
                    <Icon icon="system-uicons:write" />
                  </button>
                  <button class="action-btn delete" @click="deleteCategory(category.id)">
                    <Icon icon="system-uicons:trash" />
                  </button>
                </div>
              </div>
              
              <div class="add-category">
                <input 
                  v-model="newCategoryName" 
                  type="text" 
                  placeholder="Nouvelle catégorie"
                  @keyup.enter="addCategory"
                />
                <button class="btn-secondary" @click="addCategory">Ajouter</button>
              </div>
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
import { ref } from 'vue'
import AdminSidebar from '../../components/admin/AdminSidebar.vue'
import { Icon } from '@iconify/vue'
import ConfirmModal from '../../components/admin/ConfirmModal.vue'
import { useConfirm } from '../../composables/useConfirm'

const settings = ref({
  siteName: 'IlluXtra',
  siteDescription: 'Plateforme de médias IA créatifs',
  contactEmail: 'contact@illuxtra.com',
  maintenanceMode: false,
  maxFileSize: 10,
  allowedFormats: ['jpg', 'png', 'gif', 'mp4'],
  autoModeration: true
})

const availableFormats = ['jpg', 'png', 'gif', 'svg', 'mp4', 'webm', 'pdf']

const categories = ref([
  { id: '1', name: 'Photos' },
  { id: '2', name: 'Vidéos' },
  { id: '3', name: 'Illustrations' },
  { id: '4', name: 'Animations' }
])

const newCategoryName = ref('')

const saveSettings = () => {
  console.log('Sauvegarde des paramètres:', settings.value)
  alert('Paramètres sauvegardés avec succès !')
}

const addCategory = () => {
  if (newCategoryName.value.trim()) {
    categories.value.push({
      id: Date.now().toString(),
      name: newCategoryName.value.trim()
    })
    newCategoryName.value = ''
  }
}

const editCategory = (category: any) => {
  const newName = prompt('Nouveau nom:', category.name)
  if (newName && newName.trim()) {
    category.name = newName.trim()
  }
}

const { isOpen, confirmOptions, confirm, handleConfirm, handleCancel } = useConfirm()

const deleteCategory = async (id: string) => {
  const category = categories.value.find(cat => cat.id === id)
  const confirmed = await confirm({
    title: 'Supprimer la catégorie',
    message: `Êtes-vous sûr de vouloir supprimer la catégorie "${category?.name}" ?`,
    type: 'danger',
    confirmText: 'Supprimer',
    cancelText: 'Annuler'
  })
  
  if (confirmed) {
    categories.value = categories.value.filter(cat => cat.id !== id)
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

.settings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.settings-card {
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.dark .settings-card {
  background: #1f2937;
}

.settings-card h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
}

.dark .settings-card h3 {
  color: white;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
}

.dark .form-group label {
  color: #d1d5db;
}

.form-group input, .form-group textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background: white;
}

.dark .form-group input, .dark .form-group textarea {
  background: #374151;
  border-color: #4b5563;
  color: white;
}

.toggle-switch {
  position: relative;
  display: inline-block;
}

.toggle-switch input[type="checkbox"] {
  display: none;
}

.toggle-label {
  display: block;
  width: 3rem;
  height: 1.5rem;
  background: #d1d5db;
  border-radius: 0.75rem;
  cursor: pointer;
  position: relative;
  transition: background 0.3s;
}

.toggle-label::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 1.25rem;
  height: 1.25rem;
  background: white;
  border-radius: 50%;
  transition: transform 0.3s;
}

.toggle-switch input:checked + .toggle-label {
  background: #3b82f6;
}

.toggle-switch input:checked + .toggle-label::after {
  transform: translateX(1.5rem);
}

.checkbox-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.checkbox-item {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
}

.category-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f3f4f6;
}

.dark .category-item {
  border-bottom-color: #374151;
}

.category-name {
  font-weight: 500;
  color: #111827;
}

.dark .category-name {
  color: white;
}

.category-actions {
  display: flex;
  gap: 0.5rem;
}

.action-btn {
  padding: 0.25rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 0.875rem;
}

.action-btn.edit {
  background: #fef3c7;
}

.action-btn.delete {
  background: #fee2e2;
}

.add-category {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.add-category input {
  flex: 1;
}

.btn-secondary {
  padding: 0.5rem 1rem;
  background: white;
  color: #374151;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  cursor: pointer;
}

.dark .btn-secondary {
  background: #374151;
  color: white;
  border-color: #4b5563;
}

@media (max-width: 768px) {
  .admin-main {
    margin-left: 0;
    padding: 1rem;
  }
  
  .settings-grid {
    grid-template-columns: 1fr;
  }
}
</style>