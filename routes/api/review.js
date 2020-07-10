const express = require("express");
const auth = require("../../middleware/auth");
const Preferences = require("../../models/Preferences");
const Location = require("../../models/Location");
const User = require("../../models/User");
const Review = require("../../models/Review");
const { route } = require("./auth");
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
  const {
    review,
    rating,
    space,
    noise,
    plugs,
    food,
    time,
    groupSize,
    kidFriendly,
    petFriendly,
    privacy,
    wifi,
    parking,
    storage,
    coffee,
  } = req.body;

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

  //Build the extra details (based on Pref) object
  revObj.facilities = {};
  if (space) revObj.facilities.space = space;
  if (noise) revObj.facilities.noise = noise;
  if (plugs) revObj.facilities.plugs = plugs;
  if (food) revObj.facilities.food = food;
  if (time) revObj.facilities.time = time;
  if (groupSize) revObj.facilities.groupSize = groupSize;
  if (kidFriendly) revObj.facilities.kidFriendly = kidFriendly;
  if (petFriendly) revObj.facilities.petFriendly = petFriendly;
  if (privacy) revObj.facilities.privacy = privacy;
  if (wifi) revObj.facilities.wifi = wifi;
  if (parking) revObj.facilities.parking = parking;
  if (storage) revObj.facilities.storage = storage;
  if (coffee) revObj.facilities.coffee = coffee;

  console.log(revObj);

  try {
    const newReview = await new Review(revObj);

    await newReview.save();
    return res.json(newReview);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/:id
// @desc    Get all reviews for a location
// @access  Private
router.get("/:id", async (res, rep) => {
  try {
    const allReviews = await Review.find({ location: req.params.id });
    return res.json(allReviews);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

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

// //Build the object
// const {
//   space,
//   noise,
//   plugs,
//   food,
//   time,
//   groupSize,
//   kidFriendly,
//   petFriendly,
//   privacy,
//   wifi,
//   parking,
//   storage,
//   coffee,
// } = req.body;
