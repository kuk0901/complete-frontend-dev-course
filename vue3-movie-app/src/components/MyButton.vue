<template>
  <div
    v-bind="$attrs"
    class="btn"
    @click="hello">
    <slot></slot>
  </div>
</template>

<!-- inheritAttrs: false -->
<script setup>
import { onMounted, useAttrs } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: "gray"
  }
})
const emit = defineEmits(['hello'])

const hello = () => {
  emit('hello')
}

onMounted(() => {
  console.log(props.color)
  console.log(useAttrs())
})
</script>

<style scoped lang="scss">
.btn {
  display: inline-block;
  margin: 4px;
  padding: 6px 12px;
  border-radius: 4px;
  background-color: gray;
  color: white;
  cursor: pointer;
  border: none;
}
</style>