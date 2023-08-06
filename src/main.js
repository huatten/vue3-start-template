import { createApp } from 'vue'
import 'virtual:svg-icons-register'

import App from './App.vue'
import routers from './routers'
import stores from './stores'
import directives from './directives'
import '@/styles/index.scss'

const app = createApp(App)

app.use(routers).use(stores).use(directives).mount('#app')
