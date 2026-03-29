import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BaseCard from './BaseCard.vue'

describe('BaseCard', () => {
  it('renders slot content correctly', () => {
    const wrapper = mount(BaseCard, {
      slots: {
        default: '<div class="test-content">Card Content</div>'
      }
    })
    expect(wrapper.find('.test-content').exists()).toBe(true)
    expect(wrapper.text()).toContain('Card Content')
  })

  it('renders title when provided', () => {
    const wrapper = mount(BaseCard, {
      props: {
        title: 'Test Title'
      }
    })
    expect(wrapper.find('h3').text()).toBe('Test Title')
  })

  it('renders icon when provided', () => {
    const wrapper = mount(BaseCard, {
      props: {
        title: 'Test Title',
        icon: 'fas fa-user'
      }
    })
    expect(wrapper.find('i.fas.fa-user').exists()).toBe(true)
  })

  it('does not render header if title is not provided', () => {
    const wrapper = mount(BaseCard)
    expect(wrapper.find('.px-6.py-4.border-b').exists()).toBe(false)
  })
})
