<script >
import defalutLayout from '@/layout/defalutLayout.vue'
import viewLayout from '@/layout/viewLayout.vue';
export default {
  components: {
    defalutLayout,
    viewLayout
  }
}
</script>

<script setup>
import HelloWorld from './views/HelloWorld.vue';
import { useRouter, useRoute } from 'vue-router';
import { computed, ref } from 'vue';
// 当前路由参数
const route = useRoute()
// console.log("🚀 当前:", route, route.name)

// 全局
const router = useRouter()  
// console.log('全局:', router);


const layout = computed(() => {
  return route.meta.layout
})

const menuList = ref([{},{}])

</script>

<template>
  <!-- <component :is="layout" :menuList="menuList">
    <router-view />
  </component> -->
  <HelloWorld></HelloWorld>
</template>

<style scoped>
</style>
