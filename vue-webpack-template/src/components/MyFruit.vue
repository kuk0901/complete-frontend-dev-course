<script>
export default {
  name: "MyFruit",
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<template>
  <li>{{ name }}?!</li>
</template>

<style scoped>
h1 {
  color: red !important;
}
</style>