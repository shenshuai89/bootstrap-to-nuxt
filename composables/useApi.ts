// composables/useApi.ts

import type { FetchOptions, ResponseType } from 'ofetch';

// ======================
// 定义通用响应结构
// ======================
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  code?: number;
}

// ======================
// 请求配置扩展（可选）
// ======================
interface UseApiOptions<T> extends Omit<FetchOptions, 'body'> {
  body?: T;
  options?: any;
  responseType?: ResponseType;
  baseURL?: string;
}

// ======================
// 统一错误处理
// ======================
const handleResponseError = (error: any) => {
  const message = error?.data?.message || error?.statusText || '请求失败';
  console.error('[API Error]:', error);
  throw new Error(message);
};

// ======================
// 核心 API 函数
// ======================
export function useApi<T = any, R = any>(url: string, options: UseApiOptions<T> = {}) {
  const config = useRuntimeConfig();
  const token = useCookie('token'); // 假设使用 cookie 存储 token

  // 默认配置
  const defaultOptions: UseApiOptions<T> = {
    baseURL: (config.public.apiBase as string) || '/api',
    headers: {
      'Content-Type': 'application/json',
      ...(token.value ? { Authorization: `Bearer ${token.value}` } : {}),
    },
    onResponse: (_ctx) => {
      // 可在这里拦截响应，比如刷新 token
    },
    onResponseError: handleResponseError,
  };

  // 合并配置
  const fetchOptions: any = { ...defaultOptions, ...options };

  // 如果是 body 请求（POST/PUT），转换 headers
  if (options.body && ['POST', 'PUT', 'PATCH'].includes(options.method || '')) {
    fetchOptions.body = options.body;
  }

  // 使用 useFetch 发起请求
  return new Promise((resolve, reject) => {
    useFetch(url, fetchOptions)
      .then((response) => {
        if (response.data && response.data.value) {
          resolve(response.data.value as R);
        } else {
          console.log('request error' + url, response);
          if (import.meta.client) {
            console.error('client error' + url, response);
          } else {
            console.log('myError', response.data);
          }
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function apiGet(url: string, params: any, options?: any) {
  return useApi(url, {
    method: 'GET',
    params: params,
    options: options,
  });
}
export function apiPost(url: string, data: any, options?: any) {
  return useApi(url, {
    method: 'POST',
    body: data,
    options: options,
  });
}
export function apiPut(url: string, data: any, options?: any) {
  return useApi(url, {
    method: 'PUT',
    body: data,
    options: options,
  });
}
export function apiDelete(url: string, params: any, options?: any) {
  return useApi(url, {
    method: 'DELETE',
    params: params,
    options: options,
  });
}
