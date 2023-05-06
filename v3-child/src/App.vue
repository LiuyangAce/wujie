<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';

  const router = useRouter()


  const handleJump = (path: string)=> {
    router.push({ path })
  }

  console.log(window);

  // 子应用 B 监听并跳转
  window.$wujie?.bus.$on("routeChange", handleJump);



</script>

<template>
  <button @click="handleJump('/2')">werqew</button>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
