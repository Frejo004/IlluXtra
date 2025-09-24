import { ref } from 'vue'

interface ConfirmOptions {
  title: string
  message: string
  type?: 'danger' | 'warning' | 'info'
  confirmText?: string
  cancelText?: string
}

const isOpen = ref(false)
const confirmOptions = ref<ConfirmOptions>({
  title: '',
  message: ''
})

let resolvePromise: ((value: boolean) => void) | null = null

export function useConfirm() {
  const confirm = (options: ConfirmOptions): Promise<boolean> => {
    confirmOptions.value = options
    isOpen.value = true
    
    return new Promise((resolve) => {
      resolvePromise = resolve
    })
  }

  const handleConfirm = () => {
    isOpen.value = false
    resolvePromise?.(true)
    resolvePromise = null
  }

  const handleCancel = () => {
    isOpen.value = false
    resolvePromise?.(false)
    resolvePromise = null
  }

  return {
    isOpen,
    confirmOptions,
    confirm,
    handleConfirm,
    handleCancel
  }
}