import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'




axios.defaults.headers['Content-type']= 'application/json';
axios.defaults.withCredentials = true;

window.app = createApp(App).use(store).use(router,axios)
app.config.globalProperties.$axios = axios 
app.mount('#app')


