const User = require('../models/user');

const signupNewUser = (req, res) => {
    const { name, email, password } = req.body;

    User.findOne({ email: email })
        .then((user) => {
            if (!user) {
                const newUser = new User({
                    name: name,
                    email: email,
                    password: password
                });

                newUser.save().then(async () => {
                    res.json({ msg: "User saved", token: await newUser.generateToken(), userId: newUser._id.toString() })
                })

            }
            else {
                res.json("User exists")
            }
        })

}

module.exports = { signupNewUser };
