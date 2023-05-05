<template>
    <WujieVue
      class="reactClass"
      name="react-child"
      :url="reactChildUrl"
      :props="{ jump }"
      :sync="true"
    ></WujieVue>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, onBeforeRouteUpdate } from "vue-router";

const reactChildUrl = ref("http://127.0.0.1:5175/");

const jump = (location) => {
  router.push(location)
}

const state = history.state
onBeforeRouteUpdate((to, from, next) => {
  history.replaceState({ ...state }, '')
  next()
})

</script>

<style scoped>
.reactClass {
  border: 5px solid black; 
}
</style>