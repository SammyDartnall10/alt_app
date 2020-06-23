const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const User = require("../../models/User");

// @route   POST users
// @desc    Register
// @access  Public
router.post(
  "/",
  [
    check("firstName", "What is your first name?").not().isEmpty(),
    check("lastName", "What is your last name?").not().isEmpty(),
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

    const { firstName, lastName, email, password } = req.body;

    try {
      // See if User exists
      let user = await User.findOne({ email: email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msh: "user already exists" }] });
      }

      // // Get Users Gravatar
      // const avatar = gravatar.url(email, {
      //   s: "200",
      //   r: "pg",
      //   d: "mm",
      // });

      // Create new User instance
      user = new User({
        firstName,
        lastName,
        email,
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

// @route   GET users
// @desc    Find a user
// @access  Public
router.get("/", (req, res) => {
  res.send("User route");
});

module.exports = router;

// router.post(
//   "/",
//   [
//     check("name", "Please add name").not().isEmpty()
//   ],
//   (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       res.status(400).json({ errors: errors.array() });
//     }
//     res.send("User route");
//   }
// );
