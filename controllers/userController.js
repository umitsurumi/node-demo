const User = require("../models/userSchema");

const user = {
  // 用户列表
  index: async (req, res) => {
    const users = await User.find();
    res.send(users);
  },
  // 添加用户
  add: async (req, res) => {
    const user = await User.create(req.body);
    res.send(user);
  },
  // 删除用户
  delete: async (req, res) => {
    await User.findOneAndDelete({ id: req.params.id });
    res.send({
      status: true,
    });
  },
  // 编辑用户
  update: async (req, res) => {
    const user = await User.findOneAndReplace({ id: req.params.id }, req.body);
    res.send(user);
  },
  // 查找用户
  find: async (req, res) => {
    console.log(req.body);
    const users = await User.find({
      name: { $regex: req.params.keyword },
    });
    res.send(users);
  },
};

module.exports = user;
