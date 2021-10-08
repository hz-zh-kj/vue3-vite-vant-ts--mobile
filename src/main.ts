import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setVant } from './config/setVant' // vant导入
import { store, key } from './store/index'

import 'lib-flexible/flexible' // px在h5自动转rem
import './index.css'
import 'vant/lib/index.css' // 全局引入样式
import './colorui/main.css'
import './colorui/icon.css'
import './mock' // mockjs
import "./utils/rem"

const app = createApp(App) // 创建实例

app.use(router)
app.use(store, key)

setVant(app)

app.mount('#app')
