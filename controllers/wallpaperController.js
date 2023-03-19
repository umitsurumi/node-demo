const Wallpaper = require("../models/wallpaperSchema");
const getWallpaper = require("../utils/getWallpaper");

const wallpaper = {
  normal: async (req, res, next) => {
    const wallpaper = await getWallpaper();
    const raw = req.query.raw;
    if (raw === "true") {
      res.send(wallpaper);
    } else {
      res.send(wallpaper[0].url);
    }
  },
  large: async (req, res, next) => {
    const wallpaper = await getWallpaper(0, 1, true);
    const raw = req.query.raw;
    if (raw === "true") {
      res.send(wallpaper);
    } else {
      res.send(wallpaper[0].url);
    }
  },
  images: async (req, res, next) => {
    const { idx, n, uhd } = req.query;
    const wallpapers = await getWallpaper(idx, n, uhd);
    res.send(wallpapers);
  },
};

module.exports = wallpaper;
