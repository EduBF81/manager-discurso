<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary' | 'danger'
  block?: boolean
  disabled?: boolean
}>()
</script>

<template>
  <button
    :disabled="disabled"
    :class="[
      'inline-flex justify-center items-center px-4 py-2 text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
      block ? 'w-full' : '',
      disabled ? 'opacity-50 cursor-not-allowed' : '',
      (!variant || variant === 'primary') ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500' : '',
      variant === 'secondary' ? 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500' : '',
      variant === 'danger' ? 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500' : ''
    ]"
  >
    <slot></slot>
  </button>
</template>
