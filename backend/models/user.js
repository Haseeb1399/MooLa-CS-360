const mongoose = require('mongoose');
const bcrypt = require("bcryptjs")
const Schema = mongoose.Schema;
//changed ad. to user. in ad.js routes and removed user.seller and user.buyer here
const UserSchema = new Schema( {
    // user_id : {
    //     type: Number,
    //     required: true,
    //     unique: true,
    //     minlength: 1
    // },
    //_id: Schema.Types.ObjectId,
    
    username: {type: String, required :true},
    salt: {type:String},
    password: {type: String, required : true},
    email:{type:String,required:true},
    prev_pass: {type: String, required : true},
    permissions: {type: Number, required : true},
    ban_bool: {type: Boolean, required : true},
    verified:{type:Boolean,default:false},
    photo:{type:String,default:"null"},
})
const ButcherAdSchema = new Schema({
  weight:{type:Number, required:true},
  breed: {type:String, required:true},
  seller_id :{type: Schema.Types.ObjectId, ref:"User"}
})

const ButcherWatch = new Schema({
  weight:{type:Number, required:true},
  breed: {type:String, required:true},
  seller_id :{type: Schema.Types.ObjectId, ref:"User"}
})

//Permissions:
//Buyer:1
//Butcher:2
//Seller:3
//Admin: 4

const BuyerSchema = new Schema( {
    reference: { type: Schema.Types.ObjectId, ref: 'User' },
    name: {type: String, required :true},
    address: {type: String, required : true},
    phone: {type: String, required : true},
    email: {type: String, required : true},
    cart:{type:Schema.Types.ObjectId,ref:'Ad'},
    log:[Schema.Types.ObjectId]
})
const ButcherSchema = new Schema( {
  reference: { type: Schema.Types.ObjectId, ref: 'User' },
  name: {type: String, required :true},
  phone: {type: String, required : true},
  email:{type:String,required:true},
  address:{type:String,required:true},
  type:{type:Number,required:true}, //1 for small, 2 for big, 3 for both
  rating:{type:Number,required:true}
})

const AdminSchema = new Schema( {
  reference: { type: Schema.Types.ObjectId, ref: 'User' },
  name: {type: String, required :true},
  phone: {type: String, required : true},
  email: {type: String, required : true},
})

const SellerSchema = new Schema( {
  reference: { type: Schema.Types.ObjectId, ref: 'User' },
  name: {type: String, required :true},
  address: {type: String, required : true},
  phone: {type: String, required : true},
  email: {type: String, required : true},
  rating:{type:Number,required:true},
  numberOfAnimalsSold:{type:Number,required:true}
})


UserSchema.pre("save", function (next) {
    const user = this
  
    if (this.isModified("password") || this.isNew) {
      bcrypt.genSalt(10, function (saltError, salt) {
        if (saltError) {
          return next(saltError)
        } else {
          bcrypt.hash(user.password, salt, function(hashError, hash) {
            if (hashError) {
              return next(hashError)
            }
            user.password = hash
            user.prev_pass = hash
            user.salt = salt
            next()
          })
        }
      })
    } else {
      return next()
    }
  })


  const AnimalSchema = new Schema({
    type: {type: String, required:true},
    weight: {type: Number, required:true},
    sex: {type: String, required:true},
    price: {type: Number, required:true}, //add teeth
    teeth: {type: Number, required: true},
    price: {type:Number, required: true},
    age:{type:Number, required:true},
    injury:{type:String},
    color:{type:String, required:true}
})

const AdSchema = new Schema({
    
    description: {type: String, required: true},
    photo:{type:String},
    sold: {type: Boolean, required: true},
    seller_id: {type: Schema.Types.ObjectId, ref: 'User'},
    animal_id: {type: Schema.Types.ObjectId, required: true, ref: 'Animal'},
    ad_type: {type: Number, required: true},
    buyer_id:{type:Schema.Types.ObjectId, ref:"Buyer"},
    price:{type:Number,default:0}
})

const AdSchema1 = new Schema({
    description: {type: String, required: true},
    photo:{type:String},
    sold: {type: Boolean, required: true},
    seller_id: {type: Schema.Types.ObjectId, ref: "Seller"},
    seller_name: {type:String, required:true},
    animal_id: {type: Schema.Types.ObjectId, required: true, ref: 'Animal'},
    animal_breed: {type: String, required: true},
    animal_weight: {type: Number, required: true},
    animal_sex: {type: String, required: true},
    animal_teeth: {type: Number, required: true, ref: "Animal"},
    animal_price: {type:Number, required: true, ref: "Animal"},
    ad_type: {type: Number, required: true}
})

const BidSchema = new Schema({
    bid_value: {type:Number},
    ad_id: {type: Schema.Types.ObjectId, ref: 'Ad',},
    seller_id: {type: Schema.Types.ObjectId, ref: "Seller"},
    buyer_id: {type: Schema.Types.ObjectId, ref: "Buyer"},
    butcher_id: {type:Number}, //Not planning on using this since we have 2 actors in each bid
    bid_type: {type: Boolean, required: true},
    bid_value_original:{type:Number}
})

const WatchListSchema = new Schema({
  ad_id:{type: Schema.Types.ObjectId, ref: "Ad"},
  buyer_id: {type: Schema.Types.ObjectId, ref:"User"},
  seller_id: {type: Schema.Types.ObjectId, ref:"User"},
  animal_id:{type: Schema.Types.ObjectId, ref:"Animal"}
})

const TokenSchema = new Schema({
  userId:{type:Schema.Types.ObjectId,required:true,ref: "User"},
  token:{type:String,required:true},
  createdAt:{type:Date,default:Date.now(),expires:3600}
})

const OrderSchema= new Schema({
  buyer_id:{type: Schema.Types.ObjectId, ref:"Buyer"},
  ad_id:{type: Schema.Types.ObjectId,ref:"Ad"},
  delivery:{type:String},
  status:{type:String}
})


const User = mongoose.model('User', UserSchema);
const Buyer = mongoose.model('Buyer',BuyerSchema);
const Butcher = mongoose.model('Butcher',ButcherSchema);
const Seller = mongoose.model('Seller',SellerSchema)
const Ad = mongoose.model('Ad', AdSchema);
const Ad1 = mongoose.model('Ad1',AdSchema1)
const animal = mongoose.model('Animal',AnimalSchema);
const bid = mongoose.model('Bid', BidSchema);
const watch = mongoose.model('Watch', WatchListSchema);
const Token = mongoose.model('Token',TokenSchema)
const ButchAd = mongoose.model('ButcherAd',ButcherAdSchema);
const Admin = mongoose.model('Admin', AdminSchema);
const ButchWatch = mongoose.model('Bwatch', ButcherWatch);
const Order = mongoose.model("Order",OrderSchema)
// module.exports = mongoose.model('Buyer', BuyerSchema);
// module.exports = User;
module.exports = {
    User, Buyer,Butcher,Seller,Ad,animal,bid,Ad1, watch,Token, ButchAd, Admin,ButchWatch,Order}
