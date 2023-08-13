// pinia 原来的实例
import { createPinia } from 'pinia'
// 持久化
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

// 把这个里面的代码默认导出
export default pinia

// 这个是中转站
export * from './useLogin.js'
export * from './useRouterData.js'
