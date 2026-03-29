<script setup lang="ts">
import { useAuthStore } from '../../stores/authStore'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const authStore = useAuthStore()
const router = useRouter()
const isMobileMenuOpen = ref(false)

const handleLogout = async () => {
  await authStore.logout()
  router.push('/login')
}

const navLinks = [
  { name: 'Início', path: '/' },
  { name: 'Agendar', path: '/agendar' },
  { name: 'Consultar', path: '/consulta' },
  { name: 'Palestrantes', path: '/palestrantes' },
  { name: 'Histórico S-99-T', path: '/historico' }
]
</script>

<template>
  <nav class="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center gap-3">
          <i class="fas fa-microphone-alt text-blue-600 text-xl"></i>
          <span class="font-bold text-xl tracking-tight text-gray-900">Agenda Discurso</span>
        </div>
        <div class="hidden md:flex items-center space-x-1">
          <router-link v-for="link in navLinks" :key="link.path" :to="link.path" class="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors" active-class="text-blue-700 bg-blue-50">
            {{ link.name }}
          </router-link>
          <button @click="handleLogout" class="ml-4 flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors">
            Sair <i class="fas fa-sign-out-alt"></i>
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="flex items-center md:hidden">
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="text-gray-500 hover:text-blue-600 focus:outline-none p-2 transition-colors">
            <i class="fas text-xl" :class="isMobileMenuOpen ? 'fa-times' : 'fa-bars'"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Panel -->
    <div v-show="isMobileMenuOpen" class="md:hidden border-t border-gray-100 bg-white shadow-lg absolute w-full">
      <div class="px-4 py-3 space-y-1">
        <router-link v-for="link in navLinks" :key="link.path" :to="link.path" @click="isMobileMenuOpen = false" class="block px-3 py-3 rounded-lg text-base font-semibold text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors" active-class="text-blue-700 bg-blue-50 border-l-4 border-blue-600">
          {{ link.name }}
        </router-link>
        <div class="pt-4 mt-2 border-t border-gray-100">
          <button @click="handleLogout" class="w-full text-left flex items-center gap-3 px-3 py-3 text-base font-bold text-red-600 hover:bg-red-50 rounded-lg transition-colors">
            <i class="fas fa-sign-out-alt"></i> Encerrar Sessão
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
