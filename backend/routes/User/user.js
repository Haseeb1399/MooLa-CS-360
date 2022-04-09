const router = require('express').Router(); 
const { add } = require('nodemon/lib/rules');
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs')
let user = require('../../models/user');
const { json } = require('express');

// let multer = require('multer');

// const Storage = multer.diskStorage({
//     destination:'./FileStorage',
//     filename:(req,file,cb)=>{
//         const fileName = file.originalname.toLocaleLowerCase().split(" ").join('-')
//         cb(null,Date.now()+fileName)
//     }
// })
// const upload =multer({
//     storage:Storage,
//     fileFilter:(req,file,cb)=>{
//         if(file.mimetype=="image/png" || file.mimetype=="image/jpeg" || file.mimetype=="image/jpg"){
//             cb(null,true)
//         }else{
//             cb(null,false)
//             return cb(new Error("Invalid Image File Format"))
//         }
//     }
// })
function verifyJWT(req,res,next){
    const token=req.headers["accesstoken"]
    if(token){
        jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
            if(err) return res.json({
                isLoggedIn:false,
                message:"Failed to Authenticate"
            })
            req.user={},
            req.user.id=decoded.id,
            req.user.username=decoded.username
            next()
        })

    }else{
        res.json({message:"Incorrect Token Given",isLoggedIn:false})
    }
}

router.route('/').get((req,res) => {
    user.User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error '+err));
})

router.route('/add').post((req,res) => {
    //const id = req.body.id;
    const url = req.protocol + '://' + req.get('host')
    const name = req.body.username;
    const email=req.body.email
    const pass = req.body.pass;
    const permissions = req.body.permissions;
    const ban_bool = req.body.ban_bool;
    const new_user = new user.User({
        username:name,
        email:email,
        password:pass,
        prev_pass:pass,
        permissions:permissions,
        ban_bool:ban_bool,
    });

    new_user.save(function (err) {
        if(err) {
            console.log(err);
            res.send(err)
        }
        else {
            if (permissions == 1) {
                const address = req.body.address;
                const phone = req.body.phone;
                const email = req.body.email;   
                const new_buyer = new user.Buyer({reference: new_user._id,name:name,address:address,phone:phone,email:email,});
                new_buyer.save(function (err) {
                    if(err) {console.log(err);res.send(err)}
                    else {res.json("Buyer added")};
                })
            }else if(permissions == 2){
                const phone = req.body.phone
                const type=req.body.type
                const address=req.body.address
                const email=req.body.email
                const rating=req.body.rating
                const new_butcher = new user.Butcher({reference:new_user._id,name:name,phone:phone,type:type,rating:rating,address:address,email:email})
                new_butcher.save((err)=>{
                    if(err){
                        console.log(err);
                        res.send(err)
                    }else{
                        res.json("Butcher Added")
                    }
                })
            }else if(permissions==3){
                const address = req.body.address;
                const phone = req.body.phone;
                const email = req.body.email;
                const numSold=req.body.numSold
                const rating=req.body.rating
                const new_seller = new user.Seller({reference:new_user._id,name:name,phone:phone,address:address,email:email,numberOfAnimalsSold:numSold,rating:rating})
                new_seller.save((err)=>{
                    if(err){
                        console.log(err)
                        res.send(err)
                    }else{
                        res.json("Seller Added")
                    }
                })
            }
        }
        
    })

    
})

router.route('/login').post((req,res)=>{
    const userLogginIn = req.body
    user.User.findOne({email:userLogginIn.email}).then(dbUser=>{
        if(!dbUser){
            return res.json({
                error:"Invalid Email or Password"
            })
        }
        bcrypt.compare(userLogginIn.password,dbUser.password).then(isCorrect =>{
            if(isCorrect){
                const payload={
                    id:dbUser._id,
                    username:dbUser.username
                }
                jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:86400},(err,token)=>{
                    if(err) return res.json({message:err})
                    return res.json({message:"success",token:token,id:dbUser._id,username:dbUser.username,permission:dbUser.permissions})
                })
            }else{
                res.json({
                    error:"Invalid Email or Password"
                })
            }
        })
    })
})

router.route('/getUsername').get(verifyJWT,(req,res)=>{

    res.json({isLoggedIn:true,username:req.user.username})
})

module.exports = router;