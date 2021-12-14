let mongoose = require("mongoose");

var schema = new mongoose.Schema({
  name: String,
  type: {
    type: String,
    enum: ["Mrs", "Miss", "Mr"],
  },
  mobile: { type: String, unique: true, required: true },
  email: { type: String },
  city: { type: String },
  state: { type: String },
  country: { type: String },
  zipCode: { type: Number },
  password: String,
  accessLevel: {
    type: String,
    enum: ["Manufacturer", "Agent", "Buyer", "Admin"],
  },
  emailVerification: Number,
  mobileVerification: Number,
  emailVerified: { type: Boolean, default: false },
  mobileVerified: { type: Boolean, default: false },
  forgotPasswordVerification: Number,
});
module.exports = mongoose.model("User", schema);
