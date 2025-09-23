<template>
  <div v-if="isOpen" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <h2>Ajouter un nouveau média</h2>
        <button class="close-btn" @click="closeModal">✕</button>
      </div>
      
      <form @submit.prevent="uploadMedia" class="upload-form">
        <div class="upload-zone" 
             :class="{ 'drag-over': isDragOver }"
             @drop="handleDrop"
             @dragover.prevent="isDragOver = true"
             @dragleave="isDragOver = false">
          <input 
            ref="fileInput"
            type="file" 
            multiple 
            accept="image/*,video/*"
            @change="handleFileSelect"
            class="file-input"
          />
          
          <div v-if="!selectedFiles.length" class="upload-placeholder">
            <div class="upload-icon">📁</div>
            <p>Glissez vos fichiers ici ou <button type="button" @click="$refs.fileInput.click()" class="browse-btn">parcourir</button></p>
            <span class="upload-hint">JPG, PNG, GIF, MP4 jusqu'à 10MB</span>
          </div>
          
          <div v-else class="file-preview">
            <div v-for="(file, index) in selectedFiles" :key="index" class="preview-item">
              <img v-if="file.type.startsWith('image/')" :src="file.preview" :alt="file.name" />
              <div v-else class="video-preview">🎥</div>
              <div class="file-info">
                <span class="file-name">{{ file.name }}</span>
                <button type="button" @click="removeFile(index)" class="remove-btn">✕</button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="form-fields">
          <div class="form-group">
            <label>Titre</label>
            <input v-model="formData.title" type="text" required />
          </div>
          
          <div class="form-group">
            <label>Description</label>
            <textarea v-model="formData.description" rows="3" required></textarea>
          </div>
          
          <div class="form-group">
            <label>Catégorie</label>
            <select v-model="formData.category" required>
              <option value="">Sélectionner une catégorie</option>
              <option value="photos">Photos</option>
              <option value="videos">Vidéos</option>
              <option value="illustrations">Illustrations</option>
            </select>
          </div>
          
          <div class="form-group">
            <label>Tags (séparés par des virgules)</label>
            <input v-model="formData.tags" type="text" placeholder="portrait, ai, moderne" />
          </div>
          
          <div class="form-group">
            <label>Auteur</label>
            <input v-model="formData.author" type="text" required />
          </div>
        </div>
        
        <div class="modal-actions">
          <button type="button" @click="closeModal" class="btn-cancel">Annuler</button>
          <button type="submit" :disabled="!selectedFiles.length || isUploading" class="btn-upload">
            {{ isUploading ? 'Upload...' : 'Uploader' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

interface Props {
  isOpen: boolean
}

interface Emits {
  (e: 'close'): void
  (e: 'upload', data: any): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()

const fileInput = ref<HTMLInputElement>()
const selectedFiles = ref<any[]>([])
const isDragOver = ref(false)
const isUploading = ref(false)

const formData = reactive({
  title: '',
  description: '',
  category: '',
  tags: '',
  author: ''
})

const closeModal = () => {
  emit('close')
  resetForm()
}

const resetForm = () => {
  selectedFiles.value = []
  Object.assign(formData, {
    title: '',
    description: '',
    category: '',
    tags: '',
    author: ''
  })
}

const handleFileSelect = (event: Event) => {
  const files = (event.target as HTMLInputElement).files
  if (files) {
    processFiles(Array.from(files))
  }
}

const handleDrop = (event: DragEvent) => {
  event.preventDefault()
  isDragOver.value = false
  
  const files = event.dataTransfer?.files
  if (files) {
    processFiles(Array.from(files))
  }
}

const processFiles = (files: File[]) => {
  files.forEach(file => {
    if (file.size > 10 * 1024 * 1024) {
      alert(`${file.name} est trop volumineux (max 10MB)`)
      return
    }
    
    const fileObj = {
      file,
      name: file.name,
      type: file.type,
      size: file.size,
      preview: ''
    }
    
    if (file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (e) => {
        fileObj.preview = e.target?.result as string
      }
      reader.readAsDataURL(file)
    }
    
    selectedFiles.value.push(fileObj)
  })
}

const removeFile = (index: number) => {
  selectedFiles.value.splice(index, 1)
}

const uploadMedia = async () => {
  isUploading.value = true
  
  try {
    // Simulation d'upload
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const uploadData = {
      files: selectedFiles.value,
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean)
    }
    
    emit('upload', uploadData)
    closeModal()
  } catch (error) {
    console.error('Erreur upload:', error)
  } finally {
    isUploading.value = false
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 0.5rem;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
}

.dark .modal-content {
  background: #1f2937;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.dark .modal-header {
  border-bottom-color: #374151;
}

.modal-header h2 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
}

.dark .modal-header h2 {
  color: white;
}

.close-btn {
  padding: 0.5rem;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.25rem;
  color: #6b7280;
}

.upload-form {
  padding: 1.5rem;
}

.upload-zone {
  border: 2px dashed #d1d5db;
  border-radius: 0.5rem;
  padding: 2rem;
  text-align: center;
  margin-bottom: 1.5rem;
  transition: all 0.3s;
}

.upload-zone.drag-over {
  border-color: #3b82f6;
  background: #eff6ff;
}

.dark .upload-zone.drag-over {
  background: #1e3a8a;
}

.file-input {
  display: none;
}

.upload-placeholder {
  color: #6b7280;
}

.upload-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.browse-btn {
  color: #3b82f6;
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: underline;
}

.upload-hint {
  display: block;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

.file-preview {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
}

.preview-item {
  position: relative;
}

.preview-item img {
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 0.375rem;
}

.video-preview {
  width: 100%;
  height: 80px;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  border-radius: 0.375rem;
}

.file-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
}

.file-name {
  font-size: 0.75rem;
  color: #6b7280;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.remove-btn {
  padding: 0.25rem;
  border: none;
  background: #fee2e2;
  color: #991b1b;
  border-radius: 50%;
  cursor: pointer;
  font-size: 0.75rem;
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

.form-group input, .form-group textarea, .form-group select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background: white;
}

.dark .form-group input, .dark .form-group textarea, .dark .form-group select {
  background: #374151;
  border-color: #4b5563;
  color: white;
}

.modal-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1.5rem;
}

.btn-cancel, .btn-upload {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
}

.btn-cancel {
  background: #f3f4f6;
  color: #374151;
}

.btn-upload {
  background: #3b82f6;
  color: white;
}

.btn-upload:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>