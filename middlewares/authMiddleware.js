const jwt = require("jsonwebtoken");
const User = require("../models/user");

const protect = async (req, res, next) => {
  console.log(req.headers);
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Not authorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.jwt_secret);

    req.user = await User.findById(decoded.id);

    next();
  } catch (error) {
    res.status(500).json({ message: "Token failed" });
  }
};

module.exports = protect;
