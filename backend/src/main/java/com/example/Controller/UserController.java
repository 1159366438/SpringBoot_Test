package com.example.controller;

/**
 * 用户控制器
 * 提供用户信息管理、查询等相关功能
 * 
 * @author Attendance System Team
 * @since 2026-03-27
 * @version v1.1.0-alpha.1
 */

import com.example.common.ResponseResult;
import com.example.constants.AppConstants;
import com.example.dto.UserDTO;
import com.example.entity.User;
import com.example.service.UserService;
import com.example.util.JwtRedisUtil;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import jakarta.servlet.http.HttpServletRequest;
import java.util.Map;

import java.util.List;


@RestController // 标识为REST接口，返回JSON数据
@RequestMapping("/api") // API基础路径
@CrossOrigin // 解决前后端分离的跨域问题（必加，否则前端请求会被拦截）
@Validated // 开启参数校验
@Tag(name = "用户管理", description = "用户相关的API接口，包括获取用户信息、更新用户信息等功能")
public class UserController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;
    
    @Autowired
    private JwtRedisUtil jwtRedisUtil;
    
    /**
     * 获取用户信息接口
     * <p>
     * 该接口用于获取用户的个人信息
     * </p>
     *
     * @return UserDTO对象，表示查询到的用户信息（不包含敏感信息）
     * @since v1.1.0-alpha.1
     */
    @Operation(summary = "获取用户信息", description = "获取当前认证用户的基本信息")
     @ApiResponses({
             @ApiResponse(responseCode = "200", description = "获取用户信息成功"),
             @ApiResponse(responseCode = "404", description = "用户不存在"),
             @ApiResponse(responseCode = "500", description = "获取用户信息失败")
     })
     @GetMapping("/users/me")
     public ResponseResult<UserDTO> getUserInfo() {
         // 从SecurityContext中获取当前认证的用户信息
         var authentication = SecurityContextHolder.getContext().getAuthentication();
         
         if (authentication != null && authentication.isAuthenticated() && !"anonymousUser".equals(authentication.getName())) {
             // 从JWT工具类获取用户ID（通过token解析）
             HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
             String authHeader = request.getHeader("Authorization");
             
             Integer userId = null;
             if (authHeader != null && authHeader.startsWith("Bearer ")) {
                 String token = authHeader.substring(7);
                 userId = jwtRedisUtil.getUserIdFromToken(token);
             }
             
             // 委托给服务层处理业务逻辑
             return userService.getUserInfoWithHandling(userId);
         } else {
             // 如果SecurityContext中没有认证信息，返回401未授权
             return ResponseResult.error(401, "未授权访问");
         }
     }
    
    /**
     * 更新用户信息接口
  * <p>
  * 该接口用于更新用户的个人信息
  * </p>
  *
  * @param userId 用户ID
  * @param updateData 更新的数据
  * @return 标准响应格式，包含更新后的用户信息（不包含敏感信息）
  * @since v1.1.0-alpha.1
  */
 @Operation(summary = "更新用户信息", description = "更新当前登录用户的信息")
 @ApiResponses({
         @ApiResponse(responseCode = "200", description = "更新用户信息成功"),
         @ApiResponse(responseCode = "400", description = "更新参数错误"),
         @ApiResponse(responseCode = "404", description = "用户不存在"),
         @ApiResponse(responseCode = "500", description = "更新用户信息失败")
 })
 @PutMapping("/users/me")
 public ResponseResult<UserDTO> updateUserInfo(@RequestParam Integer userId, @RequestBody User updateData) {
     logger.info("更新用户信息请求: userId={}", userId);
     
     try {
         // 调用更新用户信息业务逻辑
         ResponseResult<UserDTO> updateResult = userService.updateUserInfo(userId, updateData);
         
         return updateResult;
     } catch (Exception e) {
         logger.error("更新用户信息失败", e);
         return ResponseResult.error(AppConstants.Error.SERVER_ERROR_CODE, AppConstants.Error.SERVER_ERROR_MSG);
     }
 }
    
    /**
     * 为用户分配部门接口
     * <p>
     * 该接口用于为用户分配到指定部门
     * </p>
     *
     * @param requestBody 请求体，包含userId和departmentId
     * @return 标准响应格式，包含更新后的用户信息
     * @author Attendance System Team
     * @since 2026-03-27
     * @version v1.1.0-alpha.1
     */
    @Operation(summary = "为用户分配部门", description = "将指定用户分配到指定部门")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "分配部门成功"),
            @ApiResponse(responseCode = "400", description = "参数错误"),
            @ApiResponse(responseCode = "404", description = "用户不存在"),
            @ApiResponse(responseCode = "500", description = "分配部门失败")
    })
    @PutMapping("/users/department")
    public ResponseResult<UserDTO> assignUserToDepartment(@RequestBody Map<String, Object> requestBody) {
        try {
            Integer userId = requestBody.get("userId") != null ? Integer.parseInt(requestBody.get("userId").toString()) : null;
            Integer departmentId = requestBody.get("departmentId") != null ? Integer.parseInt(requestBody.get("departmentId").toString()) : null;
            
            logger.info("为用户分配部门请求: userId={}, departmentId={}", userId, departmentId);
            
            if (userId == null || departmentId == null) {
                return ResponseResult.error(AppConstants.Error.BAD_REQUEST_CODE, "用户ID和部门ID不能为空");
            }
            
            // 调用分配用户到部门业务逻辑
            ResponseResult<UserDTO> result = userService.assignUserToDepartment(userId, departmentId);
            
            return result;
        } catch (Exception e) {
            logger.error("为用户分配部门失败", e);
            return ResponseResult.error(AppConstants.Error.SERVER_ERROR_CODE, AppConstants.Error.SERVER_ERROR_MSG);
        }
    }
    
    /**
     * 获取未分配部门的用户列表
     * <p>
     * 该接口用于获取所有未分配到任何部门的用户
     * </p>
     *
     * @return 标准响应格式，包含未分配部门的用户列表
     * @author Attendance System Team
     * @since 2026-03-27
     * @version v1.1.0-alpha.1
     */
    @Operation(summary = "获取未分配部门的用户", description = "获取所有未分配到任何部门的用户列表")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "获取成功"),
            @ApiResponse(responseCode = "500", description = "获取失败")
    })
    @GetMapping("/users/unassigned")
    public ResponseResult<List<UserDTO>> getUnassignedUsers() {
        logger.info("获取未分配部门的用户列表请求");
        
        try {
            List<User> users = userService.getUnassignedUsers();
            List<UserDTO> userDTOs = users.stream()
                .map(UserDTO::new)
                .collect(java.util.stream.Collectors.toList());
            
            return ResponseResult.success(userDTOs);
        } catch (Exception e) {
            logger.error("获取未分配部门的用户列表失败", e);
            return ResponseResult.error(AppConstants.Error.SERVER_ERROR_CODE, AppConstants.Error.SERVER_ERROR_MSG);
        }
    }
}