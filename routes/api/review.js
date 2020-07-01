const express = require("express");
const router = express.Router();

// @route   GET api/posts
// @desc    Test route
// @access  Public
router.get("/", (req, res) => res.send("Reviews route"));

// @route   POST api/review/:id
// @desc    Post a review for a location
// @access  Private

// @route   GET api/
// @desc    Get all reviews for a location
// @access  Private

// @route   GET api/
// @desc    Get one review for a location
// @access  Private

// @route   PUT api/review/:id
// @desc    Update a review for a location if user that made it
// @access  Private

// @route   Delete api/review/:id
// @ desc   Delete a Post a review for a location if the owner
// @access  Private

// @route   PUT api/review/comment/:id
// @desc    Make a comment on a review
// @access  Private

// @route   Update api/comment/:id
// @desc    Update a comment on a review
// @access  Private

// @route   PUT api/review/likes
// @desc    Like a review
// @access  Private

// @route   PUT api/review/comment/likes
// @desc    Like a comment
// @access  Private

// @route   PUT api/review/likes
// @desc    Unlike a review
// @access  Private

// @route   PUT api/review/comment/likes
// @desc    Unlike a comment
// @access  Private

module.exports = router;
