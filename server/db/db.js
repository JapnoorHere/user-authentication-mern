const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = () => {

    try {
        mongoose.connect(process.env.DB_URL);
        console.log('Db Connected');
    } catch (error) {
        console.log(error);
    }

    // mongoose.connection.once(() => {
    //     console.log("DB Connected");
    // })

}
module.exports = dbConnect;