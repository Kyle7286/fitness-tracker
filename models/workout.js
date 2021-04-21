const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter a type of workout"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter a name for the workout"
            },
            duration: {
                type: Number,
                // required: "Enter a duration for the workout"
            },
            weight: {
                type: Number,
                // required: "Enter a weight"
            },
            reps: {
                type: Number,
                // required: "Enter how many reps"
            },
            sets: {
                type: Number,
                // required: "Enter how many sets"
            },
        }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;