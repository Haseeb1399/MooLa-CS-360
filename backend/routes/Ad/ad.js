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

router.route('/post/animal').post(upload.single('photo'),(req,res) => {
    const type = req.body.breed;
    const weight = req.body.weight;
    const sex = req.body.sex;
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
                ad_type:type
            })
            new_ad.save(function (err) {
                if(err) {
                    res.json({error:err})
                }
                else {
                    res.json({message:"Add Posted"});
                }
            })
        }
    })
})


module.exports = router;