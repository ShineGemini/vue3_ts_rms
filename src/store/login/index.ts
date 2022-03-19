import { Module } from "vuex";
import router from "@/router";
import { RootStateType } from "../types";
import { LoginStateType } from "./types";
import {
  accountLoginRequest,
  userInfoRequest,
  userMenuRequest
} from "@/service/login";
import { AccountLoginType } from "@/service/login/types";
import localCache from "@/utils/cache";
import menuToRoute, { jurisdictionList } from "@/utils/menuToRoute";

const loginModule: Module<LoginStateType, RootStateType> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: [],
      permissionList: []
    };
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    },
    changeUserInfo(state, payload: any) {
      state.userInfo = payload;
    },
    changeUserMenus(state, payload: any) {
      state.userMenus = payload;
      const menusInfo = menuToRoute(payload);
      menusInfo.forEach((item) => {
        router.addRoute("main", item);
      });
      const permissionList = jurisdictionList(payload);
      state.permissionList = permissionList;
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: AccountLoginType) {
      const loginResult = await accountLoginRequest(payload);
      const { id, token } = loginResult.data;
      commit("changeToken", token);
      localCache.setCache("token", token);
      dispatch("getInitDataAction", null, { root: true });
      const userInfoResult = await userInfoRequest(id);
      commit("changeUserInfo", userInfoResult.data);
      localCache.setCache("userInfo", userInfoResult.data);
      const userMenuResult = await userMenuRequest(id);
      commit("changeUserMenus", userMenuResult.data);
      localCache.setCache("userMenus", userMenuResult.data);
      router.push("/main");
    },
    uploadAction({ commit, dispatch }) {
      const token = localCache.getCache("token");
      if (token) {
        commit("changeToken", token);
        dispatch("getInitDataAction", null, { root: true });
      }
      const userInfo = localCache.getCache("userInfo");
      if (userInfo) {
        commit("changeUserInfo", userInfo);
      }
      const userMenus = localCache.getCache("userMenus");
      if (userMenus) {
        commit("changeUserMenus", userMenus);
      }
    }
  }
};

export default loginModule;
