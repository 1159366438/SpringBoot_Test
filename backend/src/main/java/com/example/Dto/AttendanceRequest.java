package com.example.dto;

/**
 * 考勤请求参数类
 * @author Attendance System Team
 * @since 2026-03-15
 */
public class AttendanceRequest {
    private String username; // 用户名
    private Integer userId; // 用户ID
    private String attendanceTime; // 考勤时间（ISO格式）

    // getter和setter方法
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getAttendanceTime() {
        return attendanceTime;
    }

    public void setAttendanceTime(String attendanceTime) {
        this.attendanceTime = attendanceTime;
    }

    @Override
    public String toString() {
        return "AttendanceRequest{" +
                "username='" + username + '\'' +
                ", userId=" + userId +
                ", attendanceTime='" + attendanceTime + '\'' +
                '}';
    }
}