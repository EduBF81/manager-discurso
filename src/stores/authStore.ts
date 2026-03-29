import { defineStore } from 'pinia'
import { ref } from 'vue'
import { auth } from '../firebase/config'
import { onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth'

import router from '../router'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<any>(null)
  const isAuthenticated = ref(false)
  const isInitialized = ref(false)

  const initAuth = () => {
    onAuthStateChanged(auth, (currentUser) => {
      user.value = currentUser
      isAuthenticated.value = !!currentUser
      isInitialized.value = true

      if (currentUser && router.currentRoute.value.path === '/login') {
        router.push('/')
      }
    })
  }

  const logout = async () => {
    await firebaseSignOut(auth)
  }

  return { user, isAuthenticated, isInitialized, initAuth, logout }
})
