/**
 * 部门状态管理模块
 * 管理部门列表、部门树、部门操作等
 * @author Attendance System Team
 * @since 2026-03-21
 * @version v1.1.0-alpha.1
 */
import { defineStore } from 'pinia'
import departmentApi from '../../api/departmentApi'
import type { Department, Employee } from '../../types'
import { APP_CONSTANTS, STATUS_CODES, MESSAGE_CONSTANTS, STORE_NAMES } from '../../constants'

export const useDepartmentStore = defineStore(STORE_NAMES.DEPARTMENT, {
  state: () => ({
    departments: [] as Department[],
    departmentTree: [] as Department[],
    selectedDepartment: null as Department | null,
    employees: [] as Employee[],
    loading: APP_CONSTANTS.BOOLEAN.FALSE,
    error: ''
  }),
  
  getters: {
    // 获取所有部门
    allDepartments: (state) => state.departments,
    
    // 获取部门树
    departmentTreeData: (state) => state.departmentTree,
    
    // 获取选中部门
    currentSelectedDepartment: (state) => state.selectedDepartment,
    
    // 获取部门员工
    departmentEmployees: (state) => state.employees,
    
    // 检查是否正在加载
    isLoading: (state) => state.loading,
    
    // 检查是否有错误
    hasError: (state) => !!state.error
  },
  
  actions: {
    // 获取部门列表
    async fetchDepartments(params: { name?: string; page: number; size: number } = { page: 1, size: 10 }) {
      this.loading = APP_CONSTANTS.BOOLEAN.TRUE
      this.error = ''
      try {
        const res = await departmentApi.getDepartments(params)
        
        // 检查响应状态
        if (res.code !== STATUS_CODES.BUSINESS.SUCCESS) {
          switch (res.code) {
            case STATUS_CODES.BUSINESS.PARAM_ERROR:
            case 400:
              throw new Error(MESSAGE_CONSTANTS.DEPARTMENT.PARAM_ERROR())
              
            case STATUS_CODES.BUSINESS.AUTH_FAILED:
            case 401:
              localStorage.removeItem(APP_CONSTANTS.USER.STORAGE_KEYS.IS_LOGGED_IN)
              localStorage.removeItem(APP_CONSTANTS.USER.STORAGE_KEYS.AUTH_TOKEN)
              throw new Error(MESSAGE_CONSTANTS.USER_INFO.AUTH_FAILED())
              
            case STATUS_CODES.BUSINESS.SERVER_ERROR:
            case 500:
              throw new Error(MESSAGE_CONSTANTS.COMMON.SERVER_ERROR())
              
            default:
              throw new Error(res.msg || MESSAGE_CONSTANTS.DEPARTMENT.FETCH_LIST_ERROR())
          }
        }
        
        if (res.data) {
          this.departments = res.data.records || []
        }
        
        return APP_CONSTANTS.BOOLEAN.TRUE
      } catch (error: any) {
        this.error = error.message || MESSAGE_CONSTANTS.DEPARTMENT.FETCH_LIST_ERROR()
        return APP_CONSTANTS.BOOLEAN.FALSE
      } finally {
        this.loading = APP_CONSTANTS.BOOLEAN.FALSE
      }
    },
    
    // 获取部门详情
    async fetchDepartmentById(id: number) {
      this.loading = APP_CONSTANTS.BOOLEAN.TRUE
      this.error = ''
      try {
        const res = await departmentApi.getDepartmentById(id)
        
        // 检查响应状态
        if (res.code !== STATUS_CODES.BUSINESS.SUCCESS) {
          switch (res.code) {
            case STATUS_CODES.BUSINESS.RESOURCE_NOT_FOUND:
            case 404:
              throw new Error(MESSAGE_CONSTANTS.DEPARTMENT.NOT_FOUND())
              
            case STATUS_CODES.BUSINESS.AUTH_FAILED:
            case 401:
              localStorage.removeItem(APP_CONSTANTS.USER.STORAGE_KEYS.IS_LOGGED_IN)
              localStorage.removeItem(APP_CONSTANTS.USER.STORAGE_KEYS.AUTH_TOKEN)
              throw new Error(MESSAGE_CONSTANTS.USER_INFO.AUTH_FAILED())
              
            case STATUS_CODES.BUSINESS.SERVER_ERROR:
            case 500:
              throw new Error(MESSAGE_CONSTANTS.COMMON.SERVER_ERROR())
              
            default:
              throw new Error(res.msg || MESSAGE_CONSTANTS.DEPARTMENT.FETCH_DETAIL_ERROR())
          }
        }
        
        if (res.data) {
          this.selectedDepartment = res.data
        }
        
        return APP_CONSTANTS.BOOLEAN.TRUE
      } catch (error: any) {
        this.error = error.message || MESSAGE_CONSTANTS.DEPARTMENT.FETCH_DETAIL_ERROR()
        return APP_CONSTANTS.BOOLEAN.FALSE
      } finally {
        this.loading = APP_CONSTANTS.BOOLEAN.FALSE
      }
    },
    
    // 创建部门
    async createDepartment(data: { name: string; description?: string; managerId?: number; parentId?: number }) {
      this.loading = APP_CONSTANTS.BOOLEAN.TRUE
      this.error = ''
      try {
        const res = await departmentApi.createDepartment(data)
        
        // 检查响应状态
        if (res.code !== STATUS_CODES.BUSINESS.SUCCESS) {
          switch (res.code) {
            case STATUS_CODES.BUSINESS.PARAM_ERROR:
            case 400:
              throw new Error(MESSAGE_CONSTANTS.DEPARTMENT.PARAM_ERROR())
              
            case STATUS_CODES.BUSINESS.AUTH_FAILED:
            case 401:
              localStorage.removeItem(APP_CONSTANTS.USER.STORAGE_KEYS.IS_LOGGED_IN)
              localStorage.removeItem(APP_CONSTANTS.USER.STORAGE_KEYS.AUTH_TOKEN)
              throw new Error(MESSAGE_CONSTANTS.USER_INFO.AUTH_FAILED())
              
            case STATUS_CODES.BUSINESS.SERVER_ERROR:
            case 500:
              throw new Error(MESSAGE_CONSTANTS.COMMON.SERVER_ERROR())
              
            default:
              throw new Error(res.msg || MESSAGE_CONSTANTS.DEPARTMENT.CREATE_ERROR())
          }
        }
        
        if (res.data) {
          this.departments.push(res.data)
        }
        
        return APP_CONSTANTS.BOOLEAN.TRUE
      } catch (error: any) {
        this.error = error.message || MESSAGE_CONSTANTS.DEPARTMENT.CREATE_ERROR()
        return APP_CONSTANTS.BOOLEAN.FALSE
      } finally {
        this.loading = APP_CONSTANTS.BOOLEAN.FALSE
      }
    },
    
    // 更新部门
    async updateDepartment(id: number, data: { name?: string; description?: string; managerId?: number; parentId?: number }) {
      this.loading = APP_CONSTANTS.BOOLEAN.TRUE
      this.error = ''
      try {
        const res = await departmentApi.updateDepartment(id, data)
        
        // 检查响应状态
        if (res.code !== STATUS_CODES.BUSINESS.SUCCESS) {
          switch (res.code) {
            case STATUS_CODES.BUSINESS.PARAM_ERROR:
            case 400:
              throw new Error(MESSAGE_CONSTANTS.DEPARTMENT.PARAM_ERROR())
              
            case STATUS_CODES.BUSINESS.RESOURCE_NOT_FOUND:
            case 404:
              throw new Error(MESSAGE_CONSTANTS.DEPARTMENT.NOT_FOUND())
              
            case STATUS_CODES.BUSINESS.AUTH_FAILED:
            case 401:
              localStorage.removeItem(APP_CONSTANTS.USER.STORAGE_KEYS.IS_LOGGED_IN)
              localStorage.removeItem(APP_CONSTANTS.USER.STORAGE_KEYS.AUTH_TOKEN)
              throw new Error(MESSAGE_CONSTANTS.USER_INFO.AUTH_FAILED())
              
            case STATUS_CODES.BUSINESS.SERVER_ERROR:
            case 500:
              throw new Error(MESSAGE_CONSTANTS.COMMON.SERVER_ERROR())
              
            default:
              throw new Error(res.msg || MESSAGE_CONSTANTS.DEPARTMENT.UPDATE_ERROR())
          }
        }
        
        if (res.data) {
          const index = this.departments.findIndex(dept => dept.id === id)
          if (index !== -1) {
            this.departments[index] = res.data
          }
          
          if (this.selectedDepartment && this.selectedDepartment.id === id) {
            this.selectedDepartment = res.data
          }
        }
        
        return APP_CONSTANTS.BOOLEAN.TRUE
      } catch (error: any) {
        this.error = error.message || MESSAGE_CONSTANTS.DEPARTMENT.UPDATE_ERROR()
        return APP_CONSTANTS.BOOLEAN.FALSE
      } finally {
        this.loading = APP_CONSTANTS.BOOLEAN.FALSE
      }
    },
    
    // 删除部门
    async deleteDepartment(id: number) {
      this.loading = APP_CONSTANTS.BOOLEAN.TRUE
      this.error = ''
      try {
        const res = await departmentApi.deleteDepartment(id)
        
        // 检查响应状态
        if (res.code !== STATUS_CODES.BUSINESS.SUCCESS) {
          switch (res.code) {
            case STATUS_CODES.BUSINESS.RESOURCE_NOT_FOUND:
            case 404:
              throw new Error(MESSAGE_CONSTANTS.DEPARTMENT.NOT_FOUND())
              
            case STATUS_CODES.BUSINESS.AUTH_FAILED:
            case 401:
              localStorage.removeItem(APP_CONSTANTS.USER.STORAGE_KEYS.IS_LOGGED_IN)
              localStorage.removeItem(APP_CONSTANTS.USER.STORAGE_KEYS.AUTH_TOKEN)
              throw new Error(MESSAGE_CONSTANTS.USER_INFO.AUTH_FAILED())
              
            case STATUS_CODES.BUSINESS.SERVER_ERROR:
            case 500:
              throw new Error(MESSAGE_CONSTANTS.COMMON.SERVER_ERROR())
              
            default:
              throw new Error(res.msg || MESSAGE_CONSTANTS.DEPARTMENT.DELETE_ERROR())
          }
        }
        
        // 从部门列表中移除已删除的部门
        this.departments = this.departments.filter(dept => dept.id !== id)
        
        // 如果当前选中的部门被删除，清空选中状态
        if (this.selectedDepartment && this.selectedDepartment.id === id) {
          this.selectedDepartment = null
        }
        
        return APP_CONSTANTS.BOOLEAN.TRUE
      } catch (error: any) {
        this.error = error.message || MESSAGE_CONSTANTS.DEPARTMENT.DELETE_ERROR()
        return APP_CONSTANTS.BOOLEAN.FALSE
      } finally {
        this.loading = APP_CONSTANTS.BOOLEAN.FALSE
      }
    },
    
    // 获取部门员工
    async fetchDepartmentEmployees(departmentId: number) {
      this.loading = APP_CONSTANTS.BOOLEAN.TRUE
      this.error = ''
      try {
        const res = await departmentApi.getDepartmentEmployees(departmentId)
        
        // 检查响应状态
        if (res.code !== STATUS_CODES.BUSINESS.SUCCESS) {
          switch (res.code) {
            case STATUS_CODES.BUSINESS.RESOURCE_NOT_FOUND:
            case 404:
              throw new Error(MESSAGE_CONSTANTS.DEPARTMENT.NOT_FOUND())
              
            case STATUS_CODES.BUSINESS.AUTH_FAILED:
            case 401:
              localStorage.removeItem(APP_CONSTANTS.USER.STORAGE_KEYS.IS_LOGGED_IN)
              localStorage.removeItem(APP_CONSTANTS.USER.STORAGE_KEYS.AUTH_TOKEN)
              throw new Error(MESSAGE_CONSTANTS.USER_INFO.AUTH_FAILED())
              
            case STATUS_CODES.BUSINESS.SERVER_ERROR:
            case 500:
              throw new Error(MESSAGE_CONSTANTS.COMMON.SERVER_ERROR())
              
            default:
              throw new Error(res.msg || MESSAGE_CONSTANTS.DEPARTMENT.FETCH_EMPLOYEES_ERROR())
          }
        }
        
        if (res.data) {
          this.employees = res.data
        }
        
        return APP_CONSTANTS.BOOLEAN.TRUE
      } catch (error: any) {
        this.error = error.message || MESSAGE_CONSTANTS.DEPARTMENT.FETCH_EMPLOYEES_ERROR()
        return APP_CONSTANTS.BOOLEAN.FALSE
      } finally {
        this.loading = APP_CONSTANTS.BOOLEAN.FALSE
      }
    },
    
    // 获取子部门列表（用于懒加载树形结构）
    async fetchChildDepartments(parentId: number | null) {
      this.loading = APP_CONSTANTS.BOOLEAN.TRUE
      this.error = ''
      try {
        const res = await departmentApi.getChildDepartments(parentId)
        
        // 检查响应状态
        if (res.code !== STATUS_CODES.BUSINESS.SUCCESS) {
          switch (res.code) {
            case STATUS_CODES.BUSINESS.AUTH_FAILED:
            case 401:
              localStorage.removeItem(APP_CONSTANTS.USER.STORAGE_KEYS.IS_LOGGED_IN)
              localStorage.removeItem(APP_CONSTANTS.USER.STORAGE_KEYS.AUTH_TOKEN)
              throw new Error(MESSAGE_CONSTANTS.USER_INFO.AUTH_FAILED())
              
            case STATUS_CODES.BUSINESS.SERVER_ERROR:
            case 500:
              throw new Error(MESSAGE_CONSTANTS.COMMON.SERVER_ERROR())
              
            default:
              throw new Error(res.msg || MESSAGE_CONSTANTS.DEPARTMENT.FETCH_CHILDREN_ERROR())
          }
        }
        
        if (res.data) {
          return res.data
        }
        
        return []
      } catch (error: any) {
        this.error = error.message || MESSAGE_CONSTANTS.DEPARTMENT.FETCH_CHILDREN_ERROR()
        return []
      } finally {
        this.loading = APP_CONSTANTS.BOOLEAN.FALSE
      }
    },
    
    // 加载部门树数据
    async loadDepartmentTree(parentId: number | null = null) {
      this.loading = APP_CONSTANTS.BOOLEAN.TRUE
      this.error = ''
      try {
        const res = await departmentApi.getChildDepartments(parentId)
        
        // 检查响应状态
        if (res.code !== STATUS_CODES.BUSINESS.SUCCESS) {
          switch (res.code) {
            case STATUS_CODES.BUSINESS.AUTH_FAILED:
            case 401:
              localStorage.removeItem(APP_CONSTANTS.USER.STORAGE_KEYS.IS_LOGGED_IN)
              localStorage.removeItem(APP_CONSTANTS.USER.STORAGE_KEYS.AUTH_TOKEN)
              throw new Error(MESSAGE_CONSTANTS.USER_INFO.AUTH_FAILED())
              
            case STATUS_CODES.BUSINESS.SERVER_ERROR:
            case 500:
              throw new Error(MESSAGE_CONSTANTS.COMMON.SERVER_ERROR())
              
            default:
              throw new Error(res.msg || MESSAGE_CONSTANTS.DEPARTMENT.FETCH_CHILDREN_ERROR())
          }
        }
        
        if (res.data) {
          if (parentId === null) {
            this.departmentTree = res.data
          }
          return res.data
        }
        
        return []
      } catch (error: any) {
        this.error = error.message || MESSAGE_CONSTANTS.DEPARTMENT.FETCH_CHILDREN_ERROR()
        return []
      } finally {
        this.loading = APP_CONSTANTS.BOOLEAN.FALSE
      }
    },
    
    // 设置选中的部门
    setSelectedDepartment(department: Department | null) {
      this.selectedDepartment = department
    },
    
    // 清空部门员工列表
    clearEmployees() {
      this.employees = []
    },
    
    // 清空错误信息
    clearError() {
      this.error = ''
    }
  }
})