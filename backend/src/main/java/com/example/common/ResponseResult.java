package com.example.common;

/**
 * 统一响应结果类
 * 
 * @param <T> 响应数据类型
 */
public class ResponseResult<T> {
    private int code;    // 业务状态码，200成功，非200失败
    private String msg;  // 提示信息
    private T data;      // 真正的业务数据

    public ResponseResult() {}

    public ResponseResult(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public ResponseResult(int code, String msg, T data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }

    // 成功响应
    public static <T> ResponseResult<T> success(T data) {
        return new ResponseResult<>(200, "success", data);
    }

    // 成功响应（无数据）
    public static <T> ResponseResult<T> success() {
        return new ResponseResult<>(200, "success", null);
    }

    // 成功响应（带自定义消息）
    public static <T> ResponseResult<T> success(String msg, T data) {
        return new ResponseResult<>(200, msg, data);
    }

    // 失败响应
    public static <T> ResponseResult<T> error(int code, String msg) {
        return new ResponseResult<>(code, msg, null);
    }

    // 失败响应（默认错误消息）
    public static <T> ResponseResult<T> error(String msg) {
        return new ResponseResult<>(500, msg, null);
    }

    // 失败响应（带数据）
    public static <T> ResponseResult<T> error(int code, String msg, T data) {
        return new ResponseResult<>(code, msg, data);
    }

    // getter和setter方法
    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}