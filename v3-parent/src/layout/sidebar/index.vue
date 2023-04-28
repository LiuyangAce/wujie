<template>
  <div>
    <el-menu 
      class="el-menu-vertical-demo"
      router
      default-active="/childList/home"
      >
      <el-menu-item v-for="route in sidebarRouteNew" :key="route.path" :index="route.path">
        <span>{{ route.name }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, computed, reactive, onMounted } from 'vue';


const route = useRoute();
const router = useRouter();


// console.log(route);
// console.log(router.options.routes);



const sidebarRouteOld = router.options.routes.map(route => {
  if (Object.keys(route).includes('children')) {
    return route.children.map(innerRoute => {
      return {
        path: `${route.path}/${innerRoute.path}`,
        name: innerRoute.name
      }
    })
  } else {
    return []
  }
})

console.log(sidebarRouteOld);

const sidebarRouteNew = reactive(sidebarRouteOld[0])

console.log(sidebarRouteNew);
// console.log(sidebarRouteNew[0].path);

// 这里设置的嵌套路由 
// 所以要用驼峰命名法 拼接父name和子name
const activeName = computed(() => {
  return sidebarRouteNew[0].name
})

// console.log(activeName);


</script>

<style lang="scss" scoped></style>