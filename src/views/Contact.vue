<template>
  <div class="contact-page">
    <div class="contact-header">
      <h1>Contactez-nous</h1>
      <p>Une question ? Une suggestion ? N'hésitez pas à nous contacter</p>
    </div>

    <div class="contact-container">
      <div class="contact-form">
        <h2>Envoyez-nous un message</h2>
        
        <form @submit.prevent="submitForm">
          <div class="form-row">
            <div class="form-group">
              <label for="firstName">Prénom *</label>
              <input id="firstName" v-model="form.firstName" type="text" required />
            </div>
            
            <div class="form-group">
              <label for="lastName">Nom *</label>
              <input id="lastName" v-model="form.lastName" type="text" required />
            </div>
          </div>

          <div class="form-group">
            <label for="email">Email *</label>
            <input id="email" v-model="form.email" type="email" required />
          </div>

          <div class="form-group">
            <label for="subject">Sujet *</label>
            <select id="subject" v-model="form.subject" required>
              <option value="">Sélectionnez un sujet</option>
              <option value="general">Question générale</option>
              <option value="technical">Support technique</option>
              <option value="business">Partenariat</option>
              <option value="other">Autre</option>
            </select>
          </div>

          <div class="form-group">
            <label for="message">Message *</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="6"
              required
              placeholder="Décrivez votre demande en détail..."
            ></textarea>
          </div>

          <button type="submit" :disabled="isSubmitting" class="submit-btn">
            <span v-if="!isSubmitting">Envoyer le message</span>
            <span v-else>Envoi en cours...</span>
          </button>
        </form>

        <div v-if="showSuccess" class="success-message">
          <p>✅ Votre message a été envoyé avec succès !</p>
        </div>
      </div>

      <div class="contact-info">
        <div class="info-card">
          <h3>Nos coordonnées</h3>
          
          <div class="contact-item">
            <div class="contact-icon">📧</div>
            <div>
              <p>Email</p>
              <a href="mailto:contact@illuxtra.com">contact@illuxtra.com</a>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">📞</div>
            <div>
              <p>Téléphone</p>
              <a href="tel:+33123456789">+33 1 23 45 67 89</a>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">📍</div>
            <div>
              <p>Adresse</p>
              <p>123 Rue de l'Innovation<br>75001 Paris, France</p>
            </div>
          </div>
        </div>

        <div class="info-card">
          <h3>Suivez-nous</h3>
          <div class="social-links">
            <a href="#">📘</a>
            <a href="#">🐦</a>
            <a href="#">📷</a>
            <a href="#">💼</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  isSubmitting.value = false
  showSuccess.value = true
  
  Object.keys(form).forEach(key => {
    form[key as keyof typeof form] = ''
  })
  
  setTimeout(() => {
    showSuccess.value = false
  }, 5000)
}
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  background: var(--color-gray-50);
  padding: 3rem 0;
}

.dark .contact-page {
  background: var(--color-gray-900);
}

.contact-header {
  text-align: center;
  margin-bottom: 3rem;
}

.contact-header h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--color-gray-900);
}

.dark .contact-header h1 {
  color: white;
}

.contact-header p {
  font-size: 1.125rem;
  color: var(--color-gray-600);
}

.dark .contact-header p {
  color: var(--color-gray-400);
}

.contact-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

@media (min-width: 1024px) {
  .contact-container {
    grid-template-columns: 2fr 1fr;
  }
}

.contact-form {
  background: white;
  border-radius: 0.75rem;
  box-shadow: var(--shadow);
  padding: 2rem;
}

.dark .contact-form {
  background: var(--color-gray-800);
}

.contact-form h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: var(--color-gray-900);
}

.dark .contact-form h2 {
  color: white;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .form-row {
    grid-template-columns: 1fr 1fr;
  }
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--color-gray-700);
}

.dark .form-group label {
  color: var(--color-gray-300);
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-gray-300);
  border-radius: 0.5rem;
  background: white;
  color: var(--color-gray-900);
  font-size: 0.875rem;
}

.dark .form-group input,
.dark .form-group select,
.dark .form-group textarea {
  background: var(--color-gray-700);
  border-color: var(--color-gray-600);
  color: white;
}

.form-group textarea {
  resize: none;
}

.submit-btn {
  width: 100%;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.submit-btn:hover:not(:disabled) {
  transform: scale(1.02);
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.success-message {
  margin-top: 1.5rem;
  padding: 1rem;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 0.5rem;
}

.dark .success-message {
  background: rgba(34, 197, 94, 0.2);
  border-color: rgba(34, 197, 94, 0.3);
}

.success-message p {
  color: #166534;
  margin: 0;
}

.dark .success-message p {
  color: #4ade80;
}

.info-card {
  background: white;
  border-radius: 0.75rem;
  box-shadow: var(--shadow);
  padding: 2rem;
  margin-bottom: 2rem;
}

.dark .info-card {
  background: var(--color-gray-800);
}

.info-card h3 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: var(--color-gray-900);
}

.dark .info-card h3 {
  color: white;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.contact-icon {
  width: 2.5rem;
  height: 2.5rem;
  background: #eef2ff;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}

.dark .contact-icon {
  background: rgba(99, 102, 241, 0.2);
}

.contact-item p {
  font-size: 0.875rem;
  color: var(--color-gray-500);
  margin: 0 0 0.25rem 0;
}

.dark .contact-item p {
  color: var(--color-gray-400);
}

.contact-item a {
  color: var(--color-gray-900);
  text-decoration: none;
}

.dark .contact-item a {
  color: white;
}

.contact-item a:hover {
  color: #6366f1;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  width: 3rem;
  height: 3rem;
  background: #6366f1;
  color: white;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.5rem;
  transition: all 0.3s;
}

.social-links a:hover {
  transform: scale(1.1);
}
</style>