const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const Profile = require("../../models/Profile");

// @route   POST api/profiles
// @desc    Create or Update a profile
// @access  Private
router.post("/", auth, async (req, res) => {
  const { firstName, lastName, title, industry, location } = req.body;

  // Build profile object
  const profileFields = {};
  profileFields.user = req.user.id;
  if (firstName) profileFields.firstName = firstName;
  if (lastName) profileFields.lastName = lastName;
  if (location) profileFields.location = location;
  if (title) profileFields.title = title;
  if (industry) profileFields.industry = industry;

  try {
    // Using upsert option (creates new doc if no match is found):
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true, upsert: true, useFindAndModify: false }
    );
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/profile/me
// @desc    Get profile for user
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    if (!profile) {
      return res.status(404).json({ msg: "Cannot find the profile" });
    }

    return res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Edit preferences for a profile (PUT)
router.put("/:id", auth, async (req, res) => {
  try {
    // Possibly check for input with validator at some point

    // Check the logged in user matches the user in the profile

    //Build the object
    const {
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

    console.log("Found consts");

    const prefObject = {};
    if (space) prefObject.space = space;
    if (noise) prefObject.noise = noise;
    if (plugs) prefObject.plugs = plugs;
    if (food) prefObject.food = food;
    if (time) prefObject.time = time;
    if (groupSize) prefObject.groupSize = groupSize;
    if (kidFriendly) prefObject.kidFriendly = kidFriendly;
    if (petFriendly) prefObject.petFriendly = petFriendly;
    if (privacy) prefObject.privacy = privacy;
    if (wifi) prefObject.wifi = wifi;
    if (parking) prefObject.parking = parking;
    if (storage) prefObject.storage = storage;
    if (coffee) prefObject.coffee = coffee;

    // Find by Id and update
    // Model.findByIdAndUpdate(id, { name: "jason bourne" }, options, callback);
    const profile = await Profile.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { searchSettings: prefObject } },
      { new: true, upsert: true, useFindAndModify: false }
    );

    return res.json(profile);
    // return the updated profile
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route  GET api/profiles/:id
//@desc   Get a profile by id - search for other users
//@access Private
router.get("/:id", auth, async (req, res) => {
  try {
    const profile = await Profile.findById({ _id: req.params.id });

    if (!profile) {
      return res.status(404).json({ msg: "Cannot find the profile" });
    }
    return res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Delete profile (and user account)
// Can do at end as a full smoke test

// @route   GET api/profiles
// @desc    Get all profiles
// @access  Public
router.get("/", (req, res) => res.send("Get all profiles"));

module.exports = router;
