<template>
  <div v-if="isOpen" class="modal-overlay" @click="cancel">
    <div class="modal-content" @click.stop>
      <div class="modal-icon" :class="type">
        {{ getIcon() }}
      </div>
      
      <div class="modal-body">
        <h3>{{ title }}</h3>
        <p>{{ message }}</p>
      </div>
      
      <div class="modal-actions">
        <button @click="cancel" class="btn-cancel">
          {{ cancelText }}
        </button>
        <button @click="confirm" class="btn-confirm" :class="type">
          {{ confirmText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  isOpen: boolean
  title: string
  message: string
  type?: 'danger' | 'warning' | 'info'
  confirmText?: string
  cancelText?: string
}

interface Emits {
  (e: 'confirm'): void
  (e: 'cancel'): void
}

const props = withDefaults(defineProps<Props>(), {
  type: 'warning',
  confirmText: 'Confirmer',
  cancelText: 'Annuler'
})

const emit = defineEmits<Emits>()

const getIcon = () => {
  const icons = {
    danger: '⚠️',
    warning: '❓',
    info: 'ℹ️'
  }
  return icons[props.type]
}

const confirm = () => {
  emit('confirm')
}

const cancel = () => {
  emit('cancel')
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
  padding: 1.5rem;
  width: 90%;
  max-width: 400px;
  text-align: center;
}

.dark .modal-content {
  background: #1f2937;
}

.modal-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.modal-body h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
}

.dark .modal-body h3 {
  color: white;
}

.modal-body p {
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.dark .modal-body p {
  color: #9ca3af;
}

.modal-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
}

.btn-cancel, .btn-confirm {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
  min-width: 80px;
}

.btn-cancel {
  background: #f3f4f6;
  color: #374151;
}

.dark .btn-cancel {
  background: #374151;
  color: #d1d5db;
}

.btn-confirm {
  color: white;
}

.btn-confirm.danger {
  background: #ef4444;
}

.btn-confirm.warning {
  background: #f59e0b;
}

.btn-confirm.info {
  background: #3b82f6;
}

.btn-confirm:hover.danger {
  background: #dc2626;
}

.btn-confirm:hover.warning {
  background: #d97706;
}

.btn-confirm:hover.info {
  background: #2563eb;
}
</style>