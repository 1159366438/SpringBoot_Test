package com.example.constants;

/**
 * 应用程序常量类
 * 
 * @author 开发团队
 * @since 1.0.0
 */
public class AppConstants {
    
    /**
     * 分页相关常量
     */
    public static class Page {
        /** 默认页码 */
        public static final int DEFAULT_PAGE_NUM = 1;
        
        /** 默认每页数量 */
        public static final int DEFAULT_PAGE_SIZE = 15;
    }
    
    /**
     * 打卡相关常量
     */
    public static class Punch {
        // 打卡类型
        /** 上班打卡 */
        public static final int CHECK_IN_TYPE_ON_WORK = 1;
        
        /** 下班打卡 */
        public static final int CHECK_IN_TYPE_OFF_WORK = 2;
        
        /** 加班打卡 */
        public static final int CHECK_IN_TYPE_OVERTIME = 3;
        
        // 打卡状态
        /** 正常 */
        public static final int CHECK_IN_STATUS_NORMAL = 1;
        
        /** 迟到 */
        public static final int CHECK_IN_STATUS_LATE = 2;
        
        /** 早退 */
        public static final int CHECK_IN_STATUS_LEAVE_EARLY = 3;
        
        /** 旷工 */
        public static final int CHECK_IN_STATUS_ABSENTEEISM = 4;
    }
    
    /**
     * 用户相关常量
     */
    public static class User {
        /** 默认用户ID（仅用于演示）*/
        public static final int DEFAULT_USER_ID = 1;
    }
    
    /**
     * CORS相关常量
     */
    public static class Cors {
        /** 前端开发服务器地址 */
        public static final String FRONTEND_URL_LOCAL = "http://localhost:5173";
    }
}