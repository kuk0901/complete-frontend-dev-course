<template>
  <div>
    {{ count }}
  </div>
  <button @click="increase">
    click me
  </button>
</template>

<script>
import {ref} from 'vue'
export default {
  setup() {
    // 반응성을 갖는 객체 데이터
   const count = ref(0);
   function increase() {
     count.value++;
   }

   return {
     count,
     increase
   }
  }
}
</script>
