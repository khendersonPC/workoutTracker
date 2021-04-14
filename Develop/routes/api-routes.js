const express= require('express');
const router = express.Router();
const Workout = require('../models/workout')

router.get('/api/workouts', async(req, res)=>{
 
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {$sum: '$exercises.duration'}
            }
        }
    ]) /*then(
        res.json(workouts.sort((a, b)=>b.day-a.day).slice(0,7))
    );*/
    .then((dbDuration) => {
        res.json(dbDuration);
    })

})

router.post('/api/workouts', async(req, res)=>{

    const newWO= await Workout.create(req.body)
    
    res.json(newWO)
})

router.put('/api/workouts/:id', async(req, res)=>{
    
    const updatedWO= await Workout.updateOne({_id:req.params.id},{
        $push:{exercises:req.body}
    })
    res.json(updatedWO)
})

router.get(`/api/workouts/range`, async(req,res)=>{
    
    const workouts = await Workout.find();

     Workout.aggregate([
        {
            $addFields: {
                totalDuration: {$sum: '$exercises.duration'}
            }
        }
    ]) /*then(
        res.json(workouts.sort((a, b)=>b.day-a.day).slice(0,7))
    );*/
    .sort({_id: -1})
    .limit(7)
    .then((dbDuration) => {
        res.json(dbDuration);
    })

})


module.exports=router;