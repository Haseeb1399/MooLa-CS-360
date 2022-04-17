const router = require('express').Router(); 
const { add } = require('nodemon/lib/rules');
const multer = require('multer');

let user = require('../../models/user');
const path = require('path');


router.route("/getItem/:id").get((req,res)=>{
    user.Buyer.find({reference:req.params.id})
    .populate(['cart'])
    .exec((err,response)=>{
        if(err==null){
            res.json(response)
        }else{
            res.json({error:err})
        }
    })
})

router.route("/removeItem/:id").get((req,res)=>{
    user.Buyer.findOneAndUpdate({reference:req.params.id},{
        cart:null
    },function(err,docs){
        if(err){
            console.log(err)
        }else{
            res.json("Removed!")
        }
    })
})

module.exports = router;