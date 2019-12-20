const express = require('express');
const db = require("./hobbitsModel.js");
const router = express.Router();

router.get('/', async (req,res)=>{
    try{
         const hobbits = await db.getAll()
        if(hobbits){
            res.status(200).json({hobbits})
        }
    }
    catch(err){
        console.log("ERROR",err)
        res.status(500).json(err)
    }
})

router.post('/', async (req,res)=>{
    hobbit = req.body;
    try{
        const id = await db.insert(hobbit)
        if(id){
            res.status(200).json({id})
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({err})
    }
})

router.delete("/:id",  (req,res)=>{
    const id = req.params.id;
    console.log("id", id)

    db.remove(id)
    .then(()=>{
        res.status(200).json({message: "Hobbit was deleted"})
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).json([err])
    })
})

module.exports = router;