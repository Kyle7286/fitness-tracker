const router = require("express").Router();
const Workout = require("../models/Workout.js");



// getLastWorkout() | /api/workouts
router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// Export routes for use in server?
module.exports = router;