<template>
  <h1 @click="increase">
    {{ count }} / {{ doubleCount }}
  </h1>
  <h1 @click="changeMessage">
    {{ message }} / {{ reversedMessage }}
  </h1>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'

const count = ref(0);
const doubleCount = computed(() => count.value * 2);
const increase = () => {
  count.value++;
}

const message = ref("Hello world!");
const reversedMessage = computed(() => message.value.split("").reverse().join(""))
watch(message, newValue => {
  console.log(newValue);
})
const changeMessage = () => {
  message.value = "Good!";
}
console.log(message.value);

onMounted(() => {
  console.log(count.value);
})

</script>
