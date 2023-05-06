<template>
    <el-button @click="handleSync">sync</el-button>
    <WujieVue
      class="v3Class"
      name="v3-child"
      :url="v3ChildUrl"
      :props="{ jump }"
      :sync="sync"
    ></WujieVue>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, onBeforeRouteUpdate } from "vue-router";

import WujieVue from "wujie-vue3";
const { setupApp,preloadApp } = WujieVue

const v3ChildUrl = ref("http://127.0.0.1:5176/");

setupApp({
  name: "v3-child",
  url: v3ChildUrl,
  alive: true
})
preloadApp({
  name: "v3-child",
})

const router = useRouter()


const jump = (location) => {
  router.push(location)
}

const state = history.state
onBeforeRouteUpdate((to, from, next) => {
  history.replaceState({ ...state }, '')
  next()
})

// 子应用 B 监听并跳转
// window.$wujie?.bus.$on("routeChange", a);
// const a = (path) => {
//   console.log('xxxxxxxxxxbbbbbbbbbb');
//   router.push({ path })
// }


let sync = ref(false)
const handleSync = () => {
  sync = !sync
}

</script>

<style scoped>
.v3Class {
  border: 5px solid black;
}
</style>