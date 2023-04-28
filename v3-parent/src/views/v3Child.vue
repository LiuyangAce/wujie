<template>
    <WujieVue
      class="v3Class"
      name="v3-child"
      :url="v3ChildUrl"
      :props="{ jump }"
    ></WujieVue>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const v3ChildUrl = ref("http://127.0.0.1:5176/");

const router = useRouter()


const jump = (location) => {
  router.push(location)
}
</script>

<style scoped>
.v3Class {
  border: 5px solid black;
}
</style>