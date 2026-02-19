/**
 * 菜单文本管理模块
 * 统一管理系统所有菜单的显示文本、类型约束及工具方法
 * 键说明：与el-menu组件的index属性一一对应
 */

// 核心：菜单文本映射常量（只读，防止外部修改）
export const MENU_TEXT_MAP = {
  // 系统级菜单
  system: '员工内网',
  // 考勤系统子菜单
  systemName: '考勤系统',
  // 考勤系统子项
  today: '今日打卡',
  record: '打卡记录',
  // 其他示例菜单
  '2': 'Navigator Two', // 二级导航
  '3': 'Navigator Three', // 三级导航
  '4': 'Navigator Four' // 四级导航
} as const;

// 类型约束：菜单Key类型（严格限定为映射表的键）
export type MenuKey = keyof typeof MENU_TEXT_MAP;

// 类型约束：菜单文本类型（严格限定为映射表的值）
export type MenuText = (typeof MENU_TEXT_MAP)[MenuKey];

/**
 * 根据菜单Key获取对应的显示文本
 * @param key 菜单索引（支持字符串/数字类型）
 * @param defaultText 兜底文本（默认：员工内网）
 * @returns 菜单显示文本
 */
export function getMenuText(key: string | number, defaultText: MenuText = '员工内网'): MenuText {
  const keyStr = String(key) as MenuKey;
  return MENU_TEXT_MAP[keyStr] || defaultText;
}

/**
 * 获取所有菜单Key列表
 * @returns 菜单Key数组
 */
export function getAllMenuKeys(): MenuKey[] {
  return Object.keys(MENU_TEXT_MAP) as MenuKey[];
}

/**
 * 验证菜单Key是否有效
 * @param key 待验证的菜单索引
 * @returns 是否为有效菜单Key
 */
export function isValidMenuKey(key: string | number): boolean {
  const keyStr = String(key);
  return getAllMenuKeys().includes(keyStr as MenuKey);
}

/**
 * 获取所有菜单文本列表
 * @returns 菜单文本数组
 */
export function getAllMenuTexts(): MenuText[] {
  return Object.values(MENU_TEXT_MAP) as MenuText[];
}

/**
 * 安全设置菜单Key（核心：解决TS类型报错）
 * @param key 待设置的菜单Key（字符串/数字）
 * @param defaultKey 默认兜底Key（默认：today）
 * @returns 有效的MenuKey类型
 */
export function setSafeMenuKey(key: string | number, defaultKey: MenuKey = 'today'): MenuKey {
  const keyStr = String(key);
  // 验证key有效则返回，无效则返回默认值
  return isValidMenuKey(keyStr) ? (keyStr as MenuKey) : defaultKey;
}