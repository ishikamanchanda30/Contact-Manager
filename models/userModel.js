const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add your username"],
      unique: [true, "Username taken, try something else!"],
    },
    email: {
      type: String,
      required: [true, "Please add your Email"],
      unique: [true, "Email Address already Registered."],
    },
    password: {
      type: String,
      required: [true, "Add user password"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
