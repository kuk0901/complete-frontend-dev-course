<template>
  <MyButton
    class="heropy"
    style="color:red;"
    color="#ff0000"
    @hello="log">
    Apple
  </MyButton>
</template>

<script>
import MyButton from "~/components/MyButton.vue";

export default {
  components: {MyButton},
  methods: {
    log() {
      console.log("Hello world!")
    }
  }
}
</script>
