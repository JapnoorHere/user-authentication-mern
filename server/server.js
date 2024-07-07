require('dotenv').config();
const cors = require('cors');
const express = require('express');
const dbConnect = require('./db/db');
const authRouter = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());


dbConnect();

app.use(authRouter);

app.listen(PORT,()=>{
    console.log('Server listening');
})

