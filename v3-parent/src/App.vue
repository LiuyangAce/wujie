<script >
import defalutLayout from '@/layout/defalutLayout.vue'
import viewLayout from '@/layout/viewLayout.vue';
import layout from '@/layout/index.vue';
export default {
  components: {
    defalutLayout,
    viewLayout,
    layout
  }
}
</script>

<script setup>
import HelloWorld from './views/HelloWorld.vue';
import { useRouter, useRoute } from 'vue-router';
import { computed, ref } from 'vue';
// 当前路由参数
const route = useRoute()
console.log("当前:", route)

// 全局
const router = useRouter()  
console.log('全局:', router);


const layout = computed(() => {
  return route.meta.layout
})

console.log("🚀", route.meta)


</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
  <!-- <HelloWorld></HelloWorld> -->
</template>

<style scoped>
</style>
