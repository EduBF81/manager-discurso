<script setup lang="ts">
defineProps<{
  title?: string
  icon?: string
}>()
</script>

<template>
  <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
    <div v-if="title" class="px-6 py-4 border-b border-gray-50 bg-gray-50/30 flex items-center gap-2">
      <i v-if="icon" :class="icon" class="text-blue-500"></i>
      <h3 class="text-lg font-bold text-gray-800">{{ title }}</h3>
    </div>
    <div class="p-6">
      <slot></slot>
    </div>
  </div>
</template>
