<script setup>
const { movie } = defineProps({
  movie: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div>{{ movie.Title }}</div>
</template>

<style scoped>

</style>