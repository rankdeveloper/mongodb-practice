const Post = require("../models/post");
const post = async (req, res) => {
  try {
    const { title, description, author } = req.body;
    const post = await Post.create({ title, description, author });

    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "Error in creating post", error });
  }
};

const getPosts = async (req, res) => {
  try {
    const data = await Post.find({});

    res.json({ data: data });
  } catch (error) {
    res.status(500).json({ message: "Error in fetching post details", error });
  }
};

const updatePost = async (req, res) => {
  try {
    const { title, description, author } = req.body;
    const id = req.params.id;

    const found = await Post.findById(id);
    if (!found) {
      return res.status(404).json({ message: "Post not found" });
    }

    const data = await Post.updateOne(
      { _id: id },
      { $set: { title, description, author } }
    );

    res.json({ data: data });
  } catch (error) {
    res.status(500).json({ message: "Error in updating post details", error });
  }
};

const deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Post.deleteOne({ _id: id });

    res.json({ data: data, message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error in deleting post details", error });
  }
};

const getPostDetails_withUserInfo = async (req, res) => {
  try {
    const data = await Post.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "author",
          foreignField: "_id",
          as: "userInfo",
        },
      },
    ]);

    res.json({ data: data });
  } catch (error) {
    res.status(500).json({ message: "Error in fetching post details", error });
  }
};

module.exports = {
  post,
  getPostDetails_withUserInfo,
  getPosts,
  updatePost,
  deletePost,
};
