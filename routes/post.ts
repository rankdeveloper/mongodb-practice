const express = require("express");
const router = express.Router();
const {
  post,
  getPostDetails_withUserInfo,
  getPosts,
  updatePost,
  deletePost,
} = require("../controllers/post");

const protect = require("../middlewares/authMiddleware");

router.post("/", protect, post);
router.get("/getPostDetails", protect, getPostDetails_withUserInfo);

router.get("/getPosts", protect, getPosts);
router.post("/updatePost/:id", protect, updatePost);

router.delete("/deletePost/:id", protect, deletePost);

module.exports = router;
