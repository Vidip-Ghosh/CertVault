const router = require("express").Router();
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config");
const { verifyUserToken } = require("../middleware/auth");


router.route("/getUser").get(async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (e) {
    return res.status(400).json("Error " + e);
  }
});


router.route("/signup").post(async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const { userName, email, password } = req.body;
  const hasPassword = await bcrypt.hash(password, salt);

  // check if user already exists
  const userExist = await User.findOne({ userName });
  if (userExist) return res.status(409).json("User already exists");
  const newUser = new User({
    userName: userName,
    email: email,
    password: hasPassword,
  });

  try {
    const registeredUser = await newUser.save();
    let payload = {
      id: registeredUser._id,
      user_type_id: req.body.user_type_id || 0,
    };
    const token = jwt.sign(payload, config.JWT_SECRET);
    res.status(200).json({ token });
  } catch (e) {
    return res.status(400).json("Error " + e);
  }
});


router.route("/login").post(async (req, res) => {
  try {
    const { userName, password } = req.body;
    const userExist = await User.findOne({ userName });
    if (!userExist) return res.status(401).json("Invalid username or password");

    const validPass = await bcrypt.compare(password, userExist.password);

    if (!validPass) return res.status(401).json("Invalid username or password");

    let payload = { id: userExist._id, user_type_id: userExist.user_type_id };
    const token = jwt.sign(payload, config.JWT_SECRET);

    res.status(200).json({ token });
  } catch (e) {
    return res.status(400).json("Error. " + e);
  }
});

router.route("/events").get(verifyUserToken);

router.route("/getData").get(async (req, res) => {
  try {
    const id = req.body.id;
    const data = await User.findById(id);
    res.json(data);
  } catch (e) {
    return res.status(400).json("Error " + e);
  }
});
module.exports = router;
