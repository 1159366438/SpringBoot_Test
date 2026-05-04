package com.example.entity;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * 角色权限关联实体类
 * 对应数据库中的角色权限关联表，记录角色与权限的多对多关系
 * 
 * @author Attendance System Team
 * @since 2026-05-05
 * @version v1.1.0-alpha.1
 */
public class RolePermission implements Serializable {

    /**
     * 主键ID
     */
    private Integer id;

    /**
     * 角色ID，关联role表
     */
    private Integer roleId;

    /**
     * 权限ID，关联permission表
     */
    private Integer permissionId;

    /**
     * 创建时间
     */
    private LocalDateTime createTime;

    /**
     * 更新时间
     */
    private LocalDateTime updateTime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getRoleId() {
        return roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

    public Integer getPermissionId() {
        return permissionId;
    }

    public void setPermissionId(Integer permissionId) {
        this.permissionId = permissionId;
    }

    public LocalDateTime getCreateTime() {
        return createTime;
    }

    public void setCreateTime(LocalDateTime createTime) {
        this.createTime = createTime;
    }

    public LocalDateTime getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(LocalDateTime updateTime) {
        this.updateTime = updateTime;
    }
}
