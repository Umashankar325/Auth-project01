const mongoose = require("mongoose");
const connect = () => {
  mongoose
    .connect("mongodb://0.0.0.0/auth_revision")
    .then(() => {
      console.log("db connected");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = connect;
