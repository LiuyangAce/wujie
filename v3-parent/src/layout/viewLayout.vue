<template>
  <div class="view-layout">
    <el-container>
      <el-aside width="200px">
        <!-- <slot name="aside">Aside </slot> -->
        <el-menu>
          <template v-for="subItem in menuList" :key="subItem.path">
            <el-menu-item :index="item.route">
              <template #title>
                <span>{{ subItem.meta.title }}</span>
              </template>
            </el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-main>
        <slot></slot>
        <!-- <router-view></router-view> -->
      </el-main>
    </el-container>
  </div>
</template>

<script setup >
import { useRouter, useRoute } from 'vue-router';

defineProps({
  menuList: {
    type: Array,
    required: true,
    default: () => []
  }
})

const route = useRoute()

const subItemClick = (subItem) => {
  console.log("🚀 ~ file: viewLayout.vue:31 ~ subItemClick ~ subItem:", subItem)
  console.log(subItem);
}
</script>

<style scoped>
.view-layout {
  height: 100%;
  width: 100;
}

.el-container {
  height: 100%;
  width: 100%;
  outline: 1px solid black;
}

.el-aside {
  outline: 1px solid black;
}

.el-main {
  outline: 1px solid black;
}
</style>