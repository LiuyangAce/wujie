<script setup>
import { reactive, ref } from "vue";
import WujieVue from 'wujie-vue3';
const { bus } = WujieVue


defineProps({
  msg: String,
});

const v3ChildUrl = ref("http://127.0.0.1:5176/");
const reactChildUrl = ref("http://127.0.0.1:5175/");

// const props = {
//   data: {
//     name: 'liuyang',
//     age: 12
//   },
//   methods: {
//     handleLog() {
//       console.log('这是传递给v3Child的方法');
//     }
//   }
// }
// 也可以传递响应式的数据
const props = reactive({
  data: {
    name: 'liuyang',
    age: 12
  },
  methods: {
    handleLog() {
      console.log('这是传递给v3Child的方法');
    }
  }
})


const onFnHandle = (val) => {
  console.log('in onFnHandle....', val);
}
// eventbus 通信
// bus.$on('onFn', onFnHandle)
bus.$once('onFn', onFnHandle)


const clickHandle = () => {
  bus.$emit('emitFn', 'emitFn msg')
}

</script>

<template>
  <button @click="clickHandle()">button</button>
  <WujieVue class="v3Class" name="v3-child" :url="v3ChildUrl" :props="props"></WujieVue>
  <WujieVue class="reactClass" name="react-child" :url="reactChildUrl"></WujieVue>
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
