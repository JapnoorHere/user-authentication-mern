const User = require('../models/user');

const signupNewUser = (req,res)=>{
    const {name,email,password} = req.body;

    User.findOne({email : email})
    .then((user)=>{
        if(!user){
            const newUser = new User({
                name : name,
                email : email,
                password : password
            });

            newUser.save().then(()=>{
                res.json("User saved")
            })

        }
        else{
            res.json("User exists")
        }
    })

}

module.exports = {signupNewUser};