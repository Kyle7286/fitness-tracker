const router = require("express").Router();
const Workout = require("../models/Workout.js");



// Displays | /api/workouts
router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// Add Exercise | /api/workouts/608096aa6918b331584a17f8
router.put("/api/workouts/:id", (req, res) => {

    Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


// Create Workout | /api/workouts/
router.post("/api/workouts/", ({ body }, res) => {
    Workout.create(body)
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// Export routes for use in server?
module.exports = router;