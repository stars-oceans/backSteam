
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 注册图标
import 'virtual:svg-icons-register'
import App from './App.vue'
const app = createApp(App)
import router from './router'

// 自己封装了elementplus一下这里
import elementplus from '@/utils/elementplus.js'
// 调用了一下
elementplus(app)
// 全局组件
import components from './components'
// 引入 全局 sass
import './styles/index.scss'

app.use(components)
app.use(createPinia())
app.use(router)
app.mount('#app')
