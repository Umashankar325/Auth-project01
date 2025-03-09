const express = require("express");
const app = express();
const userRoutes = require("../src/routes/user.routes");
const postRoute = require("./routes/post.routes");
const cookieParser = require("cookie-parser");
// const { userVarify } = require("./middlewares/user.middleware");
const userController = require("./controllers/user.controller");
const { islogin } = require("./middlewares/user.middleware");

app.use(cookieParser());
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", islogin, userController.feedController);
app.use("/user", userRoutes);
app.use("/post", postRoute);

module.exports = app;
