<script setup>
import { ref, reactive } from 'vue';
import axios from "axios";

const title = ref('');
const filters = ref([
  {
    name: "type",
    items: ['movie', 'series', 'episode']
  },
  {
    name: "number",
    items: [10, 20, 30]
  },
  {
    name: "year",
    items: (() => {
      const years = [];
      const thisYear = new Date().getFullYear();
      for (let i = thisYear; i >= 1985; i--) {
        years.push(i);
      }
      return years;
    })()
  }
  ]);

const form = reactive({
  type: "movie",
  number: 10,
  year: ""
});

const apply = async () => {
  const OMDB_API_KEY = '7035c60c';
  const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title.value}&type=${form.type}&y=${form.year}&page=1`);
}

</script>

<template>
  <div class="container">
    <input
      type="text"
      v-model="title"
      placeholder="Search for Movies, Series & more"
      class="form-control"
      @keyup.enter="apply" />
    <div class="selects">
      <select
        v-for="filter in filters"
        :key="filter.name"
        v-model="form[filter.name]"
        class="form-select">
        <option
          v-if="filter.name === 'year'"
          value="">
          All Years
        </option>
        <option
          v-for="item in filter.items"
          :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <button
      class="btn btn-primary"
      @click="apply">
      Apply
    </button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  > * {
    margin-right: 10px;
    font-size: 15px;

    &:last-child {
      margin-right: 0;
    }
  }

  .selects {
    display: flex;

    select {
      width: 120px;
      margin-right: 10px;

      &:last-child {
        margin-right: 0;
      }

    }
  }

  .btn {
    width: 120px;
    height: 50px;
    font-weight: 700;
    flex-shrink: 0;
  }
}
</style>