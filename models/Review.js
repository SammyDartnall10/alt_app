const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
  businessReviewed: {
    type: String,
    required: true,
  },
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
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Review", ReviewSchema);
