// import mongoose from "mongoose";
const mongoose = require('mongoose');
const { Schema } = mongoose;

const ServiceSchema = Schema({
    name:{
        type: String,
        required:true
    },
    type:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required: true
    },
    professional:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        min:0,
        max:5
    },
    duration:{
        type: Number,
        required: true
    },
    consultants:{
        type: String,
        required: false
    },
    appointments:[{
        type: Date,
        required: false
    }]
});

module.exports = mongoose.model("Services", ServiceSchema);