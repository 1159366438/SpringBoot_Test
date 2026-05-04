package com.example.service;

import com.example.entity.Role;
import java.util.List;

/**
 * 权限业务逻辑接口
 * 定义权限校验相关的业务逻辑方法
 * 
 * @author Attendance System Team
 * @since 2026-05-05
 * @version v1.1.0-alpha.1
 */
public interface PermissionService {

    /**
     * 判断用户是否为管理员
     *
     * @param userId 用户ID
     * @return true-是管理员，false-不是
     */
    boolean isAdmin(Integer userId);

    /**
     * 获取用户的角色列表
     *
     * @param userId 用户ID
     * @return 角色列表
     */
    List<Role> getUserRoles(Integer userId);
}
