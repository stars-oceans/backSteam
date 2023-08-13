import { createApp } from 'vue'
import pinia from '@/stores/index.js'
// 注册图标
import 'virtual:svg-icons-register'
import App from './App.vue'
const app = createApp(App)
import router from './router'
// 导入 路由守卫
import './router/permission'

// 自己封装了elementplus一下这里
import elementplus from '@/utils/elementplus.js'
// 调用了一下
elementplus(app)
// 全局组件
import components from './components'
// 引入 全局 sass
import './styles/index.scss'

app.use(components)
app.use(pinia)
app.use(router)
app.mount('#app')
