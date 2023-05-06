<template>
    <el-button @click="handleSync">sync</el-button>
    <WujieVue
      class="reactClass"
      name="react-child"
      :url="reactChildUrl"
      :props="{ jump }"
      :sync="sync"
    ></WujieVue>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, onBeforeRouteUpdate } from "vue-router";

import WujieVue from "wujie-vue3";
const { setupApp,preloadApp } = WujieVue

const reactChildUrl = ref("http://127.0.0.1:5175/");

setupApp({
  name: "react-child",
  url: reactChildUrl,
  alive: true
})
preloadApp({
  name: "react-child",
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

let sync = ref(false)
const handleSync = () => {
  sync = !sync
}

</script>

<style scoped>
.reactClass {
  border: 5px solid black; 
}
</style>