// 引入express模块
const express = require("express");
// 引入cors模块
const cors = require("cors");
// 引入用户路由器模块
const userRouter = require("./routes/user.js");
// 引入博文路由器模块
const blogRouter = require("./routes/blog.js");
// 引入博文详情路由器模块
const blogdetailRouter = require("./routes/blogdetail.js");
// 引入写博客路由器模块
const writeblogRouter = require("./routes/writeblog.js");
// 创建WEB服务器
const app = express();
// 设置响应的端口号
app.listen(3000, () => {
  console.log("服务器启动成功...");
});
// 将post传递的参数转化为对象
app.use(
  express.urlencoded({
    extended: true,
  })
);
// 解决跨域问题
app.use(cors());
// 使用用户路由器,添加前缀/v1/user
app.use("/v1/user", userRouter);
// 使用博客路由器，添加前缀/v1/blog
app.use("/v1/blog", blogRouter);
// 使用博客详情路由器，添加前缀/v1/blogdetail
app.use("/v1/blogdetail", blogdetailRouter);
//// 使用写博客路由器，添加前缀/v1/writeblog
app.use("/v1/writeblog", writeblogRouter);
// 添加错误处理中间件，拦截所有路由传递的错误
app.use((err, req, res, next) => {
  console.log(err);
  res.send({ code: 500, msg: "服务器端错误" });
});
