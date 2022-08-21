// 引入expres第三方模块
const express = require("express");
// 引入数据库连接模块
const pool = require("../pool.js");
// 创建路由器对象
const r = express.Router();
// 添加路由
// 1.博文删除接口
// 地址：http://127.0.0.1:3000/v1/blog
// 请求方式：delete
// r.delete("/:bid", (req, res, next) => {
//   // 获取路由传递的参数
//   var obj = req.params;
//   // 执行SQL命令，删除编号对应的博文
//   pool.query("delete from b_blog where bid=?", [obj.bid], (err, result) => {
//     if (err) {
//       return next(err);
//     }
//     // 结果是对象，如果对象下的affectedRows对应的值为0说明删除失败，否则删除成功
//     if (result.affectedBows === 0) {
//       res.send({ code: 501, msg: "删除失败" });
//     } else {
//       res.send({ code: 200, msg: "删除成功" });
//     }
//   });
// });
// 2.博文查询接口
// 地址：http://127.0.0.1:3000/v1/blog/info?bid=1
// 请求方式：get
r.get("/info", (req, res, next) => {
  var obj = req.query;
  console.log(obj);
  pool.query("select * from b_blog where bid=?", [obj.bid], (err, result) => {
    if (err) {
      return next(err);
    }
    console.log(result);
    res.send({ code: 200, mag: "查询成功", data: result });
  });
});
// 3.博文更新接口
// 地址：http://127.0.0.0.1:3000/vl/blog/update
// 请求方式：put
// r.put("/update/:bid", (req, res, next) => {
//   var obj = req.body;
//   console.log(obj);
//   pool.query(
//     "update b_blog set ? where bid=?",
//     [obj, obj.bid],
//     (err, result) => {
//       if (err) {
//         return next(err);
//       }
//       if (result.affectedBows === 0) {
//         res.send({ code: 501, msg: "更新失败" });
//       } else {
//         res.send({ code: 200, msg: "更新成功" });
//       }
//     }
//   );
// });
// 4.博文查询接口
// 地址：http://127.0.0.1:3000/v1/blog/infos
// 请求方式：get
r.get("/infos", (req, res, next) => {
  var obj = req.query;
  console.log(obj);
  pool.query("select * from b_blog", [obj], (err, result) => {
    if (err) {
      return next(err);
    }
    console.log(result);
    res.send({ code: 200, msg: "博文查询成功", data: result });
  });
});
// 5.博文添加接口
// 地址：http://127.0.0.1:3000/v1/blog/add
// 请求方式：post
// r.post("/add", (req, res, next) => {
//   var obj = req.body;
//   console.log(obj);
//   pool.query("insert into b_blog set?", [obj], (err, result) => {
//     if (err) {
//       return next(err);
//     }
//     console.log(result);
//     res.send({ code: 200, msg: "添加成功" });
//   });
// });

module.exports = r;
