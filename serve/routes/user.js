const express = require("express");
const pool = require("../pool.js");
const r = express.Router();
// 1.用户注册接口
// 地址：http://127.0.0.1:3000/v1/user/reg
// 请求方式：post
r.post("/reg", (req, res, next) => {
  var obj = req.body;
  console.log(obj);
  // 验证用户名密码不能为空
  if (!obj.username) {
    res.send({ code: 401, msg: "用户名不能为空" });
    return;
  } else if (!obj.password) {
    res.send({ code: 402, msg: "密码不能为空" });
    return;
  } else if (!obj.email) {
    res.send({ code: 403, msg: "邮箱不能为空" });
  }
  // 将数据插入到数据库表中
  pool.query("insert into b_user set ?", [obj], (err, result) => {
    if (err) {
      next(err);
      return;
    }
    console.log(result);
    // 执行成功在响应
    res.send({ code: 200, msg: "用户注册成功" });
  });
});

// 1.用户登录接口
// 地址：http://127.0.0.1:3000/v1/user/login
// 请求方式：post
r.post("/login", (req, res, next) => {
  var obj = req.body;
  console.log(obj);
  // 验证用户名密码不能为空
  if (!obj.username) {
    res.send({ code: 401, msg: "用户名不能为空" });
    return;
  } else if (!obj.password) {
    res.send({ code: 402, msg: "密码不能为空" });
    return;
  }
  // 将数据插入到数据库表中
  pool.query("insert into b_user set ?", [obj], (err, result) => {
    if (err) {
      next(err);
      return;
    }
    console.log(result);
    // 执行成功在响应
    res.send({ code: 200, msg: "用户添加成功" });
  });
});

module.exports = r;
