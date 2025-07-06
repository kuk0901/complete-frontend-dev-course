<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

import MovieItem from "~/components/MovieItem.vue";

const store = useStore();
const movies = computed(() => store.state.movie.movies);

</script>

<template>
  <div class="container">
    <div class="inner">
      <MovieItem
        v-for="m in movies"
        :key="m.imdbID"
        :movie="m" />
    </div>
  </div>
</template>

<style scoped>

</style>