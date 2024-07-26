const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
},{
    timestamps : true,
    collection : 'users'
});

const User = mongoose.model('User',userSchema);
module.exports = User;