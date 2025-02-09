const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

// @desc REGISTER A USER
// @route POST /api/user/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All feilds are mandatory!");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("Email already in use");
  }

  // Hash the password :
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
  res.json({ message: "User Register" });
});

// @desc LOGIN USER
// @route POST /api/user/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "User Login" });
});

// @desc CURRENT USER INFO
// @route POST /api/user/current
// @access Private
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current User Info" });
});

module.exports = { registerUser, loginUser, currentUser };
