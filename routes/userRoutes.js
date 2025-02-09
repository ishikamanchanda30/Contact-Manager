const express= require("express");
const router = express.Router();
const {registerUser} = require("../controllers/userController")

router.post("/register",(req,res)=> registerUser);
router.post("/login",(req,res)=> {
});
router.get("/current",(req,res)=> {
    res.json({message: "Current User Information"})
});

module.exports = router;