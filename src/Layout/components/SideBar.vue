<template>
  <div class="logo">{{ $route.path }}</div>

  <el-scrollbar min-height="400px">
    <el-menu
      background-color="#000000"
      text-color="#fff"
      :router="true"
      :default-active="$route.path"
    >
      <!-- 动态生成的 menu -->
      <Menu :routerDatas="routerDatas"></Menu>
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
import { Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'

import Menu from './Menu.vue'

import { useRouterData } from '@/stores'
const routerData = useRouterData()
const routerDatas = routerData.routerData[1].children
console.log('22222')
console.log(routerDatas)
</script>

<style scoped>
.el-menu {
  width: 200px;
  height: 100vh;
  border-right: none;
}

.logo {
  width: 200px;
  height: 80px;
  background-color: pink;
  font-size: 20px;
}
</style>
