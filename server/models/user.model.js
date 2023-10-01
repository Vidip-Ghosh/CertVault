const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const userSchema = new Schema({
    userName:{
        type: String,
        unique:true
    },
    email :{
        type: String,
        unique:true
    },
    password : String

})
const User = mongoose.model('User', userSchema);

module.exports = User;
