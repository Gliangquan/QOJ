<template>
  <div id="userLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header"> 用户登录页面</a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">尾部</a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#userLayout {
}

#userLayout .header {
  margin-bottom: 16px;
  text-align: center;
}

#userLayout .content {
  background: linear-gradient(to right, #aaa, #fff);
  margin-bottom: 16px;
}

#userLayout .footer {
  background: #42b983;
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script setup></script>
