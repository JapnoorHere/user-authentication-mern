const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    collection: 'users'
});


userSchema.pre('save', async function (next) {

    const user = this;
    if (!user.isModified('password')) {
        next();
    }
    try {

        const saltRound = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(user.password, saltRound);

        user.password = hashPassword;
        next();
    }
    catch (error) {
        next(error)
    }

})



const User = mongoose.model('User', userSchema);
module.exports = User;
