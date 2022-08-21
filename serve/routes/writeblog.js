// 引入express第三方模块
const express = require("express");
// 引入数据库连接模块
const pool = require("../pool.js");
// 创建路由器对象
const r = express.Router();
// 添加路由
// 1.博文查询接口
// 地址：http://127.0.0.1:3000/v1/writeblog/infos
// 请求方式：get
r.get("/infos", (req, res, next) => {
  var obj = req.query;
  console.log(obj);
  pool.query("select * from b_writeblog", [obj], (err, result) => {
    if (err) {
      return next(err);
    }
    console.log(result);
    res.send({ code: 200, msg: "查询成功", data: result });
  });
});

// 2.博文添加接口
// 地址：http://127.0.0.1:3000/v1/writeblog/add
// 请求方式：post
r.post("/add", (req, res, next) => {
  var obj = req.body;
  console.log(obj);
  pool.query("insert into b_writeblog set?", [obj], (err, result) => {
    if (err) {
      return next(err);
    }
    console.log(result);
    res.send({ code: 200, msg: "添加成功", data: result });
  });
});
// 3.博文删除接口
// 地址：http://127.0.0.1:3000/v1/writeblog
// 请求方式：delete
r.delete("/:wid", (req, res, next) => {
  var obj = req.params;
  pool.query(
    "delete from b_writeblog where wid=?",
    [obj.wid],
    (err, result) => {
      if (err) {
        return next(err);
      }
      res.send({ code: 200, msg: "删除成功", data: result });
    }
  );
});

module.exports = r;
