const mongoose = require("mongoose");
const PreferencesSchema = require("../models/Preferences").schema;

const ReviewSchema = mongoose.Schema({
  // the id of the locaton being reviewed - not visible
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "location",
  },
  // Displayed location name
  businessName: {
    type: String,
    required: true,
  },
  //The id of the user making the review - not visible
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  // Displayed user name
  reviewedBy: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  facilities: [PreferencesSchema],
  likes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    },
  ],
  comments: [
    {
      //The id of the user making the comment - not visible
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
      text: {
        type: String,
        required: true,
      },
      //The display name of the user making the review
      name: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Review", ReviewSchema);
