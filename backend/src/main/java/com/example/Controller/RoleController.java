package com.example.controller;

import com.example.common.ResponseResult;
import com.example.entity.Role;
import com.example.service.PermissionService;
import com.example.util.JwtRedisUtil;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import jakarta.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
@Validated
@Tag(name = "角色管理", description = "角色相关的API接口，包括获取用户角色等功能")
public class RoleController {

    private static final Logger logger = LoggerFactory.getLogger(RoleController.class);

    @Autowired
    private PermissionService permissionService;

    @Autowired
    private JwtRedisUtil jwtRedisUtil;

    @Operation(summary = "获取用户角色", description = "获取指定用户的角色信息")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "获取成功"),
            @ApiResponse(responseCode = "401", description = "未登录")
    })
    @GetMapping("/role/user-roles")
    public ResponseResult<List<Role>> getUserRoles(@RequestParam Integer userId) {
        var authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated() || "anonymousUser".equals(authentication.getName())) {
            return ResponseResult.error(401, "未授权访问");
        }

        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
        String authHeader = request.getHeader("Authorization");
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7);
            Integer currentUserId = jwtRedisUtil.getUserIdFromToken(token);
            if (currentUserId != null) {
                List<Role> roles = permissionService.getUserRoles(userId);
                return ResponseResult.success(roles);
            }
        }
        return ResponseResult.error(401, "无法获取用户信息");
    }
}
