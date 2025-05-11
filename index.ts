const express = require("express");
const app = express();

const connectDb = require("./connection/connectDb");
const userRouter = require("./routes/user");
const postRouter = require("./routes/post");

const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

connectDb();
app.use("/user", userRouter);
app.use("/post", postRouter);

app.listen(port, () => console.log(`app listening on port ${port}!`));
