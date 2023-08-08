<script setup>
import { defineProps } from 'vue'
// 提供name属性即可
defineProps({
  name: {
    type: String
  }
})
</script>

<template>
  <svg aria-hidden="true" class="icon-container" >
    <use :href="`#icon-${name}`" />
  </svg>
</template>

<style lang="scss" scoped>
  // 说明：em 相对于父元素字体大小
.icon-container{
  width: 20px;
  height: 20px;
}
</style>
