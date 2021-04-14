const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const workoutSchema = new mongoose.Schema({

    day: {
        type:Date,
        required: true,
        default:  new Date().setDate(new Date().getDate())
    },
    exercises: [{
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
    }]

});

module.exports = mongoose.model('workout', workoutSchema);


