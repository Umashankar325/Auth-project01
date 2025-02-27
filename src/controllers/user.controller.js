const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
// const { post } = require("../routes/user.routes");
const postModel = require("../models/post.model");

module.exports.userRegisterViewController = (req, res) => {
  res.render("Register");
};
module.exports.userRegisterController = async (req, res) => {
  const { username, email, password, profile } = req.body;
  const hashpassword = await bcrypt.hash(password, 10);
  const user = await userModel.create({
    username,
    email,
    profile,
    password: hashpassword,
  });
  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    "user_auth_key"
  );
  res.cookie("token", token);
  res.redirect("/user/profile");
};

module.exports.userLoginViewController = (req, res) => {
  res.render("Login");
};
module.exports.userLoginController = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({
    email,
  });
  if (!user) {
    res.send("user not exist");
    return;
  }
  const passwordvarify = await bcrypt.compare(password, user.password);
  if (!passwordvarify) {
    return res.send("incorrect password");
  }

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    "user_auth_key"
  );
  res.cookie("token", token);
  res.redirect("/user/profile");
};

module.exports.userProfileController = async (req, res) => {
  const users = await userModel.find();
  res.render("Profile", { users });
};
module.exports.feedController = async (req, res) => {
  const posts = await postModel.find().populate("author");
  res.render("postFeed", { posts });
};
