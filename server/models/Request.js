const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
      },
    sitterId:{
        type: String,
        required: true,
    },
    start:{
        type: Date,
        required: true
    },
    end:{
        type: Date,
        required: true,
    },
    status:{
        type: String,
        enum : ["accepted", "declined"],
        default: "declined"
    },
    paid:{
        type: Boolean,
        default: false
    }
});

module.exports = RequestModel = mongoose.model("request",requestSchema);

