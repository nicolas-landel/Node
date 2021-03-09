import { createApp } from 'vue'
import router from './router/routes'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

createApp(App).use(router).use(VueAxios, axios).mount('#app')
