// 全局权限管理 / 获取登录态
import router from "@/router";
import store from "@/store";
import accessEnum from "@/access/accessEnum";
import { isDefined } from "../../generated/core/request";
import chickAccess from "@/access/chickAccess";

router.beforeEach(async (to, from, next) => {
  console.log("当前登录的用户信息：", store.state.user.loginUser);

  const loginUser = store.state.user.loginUser;
  // 如果之前没有登录过，自动登录
  if (!loginUser || !loginUser.userRole) {
    await store.dispatch("getLoginUser", {});
  }
  const needAccess = to.meta?.access ?? accessEnum.NOT_LOGIN;
  // 页面必须要登录
  if (needAccess !== accessEnum.NOT_LOGIN) {
    //如果没登录，跳转到登录页面
    console.log(loginUser.userRole);
    if (!loginUser || !loginUser.userRole) {
      next(`/user/login?${to.fullPath}`);
      return;
    }
    // 如果已经登录了，判断是否需要管理员权限
    if (!chickAccess(loginUser, needAccess as string)) {
      next("/noAuth");
      return;
    }
  }
  next();
  console.log("当前登录的用户信息：", store.state.user.loginUser);
});
