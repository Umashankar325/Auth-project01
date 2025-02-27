const jwt = require("jsonwebtoken");

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
