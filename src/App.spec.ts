import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import App from './App.vue'
import { createPinia, setActivePinia } from 'pinia'
import { useAuthStore } from './stores/authStore'
import { useRoute } from 'vue-router'

// Mock components
vi.mock('./components/layout/NavBar.vue', () => ({
  default: { template: '<div class="navbar-mock">NavBar</div>' }
}))

// Mock vue-router
vi.mock('vue-router', () => ({
  useRoute: vi.fn(),
  useRouter: vi.fn(() => ({
    push: vi.fn()
  })),
  createRouter: vi.fn(() => ({
    beforeEach: vi.fn(),
    currentRoute: { value: { path: '/' } }
  })),
  createWebHistory: vi.fn()
}))

describe('App.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.clearAllMocks()
  })

  it('should not show NavBar when not authenticated', () => {
    const authStore = useAuthStore()
    authStore.isAuthenticated = false
    authStore.isInitialized = true

      ; (useRoute as any).mockReturnValue({ name: 'dashboard' })

    const wrapper = mount(App, {
      global: {
        stubs: {
          'router-view': true
        }
      }
    })

    expect(wrapper.find('.navbar-mock').exists()).toBe(false)
  })

  it('should not show NavBar when on login route even if authenticated', () => {
    const authStore = useAuthStore()
    authStore.isAuthenticated = true
    authStore.isInitialized = true

      ; (useRoute as any).mockReturnValue({ name: 'login' })

    const wrapper = mount(App, {
      global: {
        stubs: {
          'router-view': true
        }
      }
    })

    expect(wrapper.find('.navbar-mock').exists()).toBe(false)
  })

  it('should show NavBar when authenticated and not on login route', () => {
    const authStore = useAuthStore()
    authStore.isAuthenticated = true
    authStore.isInitialized = true

      ; (useRoute as any).mockReturnValue({ name: 'dashboard' })

    const wrapper = mount(App, {
      global: {
        stubs: {
          'router-view': true
        }
      }
    })

    expect(wrapper.find('.navbar-mock').exists()).toBe(true)
  })
})
