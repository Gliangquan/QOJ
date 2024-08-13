<template>
  <div id="app">
    <template v-if="route.path.startsWith('/user')">
      <router-view />
    </template>
    <template v-else>
      <BasicLayout />
    </template>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<script setup>
import BasicLayout from "@/layouts/BasicLayout.vue";

import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// 全局初始化函数，有全局单次调用的代码都可以写在这里：
const doInit = () => {
  console.log("HelloWorld：欢迎来到我的项目");
};
onMounted(() => {
  doInit();
});
</script>
