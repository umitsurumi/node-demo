// 连接远程mongodb数据库
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
require("./config");
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("连接成功"))
  .catch(() => console.log("连接失败"));
module.exports = mongoose;
