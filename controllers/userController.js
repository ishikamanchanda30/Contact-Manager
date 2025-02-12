const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// @desc REGISTER A USER
// @route POST /api/user/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All feilds are mandatory!");
  }
  const userAvailable = await User.findOne({ email,username });
  if (userAvailable) {
    res.status(400);
    throw new Error("Email or Username already in use");
  }
  // Hash the password :
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  console.log(`User Created ${user}`);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data not valid!");
  }
  console.log(hashedPassword);
  res.json({ message: "User Register" });
});

// @desc LOGIN USER
// @route POST /api/user/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    // create an access token
    const accesstoken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      {expiresIn:"15m"}
    );
    // we need to provide an access token:
    res.status(200).json({ accesstoken });
  } else {
    res.status(401)
    throw new Error("Invalid Credentials : Email or Password is incorrect")
  }
  res.json({ message: "User Login" });
});

// @desc CURRENT USER INFO
// @route POST /api/user/current
// @access Private
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };
