const mongoose = require("mongoose");

// TODO when User model is implemented use references for userId and sitterId , example= userId :{ type: Schema.Types.ObjectId, ref: "User"}
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
