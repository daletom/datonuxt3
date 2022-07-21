<script setup lang="ts">
const props = defineProps({
  posts: {
    type: undefined,
    required: true
  }
})
</script>

<template>
  <div class="flex my-20">
    <ProductCard
      v-for="post in posts"
      :key="post.id"
      :image="post.heroImage.url"
      :title="post.title"
      :description="post.description"
    />
  </div>
</template>