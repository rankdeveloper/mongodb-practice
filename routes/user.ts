const express = require("express");
const router = express.Router();
const { postUser, login } = require("../controllers/user");

router.post("/", postUser);
router.post("/login", login);

module.exports = router;
