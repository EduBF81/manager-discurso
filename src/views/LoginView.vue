<script setup lang="ts">
import { ref } from 'vue'
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import BaseCard from '../components/ui/BaseCard.vue'
import BaseButton from '../components/ui/BaseButton.vue'

const router = useRouter()
const email = ref('')
const password = ref('')
const errorMessage = ref('')
const isLoading = ref(false)

const handleLogin = async () => {
  try {
    isLoading.value = true
    errorMessage.value = ''
    await signInWithEmailAndPassword(auth, email.value, password.value)
    router.push('/')
  } catch (error: any) {
    errorMessage.value = 'Credenciais inválidas. Tente novamente.'
    console.error(error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 fade-in">
    <div class="max-w-md w-full space-y-8">
      <div class="text-center">
        <i class="fas fa-microphone-alt text-4xl text-blue-600 mb-4 drop-shadow-sm"></i>
        <h2 class="text-3xl font-extrabold text-gray-900 tracking-tight">Agenda de Discursos</h2>
        <p class="mt-2 text-sm text-gray-500 font-medium">Autenticação Restrita para Coordenadores</p>
      </div>
      <BaseCard>
        <form class="space-y-6" @submit.prevent="handleLogin">
          <div v-if="errorMessage" class="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg text-center font-medium animate-pulse">
            {{ errorMessage }}
          </div>
          <div>
            <label for="email" class="block text-sm font-semibold text-gray-700">Email</label>
            <input id="email" v-model="email" type="email" required class="appearance-none block w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm mt-1.5 transition-shadow" />
          </div>
          <div>
            <label for="password" class="block text-sm font-semibold text-gray-700">Password</label>
            <input id="password" v-model="password" type="password" required class="appearance-none block w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm mt-1.5 transition-shadow" />
          </div>
          <BaseButton type="submit" block :disabled="isLoading" class="mt-8 py-3 text-sm tracking-wide">
             <i class="fas" :class="isLoading ? 'fa-spinner fa-spin' : 'fa-lock'"></i> <span class="ml-2">{{ isLoading ? 'Verificando Autorização...' : 'Entrar na Plataforma' }}</span>
          </BaseButton>
        </form>
      </BaseCard>
    </div>
  </div>
</template>

<style scoped>
.fade-in { animation: fadeIn 0.5s ease-out; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
</style>
