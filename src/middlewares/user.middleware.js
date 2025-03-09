const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
module.exports.userVarify = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, "user_auth_key");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(201).json(error);
    return;
  }
};
module.exports.islogin = async (req, res, next) => {
  const token = req.cookies.token || "";
  if (token) {
    const decoded = jwt.verify(token, "user_auth_key");
    const loginduser = await userModel.findOne({ _id: decoded.id });
    req.user = loginduser;
  }

  next();
};
