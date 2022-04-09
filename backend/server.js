const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/User/user');
const adRouter = require('./routes/Ad/ad');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


//const uri = process.env.ATLAS_URI;
const uri = "mongodb://localhost:27017"
mongoose.connect(uri, {useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Database connection established");
})

app.use('/User',userRouter);
app.use('/Ad',adRouter);

app.listen(port, () => {
    console.log(`server is running on port : ${port}`);
});