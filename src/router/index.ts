import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { routers } from "@/router/routers";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routers,
});

export default router;
