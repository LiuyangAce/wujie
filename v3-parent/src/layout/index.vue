<template>
  <el-container>
    <el-aside width="200px" class="sidebar-container">
      <sidebar />
    </el-aside>
    <el-main class="content-container">
      <router-view />
    </el-main>
  </el-container>
</template>

<script setup>
import sidebar from './sidebar/index.vue'

</script>

<style scoped></style>