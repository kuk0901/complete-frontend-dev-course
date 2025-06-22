<script setup>
import { ref } from 'vue';
import MovieItem from "~/components/MovieItem.vue";

const movies = ref([]);
</script>

<template>
  <div class="container">
    <div class="inner">
      <MovieItem
        v-for="movie in movies"
        :key="movie.imdbID" />
    </div>
  </div>
</template>

<style scoped>

</style>