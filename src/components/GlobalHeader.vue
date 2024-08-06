<template>
  <a-row id="globalHeader" align="center">
    <a-col flex="70px">
      <a-menu-item
        key="0"
        :style="{ padding: 0, marginRight: '38px' }"
        disabled
      >
        <div class="titleBar">
          <img class="logo" src="../assets/logo.png" alt="logo" />
          <div class="title">QOJ</div>
        </div>
      </a-menu-item>
    </a-col>
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectedKeys"
        @menu-item-click="doMenuClick"
      >
        <a-menu-item v-for="item in routers" :key="item.path">
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <div>{{ store.state.user?.loginUser?.userName ?? "未登录" }}</div>
      <!-- getters 使用-->
      <div>{{ store.getters.showUser }}</div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { routers } from "@/router/routers";
import router from "@/router";
import { ref } from "vue";
import { useStore } from "vuex";

// 默认主页
const selectedKeys = ref(["/"]);

// 路由跳转后，更新选中的菜单
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});

const doMenuClick = (key: string) => {
  router.push(key);
};

// 获取当前存储的用户信息
let store = useStore();
console.log(store.state.user.loginUser.userName);

setTimeout(() => {
  // dispatch是调用actions的异步的方法
  // 如果不需要异步直接获取mutations的方法使用 store.commit
  store.dispatch("getLoginUser", {
    userName: "quanquan",
  });
}, 1000);
</script>

<style scoped>
#globalHeader {
  margin-bottom: 16px;
  box-shadow: #eee 1px 1px 5px;
}

.titleBar {
  display: flex;
  align-items: center;
}

.logo {
  height: 48px;
}

.title {
  color: #42b983;
  margin-left: 16px;
}
</style>
