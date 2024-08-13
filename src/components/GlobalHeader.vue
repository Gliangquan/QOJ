<template>
  <!--  :wrap="false": 关闭换行，避免窗口过窄时，用户名区域换行-->
  <a-row id="globalHeader" align="center" :wrap="false">
    <a-col flex="70px">
      <a-menu-item
        key="0"
        :style="{ padding: 0, marginRight: '38px' }"
        disabled
      >
        <div class="titleBar">
          <img class="logo" src="../assets/logo.png" alt="logo" />
          <div class="title">qoj</div>
        </div>
      </a-menu-item>
    </a-col>
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectedKeys"
        @menu-item-click="doMenuClick"
      >
        <a-menu-item v-for="item in visibleRouters" :key="item.path">
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
import { compile, computed, ref } from "vue";
import { useStore } from "vuex";
import chickAccess from "@/access/chickAccess";
import accessEnum from "@/access/accessEnum";

// 获取当前存储的用户信息
const store = useStore();

// 需要显示的路由
// const visibleRouters = routers.filter((item, index) => {
//   if (item.meta?.hideInMenu) {
//     return false;
//   }
//   if (!chickAccess(loginUser, item?.meta?.access as string)) {
//     console.log(item?.meta?.access);
//     return false;
//   }
//   return true;
// });
// 增加computed，变化时刷新visibleRouters的值，对于数据进行二次计算
const visibleRouters = computed(() => {
  return routers.filter((item, index) => {
    if (item.meta?.hideInMenu) {
      return false;
    }
    if (
      !chickAccess(store.state.user.loginUser, item?.meta?.access as string)
    ) {
      return false;
    }
    return true;
  });
});

// 默认主页
const selectedKeys = ref(["/"]);

// 路由跳转后，更新选中的菜单
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});

const doMenuClick = (key: string) => {
  router.push(key);
};

setTimeout(() => {
  // dispatch是调用actions的异步的方法
  // 如果不需要异步直接获取mutations的方法使用 store.commit
  store.dispatch("getLoginUser", {
    userName: "111",
    userRole: accessEnum.ADMIN,
  });
}, 3000);
</script>

<style scoped>
#globalHeader {
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
