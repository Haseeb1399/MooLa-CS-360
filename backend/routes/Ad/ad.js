const router = require('express').Router(); 
const { add } = require('nodemon/lib/rules');
const multer = require('multer');
let ad = require('../../models/ad');

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

router.route('/marketplace').get((req,res) => {
    ad.Ad.find({})
    .populate(['seller_id','animal_id'])
    .exec((err,response)=>{
        if (err == null)
        {
            console.log("here")
            res.json(response);
        }
    })
    //console.log(result)
})

router.route('/post/animal').post(upload.single('photo'),(req,res) => {
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
    const photo= req.file.filename
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
            const type = req.body.addType;
            const seller = req.body.sellerId;
            const animal = new_animal._id;
            const new_ad = new ad.Ad({
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
                    const val = req.body.val;
                    const butcher = 0;
                    const bid_type = false;
                    if (req.body.addType == 1) bid_type = true; //customer has a true bid_type and seller has false bid_type
                    const new_bid = new ad.bid({
                        bid_value:val,
                        ad_id: new_ad._id,
                        seller_id:seller,
                        buyer_id:null,
                        butcher_id:butcher,
                        bid_type:bid_type
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


module.exports = router;