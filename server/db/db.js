const mongoose = require('mongoose')
require('dotenv').config();
const username = process.env.USERNAME
const password = process.env.PASSWORD

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.tjf5irn.mongodb.net/?retryWrites=true&w=majority`).then(()=>{
    console.log('Connected to the database');
})
.catch(()=>{
    console.log('Error');
})

const newSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type : String,
        unique: true,
        required: [true,'Username is Required']
    },
    password: {
        type:String,
        required: true
    }
})

const collection = mongoose.model('collection',newSchema);
module.exports = collection