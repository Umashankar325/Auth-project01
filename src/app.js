const express = require("express");
const app = express();
const userRoutes = require("../src/routes/user.routes");
const postRoute = require("./routes/post.routes");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoutes);
app.use("/post", postRoute);

module.exports = app;
