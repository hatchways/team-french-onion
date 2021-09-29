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
        min: this.start,
    },
    status:{
        type: Boolean,
        default: False
    },
    paid:{
        type: Boolean,
        default: False
    }
});

module.exports = RequestModel = mongoose.model("request",requestSchema);

