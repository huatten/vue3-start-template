/**
 * pinia 状态管理
 * https://prazdevs.github.io/pinia-plugin-persistedstate/zh/
 */
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
export default pinia
