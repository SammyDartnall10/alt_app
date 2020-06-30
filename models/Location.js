const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  regBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  // Displayed Name
  businessName: {
    type: String,
    required: true,
  },
  businessAddress: {
    streetOne: {
      type: String,
      required: true,
    },
    streetTwo: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
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
  locType: {
    type: String,
    required: true,
  },
  offers: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
      addedBy: {
        type: String,
      },
      title: {
        type: String,
        req: true,
      },
      desc: {
        type: String,
        req: true,
      },
      code: {
        type: String,
      },
      exp: {
        type: Date,
        req: true,
      },
      dateAdded: {
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

module.exports = mongoose.model("Location", LocationSchema);
