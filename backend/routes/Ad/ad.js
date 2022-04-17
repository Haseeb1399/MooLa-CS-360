const router = require('express').Router(); 
const { add } = require('nodemon/lib/rules');
const multer = require('multer');

let user = require('../../models/user');
const path = require('path');
var mongoose = require("mongoose")
mongoose.Promise = require('bluebird');


const storage =multer.diskStorage({
    destination:'uploads',
    filename:function(req,file,cb){
        const fileName = file.originalname.toLocaleLowerCase().split(" ").join('-')
        cb(null,Date.now()+fileName)
    }
})

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
let upload = multer({ storage, fileFilter });


router.route('/active').get((req,res) => {
    user.Ad.find({sold:req.body.sold})
    .populate(['animal_id','seller_id'])
    .exec((err,response) => {
        if (err == null)
        {
            res.json({message:response});
        }else{
            res.json({error:err})
        }
    })
})

router.route('/delete/watchlist').post((req,res) => {
    console.log(req.body)
    user.watch.findByIdAndDelete({_id:req.body.id},function(err,obj){
        if(err){
            console.log(err)
        }else{
            console.log(obj)
        }
    })
    // user.watch.deleteOne({ad_id:req.body._id}, function(err,obj){
    //     if(err)console.log(err)
    //     else console.log(obj)
    // })
})

router.route('/watchlist').get((req,res) => {
    user.watch.find({})
    .populate(['ad_id','seller_id','animal_id'])
    .exec((err,response) => {
        if (err == null)
        {
            res.json({message:response});
        }else{
            res.json({error:err})
        }
    })
})



router.route('/post/watchlist').post((req,res) => {
    console.log(req.body)
    const a_id = req.body.a_id;
    const b_id = req.body.b_id;
    const animal_id = req.body.animal_id;
    const seller_id = req.body.seller_id;
    const new_list = user.watch({
        ad_id :a_id,
        buyer_id : b_id,
        animal_id:animal_id,
        seller_id:seller_id
    });
    new_list.save(function (err) {
        if(err) res.json({error:err})
        else res.json({message:"added to watchlist"})
    })
})


router.route('/marketplace').post((req,res) => {
    sex = req.body.sex;
   if(sex == "Male" || sex == "Female") {
        user.Ad.find({ad_type:req.body.ad_type, sold:false,sex:sex})
        .populate(['animal_id',"seller_id"]) //Make sure sold is false
        .exec((err,response)=>{
            if (err == null)
            {
                res.json(response);
            }else{
                res.json({error:err})
            }
        })
    }
    else {
        user.Ad.find({ad_type:req.body.ad_type, sold:false})
        .populate(['animal_id',"seller_id"]) //Make sure sold is false
        .exec((err,response)=>{
            if (err == null)
            {
                res.json(response);
            }else{
                res.json({error:err})
            }
        })
    }
    //console.log(result)
})

router.route('/sellerAds/:id').get((req,res)=>{
    const id=req.params.id

    user.Ad.find({seller_id:id,sold:false}).populate(['animal_id',"seller_id"]).exec((err,response)=>{
        if(err==null){
            res.json(response)
        }else{
            res.json({error:err})
        }
    })


router.route('/add/butchAd').post((req,res) => {
    const new_ad = new user.ButchAd({
        weight:req.body.weight,
        breed:req.body.breed
    })

    new_ad.save(function(err) {
        if(err) console.log(err)
        else console.log("Ad posted")
    })
})

router.route('/post/animal').post((req,res) => {
    console.log(req.body)
    const type = req.body.breed;
    const weight = req.body.weight;
    let sex = "";
    if (req.body.sex == 1)
    {
        sex = "Male";
    }
    else
    {
        sex = "Female";
    }
    const price = req.body.price;
    const photo= req.body.photo;
    const age = req.body.Age;
    const injury = req.body.injury;
    const color = req.body.color;
    const teeth = req.body.teeth;
    const new_animal = new user.animal({
        type:type,
        weight:weight,
        sex:sex,
        price:price,
        age:age,
        injury:injury,
        color:color,
        teeth:teeth
    });
    new_animal.save(function(err) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            const desc = req.body.desc;
            const sold = 0;
            const type = req.body.addType;
            const seller = req.body.sellerId;
            const animal = new_animal._id;
            const new_ad = new user.Ad({
                description: desc,
                photo:photo,
                sold:sold,
                seller_id:seller,
                animal_id: animal,
                ad_type:type //Type can either be 1 or 3 since only a buyer or seller can post ads.
            })
            new_ad.save(function (err) {
                if(err) {
                    res.json({error:err})
                }
                else {
                    const val = req.body.price;
                    const butcher = 0;
                    const bid_type = false;
                    if (req.body.addType == 1) bid_type = true; //customer has a true bid_type and seller has false bid_type
                    let new_bid = new user.bid({
                        bid_value:val,
                        ad_id: new_ad._id,
                        seller_id:seller,
                        buyer_id:null,
                        butcher_id:butcher,
                        bid_type:bid_type,
                        bid_value_original:val,
                    })
                    new_bid.save(function(err) {
                        if(err) res.json({error:err})
                        else res.json({message:"Ad Posted with Default Bid and Animal"})
                    })
                }
            })

        }
    })
})

router.route('/getLatestBid/:id').get((req,res)=>{
    const adId = req.params.id;
    user.bid.find({ad_id:adId},(err,data)=>{
        if(err){
            res.json({error:err})
        }else{
            res.json(data)
        }
    })
})


router.route('/postbid').post((req,res)=>{
    console.log(req.body)
    const bidValue = req.body.newBid;
    const bidID=req.body.id;
    const buyerId=req.body.buyer_id
    user.bid.findByIdAndUpdate({_id:bidID},{
        bid_value:bidValue,
        buyer_id:buyerId
    },(err,doc)=>{
        if(err){
            console.log(err)
        }else{
            console.log(doc);
            res.json({msg:"Bid Updated",value:bidValue})
        }
    })
})


router.route("/markSold/:id").post((req,res)=>{
    const buyerID = req.body.buyer_id
    const sellPrice = req.body.sellPrice

    user.Ad.findByIdAndUpdate(req.params.id,{
        buyer_id:buyerID,
        price:sellPrice,
        sold:true
    },function(err,docs){
        if(err){
            console.log(err)
        }else{
            res.json("Sold!")
        }
    })
})

router.route("/addToBuyer/:id").post((req,res)=>{
    const ad_id=req.body.ad_id
    user.Buyer.findOneAndUpdate({reference:req.params.id},{
        cart:ad_id
    },function(err,docs){
        if(err){
            console.log(err)
        }else{
            res.json("Added to Buyers cart!")
        }
    })
})
module.exports = router;