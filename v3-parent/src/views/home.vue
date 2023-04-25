<template>
  <div>
    this is home.vue
    {{ obj }}
    {{ newObj }}
    <el-button @click="effect()">effect</el-button>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

// obj是响应式数据
const obj = reactive({ foo: 1, bar: 2 })

// newObj 对象下具有与 obj对象同名的属性，并且每个属性值都是一个对象
// 该对象具有一个访问器属性 value，当读取 value的值时，其实读取的是 obj 对象下相应的属性值 
const newObj = {
  foo: {
    get value() {
      return obj.foo
    }
  },
  bar: {
    get value() {
      return obj.bar
    }
  }
}

function effect() {
  console.log('in fun effect');
  // 正常触发响应
  obj.foo = 100
  // 在副作用函数内通过新对象 newObj 读取 foo 的属性值
  console.log(newObj.foo)
}


</script>

<style lang="scss" scoped></style>