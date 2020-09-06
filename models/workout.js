const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const exerciseSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Create a name']
    },
    type: {
        type: String,
        trim: true,
        required: [true, 'What Type of workout is this?']
    },
    weight: {
        type: Number,
        trim: true,
        required: [true, 'Add some weight']
    },
    sets: {
        type: Number,
        trim: true,
        required: [true, 'No sets? Try for 3 sets']
    },
    reps: {
        type: Number,
        trim: true,
        required: [true, 'More Reps = Gains']
    },
    duration: {
        type: Number,
        required: [true, 'Enter Duration'],
    },
    distance: {
        type: Number,
        required: [true, 'Enter Distance']
    }
});

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        exerciseSchema
    ]
});


const workout = mongoose.model('workout', workoutSchema);
module.exports = workout;