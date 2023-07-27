import { createApp } from 'vue'
import 'virtual:svg-icons-register'

import App from './App.vue'
import routers from './routers'
import stores from './stores'
// import '@/styles/tailwind.css'
import '@/styles/index.scss'

const app = createApp(App)

app.use(routers).use(stores).mount('#app')
