package com.example.dao;

import com.example.entity.Role;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import java.util.List;

/**
 * 角色数据访问接口
 * 定义对角色表进行数据库操作的方法
 * 
 * @author Attendance System Team
 * @since 2026-05-05
 * @version v1.1.0-alpha.1
 */
@Mapper
public interface RoleDao {

    /**
     * 根据ID查询角色
     *
     * @param id 主键
     * @return 实例对象
     */
    Role selectById(@Param("id") Integer id);

    /**
     * 根据名称查询角色
     *
     * @param name 角色名称
     * @return 实例对象
     */
    Role selectByName(@Param("name") String name);

    /**
     * 查询所有角色
     *
     * @return 角色列表
     */
    List<Role> selectAll();
}
