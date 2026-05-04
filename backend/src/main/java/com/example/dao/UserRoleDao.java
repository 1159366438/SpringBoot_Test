package com.example.dao;

import com.example.entity.Role;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import java.util.List;

/**
 * 用户角色关联数据访问接口
 * 定义对用户角色关联表进行数据库操作的方法
 * 
 * @author Attendance System Team
 * @since 2026-05-05
 * @version v1.1.0-alpha.1
 */
@Mapper
public interface UserRoleDao {

    /**
     * 根据用户ID查询角色列表
     *
     * @param userId 用户ID
     * @return 角色列表
     */
    List<Role> selectRolesByUserId(@Param("userId") Integer userId);

    /**
     * 检查用户是否拥有指定权限码
     *
     * @param userId 用户ID
     * @param permissionCode 权限码
     * @return 是否拥有该权限
     */
    boolean hasPermission(@Param("userId") Integer userId, @Param("permissionCode") String permissionCode);
}
