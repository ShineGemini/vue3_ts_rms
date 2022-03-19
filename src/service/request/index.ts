import axios from "axios";
import type { AxiosInstance } from "axios";

import { ElLoading } from "element-plus";

import { JlRequestConfig } from "./type";
import { ILoadingInstance } from "element-plus/lib/el-loading/src/loading.type";

const SHOW_LOADING = true;

class JlRequest {
  instance: AxiosInstance;
  elLoading?: ILoadingInstance;
  isShowLoading: boolean = SHOW_LOADING;
  constructor(config: JlRequestConfig) {
    this.instance = axios.create(config);
    this.isShowLoading = config.isShowLoading ?? SHOW_LOADING;
    this.instance.interceptors.request.use(
      config.interceptors?.requestInterceptor,
      config.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      config.interceptors?.responseInterceptor,
      config.interceptors?.responseInterceptorCatch
    );
    this.instance.interceptors.request.use(
      (config) => {
        if (this.isShowLoading === true) {
          this.elLoading = ElLoading.service({
            text: "正在加载中，请稍后....",
            background: "rgba(0,0,0,.6)"
          });
        }

        return config;
      },
      (error) => {
        return error;
      }
    );
    this.instance.interceptors.response.use(
      (result) => {
        this.elLoading?.close();
        return result.data;
      },
      (error) => {
        return error;
      }
    );
  }

  request<T>(config: JlRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        this.isShowLoading = config.isShowLoading ?? SHOW_LOADING;
        config = config.interceptors.requestInterceptor(config);
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          this.isShowLoading = SHOW_LOADING;
          resolve(res);
        })
        .catch((err) => {
          this.isShowLoading = SHOW_LOADING;
          reject(err);
          return err;
        });
    });
  }
  get<T>(config: JlRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: "GET" });
  }
  post<T>(config: JlRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: "POST" });
  }
  delete<T>(config: JlRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: "DELETE" });
  }
  patch<T>(config: JlRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: "PATCH" });
  }
}

export default JlRequest;
