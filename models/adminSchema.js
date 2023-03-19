const mongoose = require("../mongoose");
const AdminSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  password: {
    type: String,
    set(val) {
      return require("bcrypt").hashSync(val, 10);
    },
  },
});
const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;
