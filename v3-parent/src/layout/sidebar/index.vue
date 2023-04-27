<template>
  <div>
    <el-menu class="el-menu-vertical-demo" router>
      <el-menu-item v-for="route in routes" :key="route.path" :index="route.path">
        <router-link :to="route.path">{{ route.name }}</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, computed } from 'vue';

const route = useRoute();

const routes = computed(() => {
  return route.matched.map(record => {
    return {
      path: record.path,
      name: record.name
    };
  });
});

console.log(routes);

</script>

<style lang="scss" scoped></style>