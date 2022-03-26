const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema( {
    user_id : {
        type: Number,
        required: true,
        unique: true,
        minlength: 1
    },
    username: {type: String, required :true},
    current_pass: {type: String, required : true},
    prev_pass: {type: String, required : true},
    permissions: {type: Number, required : true},
    ban_bool: {type: Boolean, required : true}
})

const User = mongoose.model('User', userSchema);

module.exports = User;