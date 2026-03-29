import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import LoginView from './LoginView.vue'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

// Mock Firebase
vi.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: vi.fn(),
  getAuth: vi.fn(() => ({}))
}))

// Mock Firebase Config
vi.mock('../firebase/config', () => ({
  auth: {}
}))

// Mock Vue Router
vi.mock('vue-router', () => ({
  useRouter: vi.fn()
}))

describe('LoginView', () => {
  let pushMock: any

  beforeEach(() => {
    vi.clearAllMocks()
    pushMock = vi.fn()
      ; (useRouter as any).mockReturnValue({
        push: pushMock
      })
  })

  it('renders login form correctly', () => {
    const wrapper = mount(LoginView, {
      global: {
        stubs: {
          BaseCard: {
            template: '<div><slot></slot></div>'
          },
          BaseButton: {
            template: '<button><slot></slot></button>'
          }
        }
      }
    })
    expect(wrapper.find('h2').text()).toBe('Agenda de Discursos')
    expect(wrapper.find('input[type="email"]').exists()).toBe(true)
    expect(wrapper.find('input[type="password"]').exists()).toBe(true)
  })

  it('updates email and password refs on input', async () => {
    const wrapper = mount(LoginView, {
      global: {
        stubs: {
          BaseCard: {
            template: '<div><slot></slot></div>'
          },
          BaseButton: {
            template: '<button><slot></slot></button>'
          }
        }
      }
    })

    const emailInput = wrapper.find('input[type="email"]')
    const passwordInput = wrapper.find('input[type="password"]')

    await emailInput.setValue('test@example.com')
    await passwordInput.setValue('password123')

    expect((wrapper.vm as any).email).toBe('test@example.com')
    expect((wrapper.vm as any).password).toBe('password123')
  })

  it('calls signInWithEmailAndPassword and redirects on successful login', async () => {
    ; (signInWithEmailAndPassword as any).mockResolvedValue({})

    const wrapper = mount(LoginView, {
      global: {
        stubs: {
          BaseCard: {
            template: '<div><slot></slot></div>'
          },
          BaseButton: {
            template: '<button><slot></slot></button>'
          }
        }
      }
    })

    await wrapper.find('input[type="email"]').setValue('test@example.com')
    await wrapper.find('input[type="password"]').setValue('password123')
    await wrapper.find('form').trigger('submit.prevent')

    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(expect.anything(), 'test@example.com', 'password123')
    expect(pushMock).toHaveBeenCalledWith('/')
  })

  it('displays error message on login failure', async () => {
    ; (signInWithEmailAndPassword as any).mockRejectedValue(new Error('Invalid credentials'))

    const wrapper = mount(LoginView, {
      global: {
        stubs: {
          BaseCard: {
            template: '<div><slot></slot></div>'
          },
          BaseButton: {
            template: '<button><slot></slot></button>'
          }
        }
      }
    })

    await wrapper.find('input[type="email"]').setValue('wrong@example.com')
    await wrapper.find('input[type="password"]').setValue('wrongpass')
    await wrapper.find('form').trigger('submit.prevent')

    expect(signInWithEmailAndPassword).toHaveBeenCalled()
    expect(pushMock).not.toHaveBeenCalled()

    // Check if error message is displayed
    const errorMessage = wrapper.find('.bg-red-50')
    expect(errorMessage.exists()).toBe(true)
    expect(errorMessage.text()).toContain('Credenciais inválidas')
  })

  it('shows loading state during login', async () => {
    // Return a promise that doesn't resolve immediately
    let resolveLogin: any
    const loginPromise = new Promise((resolve) => {
      resolveLogin = resolve
    })
      ; (signInWithEmailAndPassword as any).mockReturnValue(loginPromise)

    const wrapper = mount(LoginView, {
      global: {
        stubs: {
          BaseCard: {
            template: '<div><slot></slot></div>'
          },
          BaseButton: {
            props: ['disabled'],
            template: '<button :disabled="disabled"><slot></slot></button>'
          }
        }
      }
    })

    await wrapper.find('input[type="email"]').setValue('test@example.com')
    await wrapper.find('input[type="password"]').setValue('password123')
    await wrapper.find('form').trigger('submit.prevent')

    expect((wrapper.vm as any).isLoading).toBe(true)
    expect(wrapper.find('button').attributes()).toHaveProperty('disabled')
    expect(wrapper.text()).toContain('Verificando Autorização...')

    // Resolve login
    resolveLogin({})
    await vi.waitFor(() => expect((wrapper.vm as any).isLoading).toBe(false))
  })
})
