<template>
  <div v-if="isOpen" class="modal-overlay" @click="close">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <h2>{{ title }}</h2>
        <button class="close-btn" @click="close">
          <Icon icon="system-uicons:cross" />
        </button>
      </div>
      
      <form @submit.prevent="submit" class="modal-form">
        <div v-for="field in fields" :key="field.name" class="form-group">
          <label>{{ field.label }}</label>
          
          <input 
            v-if="field.type === 'text' || field.type === 'email' || field.type === 'number'"
            v-model="formData[field.name]"
            :type="field.type"
            :placeholder="field.placeholder"
            :required="field.required"
          />
          
          <input 
            v-else-if="field.type === 'file'"
            @change="handleFileChange($event, field.name)"
            type="file"
            :required="field.required"
            accept="image/*,video/*"
          />
          
          <textarea 
            v-else-if="field.type === 'textarea'"
            v-model="formData[field.name]"
            :placeholder="field.placeholder"
            :required="field.required"
            rows="3"
          ></textarea>
          
          <select 
            v-else-if="field.type === 'select'"
            v-model="formData[field.name]"
            :required="field.required"
          >
            <option value="">{{ field.placeholder }}</option>
            <option v-for="option in field.options" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>
          
          <div v-else-if="field.type === 'checkbox'" class="checkbox-group">
            <label v-for="option in field.options" :key="option.value" class="checkbox-item">
              <input 
                v-model="formData[field.name]"
                :value="option.value"
                type="checkbox"
              />
              {{ option.label }}
            </label>
          </div>
        </div>
        
        <div class="modal-actions">
          <button type="button" @click="close" class="btn-cancel">Annuler</button>
          <button type="submit" class="btn-submit">{{ submitText }}</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { Icon } from '@iconify/vue'

interface Field {
  name: string
  label: string
  type: 'text' | 'email' | 'number' | 'textarea' | 'select' | 'checkbox' | 'file'
  placeholder?: string
  required?: boolean
  options?: { value: string; label: string }[]
}

interface Props {
  isOpen: boolean
  title: string
  fields: Field[]
  submitText?: string
}

interface Emits {
  (e: 'close'): void
  (e: 'submit', data: Record<string, any>): void
}

const props = withDefaults(defineProps<Props>(), {
  submitText: 'Ajouter'
})

const emit = defineEmits<Emits>()

const formData = ref<Record<string, any>>({})

const initFormData = () => {
  const data: Record<string, any> = {}
  props.fields.forEach(field => {
    data[field.name] = field.type === 'checkbox' ? [] : ''
  })
  formData.value = data
}

watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    initFormData()
  }
}, { immediate: true })

const close = () => {
  emit('close')
}

const handleFileChange = (event: Event, fieldName: string) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    formData.value[fieldName] = target.files[0]
  }
}

const submit = () => {
  emit('submit', formData.value)
  close()
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
  max-width: 500px;
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

.modal-form {
  padding: 1.5rem;
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

.modal-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1.5rem;
}

.btn-cancel, .btn-submit {
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

.dark .btn-cancel {
  background: #374151;
  color: #d1d5db;
}

.btn-submit {
  background: #3b82f6;
  color: white;
}

.btn-submit:hover {
  background: #2563eb;
}
</style>