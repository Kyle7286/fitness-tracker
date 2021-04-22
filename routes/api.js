const router = require("express").Router();
const Workout = require("../models/Workout.js");



// Displays Latest Workout | /api/workouts
router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .sort({ day: 1 })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// Add Exercise | PUT /api/workouts/608096aa6918b331584a17f8
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


// Create Workout | POST /api/workouts/
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


// View Stats | GET /api/workouts/range
router.get("/api/workouts/range", (req, res) => {

    Workout.find()
        .sort({ day: -1 })
        .limit(7)
        .sort({ day: 1 })
        .then(data => {
            console.log(data);
            res.status(200).json(data);
        })
        .catch(e => {
            console.log(e);
            res.status(400).json(e)
        });

});

// Export routes for use in server?
module.exports = router;