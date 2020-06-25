const mongoose = require("mongoose");

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
  location: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Profile", ProfileSchema);
