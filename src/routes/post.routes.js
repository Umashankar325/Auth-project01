const express = require("express");
const postController = require("../controllers/post.controller");
const { userVarify } = require("../middlewares/user.middleware");
const route = express.Router();


route.get("/create", userVarify, postController.createpostViewController);
route.post("/create", userVarify, postController.createpostController);

module.exports = route;
