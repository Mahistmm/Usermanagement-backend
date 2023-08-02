const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const verifyToken = require("../middlewares/verifyToken");

router.get("/", (req, res) => {
  res.send("user router is working ");
});

router.post("/signup", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(req.body.password, salt);
  req.body.password = passwordHash;
  const user = new User(req.body);
  await user.save();
  res.json({ msg: "Account created successfully" });
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    //check valid user

    if (!user) {
      return res.json({ msg: "user is not found " });
    }
    const match = await bcrypt.compare(req.body.password, user.password);
    if (match) {
      const token = await jwt.sign(
        { userId: user._id },
        process.env.SECRET_KEY
      );
      return res.json({ token });
    } else {
      return res.json({ msg: "wrong password" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/data", verifyToken, (req, res) => {
  res.json(req.user);
});

module.exports = router;
