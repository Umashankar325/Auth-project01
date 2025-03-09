const express = require("express");
const route = express.Router();
const userController = require("../controllers/user.controller");
const { userVarify } = require("../middlewares/user.middleware");



route.get("/register", userController.userRegisterViewController);
route.post("/register", userController.userRegisterController);

route.get("/login", userController.userLoginViewController);
route.post("/login", userController.userLoginController);

route.get("/logout", userController.userLogoutController);

route.get("/profile",userVarify,userController.userProfileController);



module.exports = route;
