const router = require('express').Router(); 
const { add } = require('nodemon/lib/rules');
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs')
let user = require('../../models/user');
const { json } = require('express');
const sendEmail = require("../../utils/sendEmail")
const crypto = require("crypto")


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

router.route('/find').get((req,res) => {
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

        const token = new user.Token({
          userId:new_user._id,
          token:crypto.randomBytes(32).toString("hex")
        }).save().then(res=>{
        console.log(res)
        const url = `${process.env.BASE_URL}/User/${new_user._id}/verify/${res.token}`;
        sendEmail(new_user.email,"Verify Email",url);
        })
    })

    
})

router.route('/:id/verify/:token').get(async(req,res)=>{

    try{
        const findUser = await user.User.findOne({_id:req.params.id});
        if(!findUser) return res.status(400).send({message:"Invalid Link"})

        const token = await user.Token.findOne({
            userId:findUser._id,
            token:req.params.token
        })
        if(!token) return res.status(400).send({message:"Token does not exist"})
        await user.User.updateOne({_id:user._id,verified:true});
        await token.remove()
        res.status(200).send({message:"Email Verified Success"})
    }catch(err){
        console.log(err)
        res.status(500).send({message:"Internal Server Error"})
    }
})


router.route('/login').post((req,res)=>{
    const userLogginIn = req.body
    user.User.findOne({email:userLogginIn.email}).then(dbUser=>{
        if(!dbUser){
            return res.json({
                error:"Invalid Email or Password"
            })
        }
        if(dbUser.verified == false){
            res.json({error:"User Not Verified! Please check your email and verify!"})
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

router.route('/ban').post(async (req,res)=>{
    // console.log(req.body);
    const email = req.body
    // console.log(email)
    
        
    user.User.findOne(email).then((dbUser)=>{
        dbUser.ban_bool = true;
        dbUser.save()
        res.json("User Banned");
    }).catch((err)=>{
        console.log(err);
    })
    
    
})


router.route('/getDetails/:id').get((req,res)=>{
    user.User.findById(req.params.id).then((data)=>{
        res.json({data:data})
    }).catch((err)=>{
        res.json({error:err})
    })
})

router.route('/removePicture/:id').get((req,res)=>{
    user.User.findByIdAndUpdate(req.params.id,{photo:"null"}).then(data=>{
        res.json({message:"Photo removed"})
    }).catch((err)=>{
        res.json({error:"Internal Error"})
    })
})

router.route('/updatePicture/:id').post((req,res)=>{
    console.log(req.body)
    const url = req.body.url
    user.User.findByIdAndUpdate(req.params.id,{photo:url}).then((data)=>{
        res.json({message:"Photo updated"})
    }).catch((err)=>{
        res.json({error:"Internal Error"})
    })
})

module.exports = router;