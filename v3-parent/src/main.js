import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vueRouter from './router';
import WujieVue from "wujie-vue3";


createApp(App).use(WujieVue).use(vueRouter).mount('#app')
