const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const config = require("config");
const User = require("../models/User");

// @route   POST users
// @desc    Register a user
// @access  Public
router.post(
  "/",
  [
    check("firstName", "Please add first name").not().isEmpty(),
    check("lastName", "Please add first name").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Pleas enter more the 6 characters").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { firstName, lastName, email, password } = req.body;

    try {
      let user = await User.findOne({ email: email });

      if (user) {
        return res.status(400).json({ msg: "Uer already exists" });
      }
      user = new User({
        firstName,
        lastName,
        email,
        password,
      });

      await user.save();
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }

    return res.json({ msg: "user saved" });
  }
);

module.exports = router;

// "/",
//   [
//     check("name", "Please add name").not().isEmpty(),
//     check("email", "Please include a valid email").isEmail(),
//     check("password", "Pleas enter more the 6 characters").isLength({ min: 6 }),
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { name, email, password } = req.body;

//     try {
//       let user = await User.findOne({ email: email });

//       if (user) {
//         return res.status(400).json({ msg: "Uer already exists" });
//       }
//       user = new User({
//         name,
//         email,
//         password,
//       });

//       const salt = await bcrypt.genSalt(10);

//       user.password = await bcrypt.hash(password, salt);

//       await user.save();

//       const payload = {
//         user: {
//           id: user.id,
//         },
//       };

//       jwt.sign(
//         payload,
//         config.get("jwtSecret"),
//         {
//           expiresIn: 360000,
//         },
//         (err, token) => {
//           if (err) throw err;
//           res.json({ token });
//         }
//       );
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send("Server Error");
//     }
//   }
