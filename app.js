const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

// 引入授权中间件
const auth = require("./utils/authenticator");

// 引入路由
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/user");
const wallpaperRouter = require("./routes/wallpaper");
const adminRouter = require("./routes/admin");

const app = express();

// view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "pug");

app.use(logger("dev"));
app.use(
  cors({
    origin: "*", // 允许所有跨域访问
    credentials: true, // 允许 Cookie 跨域跨域
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/user", auth, usersRouter);
app.use("/wallpaper", wallpaperRouter);
app.use("/admin", adminRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
