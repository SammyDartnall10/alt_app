const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const gravatar = require("gravatar");
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

const User = require("../../models/User");

// @route   POST users
// @desc    Register
// @access  Public
router.post(
  "/",
  [
    check("name", "Please enter a username").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Please enter more than 6 characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // See if User exists
      let user = await User.findOne({ email: email });
      let userName = await User.findOne({ name: name });

      if (user || userName) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Email/Username already exists" }] });
      }

      // Get Users Gravatar
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });

      // Create new User instance
      user = new User({
        name,
        email,
        avatar,
        password,
      });

      // Salt for hashing
      const salt = await bcrypt.genSalt(10);

      // Hash password
      user.password = await bcrypt.hash(password, salt);

      // Save to database

      await user.save();

      // Return the JWT token
      // Mongoose uses id not _id
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 3600000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   GET api/users/me
// @desc    get current users login details
// @access  Private
router.get("/me", auth, async (req, res) => {
  try {
    const account = await User.findOne({
      _id: req.user.id,
    }).select("-password");

    if (!account) {
      return res.status(400).json({ msg: "User account not found" });
    }
    return res.json(account);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   EDIT api/users/me
// @desc    edit current users login details
// @access  Private
router.put("/me", auth, async (req, res) => {
  try {
    const { name, email, password, avatar } = req.body;

    // Build user object
    const userFields = {};
    if (name) userFields.name = name;
    if (email) userFields.email = email;
    if (password) userFields.password = password;
    if (avatar) userFields.avatar = avatar;

    try {
      // Using upsert option (creates new doc if no match is found):
      let user = await User.findOneAndUpdate(
        { _id: req.user.id },
        { $set: userFields },
        { new: true, upsert: true, useFindAndModify: false }
      );

      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

// TODO separate password reset functionality
// TODO Delete funtion - make it so it deletes the user and profile at the same time
