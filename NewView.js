let mongoose = require("mongoose");

var schema = new mongoose.Schema(
  {
    accessLevel: String,
    email: String,
    mobile: String,
    name: String,
  },
  {
    collection: "newView",
  }
);
module.exports = mongoose.model("newView", schema);
