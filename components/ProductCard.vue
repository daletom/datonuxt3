<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <div class="mx-2">
    <div class="relative rounded-lg shadow-lg">
      <!--<NuxtLink :to="link">-->
        <img :src="image" class="transition duration-300 ease-in-out rounded-lg shadow-lg opacity-1 hover:opacity-75" />
      <!--</NuxtLink>-->
      <div class="p-6">
        <h5 class="mb-3 text-lg font-bold">{{ title }}</h5>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>