const express = require("express");
const router = express.Router();

const user = require("../controllers/userController");

/* GET users listing. */
router.get("/", user.index);
router.post("/", user.add);
router.get("/:keyword", user.find);
router.post("/:id", user.update);
router.delete("/:id", user.delete);

module.exports = router;
