const express = require("express");
const router = express.Router();
const db = require("../models");

// Get Excercises From Workouts DB
// router.get('/api/workouts', (req, res) => {
//     console.log(req);
//     res.send({type: 'GET'});
// });

router.get('/api/workouts', (req, res) => {
    db.Workout.find({}, (err, workouts) => {
        if(err){
            console.log(err);
        } else {
            res.json(workouts)
        }
    });
});

router.put("/api/workouts/:id", ({ params, body }, res) => {
    db.Workout.findOneAndUpdate({ _id: params.id },
            {$push: {exercises:body }},
            { upsert: true, useFindandModify:false},
            updatedWorkout => {
                res.json(updatedWorkout);
            })
});

router.post('/api/workouts', (req, res) => {
    db.Workout.create({}).then(newExercise => {
        res.json(newExercise);
    })
    .catch(err => {
        res.json(err)
    })
});

router.get('/api/workouts/range', (req, res) => {
    db.Workout.find({}).limit(7).then((found) => {
        res.json(found);
    })
    .catch(err => {
        res.json(err)
    })
});

module.exports = router;