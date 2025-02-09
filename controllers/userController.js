// @desc REGISTER A USER
// @route POST /api/user/register
// @access Public
const asyncHandler = require("express-async-handler");
const registerUser = asyncHandler(async (req, res) => {
    res.json({message: "User Register"})
});

// @desc LOGIN USER
// @route POST /api/user/login
// @access Public
const loginUser = asyncHandler(async(req,res)=> {
    res.json({message: "User Login"})
});

// @desc CURRENT USER INFO
// @route POST /api/user/current
// @access Private
const currentUser = asyncHandler(async(req,res)=> {
    res.json({message: "Current User Info"})
});

module.exports = { registerUser , loginUser};
