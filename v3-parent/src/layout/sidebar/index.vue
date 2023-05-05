<template>
  <div>
    <el-menu 
      class="el-menu-vertical-demo"
      router
      :default-active="activePath"
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


// const path = router.currentRoute.value.fullPath
// const defaultActive = ref(path)

let activePath = ref(route.path)
console.log(activePath.value);


// let activePath = ref(router.currentRoute.value.fullPath)
// console.log(activePath.value);

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

// console.log(sidebarRouteOld);

const sidebarRouteNew = reactive(sidebarRouteOld[0])

// console.log(sidebarRouteNew);
// console.log(sidebarRouteNew[0].path);


</script>

<style lang="scss" scoped></style>