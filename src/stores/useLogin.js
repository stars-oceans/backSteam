import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getLoginDataAPI } from '@/apis/login.js'
import md5 from 'md5'

export const useLoginStore = defineStore(
  'login',
  () => {
    // 存的loginData 的值
    const loginData = ref()

    // 接口的方法
    const getLoginData = async (username, password) => {
      const data = {
        username: username,
        password: md5(password)
      }
      return await getLoginDataAPI(data)
    }

    // 存入我们这个 loginData的方法
    const setLoginData = (data) => {
      loginData.value = data
    }

    // 删除 loginData的方法
    const clearLoginData = () => {
      loginData.value = {}
    }
    return { loginData, getLoginData, setLoginData,clearLoginData }
  },
  {
    persist: true
  }
)
