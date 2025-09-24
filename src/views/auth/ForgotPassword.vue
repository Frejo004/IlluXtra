<template>
  <div class="auth-page">
    <div class="auth-container">
      <div class="auth-form">
        <div class="form-content">
          <router-link to="/" class="brand">
            <div class="logo-icon">IX</div>
            <span class="logo-text">IlluXtra</span>
          </router-link>

          <div class="form-header">
            <h2>Mot de passe oublié</h2>
            <p class="subtitle">Entrez votre adresse email pour recevoir un code de réinitialisation</p>
          </div>

          <form class="email-form" @submit.prevent="handleForgotPassword">
            <div class="form-group">
              <label>Email</label>
              <input
                v-model="email"
                type="email"
                required
                class="form-input"
                placeholder="votre@email.com"
              />
            </div>

            <div v-if="error" class="error-message">
              {{ error }}
            </div>

            <div v-if="success" class="success-message">
              {{ success }}
            </div>

            <button
              type="submit"
              :disabled="isLoading"
              class="submit-btn"
            >
              <span v-if="isLoading">Envoi en cours...</span>
              <span v-else>Envoyer le code</span>
            </button>
          </form>

          <div class="form-footer">
            <p class="switch-form">
              Vous vous souvenez de votre mot de passe ?
              <router-link to="/login" class="link-btn">Se connecter</router-link>
            </p>
          </div>
        </div>
      </div>

      <div class="auth-image">
        <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Creative Art" />
        <div class="image-overlay">
          <p>Image generated with Freepik Pikaso</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../../composables/useAuth'

const router = useRouter()
const { forgotPassword, isLoading } = useAuth()

const email = ref('')
const error = ref('')
const success = ref('')

const handleForgotPassword = async () => {
  error.value = ''
  success.value = ''
  
  try {
    const result = await forgotPassword(email.value)
    if (result.success) {
      success.value = result.message
      setTimeout(() => {
        router.push(`/reset-password?userId=${result.user_id}`)
      }, 2000)
    }
  } catch (err: any) {
    error.value = err.message || 'Erreur lors de l\'envoi du code'
  }
}
</script>

<style scoped>
.auth-page {
  height: 100vh;
  background: white;
  overflow: hidden;
}

.dark .auth-page {
  background: #0a0a0a;
}

.auth-container {
  display: flex;
  height: 100vh;
}

.auth-image {
  flex: 1;
  position: relative;
  overflow: hidden;
  order: 2;
}

.auth-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  color: white;
  font-size: 0.875rem;
}

.auth-form {
  flex: 0 0 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  order: 1;
}

.form-content {
  width: 100%;
  max-width: 320px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  justify-content: center;
  margin-bottom: 3rem;
  transition: transform 0.3s;
}

.brand:hover {
  transform: scale(1.05);
}

.logo-icon {
  width: 2rem;
  height: 2rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 0.875rem;
}

.logo-text {
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
}

.dark .logo-text {
  color: white;
}

.form-header {
  margin-bottom: 2rem;
  text-align: center;
}

.form-header h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}

.dark .form-header h2 {
  color: white;
}

.subtitle {
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.5;
}

.dark .subtitle {
  color: #9ca3af;
}

.email-form {
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  font-size: 0.875rem;
  color: #374151;
  margin-bottom: 0.5rem;
}

.dark .form-group label {
  color: #d1d5db;
}

.form-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background: white;
  color: #374151;
  font-size: 0.875rem;
}

.dark .form-input {
  background: #1f2937;
  border-color: #374151;
  color: #d1d5db;
}

.form-input:focus {
  outline: none;
  border-color: #6366f1;
}

.submit-btn {
  width: 100%;
  padding: 0.75rem;
  background: #6366f1;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s;
}

.submit-btn:hover:not(:disabled) {
  background: #4f46e5;
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.form-footer {
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
}

.dark .form-footer {
  color: #9ca3af;
}

.switch-form {
  margin-bottom: 1rem;
}

.link-btn {
  color: #6366f1;
  text-decoration: none;
}

.link-btn:hover {
  text-decoration: underline;
}

.error-message {
  color: #ef4444;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  text-align: center;
}

.success-message {
  color: #10b981;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  text-align: center;
}

@media (max-width: 768px) {
  .auth-container {
    flex-direction: column;
  }
  
  .auth-image {
    height: 40vh;
    order: 1 !important;
  }
  
  .auth-form {
    order: 2 !important;
  }
}
</style>