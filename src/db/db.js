const mongoose = require("mongoose");
const connect = () => {
  mongoose
    .connect(
      "mongodb+srv://umashankaruikey325:5KUU28la9AI2iIxo@insta-post-project.qam8k.mongodb.net/"
    )
    .then(() => {
      console.log("db connected");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = connect;
