<script>
export default {
  name: "MyChild",
  inject: ["msg"]
}
</script>

<template>
  <div>Child: {{ msg }}</div>
</template>
