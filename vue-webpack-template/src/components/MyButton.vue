<script>
export default {
  name: "MyButton",
  inheritAttrs: false,
  created() {
    console.log(this.$attrs)
  }
}
</script>

<template>
  <div
    class="btn">
    <slot></slot>
  </div>
  <h1
    v-bind="$attrs">
    야호
  </h1>
</template>

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