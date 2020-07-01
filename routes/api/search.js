const express = require("express");
const router = express.Router();

// @route   GET search results
// @desc    Test route
// @access  Public
router.get("/", (req, res) => res.send("Search route"));

module.exports = router;
