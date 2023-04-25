<template>
  <div>reactChild</div>
    <!-- <WujieVue
      class="reactClass"
      width="100%"
      height="100%"
      name="react-child"
      :url="reactChildUrl"
    ></WujieVue> -->
</template>

<script setup>
import { ref } from "vue";

const reactChildUrl = ref("http://127.0.0.1:5174/");

</script>

<style lang="scss" scoped>
.reactClass {
  border: 5px solid black; 
}
</style>