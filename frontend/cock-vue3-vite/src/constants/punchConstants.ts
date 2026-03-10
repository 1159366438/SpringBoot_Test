/**
 * 打卡相关常量
 * 管理打卡功能中使用的各种常量值，包括消息、状态、卡片和存储相关常量
 */
import { t } from '../locales'

export const PUNCH_CONSTANTS = {
  // 打卡消息
  MESSAGES: {
    SUCCESS: () => t('messages.punchSuccess', '打卡成功'),
    FAILED: () => t('messages.punchFailed', '打卡失败！'),
    ERROR: () => t('messages.punchError', '打卡时发生错误'),
    NETWORK_ERROR: () => t('messages.networkError', '网络异常，请稍后重试'),
    INVALID_USER: () => t('messages.invalidUser', '用户信息无效'),
    // 获取打卡记录相关消息
    FETCH_RECORDS_SUCCESS: () => t('messages.fetchRecordsSuccess', '获取打卡记录成功'),
    FETCH_RECORDS_FAILED: () => t('messages.fetchRecordsFailed', '获取打卡记录失败'),
    FETCH_RECORDS_ERROR: () => t('messages.fetchRecordsError', '获取打卡记录时发生错误'),
    NO_RECORDS_FOUND: () => t('messages.noRecordsFound', '暂无打卡记录'),
    RECORDS_LOAD_ERROR: () => t('messages.recordsLoadError', '加载打卡记录出错')
  },
  
  // 打卡状态
  STATUS: {
    PUNCHED: () => t('punchStatus.punched', '已打卡'),
    UNPUNCHED: () => t('punchStatus.unpunched', '未打卡'),
    SUCCESS: () => t('punchStatus.success', '正常'),
    LATE: () => t('punchStatus.late', '迟到'),
    ABSENT: () => t('punchStatus.absent', '缺勤')
  }
}

export const PUNCH_CARD_CONSTANTS = {
  // 文本内容
  TEXTS: {
    TODAY: () => t('menu.today', '今日打卡'),
    PUNCH_NOW: () => t('buttons.punchNow', '立即打卡'),
    ALREADY_PUNCHED: () => t('buttons.alreadyPunched', '已打卡'),
  },

  // 打卡状态文本
  STATUS: {
    PUNCHED: () => t('punchStatus.punched', '今日已打卡'),
    UNPUNCHED: () => t('punchStatus.unpunched', '今日未打卡'),
  },

  // 消息文本
  MESSAGES: {
    UNKNOWN_USER: () => t('messages.unknownUser', '未知用户'),
  }
}

export const PUNCH_STORE_CONSTANTS = {
  // 初始状态值
  INITIAL_STATE: {
    IS_PUNCHED: false,
    PUNCHED_TIME: '',
    LOADING: false,
    ERROR: '',
  },
  
  // 分页初始值
  PAGINATION: {
    TOTAL: 0,
    PAGE: 1,
    PAGES: 0,
  },
  
  // 默认参数值
  DEFAULT_PARAMS: {
    USER_ID: 1,
    PAGE: 1,
  },
  
  // 默认回退值
  FALLBACK_VALUES: {
    TOTAL: 0,
    PAGE: 1,
    PAGES: 1,
  }
}

// 页面名称常量
export const PAGE_NAMES = {
  PUNCH: () => t('pageTitles.punch', '打卡页面'),
  RECORD: () => t('pageTitles.record', '打卡记录'),
  USER: () => t('pageTitles.user', '用户中心'),
  SETTING: () => t('pageTitles.setting', '设置')
}