<template>
  <el-row>
    <el-col :span="16">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
          <el-breadcrumb-item>promotion list</el-breadcrumb-item>
          <el-breadcrumb-item >
            <span class="no-tiao" >aaaaaaaa</span>
          </el-breadcrumb-item>
        </el-breadcrumb>
    </el-col>
    <el-col :span="8">
      <el-button @click="quit">退出</el-button>
    </el-col>
  </el-row>
</template>

<script setup>
import { useLoginStore } from '@/stores'
import { useRouter,useRoute} from 'vue-router'
import { watch } from 'vue'

const router = useRouter()
const route = useRoute()
// loginData 的 pinia 数据
const loginStore = useLoginStore()
const routes = router.getRoutes()

const quit = () => {
  // 退出登录
  // 清除token
  loginStore.clearLoginData()
  // 跳转到登录页
  router.push('/login')
}

watch(route, ()=>{
  // console.log(route.matched[1]?.meta);
},
{
  immediate: true
})

</script>

<style scoped>
.el-breadcrumb{
  margin-top: 50px;
}
 ::v-deep .no-tiao{
  font-size: 30px;
  color: aqua ;
}
</style>
