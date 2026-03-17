package com.example.entity;

import java.util.Date;
import java.io.Serializable;

/**
 * 考勤记录实体类
 * @author Attendance System Team
 * @since 2026-03-15
 */
public class AttendanceRecord implements Serializable {
    private static final long serialVersionUID = -42311789699024229L;

    private Integer id;

    private Integer userId;

    private Date checkInTime;
/**
     * 1-上班考勤 2-下班考勤 3-加班考勤
     */
    private Integer checkInType;
/**
     * 1-正常 2-迟到 3-早退 4-旷工
     */
    private Integer checkInStatus;

    private String checkInLocation;

    private Date createTime;

    private Date updateTime;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Date getCheckInTime() {
        return checkInTime;
    }

    public void setCheckInTime(Date checkInTime) {
        this.checkInTime = checkInTime;
    }

    public Integer getCheckInType() {
        return checkInType;
    }

    public void setCheckInType(Integer checkInType) {
        this.checkInType = checkInType;
    }

    public Integer getCheckInStatus() {
        return checkInStatus;
    }

    public void setCheckInStatus(Integer checkInStatus) {
        this.checkInStatus = checkInStatus;
    }

    public String getCheckInLocation() {
        return checkInLocation;
    }

    public void setCheckInLocation(String checkInLocation) {
        this.checkInLocation = checkInLocation;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

}