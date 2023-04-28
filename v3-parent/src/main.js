import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vueRouter from './router';
import WujieVue from "wujie-vue3";
// const { setupApp, preloadApp } = WujieVue

// // const v3ChildUrl = ref("http://127.0.0.1:5176/");

// // preloadApp({
// //   name:"v3-child",
// //   url:v3ChildUrl
// // })

createApp(App).use(WujieVue).use(vueRouter).mount('#app')
