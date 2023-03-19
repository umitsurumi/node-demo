const express = require("express");
const router = express.Router();

const admin = require("../controllers/adminController");

/* GET users listing. */
router.get("/", admin.index);
router.post("/register", admin.register);
router.post("/login", admin.login);

module.exports = router;
