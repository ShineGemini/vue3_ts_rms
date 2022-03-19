import JlRequest from "./request";

import localCache from "@/utils/cache";

const jlRequest = new JlRequest({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: Number(process.env.VUE_APP_TIME_OUT),
  interceptors: {
    requestInterceptor(config) {
      const token = localCache.getCache("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    requestInterceptorCatch(error) {
      return error;
    },
    responseInterceptor(result) {
      return result;
    },
    responseInterceptorCatch(error) {
      return error;
    }
  }
});

export { jlRequest };
