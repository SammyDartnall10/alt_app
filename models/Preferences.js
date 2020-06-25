const mongoose = require("mongoose");

const PreferencesSchema = mongoose.Schema({
  businessFeatures: {
    type: String,
    required: true,
  },
  featuresBy: {
    type: String,
    required: true,
  },
  space: {
    type: String,
  },
  noise: {
    type: String,
  },
  plugs: {
    type: String,
  },
  food: {
    type: Boolean,
  },
  time: {
    type: String,
  },
  groupSize: {
    type: String,
  },
  kidFriendly: {
    type: Boolean,
  },
  petFriendly: {
    type: Boolean,
  },
  privacy: {
    type: String,
  },
  wifi: {
    type: Boolean,
  },
  parking: {
    type: Boolean,
  },
  storage: {
    type: Boolean,
  },
  coffee: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Preferences", PreferencesSchema);
