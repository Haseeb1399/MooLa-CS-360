const router = require('express').Router(); 
const { add } = require('nodemon/lib/rules');
let user = require('../../models/user');
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

router.route('/').get((req,res) => {
    user.User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error '+err));
})

router.route('/add').post((req,res) => {
    //const id = req.body.id;
    const url = req.protocol + '://' + req.get('host')
    const name = req.body.username;
    const pass = req.body.pass;
    const permissions = req.body.permissions;
    const ban_bool = req.body.ban_bool;
    const new_user = new user.User({
        username:name,
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



module.exports = router;