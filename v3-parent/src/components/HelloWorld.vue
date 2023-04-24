<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const v3ChildUrl = ref("http://127.0.0.1:5176/");
const reactChildUrl = ref("http://127.0.0.1:5174/");
</script>

<template>
  <div>
    <WujieVue
      class="v3Class"
      width="100%"
      height="100%"
      name="v3-child"
      :url="v3ChildUrl"
    ></WujieVue>
  </div>
  <el-button>Default</el-button>
  <div>
    <WujieVue
      class="reactClass"
      width="100%"
      height="100%"
      name="react-child"
      :url="reactChildUrl"
    ></WujieVue>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.v3Class {
  border: 5px solid black;
}
.reactClass {
  border: 5px solid black; 
}
</style>
