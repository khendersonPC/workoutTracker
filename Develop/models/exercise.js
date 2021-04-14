const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const exerciseSchema= new mongoose.Schema({
    type:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true
    },
    duration:{
        type: Number,
        required: true
    },
    weight:{
        type: Number,
        required: false
    },
    reps:{
        type: Number,
        required: false
    },
    sets:{
        type: Number,
        required: false
    },
    distance:{
        type: Number,
        required: false
    }



})

module.exports = mongoose.model('Exercise', exerciseSchema);
