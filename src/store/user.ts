import { StoreOptions } from "vuex";
import accessEnum from "@/access/accessEnum";

export default {
  mespace: true,

  state: () => ({
    loginUser: {
      userName: "未登录",
      userRole: accessEnum.USER,
    },
  }),

  // 异步
  actions: {
    getLoginUser(context, payload) {
      // 加载接口获取用户数据
      // context就是 { commit, state }
      context.commit("updateUser", payload);
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
