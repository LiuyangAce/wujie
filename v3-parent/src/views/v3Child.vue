<template>
    <WujieVue
      class="v3Class"
      name="v3-child"
      :url="v3ChildUrl"
    ></WujieVue>
</template>

<script setup>
import { ref } from "vue";

const v3ChildUrl = ref("http://127.0.0.1:5176/");

</script>

<style scoped>
.v3Class {
  border: 5px solid black;
}
</style>