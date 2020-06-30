const express = require("express");
const auth = require("../../middleware/auth");
const Location = require("../../models/Location");
const router = express.Router();

// @route   GET api/location
// @desc    Get all locations
// @access  Public
router.get("/", async (req, res) => {
  try {
    let location = await Location.find();
    res.json(location);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/location
// @desc    Got one location from ID
// @access   Public
router.get("/:id", async (req, res) => {
  try {
    let location = await Location.findById({
      _id: req.params.id,
    });
    res.json(location);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/location
// @desc    Create a Location
// @access  Private
router.post("/", auth, async (req, res) => {
  const {
    businessName,
    businessAddress,
    email,
    phone,
    owner,
    locType,
  } = req.body;

  try {
    // See if Location exists
    let busName = await Location.findOne({ businessName: businessName });
    let busAddress = await Location.findOne({
      businessAddress: businessAddress,
    });

    if (busName && busAddress) {
      return res.status(400).json({
        errors: [{ msg: "A location with that name/address already exists" }],
      });
    }

    const location = await new Location({
      regBy: req.user.id,
      businessName,
      businessAddress,
      email,
      phone,
      owner,
      locType,
    });

    location.save();

    res.json(location);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/location/:id
// @desc    Update a Location
// @access  Private
router.put("/:id", auth, async (req, res) => {
  const {
    businessName,
    businessAddress,
    email,
    phone,
    owner,
    locType,
  } = req.body;

  const updateLocation = {};
  if (businessName) updateLocation.businessName = businessName;
  if (businessAddress) updateLocation.businessAddress = businessAddress;
  if (email) updateLocation.email = email;
  if (phone) updateLocation.phone = phone;
  if (owner) updateLocation.owner = owner;
  if (locType) updateLocation.locType = locType;

  try {
    const location = await Location.findOneAndUpdate(
      { _id: req.params.id },
      { $set: updateLocation },
      { new: true, upsert: true, useFindAndModify: false }
    );

    return res.json(location);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/location/offer/:id
// @desc    Update a Location with an offer
// @access  Private
router.put("/offers/:id", auth, async (req, res) => {
  const { title, desc, code, exp } = req.body;

  const offerObj = {};
  offerObj.user = req.user.id;
  offerObj.addedBy = req.user.name;
  if (title) offerObj.title = title;
  if (desc) offerObj.desc = desc;
  if (code) offerObj.code = code;
  if (exp) offerObj.exp = exp;

  try {
    const location = await Location.findById({ _id: req.params.id });

    location.offers.unshift(offerObj);
    await location.save();

    return res.json(location);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   DELETE api/location/offer/:id/:offer
// @desc    Delete an offer from a location
// @access  Private

// router.delete("/comment/:id/:comment_id", auth, async (req, res) => {})
router.delete("/offers/:id/:offer", auth, async (req, res) => {
  try {
    const location = await Location.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      { $pull: { offers: { _id: req.params.offer } } },
      { safe: true, upsert: true }
    );
    await location.save();
    return res.json(location);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

// offers: [
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "users",
//     },
//     addedBy: {
//       type: String,
//       req: true,
//     },
//     title: {
//       type: String,
//       req: true,
//     },
//     desc: {
//       type: String,
//       req: true,
//     },
//     code: {
//       type: String,
//     },
//     exp: {
//       type: Date,
//       req: true,
//     },
//   },

//   // Displayed Name
//   businessName: {
//     type: String,
//     required: true,
//   },
//   businessAddress: {
//     streetOne: {
//       type: String,
//     },
//     streetTwo: {
//       type: String,
//     },
//     region: {
//       type: String,
//     },
//     streetOne: {
//       type: String,
//     },
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   phone: {
//     type: String,
//   },
//   owner: {
//     type: String,
//   },
//   locType: {
//     type: String,
//     required: true,
//   },
//   offers: [
//     {
//       user: {
//         type: Schema.Types.ObjectId,
//         ref: "users",
//       },
//       addedBy: {
//         type: String,
//         req: true,
//       },
//       title: {
//         type: String,
//         req: true,
//       },
//       desc: {
//         type: String,
//         req: true,
//       },
//       code: {
//         type: String,
//       },
//       exp: {
//         type: Date,
//         req: true,
//       },
//     },
//   ],
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// });
