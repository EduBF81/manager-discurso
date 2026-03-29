import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BaseButton from './BaseButton.vue'

describe('BaseButton', () => {
  it('renders slot content correctly', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'Click me'
      }
    })
    expect(wrapper.text()).toBe('Click me')
  })

  it('applies primary variant by default', () => {
    const wrapper = mount(BaseButton)
    expect(wrapper.classes()).toContain('bg-blue-600')
  })

  it('applies secondary variant when specified', () => {
    const wrapper = mount(BaseButton, {
      props: {
        variant: 'secondary'
      }
    })
    expect(wrapper.classes()).toContain('bg-white')
  })

  it('applies danger variant when specified', () => {
    const wrapper = mount(BaseButton, {
      props: {
        variant: 'danger'
      }
    })
    expect(wrapper.classes()).toContain('bg-red-600')
  })

  it('applies block class when block prop is true', () => {
    const wrapper = mount(BaseButton, {
      props: {
        block: true
      }
    })
    expect(wrapper.classes()).toContain('w-full')
  })

  it('disables the button when disabled prop is true', () => {
    const wrapper = mount(BaseButton, {
      props: {
        disabled: true
      }
    })
    expect(wrapper.attributes()).toHaveProperty('disabled')
    expect(wrapper.classes()).toContain('opacity-50')
  })
})
