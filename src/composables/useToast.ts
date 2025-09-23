import { ref } from 'vue'

interface ToastOptions {
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message: string
  duration?: number
}

const isVisible = ref(false)
const toastData = ref<ToastOptions>({
  type: 'info',
  title: '',
  message: ''
})

let timeoutId: number | null = null

export function useToast() {
  const showToast = (options: ToastOptions) => {
    // Clear existing timeout
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    toastData.value = options
    isVisible.value = true

    // Auto hide after duration
    const duration = options.duration || 4000
    timeoutId = setTimeout(() => {
      hideToast()
    }, duration)
  }

  const hideToast = () => {
    isVisible.value = false
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }
  }

  const success = (title: string, message: string, duration?: number) => {
    showToast({ type: 'success', title, message, duration })
  }

  const error = (title: string, message: string, duration?: number) => {
    showToast({ type: 'error', title, message, duration })
  }

  const warning = (title: string, message: string, duration?: number) => {
    showToast({ type: 'warning', title, message, duration })
  }

  const info = (title: string, message: string, duration?: number) => {
    showToast({ type: 'info', title, message, duration })
  }

  return {
    isVisible,
    toastData,
    showToast,
    hideToast,
    success,
    error,
    warning,
    info
  }
}