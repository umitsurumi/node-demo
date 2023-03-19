const Admin = require("../models/adminSchema");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

async function auth(req, res, next) {
  const token = String(req.headers.authorization).split(" ").pop();
  if (token != "null" && token) {
    try {
      const { id } = jwt.verify(token, SECRET);
      req.admin = await Admin.findById(id);
      next();
    } catch (error) {
      console.log("error", error);
      res.status(200).send({ code: 401, msg: "token已过期，请重新登录" });
    }
  } else {
    res.status(200).send({ code: 401, msg: "token不存在" });
  }
}

module.exports = auth;
