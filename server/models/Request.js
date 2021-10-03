const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  sitterId: {
    type: String,
    required: true,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
    validate: {
      validator: function (v) {
        return v > this.start;
      },
      message: "End Date must later than Start Date",
    },
  },
  status: {
    type: String,
    enum: ["accepted", "declined", "pending"],
    default: "pending",
  },
  paid: {
    type: Boolean,
    default: false,
  },
});

module.exports = Request = mongoose.model("Request", requestSchema);
