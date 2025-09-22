<template>
  <div class="auth-page">
    <div class="auth-container">
      <div class="auth-form" :class="{ 'form-left': imageRight }">
        <div class="form-content">
          <button v-if="showEmailForm" @click="showEmailForm = false" class="back-btn">
            ← Back
          </button>
          
          <div class="brand">
            <h1>FREEPIK</h1>
          </div>

          <div class="form-header">
            <h2>{{ title }}</h2>
          </div>

          <div v-if="!showEmailForm" class="auth-buttons">
            <button class="auth-btn google">
              <span>🔍</span>
              Continue with Google
            </button>
            <button class="auth-btn apple">
              <span>🍎</span>
              Continue with Apple
            </button>
            <button @click="showEmailForm = true" class="auth-btn email">
              <span>✉️</span>
              Continue with email
            </button>
          </div>

          <div v-if="showEmailForm" class="email-form">
            <div class="form-group">
              <label>Email</label>
              <input type="email" v-model="email" class="form-input" />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" v-model="password" class="form-input" />
            </div>
            <div v-if="isRegister" class="form-group">
              <label>Confirm Password</label>
              <input type="password" v-model="confirmPassword" class="form-input" />
            </div>
            <button class="submit-btn">{{ submitText }}</button>
          </div>

          <div class="form-footer">
            <p v-if="showEmailForm && isRegister" class="terms">
              By clicking the "Sign up" button, you are creating a Freepik account and therefore you agree to Freepik Terms of Use and Privacy Policy.
            </p>
            <label v-if="!showEmailForm && isRegister" class="checkbox-label">
              <input type="checkbox" />
              I do not wish to receive news and promotions from Freepik by email.
            </label>
            
            <p v-if="!showEmailForm && isRegister" class="terms">
              By continuing, you agree to Freepik Terms of Use and Privacy Policy.
            </p>
            
            <p class="switch-form">
              {{ switchText }}
              <router-link :to="switchRoute" class="link-btn">{{ switchLinkText }}</router-link>
            </p>
            
            <button class="cookies-btn">Cookies settings</button>
          </div>
        </div>
      </div>

      <div class="auth-image" :class="{ 'image-right': imageRight }">
        <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Creative Art" />
        <div class="image-overlay">
          <p>Image generated with Freepik Pikaso</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  isRegister?: boolean
  imageRight?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isRegister: false,
  imageRight: false
})

const showEmailForm = ref(false)
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const title = computed(() => props.isRegister ? 'Create an account' : 'Welcome back')
const submitText = computed(() => props.isRegister ? 'Sign up' : 'Log in')
const switchText = computed(() => props.isRegister ? 'Already have an account?' : "Don't have an account?")
const switchRoute = computed(() => props.isRegister ? '/login' : '/register')
const switchLinkText = computed(() => props.isRegister ? 'Log in' : 'Sign up')
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
  order: 1;
}

.auth-image.image-right {
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
  order: 2;
}

.auth-form.form-left {
  order: 1;
}

.form-content {
  width: 100%;
  max-width: 320px;
}

.back-btn {
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  padding: 0;
}

.dark .back-btn {
  color: #9ca3af;
}

.brand {
  text-align: right;
  margin-bottom: 3rem;
}

.form-left .brand {
  text-align: left;
}

.brand h1 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #6366f1;
}

.form-header {
  margin-bottom: 2rem;
}

.form-header h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
}

.dark .form-header h2 {
  color: white;
}

.auth-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.auth-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background: white;
  color: #374151;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s;
}

.dark .auth-btn {
  background: #1f2937;
  border-color: #374151;
  color: #d1d5db;
}

.auth-btn:hover {
  background: #f9fafb;
}

.dark .auth-btn:hover {
  background: #374151;
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

.submit-btn:hover {
  background: #4f46e5;
}

.form-footer {
  font-size: 0.875rem;
  color: #6b7280;
}

.dark .form-footer {
  color: #9ca3af;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
}

.checkbox-label input {
  margin-top: 0.125rem;
}

.terms {
  margin-bottom: 1rem;
  line-height: 1.5;
}

.switch-form {
  margin-bottom: 1rem;
  text-align: center;
}

.link-btn {
  color: #6366f1;
  text-decoration: none;
}

.link-btn:hover {
  text-decoration: underline;
}

.cookies-btn {
  background: none;
  border: none;
  color: #6366f1;
  cursor: pointer;
  text-decoration: underline;
  font-size: 0.875rem;
  display: block;
  margin: 0 auto;
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
  
  .brand {
    text-align: center !important;
  }
}
</style>