<template>
    <WujieVue
      class="reactClass"
      name="react-child"
      :url="reactChildUrl"
    ></WujieVue>
</template>

<script setup>
import { ref } from "vue";

const reactChildUrl = ref("http://127.0.0.1:5175/");

</script>

<style scoped>
.reactClass {
  border: 5px solid black; 
}
</style>