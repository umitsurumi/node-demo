const fs = require("fs");
const getWallpaper = require("../utils/getWallpaper");
const Wallpaper = require("../models/wallpaperSchema");

function downloadImage(src, dest, callback) {
  fetch(src, {
    method: "GET",
    headers: { "Content-Type": "application/octet-stream" },
  })
    .then((res) => res.arrayBuffer())
    .then((data) => {
      fs.writeFile(dest, Buffer.from(data), (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`下载成功，图片地址是${dest}`);
        }
      });
    })
    .catch((err) => console.log(err));
}
(async function () {
  const [img] = await getWallpaper();
  console.log(img);
  downloadImage(img.url, `./public/images/${img.date}.jpg`);
  Wallpaper.create(img);
})();
