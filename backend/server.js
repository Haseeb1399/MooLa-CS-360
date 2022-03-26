const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Database connection established");
})

const userRouter = require('./routes/user');

app.use('/User',userRouter);

app.listen(port, () => {
    console.log(`server is running on port : ${port}`);
});