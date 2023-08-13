<template>
  <h1>11</h1>
  <SvgIcon name="svg-article-create"></SvgIcon>

  <button @click="getData">aaa</button>
  <button @click="getDataaa">bbb</button>

  <button @click="getMockData">mock测试</button>

  <Transition name="dmoe">
    <div v-show="isShow">aa</div>
  </Transition>

  <button @click="isShow = !isShow">show</button>

  <div class="text">aaaa</div>
</template>

<script setup>
import { getUserList } from '@/apis/test.js'
import { ref } from 'vue'

import axios from 'axios'
const getData = async () => {
  const { data: res } = await getUserList()
  console.log(res)
}

const getDataaa = async () => {
  await axios.get(`http://localhost:3000/api/user`, {}).then((res) => {
    console.log(res)
  })
}

const getMockData = () => {
  axios({
    method: 'post',
    url: '/user/login',
    data: {
      username: 'admin',
      password: '111111'
    }
  }).then((data) => {
    console.log(data)
  })
}

const isShow = ref(false)
</script>

<style scoped lang="scss">
.text {
  font-size: $base-tabbar-height;
  color: red;
}

.dmoe-enter-active,
.dmoe-leave-active {
  transition: opacity 3s ease-in-out;
  opacity: 1;
  background-color: blueviolet;
}




</style>
