const postModel = require("../models/post.model");

module.exports.createpostViewController = (req, res) => {
  res.render("CreatePost");
};
module.exports.createpostController = async (req, res) => {
  const { post, description } = req.body;
  const newpost = await postModel.create({
    post,
    description,
    author: req.user.id,
  });
  res.redirect("/user/feed");
};
