<template>
  <template v-for="item in routerDatas" :key="item.path" style="color: #fff">
    <!-- 没有 children 的 时候 -->
    <template v-if="!item.children">
      <el-menu-item v-if="!item.meta.hidden" :index="item.path">
        <template #title>
          <span>标 &nbsp;</span>
          <span> {{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>

    <!-- 有 children 的时候但是只有一个的时候 可有父 -->
    <template v-if="item.children && item.children.length == 1">
      <el-menu-item v-if="!item.meta?.hidden" :index="item.children[0].path">
        <template #title>
          <span>标 &nbsp;</span>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 有childern 但是不止一个 -->
    <!-- 父 -->
    <template v-if="item.children && item.children.length > 1">
      <el-sub-menu v-if="!item.meta?.hidden" :index="item.path">
        <template #title>
          <span>标 &nbsp;</span>
          <span>{{ item.meta.title }}</span>
        </template>
        <!-- 子项 -->
        <Menu :routerDatas="item.children"></Menu>
      </el-sub-menu>
    </template>
  </template>

</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  routerDatas: {
    type: Array,
    default: () => {
      return []
    }
  }
})
</script>
<!-- 必须起个名字 不然无法识别 -->
<script>
export default {
  name: 'Menu'
}
</script>

<style scoped>
/*主菜单悬浮样式*/
.el-submenu__title:hover {
  color: white !important;
  background: #1890ff !important;
}
/*子菜单悬浮样式*/
.el-menu-item:hover {
  color: white !important;
  background: #1890ff !important;
}

.el-menu-item.is-active {
  background: #1890ff !important;
  color: #fff;
}
</style>
