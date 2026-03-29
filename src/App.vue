<script setup lang="ts">
import NavBar from './components/layout/NavBar.vue'
import { useAuthStore } from './stores/authStore'
import { onMounted } from 'vue'

const authStore = useAuthStore()

onMounted(() => {
  authStore.initAuth()
})
</script>

<template>
  <div v-if="authStore.isInitialized" class="min-h-screen bg-gray-50">
    <NavBar v-if="authStore.isAuthenticated" />
    <main :class="authStore.isAuthenticated ? 'pt-8 px-4 sm:px-6 lg:px-8' : ''">
      <router-view></router-view>
    </main>
  </div>
  <div v-else class="min-h-screen flex items-center justify-center bg-gray-50">
    <i class="fas fa-spinner fa-spin fa-2x text-blue-500"></i>
  </div>
</template>
