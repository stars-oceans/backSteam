<template>
  <div class="common-layout">
    <el-container>
      <!-- SideBar -->
      <Transition name="sidebar">
        <el-aside>
          <SideBar></SideBar>
        </el-aside>
      </Transition>

      <el-container>
        <!-- Top -->
        <el-header>
          <HeaderMenu></HeaderMenu>
        </el-header>
        <!-- Main -->
        <el-main>
          <Main ></Main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import HeaderMenu from './components/HeaderMenu.vue'
import Main from './components/Main.vue'
import SideBar from './components/SideBar.vue'



</script>

<style scoped>
.el-aside {
  background-color: rgb(15, 122, 158);
  width: 250px;
  height: 100vh;
  overflow: auto;
}
.el-header {
  height: 100px;
  background-color: rosybrown;
}
</style>
