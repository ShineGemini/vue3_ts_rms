import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface JlInterceptors<T> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (result: T) => T;
  responseInterceptorCatch?: (error: any) => any;
}

export interface JlRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: JlInterceptors<T>;
  isShowLoading?: boolean;
}
