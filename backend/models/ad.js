const mongoose = require('mongoose');
const bcrypt = require("bcryptjs")
const Schema = mongoose.Schema;
//import {Blob} from 'buffer';
let user = require('./user.js');
const { stringify } = require('querystring');



const AnimalSchema = new Schema({
    type: {type: String, required:true},
    weight: {type: Number, required:true},
    sex: {type: String, required:true},
    price: {type: Number, required:true}
})

const AdSchema = new Schema({
    
    description: {type: String, required: true},
    photo:{type:String},
    sold: {type: Boolean, required: true},
    seller_id: {type: Schema.Types.ObjectId, ref: user.Seller},
    animal_id: {type: Schema.Types.ObjectId, required: true, ref: 'Animal'},
    ad_type: {type: Number, required: true}
})

const AdSchema1 = new Schema({
    description: {type: String, required: true},
    photo:{type:String},
    sold: {type: Boolean, required: true},
    seller_id: {type: Schema.Types.ObjectId, ref: user.Seller},
    seller_name: {type:String, required:true},
    animal_id: {type: Schema.Types.ObjectId, required: true, ref: 'Animal'},
    animal_breed: {type: String, required: true},
    animal_weight: {type: Number, required: true},
    animal_sex: {type: String, required: true},
    animal_teeth: {type: Number, required: true},
    animal_price: {type:Number, required: true},
    ad_type: {type: Number, required: true}
})

const BidSchema = new Schema({
    bid_value: {type:Number},
    ad_id: {type: Schema.Types.ObjectId, ref: 'Ad',},
    seller_id: {type: Schema.Types.ObjectId, ref: user.Seller},
    buyer_id: {type: Schema.Types.ObjectId, ref: user.Buyer},
    butcher_id: {type:Number}, //Not planning on using this since we have 2 actors in each bid
    bid_type: {type: Boolean, required: true}

})

const Ad = mongoose.model('Ad', AdSchema);
const animal = mongoose.model('Animal',AnimalSchema);
const bid = mongoose.model('Bid', BidSchema);
