const router = require('express').Router(); 
const { add } = require('nodemon/lib/rules');
let ad = require('../../models/ad');

router.route('/post/animal').post((req,res) => {
    const desc = req.body.desc;
    const sold = req.body.sold;
    const type = req.body.type;
    const seller = localStorage.getItem(id);
    const animal = req.body.animal; //Fix this after
    const new_ad = new ad.Ad({
        description:desc,
        sold:sold,
        ad_type:type,
        seller_id:seller,
        animal_id: animal
    })
})

module.exports = router;