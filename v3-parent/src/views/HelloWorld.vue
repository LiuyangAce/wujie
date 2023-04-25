<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const v3ChildUrl = ref("http://127.0.0.1:5176/");
const reactChildUrl = ref("http://127.0.0.1:5175/");
</script>

<template>
    <WujieVue
      class="v3Class"

      name="v3-child"
      :url="v3ChildUrl"
    ></WujieVue>
    <WujieVue
      class="reactClass"

      name="react-child"
      :url="reactChildUrl"
    ></WujieVue>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.v3Class {
  border: 5px solid black;
  /* width: 50%;
  height: 50%; */
}
.reactClass {
  border: 5px solid black; 
  /* width: 50%;
  height: 50%; */
}
</style>
