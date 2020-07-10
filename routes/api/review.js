const express = require("express");
const auth = require("../../middleware/auth");
const Preferences = require("../../models/Preferences");
const Location = require("../../models/Location");
const User = require("../../models/User");
const router = express.Router();

// @route   GET api/posts
// @desc    Test route
// @access  Public
router.get("/:id", (req, res) => {
  let profile = Location.findById(req.params.id);
  return res.json(profile);
});

// @route   POST api/review/:id
// @desc    Post a review for a location
// @access  Private
router.post("/:id", auth, async (req, res) => {
  const { review, rating } = req.body;

  //Look up the location being reviewed:
  const locationReviewed = await Location.findById(req.params.id);
  const reviewOwner = await User.findById(req.user.id);
  console.log(locationReviewed);

  //Create the review object
  const revObj = {};
  revObj.location = req.params.id;
  revObj.businessName = locationReviewed.businessName;
  revObj.user = req.user.id;
  revObj.reviewedBy = reviewOwner.name;
  if (review) revObj.review = review;
  if (rating) revObj.rating = rating;

  console.log(revObj);
  return res.json(locationReviewed);
});

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

//  // the id of the locaton being reviewed - not visible - req.params
//  location: {
//   type: Schema.Types.ObjectId,
//   ref: "location",
// },
// // Displayed location name
// businessName: {
//   type: String,
//   required: true,
// },
// //The id of the user making the review - not visible req.user
// user: {
//   type: Schema.Types.ObjectId,
//   ref: "users",
// },
// // Displayed user name
// reviewedBy: {
//   type: String,
//   required: true,
// },
// review: {
//   type: String,
//   required: true,
// },
// rating: {
//   type: String,
//   required: true,
// },
// facilities: [PreferencesSchema],

//--------------------------------------------------------
//   likes: [
//     {
//       user: {
//         type: Schema.Types.ObjectId,
//         ref: "users",
//       },
//     },
//   ],
//   comments: [
//     {
//       user: {
//         type: Schema.Types.ObjectId,
//         ref: "users",
//       },
//       text: {
//         type: String,
//         required: true,
//       },
//       name: {
//         type: String,
//       },
//       date: {
//         type: Date,
//         default: Date.now,
//       },
//     },
//   ],
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// });
