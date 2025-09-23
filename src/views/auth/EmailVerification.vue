<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Vérification de votre email
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Nous avons envoyé un code de vérification à votre adresse email
        </p>
      </div>
      
      <form class="mt-8 space-y-6" @submit.prevent="handleVerification">
        <div>
          <label for="code" class="sr-only">Code de vérification</label>
          <input
            id="code"
            v-model="verificationCode"
            type="text"
            maxlength="6"
            required
            class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm text-center text-2xl tracking-widest"
            placeholder="000000"
          />
        </div>

        <div v-if="error" class="text-red-600 text-sm text-center">
          {{ error }}
        </div>

        <div v-if="success" class="text-green-600 text-sm text-center">
          {{ success }}
        </div>

        <div>
          <button
            type="submit"
            :disabled="isLoading || verificationCode.length !== 6"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            <span v-if="isLoading">Vérification...</span>
            <span v-else>Vérifier</span>
          </button>
        </div>

        <div class="text-center">
          <button
            type="button"
            @click="handleResendCode"
            :disabled="isLoading || cooldown > 0"
            class="text-indigo-600 hover:text-indigo-500 text-sm disabled:opacity-50"
          >
            <span v-if="cooldown > 0">Renvoyer le code dans {{ cooldown }}s</span>
            <span v-else>Renvoyer le code</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuth } from '../../composables/useAuth'

const router = useRouter()
const route = useRoute()
const { verifyEmail, resendCode, isLoading } = useAuth()

const verificationCode = ref('')
const error = ref('')
const success = ref('')
const cooldown = ref(0)
const userId = ref<number | null>(null)

onMounted(() => {
  userId.value = Number(route.query.userId)
  if (!userId.value) {
    router.push('/register')
  }
})

const handleVerification = async () => {
  if (!userId.value) return
  
  error.value = ''
  success.value = ''
  
  try {
    const result = await verifyEmail(userId.value, verificationCode.value)
    if (result.success) {
      success.value = result.message
      setTimeout(() => {
        router.push('/')
      }, 2000)
    }
  } catch (err: any) {
    error.value = err.message || 'Erreur lors de la vérification'
  }
}

const handleResendCode = async () => {
  if (!userId.value) return
  
  error.value = ''
  success.value = ''
  
  try {
    const result = await resendCode(userId.value)
    if (result.success) {
      success.value = result.message
      startCooldown()
    }
  } catch (err: any) {
    error.value = err.message || 'Erreur lors du renvoi du code'
  }
}

const startCooldown = () => {
  cooldown.value = 60
  const interval = setInterval(() => {
    cooldown.value--
    if (cooldown.value <= 0) {
      clearInterval(interval)
    }
  }, 1000)
}
</script>