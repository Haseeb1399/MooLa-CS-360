const mongoose = require('mongoose');
const bcrypt = require("bcryptjs")
const Schema = mongoose.Schema;
//import {Blob} from 'buffer';
let user = require('./user.js')



const AnimalSchema = new Schema({
    type: {type: Number, required:true},
    weight: {type: Number, required:true},
    sex: {type: String, required:true},
    price: {type: Number, required:true}
})

const AdSchema = new Schema({
    
    description: {type: String, required: true},
   // photo: {type: Blob},
    //video: {type: Blob},
    sold: {type: Boolean, required: true},
    seller_id: {type: Schema.Types.ObjectId, ref: user.Seller},
    animal_id: {type: Schema.Types.ObjectId, required: true, ref: 'Animal'},
    ad_type: {type: Number, required: true}
})

const Ad = mongoose.model('Ad', AdSchema);
const animal = mongoose.model('Animal',AnimalSchema);
module.exports = {Ad,animal};