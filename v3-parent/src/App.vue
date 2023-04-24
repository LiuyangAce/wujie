<script >
import defalutLayout from '@/layout/defalutLayout.vue'
export default {
  components: {
    defalutLayout
  }
}
</script>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { computed } from 'vue';
// 全局路由参数
const route = useRoute()
console.log(defalutLayout);

// 当前
// const router = useRouter()

// console.log(router);
console.log(route);


const layout = computed(() => {
  return route.meta.layout
})


</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<style scoped>
</style>
