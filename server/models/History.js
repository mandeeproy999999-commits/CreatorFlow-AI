const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({

    topic:{
        type:String,
        required:true
    },

    audience:String,

    tone:String,

    response:Object

},{
    timestamps:true
});

module.exports = mongoose.model("History",historySchema);