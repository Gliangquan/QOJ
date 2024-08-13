import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";
// 导入自己写的axios
import "../src/plugins/axios";
// 全局权限管理
import "../src/access";

createApp(App).use(ArcoVue).use(store).use(router).mount("#app");
