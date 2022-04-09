const mongoose = require('mongoose');
const bcrypt = require("bcryptjs")
const Schema = mongoose.Schema;

const UserSchema = new Schema( {
    // user_id : {
    //     type: Number,
    //     required: true,
    //     unique: true,
    //     minlength: 1
    // },
    //_id: Schema.Types.ObjectId,
    
    username: {type: String, required :true},
    password: {type: String, required : true},
    prev_pass: {type: String, required : true},
    permissions: {type: Number, required : true},
    ban_bool: {type: Boolean, required : true},
})

//Permissions:
//Buyer:1
//Butcher:2
//Seller:3

const BuyerSchema = new Schema( {
    reference: { type: Schema.Types.ObjectId, ref: 'User' },
    name: {type: String, required :true},
    address: {type: String, required : true},
    phone: {type: String, required : true},
    email: {type: String, required : true},
})
const ButcherSchema = new Schema( {
  reference: { type: Schema.Types.ObjectId, ref: 'User' },
  name: {type: String, required :true},
  phone: {type: String, required : true},
  email:{type:String,required:true},
  address:{type:String,required:true},
  type:{type:Number,required:true},
  rating:{type:Number,required:true}
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
            next()
          })
        }
      })
    } else {
      return next()
    }
  })

const User = mongoose.model('User', UserSchema);
const Buyer = mongoose.model('Buyer',BuyerSchema);
const Butcher = mongoose.model('Butcher',ButcherSchema);
const Seller = mongoose.model('Seller',SellerSchema)
// module.exports = mongoose.model('Buyer', BuyerSchema);
// module.exports = User;
module.exports = {
    User, Buyer,Butcher,Seller
}