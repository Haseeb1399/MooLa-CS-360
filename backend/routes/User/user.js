const router = require('express').Router();
let user = require('../models/user');

router.route('/').get((req,res) => {
    user.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error '+err));
})

router.route('/add').post((req,res) => {
    const id = req.body.id;
    const name = req.body.username;
    const pass = req.body.pass;
    const permissions = req.body.permissions;
    const ban_bool = req.body.ban_bool;

    const new_user = new user({user_id:id,username:name,current_pass:pass,prev_pass:pass,permissions:permissions,ban_bool:ban_bool,});

    new_user.save()
    .then(() => res.json('User Added!'))
    .catch(err => res.json('Error ' + err));
})



module.exports = router;