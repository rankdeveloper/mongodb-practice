const express = require("express");
const router = express.Router();
const {
  post,
  getPostDetails_withUserInfo,
  getPosts,
  updatePost,
  deletePost,
} = require("../controllers/post");

router.post("/", post);
router.get("/getPostDetails", getPostDetails_withUserInfo);

router.get("/getPosts", getPosts);
router.post("/updatePost/:id", updatePost);

router.delete("/deletePost/:id", deletePost);

module.exports = router;
