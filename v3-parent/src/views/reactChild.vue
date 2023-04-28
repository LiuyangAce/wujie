<template>
    <WujieVue
      class="reactClass"
      name="react-child"
      :url="reactChildUrl"
      :props="{ jump }"
    ></WujieVue>
</template>

<script setup>
import { ref } from "vue";

const reactChildUrl = ref("http://127.0.0.1:5175/");

const jump = (location) => {
  router.push({location})
}

</script>

<style scoped>
.reactClass {
  border: 5px solid black; 
}
</style>