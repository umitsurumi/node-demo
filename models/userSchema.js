const mongoose = require("../mongoose");

const UserSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  name: { type: String },
  gender: { type: String },
  age: { type: Number },
  province: { type: String },
  address: { type: String },
  telephone: { type: Number },
  email: { type: String },
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
