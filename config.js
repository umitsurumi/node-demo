// 配置开发环境
const dotenv = require("dotenv");
dotenv.config();
module.exports = { PORT, DATABASE_URL, SECRET } = process.env;
