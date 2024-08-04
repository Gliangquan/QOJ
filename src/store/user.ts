import { StoreOptions } from "vuex";

export default {
  mespace: true,

  state: () => ({
    loginUser: {
      userName: "未登录",
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
  // actions: {
  //   getLoginUser({ commit, state }, payload) {
  //     // 加载接口获取用户数据
  //     commit("updateUser", { userName: "liangquan" });
  //   },
  // },

  // 只有mutations才有修改state中的数据的权利
  // mutations: {
  //   updateUser(state, payload) {
  //     state.loginUser = payload;
  //   },
  // },

  // 改进
  mutations: {
    updateUser(state, payload: { userName: string }) {
      state.loginUser = { ...state.loginUser, ...payload };
    },
  },

  getters: {
    showUser(state) {
      return "当前登录的用户是：" + state.loginUser?.userName ?? "未登录";
    },
  },
} as StoreOptions<any>;
