const mongoose = require('mongoose');
const bcrypt = require("bcryptjs")
const Schema = mongoose.Schema;
//import {Blob} from 'buffer';
let user = require('./user.js')

const AdSchema = new Schema({
    description: {type: String, required: true},
   // photo: {type: Blob},
    //video: {type: Blob},
    sold: {type: Boolean, required: true},
    seller_id: {type: Schema.Types.ObjectId, ref: user.Seller},
    animal_id: {type: Number, required: true},
    ad_type: {type: Number, required: true}
})

const Ad = mongoose.model('Ad', AdSchema);
module.exports = {Ad};