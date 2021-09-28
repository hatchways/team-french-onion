const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
    user_id:{
        type: String,
        required: true,
      },
    sitter_id: {
        type: String,
        required: true,
    },
    start: {
        type: Date,
        required: true
    },
    end:{
        type: Date,
        required: true
    },
    accepted:{
        type: Boolean,
        default: False
    },
    declined: {
        type: Boolean,
        default: False
    },
    paid: {
        type: Boolean,
        default: False
    }
})

module.exports = mongoose.model("request",requestSchema)

