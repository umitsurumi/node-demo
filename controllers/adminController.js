const Admin = require("../models/adminSchema");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const admin = {
  index: async (req, res) => {
    const admin = await Admin.find();
    res.send(admin);
  },
  register: async (req, res) => {
    const hasAdmin = await Admin.findOne({
      name: req.body.name,
    });
    if (hasAdmin) {
      return res.status(422).send({ msg: "已存在用户，请更换用户名重新注册" });
    } else {
      const admin = await Admin.create({
        name: req.body.name,
        password: req.body.password,
      });
      res.send(admin);
    }
  },
  login: async (req, res) => {
    const admin = await Admin.findOne({
      name: req.body.name,
    });
    if (!admin) {
      return res.status(422).send({
        message: "用户名不存在",
      });
    }
    const isPasswordValid = require("bcrypt").compareSync(
      req.body.password,
      admin.password
    );
    if (!isPasswordValid) {
      return res.status(422).send({
        message: "密码错误",
      });
    }
    // 生成token
    const token = jwt.sign(
      {
        id: String(admin._id),
      },
      SECRET
    );
    res.send({ admin, token: token });
  },
};

module.exports = admin;
