<template>
  <Transition name="toast">
    <div v-if="isVisible" class="toast" :class="type">
      <Icon :icon="getIcon()" class="toast-icon" />
      <div class="toast-content">
        <h4>{{ title }}</h4>
        <p>{{ message }}</p>
      </div>
      <button @click="close" class="toast-close">
        <Icon icon="system-uicons:cross" />
      </button>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  isVisible: boolean
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message: string
}

interface Emits {
  (e: 'close'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const getIcon = () => {
  const icons = {
    success: 'system-uicons:check',
    error: 'system-uicons:cross',
    warning: 'system-uicons:warning',
    info: 'system-uicons:info'
  }
  return icons[props.type]
}

const close = () => {
  emit('close')
}
</script>

<style scoped>
.toast {
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-width: 300px;
  max-width: 400px;
  z-index: 1100;
  border-left: 4px solid;
}

.dark .toast {
  background: #1f2937;
}

.toast.success {
  border-left-color: #10b981;
}

.toast.error {
  border-left-color: #ef4444;
}

.toast.warning {
  border-left-color: #f59e0b;
}

.toast.info {
  border-left-color: #3b82f6;
}

.toast-icon {
  font-size: 1.25rem;
  flex-shrink: 0;
}

.toast-content h4 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.25rem;
}

.dark .toast-content h4 {
  color: white;
}

.toast-content p {
  font-size: 0.75rem;
  color: #6b7280;
  margin: 0;
}

.dark .toast-content p {
  color: #9ca3af;
}

.toast-close {
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.25rem;
  border-radius: 0.25rem;
  flex-shrink: 0;
}

.toast-close:hover {
  background: #f3f4f6;
}

.dark .toast-close:hover {
  background: #374151;
}

.toast-enter-active, .toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>