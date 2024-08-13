import { StoreOptions } from "vuex";
import accessEnum from "@/access/accessEnum";
import { UserControllerService } from "../../generated";
import AccessEnum from "@/access/accessEnum";

export default {
  mespace: true,

  state: () => ({
    loginUser: {
      userName: "未登录",
      // userRole: accessEnum.USER,
    },
  }),

  // 异步
  actions: {
    async getLoginUser(context, payload) {
      // 远程加载接口获取用户数据
      const res = await UserControllerService.getLoginUserUsingGet();
      if (res.code == 0) {
        // context就是 { commit, state }
        context.commit("updateUser", {
          ...context.state.loginUser,
          userRole: AccessEnum.USER,
        });
      } else {
        context.commit("updateUser", {
          userName: "未登录",
          userRole: accessEnum.NOT_LOGIN,
        });
      }
    },
  },

  // 只有mutations才有修改state中的数据的权利
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },

  // 改进
  // mutations: {
  //   updateUser(state, payload: { userName: string; userRole: string }) {
  //     state.loginUser = { ...state.loginUser, ...payload };
  //   },
  // },

  getters: {
    showUser(state) {
      return state.loginUser?.userName + state.loginUser?.userRole ?? "未登录";
    },
  },
} as StoreOptions<any>;
