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

router.route("/placeOrder").post((req,res)=>{
    const buyer_id=req.body.buyer_id
    const ad_id=req.body.ad_id
    const delivery=req.body.delivery
    const status=req.body.status

    const newOrder = new user.Order({
        buyer_id:buyer_id,
        ad_id:ad_id,
        delivery:delivery,
        status:status
    })
    newOrder.save(function(err){
        if(err){
            console.log(err)
            res.json({error:err})
        }else{
            res.json("Order Created!")
        }
    })
})
router.route("/addToLog/:id").post((req,res)=>{
    
    user.Buyer.findOneAndUpdate(
        { reference: req.params.id }, 
        { $push: { log: req.body.ad_id  } },
       function (error, success) {
             if (error) {
                 console.log(error);
             } else {
                 console.log(success);
             }
         });
})

router.route("/getTransaction")


module.exports = router;