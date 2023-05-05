<template>
    <WujieVue
      class="v3Class"
      name="v3-child"
      :url="v3ChildUrl"
      :props="{ jump }"
      :sync="true"
    ></WujieVue>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, onBeforeRouteUpdate } from "vue-router";

const v3ChildUrl = ref("http://127.0.0.1:5176/");

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


</script>

<style scoped>
.v3Class {
  border: 5px solid black;
}
</style>