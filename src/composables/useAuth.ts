import { ref, computed } from 'vue'
import axios from 'axios'

const API_BASE_URL = 'http://localhost:8000/api'

// Configuration axios
axios.defaults.baseURL = API_BASE_URL
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Content-Type'] = 'application/json'

// État global
const user = ref(null)
const token = ref(localStorage.getItem('auth_token'))
const isLoading = ref(false)

// Configuration du token dans axios
if (token.value) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token.value}`
}

export const useAuth = () => {
  const isAuthenticated = computed(() => !!token.value && !!user.value)

  const register = async (userData: {
    name: string
    email: string
    password: string
    password_confirmation: string
  }) => {
    isLoading.value = true
    try {
      const response = await axios.post('/register', userData)
      return response.data
    } catch (error: any) {
      throw error.response?.data || error
    } finally {
      isLoading.value = false
    }
  }

  const verifyEmail = async (userId: number, code: string) => {
    isLoading.value = true
    try {
      const response = await axios.post('/verify-email', {
        user_id: userId,
        code
      })
      
      if (response.data.success) {
        token.value = response.data.token
        user.value = response.data.user
        localStorage.setItem('auth_token', response.data.token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
      }
      
      return response.data
    } catch (error: any) {
      throw error.response?.data || error
    } finally {
      isLoading.value = false
    }
  }

  const resendCode = async (userId: number) => {
    isLoading.value = true
    try {
      const response = await axios.post('/resend-code', { user_id: userId })
      return response.data
    } catch (error: any) {
      throw error.response?.data || error
    } finally {
      isLoading.value = false
    }
  }

  const login = async (credentials: { email: string; password: string }) => {
    isLoading.value = true
    try {
      const response = await axios.post('/login', credentials)
      
      if (response.data.success) {
        token.value = response.data.token
        user.value = response.data.user
        localStorage.setItem('auth_token', response.data.token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
      }
      
      return response.data
    } catch (error: any) {
      throw error.response?.data || error
    } finally {
      isLoading.value = false
    }
  }

  const forgotPassword = async (email: string) => {
    isLoading.value = true
    try {
      const response = await axios.post('/forgot-password', { email })
      return response.data
    } catch (error: any) {
      throw error.response?.data || error
    } finally {
      isLoading.value = false
    }
  }

  const resetPassword = async (userId: number, code: string, password: string, passwordConfirmation: string) => {
    isLoading.value = true
    try {
      const response = await axios.post('/reset-password', {
        user_id: userId,
        code,
        password,
        password_confirmation: passwordConfirmation
      })
      return response.data
    } catch (error: any) {
      throw error.response?.data || error
    } finally {
      isLoading.value = false
    }
  }

  const logout = () => {
    user.value = null
    token.value = null
    localStorage.removeItem('auth_token')
    delete axios.defaults.headers.common['Authorization']
  }

  return {
    user: computed(() => user.value),
    token: computed(() => token.value),
    isAuthenticated,
    isLoading: computed(() => isLoading.value),
    register,
    verifyEmail,
    resendCode,
    login,
    forgotPassword,
    resetPassword,
    logout
  }
}