const mongoose = require("mongoose");

const LocationSchema = mongoose.Schema({
  businessName: {
    type: String,
    required: true,
  },
  businessAddress: {
    streetOne: {
      type: String,
    },
    streetTwo: {
      type: String,
    },
    region: {
      type: String,
    },
    streetOne: {
      type: String,
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
        type: Schema.Types.ObjectId,
        ref: "users",
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
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Location", LocationSchema);
