package com.example.service.impl;

import com.example.dao.UserRoleDao;
import com.example.entity.Role;
import com.example.service.PermissionService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

/**
 * 权限业务逻辑实现类
 * 实现权限校验相关的业务逻辑
 * 
 * @author Attendance System Team
 * @since 2026-05-05
 * @version v1.1.0-alpha.1
 */
@Service
public class PermissionServiceImpl implements PermissionService {

    private static final Logger logger = LoggerFactory.getLogger(PermissionServiceImpl.class);

    private static final String ADMIN_ROLE_CODE = "ADMIN";

    @Autowired
    private UserRoleDao userRoleDao;

    @Override
    public boolean isAdmin(Integer userId) {
        if (userId == null) {
            return false;
        }
        List<Role> roles = getUserRoles(userId);
        return roles.stream().anyMatch(role -> ADMIN_ROLE_CODE.equals(role.getCode()));
    }

    @Override
    public List<Role> getUserRoles(Integer userId) {
        if (userId == null) {
            return Collections.emptyList();
        }
        try {
            return userRoleDao.selectRolesByUserId(userId);
        } catch (Exception e) {
            logger.error("查询用户角色失败, userId={}", userId, e);
            return Collections.emptyList();
        }
    }
}
