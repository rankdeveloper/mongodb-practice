const User = require("../models/user");
const postUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = User.create({ name, email });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error in creating user", error });
  }
};

module.exports = { postUser };
