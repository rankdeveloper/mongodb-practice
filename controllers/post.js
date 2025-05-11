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

module.exports = { post, getPostDetails_withUserInfo };
