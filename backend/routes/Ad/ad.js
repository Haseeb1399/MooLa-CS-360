const router = require('express').Router(); 
const { add } = require('nodemon/lib/rules');
let ad = require('../../models/ad');

router.route('/post/animal').post((req,res) => {
    const type = req.body.type;
    const weight = req.body.weight;
    const sex = req.body.sex;
    const price = req.body.price;
    const new_animal = new ad.animal({
        type:type,
        weight:weight,
        sex:sex,
        price:price
    });
    new_animal.save(function(err) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            const desc = req.body.desc;
            const sold = 0;
            const type = localStorage.getItem("permission");
            const seller = localStorage.getItem("id");
            const animal = new_animal._id;
            const new_ad = new ad.Ad({
                description: desc,
                sold:sold,
                seller_id:seller,
                animal_id: new_animal._id,
                ad_type:type
            })
            new_ad.save(function (err) {
                if(err) {
                    console.log(err);
                }
                else {
                    console.log("Ad Posted");
                }
            })
        }
    })
    // const desc = req.body.desc;
    // const sold = req.body.sold;
    // const type = req.body.type;
    // const seller = localStorage.getItem(id);
    // const animal = req.body.animal; //Fix this after
    // const new_ad = new ad.Ad({
    //     description:desc,
    //     sold:sold,
    //     ad_type:type,
    //     seller_id:seller,
    //     animal_id: animal
    // })
})

module.exports = router;