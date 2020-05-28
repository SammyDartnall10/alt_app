const mongoose = require("mongoose");

const LocationSchema = mongoose.Schema({
  businessName: {
    type: String,
    required: true,
  },
  businessAddress: {
    type: Object,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  owner: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Location", LocationSchema);

// streetOne: {
//   type: String,
//   required: true,
// },
// streetTwo: {
//   type: String,
//   required: true,
// },
// city: {
//   type: String,
//   required: true,
// },
// state: {
//   type: String,
//   required: true,
// },
// country: {
//   type: String,
//   required: true,
// },
// number: {
//   type: String,
//   required: true,
// },
