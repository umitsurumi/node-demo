async function getWallpaper(idx = 0, n = 1, uhd = false) {
  let data;
  if (uhd) {
    data = await fetch(
      `https://www.bing.com/HPImageArchive.aspx?format=js&idx=${idx}&n=${n}&uhd=1&uhdwidth=3840&uhdheight=2160`
    );
  } else {
    data = await fetch(
      `https://www.bing.com/HPImageArchive.aspx?format=js&idx=${idx}&n=${n}`
    );
  }
  const { images } = await data.json();
  return images.map((raw) => wallpaperFormat(raw));
}

function wallpaperFormat(raw_wallpaper) {
  const { startdate, url, copyright, copyrightlink, title } = raw_wallpaper;
  return {
    date: startdate,
    url: `https://www.bing.com${url}`,
    copyright,
    copyright_link: copyrightlink,
    title,
  };
}

module.exports = getWallpaper;
