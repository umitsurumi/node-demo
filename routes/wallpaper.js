const express = require("express");
const router = express.Router();

const wallpaper = require("../controllers/wallpaperController");

router.get("/", wallpaper.normal);
router.get("/large", wallpaper.large);
router.get("/images", wallpaper.images);

module.exports = router;
