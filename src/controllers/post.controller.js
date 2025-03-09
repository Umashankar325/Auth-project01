const postModel = require("../models/post.model");
const userModel = require("../models/user.model");

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
  const user = await userModel.findOneAndUpdate(
    {
      _id: req.user.id,
    },
    {
      $push: {
        posts: newpost._id,
      },
    }
  );
  res.redirect("/");
};
