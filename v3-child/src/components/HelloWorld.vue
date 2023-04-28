<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)

console.log('wujie props传值:',window.$wujie?.props);

const clickHandle = () => {
  window.$wujie?.bus.$emit('onFn', 'onFn msg')
}

const emitFnHandle = (val) => {
  console.log('in emitFnHandle...', val);
}

window.$wujie?.bus.$on('emitFn', emitFnHandle)


const jumpToReactChild = () => {
  window.$wujie?.props.jump("reactChild")
}

</script>

<template>
  <button @click="jumpToReactChild()">跳转到reactChild</button>
  <button @click="clickHandle()">button</button>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
