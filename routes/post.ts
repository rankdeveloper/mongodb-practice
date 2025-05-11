const express = require("express");
const router = express.Router();
const { post, getPostDetails_withUserInfo } = require("../controllers/post");

router.post("/", post);
router.get("/getPostDetails", getPostDetails_withUserInfo);

module.exports = router;
