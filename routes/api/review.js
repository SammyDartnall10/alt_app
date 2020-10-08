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
// router.get("/:id", (req, res) => {
//   let profile = Location.findById(req.params.id);
//   return res.json(profile);
// });

// @route   POST api/review/:id
// @desc    Post a review for a location
// @access  Private
router.put("/:id", auth, async (req, res) => {
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
router.get("/:id", auth, async (req, res) => {
  try {
    let reviews = await Review.find({ location: req.params.id });
    return res.json(reviews);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// { location: req.params.id }
// 5efab6e3e2402480381274a9

// @route   GET api/
// @desc    Get one review for a location
// @access  Private
router.get("/view/:id", auth, async (req, res) => {
  console.log("Getting one review")
  try {
    let review = await Review.find({ _id: req.params.id });
    return res.json(review);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/review/:id
// @desc    Update a review for a location if user that made it
// @access  Private
// id: /5f088f8500d82e6f79d6f8e7
router.put("/:id", auth, async (req, res) => {
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
  const reviewRecord = await Review.findById(req.params.id);
  const reviewOwner = await User.findById(req.user.id);
  console.log(reviewRecord);

  //Create the review object
  const revObj = {};
  // revObj.location = req.params.id;
  // revObj.businessName = locationReviewed.businessName;
  // revObj.user = req.user.id;
  // revObj.reviewedBy = reviewOwner.name;
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
  // console.log(reviewRecord.user);
  // console.log(req.user.id.toString());
  // console.log(typeof reviewRecord.user);
  // console.log(typeof req.user.id.toString());

  try {
    if (reviewRecord.user.toString() !== req.user.id.toString()) {
      console.error("You are not the owner of this review");
      res.status(500).send("You are not the owner of this review");
    }

    const updateReview = await Review.findOneAndUpdate(
      { _id: req.params.id },
      { $set: revObj },
      { new: true, upsert: true, useFindAndModify: false }
    );

    return res.json(updateReview);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   Delete api/review/:id
// @ desc   Delete a Post a review for a location if the owner
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  //Look up the review being deleted:
  const reviewRecord = await Review.findById(req.params.id);

  try {
    if (reviewRecord.user.toString() !== req.user.id.toString()) {
      console.error("You are not the owner of this review");
      res.status(500).send("You are not the owner of this review");
    }
    await Review.deleteOne({ _id: req.params.id });

    return res.json({ msg: "Review removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/review/comment/:id
// @desc    Make a comment on a review
// @access  Private
// _id 5f088fa300d82e6f79d6f8e9

router.put("/comment/:id", auth, async (req, res) => {
  const { text } = req.body;

  try {
    const loggedUser = await User.findOne({ _id: req.user.id });
    const review = await Review.findOne({ _id: req.params.id });

    console.log(review);

    const newComment = {};
    newComment.user = req.user.id;
    newComment.name = loggedUser.name;
    if (text) newComment.text = text;

    review.comments.unshift(newComment);
    await review.save();

    return res.json(review);

    // post.comments.unshift(newComment);
    //   await post.save();
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   DELETE api/review/comment/:id
// @desc    Delete a comment on a review
// @access  Private
router.delete("/comment/:id/:commentid", auth, async (req, res) => {
  try {
    //Look up the review with the commnet being deleted:
    const reviewRecord = await Review.findById(req.params.id);

    // Pull out the comment
    const comment = reviewRecord.comments.find(
      (comment) => comment.id === req.params.commentid
    );

    //Make sure comment exists
    if (!comment) {
      return res.status(404).json({ msg: "Comment not found" });
    }

    // Check user
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorised to delete" });
    }

    // Find the index of the comment
    const removeIndex = reviewRecord.comments
      .map((comment) => comment.user.toString())
      .indexOf(req.user.id);

    reviewRecord.comments.splice(removeIndex, 1);

    await reviewRecord.save();

    return res.json({ msg: "Comment removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/review/likes
// @desc    Like a review
// @access  Private
//id  5f088fa300d82e6f79d6f8e9
//id  5f088d1e8ce7926ef81bca54
router.put("/like/:id", auth, async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    //Check if post has been liked by user
    if (
      review.likes.filter((like) => like.user.toString() === req.user.id)
        .length > 0
    ) {
      return res.status(400).json({ msg: "post already liked" });
    }
    review.likes.unshift({ user: req.user.id });

    await review.save();

    return res.json(review);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error ");
  }
});

// @route   PUT api/review/likes
// @desc    Unlike a review
// @access  Private
router.put("/unlike/:id", auth, async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    //Check if post has been liked by user
    if (
      review.likes.filter((like) => like.user.toString() === req.user.id)
        .length === 0
    ) {
      return res.status(400).json({ msg: "post has not yet been liked liked" });
    }
    // Get remove indea
    const removeIndex = review.likes.map((like) =>
      like.user.toString().indexOf(req.user.id)
    );

    review.likes.splice(removeIndex, 1);

    await review.save();

    return res.json(review);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error ");
  }
});

module.exports = router;

// Possibly TODO - can add in later

// @route   PUT api/review/comment/likes
// @desc    Like a comment
// @access  Private

// @route   PUT api/review/comment/likes
// @desc    Unlike a comment
// @access  Private

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
