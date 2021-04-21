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

// Add Exercise | /api/workouts/608096aa6918b331584a17f8
router.post("/api/workouts/:id", (req, res) => {
    
    console.log(req.params.id);
    res.json(req.body)
    
    // Workout.create(body)
    //   .then(data => {
    //     res.json(data);
    //   })
    //   .catch(err => {
    //     res.status(400).json(err);
    //   });

  });

// Export routes for use in server?
module.exports = router;