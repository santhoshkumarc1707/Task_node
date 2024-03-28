const express = require("express");
const User = require("../Models/User");
const { generateToken } = require("../middleware/generateToken");
const jsonWeb = require("jsonwebtoken");
const router = express.Router();
const bcrypt = require("bcryptjs");

router.post("/login", async (req, res) => {

  const { name, password } = req.body;

  try {
    let user = await User.findOne({ name });
    if (!user) {
      user = await User.findOne({ email: name });
    }

    if (!user) {
      return res.json({ success: false, message: "Invalid Credentials" });
    } else {
      const verify = await bcrypt.compare(password, user.password);
      if (!verify)
        return res.json({ success: false, message: "Invalid Credentials" });
      else {
        let token = await generateToken(user._id);

        return res.json({
          success: true,
          token,
          user,
          message: "login successful",
        });
      }
    }
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
});

router.post("/register", async (req, res) => {
  const { email, name, password } = req.body;
   
  if (!email || !name || !password)
    return res.json({ success: false, message: "All fields are required" });
  try {
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      name,
      password: hash
    });
    if (user) {
      let token = await generateToken(user._id);

      res.json({ success: true, message: "User Created", user, token });
    } else {
      res.json({ success: false, message: "Some error creating Account" });
    }
  } catch (error) {
    res.json({ success: false, message: "internal server error" });
  }
});
router.get("/me", async (req, res) => {
  try {
    const { token } = req.headers;
    if (!token)
      return res
        .status(401)
        .json({ success: true, message: "user Unauthorized" });

    const data = jsonWeb.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(data.id);
    if (user) {
      return res.json({ user, success: true, message: "user found" });
    } else {
      return res.status(404).json({ success: true, message: "user not found" });
    }
  } catch (error) {
    res.json({
      success: false,
      message: "session has expire please login again",
    });
  }
});
router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json({ users, success: true, message: "users found" });
});
module.exports = router;
