/**
 * Axios 实例配置
 * 配置API请求实例、拦截器和错误处理
 * @author Attendance System Team
 * @since 2026-03-15
 * @version v1.1.0-alpha.1
 */
import axios from 'axios'
import type { AxiosResponse, AxiosRequestConfig, AxiosInstance } from 'axios'
import { APP_CONFIG } from '../config/appConfig'
import { STATUS_CODES, API_ERROR_MESSAGES, MESSAGE_CONSTANTS } from '../constants'
import { ElMessage } from 'element-plus'
import { APP_CONSTANTS } from '../constants'
import type { ApiResponse } from '../types/api'

interface CustomAxiosInstance extends Omit<AxiosInstance, 'get' | 'post' | 'put' | 'delete' | 'patch' | 'request'> {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>>
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>>
  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>>
  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>>
  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>>
  request<T = any>(config: AxiosRequestConfig): Promise<ApiResponse<T>>
}

const axiosInstance = axios.create({
  baseURL: '/api',
  timeout: APP_CONFIG.API.TIMEOUT,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
axiosInstance.interceptors.request.use(
  config => {
    // 从localStorage获取JWT Token
    const token = localStorage.getItem(APP_CONSTANTS.USER.STORAGE_KEYS.AUTH_TOKEN)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    console.error('请求错误:', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
axiosInstance.interceptors.response.use(
  ((response: AxiosResponse) => {
    if (!response) {
      console.error('响应为空')
      return Promise.reject(new Error(MESSAGE_CONSTANTS.COMMON.UNKNOWN_ERROR()))
    }
    
    const res = response.data as ApiResponse

    if (res && res.code === STATUS_CODES.BUSINESS.SUCCESS) {
      return res
    } else {
      console.error('业务错误:', res ? (res.msg) : MESSAGE_CONSTANTS.COMMON.UNKNOWN_ERROR())
      return res
    }
  }) as any,
  error => {
    console.error('网络错误:', error)
    
    const apiResponse: ApiResponse = error.response?.data || {
      code: STATUS_CODES.BUSINESS.SERVER_ERROR,
      msg: API_ERROR_MESSAGES.NETWORK.REQUEST_FAILED(),
      data: null
    }
    
    const status = error.response?.status
    
    if (status === 401) {
      localStorage.removeItem('token')
      localStorage.removeItem(APP_CONSTANTS.USER.STORAGE_KEYS.AUTH_TOKEN)
      localStorage.removeItem(APP_CONSTANTS.USER.STORAGE_KEYS.IS_LOGGED_IN)
      ElMessage.error('认证失效，请重新登录')
      window.location.href = '/login'
      return Promise.reject(apiResponse)
    }
    
    if (status === 403) {
      const token = localStorage.getItem(APP_CONSTANTS.USER.STORAGE_KEYS.AUTH_TOKEN)
      if (!token) {
        localStorage.removeItem(APP_CONSTANTS.USER.STORAGE_KEYS.IS_LOGGED_IN)
        ElMessage.error('访问被拒绝，请重新登录')
        window.location.href = '/login'
      } else {
        ElMessage.error('您没有权限访问该资源')
      }
      return Promise.reject(apiResponse)
    }
    
    if (!error.response && error.request) {
      ElMessage.error(API_ERROR_MESSAGES.NETWORK.SERVER_UNAVAILABLE())
    } else {
      ElMessage.error(apiResponse.msg || API_ERROR_MESSAGES.NETWORK.REQUEST_FAILED())
    }
    
    return Promise.reject(apiResponse)
  }
)

export default axiosInstance as unknown as CustomAxiosInstance