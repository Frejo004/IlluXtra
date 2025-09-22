import { ref, watch } from 'vue'
import { usePreferredColorScheme, useStorage } from '@vueuse/core'

const isDark = useStorage('theme-dark', false)
const preferredColorScheme = usePreferredColorScheme()

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  const setTheme = (dark: boolean) => {
    isDark.value = dark
  }

  watch(isDark, (dark) => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, { immediate: true })

  return {
    isDark,
    toggleTheme,
    setTheme
  }
}