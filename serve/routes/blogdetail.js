// 引入expres第三方模块
const express = require("express");
// 引入数据库连接模块
const pool = require("../pool.js");
// 创建路由器对象
const r = express.Router();
// 添加路由
// 1.博文详情查询接口
// 地址：http://127.0.0.1:3000/v1/blogdetail/details
// 请求方式：get
// r.get("/details", (req, res, next) => {
//   var obj = req.query;
//   console.log(obj);
//   pool.query("select * from b_blogdetail", [obj], (err, result) => {
//     if (err) {
//       return next(err);
//     }
//     console.log(result);
//     res.send({ code: 200, msg: "博文详情查询成功", data: result });
//   });
// });
// 2.博文详情按需查询接口
// 地址：http://127.0.0.1:3000/v1/blogdetail/details?cid
// 请求方式：get
r.get("/details", (req, res, next) => {
  var obj = req.query;
  console.log(obj);
  pool.query(
    "select * from b_blogdetail where cid =?",
    [obj.cid],
    (err, result) => {
      if (err) {
        return next(err);
      }
      console.log(result);
      res.send({ code: 200, mag: "查询成功", data: result });
    }
  );
});

module.exports = r;
