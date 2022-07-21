<script setup lang="ts">
const props = defineProps({
  posts: {
    type: undefined,
    required: true
  }
})
</script>

<template>
  <div class="bg-white">
    <div class="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="grid grid-cols-1 mt-8 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">                                                
        <ProductCard
      v-for="post in posts"
      :key="post.id"
      :image="post.heroImage.url"
      :title="post.title"
      :description="post.description"
    />
      </div>
    </div>
  </div>
</template>