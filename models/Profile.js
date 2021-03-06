const mongoose = require("mongoose");
// const childPrefs = require("../models/Preferences");
const PreferencesSchema = require("../models/Preferences").schema;

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  title: {
    type: String,
  },
  industry: {
    type: String,
  },
  favourites: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "locations",
  },
  searchSettings: {
    type: PreferencesSchema,
    default: {}
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Profile", ProfileSchema);
