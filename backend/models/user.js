const mongoose = require('mongoose');
const bcrypt = require("bcryptjs")
const Schema = mongoose.Schema;

const UserSchema = new Schema( {
    user_id : {
        type: Number,
        required: true,
        unique: true,
        minlength: 1
    },
    username: {type: String, required :true},
    password: {type: String, required : true},
    prev_pass: {type: String, required : true},
    permissions: {type: Number, required : true},
    ban_bool: {type: Boolean, required : true}
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
            next()
          })
        }
      })
    } else {
      return next()
    }
  })

const User = mongoose.model('User', UserSchema);

module.exports = User;