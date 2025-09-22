<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Contactez-nous
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          Une question ? Une suggestion ? N'hésitez pas à nous contacter
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Envoyez-nous un message
          </h2>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label for="firstName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Prénom *
                </label>
                <input
                  id="firstName"
                  v-model="form.firstName"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label for="lastName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nom *
                </label>
                <input
                  id="lastName"
                  v-model="form.lastName"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email *
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Sujet *
              </label>
              <select
                id="subject"
                v-model="form.subject"
                required
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="">Sélectionnez un sujet</option>
                <option value="general">Question générale</option>
                <option value="technical">Support technique</option>
                <option value="business">Partenariat</option>
                <option value="content">Signaler un contenu</option>
                <option value="other">Autre</option>
              </select>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="6"
                required
                placeholder="Décrivez votre demande en détail..."
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100"
            >
              <span v-if="!isSubmitting">Envoyer le message</span>
              <span v-else>Envoi en cours...</span>
            </button>
          </form>

          <!-- Success Message -->
          <div v-if="showSuccess" class="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <p class="text-green-800 dark:text-green-400">
              ✅ Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
            </p>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="space-y-8">
          <!-- Contact Details -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Nos coordonnées
            </h3>
            
            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center">
                  <EnvelopeIcon class="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <a href="mailto:contact@illuxtra.com" class="text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400">
                    contact@illuxtra.com
                  </a>
                </div>
              </div>

              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                  <PhoneIcon class="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Téléphone</p>
                  <a href="tel:+33123456789" class="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400">
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>

              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-cyan-100 dark:bg-cyan-900/20 rounded-lg flex items-center justify-center">
                  <MapPinIcon class="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Adresse</p>
                  <p class="text-gray-900 dark:text-white">
                    123 Rue de l'Innovation<br>
                    75001 Paris, France
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Media -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Suivez-nous
            </h3>
            
            <div class="flex space-x-4">
              <a href="#" class="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors">
                <svg class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              <a href="#" class="w-12 h-12 bg-sky-500 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-colors">
                <svg class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              
              <a href="#" class="w-12 h-12 bg-pink-600 hover:bg-pink-700 rounded-lg flex items-center justify-center transition-colors">
                <svg class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C23.975 5.367 18.608.029 12.017.029z"/>
                </svg>
              </a>
              
              <a href="#" class="w-12 h-12 bg-blue-700 hover:bg-blue-800 rounded-lg flex items-center justify-center transition-colors">
                <svg class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- FAQ Link -->
          <div class="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-indigo-200 dark:border-indigo-800">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Questions fréquentes
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Consultez notre FAQ pour trouver rapidement des réponses à vos questions.
            </p>
            <a href="#" class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 font-medium">
              Voir la FAQ →
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/vue/24/outline'

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
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  isSubmitting.value = false
  showSuccess.value = true
  
  // Reset form
  Object.keys(form).forEach(key => {
    form[key as keyof typeof form] = ''
  })
  
  // Hide success message after 5 seconds
  setTimeout(() => {
    showSuccess.value = false
  }, 5000)
}
</script>