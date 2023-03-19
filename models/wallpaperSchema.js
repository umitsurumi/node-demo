const mongoose = require("../mongoose");

const WallpaperSchema = new mongoose.Schema({
  date: { type: String, unique: true },
  url: { type: String, unique: true },
  copyright: { type: String },
  copyright_link: { type: String },
  title: { type: String },
});
const Wallpaper = mongoose.model("Wallpaper", WallpaperSchema);
module.exports = Wallpaper;
