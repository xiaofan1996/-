import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'
import vuex from './store/index'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
createApp(App).use(ElementPlus).use(vuex).use(router).mount('#app')
