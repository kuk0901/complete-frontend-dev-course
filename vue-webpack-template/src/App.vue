<script>
import HelloWorld from "~/components/HelloWorld";
export default {
  name: "App",
  data() {
    return {
      message: 'Hello Vue!!!'
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<template>
  <h1>{{ message }}</h1>
  <HelloWorld />
</template>

<style scoped>

</style>