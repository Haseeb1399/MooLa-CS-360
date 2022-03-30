const router = require('express').Router();
let user = require('../../models/user');

router.route('/').get((req,res) => {
    user.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error '+err));
})

router.route('/add').post((req,res) => {
    // const id = req.body.id;
    const name = req.body.username;
    const pass = req.body.pass;
    const permissions = req.body.permissions;
    const ban_bool = req.body.ban_bool;

    const new_user = new user.User({username:name,password:pass,prev_pass:pass,permissions:permissions,ban_bool:ban_bool,});

    new_user.save(function (err) {
        if(err) {
            console.log(err);
        }
        else {
            if (permissions == 1) {
                const address = req.body.address;
                const phone = req.body.phone;
                const email = req.body.email;
                const new_buyer = new user.Buyer({reference: new_user._id,name:name,address:address,phone:phone,email:email,});
                new_buyer.save(function (err) {
                    if(err) {console.log(err)}
                    else {res.json("user added")};
                })
            }
        }
        
    })

    
})



module.exports = router;